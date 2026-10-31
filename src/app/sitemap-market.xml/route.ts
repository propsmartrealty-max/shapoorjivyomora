import { TOP_CURATED_MARKET_COMBOS } from '@/lib/programmaticSEO';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const releaseDate = '2026-10-31T12:00:00.000Z';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Market index
  xml += `
  <url>
    <loc>${baseUrl}/market</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.92</priority>
  </url>`;

  for (const combo of TOP_CURATED_MARKET_COMBOS) {
    xml += `
  <url>
    <loc>${baseUrl}/market/${combo.location}/${combo.configuration}/${combo.topic}</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>`;
  }

  xml += `\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
