export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const releaseDate = '2026-10-31T12:00:00.000Z';

  const sitemaps = [
    `${baseUrl}/sitemap-core.xml`,
    `${baseUrl}/sitemap-projects.xml`,
    `${baseUrl}/sitemap-articles.xml`,
    `${baseUrl}/sitemap-market.xml`
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (const sitemap of sitemaps) {
    xml += `
  <sitemap>
    <loc>${sitemap}</loc>
    <lastmod>${releaseDate}</lastmod>
  </sitemap>`;
  }

  xml += `\n</sitemapindex>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
