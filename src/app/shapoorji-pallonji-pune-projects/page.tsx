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
  FileText
} from "lucide-react";

export const metadata: Metadata = {
  title: "Shapoorji Pallonji Projects in Pune | Joyville Homes Pune Complete Portfolio (2026)",
  description: "Explore all residential township projects by Shapoorji Pallonji Real Estate and Joyville Homes in Pune. Official project listings, MahaRERA registrations, floor plans, and pricing for Hinjewadi, Bavdhan, and Hadapsar.",
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
    "Joyville Homes Pune",
    "Shapoorji Pallonji Joyville Pune",
    "Joyville Vyomora Hinjewadi",
    "Joyville Sensorium",
    "Shapoorji Pallonji Vanaha",
    "Vanaha Golfland Bavdhan",
    "Joyville Hadapsar Annexe",
    "Joyville Celestia",
    "Wildernest at SP Kingstown"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects",
  },
  openGraph: {
    title: "Shapoorji Pallonji & Joyville Homes Pune: Complete Project Portfolio & Price Guide",
    description: "Discover all residential township developments by Shapoorji Pallonji Real Estate across West and East Pune. Compare floor plans, amenities, prices, and ROI.",
    url: "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects",
    type: "website",
    siteName: "Shapoorji Pallonji Pune",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Pallonji Projects in Pune - Joyville Homes Portfolio",
      },
    ],
  },
};

export default function ShapoorjiPuneProjectsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemList",
        "@id": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects#list",
        "name": "Shapoorji Pallonji Real Estate & Joyville Homes Projects in Pune",
        "description": "Comprehensive list of residential townships and luxury projects by Shapoorji Pallonji in Pune.",
        "itemListElement": puneProjectsMasterList.map((project, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "item": {
            "@type": "ApartmentComplex",
            "name": project.name,
            "description": `${project.typologies.join(", ")} in ${project.location}. ${project.keyAmenities.slice(0, 3).join(", ")}.`,
            "url": `https://www.shapoorji-vyomora.com/projects/${project.slug}`,
            "priceRange": project.priceRange,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": project.location,
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            }
          }
        }))
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Which is the best Shapoorji Pallonji project in Pune for investment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Joyville Vyomora (Joy 3.0 Hinjewadi Phase 1) is currently the #1 investment choice. As the newest flagship launch in West Pune, it offers 2, 3, 4 BHK residences and Sky Duplexes, an expansive 32,000+ sq. ft. clubhouse, direct riverfront promenade views, and prime proximity to the Rajiv Gandhi Infotech Park and Pune Metro Line 3."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Joyville Homes platform in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Joyville Homes is the aspirational residential housing platform created by Shapoorji Pallonji Real Estate in partnership with Actis (UK), the Asian Development Bank (ADB), and the International Finance Corporation (IFC). Landmark Joyville projects in Pune include Joyville Vyomora, Joyville Sensorium, Joyville Hadapsar Annexe, Joyville Celestia, and Joyville Sky-Luxe Edition."
            }
          },
          {
            "@type": "Question",
            "name": "What is the starting price of Shapoorji Pallonji homes in Pune?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Shapoorji Pallonji Pune homes start from ₹43 Lakhs* for 1 BHK township units at Joyville Hadapsar Annexe, ₹84.99 Lakhs* for 2 BHK luxury homes at Joyville Vyomora Hinjewadi, and go up to ₹2.16 Cr* for ultra-luxury Sky Duplexes and Golf Villas at Vanaha Golfland Bavdhan."
            }
          }
        ]
      }
    ]
  };

  const flagshipProject = puneProjectsMasterList[0]; // Joyville Vyomora

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24 text-[#0A192F]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#0A192F] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#c5a880]/15 to-transparent rounded-bl-full pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <Breadcrumbs 
            items={[{ label: "Shapoorji Pallonji Pune Projects", href: "/shapoorji-pallonji-pune-projects" }]} 
          />
          <div className="mt-8 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#c5a880]/30 bg-[#c5a880]/10 text-xs uppercase tracking-widest text-[#c5a880] font-bold mb-6">
              <Award size={14} />
              150+ Years Builder Legacy • Pune Real Estate Portfolio
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6">
              Shapoorji Pallonji Projects <br />
              <span className="text-[#c5a880]">& Joyville Homes Pune.</span>
            </h1>
            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-3xl mb-8">
              Explore the complete residential township ecosystem developed by <strong>Shapoorji Pallonji Real Estate</strong> and <strong>Joyville Homes</strong> across Pune. From the flagship <strong>Joyville Vyomora (Joy 3.0 Hinjewadi)</strong> to <strong>Sensorium</strong>, <strong>Vanaha Bavdhan</strong>, <strong>Golfland</strong>, <strong>Hadapsar Annexe</strong>, and <strong>Wildernest at SP Kingstown</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/guides/shapoorji-pallonji-projects-pune-comparison"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] font-semibold text-sm hover:bg-[#b8986c] transition-all shadow-md"
              >
                Side-by-Side Comparison Guide
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/developers/shapoorji-pallonji-pune"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-sm transition-all"
              >
                Developer Profile & Legacy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Feature Banner */}
      <section className="container mx-auto px-6 md:px-12 -mt-8 relative z-20">
        <div className="bg-gradient-to-r from-[#0A192F] via-[#152a4a] to-[#0A192F] border border-[#c5a880]/40 rounded-2xl p-8 md:p-12 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-[#c5a880] text-xs uppercase tracking-widest font-bold mb-3">
              <Sparkles size={16} />
              #1 Ranked Flagship Township
            </div>
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              {flagshipProject.name}
            </h2>
            <p className="text-sm md:text-base text-white/80 font-light leading-relaxed mb-6">
              {flagshipProject.tagline}. Offering premium 2 BHK, 3 BHK, 4 BHK & Sky Duplexes with a monumental 32,000+ sq. ft. clubhouse right at the doorstep of the Rajiv Gandhi IT Park and Pune Metro Line 3.
            </p>
            <div className="flex flex-wrap gap-3 text-xs">
              <span className="bg-white/10 px-3 py-1.5 rounded-full border border-white/20">MahaRERA: {flagshipProject.mahaRera}</span>
              <span className="bg-[#c5a880]/20 text-[#c5a880] px-3 py-1.5 rounded-full border border-[#c5a880]/30 font-semibold">{flagshipProject.startingPrice} Starting</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
            <Link 
              href={`/projects/${flagshipProject.slug}`}
              className="px-8 py-4 bg-[#c5a880] text-[#0A192F] font-bold text-center rounded-xl hover:bg-white transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              Explore Vyomora Details & Plans
              <ArrowRight size={16} />
            </Link>
            <a 
              href="tel:+917744009295"
              className="px-8 py-4 border border-white/30 text-white font-medium text-center rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 text-sm"
            >
              <Phone size={16} className="text-[#c5a880]" />
              Call Pune Desk: +91 7744009295
            </a>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 md:px-12 mt-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.25em] text-[#c5a880] uppercase block mb-3">Complete Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F]">
            All 11 Shapoorji Pallonji & Joyville Developments in Pune
          </h2>
          <p className="text-[#1e2338]/70 mt-4 font-light text-base">
            Compare prices, typologies, MahaRERA numbers, and key connectivity highlights across all flagship projects in Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {puneProjectsMasterList.map((project) => (
            <div 
              key={project.slug}
              className="bg-white rounded-3xl border border-[#E2D9CC]/80 p-7 flex flex-col justify-between hover:border-[#c5a880] hover:shadow-xl transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-[#0A192F] text-[#FDFBF7]">
                    {project.badge}
                  </span>
                  <span className="text-xs font-mono text-emerald-800 font-semibold">RERA: {project.mahaRera}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#0A192F] mb-2 group-hover:text-[#c5a880] transition-colors leading-snug">
                  <Link href={`/projects/${project.slug}`}>
                    {project.name}
                  </Link>
                </h3>

                <p className="text-xs text-[#1e2338]/70 flex items-center gap-1.5 mb-5 font-light">
                  <MapPin size={14} className="text-[#c5a880] shrink-0" />
                  {project.location}
                </p>

                <div className="space-y-2.5 border-t border-b border-[#E2D9CC]/60 py-4 mb-5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#1e2338]/60">Configurations:</span>
                    <span className="font-semibold text-[#0A192F] text-right">{project.typologies.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1e2338]/60">Carpet Area:</span>
                    <span className="font-medium text-[#1e2338]/80">{project.carpetAreaRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1e2338]/60">Price Guide:</span>
                    <span className="font-bold text-[#0A192F] font-serif text-sm">{project.startingPrice}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#1e2338]/60">Possession:</span>
                    <span className="text-xs bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded font-medium">{project.possessionTimeline}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1e2338]/50 mb-2">Key Highlights</h4>
                  <ul className="space-y-1.5">
                    {project.architecturalHighlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="text-xs text-[#1e2338]/80 flex items-start gap-2 font-light">
                        <CheckCircle2 size={13} className="text-emerald-700 mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link 
                  href={`/projects/${project.slug}`}
                  className="w-full py-3 px-4 text-center rounded-xl text-xs font-semibold bg-[#0A192F] text-white hover:bg-[#152a4a] transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  View Details & Floor Plans
                  <ArrowRight size={14} />
                </Link>
                <div className="flex items-center justify-between text-[11px] text-[#1e2338]/60 pt-1">
                  <span>{project.microMarket}</span>
                  <EnquiryTriggerButton className="text-[#c5a880] hover:text-[#0A192F] font-semibold underline underline-offset-2">
                    Request Cost Sheet
                  </EnquiryTriggerButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="container mx-auto px-6 md:px-12 mt-24">
        <div className="bg-white rounded-3xl border border-[#E2D9CC]/60 shadow-sm p-6 sm:p-10 overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-[#0A192F]">
                Quick Comparison Matrix: Shapoorji Pallonji Pune Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/70 mt-1">
                Evaluate micro-market locations, starting prices, and clubhouse scales across Pune.
              </p>
            </div>
            <Link
              href="/guides/shapoorji-pallonji-projects-pune-comparison"
              className="text-xs font-semibold px-4 py-2.5 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] inline-flex items-center gap-1.5"
            >
              Full In-Depth Comparison
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#E2D9CC] bg-[#FDFBF7] text-[#0A192F] font-semibold">
                  <th className="py-3.5 px-4">Project Name</th>
                  <th className="py-3.5 px-4">Location</th>
                  <th className="py-3.5 px-4">Typologies</th>
                  <th className="py-3.5 px-4">Starting Price</th>
                  <th className="py-3.5 px-4">Clubhouse Scale</th>
                  <th className="py-3.5 px-4">MahaRERA ID</th>
                  <th className="py-3.5 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2D9CC]/60">
                {puneProjectsMasterList.map((p, index) => (
                  <tr key={index} className="hover:bg-[#FDFBF7]/60 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#0A192F]">
                      <Link href={`/projects/${p.slug}`} className="hover:text-[#c5a880]">
                        {p.name}
                      </Link>
                    </td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.microMarket} ({p.zone})</td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.typologies.slice(0, 2).join(", ")}</td>
                    <td className="py-3.5 px-4 font-bold text-[#0A192F] font-serif">{p.startingPrice}</td>
                    <td className="py-3.5 px-4 text-[#1e2338]/80">{p.clubhouseArea}</td>
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
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container mx-auto px-6 md:px-12 mt-20 max-w-4xl">
        <h2 className="text-3xl font-serif text-[#0A192F] mb-4 text-center">
          Frequently Asked Questions on Shapoorji Pallonji Pune Projects
        </h2>
        <p className="text-center text-xs sm:text-sm text-[#1e2338]/60 mb-10 max-w-xl mx-auto">
          Verified answers regarding developer credentials, MahaRERA registrations, and investment returns.
        </p>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2D9CC]/70">
            <h3 className="text-base font-semibold mb-2 text-[#0A192F]">Which is the best Shapoorji Pallonji project in Pune for investment?</h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
              <strong>Shapoorji Pallonji Joyville Vyomora (Joy 3.0 Hinjewadi Phase 1)</strong> is currently the #1 investment choice. As the newest flagship launch in West Pune, it offers pre-launch price benefits, 2, 3, 4 BHK residences & Sky Duplexes, an expansive 32,000+ sq. ft. clubhouse, direct riverfront promenade views, and prime proximity to the Rajiv Gandhi Infotech Park and Pune Metro Line 3.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2D9CC]/70">
            <h3 className="text-base font-semibold mb-2 text-[#0A192F]">What is the Joyville Homes platform in Pune?</h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
              Joyville Homes is the aspirational residential housing platform created by Shapoorji Pallonji Real Estate in partnership with Actis (UK), the Asian Development Bank (ADB), and the International Finance Corporation (IFC). Landmark Joyville projects in Pune include Joyville Vyomora, Joyville Sensorium, Joyville Hadapsar Annexe, Joyville Celestia, and Joyville Sky-Luxe Edition.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E2D9CC]/70">
            <h3 className="text-base font-semibold mb-2 text-[#0A192F]">What is the starting price of Shapoorji Pallonji homes in Pune?</h3>
            <p className="text-xs sm:text-sm text-[#1e2338]/80 font-light leading-relaxed">
              Shapoorji Pallonji Pune homes start from ₹43 Lakhs* for 1 BHK township units at Joyville Hadapsar Annexe, ₹84.99 Lakhs* for 2 BHK luxury homes at Joyville Vyomora Hinjewadi, and go up to ₹2.16 Cr* for ultra-luxury Sky Duplexes and Golf Villas at Vanaha Golfland Bavdhan.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
