import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const siteUrl = 'https://www.shapoorji-vyomora.com/';

async function getClient() {
  let credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const serviceAccountFile = path.resolve(process.cwd(), 'service_account.json');
  if (!credentialsJson && fs.existsSync(serviceAccountFile)) {
    credentialsJson = fs.readFileSync(serviceAccountFile, 'utf8');
  }
  if (!credentialsJson) throw new Error('Missing service_account.json');
  const credentials = JSON.parse(credentialsJson);
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/webmasters',
      'https://www.googleapis.com/auth/webmasters.readonly',
      'https://www.googleapis.com/auth/indexing'
    ]
  });
  return auth.getClient();
}

async function run() {
  console.log('=== DEEP GOOGLE SEARCH CONSOLE AUDIT ===\n');
  const client = await getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client as any });

  // 1. Fetch Daily Performance for the last 90 days
  const today = new Date();
  const endDate = new Date(today.getTime() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const startDate = new Date(today.getTime() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  console.log(`Querying GSC Performance from ${startDate} to ${endDate} for ${siteUrl}...`);
  try {
    const dailyRes = await sc.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['date'],
        rowLimit: 100
      }
    });

    const rows = dailyRes.data.rows || [];
    console.log(`\nFound ${rows.length} days of data:`);
    console.log('Date       | Impr | Clicks | CTR    | Avg Pos');
    console.log('-----------+------+--------+--------+--------');
    for (const r of rows) {
      const d = r.keys?.[0];
      const imp = r.impressions || 0;
      const clk = r.clicks || 0;
      const ctr = ((r.ctr || 0) * 100).toFixed(1) + '%';
      const pos = (r.position || 0).toFixed(1);
      console.log(`${d} | ${String(imp).padStart(4)} | ${String(clk).padStart(6)} | ${String(ctr).padStart(6)} | ${String(pos).padStart(7)}`);
    }
  } catch (e: any) {
    console.error('Analytics daily failed:', e.message);
  }

  // 2. Fetch Sitemaps status
  console.log('\n--- Sitemaps Status in GSC ---');
  try {
    const smRes = await sc.sitemaps.list({ siteUrl });
    for (const sm of (smRes.data.sitemap || [])) {
      console.log(`Sitemap: ${sm.path}`);
      console.log(`  Last Submitted: ${sm.lastSubmitted}`);
      console.log(`  Last Downloaded: ${sm.lastDownloaded}`);
      console.log(`  Is Pending: ${sm.isPending}`);
      console.log(`  Warnings: ${sm.warnings}, Errors: ${sm.errors}`);
      if (sm.contents) {
        for (const c of sm.contents) {
          console.log(`  Content: type=${c.type}, submitted=${c.submitted}, indexed=${c.indexed}`);
        }
      }
    }
  } catch (e: any) {
    console.error('Sitemaps list failed:', e.message);
  }

  // 3. Detailed Inspection of Key Pages
  console.log('\n--- Inspecting 10 Critical URLs in GSC Index ---');
  const testUrls = [
    'https://www.shapoorji-vyomora.com/',
    'https://www.shapoorji-vyomora.com/residences',
    'https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects',
    'https://www.shapoorji-vyomora.com/projects/joyville-vyomora-hinjewadi',
    'https://www.shapoorji-vyomora.com/projects/joyville-sensorium',
    'https://www.shapoorji-vyomora.com/west-pune-real-estate',
    'https://www.shapoorji-vyomora.com/location',
    'https://www.shapoorji-vyomora.com/amenities',
    'https://www.shapoorji-vyomora.com/market/mahalunge-township/family-apartments/construction-update',
    'https://www.shapoorji-vyomora.com/market/kalyani-nagar/sky-duplex/brochure-download'
  ];

  for (const u of testUrls) {
    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: u, siteUrl }
      });
      const r = res.data.inspectionResult?.indexStatusResult;
      console.log(`\nURL: ${u}`);
      console.log(`  Verdict: ${r?.verdict}`);
      console.log(`  Coverage: ${r?.coverageState}`);
      console.log(`  Robots: ${r?.robotsTxtState}`);
      console.log(`  Indexing: ${r?.indexingState}`);
      console.log(`  Last Crawl: ${r?.lastCrawlTime}`);
      console.log(`  Page Fetch: ${r?.pageFetchState}`);
      console.log(`  Google Canonical: ${r?.googleCanonical}`);
      console.log(`  User Canonical: ${r?.userCanonical}`);
      console.log(`  Mobile Usability: ${res.data.inspectionResult?.mobileUsabilityResult?.verdict}`);
    } catch (e: any) {
      console.log(`\nURL: ${u} - Error: ${e.message}`);
    }
  }
}

run().catch(console.error);
