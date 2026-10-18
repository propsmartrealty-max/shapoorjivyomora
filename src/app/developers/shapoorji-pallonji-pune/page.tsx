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
  Globe2,
  FileText,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shapoorji Pallonji Pune | SP Real Estate & Joyville Homes Portfolio Guide (2026)",
  description: "Official developer profile for Shapoorji Pallonji Real Estate in Pune. Discover the 150-year engineering legacy, Joyville platform with Actis/ADB/IFC, residential townships in Hinjewadi, Bavdhan, Hadapsar, and SP Infocity.",
  keywords: [
    "Shapoorji Pallonji Pune",
    "Shapoorji Pallonji projects Pune",
    "Shapoorji Pallonji real estate Pune",
    "Shapoorji Pallonji residential projects Pune",
    "Shapoorji Pallonji new projects Pune",
    "Shapoorji Pallonji upcoming projects Pune",
    "Shapoorji Pallonji ongoing projects Pune",
    "Shapoorji Pallonji new launch Pune",
    "Shapoorji Pallonji property Pune",
    "Shapoorji Pallonji flats Pune",
    "Shapoorji Pallonji apartments Pune",
    "Shapoorji Pallonji homes Pune",
    "Shapoorji Pallonji luxury apartments Pune",
    "Shapoorji Pallonji premium residences Pune",
    "Shapoorji Pallonji township Pune",
    "Shapoorji Pallonji Pune portfolio",
    "Shapoorji Pallonji Pune project list",
    "Shapoorji Pallonji all projects in Pune",
    "Shapoorji Pallonji Pune official website",
    "Shapoorji Pallonji Pune brochure",
    "Shapoorji Pallonji Pune price list",
    "Shapoorji Pallonji Pune floor plans",
    "Shapoorji Pallonji Pune project locations",
    "Shapoorji Pallonji Pune contact",
    "Shapoorji Pallonji Pune sales office",
    "Shapoorji Pallonji Pune property enquiry",
    "Shapoorji Pallonji Pune site visit",
    "Shapoorji Pallonji real estate reviews",
    "Shapoorji Pallonji developer profile",
    "Shapoorji Pallonji Joyville Pune",
    "Shapoorji Pallonji Vanaha Pune",
    "SP Real Estate Pune projects",
    "SPRE Pune residential projects",
    "Shapoorji Pallonji property investment Pune"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune",
  },
  openGraph: {
    title: "Shapoorji Pallonji Pune: 150-Year Legacy & Complete Real Estate Portfolio",
    description: "Explore the landmark developments of Shapoorji Pallonji Real Estate and Joyville Homes across Pune. From Vanaha Bavdhan to Joyville Vyomora Hinjewadi.",
    url: "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune",
    type: "website",
    siteName: "Shapoorji Pallonji Pune",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Real Estate Pune Portfolio",
      },
    ],
  },
};

export default function ShapoorjiPallonjiDeveloperPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune#organization",
        "name": "Shapoorji Pallonji Real Estate Pune",
        "legalName": "Shapoorji Pallonji Real Estate Pvt Ltd",
        "alternateName": [
          "Shapoorji Pallonji",
          "SP Real Estate Pune",
          "Joyville Homes Pune",
          "Shapoorji Pallonji Group"
        ],
        "url": "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune",
        "logo": "https://www.shapoorji-vyomora.com/icon.svg",
        "foundingDate": "1865",
        "founder": {
          "@type": "Person",
          "name": "Pallonji Mistry"
        },
        "sameAs": [
          "https://en.wikipedia.org/wiki/Shapoorji_Pallonji_Group",
          "https://www.wikidata.org/wiki/Q7489427",
          "https://www.shapoorjipallonji.com"
        ],
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Pune",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7744009295",
          "contactType": "sales",
          "availableLanguage": ["English", "Hindi", "Marathi"]
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune#breadcrumb",
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
            "name": "Developers",
            "item": "https://www.shapoorji-vyomora.com/projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Shapoorji Pallonji Pune",
            "item": "https://www.shapoorji-vyomora.com/developers/shapoorji-pallonji-pune"
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
            { label: "Projects", href: "/projects" },
            { label: "Shapoorji Pallonji Pune Profile", href: "/developers/shapoorji-pallonji-pune" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="mt-6 mb-12 bg-white rounded-3xl p-6 sm:p-12 shadow-sm border border-[#E2D9CC]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#c5a880]/15 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />
          
          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#0A192F] text-[#FDFBF7]">
                <Award size={13} className="text-[#c5a880]" />
                Established 1865 (150+ Years)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#c5a880]/15 text-[#634825] border border-[#c5a880]/30">
                <Globe2 size={13} />
                Global Presence Across 40+ Countries
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#0A192F] tracking-tight leading-tight mb-5">
              Shapoorji Pallonji Real Estate Pune
            </h1>

            <p className="text-base sm:text-xl text-[#1e2338]/80 font-light leading-relaxed mb-8">
              Shapoorji Pallonji Real Estate (SPRE) is the residential development arm of the iconic 150+ year-old Shapoorji Pallonji Group. In Pune, the conglomerate’s footprint spans landmark residential townships like <strong>Joyville Vyomora (Joy 3.0)</strong>, <strong>Vanaha Bavdhan</strong>, <strong>Joyville Sensorium</strong>, <strong>Golfland</strong>, <strong>Joyville Hadapsar Annexe</strong>, and the prestigious <strong>SP Infocity</strong> technology campus.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] transition-all font-medium text-sm shadow-md"
              >
                Browse All 11 Pune Projects
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/guides/shapoorji-pallonji-projects-pune-comparison"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#E2D9CC] text-[#0A192F] hover:bg-[#FDFBF7] transition-all font-medium text-sm"
              >
                Project Comparison Guide
              </Link>
              <EnquiryTriggerButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] hover:bg-[#b8986c] transition-all font-semibold text-sm shadow-sm">
                Enquire with Pune Sales Office
              </EnquiryTriggerButton>
            </div>
          </div>
        </section>

        {/* 150-YEAR LEGACY & CREDENTIALS */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
            <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#c5a880] flex items-center justify-center mb-4">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0A192F] mb-2">Architectural Monuments</h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
              Constructed India’s most revered monuments, including the Reserve Bank of India, the Bombay High Court, the Brabourne Stadium, and the Imperial Towers in Mumbai (India’s tallest residential twin towers).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
            <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#c5a880] flex items-center justify-center mb-4">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0A192F] mb-2">Joyville Global Platform</h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
              Joyville Homes was created as an aspirational housing partnership backed by global institutional giants: Shapoorji Pallonji, Actis (UK), the Asian Development Bank (ADB), and the International Finance Corporation (World Bank Group).
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
            <div className="w-12 h-12 rounded-2xl bg-[#0A192F] text-[#c5a880] flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-[#0A192F] mb-2">Pune Commercial Engine</h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
              SP Infocity in Phursungi, Pune is one of the city’s premier IT/ITES SEZs, delivering millions of square feet of grade-A commercial real estate hosting Accenture, IBM, Amdocs, and thousands of IT leaders.
            </p>
          </div>
        </section>

        {/* COMPLETE PUNE PORTFOLIO TABLE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60 mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F]">
                Shapoorji Pallonji & Joyville Pune Portfolio Matrix
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/70 mt-1">
                Complete overview of live projects, MahaRERA approvals, typologies, and starting prices.
              </p>
            </div>
            <EnquiryTriggerButton className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a]">
              Download Master Pricing PDF
            </EnquiryTriggerButton>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#E2D9CC] bg-[#FDFBF7] text-[#0A192F]">
                  <th className="py-3 px-4 font-semibold">Project Name</th>
                  <th className="py-3 px-4 font-semibold">Brand & Zone</th>
                  <th className="py-3 px-4 font-semibold">Micro-Market</th>
                  <th className="py-3 px-4 font-semibold">Configurations</th>
                  <th className="py-3 px-4 font-semibold">Starting Price</th>
                  <th className="py-3 px-4 font-semibold">MahaRERA ID</th>
                  <th className="py-3 px-4 text-right font-semibold">Explore</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2D9CC]/60">
                {puneProjectsMasterList.map((p, idx) => (
                  <tr key={idx} className="hover:bg-[#FDFBF7]/60 transition-colors">
                    <td className="py-3.5 px-4 font-medium text-[#0A192F]">
                      <Link href={`/projects/${p.slug}`} className="hover:text-[#c5a880] font-semibold underline-offset-2">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="block font-medium text-[#0A192F]">{p.brand}</span>
                      <span className="text-[11px] text-[#1e2338]/60">{p.zone}</span>
                    </td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.microMarket}</td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.typologies.slice(0, 2).join(", ")}</td>
                    <td className="py-3.5 px-4 font-semibold text-[#0A192F] font-serif">{p.startingPrice}</td>
                    <td className="py-3.5 px-4 font-mono text-emerald-800 text-xs font-semibold">{p.mahaRera}</td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/projects/${p.slug}`}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#c5a880] hover:text-[#0A192F]"
                      >
                        Details
                        <ArrowRight size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* WHY INVEST IN SHAPOORJI PALLONJI PUNE */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60 mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F] mb-6">
            Why Discerning Buyers & Investors Choose Shapoorji Pallonji in Pune
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80">
              <h3 className="text-base font-semibold text-[#0A192F] mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                Uncompromising Structural & Build Quality
              </h3>
              <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
                Utilizing advanced aluminium formwork (Mivan technology), laser-guided alignment, and earthquake-resistant seismic zone designs, Shapoorji homes ensure structural longevity and minimal maintenance costs over decades.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80">
              <h3 className="text-base font-semibold text-[#0A192F] mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                Prime Strategic Transit Locations
              </h3>
              <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
                Every Pune project is positioned directly along core employment and transportation nodes: Hinjewadi Phase 1 IT corridor (Metro Line 3), Bavdhan (Mumbai-Bangalore bypass), and Hadapsar (SP Infocity & Magarpatta).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80">
              <h3 className="text-base font-semibold text-[#0A192F] mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                High Rental Yields & NRI Demand
              </h3>
              <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
                Due to proximity to over 300+ multinational tech companies in Hinjewadi and Magarpatta, Shapoorji Pallonji units consistently command premium rental yields ranging from 4.2% to 5.6% per annum.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80">
              <h3 className="text-base font-semibold text-[#0A192F] mb-2 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-emerald-700 shrink-0" />
                100% MahaRERA Compliance & Title Transparency
              </h3>
              <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
                Clear land titles, transparent phase disclosures, statutory escrow account mechanisms, and zero financial ambiguity provide unmatched peace of mind for both end-users and investors.
              </p>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="bg-[#0A192F] text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-2xl sm:text-4xl font-serif text-[#FDFBF7] mb-4">
              Connect with the Official Shapoorji Pallonji Pune Sales Desk
            </h2>
            <p className="text-sm sm:text-base text-[#FDFBF7]/80 font-light mb-8">
              Schedule a personalized site visit, request consolidated brochures, or consult with our project advisory team on current launch benefits.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <EnquiryTriggerButton className="px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] font-semibold text-sm hover:bg-[#b8986c] transition-all shadow-md">
                Schedule Private Site Visit
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
