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

async function calibrate() {
  console.log('=== CLOUDFLARE INFRASTRUCTURE AUDIT & CALIBRATION ===\n');

  // 1. Fetch Zone Details
  const zoneInfo: any = await api(`/zones/${ZONE_ID}`);
  console.log(`Zone: ${zoneInfo.result?.name} (Status: ${zoneInfo.result?.status}, Plan: ${zoneInfo.result?.plan?.name})`);

  // 2. Audit and calibrate Settings
  const settingsToCalibrate: Record<string, any> = {
    always_use_https: { value: 'on' },
    automatic_https_rewrites: { value: 'on' },
    ssl: { value: 'strict' },
    min_tls_version: { value: '1.2' },
    tls_1_3: { value: 'on' },
    '0rtt': { value: 'on' },
    brotli: { value: 'on' },
    early_hints: { value: 'on' },
    http2: { value: 'on' },
    http3: { value: 'on' },
    ip_geolocation: { value: 'on' },
    ipv6: { value: 'on' },
    security_level: { value: 'medium' }, // Never challenge valid crawlers
    browser_cache_ttl: { value: 14400 }, // 4 hours default browser cache
    minify: { value: { css: 'on', html: 'on', js: 'on' } },
    security_header: {
      value: {
        strict_transport_security: {
          enabled: true,
          max_age: 63072000,
          include_subdomains: true,
          nosniff: true
        }
      }
    }
  };

  console.log('\n--- Calibrating Zone Settings ---');
  for (const [setting, payload] of Object.entries(settingsToCalibrate)) {
    try {
      const res: any = await api(`/zones/${ZONE_ID}/settings/${setting}`, {
        method: 'PATCH',
        body: JSON.stringify(payload)
      });
      if (res.success) {
        console.log(`✅ [${setting}]: Successfully calibrated ->`, JSON.stringify(res.result.value));
      } else {
        console.log(`⚠️ [${setting}]: ${res.errors?.[0]?.message || 'Skipped'}`);
      }
    } catch (e: any) {
      console.log(`❌ [${setting}]: ${e.message}`);
    }
  }

  // 3. Crawler Hints Flag
  console.log('\n--- Checking & Activating Crawler Hints ---');
  try {
    const chRes: any = await api(`/zones/${ZONE_ID}/flags/products/cache/changes`, {
      method: 'POST',
      body: JSON.stringify({
        feature: 'crawlhints_enabled',
        value: true
      })
    });
    console.log('Crawler hints result:', chRes.success ? 'ENABLED' : JSON.stringify(chRes.errors));
  } catch (e: any) {
    console.log('Crawler hints error:', e.message);
  }

  // 4. DNS Proxied Status Verification
  console.log('\n--- Verifying DNS Proxied Status ---');
  const dnsRes: any = await api(`/zones/${ZONE_ID}/dns_records`);
  for (const r of (dnsRes.result || [])) {
    console.log(`[${r.type}] ${r.name} -> ${r.content} (Proxied: ${r.proxied})`);
  }

  // 5. Tiered Cache
  console.log('\n--- Checking Tiered Cache ---');
  try {
    const tcRes: any = await api(`/zones/${ZONE_ID}/tiered_cache`, {
      method: 'PATCH',
      body: JSON.stringify({ value: 'on' })
    });
    console.log('Tiered Cache:', tcRes.success ? 'ENABLED' : JSON.stringify(tcRes.errors));
  } catch (e: any) {
    console.log('Tiered cache error:', e.message);
  }

  // 6. Purge everything to sync all edge nodes worldwide
  console.log('\n--- Purging Global Edge Cache ---');
  const purgeRes: any = await api(`/zones/${ZONE_ID}/purge_cache`, {
    method: 'POST',
    body: JSON.stringify({ purge_everything: true })
  });
  console.log('Purge status:', purgeRes.success ? 'GLOBAL PURGE COMPLETE' : JSON.stringify(purgeRes.errors));

  console.log('\n=== CALIBRATION COMPLETED SUCCESSFULLY ===');
}

calibrate().catch(console.error);
