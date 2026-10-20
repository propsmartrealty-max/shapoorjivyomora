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
    scopes: ['https://www.googleapis.com/auth/webmasters.readonly']
  });
  return auth.getClient();
}

async function run() {
  const client = await getClient();
  const sc = google.searchconsole({ version: 'v1', auth: client as any });
  const today = new Date();
  const endDate = new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const startDate = new Date(today.getTime() - 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const res = await sc.searchanalytics.query({
    siteUrl,
    requestBody: {
      startDate,
      endDate,
      dimensions: ['page'],
      rowLimit: 500
    }
  });

  const pages = (res.data.rows || []).map(r => ({
    url: r.keys?.[0] || '',
    impressions: r.impressions || 0,
    clicks: r.clicks || 0,
    position: r.position || 0
  }));

  console.log(`TOTAL_HISTORICAL_PAGES_FOUND: ${pages.length}`);
  fs.writeFileSync(path.resolve(process.cwd(), 'scripts/gsc-urls.json'), JSON.stringify(pages, null, 2), 'utf8');
  console.log('Saved to scripts/gsc-urls.json');
}

run().catch(console.error);
