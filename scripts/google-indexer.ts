import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const BASE_URL = 'https://www.shapoorji-vyomora.com';
const QUOTA_LIMIT = 200; // Google Indexing API daily limit per project
const STATE_FILE = path.join(process.cwd(), '.seo-indexer-state.json');

interface UrlState {
  lastSubmitted: string;
  status: 'SUCCESS' | 'RATE_LIMITED' | 'FAILED';
  attempts: number;
}

interface IndexerState {
  submittedUrls: Record<string, UrlState>;
  lastRun: string;
  totalSubmissionsLifetime: number;
  lastDailySuccessCount: number;
}

async function getAuthClient() {
  let credentialsJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  const serviceAccountFile = path.resolve(process.cwd(), 'service_account.json');
  
  if (!credentialsJson && fs.existsSync(serviceAccountFile)) {
    credentialsJson = fs.readFileSync(serviceAccountFile, 'utf8');
  }

  if (!credentialsJson) {
    console.warn("⚠️ GOOGLE_SERVICE_ACCOUNT_JSON or service_account.json not found. Skipping Google Indexing API.");
    return null;
  }

  try {
    const credentials = JSON.parse(credentialsJson);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/indexing',
        'https://www.googleapis.com/auth/webmasters'
      ],
    });
    return auth.getClient();
  } catch (error) {
    console.error("❌ Failed to parse GOOGLE_SERVICE_ACCOUNT_JSON", error);
    return null;
  }
}

