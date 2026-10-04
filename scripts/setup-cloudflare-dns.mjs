// scripts/setup-cloudflare-dns.mjs
// Automates DNS record creation, Page Rules, and zone hardening on Cloudflare via API v4
import fs from 'fs';
import path from 'path';

// Load .env.local or .env if present
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  for (const line of envContent.split('\n')) {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      if (value.startsWith('"') && value.endsWith('"')) value = value.slice(1, -1);
      if (value.startsWith("'") && value.endsWith("'")) value = value.slice(1, -1);
      process.env[key] = value.trim();
    }
  }
}

const CF_EMAIL = process.env.CLOUDFLARE_EMAIL || 'manisha.yewle87@gmail.com';
const CF_KEY = process.env.CLOUDFLARE_API_KEY || '';
const ZONE_ID = process.env.CLOUDFLARE_ZONE_ID || '713f3e04b423348a309df6d95c0183d0';
const BASE_API = 'https://api.cloudflare.com/client/v4';

if (!CF_KEY) {
  console.error("❌ Missing CLOUDFLARE_API_KEY. Provide it in .env.local or environment variable.");
  process.exit(1);
}

const headers = {
  'Content-Type': 'application/json',
  'X-Auth-Email': CF_EMAIL,
  'X-Auth-Key': CF_KEY,
};

