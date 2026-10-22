import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { seoArticles } from "@/data/seoArticles";
import marketCombosData from "@/data/marketCombos.json";

export const metadata: Metadata = {
  title: "HTML Sitemap & Master Pune Real Estate Index | Shapoorji Pallonji Vyomora",
  description: "Exhaustive HTML sitemap and real estate index for Shapoorji Pallonji Joyville Vyomora. Complete crawl directory for all residences, micro-market reports, and floor plans.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/sitemap",
  },
  openGraph: {
    title: "HTML Sitemap & Master Pune Real Estate Index | Shapoorji Pallonji Vyomora",
    description: "Complete crawl directory for all residences, micro-market reports, and floor plans.",
    url: "https://www.shapoorji-vyomora.com/sitemap",
    siteName: "Shapoorji Pallonji Joyville Vyomora",
    locale: "en_IN",
    type: "website",
  },
};

interface MarketCombo {
  location: string;
  configuration: string;
  topic: string;
}

const REGIONAL_CLUSTERS: Record<string, string[]> = {
  "Hinjewadi & IT Corridor Hubs": [
    "hinjewadi", "hinjewadi-phase-1", "hinjewadi-phase-2", "hinjewadi-phase-3",
    "rajiv-gandhi-infotech-park", "maan-road", "marunji", "marunji-road",
    "infosys-circle-hinjewadi", "wipro-hinjewadi", "tech-mahindra-hinjewadi",
    "cognizant-hinjewadi", "hinjewadi-metro"
  ],
  "Baner, Balewadi & Mahalunge Township": [
    "baner", "baner-road", "baner-pashan-link-road", "balewadi",
    "balewadi-high-street", "mahalunge", "mahalunge-township", "sus", "sus-road"
  ],
  "Bavdhan & West Pune Valley": [
    "bavdhan", "bavdhan-khurd", "kothrud", "pashan", "pune-west",
    "pune-mumbai-highway", "mumbai-pune-expressway", "mumbai-pune-expressway-corridor"
  ],
  "Wakad, Tathawade & PCMC Corridor": [
    "wakad", "bhumkar-chowk", "tathawade", "tathawade-ravet-corridor",
    "punawale", "akurdi", "bhosari", "chakan", "talegaon", "mukai-chowk", "pimpri-chinchwad"
  ],
  "East & Central Pune Hubs": [
    "hadapsar", "manjri", "aundh", "kharadi", "kalyani-nagar", "wagholi",
    "pune", "pune-east", "pune-it-corridor", "pune-ring-road"
  ],
  "Global NRI & International Portals": [
    "dubai", "usa", "singapore", "london", "uk", "kuwait", "uae",
    "california-nri", "nri-investors", "nri-real-estate-india", "global-investors"
  ]
};

