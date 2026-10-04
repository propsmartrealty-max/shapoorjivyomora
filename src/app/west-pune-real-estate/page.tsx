import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EnquiryTriggerButton } from "@/components/ui/EnquiryTriggerButton";
import { 
  Building2, 
  TrendingUp, 
  Compass, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  Sparkles, 
  Layers, 
  Download, 
  BarChart3, 
  Check,
  Milestone
} from "lucide-react";

export const metadata: Metadata = {
  title: "West Pune Real Estate: 2026 Property Market Guide, Prices & Top Townships",
  description: "Comprehensive guide to West Pune real estate market (Hinjewadi, Mahalunge, Baner, Wakad, Balewadi, Bavdhan). Micro-market price trends, Pune Metro Line 3 impact, rental yields, and top township rankings led by Shapoorji Pallonji Joyville Vyomora.",
  keywords: [
    "west pune real estate",
    "pune real estate market",
    "best property in west pune",
    "luxury flats west pune",
    "hinjewadi real estate",
    "baner real estate",
    "mahalunge property",
    "wakad real estate",
    "balewadi property investment",
    "bavdhan flats",
    "pune metro line 3 real estate",
    "shapoorji pallonji vyomora",
    "joyville vyomora hinjewadi",
    "top builders west pune",
    "real estate investment pune 2026",
    "2bhk in hinjewadi",
    "3bhk in mahalunge",
    "4bhk in baner"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/west-pune-real-estate",
  },
  openGraph: {
    title: "West Pune Real Estate Market Guide 2026 | Hinjewadi, Baner & Mahalunge",
    description: "In-depth West Pune real estate analysis: price trends, rental yields, Metro Line 3 impact, and premier townships featuring Shapoorji Pallonji Joyville Vyomora.",
    url: "https://www.shapoorji-vyomora.com/west-pune-real-estate",
    type: "article",
    images: [{
      url: "https://www.shapoorji-vyomora.com/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "West Pune Real Estate Market Guide 2026 - Shapoorji Pallonji Joyville Vyomora"
    }]
  }
};

const microMarkets = [
  {
    name: "Hinjewadi (Phase 1, 2 & 3)",
    tag: "The IT Powerhouse",
    priceRange: "₹8,200 - ₹9,900 / sq. ft.",
    avgRentalYield: "5.8% - 6.5%",
    keyDrivers: "Rajiv Gandhi IT Park, Metro Line 3, Walk-to-Work demand",
    appreciation5Yr: "+48.6%",
    topProject: "Shapoorji Pallonji Joyville Vyomora (Joy 3.0)"
  },
  {
    name: "Mahalunge Hi-Tech City",
    tag: "The New Luxury Frontier",
    priceRange: "₹7,800 - ₹9,400 / sq. ft.",
    avgRentalYield: "4.9% - 5.5%",
    keyDrivers: "PMDRA Smart City, Mula Riverfront, 6-Lane Hinjewadi Bridge",
    appreciation5Yr: "+54.2%",
    topProject: "Joyville Vyomora & Godrej Hillside"
  },
  {
    name: "Baner & Baner-Pashan Link Rd",
    tag: "Urban High-Income Core",
    priceRange: "₹10,500 - ₹13,800 / sq. ft.",
    avgRentalYield: "3.8% - 4.4%",
    keyDrivers: "Corporate headquarters, premium retail, nightlife, fine dining",
    appreciation5Yr: "+39.4%",
    topProject: "Kasturi, Supreme & Luxury High-rises"
  },
  {
    name: "Balewadi & High Street",
    tag: "Lifestyle & Entertainment Spine",
    priceRange: "₹9,800 - ₹12,400 / sq. ft.",
    avgRentalYield: "4.2% - 4.8%",
    keyDrivers: "Balewadi High Street commercial strip, Sports Complex, Metro access",
    appreciation5Yr: "+42.1%",
    topProject: "Pride World, Kunal & Urban Gated Enclaves"
  },
  {
    name: "Wakad & Tathawade",
    tag: "High-Density Commuter Hub",
    priceRange: "₹7,900 - ₹9,500 / sq. ft.",
    avgRentalYield: "4.6% - 5.2%",
    keyDrivers: "Mumbai-Pune Expressway proximity, educational institutes, Bhumkar Chowk",
    appreciation5Yr: "+36.8%",
    topProject: "Kolte Patil, VTP & Gated Communities"
  },
  {
    name: "Bavdhan & Oxford Valley",
    tag: "Hillside Scenic Living",
    priceRange: "₹8,500 - ₹10,500 / sq. ft.",
    avgRentalYield: "3.9% - 4.5%",
    keyDrivers: "NDA greenery, Kothrud connectivity, Chandani Chowk flyover network",
    appreciation5Yr: "+35.5%",
    topProject: "Shapoorji Vanaha & Wildstone"
  }
];

