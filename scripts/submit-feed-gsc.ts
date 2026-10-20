import { google } from 'googleapis';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const siteUrl = 'https://www.shapoorji-vyomora.com/';
const baseUrl = 'https://www.shapoorji-vyomora.com';

async function main() {
  console.log('--- Submitting supplemental feeds to Google Search Console API ---');
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
  const client = await auth.getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client as any });

  const feedsToSubmit = [
    `${baseUrl}/sitemap.xml`,
    `${baseUrl}/feed.xml`
  ];

  for (const feed of feedsToSubmit) {
    try {
      await sc.sitemaps.submit({ siteUrl, feedpath: feed });
      console.log(`✅ Successfully submitted ${feed} to Google Search Console API!`);
    } catch (e: any) {
      console.log(`⚠️ Submission note for ${feed}:`, e.message);
    }
  }

  console.log('\n--- Checking Registered Sitemaps in Google Search Console ---');
  const res = await sc.sitemaps.list({ siteUrl });
  for (const sm of (res.data.sitemap || [])) {
    console.log(`• Sitemap: ${sm.path} (Pending: ${sm.isPending}, LastSubmitted: ${sm.lastSubmitted})`);
  }
}

main().catch(console.error);
