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
  Calendar, 
  ArrowRight, 
  Phone, 
  Layers, 
  Award,
  CheckCircle2,
  ExternalLink
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shapoorji Pallonji Projects in Pune | Joyville Homes Pune Directory (2026)",
  description: "Explore all residential township projects by Shapoorji Pallonji Real Estate and Joyville Homes in Pune. Official project listings, MahaRERA registrations, floor plans, and pricing for Hinjewadi, Bavdhan, and Hadapsar.",
  keywords: [
    "Shapoorji Pallonji Pune",
    "Shapoorji Pallonji projects Pune",
    "Shapoorji Pallonji real estate Pune",
    "Joyville Homes Pune",
    "Shapoorji Pallonji Joyville Pune",
    "Joyville Vyomora Hinjewadi",
    "Joyville Sensorium",
    "Shapoorji Pallonji Vanaha",
    "Vanaha Golfland Bavdhan",
    "Joyville Hadapsar Annexe",
    "Joyville Celestia Pune",
    "Wildernest at SP Kingstown",
    "all projects in Pune Shapoorji Pallonji",
    "Shapoorji Pallonji Pune brochure",
    "Shapoorji Pallonji Pune price list"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/projects",
  },
  openGraph: {
    title: "Shapoorji Pallonji & Joyville Homes Pune: Complete Project Directory",
    description: "Browse verified residential townships in Hinjewadi, Bavdhan, and Hadapsar. Compare prices, carpet areas, and MahaRERA registrations.",
    url: "https://www.shapoorji-vyomora.com/projects",
    type: "website",
    siteName: "Shapoorji Pallonji Pune Portfolio",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Pune Residential Projects",
      },
    ],
  },
};

export default function ProjectsDirectoryPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/projects#itemlist",
        "name": "Shapoorji Pallonji & Joyville Homes Pune Projects Directory",
        "description": "Comprehensive list of all active residential projects in Pune by Shapoorji Pallonji Real Estate.",
        "itemListElement": puneProjectsMasterList.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": project.name,
          "url": `https://www.shapoorji-vyomora.com/projects/${project.slug}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.shapoorji-vyomora.com/projects#breadcrumb",
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
            "name": "Projects",
            "item": "https://www.shapoorji-vyomora.com/projects"
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
            { label: "Pune Projects", href: "/projects" },
          ]}
        />

        {/* HERO SECTION */}
        <section className="mt-6 mb-12 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#0A192F] text-[#FDFBF7]">
                <Award size={13} className="text-[#c5a880]" />
                150+ Year Construction Heritage
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#c5a880]/15 text-[#634825] border border-[#c5a880]/30">
                <Sparkles size={13} />
                11 Landmark Pune Projects
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F] tracking-tight leading-tight mb-4">
              Shapoorji Pallonji & Joyville Projects in Pune
            </h1>

            <p className="text-base sm:text-lg text-[#1e2338]/80 font-light leading-relaxed max-w-4xl mb-6">
              Official portal directory covering all residential township projects across West Pune (Hinjewadi, Maan, Mahalunge, Bavdhan) and East Pune (Hadapsar Annexe, Manjri). Access verified MahaRERA registration details, floor plans, carpet areas, indicative cost sheets, and direct sales office assistance.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/guides/shapoorji-pallonji-projects-pune-comparison"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] transition-all font-medium text-sm shadow-md"
              >
                Compare All Projects Side-by-Side
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/developers/shapoorji-pallonji-pune"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#E2D9CC] text-[#0A192F] hover:bg-[#FDFBF7] transition-all font-medium text-sm"
              >
                About Developer Heritage
              </Link>
              <EnquiryTriggerButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] hover:bg-[#b8986c] transition-all font-semibold text-sm shadow-sm">
                Request Master Price List
              </EnquiryTriggerButton>
            </div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puneProjectsMasterList.map((project) => (
            <div
              key={project.slug}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-[#E2D9CC]/60 flex flex-col justify-between hover:shadow-md hover:border-[#c5a880] transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-[#c5a880]">
                    {project.brand}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FDFBF7] text-[#0A192F] border border-[#E2D9CC]">
                    {project.zone}
                  </span>
                </div>

                <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-1.5 leading-snug">
                  <Link href={`/projects/${project.slug}`} className="hover:text-[#c5a880] transition-colors">
                    {project.name}
                  </Link>
                </h2>

                <p className="text-xs text-[#1e2338]/70 mb-4 font-light flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#c5a880] shrink-0" />
                  {project.location}
                </p>

                <p className="text-xs text-[#1e2338]/80 line-clamp-3 mb-5 font-light leading-relaxed">
                  {project.overview}
                </p>

                {/* Specs Box */}
                <div className="p-3.5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80 space-y-2 mb-5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[#1e2338]/60 font-medium">Starting Price:</span>
                    <span className="font-bold text-[#0A192F] font-serif text-sm">{project.startingPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1e2338]/60 font-medium">Configurations:</span>
                    <span className="font-semibold text-[#0A192F]">{project.typologies.join(", ")}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#1e2338]/60 font-medium">Carpet Area:</span>
                    <span className="text-[#1e2338]/80">{project.carpetAreaRange}</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-[#E2D9CC]/50">
                    <span className="text-[#1e2338]/60 font-medium">MahaRERA:</span>
                    <span className="font-mono text-[11px] text-emerald-800 font-semibold">{project.mahaRera}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href={`/projects/${project.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] text-xs font-semibold transition-all shadow-sm"
                >
                  View Floor Plans & Details
                  <ArrowRight size={14} />
                </Link>
                <div className="flex items-center justify-between text-[11px] text-[#1e2338]/60 pt-1">
                  <span>{project.possessionTimeline}</span>
                  <EnquiryTriggerButton className="text-[#c5a880] hover:text-[#0A192F] font-medium underline underline-offset-2">
                    Request Cost Sheet
                  </EnquiryTriggerButton>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DEVELOPER HERITAGE CALLOUT */}
        <section className="mt-16 bg-[#0A192F] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#c5a880]/20 text-[#c5a880] mb-4">
              <Award size={13} />
              Shapoorji Pallonji Real Estate
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif tracking-tight mb-4 text-[#FDFBF7]">
              Engineering India’s Iconic Skylines for Over 150 Years
            </h2>
            <p className="text-sm sm:text-base text-[#FDFBF7]/80 font-light leading-relaxed mb-6">
              From building the Reserve Bank of India, the Bombay High Court, and Mumbai’s Imperial Towers (India’s tallest residential twin towers) to executing the Palace of the Sultan of Oman, the Shapoorji Pallonji Group brings unparalleled structural integrity and architectural craftsmanship to Pune.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/developers/shapoorji-pallonji-pune"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] hover:bg-[#b8986c] transition-all font-semibold text-sm shadow-md"
              >
                Read Developer Profile & Track Record
                <ArrowRight size={15} />
              </Link>
              <a
                href="tel:+917744009295"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-all font-medium text-sm"
              >
                <Phone size={15} className="text-[#c5a880]" />
                Call Pune Desk: +91-7744009295
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
