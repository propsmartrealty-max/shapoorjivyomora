import { Metadata } from "next";
import Link from "next/link";
import Pricing from "@/components/home/Pricing";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ShieldCheck, CheckCircle2, ArrowRight, Building2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "2, 3 & 4 BHK Residences & Sky Duplexes | Shapoorji Vyomora",
  },
  description: "Official floor plans, carpet areas & pricing for 2 BHK, 3 BHK, 4 BHK & Sky Duplex residences from ₹84.99 L* at Shapoorji Vyomora Hinjewadi (Joy 3.0). Near Rajiv Gandhi IT Park Phase 1. MahaRERA: PR1260002600999.",
  keywords: [
    "shapoorji vyomora hinjewadi",
    "joyville homes hinjewadi",
    "shapoorji vyomora",
    "vyomora hinjewadi",
    "joyville vyomora hinjewadi",
    "shapoorji pallonji vyomora",
    "joy 3.0 hinjewadi",
    "shapoorji vyomora 2 bhk",
    "shapoorji vyomora 3 bhk",
    "shapoorji vyomora 4 bhk",
    "shapoorji vyomora sky duplex",
    "vyomora floor plan",
    "vyomora hinjewadi price",
    "2 bhk in hinjewadi phase 1",
    "3 bhk in mahalunge pune",
    "4 bhk in baner mahalunge",
    "sky duplex pune",
    "flats near infosys circle hinjewadi",
    "luxury apartments hinjewadi",
    "shapoorji pune real estate",
    "shapoorji vyomorar"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/residences",
  },
  openGraph: {
    title: "2, 3, 4 BHK & Sky Duplexes | Shapoorji Vyomora Hinjewadi | Joyville Homes",
    description: "Explore official floor plans, carpet areas & pricing for luxury 2, 3, 4 BHK & Sky Duplex homes from ₹84.99 L* at Shapoorji Vyomora Hinjewadi. MahaRERA: PR1260002600999.",
    url: "https://www.shapoorji-vyomora.com/residences",
    siteName: "Shapoorji Vyomora Hinjewadi - Joyville Homes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Vyomora Hinjewadi Floor Plans and Residences",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "2, 3, 4 BHK & Sky Duplexes | Shapoorji Vyomora Hinjewadi",
    description: "Luxury residences from ₹84.99 L* in Hinjewadi Phase 1 by Joyville Homes & Shapoorji Pallonji. MahaRERA: PR1260002600999.",
    images: ["https://www.shapoorji-vyomora.com/og-image.jpg"],
  }
};

const residencesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.shapoorji-vyomora.com/residences#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shapoorji-vyomora.com/" },
        { "@type": "ListItem", "position": 2, "name": "Residences & Floor Plans", "item": "https://www.shapoorji-vyomora.com/residences" }
      ]
    },
    {
      "@type": "RealEstateListing",
      "@id": "https://www.shapoorji-vyomora.com/residences#listing",
      "name": "Luxury Residences at Shapoorji Vyomora Hinjewadi (Joy 3.0)",
      "description": "Premium 2 BHK, 3 BHK, 4 BHK, and Sky Duplex apartments in Hinjewadi Phase 1 near Rajiv Gandhi Infotech Park by Joyville Homes & Shapoorji Pallonji Real Estate.",
      "url": "https://www.shapoorji-vyomora.com/residences",
      "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "INR",
        "lowPrice": 8499000,
        "highPrice": 21600000,
        "offerCount": 184,
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Shapoorji Pallonji Real Estate",
          "url": "https://www.shapoorji-vyomora.com"
        }
      }
    }
  ]
};

