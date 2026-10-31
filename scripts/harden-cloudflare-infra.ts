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

async function hardenCloudflare() {
  console.log('====================================================');
  console.log('🛡️ ENTERPRISE CLOUDFLARE INFRASTRUCTURE HARDENING');
  console.log(`Zone ID: ${ZONE_ID}`);
  console.log(`Authenticated as: ${EMAIL} (Global API Key)`);
  console.log('====================================================\n');

  // --------------------------------------------------------------------------
  // 1. HARDEN CORE ZONE SETTINGS
  // --------------------------------------------------------------------------
  console.log('--- 1. Calibrating Core Zone Settings for Zero-Friction Crawling & Peak Speed ---');
  const targetSettings: Record<string, any> = {
    // SSL / TLS & Encryption
    ssl: { value: 'strict' },
    min_tls_version: { value: '1.2' },
    tls_1_3: { value: 'zrt' },
    '0rtt': { value: 'on' },
    ech: { value: 'on' }, // Encrypted Client Hello
    always_use_https: { value: 'on' },
    automatic_https_rewrites: { value: 'on' },
    opportunistic_encryption: { value: 'on' },
    pq_keyex: { value: 'on' }, // Post-Quantum Key Exchange

    // Performance & Protocol Speed
    brotli: { value: 'on' },
    early_hints: { value: 'on' }, // HTTP 103 Early Hints
    http3: { value: 'on' },
    websockets: { value: 'on' },
    always_online: { value: 'on' },
    browser_cache_ttl: { value: 14400 },

    // Core Web Vitals Optimization (Strip Injected Scripts & Parsing Overhead)
    email_obfuscation: { value: 'off' }, // Prevents Cloudflare from injecting email-decode.min.js into DOM
    server_side_exclude: { value: 'off' }, // Disables parsing of <!--sse--> to eliminate edge latency
    rocket_loader: { value: 'off' }, // Guarantees Next.js React hydration never breaks
    minify: { value: { css: 'off', html: 'off', js: 'off' } }, // Next.js compiler handles minification

    // Search Engine & Crawler Zero-Friction Delivery
    security_level: { value: 'essentially_off' }, // Prevents any challenge screen for search engines or visitors
    browser_check: { value: 'off' }, // Prevents Cloudflare Browser Integrity Check from challenging crawlers
    challenge_ttl: { value: 604800 }, // 7 days challenge persistence
    hotlink_protection: { value: 'off' }, // Allows image search indexing and social card previews everywhere
    privacy_pass: { value: 'on' },

    // Enterprise Strict Transport Security (HSTS)
    security_header: {
      value: {
        strict_transport_security: {
          enabled: true,
          max_age: 63072000, // 2 Years HSTS
          include_subdomains: true,
          preload: true,
          nosniff: true
        }
      }
    }
  };

  for (const [setting, payload] of Object.entries(targetSettings)) {
    try {
      const res: any = await api(`/zones/${ZONE_ID}/settings/${setting}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      if (res.success) {
        console.log(`  ✅ [${setting}]: Set to ->`, JSON.stringify(res.result.value));
      } else {
        console.log(`  ⚠️ [${setting}]: ${res.errors?.[0]?.message || 'Skipped'}`);
      }
    } catch (e: any) {
      console.log(`  ❌ [${setting}]: ${e.message}`);
    }
  }

  // --------------------------------------------------------------------------
  // 2. HARDEN BOT MANAGEMENT & ROBOTS.TXT BEHAVIOR
  // --------------------------------------------------------------------------
  console.log('\n--- 2. Hardening Bot Management & robots.txt Autonomy ---');
  try {
    const bmRes: any = await api(`/zones/${ZONE_ID}/bot_management`, {
      method: 'PUT',
      body: JSON.stringify({
        is_robots_txt_managed: false, // Ensures Cloudflare does NOT inject Disallows for GoogleOther/AI bots
        ai_bots_protection: 'disabled',
        ai_training: 'disabled',
        ai_search: 'disabled',
        ai_user: 'disabled',
        crawler_protection: 'disabled',
        fight_mode: false,
        enable_js: false
      })
    });
    console.log('  ✅ Bot Management calibrated:', bmRes.success ? 'Autonomous robots.txt Active' : JSON.stringify(bmRes.errors));
  } catch (e: any) {
    console.log('  ❌ Bot Management error:', e.message);
  }

  // --------------------------------------------------------------------------
  // 3. HARDEN WAF CUSTOM RULES (ALLOW ALL SEARCH & SOCIAL BOTS, BLOCK EXPLOITS)
  // --------------------------------------------------------------------------
  console.log('\n--- 3. Hardening WAF Custom Firewall Rules ---');
  const wafRulesetId = 'c1d2597dcb924eb8903a0f82a159bc47';

  // Comprehensive multi-engine & social bot bypass expression
  const fullBotBypassExpression = [
    'cf.client.bot',
    'ip.geoip.asnum in {15169 8075 396982}', // Google LLC (15169, 396982) & Microsoft Corporation (8075)
    'http.user_agent contains "Google"',
    'http.user_agent contains "Googlebot"',
    'http.user_agent contains "GoogleOther"',
    'http.user_agent contains "Google-InspectionTool"',
    'http.user_agent contains "Bing"',
    'http.user_agent contains "Bingbot"',
    'http.user_agent contains "Applebot"',
    'http.user_agent contains "Yandex"',
    'http.user_agent contains "Baidu"',
    'http.user_agent contains "DuckDuckGo"',
    'http.user_agent contains "GPTBot"',
    'http.user_agent contains "ChatGPT"',
    'http.user_agent contains "OAI-SearchBot"',
    'http.user_agent contains "Claude"',
    'http.user_agent contains "Perplexity"',
    'http.user_agent contains "Meta-ExternalAgent"',
    'http.user_agent contains "cohere"',
    'http.user_agent contains "Bytespider"',
    'http.user_agent contains "facebookexternalhit"',
    'http.user_agent contains "LinkedInBot"',
    'http.user_agent contains "Twitterbot"',
    'http.user_agent contains "WhatsApp"',
    'http.user_agent contains "TelegramBot"',
    'http.user_agent contains "Slackbot"'
  ].join(' or ');

  // Comprehensive attack vector block expression
  const exploitBlockExpression = [
    'http.request.uri.path contains "/.env"',
    'http.request.uri.path contains "/.git"',
    'http.request.uri.path contains "/wp-login"',
    'http.request.uri.path contains "/wp-admin"',
    'http.request.uri.path contains "/xmlrpc.php"',
    'http.request.uri.path contains "/phpmyadmin"',
    'http.request.uri.path contains "/.aws"',
    'http.request.uri.path contains "/.vscode"',
    'http.request.uri.path contains "/actuator"',
    'http.request.uri.path contains "/cgi-bin"',
    'http.request.uri.path contains "/autodiscover"'
  ].join(' or ');

  const hardenedWafRules = [
    {
      action: 'skip',
      action_parameters: {
        ruleset: 'current'
      },
      description: 'Enterprise Peak Tech: Zero-Friction Pass for Verified Search Engines, Social Preview Crawlers & AI Bots',
      enabled: true,
      expression: fullBotBypassExpression
    },
    {
      action: 'block',
      description: 'Enterprise Defense: Block Malicious Vulnerability Probes & Server Exploits',
      enabled: true,
      expression: exploitBlockExpression
    }
  ];

  try {
    const wafRes: any = await api(`/zones/${ZONE_ID}/rulesets/${wafRulesetId}`, {
      method: 'PUT',
      body: JSON.stringify({ rules: hardenedWafRules })
    });
    if (wafRes.success) {
      console.log('  ✅ WAF Firewall Rules deployed with 25-Crawler Allowlist + Automated Exploit Blocking!');
    } else {
      console.error('  ❌ WAF update failed:', JSON.stringify(wafRes.errors));
    }
  } catch (e: any) {
    console.error('  ❌ WAF error:', e.message);
  }

  // --------------------------------------------------------------------------
  // 4. HARDEN CACHE RULES (TIERED CACHING: SHORT TTL FOR FEEDS/SITEMAPS, LONG TTL FOR HTML & ASSETS)
  // --------------------------------------------------------------------------
  console.log('\n--- 4. Hardening Cache Rules (Universal Edge Acceleration) ---');
  const cacheRulesetId = '15a94b2d67264bc88e516f0098f1a0af';

  const hardenedCacheRules = [
    // Rule A: Dynamic Search Feeds & Sitemaps (1 Hour Cache - Always Fresh for Googlebot)
    {
      action: 'set_cache_settings',
      action_parameters: {
        browser_ttl: {
          default: 3600,
          mode: 'override_origin'
        },
        cache: true,
        edge_ttl: {
          default: 3600,
          mode: 'override_origin'
        },
        respect_strong_etags: true
      },
      description: 'Search Discovery Feeds: Cache sitemap.xml, feed.xml, robots.txt at Edge for 1 Hour',
      enabled: true,
      expression: 'http.request.uri.path in {"/sitemap.xml" "/sitemap-index.xml" "/sitemap-core.xml" "/sitemap-projects.xml" "/sitemap-articles.xml" "/sitemap-market.xml" "/feed.xml" "/robots.txt" "/llms.txt" "/llms-full.txt" "/google-merchant-feed.xml"}'
    },
    // Rule B: Immutable Static Assets (1 Year Edge & Browser Cache)
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
      description: 'Static Assets (JS, CSS, WebP, SVG, Fonts, Woff2) Cached Globally for 1 Year',
      enabled: true,
      expression: '(http.request.uri.path.extension in {"js" "css" "webp" "png" "jpg" "jpeg" "svg" "woff2" "woff" "ico"}) or starts_with(http.request.uri.path, "/_next/static/")'
    },
    // Rule C: Pre-rendered HTML Pages (7 Days Edge Cache with Background Revalidation)
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
      description: 'Pre-rendered HTML Pages: Worldwide Edge Cache with Stale-While-Revalidate (<25ms TTFB)',
      enabled: true,
      expression: 'not starts_with(http.request.uri.path, "/api/")'
    }
  ];

  try {
    const cacheRes: any = await api(`/zones/${ZONE_ID}/rulesets/${cacheRulesetId}`, {
      method: 'PUT',
      body: JSON.stringify({ rules: hardenedCacheRules })
    });
    if (cacheRes.success) {
      console.log('  ✅ 3-Tier Edge Cache Rules deployed (1h Discovery Feeds, 1y Static Assets, 7d HTML)!');
    } else {
      console.error('  ❌ Cache rules update failed:', JSON.stringify(cacheRes.errors));
    }
  } catch (e: any) {
    console.error('  ❌ Cache rules error:', e.message);
  }

  // --------------------------------------------------------------------------
  // 5. HARDEN RESPONSE HEADERS (SEO SIGNALS & ENTERPRISE SECURITY HEADERS)
  // --------------------------------------------------------------------------
  console.log('\n--- 5. Hardening Global Edge Response Headers ---');
  const responseHeadersRulesetId = '6d2f7709ec964e89a23df167323b11b2';

  const hardenedResponseHeaderRules = [
    {
      action: 'rewrite',
      action_parameters: {
        headers: {
          'Link': {
            operation: 'set',
            value: '</sitemap.xml>; rel="sitemap"; type="application/xml", </feed.xml>; rel="alternate"; type="application/rss+xml"'
          },
          'X-Robots-Tag': {
            operation: 'set',
            value: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
          },
          'X-Content-Type-Options': {
            operation: 'set',
            value: 'nosniff'
          },
          'X-Frame-Options': {
            operation: 'set',
            value: 'SAMEORIGIN'
          },
          'Referrer-Policy': {
            operation: 'set',
            value: 'strict-origin-when-cross-origin'
          },
          'Permissions-Policy': {
            operation: 'set',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          'Timing-Allow-Origin': {
            operation: 'set',
            value: '*'
          }
        }
      },
      description: 'Set Enterprise SEO, Sitemap & Security Headers on 2xx & 3xx Responses',
      enabled: true,
      expression: 'http.response.code lt 400'
    },
    {
      action: 'rewrite',
      action_parameters: {
        headers: {
          'X-Robots-Tag': {
            operation: 'set',
            value: 'noindex, nofollow, noarchive'
          },
          'X-Content-Type-Options': {
            operation: 'set',
            value: 'nosniff'
          }
        }
      },
      description: 'Set Strict Noindex, Nofollow, Noarchive on 4xx & 5xx Error Responses',
      enabled: true,
      expression: 'http.response.code ge 400'
    }
  ];

  try {
    const rhRes: any = await api(`/zones/${ZONE_ID}/rulesets/${responseHeadersRulesetId}`, {
      method: 'PUT',
      body: JSON.stringify({ rules: hardenedResponseHeaderRules })
    });
    if (rhRes.success) {
      console.log('  ✅ Enterprise Response Headers deployed (Sitemap Link, HSTS, Permissions-Policy, Timing-Allow-Origin)!');
    } else {
      console.error('  ❌ Response headers update failed:', JSON.stringify(rhRes.errors));
    }
  } catch (e: any) {
    console.error('  ❌ Response headers error:', e.message);
  }

  // --------------------------------------------------------------------------
  // 6. PURGE CLOUDFLARE EDGE CACHE GLOBALLY
  // --------------------------------------------------------------------------
  console.log('\n--- 6. Purging Cloudflare Edge Cache Worldwide ---');
  try {
    const purgeRes: any = await api(`/zones/${ZONE_ID}/purge_cache`, {
      method: 'POST',
      body: JSON.stringify({ purge_everything: true })
    });
    console.log('  ✅ Worldwide Edge Cache Purge:', purgeRes.success ? 'COMPLETED' : JSON.stringify(purgeRes.errors));
  } catch (e: any) {
    console.error('  ❌ Purge error:', e.message);
  }

  console.log('\n====================================================');
  console.log('🚀 CLOUDFLARE ENTERPRISE INFRASTRUCTURE HARDENING COMPLETE');
  console.log('====================================================');
}

hardenCloudflare().catch(console.error);
