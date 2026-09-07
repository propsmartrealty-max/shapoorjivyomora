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

// 3. Process & Flatten HTML Pages
function processHtmlDir(currentDir, targetBase) {
  if (!fs.existsSync(currentDir)) return;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);

    if (entry.isDirectory()) {
      processHtmlDir(fullPath, targetBase);
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
    }
  }
}

processHtmlDir(nextAppDir, distDir);

// 4. Copy Cloudflare Declarative Configs
for (const file of ['_headers', '_routes.json']) {
  const src = path.join(rootDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distDir, file));
  }
}

console.log('✅ Cloudflare Pages distribution generated successfully in ./dist');
