import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const zoneId = process.env.CLOUDFLARE_ZONE_ID;
const email = process.env.CLOUDFLARE_EMAIL;
const apiKey = process.env.CLOUDFLARE_API_KEY;

const headers = {
  'X-Auth-Email': email!,
  'X-Auth-Key': apiKey!,
  'Content-Type': 'application/json'
};

async function inspectCloudflare() {
  console.log('--- 1. DNS Records ---');
  const dnsRes = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/dns_records`, { headers });
  const dns = await dnsRes.json();
  for (const r of (dns.result || [])) {
    console.log(`DNS: ${r.type} ${r.name} -> ${r.content} (proxied: ${r.proxied})`);
  }

  console.log('\n--- 2. Worker Routes ---');
  const routesRes = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/workers/routes`, { headers });
  const routes = await routesRes.json();
  console.log('Worker Routes:', JSON.stringify(routes.result, null, 2));

  console.log('\n--- 3. Page Rules ---');
  const prRes = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/pagerules`, { headers });
  const pr = await prRes.json();
  console.log('Page Rules:', JSON.stringify(pr.result, null, 2));

  console.log('\n--- 4. Transform Rules (URL Rewrites) ---');
  const trRes = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/rulesets/phases/http_request_transform/entrypoint`, { headers });
  const tr = await trRes.json();
  console.log('Transform Rules:', JSON.stringify(tr.result, null, 2));
}

inspectCloudflare().catch(console.error);
