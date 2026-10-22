import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SEOLocations, SEONRILocations, SEOConfigurations } from "@/lib/programmaticSEO";
import marketCombosData from "@/data/marketCombos.json";

export const metadata: Metadata = {
  title: "Pune Real Estate Market Intelligence Hub | Shapoorji Pallonji Vyomora",
  description: "Comprehensive Pune real estate market intelligence directory. Access micro-market trends, 2BHK, 3BHK, 4BHK pricing, and floor plans across Hinjewadi, Mahalunge, Baner, and Bavdhan.",
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/market",
  },
  openGraph: {
    title: "Pune Real Estate Market Intelligence Hub | Shapoorji Pallonji Vyomora",
    description: "Access micro-market trends, 2BHK, 3BHK, 4BHK pricing, and floor plans across Hinjewadi, Mahalunge, Baner, and Bavdhan.",
    url: "https://www.shapoorji-vyomora.com/market",
    siteName: "Shapoorji Pallonji Joyville Vyomora",
    locale: "en_IN",
    type: "website",
  },
};

export default function MarketIndexPage() {
  const combos = marketCombosData as { location: string; configuration: string; topic: string }[];
  
  // Group combos by location
  const locationGroups: Record<string, typeof combos> = {};
  for (const combo of combos) {
    if (!locationGroups[combo.location]) {
      locationGroups[combo.location] = [];
    }
    locationGroups[combo.location].push(combo);
  }

  const featuredHubs = [
    { name: "Hinjewadi Phase 1", slug: "hinjewadi-phase-1", desc: "Rajiv Gandhi IT Park corridor with Metro Line 3 connectivity." },
    { name: "Mahalunge Township", slug: "mahalunge", desc: "Prime hi-tech township zone adjacent to Hinjewadi & Baner." },
    { name: "Baner & Balewadi", slug: "baner", desc: "Upscale residential & commercial hub with top lifestyle infrastructure." },
    { name: "Bavdhan & Golfland", slug: "bavdhan", desc: "1,000-acre green valley living near Oxford Golf Resort." },
    { name: "Balewadi High Street", slug: "balewadi-high-street", desc: "Premier dining, shopping, and luxury residential destination." },
    { name: "Hadapsar & Annexe", slug: "hadapsar", desc: "East Pune IT nexus near Magarpatta and SP Infocity." },
  ];

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      <div className="container mx-auto px-6 md:px-12 pt-32">
        <Breadcrumbs items={[{ label: "Market Intelligence", href: "/market" }]} />
        
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#C5A059] mb-4 block">
            Pune Real Estate Intelligence Hub
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#0A192F] leading-tight mb-6">
            Micro-Market Reports &amp; Property Intelligence
          </h1>
          <p className="text-gray-600 font-light leading-relaxed text-lg">
            Empirical pricing trends, RERA verified configurations, capital appreciation projections, and connectivity analysis across all 60+ Pune micro-markets and global NRI investment channels for <strong>Shapoorji Pallonji Real Estate</strong>.
          </p>
        </div>

        {/* Featured Micro-Market Hubs */}
        <div className="mb-16">
          <h2 className="text-2xl font-serif text-[#0A192F] mb-6 border-b border-gray-200 pb-3">
            Featured Micro-Market Authority Hubs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHubs.map((hub) => (
              <div key={hub.slug} className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-serif text-[#0A192F] mb-2">{hub.name}</h3>
                <p className="text-sm text-gray-600 mb-4 font-light leading-relaxed">{hub.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(locationGroups[hub.slug] || []).slice(0, 4).map((c, i) => (
                    <Link
                      key={i}
                      href={`/market/${c.location}/${c.configuration}/${c.topic}`}
                      className="text-xs bg-[#0A192F]/5 hover:bg-[#C5A059] hover:text-white text-[#0A192F] px-3 py-1.5 rounded-md transition-colors capitalize"
                    >
                      {c.configuration.replace(/-/g, " ")} ({c.topic.replace(/-/g, " ")})
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete Micro-Markets Index */}
        <div className="bg-white p-8 md:p-12 rounded-2xl border border-black/5 shadow-sm">
          <h2 className="text-2xl font-serif text-[#0A192F] mb-4 border-b border-gray-200 pb-3">
            Complete Pune Micro-Market &amp; NRI Portals Directory
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Access targeted market intelligence guides, unit floor plans, price sheets, and RERA disclosures for every covered locality.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {Object.keys(locationGroups).sort().map((loc) => (
              <Link
                key={loc}
                href={`/market/${loc}/${locationGroups[loc][0].configuration}/${locationGroups[loc][0].topic}`}
                className="p-3 bg-[#FDFBF7] hover:bg-[#0A192F] hover:text-white rounded-lg border border-gray-200/60 text-xs font-medium text-gray-700 capitalize transition-all flex items-center justify-between group"
              >
                <span>{loc.replace(/-/g, " ")}</span>
                <span className="text-[#C5A059] text-[10px] opacity-70 group-hover:opacity-100">({locationGroups[loc].length})</span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
