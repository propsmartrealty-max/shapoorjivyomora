import { google } from 'googleapis';
import * as dotenv from 'dotenv';
import { SEOLocations, SEONRILocations, SEOConfigurations, SEOTopics } from '../src/lib/programmaticSEO';
import * as fs from 'fs';
import * as path from 'path';

dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const BASE_URL = 'https://www.shapoorji-vyomora.com';
const QUOTA_LIMIT = 200; // Google Indexing API daily limit

// Path to store state so we don't submit the same URLs over and over
const STATE_FILE = path.join(process.cwd(), '.seo-indexer-state.json');

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
      scopes: ['https://www.googleapis.com/auth/indexing'],
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
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    console.log("✅ Google sitemap ping successful.");
  } catch (e) {
    console.error("❌ Google sitemap ping failed:", e);
  }

  try {
    await fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);
    console.log("✅ Bing sitemap ping successful.");
  } catch (e) {
    console.error("❌ Bing sitemap ping failed:", e);
  }
}

function loadState() {
  if (fs.existsSync(STATE_FILE)) {
    return JSON.parse(fs.readFileSync(STATE_FILE, 'utf-8'));
  }
  return { lastIndexSubmitted: 0 };
}

function saveState(state: any) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2));
}

async function main() {
  console.log("🚀 Starting SEO Indexing Engine...");
  
  // 1. Ping Sitemaps First
  await pingSitemaps();

  // 2. Setup Google Indexing API
  const authClient = await getAuthClient();
  if (!authClient) {
    console.log("🛑 Exiting Indexing API workflow due to missing credentials.");
    return;
  }

  const indexing = google.indexing({ version: 'v3', auth: authClient as any });
  const state = loadState();

  // 3. Load all verified URLs from dist/sitemap.xml first
  let urlsToSubmit: string[] = [];
  const distSitemapPath = path.join(process.cwd(), 'dist', 'sitemap.xml');
  if (fs.existsSync(distSitemapPath)) {
    const sitemapContent = fs.readFileSync(distSitemapPath, 'utf-8');
    const matches = [...sitemapContent.matchAll(/<loc>(.*?)<\/loc>/g)];
    urlsToSubmit = matches.map(m => m[1]);
    console.log(`📋 Found ${urlsToSubmit.length} canonical URLs in dist/sitemap.xml`);
  }

  if (urlsToSubmit.length === 0) {
    // Fallback: Generate programmatic URLs
    const allLocations = [...SEOLocations, ...SEONRILocations];
    for (const location of allLocations) {
      for (const config of SEOConfigurations) {
        for (const topic of SEOTopics) {
          urlsToSubmit.push(`${BASE_URL}/market/${location}/${config}/${topic}`);
        }
      }
    }
  }

  // Ensure within quota limit
  if (urlsToSubmit.length > QUOTA_LIMIT) {
    urlsToSubmit = urlsToSubmit.slice(0, QUOTA_LIMIT);
  }

  console.log(`📦 Preparing to submit ${urlsToSubmit.length} URLs to Google...`);

  let successCount = 0;
  for (const url of urlsToSubmit) {
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED',
        },
      });
      successCount++;
      // Sleep to prevent rate limit spikes (e.g. 500ms)
      await new Promise(r => setTimeout(r, 500));
    } catch (error: any) {
      console.error(`❌ Failed to submit ${url}:`, error.message || error);
    }
  }

  console.log(`✅ Successfully submitted ${successCount} URLs.`);
  
  // Update state
  state.lastIndexSubmitted = (state.lastIndexSubmitted || 0) + successCount;
  state.lastRun = new Date().toISOString();
  state.totalSubmitted = successCount;
  saveState(state);
}

main().catch(console.error);
