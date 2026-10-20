import * as fs from 'fs';
import * as path from 'path';

interface GSCPage {
  url: string;
  impressions: number;
  clicks: number;
  position: number;
}

const data: GSCPage[] = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'scripts/gsc-urls.json'), 'utf8'));

console.log(`Total URLs in GSC: ${data.length}`);

// Categorize URLs
const categories: Record<string, GSCPage[]> = {
  market: [],
  articles: [],
  projects: [],
  core: [],
  other: []
};

for (const item of data) {
  try {
    const parsed = new URL(item.url);
    const pathname = parsed.pathname;
    if (pathname.startsWith('/market/')) {
      categories.market.push(item);
    } else if (pathname.startsWith('/articles/')) {
      categories.articles.push(item);
    } else if (pathname.startsWith('/projects/')) {
      categories.projects.push(item);
    } else {
      categories.core.push(item);
    }
  } catch {
    categories.other.push(item);
  }
}

console.log(`Market URLs: ${categories.market.length}`);
console.log(`Articles URLs: ${categories.articles.length}`);
console.log(`Projects URLs: ${categories.projects.length}`);
console.log(`Core URLs: ${categories.core.length}`);

// Check which market URLs exist in dist
const distDir = path.resolve(process.cwd(), 'dist');
let missingInDist = 0;
let existingInDist = 0;
const missingHighValue: GSCPage[] = [];

for (const item of categories.market) {
  const parsed = new URL(item.url);
  const relPath = parsed.pathname.replace(/^\//, '');
  const htmlPath1 = path.join(distDir, relPath, 'index.html');
  const htmlPath2 = path.join(distDir, `${relPath}.html`);
  
  if (fs.existsSync(htmlPath1) || fs.existsSync(htmlPath2)) {
    existingInDist++;
  } else {
    missingInDist++;
    if (item.clicks > 0 || item.impressions >= 3 || item.position <= 20) {
      missingHighValue.push(item);
    }
  }
}

console.log(`\nMarket URLs in Dist: ${existingInDist} exist, ${missingInDist} MISSING!`);
console.log(`Missing high-value market URLs: ${missingHighValue.length}`);
console.log('\nTop 30 Missing High-Value URLs:');
missingHighValue.sort((a, b) => (b.clicks * 1000 + b.impressions) - (a.clicks * 1000 + a.impressions));
for (const p of missingHighValue.slice(0, 30)) {
  console.log(`  ${p.url} | Impr: ${p.impressions} | Clicks: ${p.clicks} | Pos: ${p.position.toFixed(1)}`);
}