async function pingSitemaps() {
  console.log("🌐 Pinging search engines with latest sitemap...");
  const sitemapUrl = `${BASE_URL}/sitemap.xml`;
  
  try {
    const res = await fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    console.log(`✅ Google sitemap ping returned status: ${res.status}`);
  } catch (e: any) {
    console.warn("⚠️ Google sitemap ping notice:", e.message || e);
  }

  try {
    const res = await fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`);
    console.log(`✅ Bing sitemap ping returned status: ${res.status}`);
  } catch (e: any) {
    console.warn("⚠️ Bing sitemap ping notice:", e.message || e);
  }
}

function loadState(): IndexerState {
  if (fs.existsSync(STATE_FILE)) {
    try {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
      return {
        submittedUrls: data.submittedUrls || {},
        lastRun: data.lastRun || new Date().toISOString(),
        totalSubmissionsLifetime: data.totalSubmissionsLifetime || data.lastIndexSubmitted || 0,
        lastDailySuccessCount: data.lastDailySuccessCount || 0,
      };
    } catch {
      // Fallback
    }
  }
  return {
    submittedUrls: {},
    lastRun: new Date().toISOString(),
    totalSubmissionsLifetime: 0,
    lastDailySuccessCount: 0,
  };
}

function saveState(state: IndexerState) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function fetchAllCanonicalUrls(): Promise<string[]> {
  // Method 1: Fetch live sitemap.xml
  try {
    const res = await fetch(`${BASE_URL}/sitemap.xml`, { signal: AbortSignal.timeout(5000) });
    if (res.ok) {
      const xml = await res.text();
      const matches = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)];
      if (matches.length > 0) {
        const urls = matches.map(m => m[1]);
        console.log(`📡 Fetched ${urls.length} live canonical URLs from ${BASE_URL}/sitemap.xml`);
        return urls;
      }
    }
  } catch {
    // Fallback to local files
  }

  // Method 2: Read dist/sitemap.xml
  const distSitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  if (fs.existsSync(distSitemapPath)) {
    const sitemapContent = fs.readFileSync(distSitemapPath, 'utf-8');
    const matches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
    if (matches.length > 0) {
      const urls = matches.map(m => m[1]);
      console.log(`📁 Read ${urls.length} canonical URLs from local dist/sitemap.xml`);
      return urls;
    }
  }

  // Method 3: Construct from marketCombos.json
  const combosPath = path.join(process.cwd(), 'src', 'data', 'marketCombos.json');
  if (fs.existsSync(combosPath)) {
    const combos = JSON.parse(fs.readFileSync(combosPath, 'utf-8'));
    const urls = combos.map((c: any) => `${BASE_URL}/market/${c.location}/${c.configuration}/${c.topic}`);
    urls.unshift(`${BASE_URL}/`, `${BASE_URL}/residences`, `${BASE_URL}/amenities`, `${BASE_URL}/location`, `${BASE_URL}/west-pune-real-estate`, `${BASE_URL}/sitemap`, `${BASE_URL}/market`);
    console.log(`⚙️ Constructed ${urls.length} canonical URLs from marketCombos.json fallback`);
    return urls;
  }

  return [];
}

async function main() {
  console.log("🚀 Starting Enterprise Google Indexing Queue Engine...");
  
  // 1. Ping Search Engine Sitemap Gateways
  await pingSitemaps();

  // 2. Setup Google Auth Client
  const authClient = await getAuthClient();
  if (!authClient) {
    console.log("🛑 Exiting Indexing API workflow due to missing credentials.");
    return;
  }

  // 3. Submit sitemap via Google Search Console API
  try {
    const sc = google.searchconsole({ version: 'v1', auth: authClient as any });
    await sc.sitemaps.submit({ siteUrl: 'https://www.shapoorji-vyomora.com/', feedpath: `${BASE_URL}/sitemap.xml` });
    console.log("✅ Successfully registered sitemap with Google Search Console API.");
  } catch (err: any) {
    console.warn("⚠️ GSC sitemap registration notice:", err?.message || err);
  }

  // 4. Load State & Fetch Canonical URLs
  const state = loadState();
  const allUrls = await fetchAllCanonicalUrls();
  if (allUrls.length === 0) {
    console.error("❌ No canonical URLs discovered to index.");
    return;
  }

  // Priority Core Hubs
  const CORE_HUBS = new Set([
    `${BASE_URL}/`,
    `${BASE_URL}/residences`,
    `${BASE_URL}/projects/joyville-vyomora-hinjewadi`,
    `${BASE_URL}/amenities`,
    `${BASE_URL}/location`,
    `${BASE_URL}/west-pune-real-estate`,
    `${BASE_URL}/shapoorji-pallonji-pune-projects`,
    `${BASE_URL}/market`,
    `${BASE_URL}/sitemap`,
    `${BASE_URL}/projects/joyville-sensorium`,
    `${BASE_URL}/projects/shapoorji-pallonji-vanaha`,
    `${BASE_URL}/projects/vanaha-golfland`,
    `${BASE_URL}/projects/joyville-hadapsar-annexe`,
    `${BASE_URL}/projects/wildernest-sp-kingstown`,
    `${BASE_URL}/investment-calculator`,
    `${BASE_URL}/articles`,
  ]);

  // 5. Intelligent Multi-Tier Queue Prioritization:
  // Tier 1: Core hubs that have NEVER been submitted or were submitted > 7 days ago
  // Tier 2: Programmatic URLs that have NEVER been submitted (first-time crawl induction)
  // Tier 3: Core hubs needing fresh re-indexing signals
  // Tier 4: Previously submitted URLs sorted by oldest submission timestamp (LRU queue)
  const neverSubmitted: string[] = [];
  const coreHubsToRefresh: string[] = [];
  const previouslySubmitted: { url: string; lastSubmitted: string }[] = [];

  const now = Date.now();
  const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

  for (const url of allUrls) {
    const record = state.submittedUrls[url];
    if (!record) {
      if (CORE_HUBS.has(url)) {
        coreHubsToRefresh.unshift(url); // Core hubs jump to very top
      } else {
        neverSubmitted.push(url);
      }
    } else {
      const ageMs = now - new Date(record.lastSubmitted).getTime();
      if (CORE_HUBS.has(url) && ageMs > SEVEN_DAYS_MS) {
        coreHubsToRefresh.push(url);
      } else {
        previouslySubmitted.push({ url, lastSubmitted: record.lastSubmitted });
      }
    }
  }

  // Sort previously submitted by oldest submission first
  previouslySubmitted.sort((a, b) => new Date(a.lastSubmitted).getTime() - new Date(b.lastSubmitted).getTime());

  const queue = [
    ...coreHubsToRefresh,
    ...neverSubmitted,
    ...previouslySubmitted.map(p => p.url)
  ];

  console.log(`\n📊 Queue Intelligence Breakdown:`);
  console.log(`   • Total Canonical URLs: ${allUrls.length}`);
  console.log(`   • Core Hubs Queued: ${coreHubsToRefresh.length}`);
  console.log(`   • Unsubmitted URLs (Never Indexed): ${neverSubmitted.length}`);
  console.log(`   • Refresh / Maintenance Queue: ${previouslySubmitted.length}`);
  console.log(`   • Daily Batch Size: up to ${QUOTA_LIMIT} URLs\n`);

  const batchToSubmit = queue.slice(0, QUOTA_LIMIT);
  const indexing = google.indexing({ version: 'v3', auth: authClient as any });

  let successCount = 0;
  let quotaReached = false;

  for (const url of batchToSubmit) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      successCount++;
      state.submittedUrls[url] = {
        lastSubmitted: new Date().toISOString(),
        status: 'SUCCESS',
        attempts: (state.submittedUrls[url]?.attempts || 0) + 1,
      };
      process.stdout.write(`  ✅ [Google Indexing API] ${url}\n`);
      
      // 200ms pacing to avoid Google burst rate limiting
      await new Promise(r => setTimeout(r, 200));
    } catch (error: any) {
      if (error?.message?.includes('Quota exceeded') || error?.code === 429) {
        console.log(`\n⏳ Daily Google Indexing API quota (200 requests/day) reached.`);
        console.log(`   ${successCount} URLs were accepted in this batch.`);
        console.log(`   Next quota reset occurs at midnight PST (Google quota window).`);
        quotaReached = true;
        break;
      } else {
        console.error(`  ❌ Failed to submit ${url}:`, error.message || error);
        state.submittedUrls[url] = {
          lastSubmitted: new Date().toISOString(),
          status: 'FAILED',
          attempts: (state.submittedUrls[url]?.attempts || 0) + 1,
        };
      }
    }
  }

  state.lastRun = new Date().toISOString();
  state.lastDailySuccessCount = successCount;
  state.totalSubmissionsLifetime = (state.totalSubmissionsLifetime || 0) + successCount;
  saveState(state);

  const remainingUnsubmitted = queue.filter(u => !state.submittedUrls[u] || state.submittedUrls[u].status !== 'SUCCESS').length;

  console.log(`\n🏁 Google Indexing Batch Summary:`);
  console.log(`   • Successfully Submitted Today: ${successCount}`);
  console.log(`   • Lifetime Successful Submissions: ${state.totalSubmissionsLifetime}`);
  console.log(`   • Remaining Unsubmitted / Pending Queue: ${remainingUnsubmitted}`);
  console.log(`   • State Persisted to: ${STATE_FILE}`);
  if (quotaReached) {
    console.log(`   ℹ️ Run scheduled to automatically resume next batch tomorrow.\n`);
  }
}

main().catch(console.error);