const infraCatalysts = [
  {
    title: "Pune Metro Line 3 (Hinjewadi to Shivajinagar)",
    timeline: "Operational 2026",
    impact: "Cuts travel time from 60+ mins to 25 mins across 23 elevated stations. Direct station access near Hinjewadi Phase 1.",
    stat: "18-24% price premium for residences within 1.5 km of stations."
  },
  {
    title: "128 km Pune Ring Road (West Corridor)",
    timeline: "Under Active Development",
    impact: "8-lane access-controlled expressway connecting West Pune directly to Chakan, Talegaon, and Mumbai-Pune Expressway.",
    stat: "Bypasses intra-city freight traffic, drastically easing Hinjewadi commute."
  },
  {
    title: "Mahalunge-Hinjewadi 6-Lane River Bridge",
    timeline: "Near Completion",
    impact: "Direct elevated connection over Mula River directly joining Mahalunge Smart City to Hinjewadi Phase 1 tech campuses.",
    stat: "Eliminates Wakad-Bhumkar bottleneck, reducing drive time to under 4 minutes."
  },
  {
    title: "Balewadi-Mahalunge Riverfront Promenade",
    timeline: "2026-2027",
    impact: "Ecological rejuvenation of Mula River with pedestrian greenways, cycling tracks, and river-facing lifestyle zones.",
    stat: "Elevates waterfront property desirability similar to European riverfronts."
  }
];

const competitorRankings = [
  {
    rank: 1,
    name: "Shapoorji Pallonji Joyville Vyomora (Joy 3.0)",
    developer: "Shapoorji Pallonji Real Estate (150+ Yr Legacy)",
    location: "Hinjewadi Phase 1 / Maan Road",
    configs: "2, 3 & 4 BHK, Sky Duplexes",
    price: "From ₹84.99 Lakhs*",
    clubhouse: "32,000+ sq. ft. (Largest in micro-market)",
    keyAdvantage: "Riverfront promenade, zero wasted carpet layouts, walk-to-work proximity to Infosys/Wipro, MahaRERA PR1260002600999.",
    score: "9.8 / 10 (Undisputed Top Pick)"
  },
  {
    rank: 2,
    name: "Godrej 24 & Godrej Hillside",
    developer: "Godrej Properties",
    location: "Hinjewadi Phase 1 & Mahalunge",
    configs: "1, 2 & 3 BHK",
    price: "₹78 Lakhs - ₹1.45 Cr",
    clubhouse: "18,000 sq. ft.",
    keyAdvantage: "Brand trust, hill views, but higher density per acre and smaller master clubhouse scale.",
    score: "9.1 / 10"
  },
  {
    rank: 3,
    name: "Kolte Patil Life Republic",
    developer: "Kolte Patil Developers",
    location: "Marunji Road, Hinjewadi",
    configs: "1, 2, 3 & 4 BHK",
    price: "₹55 Lakhs - ₹1.60 Cr",
    clubhouse: "Multiple sector clubs",
    keyAdvantage: "Mega township size, but location is deeper inside Marunji with peak hour road bottlenecks.",
    score: "8.8 / 10"
  },
  {
    rank: 4,
    name: "VTP Blue Waters",
    developer: "VTP Realty",
    location: "Mahalunge Hi-Tech City",
    configs: "1, 2 & 3 BHK",
    price: "₹60 Lakhs - ₹1.35 Cr",
    clubhouse: "Sector amenities",
    keyAdvantage: "Affordable entry price, but significantly higher tower density compared to Shapoorji's luxury standard.",
    score: "8.5 / 10"
  }
];

