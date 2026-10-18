import { seoArticles } from '@/data/seoArticles';
import { TOP_CURATED_MARKET_COMBOS } from '@/lib/programmaticSEO';
import { puneProjectsMasterList } from '@/data/puneProjectsData';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const currentDate = new Date().toISOString();

  const coreRoutes = [
    { path: '/', priority: '1.0', changefreq: 'daily' },
    { path: '/projects', priority: '0.95', changefreq: 'daily' },
    { path: '/developers/shapoorji-pallonji-pune', priority: '0.95', changefreq: 'weekly' },
    { path: '/guides/shapoorji-pallonji-projects-pune-comparison', priority: '0.95', changefreq: 'weekly' },
    { path: '/shapoorji-pallonji-pune-projects', priority: '0.95', changefreq: 'daily' },
    { path: '/west-pune-real-estate', priority: '0.95', changefreq: 'daily' },
    { path: '/residences', priority: '0.9', changefreq: 'weekly' },
    { path: '/amenities', priority: '0.9', changefreq: 'weekly' },
    { path: '/masterplan', priority: '0.9', changefreq: 'weekly' },
    { path: '/specifications', priority: '0.8', changefreq: 'monthly' },
    { path: '/location', priority: '0.9', changefreq: 'weekly' },
    { path: '/locations', priority: '0.8', changefreq: 'weekly' },
    { path: '/investment-calculator', priority: '0.8', changefreq: 'monthly' },
    { path: '/vision', priority: '0.8', changefreq: 'monthly' },
    { path: '/lifestyle', priority: '0.8', changefreq: 'monthly' },
    { path: '/gallery', priority: '0.8', changefreq: 'weekly' },
    { path: '/sustainability', priority: '0.8', changefreq: 'monthly' },
    { path: '/updates', priority: '0.9', changefreq: 'weekly' },
    { path: '/contact', priority: '0.9', changefreq: 'weekly' },
    { path: '/articles', priority: '0.8', changefreq: 'weekly' },
    { path: '/sitemap', priority: '0.7', changefreq: 'weekly' },
    { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
    { path: '/terms', priority: '0.5', changefreq: 'monthly' },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;

  // 1. Core Project Landing Pages
  for (const route of coreRoutes) {
    const loc = route.path === '/' ? `${baseUrl}/` : `${baseUrl}${route.path}`;
    let imageTags = '';

    if (route.path === '/') {
      imageTags = `
    <image:image>
      <image:loc>${baseUrl}/images/hero_bg.webp</image:loc>
      <image:title>Shapoorji Pallonji Joyville Vyomora Hinjewadi Pune</image:title>
      <image:caption>Luxury 2, 3 and 4 BHK apartments and sky duplexes in Hinjewadi Phase 1</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/pool_bg.webp</image:loc>
      <image:title>32,000 Sq. Ft. Clubhouse at Joyville Vyomora</image:title>
      <image:caption>Resort-style infinity pool and luxury lifestyle amenities</image:caption>
    </image:image>`;
    } else if (route.path === '/residences') {
      imageTags = `
    <image:image>
      <image:loc>${baseUrl}/images/floor-plan1.webp</image:loc>
      <image:title>2 BHK Floor Plan - Shapoorji Joyville Vyomora Hinjewadi</image:title>
      <image:caption>2 BHK Luxe and Grande floor plan with carpet area and balcony</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/floor-plan2.webp</image:loc>
      <image:title>3 BHK Floor Plan - Shapoorji Joyville Vyomora Hinjewadi</image:title>
      <image:caption>3 BHK Elite and Imperial floor plan specifications</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/images/floor-plan3.webp</image:loc>
      <image:title>4 BHK and Sky Duplex Floor Plan - Joyville Vyomora</image:title>
      <image:caption>4 BHK Royale and Sky Duplex unit layout</image:caption>
    </image:image>`;
    } else if (route.path === '/masterplan') {
      imageTags = `
    <image:image>
      <image:loc>${baseUrl}/images/masterplan_bg.webp</image:loc>
      <image:title>Master Layout Plan - Joyville Vyomora Hinjewadi Pune</image:title>
      <image:caption>25-acre integrated township masterplan with 75% open landscaped greens</image:caption>
    </image:image>`;
    } else if (route.path === '/amenities') {
      imageTags = `
    <image:image>
      <image:loc>${baseUrl}/images/pool_bg.webp</image:loc>
      <image:title>32000 Sq Ft Luxury Clubhouse and Amenities</image:title>
      <image:caption>Temperature-controlled infinity pool and indoor sports arena</image:caption>
    </image:image>`;
    } else if (route.path === '/location') {
      imageTags = `
    <image:image>
      <image:loc>${baseUrl}/images/location_map.webp</image:loc>
      <image:title>Location Map - Hinjewadi Phase 1 and Mahalunge Pune</image:title>
      <image:caption>Strategic connectivity to Hinjewadi IT Park and Pune Metro Line 3</image:caption>
    </image:image>`;
    }

    xml += `
  <url>
    <loc>${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>${imageTags}
  </url>`;
  }

  // 2. Individual Shapoorji Pallonji & Joyville Pune Project Hubs
  for (const project of puneProjectsMasterList) {
    xml += `
  <url>
    <loc>${baseUrl}/projects/${project.slug}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.90</priority>
  </url>`;
  }

  // 3. High-Authority Real Estate Deep-Dive Articles
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
