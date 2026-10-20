import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID || '713f3e04b423348a309df6d95c0183d0';
const EMAIL = process.env.CLOUDFLARE_EMAIL || 'manisha.yewle87@gmail.com';
const API_KEY = process.env.CLOUDFLARE_API_KEY || '';

const headers = {
  'X-Auth-Email': EMAIL,
  'X-Auth-Key': API_KEY,
  'Content-Type': 'application/json'
};

async function api(endpoint: string, options: RequestInit = {}) {
  const url = `https://api.cloudflare.com/client/v4${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) }
  });
  return res.json();
}

async function run() {
  console.log('=== UPGRADING CLOUDFLARE PEAK TECH RULES ===\n');

  // 1. Upgrade WAF Custom Rules (Whitelist all search engines and AI bots)
  console.log('--- 1. Upgrading WAF Custom Rule (Search Engines & AI Bots) ---');
  const wafRulesetId = 'c1d2597dcb924eb8903a0f82a159bc47';
  
  const botBypassExpression = 'cf.client.bot or (http.user_agent contains "Google" or http.user_agent contains "Bing" or http.user_agent contains "Apple" or http.user_agent contains "GPTBot" or http.user_agent contains "ChatGPT" or http.user_agent contains "OAI-SearchBot" or http.user_agent contains "Claude" or http.user_agent contains "Perplexity" or http.user_agent contains "Meta-ExternalAgent" or http.user_agent contains "cohere" or http.user_agent contains "Bytespider")';

  const updatedWafRules = [
    {
      action: 'skip',
      action_parameters: {
        ruleset: 'current'
      },
      description: 'Enterprise Peak Tech: Always Skip Security & Challenges for Search Engines and AI Crawlers',
      enabled: true,
      expression: botBypassExpression
    },
    {
      action: 'block',
      description: 'Enterprise Security: Block Malicious Exploits & Vulnerability Probes (.env, .git, wp-login, etc.)',
      enabled: true,
      expression: '(http.request.uri.path in {"/.env" "/.git" "/wp-login.php" "/xmlrpc.php" "/wp-admin" "/phpmyadmin"})'
    }
  ];

  const wafUpdateRes: any = await api(`/zones/${ZONE_ID}/rulesets/${wafRulesetId}`, {
    method: 'PUT',
    body: JSON.stringify({ rules: updatedWafRules })
  });

  if (wafUpdateRes.success) {
    console.log('✅ WAF Custom Rules updated successfully with multi-model AI bot whitelisting!');
  } else {
    console.error('❌ Failed to update WAF rules:', JSON.stringify(wafUpdateRes.errors));
  }

  // 2. Upgrade Cache Rules (Cover all pre-rendered HTML routes at the edge)
  console.log('\n--- 2. Upgrading Cache Rules (Universal Edge Cache for All Static Routes) ---');
  const cacheRulesetId = '15a94b2d67264bc88e516f0098f1a0af';

  const updatedCacheRules = [
    {
      action: 'set_cache_settings',
      action_parameters: {
        browser_ttl: {
          default: 31536000,
          mode: 'override_origin'
        },
        cache: true,
        edge_ttl: {
          default: 31536000,
          mode: 'override_origin'
        },
        respect_strong_etags: true
      },
      description: 'Cache Static Assets (JS, CSS, WebP, SVG, Fonts) at Edge for 1 Year',
      enabled: true,
      expression: '(http.request.uri.path.extension in {"js" "css" "webp" "png" "jpg" "jpeg" "svg" "woff2" "woff" "ico"}) or starts_with(http.request.uri.path, "/_next/static/")'
    },
    {
      action: 'set_cache_settings',
      action_parameters: {
        browser_ttl: {
          default: 86400,
          mode: 'override_origin'
        },
        cache: true,
        edge_ttl: {
          default: 604800,
          mode: 'override_origin'
        },
        serve_stale: {
          disable_stale_while_updating: false
        }
      },
      description: 'Universal Edge Cache: Pre-rendered HTML Pages Cached Globally for 7 Days (<25ms TTFB)',
      enabled: true,
      expression: 'not starts_with(http.request.uri.path, "/api/")'
    }
  ];

  const cacheUpdateRes: any = await api(`/zones/${ZONE_ID}/rulesets/${cacheRulesetId}`, {
    method: 'PUT',
    body: JSON.stringify({ rules: updatedCacheRules })
  });

  if (cacheUpdateRes.success) {
    console.log('✅ Cache Rules updated successfully with Universal 7-Day Edge HTML Caching!');
  } else {
    console.error('❌ Failed to update Cache rules:', JSON.stringify(cacheUpdateRes.errors));
  }

  // 3. Purge Cloudflare Global Edge Cache to activate immediately
  console.log('\n--- 3. Purging Edge Cache ---');
  const purgeRes: any = await api(`/zones/${ZONE_ID}/purge_cache`, {
    method: 'POST',
    body: JSON.stringify({ purge_everything: true })
  });
  console.log('Global Cache Purge status:', purgeRes.success ? 'PURGED SUCCESSFULLY' : JSON.stringify(purgeRes.errors));

  console.log('\n=== CLOUDFLARE PEAK TECH CALIBRATION COMPLETE ===');
}

run().catch(console.error);
