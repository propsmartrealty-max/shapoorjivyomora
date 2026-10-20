import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const zoneId = process.env.CLOUDFLARE_ZONE_ID;
const email = process.env.CLOUDFLARE_EMAIL;
const apiKey = process.env.CLOUDFLARE_API_KEY;

if (!zoneId || !email || !apiKey) {
  console.error('Missing Cloudflare credentials in .env.local');
  process.exit(1);
}

async function purgeCache() {
  console.log(`Purging Cloudflare cache for Zone: ${zoneId}...`);
  const res = await fetch(`https://api.cloudflare.com/client/v4/zones/${zoneId}/purge_cache`, {
    method: 'POST',
    headers: {
      'X-Auth-Email': email!,
      'X-Auth-Key': apiKey!,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ purge_everything: true })
  });

  const data = await res.json();
  console.log('Purge Cache Response:', JSON.stringify(data, null, 2));
}

purgeCache().catch(console.error);
