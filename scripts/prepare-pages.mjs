import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const nextAppDir = path.join(rootDir, '.next', 'server', 'app');
const nextStaticDir = path.join(rootDir, '.next', 'static');
const publicDir = path.join(rootDir, 'public');
const distDir = path.join(rootDir, 'dist');

console.log('⚡ Preparing Cloudflare Pages production distribution in ./dist...');

// Ensure clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

// 1. Copy Public Assets
if (fs.existsSync(publicDir)) {
  fs.cpSync(publicDir, distDir, { recursive: true });
}

// 2. Copy Next.js Static Chunks to dist/_next/static
const distNextStatic = path.join(distDir, '_next', 'static');
fs.mkdirSync(distNextStatic, { recursive: true });
if (fs.existsSync(nextStaticDir)) {
  fs.cpSync(nextStaticDir, distNextStatic, { recursive: true });
}

// 3. Process & Flatten HTML Pages and Route Bodies (.xml, .txt, .webmanifest)
function processNextServerDir(currentDir, targetBase) {
  if (!fs.existsSync(currentDir)) return;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      processNextServerDir(fullPath, targetBase);
    } else if (entry.name.endsWith('.html')) {
      const relPath = path.relative(nextAppDir, fullPath);
      let content = fs.readFileSync(fullPath, 'utf8');
      // Optimize Next.js hydration scripts: replace async="" with defer="" so first paint paints instantaneously without main thread blocking
      content = content.replace(/(<script\s+[^>]*?src=[\"'][^\"']+[\"'][^>]*?)\s+async=[\"'][\"']/gi, '$1 defer=""');

      // Inline critical CSS stylesheets into <head> to completely eliminate render-blocking CSS network round trips
      content = content.replace(/<link\s+rel="stylesheet"\s+href="(\/_next\/static\/css\/[^"]+\.css)"([^>]*?)\/?>/gi, (match, href) => {
        const cssFilename = path.basename(href);
        const cssDiskPath = path.join(nextStaticDir, 'css', cssFilename);
        if (fs.existsSync(cssDiskPath)) {
          const cssContent = fs.readFileSync(cssDiskPath, 'utf8');
          return `<style data-href="${href}">${cssContent}</style><link rel="preload" href="${href}" as="style" />`;
        }
        return match;
      });

      // Guarantee global hreflang tags in <head> for Google global ranking
      const cleanPath = (relPath === 'index.html' || entry.name === 'index.html' && relPath === 'index.html')
        ? '/'
        : '/' + relPath.replace(/\.html$/, '').replace(/\/index$/, '');
      const pageCanonical = cleanPath === '/'
        ? 'https://www.shapoorji-vyomora.com/'
        : `https://www.shapoorji-vyomora.com${cleanPath}`;

      const hreflangTags = `
<link rel="alternate" hreflang="en-IN" href="${pageCanonical}" />
<link rel="alternate" hreflang="en-US" href="${pageCanonical}" />
<link rel="alternate" hreflang="en-AE" href="${pageCanonical}" />
<link rel="alternate" hreflang="en-GB" href="${pageCanonical}" />
<link rel="alternate" hreflang="en-SG" href="${pageCanonical}" />
<link rel="alternate" hreflang="en-CA" href="${pageCanonical}" />
<link rel="alternate" hreflang="en-AU" href="${pageCanonical}" />
<link rel="alternate" hreflang="x-default" href="${pageCanonical}" />`;
      if (!content.includes('hreflang="en-IN"')) {
        content = content.replace('</head>', `${hreflangTags}\n</head>`);
      }
      
      if (entry.name === 'index.html') {
        const dest = path.join(distDir, relPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, content, 'utf8');
      } else {
        // e.g. amenities.html -> dist/amenities/index.html
        const baseName = entry.name.replace(/\.html$/, '');
        const parentDir = path.dirname(relPath);
        const dest = path.join(distDir, parentDir, baseName, 'index.html');
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.writeFileSync(dest, content, 'utf8');

        // Also keep direct amenities.html for direct URL matching
        const directDest = path.join(distDir, parentDir, `${baseName}.html`);
        fs.writeFileSync(directDest, content, 'utf8');

        // Ensure Cloudflare Pages root 404.html exists and is strictly noindexed
        if (entry.name === '_not-found.html' || entry.name === 'not-found.html' || baseName === '404') {
          let notFoundContent = content;
          notFoundContent = notFoundContent.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi, '');
          if (!notFoundContent.includes('noindex')) {
            notFoundContent = notFoundContent.replace('</head>', '<meta name="robots" content="noindex, nofollow" />\n</head>');
          }
          const notFoundDest = path.join(distDir, '404.html');
          fs.writeFileSync(notFoundDest, notFoundContent, 'utf8');
          console.log(`  🚨 Output Cloudflare Pages 404 handler: dist/404.html (${notFoundContent.length} bytes)`);
        }
      }
    } else if (entry.name.endsWith('.body')) {
      // e.g. sitemap.xml.body -> dist/sitemap.xml
      const realName = entry.name.replace(/\.body$/, '');
      const relPath = path.relative(nextAppDir, path.join(currentDir, realName));
      const dest = path.join(distDir, relPath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(fullPath, dest);
      console.log(`  📄 Output static route: ${relPath} (${fs.statSync(dest).size} bytes)`);
    }
  }
}

processNextServerDir(nextAppDir, distDir);

// 4. Verify & Guarantee sitemap.xml exists
const distSitemapPath = path.join(distDir, 'sitemap.xml');
if (!fs.existsSync(distSitemapPath) || fs.statSync(distSitemapPath).size < 100) {
  console.log('⚠️ Generating fallback standalone sitemap.xml in dist...');
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const now = new Date().toISOString();
  const defaultUrls = [
    '/', '/projects', '/developers/shapoorji-pallonji-pune',
    '/guides/shapoorji-pallonji-projects-pune-comparison',
    '/shapoorji-pallonji-pune-projects', '/west-pune-real-estate',
    '/projects/joyville-vyomora-hinjewadi', '/projects/joyville-sensorium',
    '/projects/shapoorji-pallonji-vanaha', '/projects/vanaha-golfland',
    '/projects/joyville-hadapsar-annexe', '/projects/joyville-celestia',
    '/projects/wildernest-sp-kingstown', '/projects/joyville-sky-luxe-edition',
    '/projects/joyville-hinjewadi', '/projects/vanaha-verdant', '/projects/vanaha-springs',
    '/residences', '/amenities', '/masterplan', '/specifications',
    '/location', '/locations',
    '/investment-calculator', '/vision', '/lifestyle', '/gallery',
    '/sustainability', '/updates', '/contact', '/articles', '/sitemap',
    '/privacy-policy', '/terms'
  ];
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;
  for (const u of defaultUrls) {
    sitemapXml += `\n  <url>\n    <loc>${baseUrl}${u === '/' ? '/' : u}</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>${u === '/' ? 'daily' : 'weekly'}</changefreq>\n    <priority>${u === '/' ? '1.0' : '0.8'}</priority>\n  </url>`;
  }
  sitemapXml += `\n</urlset>`;
  fs.writeFileSync(distSitemapPath, sitemapXml, 'utf8');
}
console.log(`✅ sitemap.xml verified in dist (${fs.statSync(distSitemapPath).size} bytes)`);

// 5. Copy Cloudflare Declarative Configs
for (const file of ['_headers', '_routes.json']) {
  const src = path.join(rootDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
  }
}

console.log('✅ Cloudflare Pages distribution generated successfully in ./dist');
