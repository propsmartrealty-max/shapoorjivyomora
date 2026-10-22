import { Metadata } from "next";
import Link from "next/link";
import Location from "@/components/home/Location";
import Connectivity from "@/components/home/Connectivity";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { MapPin, Navigation, Train, Building, ShieldCheck, ArrowRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Location & Metro Connectivity | Shapoorji Vyomora Hinjewadi",
  },
  description: "Explore the prime location of Shapoorji Vyomora Hinjewadi on Maan Road, 5 mins from Rajiv Gandhi Infotech Park Phase 1 & Pune Metro Line 3. Near Infosys, Wipro, TCS & Baner-Mahalunge.",
  keywords: [
    "shapoorji vyomora hinjewadi location",
    "joyville homes hinjewadi",
    "shapoorji vyomora",
    "vyomora hinjewadi",
    "joyville vyomora hinjewadi",
    "rajiv gandhi infotech park hinjewadi phase 1",
    "maan road hinjewadi",
    "pune metro line 3 hinjewadi",
    "infosys circle hinjewadi",
    "wipro circle hinjewadi",
    "tcs hinjewadi",
    "flats near hinjewadi it park",
    "properties on maan road",
    "mahalunge hinjewadi it corridor",
    "shapoorji pallonji pune projects",
    "west pune real estate market"
  ],
  alternates: {
    canonical: "https://www.shapoorji-vyomora.com/location",
  },
  openGraph: {
    title: "Location & Metro Connectivity | Shapoorji Vyomora Hinjewadi Phase 1",
    description: "Discover strategic transit access for Shapoorji Vyomora Hinjewadi. 5 mins from Rajiv Gandhi IT Park & Pune Metro Line 3. MahaRERA: PR1260002600999.",
    url: "https://www.shapoorji-vyomora.com/location",
    siteName: "Shapoorji Vyomora Hinjewadi - Joyville Homes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.shapoorji-vyomora.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shapoorji Vyomora Hinjewadi Location and Metro Line 3 Map",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Location & Metro Connectivity | Shapoorji Vyomora Hinjewadi",
    description: "5 mins from Rajiv Gandhi Infotech Park Phase 1 & Metro Line 3. Near Infosys Circle & Maan Road.",
    images: ["https://www.shapoorji-vyomora.com/og-image.jpg"],
  }
};

const locationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.shapoorji-vyomora.com/location#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shapoorji-vyomora.com/" },
        { "@type": "ListItem", "position": 2, "name": "Location & Connectivity", "item": "https://www.shapoorji-vyomora.com/location" }
      ]
    },
    {
      "@type": "Place",
      "@id": "https://www.shapoorji-vyomora.com/location#place",
      "name": "Shapoorji Vyomora Hinjewadi Experience Centre",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park, Mahalunge-Hinjewadi",
        "addressLocality": "Hinjewadi, Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411057",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.5913,
        "longitude": 73.7389
      },
      "hasMap": "https://maps.google.com/?q=18.5913,73.7389"
    }
  ]
};

const transitHubs = [
  {
    hub: "Rajiv Gandhi Infotech Park (Phase 1)",
    distance: "1.8 km",
    travelTime: "5 mins",
    type: "IT & Tech Corridor",
    notableEmployers: "Infosys, Wipro, Tata Consultancy Services, Cognizant, Tech Mahindra"
  },
  {
    hub: "Upcoming Pune Metro Line 3 (Hinjewadi Station)",
    distance: "1.2 km",
    travelTime: "3 mins",
    type: "Rapid Mass Transit",
    notableEmployers: "Direct rapid metro link connecting Hinjewadi Phase 1 directly to Shivajinagar & Civil Court"
  },
  {
    hub: "Mumbai-Pune Expressway (Wakad Flyover)",
    distance: "4.5 km",
    travelTime: "10 mins",
    type: "Intercity Highway",
    notableEmployers: "Express transit gateway to Navi Mumbai, Panvel International Airport & PCMC industrial belt"
  },
  {
    hub: "Balewadi High Street & Baner Retail Hub",
    distance: "7.5 km",
    travelTime: "15 mins",
    type: "Lifestyle & Dining",
    notableEmployers: "Fine dining, microbreweries, upscale boutiques, and luxury commercial offices"
  },
  {
    hub: "Ruby Hall Clinic & Multi-Specialty Healthcare",
    distance: "5.0 km",
    travelTime: "12 mins",
    type: "Healthcare Services",
    notableEmployers: "24x7 emergency medical infrastructure, specialty diagnostics, and critical care units"
  },
  {
    hub: "Blue Ridge & Indira National Schools",
    distance: "3.5 km",
    travelTime: "8 mins",
    type: "Top Tier Education",
    notableEmployers: "ICSE and CBSE accredited schools providing world-class K-12 education"
  }
];