const faqs = [
  {
    q: "Why is West Pune considered the #1 real estate market in Maharashtra?",
    a: "West Pune accounts for more than 42% of total residential demand in Pune. Driven by the 400,000+ workforce of Rajiv Gandhi Infotech Park in Hinjewadi, high disposable income IT executives, top international schools, seamless connectivity to Mumbai via the Expressway, and massive infrastructure upgrades like Pune Metro Line 3 and the Pune Ring Road, West Pune offers the highest capital appreciation and rental security in the state."
  },
  {
    q: "Which micro-market in West Pune delivers the highest rental yield?",
    a: "Hinjewadi Phase 1 and the adjoining Mahalunge growth corridor yield between 5.4% and 6.5% gross annual rental return. Due to relentless demand from tech professionals seeking walk-to-work homes near Infosys, Wipro, TCS, and Cognizant campuses, quality 2 BHK and 3 BHK homes in gated townships like Shapoorji Pallonji Joyville Vyomora experience negligible vacancy periods and consistent 8-10% annual rent escalations."
  },
  {
    q: "How will Pune Metro Line 3 impact property values in West Pune?",
    a: "Historical transit infrastructure data shows that residential properties within 1 to 2 km of metro stations experience an 18% to 25% capital appreciation boost upon commercial operations. Pune Metro Line 3 (23.2 km, Hinjewadi to Shivajinagar) eliminates chronic highway bottlenecks and directly connects Hinjewadi to Pune Central and the railway station in 25 minutes."
  },
  {
    q: "What is the average price per square foot across West Pune in 2026?",
    a: "In 2026, carpet area prices range from ₹7,800 to ₹9,400 per sq. ft. in Mahalunge; ₹8,200 to ₹9,900 per sq. ft. in Hinjewadi Phase 1; ₹7,900 to ₹9,500 per sq. ft. in Wakad; and ₹10,500 to ₹13,800 per sq. ft. in Baner. Premium luxury townships by top-tier builders command a well-justified 10-15% premium due to integrated amenities and brand reliability."
  },
  {
    q: "Which is the top residential project to invest in West Pune today?",
    a: "Shapoorji Pallonji Joyville Vyomora (Joy 3.0) in Hinjewadi Phase 1 / Mahalunge is widely ranked as the #1 project in West Pune. It combines a 25-acre riverfront layout, a 32,000+ sq. ft. clubhouse, superior 2, 3, 4 BHK and Sky Duplex floor plans, pre-launch pricing advantages starting from ₹84.99 Lakhs*, and the 150+ year construction heritage of the Shapoorji Pallonji Group (MahaRERA: PR1260002600999)."
  },
  {
    q: "How does West Pune compare to East Pune (Kharadi and Hadapsar)?",
    a: "While East Pune (Kharadi, Hadapsar) caters to BFSI and IT clusters, West Pune (Hinjewadi, Baner, Wakad) enjoys a much larger scale IT ecosystem, superior connectivity to Mumbai (saving 1.5 hours in transit), higher green cover, and proximity to scenic Western Ghats. Furthermore, the arrival of Pune Metro Line 3 gives West Pune an immediate mass transit advantage over East Pune."
  },
  {
    q: "Can NRIs invest in West Pune real estate under RBI FEMA regulations?",
    a: "Yes. Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely purchase residential property in India with full repatriation rights for sale proceeds (subject to RBI regulations). With favorable currency exchange rates against the US Dollar, UAE Dirham, and British Pound, investments in West Pune offer dollar-adjusted returns of 12-15% annually when factoring in rental income and capital growth."
  }
];