const floorPlanMatrix = [
  {
    typology: "2 BHK Luxe",
    carpetArea: "684.91 sq. ft.",
    startingPrice: "₹84.99 Lakhs*",
    features: "Optimized 2-bed layout, sunlit living room, utility balcony, vitrified tile flooring",
    tag: "High Rental Demand"
  },
  {
    typology: "2 BHK Grande",
    carpetArea: "780 – 785 sq. ft.",
    startingPrice: "₹1.00 Cr*",
    features: "Master bedroom with laminated wooden flooring, expansive riverfront balcony",
    tag: "Most Popular"
  },
  {
    typology: "3 BHK Select",
    carpetArea: "1,052 sq. ft.",
    startingPrice: "₹1.32 Cr*",
    features: "Dual master suites, cross-ventilation layout, separate dining & living zones",
    tag: "Family Choice"
  },
  {
    typology: "3 BHK Imperial",
    carpetArea: "1,184 – 1,186 sq. ft.",
    startingPrice: "₹1.54 Cr*",
    features: "Sprawling living room, dual balconies, dry/wet kitchen separation, premium fittings",
    tag: "Executive Living"
  },
  {
    typology: "3/4 BHK Sky Duplex",
    carpetArea: "1,459 – 1,467 sq. ft.",
    startingPrice: "₹1.89 Cr*",
    features: "Majestic 20-foot double-height ceiling, private panoramic sundeck, penthouse styling",
    tag: "Ultra Luxury Flagship"
  }
];

export default function ResidencesPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(residencesSchema) }}
      />
      <div className="container mx-auto px-6 md:px-12 pt-28">
        <Breadcrumbs items={[{ label: "Residences", href: "/residences" }]} />
      </div>
      
      {/* Interactive Pricing and Floor Plan Visualizer */}
      <Pricing />

      {/* Crawlable Architectural Matrix & Keyword Ecosystem Section */}
      <section className="py-20 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-3">
              Shapoorji Vyomora Hinjewadi • Typology Factsheet
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-4">
              Comprehensive Floor Plans &amp; Carpet Area Specifications
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base font-light leading-relaxed">
              Discover why <strong>Shapoorji Vyomora Hinjewadi</strong> (marketed under <strong>Joyville Homes Hinjewadi</strong> as <strong>Joy 3.0</strong>) dominates the <strong>Pune Real Estate Market</strong>. Built with seismic-resilient aluminium Mivan shuttering technology, every home ensures zero-wastage carpet efficiency, cross-ventilation, and breathtaking views of the Mula riverfront.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#0A192F] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-semibold">Configuration</th>
                  <th className="py-4 px-6 font-semibold">RERA Carpet Area</th>
                  <th className="py-4 px-6 font-semibold">Starting Price</th>
                  <th className="py-4 px-6 font-semibold">Architectural Highlights</th>
                  <th className="py-4 px-6 font-semibold text-center">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
                {floorPlanMatrix.map((row) => (
                  <tr key={row.typology} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#0A192F]">
                      <div className="flex items-center gap-2">
                        <Building2 size={16} className="text-[#C5A059] shrink-0" />
                        <span>{row.typology}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs">{row.carpetArea}</td>
                    <td className="py-4 px-6 font-semibold text-[#0A192F]">{row.startingPrice}</td>
                    <td className="py-4 px-6 text-xs text-gray-600 leading-relaxed">{row.features}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="inline-block text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-[#0A192F]/5 text-[#0A192F]">
                        {row.tag}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Compliance & Contact Callout */}
          <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#C5A059]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <ShieldCheck size={32} className="text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#0A192F] font-semibold mb-1">
                  MahaRERA Registered Project PR1260002600999
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Project registered as <strong>Shapoorji Pallonji Joyville Vyomora Phase 1</strong>. Scheduled possession December 2029. 100% statutory escrow compliance, transparent payment milestones, and home loan approvals from SBI, HDFC Bank, ICICI &amp; Axis Bank.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="tel:+917744009295"
                className="inline-flex items-center gap-2 bg-[#0A192F] text-white px-5 py-3 rounded-sm text-xs font-semibold hover:bg-[#C5A059] transition-colors"
              >
                <Phone size={14} />
                +91 7744009295
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#0A192F] text-[#0A192F] px-5 py-3 rounded-sm text-xs font-semibold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                Request Cost Sheet
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

