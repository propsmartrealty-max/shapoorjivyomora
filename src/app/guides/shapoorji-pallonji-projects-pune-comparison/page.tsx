import { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EnquiryTriggerButton } from "@/components/ui/EnquiryTriggerButton";
import { puneProjectsMasterList } from "@/data/puneProjectsData";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  Calendar,
  Layers,
  HelpCircle,
  TrendingUp,
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shapoorji Pallonji Projects in Pune Comparison | Vanaha vs Golfland vs Vyomora vs Sensorium vs Hadapsar",
  description: "Comprehensive side-by-side comparison of Shapoorji Pallonji and Joyville projects in Pune. Compare prices, floor plans, clubhouse sizes, rental yields, and MahaRERA numbers for Hinjewadi, Bavdhan, and Hadapsar.",
  keywords: [
    "Shapoorji Pallonji projects Pune comparison",
    "Vanaha vs Joyville",
    "Joyville Sensorium vs Joyville Vyomora",
    "Vanaha vs Golfland",
    "Joyville Celestia vs Hadapsar Annexe",
    "best Shapoorji Pallonji project in Pune",
    "Shapoorji Pallonji Vanaha Bavdhan",
    "Joyville Vyomora Hinjewadi",
    "Joyville Sensorium Hinjewadi",
    "Joyville Hadapsar Annexe",
    "Shapoorji Pallonji Pune price list",
    "Shapoorji Pallonji Pune floor plans",
    "Shapoorji Pallonji rental yield Pune",
    "Shapoorji Pallonji property investment Pune"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison",
  },
  openGraph: {
    title: "Shapoorji Pallonji Projects in Pune Comparison Guide (2026)",
    description: "Which Shapoorji Pallonji project in Pune is best for you? Detailed analysis of Vanaha, Golfland, Vyomora, Sensorium, and Hadapsar Annexe.",
    url: "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison",
    type: "article",
    siteName: "Shapoorji Pallonji Pune",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Pune Projects Comparison Guide",
      },
    ],
  },
};

