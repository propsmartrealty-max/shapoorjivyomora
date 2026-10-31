import { seoArticles } from '@/data/seoArticles';
import { puneProjectsMasterList } from '@/data/puneProjectsData';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://www.shapoorji-vyomora.com';
  const buildDate = new Date().toUTCString();

  const items = [
    {
      title: 'Shapoorji Pallonji Joyville Vyomora Hinjewadi (Joy 3.0) New Launch',
      link: `${baseUrl}/projects/joyville-vyomora-hinjewadi`,
      description: 'Official launch of Joyville Vyomora (Joy 3.0) offering 2, 3, 4 BHK and Sky Duplex luxury residences in Hinjewadi Phase 1, Pune with 32,000+ sq. ft. clubhouse under MahaRERA PR1260002600999.',
      pubDate: new Date('2026-10-31T06:00:00Z').toUTCString(),
      category: 'New Launch'
    },
    {
      title: 'Shapoorji Vyomora Residences: 2, 3, 4 BHK & Sky Duplex Floor Plans',
      link: `${baseUrl}/residences`,
      description: 'Detailed floor plans, usable carpet areas, and layout blueprints for 2 BHK Luxe/Grande, 3 BHK Elite/Imperial, and 4 BHK Sky Duplexes at Joyville Vyomora Hinjewadi.',
      pubDate: new Date('2026-10-31T05:00:00Z').toUTCString(),
      category: 'Residences & Floor Plans'
    },
    {
      title: '32,000+ Sq. Ft. Grand Clubhouse & Resort Amenities - Vyomora Hinjewadi',
      link: `${baseUrl}/amenities`,
      description: 'Explore world-class lifestyle amenities including temperature-controlled lap pool, sports arenas, wellness spa, and sky recreation decks.',
      pubDate: new Date('2026-10-31T04:30:00Z').toUTCString(),
      category: 'Amenities & Clubhouse'
    },
    {
      title: 'Location Advantage & Pune Metro Line 3 Connectivity Guide',
      link: `${baseUrl}/location`,
      description: 'Strategic connectivity analysis: 5 minutes to Infosys Circle Hinjewadi Phase 1, walking distance to proposed Metro station, seamless connectivity to Baner and Balewadi.',
      pubDate: new Date('2026-10-31T04:00:00Z').toUTCString(),
      category: 'Location & Infrastructure'
    },
    {
      title: 'West Pune Real Estate Market Intelligence Hub 2026',
      link: `${baseUrl}/west-pune-real-estate`,
      description: 'Definitive market research on capital appreciation trends, rental yields, infrastructure upgrades, and investment hotspots across Hinjewadi, Mahalunge, and Baner.',
      pubDate: new Date('2026-10-31T03:30:00Z').toUTCString(),
      category: 'Market Research'
    },
    {
      title: 'Shapoorji Pallonji Real Estate Pune Developer Master Profile',
      link: `${baseUrl}/developers/shapoorji-pallonji-pune`,
      description: 'Comprehensive analysis of Shapoorji Pallonji Real Estate heritage, Joyville partnership, engineering innovations, and residential developments across Pune.',
      pubDate: new Date('2026-10-30T10:00:00Z').toUTCString(),
      category: 'Developer Profile'
    },
    {
      title: 'Shapoorji Pallonji Pune Projects Comparison Guide 2026',
      link: `${baseUrl}/guides/shapoorji-pallonji-projects-pune-comparison`,
      description: 'Definitive side-by-side comparison of Joyville Vyomora, Joyville Sensorium, Vanaha Bavdhan, Golfland, Hadapsar Annexe, Celestia, and Wildernest at SP Kingstown.',
      pubDate: new Date('2026-10-30T09:00:00Z').toUTCString(),
      category: 'Comparison Guide'
    },
    {
      title: 'Shapoorji Pallonji Pune Projects Master Directory',
      link: `${baseUrl}/shapoorji-pallonji-pune-projects`,
      description: 'Complete verified directory of Shapoorji Pallonji residential townships and landmark developments across East and West Pune.',
      pubDate: new Date('2026-10-30T08:00:00Z').toUTCString(),
      category: 'Projects Directory'
    },
    {
      title: 'Masterplan & Township Architecture - Joyville Vyomora',
      link: `${baseUrl}/masterplan`,
      description: '25-acre integrated township layout plan with 75% open spaces, green biophilic corridors, and modern infrastructure.',
      pubDate: new Date('2026-10-30T07:30:00Z').toUTCString(),
      category: 'Masterplan'
    },
    {
      title: 'Premium Engineering Specifications & Material Finishes',
      link: `${baseUrl}/specifications`,
      description: 'Detailed civil, architectural, electrical, and plumbing specifications for all residential towers at Shapoorji Vyomora Hinjewadi.',
      pubDate: new Date('2026-10-30T07:00:00Z').toUTCString(),
      category: 'Specifications'
    },
    {
      title: 'Pune Real Estate Market Combos & Micro-Market Indices',
      link: `${baseUrl}/market`,
      description: 'Comprehensive programmatic market directory covering 600+ micro-market combinations, property prices, and investment reviews.',
      pubDate: new Date('2026-10-30T06:30:00Z').toUTCString(),
      category: 'Market Indices'
    },
    {
      title: 'Pune Real Estate ROI & EMI Investment Calculator',
      link: `${baseUrl}/investment-calculator`,
      description: 'Interactive property calculation tool for projected capital appreciation, rental yield, and monthly EMI for Hinjewadi properties.',
      pubDate: new Date('2026-10-30T06:00:00Z').toUTCString(),
      category: 'Investment Tools'
    },
    ...puneProjectsMasterList.map((p) => ({
      title: `${p.name} - ${p.location}`,
      link: `${baseUrl}/projects/${p.slug}`,
      description: `${p.tagline}. Typologies: ${p.typologies.join(', ')}. Price starting from ${p.startingPrice}. MahaRERA: ${p.mahaRera}.`,
      pubDate: new Date('2026-08-15T00:00:00Z').toUTCString(),
      category: 'Residential Project'
    })),
    ...seoArticles.slice(0, 15).map((a) => ({
      title: a.title,
      link: `${baseUrl}/articles/${a.slug}`,
      description: a.excerpt,
      pubDate: new Date(a.date).toUTCString(),
      category: 'Real Estate Analysis'
    }))
  ];

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Shapoorji Pallonji Joyville Vyomora Pune - Official Feed</title>
    <link>${baseUrl}</link>
    <description>Latest project updates, price releases, construction progress, and architectural guides for Shapoorji Pallonji &amp; Joyville Homes in Pune.</description>
    <language>en-in</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    ${items.map(item => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description><![CDATA[${item.description}]]></description>
      <category>${item.category}</category>
      <pubDate>${item.pubDate}</pubDate>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
