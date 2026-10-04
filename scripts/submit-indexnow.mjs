import https from 'https';
import fs from 'fs';
import path from 'path';

const host = 'www.shapoorji-vyomora.com';
const key = '4b8c9d2e1f7a4e6b8c9d2e1f7a4e6b8c';
const keyLocation = `https://${host}/${key}.txt`;

// Read all URLs from sitemap.xml if available
let urlList = [];
const sitemapPath = path.resolve(process.cwd(), 'dist', 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const matches = content.match(/<loc>(https:\/\/[^<]+)<\/loc>/g);
  if (matches) {
    urlList = matches.map(m => m.replace(/<\/?loc>/g, '').trim());
  }
}

// Fallback if sitemap not found
if (urlList.length === 0) {
  urlList = [
    `https://${host}/`,
    `https://${host}/residences`,
    `https://${host}/amenities`,
    `https://${host}/masterplan`,
    `https://${host}/specifications`,
    `https://${host}/location`,
    `https://${host}/locations`,
    `https://${host}/shapoorji-pallonji-pune-projects`,
    `https://${host}/investment-calculator`,
    `https://${host}/vision`,
    `https://${host}/lifestyle`,
    `https://${host}/gallery`,
    `https://${host}/sustainability`,
    `https://${host}/updates`,
    `https://${host}/contact`,
    `https://${host}/articles`,
    `https://${host}/articles/shapoorji-pallonji-joy-3-0-hinjewadi-launch-price-review`,
    `https://${host}/articles/shapoorji-pallonji-pune-projects-master-portfolio-guide`,
    `https://${host}/articles/luxury-3bhk-4bhk-duplex-apartments-in-baner-mahalunge`,
    `https://${host}/articles/premium-2bhk-flats-near-hinjewadi-it-park`,
    `https://${host}/articles/shapoorji-pallonji-joyville-vyomora-township-project-details`,
    `https://${host}/articles/joyville-sensorium-vs-joyville-vyomora-hinjewadi`,
    `https://${host}/articles/hinjewadi-metro-line-3-impact-on-property-prices`,
    `https://${host}/articles/shapoorji-pallonji-pune-projects-2026-guide`,
    `https://${host}/articles/why-invest-in-mahalunge-hinjewadi-it-corridor`,
    `https://${host}/articles/32000-sq-ft-clubhouse-amenities-at-vyomora`,
    `https://${host}/articles/nri-investment-guide-pune-luxury-real-estate`,
    `https://${host}/sitemap`
  ];
}

const payload = JSON.stringify({
  host,
  key,
  keyLocation,
  urlList
});

console.log(`📡 Submitting all ${urlList.length} verified canonical URLs to IndexNow...`);

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(payload)
  }
};

const req = https.request(options, (res) => {
  console.log(`✅ IndexNow Response Status: ${res.statusCode} ${res.statusMessage}`);
  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(`❌ IndexNow Error: ${e.message}`);
});

req.write(payload);
req.end();
