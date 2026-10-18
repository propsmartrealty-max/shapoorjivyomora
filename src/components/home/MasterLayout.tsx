"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Maximize2 } from "lucide-react";

const layoutData = [
  {
    id: "master",
    title: "Master Layout",
    subtitle: "25 Acres of Master-Planned Brilliance",
    image: "/images/floor-plan3.webp",
    features: ["5 Majestic Towers", "Elevated Eco-Deck", "32,000+ sq. ft. Clubhouse", "Multi-tier Security"]
  },
  {
    id: "2bhk",
    title: "2 BHK Residences",
    subtitle: "685 Sq. Ft. (63.64 Sq. M.)",
    image: "/images/floor-plan2.webp",
    features: ["Spacious Living Area", "Master Suite with Walk-in Wardrobe", "Panoramic Balcony", "Vaastu Compliant"]
  },
  {
    id: "3bhk",
    title: "3 BHK & Duplex",
    subtitle: "1434 Sq. Ft. (133.22 Sq. M.)",
    image: "/images/floor-plan1.webp",
    features: ["Double Height Living", "Premium Fixtures", "Expansive Deck Area", "Private Study Room"]
  }
];

export default function MasterLayout() {
  const [activeTab, setActiveTab] = useState(layoutData[0].id);
  const activeData = layoutData.find((d) => d.id === activeTab) || layoutData[0];

  return (
    <section id="masterplan" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden section-deferred">
      {/* Decorative background blur */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#C5A059]/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A6B2D] mb-6 block">
              Architectural Vision
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#0A192F] max-w-2xl">
              Master Plan & <span className="text-[#8A6B2D] italic">Layouts</span>
            </h2>
          </div>
          <Link href="/residences" prefetch={false}>
            <Button variant="outlineDark" className="group">
              View All Specifications 
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Tabs & Details (Left side) */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <div role="tablist" aria-label="Residence layout options" className="flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 mb-8 hide-scrollbar">
              {layoutData.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-label={`View ${tab.title}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-6 py-4 rounded-sm transition-all duration-300 border-l-2 whitespace-nowrap lg:whitespace-normal flex-shrink-0 ${
                    activeTab === tab.id 
                    ? "border-l-[#8A6B2D] bg-white/95 shadow-sm backdrop-blur-md" 
                    : "border-l-transparent text-[#0A192F] hover:text-[#8A6B2D] hover:bg-white/60"
                  }`}
                >
                  <h3 className={`text-lg font-serif mb-1 font-semibold ${activeTab === tab.id ? "text-[#8A6B2D]" : "text-[#0A192F]"}`}>
                    {tab.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#0A192F] font-semibold">
                    {tab.subtitle}
                  </p>
                </button>
              ))}
            </div>

            {/* Active Features */}
            <div
              key={activeTab}
              className="bg-white/95 backdrop-blur-md p-6 rounded-sm border border-[#0A192F]/10 shadow-sm transition-all duration-300"
            >
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#0A192F] font-bold mb-4">Highlights</h4>
              <ul className="space-y-3">
                {activeData.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm font-medium text-[#0A192F]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8A6B2D] mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Display (Right side) */}
          <div className="lg:col-span-8">
            <div className="bg-white/40 backdrop-blur-md border border-[#0A192F]/5 shadow-sm rounded-sm p-4 md:p-8 h-[400px] md:h-[600px] relative group flex items-center justify-center">
              <div
                key={activeTab}
                className="relative w-full h-full flex items-center justify-center transition-all duration-300"
              >
                {/* Blueprint grid effect background */}
                <div className="absolute inset-0 bg-white/5 opacity-10 pointer-events-none" />
                
                <Image 
                  src={activeData.image}
                  alt={`${activeData.title} Layout for Shapoorji Vyomora`}
                  fill
                  className="object-contain mix-blend-multiply opacity-90 transition-all duration-700 group-hover:scale-105"
                />
                
                <Link 
                  href="/residences" 
                  aria-label="View enlarged residence floor plans"
                  className="absolute bottom-4 right-4 bg-[#0A192F] text-white w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
                >
                  <Maximize2 className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
