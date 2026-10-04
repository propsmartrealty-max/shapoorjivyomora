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
      
      if (entry.name === 'index.html') {
        const dest = path.join(distDir, relPath);
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(fullPath, dest);
      } else {
        // e.g. amenities.html -> dist/amenities/index.html
        const baseName = entry.name.replace(/\.html$/, '');
        const parentDir = path.dirname(relPath);
        const dest = path.join(distDir, parentDir, baseName, 'index.html');
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(fullPath, dest);

        // Also keep direct amenities.html for direct URL matching
        const directDest = path.join(distDir, parentDir, `${baseName}.html`);
        fs.copyFileSync(fullPath, directDest);
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
    '/', '/residences', '/amenities', '/masterplan', '/specifications',
    '/location', '/locations', '/shapoorji-pallonji-pune-projects',
    '/investment-calculator', '/vision', '/lifestyle', '/gallery',
    '/sustainability', '/updates', '/contact', '/articles', '/sitemap'
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