export default function LocationPage() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <div className="container mx-auto px-6 md:px-12 pt-28">
        <Breadcrumbs items={[{ label: "Location", href: "/location" }]} />
      </div>

      <Location />
      <Connectivity />

      {/* Crawlable Transit Hub Factsheet */}
      <section className="py-20 bg-white border-t border-black/5">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.25em] text-[#C5A059] uppercase block mb-3">
              Strategic Transit Node • Hinjewadi Phase 1
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#0A192F] mb-4">
              Pune Metro Line 3 &amp; IT Corridor Commute Times
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base font-light leading-relaxed">
              Living at <strong>Shapoorji Vyomora Hinjewadi</strong> puts you at the epicentre of the <strong>Hinjewadi-Mahalunge IT corridor</strong>. Experience a true walk-to-work lifestyle that eliminates hours of daily traffic congestion while ensuring high capital appreciation and rental yield.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-12">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-[#0A192F] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-4 px-6 font-semibold">Transit Destination</th>
                  <th className="py-4 px-6 font-semibold">Distance</th>
                  <th className="py-4 px-6 font-semibold">Drive Time</th>
                  <th className="py-4 px-6 font-semibold">Corridor Classification</th>
                  <th className="py-4 px-6 font-semibold">Strategic Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white text-gray-700">
                {transitHubs.map((row) => (
                  <tr key={row.hub} className="hover:bg-amber-50/40 transition-colors">
                    <td className="py-4 px-6 font-medium text-[#0A192F]">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[#C5A059] shrink-0" />
                        <span>{row.hub}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono text-xs">{row.distance}</td>
                    <td className="py-4 px-6 font-semibold text-[#0A192F]">{row.travelTime}</td>
                    <td className="py-4 px-6 text-xs text-gray-600">{row.type}</td>
                    <td className="py-4 px-6 text-xs text-gray-500 leading-relaxed">{row.notableEmployers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Navigation Action Card */}
          <div className="bg-[#FDFBF7] rounded-2xl p-8 border border-[#C5A059]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <Navigation size={32} className="text-[#C5A059] shrink-0 mt-1" />
              <div>
                <h3 className="font-serif text-lg text-[#0A192F] font-semibold mb-1">
                  Visit the Vyomora Experience Centre
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Off Maan Village Road, Near Phase 1, Rajiv Gandhi Infotech Park, Hinjewadi, Pune - 411057. Experience the 3D masterplan scale model and luxury sample flat walkthroughs in person.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href="https://maps.google.com/?q=18.5913,73.7389"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A192F] text-white px-5 py-3 rounded-sm text-xs font-semibold hover:bg-[#C5A059] transition-colors"
              >
                <Navigation size={14} />
                Open in Google Maps
              </a>
              <a
                href="tel:+917744009295"
                className="inline-flex items-center gap-2 border border-[#0A192F] text-[#0A192F] px-5 py-3 rounded-sm text-xs font-semibold hover:border-[#C5A059] hover:text-[#C5A059] transition-colors"
              >
                <Phone size={14} />
                VIP Site Visit
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

