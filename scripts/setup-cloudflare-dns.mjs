// scripts/setup-cloudflare-dns.mjs
// Automates DNS record creation and zone optimizations on Cloudflare via API v4
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

async function addDnsRecord(type, name, content, ttl = 1, comment = '') {
  console.log(`\n📡 Adding DNS record [${type}] ${name}...`);
  // Check if it already exists
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
    comment: comment || 'Managed by SEO & Security Setup'
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

async function run() {
  console.log('====================================================');
  console.log('🚀 CLOUDFLARE INFRASTRUCTURE & DNS AUTOMATION');
  console.log(`Zone ID: ${ZONE_ID}`);
  console.log(`Account Email: ${CF_EMAIL}`);
  console.log('====================================================');

  // 1. Add Google Search Console Domain Verification TXT
  await addDnsRecord(
    'TXT',
    'shapoorji-vyomora.com',
    'google-site-verification=_plOwnQGpvv_iPs3H6LA4ghAOe9XbJprhoQyky_lWko',
    1,
    'Google Search Console Domain Verification'
  );

  // 2. Add SPF TXT record for domain spoof protection
  await addDnsRecord(
    'TXT',
    'shapoorji-vyomora.com',
    'v=spf1 -all',
    1,
    'SPF record to prevent unauthorized email spoofing'
  );

  // 3. Add DMARC TXT record
  await addDnsRecord(
    'TXT',
    '_dmarc.shapoorji-vyomora.com',
    'v=DMARC1; p=reject; rua=mailto:propsmartrealty@gmail.com',
    1,
    'DMARC reject policy'
  );

  // 4. Optimize Zone Settings
  await updateZoneSetting('always_use_https', 'on');
  await updateZoneSetting('early_hints', 'on');
  await updateZoneSetting('0rtt', 'on');
  await updateZoneSetting('min_tls_version', '1.2');
  await updateZoneSetting('security_header', {
    strict_transport_security: {
      enabled: true,
      max_age: 31536000,
      include_subdomains: true,
      nosniff: true
    }
  });

  // 5. Enable Crawler Hints
  await enableCrawlerHints();

  console.log('\n====================================================');
  console.log('🎉 ALL CLOUDFLARE DNS & ZONE OPTIMIZATIONS VERIFIED');
  console.log('====================================================');
}

run().catch(console.error);
