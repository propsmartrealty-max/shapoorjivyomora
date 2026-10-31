import { seoArticles } from '@/data/seoArticles';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const releaseDate = '2026-10-31T12:00:00.000Z';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Main articles directory
  xml += `
  <url>
    <loc>${baseUrl}/articles</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.92</priority>
  </url>`;

  for (const article of seoArticles) {
    xml += `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.88</priority>
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
