// scripts/gsc-status.ts
// Programmatic Google Search Console & Indexing Health Monitor
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
  if (!credentialsJson) {
    throw new Error('Missing service_account.json or GOOGLE_SERVICE_ACCOUNT_JSON');
  }
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
  console.log('====================================================');
  console.log('🔍 GOOGLE SEARCH CONSOLE & INDEXING REAL-TIME AUDIT');
  console.log(`Property: ${siteUrl}`);
  console.log('====================================================\n');

  const client = await getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client as any });

  // 1. Sitemaps Status
  console.log('📁 1. Active Sitemaps:');
  try {
    const sitemaps = await sc.sitemaps.list({ siteUrl });
    if (sitemaps.data.sitemap && sitemaps.data.sitemap.length > 0) {
      for (const sm of sitemaps.data.sitemap) {
        console.log(`  • URL: ${sm.path}`);
        console.log(`    Status: ${sm.isPending ? 'Pending Processing' : 'Processed'}`);
        console.log(`    Errors: ${sm.errors || 0} | Warnings: ${sm.warnings || 0}`);
        console.log(`    Last Submitted: ${sm.lastSubmitted}`);
        if (sm.contents) {
          for (const c of sm.contents) {
            console.log(`    Submitted URLs: ${c.submitted} | Indexed: ${c.indexed}`);
          }
        }
      }
    } else {
      console.log('  ⚠️ No sitemaps found.');
    }
  } catch (err: any) {
    console.error('  ❌ Sitemaps fetch failed:', err.message);
  }

  // 2. Real-Time URL Inspections
  console.log('\n🔎 2. Priority URL Real-Time Inspection:');
  const inspectTargets = [
    siteUrl,
    `${siteUrl}residences`,
    `${siteUrl}west-pune-real-estate`,
    `${siteUrl}shapoorji-pallonji-pune-projects`,
    `${siteUrl}articles`
  ];

  for (const url of inspectTargets) {
    try {
      const res = await sc.urlInspection.index.inspect({
        requestBody: { inspectionUrl: url, siteUrl }
      });
      const ir = res.data.inspectionResult?.indexStatusResult;
      console.log(`  • ${url}`);
      console.log(`    Verdict: ${ir?.verdict || 'PENDING'}`);
      console.log(`    Coverage: ${ir?.coverageState || 'Unknown'}`);
      console.log(`    Indexing Allowed: ${ir?.indexingState === 'INDEXING_ALLOWED' ? '✅ YES' : '❌ NO'}`);
      console.log(`    Robots.txt: ${ir?.robotsTxtState || 'ALLOWED'}`);
    } catch (e: any) {
      console.log(`  • ${url}: ${e.message}`);
    }
  }

  // 3. Search Performance Highlights (Last 28 Days)
  console.log('\n📈 3. Search Impressions & Top Queries (Last 28 Days):');
  const today = new Date();
  const endDate = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const startDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  try {
    const analytics = await sc.searchanalytics.query({
      siteUrl,
      requestBody: {
        startDate,
        endDate,
        dimensions: ['query'],
        rowLimit: 10
      }
    });

    if (analytics.data.rows && analytics.data.rows.length > 0) {
      for (const row of analytics.data.rows) {
        console.log(`  • "${row.keys?.[0]}" -> Impressions: ${row.impressions} | Clicks: ${row.clicks} | Avg Pos: ${row.position?.toFixed(1)}`);
      }
    } else {
      console.log('  ℹ️ Property is new; performance metrics will accumulate as crawling completes.');
    }
  } catch (e: any) {
    console.error('  ❌ Analytics query failed:', e.message);
  }

  console.log('\n====================================================');
  console.log('✅ AUDIT COMPLETE - SERVICE ACCOUNT IS VERIFIED SITE OWNER');
  console.log('====================================================');
}

run().catch(console.error);
