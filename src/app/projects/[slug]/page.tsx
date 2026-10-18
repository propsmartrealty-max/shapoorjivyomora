import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EnquiryTriggerButton } from "@/components/ui/EnquiryTriggerButton";
import { puneProjectsMasterList, PuneProjectItem } from "@/data/puneProjectsData";
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  Trees, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  FileText, 
  Compass, 
  Layers, 
  HelpCircle,
  ExternalLink
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return puneProjectsMasterList.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = puneProjectsMasterList.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Shapoorji Pallonji Real Estate Pune",
      description: "Explore luxury residential township developments in Pune by Shapoorji Pallonji and Joyville Homes.",
    };
  }

  const ogImageUrl = `https://www.shapoorji-vyomora.com/api/og?title=${encodeURIComponent(project.name)}&subtitle=${encodeURIComponent(project.tagline)}`;

  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.seoKeywords,
    alternates: {
      canonical: `https://www.shapoorji-vyomora.com/projects/${project.slug}`,
    },
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      url: `https://www.shapoorji-vyomora.com/projects/${project.slug}`,
      type: "website",
      siteName: "Shapoorji Pallonji Pune Portfolio",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.name} - Official Project Details & Floor Plans`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.metaTitle,
      description: project.metaDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = puneProjectsMasterList.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Related projects in the same zone or developer
  const relatedProjects = puneProjectsMasterList
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  // Schema.org Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ApartmentComplex",
        "@id": `https://www.shapoorji-vyomora.com/projects/${project.slug}#project`,
        "name": project.name,
        "alternateName": [
          project.name,
          `${project.name} Pune`,
          project.badge,
          `${project.brand} ${project.microMarket}`
        ],
        "description": project.overview,
        "url": `https://www.shapoorji-vyomora.com/projects/${project.slug}`,
        "telephone": "+91-7744009295",
        "sameAs": [
          "https://en.wikipedia.org/wiki/Shapoorji_Pallonji_Group",
          "https://www.wikidata.org/wiki/Q7489427",
          project.reraRegistrationUrl
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": project.location,
          "addressLocality": project.microMarket,
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "amenityFeature": project.keyAmenities.map((amenity) => ({
          "@type": "LocationFeatureSpecification",
          "name": amenity,
          "value": true
        })),
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "price": project.startingPrice.replace(/[^0-9.]/g, "") ? undefined : project.startingPrice,
          "priceRange": project.priceRange,
          "availability": "https://schema.org/InStock",
          "url": `https://www.shapoorji-vyomora.com/projects/${project.slug}`
        }
      },
      {
        "@type": "FAQPage",
        "@id": `https://www.shapoorji-vyomora.com/projects/${project.slug}#faq`,
        "mainEntity": project.faqs.map((faq) => ({
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
        "@id": `https://www.shapoorji-vyomora.com/projects/${project.slug}#breadcrumb`,
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
            "name": "Shapoorji Pune Projects",
            "item": "https://www.shapoorji-vyomora.com/shapoorji-pallonji-pune-projects"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.name,
            "item": `https://www.shapoorji-vyomora.com/projects/${project.slug}`
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
            { label: "Pune Projects", href: "/shapoorji-pallonji-pune-projects" },
            { label: project.name, href: `/projects/${project.slug}` },
          ]}
        />

        {/* HERO HEADER */}
        <section className="mt-6 mb-12 bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c5a880]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="relative z-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wide bg-[#0A192F] text-[#FDFBF7]">
                <Building2 size={13} className="text-[#c5a880]" />
                {project.brand}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#c5a880]/15 text-[#634825] border border-[#c5a880]/30">
                <Sparkles size={13} />
                {project.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-800 border border-emerald-200">
                <ShieldCheck size={13} className="text-emerald-600" />
                MahaRERA: {project.mahaRera}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A192F] tracking-tight leading-tight mb-4">
              {project.heroHeadline}
            </h1>

            <p className="text-base sm:text-lg text-[#1e2338]/80 font-light leading-relaxed max-w-4xl mb-6">
              {project.tagline} Located at {project.location}. Official details, RERA verification, carpet areas, pricing schedule, floor plans, and site visit booking.
            </p>

            {/* Quick Fact Metric Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-[#FDFBF7] rounded-2xl border border-[#E2D9CC]/80 mb-8">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1e2338]/60 font-medium">Starting Price</p>
                <p className="text-lg sm:text-2xl font-serif font-bold text-[#0A192F] mt-0.5">{project.startingPrice}</p>
                <p className="text-[11px] text-[#1e2338]/50">{project.priceRange}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1e2338]/60 font-medium">Configurations</p>
                <p className="text-sm sm:text-base font-semibold text-[#0A192F] mt-1">{project.typologies.join(", ")}</p>
                <p className="text-[11px] text-[#1e2338]/50">{project.carpetAreaRange}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1e2338]/60 font-medium">Clubhouse & Open Space</p>
                <p className="text-sm sm:text-base font-semibold text-[#0A192F] mt-1">{project.clubhouseArea}</p>
                <p className="text-[11px] text-emerald-700 font-medium">{project.openSpacePercentage}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#1e2338]/60 font-medium">Possession Timeline</p>
                <p className="text-sm sm:text-base font-semibold text-[#0A192F] mt-1">{project.possessionTimeline}</p>
                <p className="text-[11px] text-[#1e2338]/50">Phase Disclosures Available</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <EnquiryTriggerButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] transition-all font-medium text-sm shadow-md hover:shadow-lg">
                <FileText size={16} className="text-[#c5a880]" />
                Download Brochure & Cost Sheet
              </EnquiryTriggerButton>
              <EnquiryTriggerButton className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#c5a880] text-[#0A192F] hover:bg-[#b8986c] transition-all font-semibold text-sm shadow-sm">
                <Calendar size={16} />
                Schedule VIP Site Visit
              </EnquiryTriggerButton>
              <a
                href="tel:+917744009295"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white border border-[#E2D9CC] text-[#0A192F] hover:bg-[#FDFBF7] transition-all font-medium text-sm"
              >
                <Phone size={15} className="text-[#c5a880]" />
                Call +91-7744009295
              </a>
              <a
                href={project.reraRegistrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#1e2338]/70 hover:text-[#0A192F] underline underline-offset-4 ml-auto"
              >
                Verify on MahaRERA Portal
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </section>

        {/* OVERVIEW & MASTER PLANNING */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F] mb-4 flex items-center gap-2.5">
                <Award className="text-[#c5a880]" size={26} />
                Project Masterplan & Executive Overview
              </h2>
              <div className="prose prose-slate max-w-none text-[#1e2338]/85 leading-relaxed space-y-4">
                <p>{project.overview}</p>
                <p>
                  As part of the renowned Shapoorji Pallonji portfolio, <strong>{project.name}</strong> incorporates state-of-the-art seismic-resistant construction, optimized sun path orientation, rainwater harvesting, solar utility integration, and multi-tier electronic access control. The development caters to both discerning homebuyers looking for an upgraded residential lifestyle and long-term real estate investors seeking superior rental yields across Pune’s thriving technology corridors.
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="mt-8 pt-6 border-t border-[#E2D9CC]/60">
                <h3 className="text-lg font-serif font-semibold text-[#0A192F] mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-[#c5a880]" />
                  Architectural & Engineering Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {project.architecturalHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FDFBF7] border border-[#E2D9CC]/70">
                      <CheckCircle2 size={17} className="text-emerald-700 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-[#1e2338]/85 font-light leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CONFIGURATIONS & PRICING TABLE */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-serif text-[#0A192F] flex items-center gap-2">
                    <Layers className="text-[#c5a880]" size={24} />
                    Configurations, Carpet Areas & Pricing
                  </h2>
                  <p className="text-xs sm:text-sm text-[#1e2338]/60 mt-0.5">
                    Verified carpet areas under MahaRERA standards with tentative all-inclusive pricing breakdown.
                  </p>
                </div>
                <EnquiryTriggerButton className="text-xs font-semibold px-4 py-2 rounded-lg bg-[#0A192F] text-white hover:bg-[#152a4a]">
                  Request Cost Sheet
                </EnquiryTriggerButton>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-[#E2D9CC] bg-[#FDFBF7] text-[#0A192F]">
                      <th className="py-3 px-4 font-semibold">Typology</th>
                      <th className="py-3 px-4 font-semibold">RERA Carpet Area</th>
                      <th className="py-3 px-4 font-semibold">Price Estimate</th>
                      <th className="py-3 px-4 font-semibold hidden sm:table-cell">Key Layout Highlights</th>
                      <th className="py-3 px-4 text-right font-semibold">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E2D9CC]/60">
                    {project.floorPlanDetails.map((plan, index) => (
                      <tr key={index} className="hover:bg-[#FDFBF7]/60 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-[#0A192F]">{plan.typology}</td>
                        <td className="py-3.5 px-4 text-[#1e2338]/80">{plan.carpetArea}</td>
                        <td className="py-3.5 px-4 font-semibold text-[#0A192F]">{plan.priceEstimate}</td>
                        <td className="py-3.5 px-4 text-[#1e2338]/70 hidden sm:table-cell text-xs">{plan.features}</td>
                        <td className="py-3.5 px-4 text-right">
                          <EnquiryTriggerButton className="text-[11px] font-semibold text-[#c5a880] hover:text-[#0A192F] underline underline-offset-2">
                            Floor Plan
                          </EnquiryTriggerButton>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-[#1e2338]/50 mt-4 italic">
                *Government levies, stamp duty, registration, GST, and floor rise charges are applicable extra. Subject to inventory availability.
              </p>
            </section>

            {/* 40+ LIFESTYLE AMENITIES */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
              <h2 className="text-2xl font-serif text-[#0A192F] mb-3 flex items-center gap-2">
                <Trees className="text-[#c5a880]" size={24} />
                World-Class Amenities & Clubhouse
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/70 mb-6">
                Designed to nurture wellness, productivity, and recreation across all age groups within a self-sustained gated ecosystem.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.keyAmenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E2D9CC]/70">
                    <span className="w-2 h-2 rounded-full bg-[#c5a880] shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-[#0A192F]">{amenity}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* CONNECTIVITY & LOCATION HIGHLIGHTS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
              <h2 className="text-2xl font-serif text-[#0A192F] mb-3 flex items-center gap-2">
                <Compass className="text-[#c5a880]" size={24} />
                Strategic Location & Connectivity
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/70 mb-6">
                Direct transit corridors connecting to Pune’s major tech parks, expressways, top healthcare, and academic institutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {project.connectivityHighlights.map((conn, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-[#FDFBF7] border border-[#E2D9CC]/70">
                    <div className="flex items-center gap-2.5">
                      <MapPin size={16} className="text-[#c5a880] shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#0A192F]">{conn.destination}</span>
                    </div>
                    <div className="text-right shrink-0 ml-2">
                      <span className="text-xs font-semibold text-[#0A192F] block">{conn.distance}</span>
                      <span className="text-[11px] text-[#1e2338]/60">{conn.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60">
              <h2 className="text-2xl font-serif text-[#0A192F] mb-2 flex items-center gap-2">
                <HelpCircle className="text-[#c5a880]" size={24} />
                Frequently Asked Questions ({project.name})
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/60 mb-6">
                Verified buyer and investor answers regarding MahaRERA, possession dates, floor plans, and pricing.
              </p>

              <div className="space-y-4">
                {project.faqs.map((faq, index) => (
                  <div key={index} className="p-4 sm:p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC]/80">
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
          </div>

          {/* SIDEBAR ENQUIRY & RERA VERIFICATION */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-[#E2D9CC]/60 sticky top-28">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#c5a880]/15 text-[#634825] mb-3">
                <Sparkles size={13} />
                Exclusive Project Desk
              </div>
              <h3 className="text-xl font-serif text-[#0A192F] mb-2">Book a Site Visit or Request Brochure</h3>
              <p className="text-xs text-[#1e2338]/70 mb-6">
                Receive the unbranded PDF brochure, exact unit carpet plans, payment milestone schedule, and current live inventory.
              </p>

              <div className="space-y-3 mb-6">
                <EnquiryTriggerButton className="w-full py-3.5 px-4 rounded-xl bg-[#0A192F] text-white hover:bg-[#152a4a] font-medium text-sm transition-all shadow-md">
                  Request Floor Plans & Cost Sheet
                </EnquiryTriggerButton>
                <EnquiryTriggerButton className="w-full py-3.5 px-4 rounded-xl bg-[#c5a880] text-[#0A192F] hover:bg-[#b8986c] font-semibold text-sm transition-all shadow-sm">
                  Schedule Free Cab Site Visit
                </EnquiryTriggerButton>
                <a
                  href="https://wa.me/917744009295?text=Hi%2C%20I%20am%20interested%20in%20details%20for%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-medium text-sm transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>

              {/* RERA Badge & Compliance */}
              <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC] space-y-2 text-xs">
                <div className="flex items-center gap-2 text-[#0A192F] font-semibold">
                  <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
                  MahaRERA Disclosures
                </div>
                <p className="text-[#1e2338]/70 text-[11px] leading-relaxed">
                  <strong>Registration No:</strong> {project.mahaRera}
                </p>
                <p className="text-[#1e2338]/60 text-[11px] leading-relaxed">
                  Project details, phase-wise approvals, and sanctioned layout plans are available on the MahaRERA website under registered projects.
                </p>
                <a
                  href={project.reraRegistrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-[#0A192F] font-medium underline mt-1"
                >
                  Visit maharera.mahaonline.gov.in
                  <ExternalLink size={11} />
                </a>
              </div>

              {/* Quick Contact Box */}
              <div className="mt-6 pt-6 border-t border-[#E2D9CC]/60 text-xs text-[#1e2338]/70 space-y-1.5">
                <p className="font-semibold text-[#0A192F]">Sales & Site Office Address:</p>
                <p>{project.location}</p>
                <p className="pt-2"><strong>Authorized Support:</strong> +91-7744009295</p>
              </div>
            </div>
          </div>
        </div>

        {/* RELATED SHAPOORJI PALLONJI PUNE PROJECTS */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-[#E2D9CC]/60">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#0A192F]">
                Explore More Shapoorji Pallonji Pune Projects
              </h2>
              <p className="text-xs sm:text-sm text-[#1e2338]/60 mt-1">
                Compare other landmark developments across Hinjewadi, Bavdhan, and Hadapsar.
              </p>
            </div>
            <Link
              href="/shapoorji-pallonji-pune-projects"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0A192F] hover:text-[#c5a880] transition-colors"
            >
              View All 11 Pune Projects
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((rel) => (
              <div
                key={rel.slug}
                className="p-5 rounded-2xl bg-[#FDFBF7] border border-[#E2D9CC] flex flex-col justify-between hover:border-[#c5a880] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-[#c5a880]">{rel.brand}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white text-[#0A192F] border border-[#E2D9CC]">
                      {rel.zone}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-[#0A192F] mb-1">
                    {rel.name}
                  </h3>
                  <p className="text-xs text-[#1e2338]/70 line-clamp-2 mb-4 font-light">
                    {rel.tagline}
                  </p>
                  <div className="space-y-1 text-xs text-[#1e2338]/80 mb-4 pt-2 border-t border-[#E2D9CC]/60">
                    <p><strong>Config:</strong> {rel.typologies.slice(0, 2).join(", ")}</p>
                    <p><strong>Starting Price:</strong> {rel.startingPrice}</p>
                    <p><strong>RERA:</strong> {rel.mahaRera}</p>
                  </div>
                </div>

                <Link
                  href={`/projects/${rel.slug}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl bg-white border border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white transition-all text-xs font-semibold"
                >
                  View Details & Floor Plans
                  <ArrowRight size={13} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
