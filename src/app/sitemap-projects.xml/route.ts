import { puneProjectsMasterList } from '@/data/puneProjectsData';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const releaseDate = '2026-10-31T12:00:00.000Z';

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Main projects directory
  xml += `
  <url>
    <loc>${baseUrl}/projects</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.95</priority>
  </url>`;

  for (const project of puneProjectsMasterList) {
    xml += `
  <url>
    <loc>${baseUrl}/projects/${project.slug}</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.90</priority>
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
