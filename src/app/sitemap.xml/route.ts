import { seoArticles } from '@/data/seoArticles';
import { TOP_CURATED_MARKET_COMBOS } from '@/lib/programmaticSEO';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/residences', priority: '0.9', changefreq: 'weekly' },
    { path: '/amenities', priority: '0.9', changefreq: 'weekly' },
    { path: '/masterplan', priority: '0.9', changefreq: 'weekly' },
    { path: '/specifications', priority: '0.8', changefreq: 'monthly' },
    { path: '/location', priority: '0.9', changefreq: 'weekly' },
    { path: '/west-pune-real-estate', priority: '0.95', changefreq: 'daily' },
    { path: '/locations', priority: '0.8', changefreq: 'weekly' },
    { path: '/shapoorji-pallonji-pune-projects', priority: '0.9', changefreq: 'weekly' },
    { path: '/investment-calculator', priority: '0.8', changefreq: 'monthly' },
    { path: '/vision', priority: '0.8', changefreq: 'monthly' },
    { path: '/lifestyle', priority: '0.8', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { path: '/sustainability', priority: '0.8', changefreq: 'monthly' },
    { path: '/updates', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.9', changefreq: 'weekly' },
    { path: '/articles', priority: '0.8', changefreq: 'weekly' },
    { path: '/sitemap', priority: '0.7', changefreq: 'weekly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // 1. Core Project Landing Pages
  for (const route of coreRoutes) {
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  }

  // 2. High-Authority Real Estate Deep-Dive Articles
  for (const article of seoArticles) {
    xml += `
  <url>
    <loc>${baseUrl}/articles/${article.slug}</loc>
    <lastmod>${new Date(article.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>`;
  }

  // 3. Verified Pre-rendered High-Intent Market Pages
  for (const combo of TOP_CURATED_MARKET_COMBOS) {
    xml += `
  <url>
    <loc>${baseUrl}/market/${combo.location}/${combo.configuration}/${combo.topic}</loc>
    <lastmod>${currentDate}</lastmod>
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