export default function WestPuneRealEstatePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.shapoorji-vyomora.com/west-pune-real-estate#article",
        "headline": "West Pune Real Estate: 2026 Property Market Guide, Prices & Top Townships",
        "description": "Comprehensive authority guide analyzing West Pune real estate market: Hinjewadi, Mahalunge, Baner, Wakad, Balewadi, and Bavdhan. Micro-market price trends, Pune Metro Line 3 impact, rental yields, and top township rankings.",
        "author": {
          "@type": "Organization",
          "name": "Propsmart Realty & Shapoorji Pallonji Research Desk",
          "url": "https://www.shapoorji-vyomora.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shapoorji Pallonji Joyville Vyomora",
          "url": "https://www.shapoorji-vyomora.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.shapoorji-vyomora.com/icon-512.png"
          }
        },
        "datePublished": "2026-09-01T08:00:00+05:30",
        "dateModified": "2026-10-04T12:00:00+05:30",
        "mainEntityOfPage": "https://www.shapoorji-vyomora.com/west-pune-real-estate",
        "about": [
          {
            "@type": "Place",
            "name": "West Pune",
            "sameAs": "https://en.wikipedia.org/wiki/Pune"
          },
          {
            "@type": "Place",
            "name": "Hinjawadi",
            "sameAs": "https://en.wikipedia.org/wiki/Hinjawadi"
          },
          {
            "@type": "Place",
            "name": "Rajiv Gandhi Infotech Park",
            "sameAs": "https://en.wikipedia.org/wiki/Rajiv_Gandhi_Infotech_Park"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.shapoorji-vyomora.com/west-pune-real-estate#faq",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shapoorji-vyomora.com/west-pune-real-estate#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.shapoorji-vyomora.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "West Pune Real Estate",
            "item": "https://www.shapoorji-vyomora.com/west-pune-real-estate"
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#FDFBF7] min-h-screen text-[#0A192F] pb-24">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Header */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0A192F] via-[#0D203D] to-[#0A192F] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Breadcrumbs items={[{ label: "West Pune Real Estate", href: "/west-pune-real-estate" }]} />

          <div className="max-w-4xl mt-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#C5A059] text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Authority Market Report 2026
            </div>
            
            <h1 className="text-4xl md:text-6xl font-serif leading-tight font-medium mb-6">
              The Definitive Guide to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C5A059]">
                West Pune Real Estate
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed mb-8 max-w-3xl">
              An exhaustive market intelligence report on Hinjewadi, Mahalunge, Baner, Wakad, and Balewadi. Discover micro-market price indices, rental yields, the 2026 Pune Metro Line 3 catalyst, and why <strong>Shapoorji Pallonji Joyville Vyomora</strong> stands as the #1 luxury township investment in Pune.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <EnquiryTriggerButton 
                className="px-6 py-3.5 bg-[#C5A059] hover:bg-[#b08e4d] text-[#0A192F] font-bold text-xs uppercase tracking-wider rounded-sm shadow-lg transition-all flex items-center gap-2"
              >
                <Download size={16} />
                Download West Pune Price Sheet & Report
              </EnquiryTriggerButton>
              
              <Link 
                href="/shapoorji-pallonji-pune-projects"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
              >
                <Building2 size={16} />
                All Shapoorji Pune Projects
              </Link>

              <a 
                href="tel:+917744009295"
                className="px-5 py-3.5 text-xs text-white/70 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Phone size={14} className="text-[#C5A059]" />
                VIP Advisory: +91 7744009295
              </a>
            </div>
          </div>

          {/* Quick Key Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">Price Spectrum</p>
              <p className="text-2xl md:text-3xl font-serif font-bold">₹7,800 - ₹13,800</p>
              <p className="text-[11px] text-white/60">Per sq. ft. carpet area</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">Gross Rental Yield</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-emerald-400">5.4% - 6.5%</p>
              <p className="text-[11px] text-white/60">Hinjewadi Phase 1 Corridor</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">Metro Line 3</p>
              <p className="text-2xl md:text-3xl font-serif font-bold">23 Stations</p>
              <p className="text-[11px] text-white/60">Hinjewadi to Shivajinagar</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-[#C5A059] font-semibold mb-1">Demand Dominance</p>
              <p className="text-2xl md:text-3xl font-serif font-bold text-[#C5A059]">42.4%</p>
              <p className="text-[11px] text-white/60">Of total Pune residential sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-3 block">
              Market Intelligence 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-6 leading-snug">
              Why West Pune is Maharashtra&apos;s Unstoppable Real Estate Growth Engine
            </h2>
            <div className="space-y-4 text-gray-700 font-light leading-relaxed text-sm md:text-base">
              <p>
                Over the past decade, <strong>West Pune</strong> has evolved from an emerging suburban corridor into the powerhouse of Western India&apos;s residential and commercial landscape. Driven by the immense economic impact of the <strong>Rajiv Gandhi Infotech Park</strong>—housing over 400,000 technology professionals across 2,800 acres—the micro-markets of <strong>Hinjewadi, Mahalunge, Baner, Wakad, and Balewadi</strong> consistently capture over 42% of Pune&apos;s total property transactions.
              </p>
              <p>
                Unlike speculative real estate markets, West Pune&apos;s demand is deeply backed by real end-user purchasing power. With median tech compensation in Hinjewadi growing at 12% annually, the demand for expansive <strong>2 BHK, 3 BHK, 4 BHK, and luxury Sky Duplex homes</strong> has reached an all-time peak.
              </p>
              <p>
                Leading this paradigm shift is the <strong>Mahalunge-Hinjewadi growth corridor</strong>, where high-density cluster developments are giving way to integrated luxury townships. At the forefront of this evolution stands <strong>Shapoorji Pallonji Joyville Vyomora (Joy 3.0)</strong>, bringing 150+ years of engineering perfection, 32,000+ sq. ft. club amenities, and riverside tranquility to the city&apos;s prime tech nerve center.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-black/5 shadow-lg relative">
            <h3 className="text-xl font-serif font-bold text-[#0A192F] mb-6 flex items-center gap-2">
              <BarChart3 className="text-[#C5A059]" />
              Key Demand Drivers at a Glance
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Direct Mumbai Expressway Access", desc: "Saves 90 mins travel time compared to East Pune (Kharadi/Wagholi)." },
                { title: "Walk-to-Work Tech Ecosystem", desc: "Infosys, Wipro, TCS, Cognizant, Tech Mahindra within 5-10 mins." },
                { title: "Top Educational Corridor", desc: "Symbiosis, Indira, Mercedes-Benz International, Podar nearby." },
                { title: "MahaRERA Regulatory Security", desc: "Stringent compliance protecting buyers from project delivery delays." }
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#C5A059]/20 text-[#0A192F] flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-[#C5A059]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0A192F] uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-gray-600 mt-0.5 font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
              <EnquiryTriggerButton 
                className="w-full py-3 bg-[#0A192F] hover:bg-[#C5A059] hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all text-center"
              >
                Request Exclusive Cost Sheet
              </EnquiryTriggerButton>
            </div>
          </div>
        </div>
      </section>

      {/* Micro-Market Comparative Pricing Matrix */}
      <section className="bg-white py-16 border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-2 block">
              Granular Micro-Market Intelligence
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-4">
              West Pune Micro-Markets: Pricing & Yield Benchmark
            </h2>
            <p className="text-gray-600 font-light text-sm md:text-base">
              A comprehensive comparative breakdown of current carpet pricing, historical 5-year capital appreciation, and gross rental yields across West Pune&apos;s leading residential sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {microMarkets.map((market, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFBF7] p-6 rounded-xl border border-black/5 hover:border-[#C5A059] transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-serif font-bold text-[#0A192F]">{market.name}</h3>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C5A059]/15 text-[#0A192F] px-2 py-0.5 rounded">
                      {market.tag}
                    </span>
                  </div>
                  
                  <div className="space-y-3 py-3 border-y border-black/5 my-3 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light">Carpet Rate:</span>
                      <span className="font-bold text-[#0A192F]">{market.priceRange}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light">Gross Rental Yield:</span>
                      <span className="font-bold text-emerald-600">{market.avgRentalYield}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500 font-light">5-Year Appreciation:</span>
                      <span className="font-bold text-[#C5A059]">{market.appreciation5Yr}</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 font-light leading-relaxed mb-3">
                    <strong>Growth Catalyst:</strong> {market.keyDrivers}
                  </p>
                </div>

                <div className="pt-3 border-t border-black/5 text-[11px] text-gray-500">
                  <span className="text-gray-400">Benchmark Project:</span><br />
                  <strong className="text-[#0A192F]">{market.topProject}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-gray-500 font-light">
            *Data aggregated from MahaRERA filings, IGBC green records, and proprietary quarterly transaction telemetry.
          </div>
        </div>
      </section>

      {/* Infrastructure Growth Catalysts */}
      <section className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-2 block">
            Catalysts for 2026 - 2030
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-4">
            The 4 Major Infrastructure Megaprojects Transforming West Pune
          </h2>
          <p className="text-gray-600 font-light text-sm md:text-base">
            These multi-thousand-crore state and central infrastructure investments are projected to drive an incremental 25-35% capital appreciation across Hinjewadi and Mahalunge over the next 36 months.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {infraCatalysts.map((cat, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#0A192F] text-[#C5A059] flex items-center justify-center font-bold font-serif">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-[#0A192F]">{cat.title}</h3>
                  <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">{cat.timeline}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 font-light leading-relaxed mb-4">
                {cat.impact}
              </p>
              <div className="bg-[#FDFBF7] p-3 rounded-lg border border-black/5 text-xs text-[#0A192F] font-medium flex items-center gap-2">
                <TrendingUp size={16} className="text-[#C5A059] shrink-0" />
                <span><strong>Real Estate Impact:</strong> {cat.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Townships Comparative Matrix */}
      <section className="bg-[#0A192F] text-white py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-2 block">
              Independent Editorial Rankings
            </span>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Top 4 Luxury Townships Ranked in West Pune
            </h2>
            <p className="text-white/70 font-light text-sm md:text-base">
              A comprehensive evaluation based on developer track record, master amenities scale, carpet efficiency, riverfront natural positioning, and investment ROI.
            </p>
          </div>

          <div className="space-y-6">
            {competitorRankings.map((proj) => (
              <div 
                key={proj.rank}
                className={`p-6 md:p-8 rounded-2xl border transition-all ${
                  proj.rank === 1 
                    ? "bg-gradient-to-r from-white/[0.08] to-white/[0.03] border-[#C5A059] shadow-2xl relative overflow-hidden" 
                    : "bg-white/[0.02] border-white/10"
                }`}
              >
                {proj.rank === 1 && (
                  <div className="absolute top-0 right-0 bg-[#C5A059] text-[#0A192F] text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-lg">
                    #1 Top Rated Investment 2026
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-[#C5A059]">
                        Rank #{proj.rank}
                      </span>
                      <span className="text-xs text-white/50">{proj.developer}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-white/60 mb-4 flex items-center gap-1">
                      <MapPin size={12} className="text-[#C5A059]" />
                      {proj.location}
                    </p>
                    <div className="inline-block bg-[#C5A059]/20 text-[#C5A059] text-xs font-semibold px-2.5 py-1 rounded">
                      Overall Score: {proj.score}
                    </div>
                  </div>

                  <div className="lg:col-span-4 text-xs space-y-2 border-y lg:border-y-0 lg:border-x border-white/10 py-4 lg:py-0 lg:px-6">
                    <div className="flex justify-between">
                      <span className="text-white/50">Configurations:</span>
                      <span className="font-semibold text-white">{proj.configs}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Starting Price:</span>
                      <span className="font-semibold text-[#C5A059]">{proj.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50">Clubhouse Scale:</span>
                      <span className="font-semibold text-white">{proj.clubhouse}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col justify-center gap-3">
                    <p className="text-xs text-white/70 font-light leading-relaxed">
                      {proj.keyAdvantage}
                    </p>
                    {proj.rank === 1 ? (
                      <EnquiryTriggerButton 
                        className="w-full py-2.5 bg-[#C5A059] hover:bg-[#b08e4d] text-[#0A192F] font-bold text-xs uppercase tracking-wider rounded-sm transition-all text-center"
                      >
                        Explore Vyomora Details
                      </EnquiryTriggerButton>
                    ) : (
                      <Link 
                        href="/articles"
                        className="text-xs text-[#C5A059] hover:underline flex items-center gap-1 font-semibold"
                      >
                        Read Full Comparison <ArrowRight size={12} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Playbook: IT Executives & NRI Investors */}
      <section className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-3 block">
              Investment Playbook
            </span>
            <h2 className="text-3xl font-serif text-[#0A192F] mb-6">
              Why IT Professionals & Global NRIs Choose Joyville Vyomora Hinjewadi
            </h2>
            <div className="space-y-4 text-gray-700 font-light text-sm md:text-base leading-relaxed">
              <p>
                For IT executives working in <strong>Infosys, Wipro, TCS, Cognizant, Dassault Systèmes, and Barclays</strong>, residential choice comes down to one non-negotiable metric: <em>quality of life</em>. Commuting across Pune can cost 10 to 14 hours every single week.
              </p>
              <p>
                <strong>Joyville Vyomora (Joy 3.0)</strong> eliminates that friction entirely. Situated on Maan Road directly bridging Hinjewadi Phase 1 and Mahalunge, residents enjoy a genuine walk-to-work lifestyle alongside resort-style weekend living.
              </p>
              <p>
                For our NRI clientele based in Dubai, London, Singapore, and Silicon Valley, Vyomora delivers complete peace of mind. As a 150-year-old global construction conglomerate, Shapoorji Pallonji guarantees transparent title deeds, MahaRERA (PR1260002600999) milestone governance, and predictable 12-15% blended annualized returns.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/investment-calculator" 
                className="px-5 py-3 bg-[#0A192F] text-white hover:bg-[#C5A059] hover:text-[#0A192F] text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2"
              >
                <BarChart3 size={14} />
                Try Real Estate ROI Calculator
              </Link>
              <Link 
                href="/articles/nri-guide-investing-in-pune-real-estate-from-usa-dubai-uk" 
                className="px-5 py-3 border border-black/10 hover:border-[#C5A059] text-xs font-bold uppercase tracking-wider rounded-sm transition-all flex items-center gap-2 text-[#0A192F]"
              >
                NRI Investment Guide
              </Link>
            </div>
          </div>

          <div className="bg-[#FDFBF7] border border-black/5 p-8 rounded-2xl shadow-sm space-y-6">
            <h3 className="text-xl font-serif font-bold text-[#0A192F]">
              Direct Micro-Market Exploration Links
            </h3>
            <p className="text-xs text-gray-600 font-light">
              Explore hyper-targeted live inventory, floor plans, and localized pricing matrices:
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <Link href="/market/hinjewadi-phase-1/2bhk-in-hinjewadi/price-trends" className="p-3 bg-white rounded border border-black/5 hover:border-[#C5A059] transition-colors font-medium">
                2 BHK Hinjewadi Phase 1
              </Link>
              <Link href="/market/mahalunge/3bhk-in-mahalunge/floor-plans" className="p-3 bg-white rounded border border-black/5 hover:border-[#C5A059] transition-colors font-medium">
                3 BHK Mahalunge Township
              </Link>
              <Link href="/market/baner/4bhk-in-baner/brochure-download" className="p-3 bg-white rounded border border-black/5 hover:border-[#C5A059] transition-colors font-medium">
                4 BHK Luxury Baner
              </Link>
              <Link href="/market/pune-west/sky-duplex/amenities" className="p-3 bg-white rounded border border-black/5 hover:border-[#C5A059] transition-colors font-medium">
                Ultra Luxury Sky Duplex
              </Link>
              <Link href="/market/rajiv-gandhi-infotech-park/best-flats-for-it-professionals/rental-yield" className="p-3 bg-white rounded border border-black/5 hover:border-[#C5A059] transition-colors font-medium">
                IT Professionals Hub
              </Link>
              <Link href="/market/hinjewadi-metro/luxury-apartments/connectivity" className="p-3 bg-white rounded border border-black/5 hover:border-[#C5A059] transition-colors font-medium">
                Metro Line 3 Residences
              </Link>
            </div>

            <div className="p-4 bg-[#C5A059]/10 rounded-lg border border-[#C5A059]/20 text-xs text-[#0A192F] space-y-2">
              <p className="font-bold flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-[#C5A059]" />
                Official MahaRERA Information
              </p>
              <p className="font-light text-gray-700">
                Joyville Vyomora (Joy 3.0) is registered under MahaRERA No. <strong>PR1260002600999</strong>. Verify project status at <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="underline font-medium">maharera.mahaonline.gov.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 max-w-4xl border-t border-black/5">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059] mb-2 block">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F]">
            West Pune Real Estate FAQs
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-black/5 shadow-sm">
              <h3 className="text-lg md:text-xl font-serif font-bold text-[#0A192F] mb-3">
                {faq.q}
              </h3>
              <p className="text-sm md:text-base text-gray-600 font-light leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Conversion Banner Section */}
      <section className="container mx-auto px-6 md:px-12 mt-12 max-w-6xl">
        <div className="bg-gradient-to-r from-[#0A192F] to-[#122849] p-8 md:p-12 rounded-3xl text-white text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C5A059] mb-3 block">
              Priority Booking Window Active
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-medium mb-4">
              Secure Pre-Launch Inventory at Shapoorji Joyville Vyomora
            </h2>
            <p className="text-sm md:text-base text-white/70 font-light mb-8">
              Avail Joy 3.0 introductory pricing starting from ₹84.99 Lakhs* before the public phase launch. Connect directly with our authorized sales advisors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <EnquiryTriggerButton 
                className="px-8 py-4 bg-[#C5A059] hover:bg-[#b08e4d] text-[#0A192F] font-bold text-xs uppercase tracking-widest rounded-sm transition-all shadow-lg"
              >
                Schedule VIP Site Visit & Request Cost Sheet
              </EnquiryTriggerButton>
              <a 
                href="tel:+917744009295"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-sm transition-all flex items-center gap-2"
              >
                <Phone size={14} className="text-[#C5A059]" />
                Call +91 7744009295
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