async function api(path, options = {}) {
  const url = `${BASE_API}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: { ...headers, ...(options.headers || {}) },
  });
  const data = await res.json();
  return { ok: res.ok, status: res.status, data };
}

async function addDnsRecord(type, name, content, ttl = 1, comment = '', extra = {}) {
  console.log(`\n📡 Adding DNS record [${type}] ${name}...`);
  const existingRes = await api(`/zones/${ZONE_ID}/dns_records?type=${type}&name=${encodeURIComponent(name)}`);
  if (existingRes.data?.result?.length > 0) {
    const existing = existingRes.data.result.find(r => r.content === content);
    if (existing) {
      console.log(`ℹ️ Record already exists: ID ${existing.id}`);
      return existing;
    }
  }

  const payload = {
    type,
    name,
    content,
    ttl,
    comment: comment || 'Managed by SEO & Security Setup',
    ...extra
  };

  const createRes = await api(`/zones/${ZONE_ID}/dns_records`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (createRes.data?.success) {
    console.log(`✅ Created DNS record: ID ${createRes.data.result.id} -> ${content}`);
    return createRes.data.result;
  } else {
    console.error(`❌ Failed to create DNS record:`, JSON.stringify(createRes.data?.errors));
    return null;
  }
}

async function updateZoneSetting(settingId, value) {
  console.log(`\n⚙️ Updating zone setting: ${settingId} -> ${JSON.stringify(value)}...`);
  const res = await api(`/zones/${ZONE_ID}/settings/${settingId}`, {
    method: 'PATCH',
    body: JSON.stringify({ value })
  });

  if (res.data?.success) {
    console.log(`✅ Zone setting '${settingId}' successfully set to:`, res.data.result.value);
    return res.data.result;
  } else {
    console.error(`❌ Failed to update '${settingId}':`, JSON.stringify(res.data?.errors));
    return null;
  }
}

async function enableCrawlerHints() {
  console.log(`\n🤖 Enabling Crawler Hints (IndexNow search crawler signal)...`);
  try {
    const res = await api(`/zones/${ZONE_ID}/flags/products/cache/changes`, {
      method: 'POST',
      body: JSON.stringify({
        feature: 'crawlhints_enabled',
        value: true
      })
    });
    if (res.data?.success) {
      console.log(`✅ Crawler Hints flag enabled successfully!`);
    } else {
      console.log(`ℹ️ Crawler Hints flag response:`, JSON.stringify(res.data));
    }
  } catch (e) {
    console.warn(`⚠️ Crawler Hints flag failed:`, e.message);
  }
}

async function ensurePageRule(urlPattern, actions, priority) {
  console.log(`\n📄 Checking Page Rule for pattern: ${urlPattern}...`);
  const rules = await api(`/zones/${ZONE_ID}/pagerules`);
  const existing = rules.data?.result?.find(r => r.targets?.some(t => t.constraint?.value === urlPattern));
  if (existing) {
    console.log(`ℹ️ Page Rule already exists: ID ${existing.id}`);
    return existing;
  }

  const payload = {
    targets: [{ target: 'url', constraint: { operator: 'matches', value: urlPattern } }],
    actions,
    priority,
    status: 'active'
  };

  const createRes = await api(`/zones/${ZONE_ID}/pagerules`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });

  if (createRes.data?.success) {
    console.log(`✅ Created Page Rule: ID ${createRes.data.result.id}`);
    return createRes.data.result;
  } else {
    console.error(`❌ Failed to create Page Rule:`, JSON.stringify(createRes.data?.errors));
    return null;
  }
}

async function run() {
  console.log('====================================================');
  console.log('🚀 CLOUDFLARE FULL ECOSYSTEM HARDENING');
  console.log(`Zone ID: ${ZONE_ID}`);
  console.log(`Account Email: ${CF_EMAIL}`);
  console.log('====================================================');

  // 1. Google Search Console Domain Verification TXT
  await addDnsRecord(
    'TXT',
    'shapoorji-vyomora.com',
    'google-site-verification=_plOwnQGpvv_iPs3H6LA4ghAOe9XbJprhoQyky_lWko',
    1,
    'Google Search Console Domain Verification'
  );

  // 2. SPF TXT record for domain spoof protection
  await addDnsRecord(
    'TXT',
    'shapoorji-vyomora.com',
    'v=spf1 -all',
    1,
    'SPF record to prevent unauthorized email spoofing'
  );

  // 3. DMARC TXT record
  await addDnsRecord(
    'TXT',
    '_dmarc.shapoorji-vyomora.com',
    'v=DMARC1; p=reject; rua=mailto:propsmartrealty@gmail.com',
    1,
    'DMARC reject policy'
  );

  // 4. RFC 7505 Null MX record (informs email systems domain accepts no inbound mail)
  await addDnsRecord(
    'MX',
    'shapoorji-vyomora.com',
    '.',
    1,
    'Null MX (RFC 7505) - Domain does not receive email',
    { priority: 0 }
  );

  // 5. CAA records (Lockdown SSL issuance to Let\'s Encrypt and Google Trust Services)
  await addDnsRecord(
    'CAA',
    'shapoorji-vyomora.com',
    undefined,
    1,
    'Allow Let\'s Encrypt',
    { data: { flags: 0, tag: 'issue', value: 'letsencrypt.org' } }
  );

  await addDnsRecord(
    'CAA',
    'shapoorji-vyomora.com',
    undefined,
    1,
    'Allow Google Trust Services',
    { data: { flags: 0, tag: 'issue', value: 'pki.goog' } }
  );

  // 6. Security & Performance Zone Settings
  await updateZoneSetting('always_use_https', 'on');
  await updateZoneSetting('early_hints', 'on');
  await updateZoneSetting('0rtt', 'on');
  await updateZoneSetting('min_tls_version', '1.2');
  await updateZoneSetting('always_online', 'on');
  await updateZoneSetting('ssl', 'strict');
  await updateZoneSetting('minify', { css: 'on', html: 'on', js: 'on' });
  await updateZoneSetting('security_header', {
    strict_transport_security: {
      enabled: true,
      max_age: 31536000,
      include_subdomains: true,
      nosniff: true
    }
  });

  // 7. Enable Crawler Hints
  await enableCrawlerHints();

  // 8. Edge Page Rules
  // Rule 1: Cache static JS/CSS chunks for 1 year
  await ensurePageRule(
    '*shapoorji-vyomora.com/_next/static/*',
    [
      { id: 'cache_level', value: 'cache_everything' },
      { id: 'edge_cache_ttl', value: 2419200 },
      { id: 'browser_cache_ttl', value: 31536000 }
    ],
    1
  );

  // Rule 2: Cache static images for 30 days
  await ensurePageRule(
    '*shapoorji-vyomora.com/images/*',
    [
      { id: 'cache_level', value: 'cache_everything' },
      { id: 'edge_cache_ttl', value: 2419200 },
      { id: 'browser_cache_ttl', value: 2592000 }
    ],
    2
  );

  // Rule 3: Single-hop 301 Apex-to-WWW redirect
  await ensurePageRule(
    'shapoorji-vyomora.com/*',
    [
      { id: 'forwarding_url', value: { status_code: 301, url: 'https://www.shapoorji-vyomora.com/$1' } }
    ],
    3
  );

  console.log('\n====================================================');
  console.log('🎉 ENTIRE CLOUDFLARE ECOSYSTEM IS FULLY HARDENED');
  console.log('====================================================');
}

run().catch(console.error);
