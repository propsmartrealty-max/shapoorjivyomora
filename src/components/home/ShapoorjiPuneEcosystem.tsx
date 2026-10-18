import Link from "next/link";
import { Building2, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import EcosystemCTA from "./EcosystemCTA";

const puneDevelopments = [
  {
    id: "vyomora",
    name: "Shapoorji Pallonji Joyville Vyomora (Joy 3.0)",
    tag: "Flagship New Launch 2026",
    location: "Hinjewadi Phase 1 / Maan Road, West Pune",
    typologies: "2, 3, 4 BHK & Luxury Sky Duplexes",
    carpetArea: "685 – 1,467+ sq. ft.",
    price: "₹84.99 Lakhs – ₹2.16 Cr*",
    rera: "PR1260002600999",
    featured: true,
    href: "/",
    ctaText: "Explore Vyomora Details",
    highlights: [
      "Monumental 32,000+ sq. ft. Luxury Clubhouse",
      "Prime location in Hinjewadi Phase 1 IT Corridor",
      "Exclusive Mula riverfront promenade & eco-deck",
      "High-yielding investment near Metro Line 3"
    ]
  },
  {
    id: "sensorium",
    name: "Joyville Sensorium Hinjewadi",
    tag: "Biophilic Landmark",
    location: "Hinjewadi Phase 1, West Pune",
    typologies: "2 & 3 BHK Smart Living Homes",
    carpetArea: "700 – 1,050 sq. ft.",
    price: "₹75 Lakhs – ₹1.25 Cr*",
    rera: "P52100024965",
    featured: false,
    href: "/articles/joyville-sensorium-vs-joyville-vyomora-hinjewadi",
    ctaText: "Compare Sensorium vs Vyomora",
    highlights: [
      "2.8-acre multi-sensory park & interactive zones",
      "Walk-to-work proximity for Hinjewadi IT employees",
      "Over 75% open landscaped greenery"
    ]
  },
  {
    id: "hadapsar",
    name: "Joyville Hadapsar Annexe",
    tag: "East Pune Mega Township",
    location: "Manjri – Hadapsar, East Pune",
    typologies: "1, 2 & 3 BHK Township Flats",
    carpetArea: "430 – 890 sq. ft.",
    price: "₹45 Lakhs – ₹95 Lakhs*",
    rera: "P52100026451",
    featured: false,
    href: "/articles/shapoorji-pallonji-pune-projects-master-portfolio-guide",
    ctaText: "View Hadapsar Details",
    highlights: [
      "60+ lifestyle amenities spread over 8.8 acres",
      "Seamless connectivity to SP Infocity & Magarpatta",
      "High rental yield corridor in East Pune"
    ]
  },
  {
    id: "wildstone",
    name: "Shapoorji Pallonji Wildstone",
    tag: "Hillside Nature Living",
    location: "Bavdhan – Oxford Valley, West Pune",
    typologies: "2 & 3 BHK Hillside Apartments",
    carpetArea: "750 – 1,120 sq. ft.",
    price: "₹85 Lakhs – ₹1.45 Cr*",
    rera: "P52100030012",
    featured: false,
    href: "/shapoorji-pallonji-pune-projects",
    ctaText: "View Bavdhan Portfolio",
    highlights: [
      "Nestled beside pristine Oxford Golf & Forest Valley",
      "Fresh micro-climate with zero city congestion",
      "5 minutes to Chandani Chowk & Mumbai-Bangalore Highway"
    ]
  },
  {
    id: "vanaha",
    name: "Shapoorji Pallonji Vanaha & Golfland",
    tag: "1,000+ Acre Mega Valley",
    location: "Near Bavdhan, Pune West",
    typologies: "1, 2, 3, 4 BHK & Luxury Golf Villas",
    carpetArea: "500 – 2,200 sq. ft.",
    price: "₹55 Lakhs – ₹3.80 Cr+*",
    rera: "P52100028033",
    featured: false,
    href: "/shapoorji-pallonji-pune-projects",
    ctaText: "Explore Vanaha Township",
    highlights: [
      "Access to championship 18-hole golf course",
      "Over 50,000 native trees and perennial natural streams",
      "One of the largest master-planned valley townships in India"
    ]
  },
  {
    id: "celestian",
    name: "Shapoorji Pallonji Celestian",
    tag: "Ultra-Luxury Skyline Residences",
    location: "Bavdhan, Pune West",
    typologies: "3 & 4 BHK Sky Mansions",
    carpetArea: "1,050 – 1,450 sq. ft.",
    price: "₹1.20 Cr – ₹2.10 Cr*",
    rera: "P52100029544",
    featured: false,
    href: "/shapoorji-pallonji-pune-projects",
    ctaText: "View Celestian Details",
    highlights: [
      "Low-density, boutique residential tower architecture",
      "Private sky lounges and high-speed transit access",
      "Sweeping Western Ghats panoramic views"
    ]
  }
];

export default function ShapoorjiPuneEcosystem() {
  return (
    <section id="pune-projects" className="py-24 md:py-32 bg-[#050C17] text-white relative overflow-hidden section-deferred">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 mb-4">
            <Building2 size={14} className="text-[#C5A059]" />
            <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase">
              Pune Real Estate Ecosystem
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight leading-tight mb-6">
            Shapoorji Pallonji Pune &amp; Joyville Homes Portfolio
          </h2>
          <p className="text-sm md:text-base text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            With a 150-year engineering heritage, <strong>Shapoorji Pallonji Real Estate</strong> and <strong>Joyville Homes</strong> shape Pune's premier growth corridors. Explore the master-planned communities across West and East Pune, featuring landmark developments in Hinjewadi, Bavdhan, Mahalunge, and Hadapsar.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {puneDevelopments.map((dev) => (
            <div
              key={dev.id}
              className={`rounded-sm p-6 flex flex-col justify-between transition-all duration-300 border ${
                dev.featured 
                  ? "bg-gradient-to-b from-[#0A192F] to-[#0d2242] border-[#C5A059] shadow-xl shadow-[#C5A059]/10 ring-1 ring-[#C5A059]/50" 
                  : "bg-white/5 hover:bg-white/10 border-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full ${
                    dev.featured ? "bg-[#C5A059] text-[#050C17]" : "bg-white/10 text-white/80"
                  }`}>
                    {dev.tag}
                  </span>
                  <span className="text-[10px] text-white/70 font-mono flex items-center gap-1">
                    <ShieldCheck size={12} className="text-[#C5A059]" /> RERA: {dev.rera}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-white mb-2 leading-snug">
                  {dev.name}
                </h3>

                <div className="flex items-center text-xs text-white/75 mb-4 gap-1.5">
                  <MapPin size={14} className="text-[#C5A059] shrink-0" />
                  <span>{dev.location}</span>
                </div>

                <div className="space-y-1.5 py-3 my-3 border-y border-white/10 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/60">Typology:</span>
                    <span className="font-semibold text-white/90">{dev.typologies}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Carpet Area:</span>
                    <span className="font-semibold text-white/90">{dev.carpetArea}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Starting Price:</span>
                    <span className="font-bold text-[#C5A059]">{dev.price}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 text-xs text-white/80">
                  {dev.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className="text-[#C5A059] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={dev.href}
                prefetch={false}
                className={`w-full py-3 px-4 rounded-sm text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 group ${
                  dev.featured
                    ? "bg-[#C5A059] text-[#050C17] hover:bg-white hover:text-[#050C17]"
                    : "bg-white/10 text-white hover:bg-[#C5A059] hover:text-[#050C17]"
                }`}
              >
                <span>{dev.ctaText}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Deep Topical Authority Box for Google Knowledge Graph & AI Crawlers */}
        <div className="rounded-sm bg-white/5 border border-white/10 p-8 md:p-10 max-w-5xl mx-auto">
          <h4 className="text-lg font-serif text-[#C5A059] mb-4">
            Strategic Comparison: Why Shapoorji Pallonji Real Estate Leads Pune's Luxury Market
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/80 leading-relaxed font-light">
            <p>
              When evaluating <strong>Shapoorji Pallonji projects in Pune</strong>, homebuyers and investors benefit from two distinct micro-market corridors. In <strong>West Pune</strong>, the <em>Mahalunge-Hinjewadi corridor</em> is anchored by <strong>Joyville Vyomora (Joy 3.0)</strong> and <strong>Joyville Sensorium</strong>, catering to over 400,000 professionals in the Rajiv Gandhi Infotech Park with rapid metro access, multi-level clubhouses, and river-facing serenity.
            </p>
            <p>
              In <strong>Bavdhan &amp; Oxford Valley</strong>, projects like <strong>Wildstone</strong>, <strong>Celestian</strong>, and the 1,000-acre <strong>Vanaha Golfland</strong> deliver tranquil valley living with clean micro-climates and immediate connectivity to Chandani Chowk and Kothrud. Meanwhile, <strong>Joyville Hadapsar Annexe</strong> represents the highest rental yield driver in East Pune near SP Infocity and Magarpatta.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              <Link
                href="/shapoorji-pallonji-pune-projects"
                prefetch={false}
                className="text-xs text-[#C5A059] hover:text-white underline font-medium transition-colors"
              >
                View Complete Pune Projects Portfolio →
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/west-pune-real-estate"
                prefetch={false}
                className="text-xs text-[#C5A059] hover:text-white underline font-medium transition-colors"
              >
                West Pune Real Estate 2026 Guide →
              </Link>
              <span className="text-white/30">•</span>
              <Link
                href="/articles"
                prefetch={false}
                className="text-xs text-[#C5A059] hover:text-white underline font-medium transition-colors"
              >
                Market Research &amp; Articles Hub →
              </Link>
            </div>
            <EcosystemCTA />
          </div>
        </div>

      </div>
    </section>
  );
}