export default function HTMLSitemapPage() {
  const combos = marketCombosData as MarketCombo[];

  // Group combos by location
  const combosByLocation: Record<string, MarketCombo[]> = {};
  for (const combo of combos) {
    if (!combosByLocation[combo.location]) {
      combosByLocation[combo.location] = [];
    }
    combosByLocation[combo.location].push(combo);
  }

  const mainPages = [
    { name: "Homepage & Project Showcase", href: "/" },
    { name: "The Vision & Developer Legacy", href: "/vision" },
    { name: "Residences, Floor Plans & Sky Duplexes", href: "/residences" },
    { name: "32,000+ sq. ft. Clubhouse & Amenities", href: "/amenities" },
    { name: "Masterplan & Site Layout", href: "/masterplan" },
    { name: "Specifications & Premium Finishes", href: "/specifications" },
    { name: "Location, Metro Line 3 & Transit Map", href: "/location" },
    { name: "West Pune Real Estate Authority Hub", href: "/west-pune-real-estate" },
    { name: "Shapoorji Pallonji Pune Projects Portfolio", href: "/shapoorji-pallonji-pune-projects" },
    { name: "Market Intelligence & Reports Hub", href: "/market" },
    { name: "Investment & EMI ROI Calculator", href: "/investment-calculator" },
    { name: "Real Estate Market Articles & Research", href: "/articles" },
    { name: "Pune Micro-Markets & Typology Directory", href: "/locations" },
    { name: "Sales Desk & VIP Site Visit Booking", href: "/contact" }
  ];

  const puneProjects = [
    { name: "Joyville Vyomora (Mahalunge-Hinjewadi)", href: "/projects/joyville-vyomora-hinjewadi" },
    { name: "Joyville Sensorium (Hinjewadi Phase 1)", href: "/projects/joyville-sensorium" },
    { name: "Shapoorji Pallonji Vanaha (Bavdhan)", href: "/projects/shapoorji-pallonji-vanaha" },
    { name: "Vanaha Golfland (Bavdhan Valley)", href: "/projects/vanaha-golfland" },
    { name: "Joyville Hadapsar Annexe & Celestia", href: "/projects/joyville-hadapsar-annexe" },
    { name: "Wildernest at SP Kingstown (Pune)", href: "/projects/wildernest-sp-kingstown" },
    { name: "Shapoorji Pallonji Pune Master Developer Hub", href: "/developers/shapoorji-pallonji-pune" },
    { name: "Pune Projects Comprehensive Comparison Guide", href: "/guides/shapoorji-pallonji-projects-pune-comparison" }
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-32">
        <Breadcrumbs items={[{ label: "HTML Sitemap", href: "/sitemap" }]} />
        
        <div className="mb-12 max-w-4xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">
            Google Crawl Index &amp; Master Directory
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0A192F] leading-tight mb-4">
            Master Site Index &amp; Complete URL Directory
          </h1>
          <p className="text-gray-600 font-light leading-relaxed">
            Exhaustive crawl paths and semantic link hierarchy for all <strong>630+ verified pages</strong> of <strong>Shapoorji Pallonji Joyville Vyomora</strong>. Access core project sections, research whitepapers, Pune micro-market landing pages, and NRI investment channels.
          </p>
        </div>

        {/* Section 1: Core Navigation & Authority Hubs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Main Pages */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-lg font-serif text-[#0A192F] mb-6 border-b border-gray-100 pb-3 flex items-center justify-between">
              <span>Core Project Sections</span>
              <span className="text-xs font-sans text-[#C5A059] font-medium">({mainPages.length})</span>
            </h2>
            <ul className="space-y-3 text-sm">
              {mainPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="text-gray-700 hover:text-[#C5A059] transition-colors font-medium flex items-center gap-2">
                    <span className="text-[#C5A059]">›</span>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pune Projects Portfolio */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-lg font-serif text-[#0A192F] mb-6 border-b border-gray-100 pb-3 flex items-center justify-between">
              <span>Shapoorji Pune Portfolio</span>
              <span className="text-xs font-sans text-[#C5A059] font-medium">({puneProjects.length})</span>
            </h2>
            <ul className="space-y-3 text-sm">
              {puneProjects.map((proj) => (
                <li key={proj.href}>
                  <Link href={proj.href} className="text-gray-700 hover:text-[#C5A059] transition-colors font-medium flex items-center gap-2">
                    <span className="text-[#C5A059]">›</span>
                    {proj.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Articles */}
          <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
            <h2 className="text-lg font-serif text-[#0A192F] mb-6 border-b border-gray-100 pb-3 flex items-center justify-between">
              <span>Research &amp; Comparison Guides</span>
              <span className="text-xs font-sans text-[#C5A059] font-medium">({seoArticles.length})</span>
            </h2>
            <ul className="space-y-3 text-sm">
              {seoArticles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/articles/${article.slug}`} className="text-gray-700 hover:text-[#C5A059] transition-colors font-medium flex items-start gap-2 line-clamp-2">
                    <span className="text-[#C5A059] mt-0.5">›</span>
                    <span>{article.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Section 2: Complete 584 Micro-Market Combos Directory */}
        <div className="space-y-12">
          <div className="border-b border-[#0A192F]/10 pb-4">
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-1">
              Programmatic Crawl Architecture
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#0A192F]">
              Pune Micro-Markets &amp; Configuration Intelligence Matrix ({combos.length} Canonical URLs)
            </h2>
          </div>

          {Object.entries(REGIONAL_CLUSTERS).map(([clusterName, locations]) => {
            // Filter locations that have combos
            const activeLocations = locations.filter((loc) => (combosByLocation[loc] || []).length > 0);
            if (activeLocations.length === 0) return null;

            const totalClusterCombos = activeLocations.reduce((sum, loc) => sum + combosByLocation[loc].length, 0);

            return (
              <div key={clusterName} className="bg-white p-8 md:p-10 rounded-2xl border border-black/5 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-100 pb-4 mb-6 gap-2">
                  <h3 className="text-xl font-serif text-[#0A192F] flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
                    {clusterName}
                  </h3>
                  <span className="text-xs font-medium bg-[#0A192F]/5 text-[#0A192F] px-3 py-1 rounded-full">
                    {totalClusterCombos} Verified Guides
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {activeLocations.map((loc) => {
                    const locCombos = combosByLocation[loc];
                    const cleanLocName = loc.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

                    return (
                      <div key={loc} className="border border-gray-100 rounded-xl p-4 bg-[#FDFBF7]/40 hover:bg-[#FDFBF7] transition-colors">
                        <h4 className="text-sm font-semibold text-[#0A192F] mb-3 pb-2 border-b border-gray-200/60 flex items-center justify-between">
                          <span>{cleanLocName}</span>
                          <span className="text-[11px] font-normal text-gray-500">({locCombos.length})</span>
                        </h4>
                        <ul className="space-y-1.5 max-h-60 overflow-y-auto pr-1 text-xs">
                          {locCombos.map((combo, idx) => {
                            const cleanConfig = combo.configuration.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                            const cleanTopic = combo.topic.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
                            return (
                              <li key={idx}>
                                <Link
                                  href={`/market/${combo.location}/${combo.configuration}/${combo.topic}`}
                                  className="text-gray-600 hover:text-[#C5A059] transition-colors block truncate"
                                  title={`${cleanConfig} in ${cleanLocName} - ${cleanTopic}`}
                                >
                                  • {cleanConfig} ({cleanTopic})
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