export default function ProjectsComparisonGuidePage() {
  const comparisonFaqs = [
    {
      question: "Which Shapoorji Pallonji project is best for IT professionals in West Pune?",
      answer: "For professionals working in Hinjewadi Rajiv Gandhi Infotech Park, Shapoorji Pallonji Joyville Vyomora (Joy 3.0) and Joyville Sensorium are the premier choices. Vyomora is located just 5 minutes from Phase 1 and the upcoming Pune Metro Line 3 station, offering luxury river-facing apartments, 4 BHK sky duplexes, and an expansive 32,000+ sq. ft. clubhouse."
    },
    {
      question: "What is the key difference between Vanaha Bavdhan and Joyville Hinjewadi?",
      answer: "Vanaha Bavdhan is designed as a sprawling 1,000-acre green valley township nestled near the Oxford Golf Resort, catering to luxury nature-facing living, golf-view duplexes (Golfland), and peaceful hillside surroundings. In contrast, Joyville Hinjewadi (Vyomora and Sensorium) caters directly to high-energy tech professionals prioritizing walk-to-work transit, immediate metro access, and high rental yields."
    },
    {
      question: "How do Joyville Vyomora and Joyville Sensorium compare?",
      answer: "Joyville Sensorium focuses on 5D biophilic multi-sensory living across 2.8 acres of sensory park with 2 and 3 BHK typologies. Joyville Vyomora represents 'Joy 3.0', the newest luxury iteration featuring larger 3 BHK, 4 BHK, and double-height Sky Duplexes, a 32,000+ sq. ft. grand clubhouse, and direct Mula riverfront promenade frontage."
    },
    {
      question: "Which project offers the lowest entry price and highest rental return in East Pune?",
      answer: "Joyville Hadapsar Annexe in Manjri offers the most accessible entry starting from ₹43 Lakhs* for 1 BHK and ₹68 Lakhs* for 2 BHKs. Located near SP Infocity and Magarpatta City, it delivers strong rental demand and yields averaging 4.5% to 5.2% annually."
    },
    {
      question: "Are all Shapoorji Pallonji Pune projects registered under MahaRERA?",
      answer: "Yes, every single phase and project in the Shapoorji Pallonji and Joyville Pune portfolio has an official MahaRERA registration number (e.g., Vyomora PR1260002600999, Sensorium P52100024965, Vanaha P52100024372). All statutory disclosures can be independently verified on the official MahaRERA portal (maharera.mahaonline.gov.in)."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison#article",
        "headline": "Shapoorji Pallonji Projects in Pune Comparison: Complete Buyer & Investor Guide",
        "description": "In-depth comparison of Vanaha, Golfland, Joyville Vyomora, Joyville Sensorium, Hadapsar Annexe, Celestia, and Wildernest.",
        "image": "https://www.shapoorji-vyomora.com/og-image.jpg",
        "datePublished": "2026-01-15T08:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": "Shapoorji Pallonji Real Estate Research",
          "url": "https://www.shapoorji-vyomora.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Shapoorji Pallonji Real Estate",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.shapoorji-vyomora.com/icon.svg"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison#faq",
        "mainEntity": comparisonFaqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison#breadcrumb",
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
            "name": "Guides",
            "item": "https://www.shapoorji-vyomora.com/articles"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Shapoorji Pune Comparison Guide",
            "item": "https://www.shapoorji-vyomora.com/guides/shapoorji-pallonji-projects-pune-comparison"
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#0A192F] pt-24 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: "Research & Guides", href: "/articles" },
            { label: "Pune Projects Comparison", href: "/guides/shapoorji-pallonji-projects-pune-comparison" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="mt-6 mb-12 bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-[#E2D9CC]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#0A192F] text-[#FDFBF7]">
                <Layers size={13} className="text-[#c5a880]" />
                Comparative Buyer Analysis
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck size={13} className="text-emerald-600" />
                All 11 MahaRERA Verified
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0A192F] tracking-tight leading-tight mb-5">
              Shapoorji Pallonji Pune Projects Comparison Guide
            </h1>

            <p className="text-base sm:text-xl text-[#1e2338]/80 font-light leading-relaxed mb-8">
              A comprehensive evaluation of Shapoorji Pallonji and Joyville residential developments in Pune. Compare locations, pricing, carpet areas, clubhouse sizes, commuting distances, and rental yields to choose the ideal home or investment.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <EnquiryTriggerButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] transition-all font-medium text-sm shadow-md">
                <FileText size={16} className="text-[#c5a880]" />
                Download Consolidated Price Comparison PDF
              </EnquiryTriggerButton>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#E2D9CC] text-[#0A192F] hover:bg-[#FDFBF7] transition-all font-medium text-sm"
              >
                Browse Individual Project Portfolios
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE SIDE-BY-SIDE MATRIX */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F]">
                Side-by-Side Comparison: Vanaha, Golfland, Vyomora, Sensorium & Hadapsar
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/70 mt-1">
                Direct benchmark across key parameters critical for end-use lifestyle and capital appreciation.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2D9CC] bg-[#FDFBF7] text-[#0A192F]">
                  <th className="py-3 px-4 font-semibold">Project Name</th>
                  <th className="py-3 px-4 font-semibold">Micro-Market</th>
                  <th className="py-3 px-4 font-semibold">Starting Price</th>
                  <th className="py-3 px-4 font-semibold">Carpet Area Range</th>
                  <th className="py-3 px-4 font-semibold">Clubhouse & Greens</th>
                  <th className="py-3 px-4 font-semibold">Target Buyer Profile</th>
                  <th className="py-3 px-4 font-semibold">MahaRERA ID</th>
                  <th className="py-3 px-4 text-right font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2D9CC]/60">
                {puneProjectsMasterList.map((p) => (
                  <tr key={p.slug} className="hover:bg-[#FDFBF7]/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#0A192F]">
                      <Link href={`/projects/${p.slug}`} className="hover:text-[#c5a880] transition-colors">
                        {p.name}
                      </Link>
                      <span className="block text-[11px] font-normal text-[#1e2338]/60">{p.badge}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.microMarket} ({p.zone})</td>
                    <td className="py-3.5 px-4 font-bold text-[#0A192F] font-serif">{p.startingPrice}</td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.carpetAreaRange}</td>
                    <td className="py-3.5 px-4">
                      <span className="block font-medium text-[#0A192F]">{p.clubhouseArea}</span>
                      <span className="text-[11px] text-emerald-700">{p.openSpacePercentage}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80 text-xs">
                      {p.zone === "West Pune" ? "Tech CXOs, IT Leaders, NRI Investors" : "Manufacturing Execs, First-Time Buyers, Rental Investors"}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-emerald-800 font-semibold">{p.mahaRera}</td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c5a880] hover:text-[#0A192F]"
                      >
                        Explore
                        <ArrowRight size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* DETAILED SUB-MARKET ANALYSIS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
            <span className="text-xs uppercase font-bold tracking-wider text-[#c5a880]">West Pune Tech Corridor</span>
            <h3 className="text-xl font-serif font-bold text-[#0A192F] mt-1 mb-3">
              Hinjewadi & Maan: Vyomora vs Sensorium
            </h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed mb-4">
              Hinjewadi Phase 1 represents the epicenter of Pune’s IT economy, housing over 300+ multinational firms. Joyville Vyomora (Joy 3.0) and Joyville Sensorium cater to this workforce with zero-stress transit and walk-to-work convenience. Vyomora leads with its 32,000+ sq. ft. flagship clubhouse and Mula riverfront promenade, while Sensorium features a dedicated 2.8-acre sensory theme park.
            </p>
            <div className="space-y-2 text-xs text-[#1e2338]/80 pt-2 border-t border-[#E2D9CC]/60">
              <div className="flex justify-between">
                <span>Rental Yield Expectation:</span>
                <span className="font-semibold text-emerald-700">4.5% - 5.5%</span>
              </div>
              <div className="flex justify-between">
                <span>Key Connectivity Node:</span>
                <span className="font-semibold text-[#0A192F]">Pune Metro Line 3 (3 mins)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
            <span className="text-xs uppercase font-bold tracking-wider text-[#c5a880]">West Pune Nature Sanctuary</span>
            <h3 className="text-xl font-serif font-bold text-[#0A192F] mt-1 mb-3">
              Bavdhan: Vanaha vs Golfland
            </h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed mb-4">
              Nestled near the Oxford Golf Resort in Bavdhan, Vanaha is a 1,000-acre green township surrounded by Sahyadri hills. Golfland is the ultra-luxury golf-facing sanctuary within Vanaha, offering panoramic fairways views, spacious duplexes, and duplex townhouses with air quality indices vastly superior to central Pune.
            </p>
            <div className="space-y-2 text-xs text-[#1e2338]/80 pt-2 border-t border-[#E2D9CC]/60">
              <div className="flex justify-between">
                <span>Living Environment:</span>
                <span className="font-semibold text-emerald-700">1000+ Acres Green Living</span>
              </div>
              <div className="flex justify-between">
                <span>Key Connectivity Node:</span>
                <span className="font-semibold text-[#0A192F]">Mumbai-Bangalore Bypass (5 mins)</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS SECTION */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60 mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F] mb-3 flex items-center gap-2">
            <HelpCircle className="text-[#c5a880]" size={26} />
            Frequently Asked Comparison Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#1e2338]/60 mb-8">
            Expert answers addressing property selection, price variance, transit times, and investment ROI.
          </p>

          <div className="space-y-4">
            {comparisonFaqs.map((faq, index) => (
              <div key={index} className="p-4 sm:p-6 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80">
                <h3 className="text-sm sm:text-base font-semibold text-[#0A192F] mb-2 flex items-start gap-2">
                  <span className="text-[#c5a880] font-bold">Q{index + 1}.</span>
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA CARD */}
        <section className="bg-[#0A192F] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl font-serif text-[#FDFBF7] mb-4">
              Need Personal Advice on Choosing Between Projects?
            </h2>
            <p className="text-sm sm:text-base text-[#FDFBF7]/80 font-light mb-8">
              Speak directly with our dedicated Shapoorji Pallonji Pune advisory team. Get honest comparisons on unit layouts, upcoming metro timelines, and tailored financial plans.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <EnquiryTriggerButton className="px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] font-semibold text-sm hover:bg-[#b8986c] transition-all shadow-md">
                Request Comparative Consultation
              </EnquiryTriggerButton>
              <a
                href="tel:+917744009295"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
              >
                <Phone size={15} className="text-[#c5a880]" />
                Call +91-7744009295
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
