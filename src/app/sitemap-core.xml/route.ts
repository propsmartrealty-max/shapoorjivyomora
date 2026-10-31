export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const releaseDate = '2026-10-31T12:00:00.000Z';

  const coreRoutes = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/residences', priority: '0.98', changefreq: 'daily' },
    { path: '/projects/joyville-vyomora-hinjewadi', priority: '0.98', changefreq: 'daily' },
    { path: '/amenities', priority: '0.95', changefreq: 'weekly' },
    { path: '/location', priority: '0.95', changefreq: 'weekly' },
    { path: '/masterplan', priority: '0.95', changefreq: 'weekly' },
    { path: '/specifications', priority: '0.92', changefreq: 'weekly' },
    { path: '/west-pune-real-estate', priority: '0.95', changefreq: 'daily' },
    { path: '/shapoorji-pallonji-pune-projects', priority: '0.95', changefreq: 'daily' },
    { path: '/developers/shapoorji-pallonji-pune', priority: '0.92', changefreq: 'weekly' },
    { path: '/guides/shapoorji-pallonji-projects-pune-comparison', priority: '0.92', changefreq: 'weekly' },
    { path: '/market', priority: '0.92', changefreq: 'daily' },
    { path: '/projects', priority: '0.90', changefreq: 'daily' },
    { path: '/articles', priority: '0.90', changefreq: 'weekly' },
    { path: '/locations', priority: '0.85', changefreq: 'weekly' },
    { path: '/investment-calculator', priority: '0.85', changefreq: 'monthly' },
    { path: '/vision', priority: '0.85', changefreq: 'monthly' },
    { path: '/lifestyle', priority: '0.85', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.85', changefreq: 'weekly' },
    { path: '/sustainability', priority: '0.80', changefreq: 'monthly' },
    { path: '/updates', priority: '0.88', changefreq: 'weekly' },
    { path: '/contact', priority: '0.88', changefreq: 'weekly' },
    { path: '/sitemap', priority: '0.75', changefreq: 'weekly' },
    { path: '/privacy-policy', priority: '0.50', changefreq: 'monthly' },
    { path: '/terms', priority: '0.50', changefreq: 'monthly' }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  for (const route of coreRoutes) {
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${releaseDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
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
