import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const siteUrl = 'https://www.shapoorji-vyomora.com/';
const sitemapUrl = 'https://www.shapoorji-vyomora.com/sitemap.xml';

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
    scopes: ['https://www.googleapis.com/auth/webmasters']
  });
  return auth.getClient();
}

async function run() {
  console.log(`Submitting fresh sitemap to Google Search Console: ${sitemapUrl}...`);
  const client = await getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client as any });
  
  const res = await sc.sitemaps.submit({
    siteUrl,
    feedpath: sitemapUrl
  });

  console.log('✅ Google Search Console Sitemap Submission Status:', res.status, res.statusText);

  // Ping Google directly
  console.log('Pinging Google Sitemap Ping gateway...');
  try {
    const pingRes = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    console.log('Google Ping status:', pingRes.status);
  } catch (err: any) {
    console.log('Google Ping note:', err.message);
  }
}

run().catch(console.error);
