import { TrustBadge } from "@/components/ui/TrustBadge";
import { Award, Building2, History, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: "150+", label: "Years of Legacy", icon: <History size={32} strokeWidth={1} /> },
  { value: "20+", label: "Global Presence", icon: <Building2 size={32} strokeWidth={1} /> },
  { value: "50,000+", label: "Happy Families", icon: <Users size={32} strokeWidth={1} /> },
  { value: "50+", label: "Industry Awards", icon: <Award size={32} strokeWidth={1} /> },
];

export default function AboutDeveloper() {
  return (
    <section id="developer" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden section-deferred">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-24">
          
          <div 
            className="w-full lg:w-1/2"
          >
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-[#8A6B2D] mb-6 block">
              The Legacy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight mb-8">
              Shapoorji Pallonji Real Estate.
            </h2>
            <div className="w-12 h-1 bg-[#C5A059] mb-8" />
            <p className="text-lg text-[#1e2338]/80 font-light leading-relaxed mb-6">
              With an engineering legacy spanning over 150 years, <strong>Shapoorji Pallonji Real Estate</strong> has been the gold standard in Indian infrastructure and luxury township development. Explore our complete <a href="/developers/shapoorji-pallonji-pune" className="text-[#8A6B2D] font-medium hover:underline">Shapoorji Pallonji Pune Developer Profile</a>, from global monuments to landmark residential communities across Hinjewadi, Bavdhan, and Hadapsar.
            </p>
            <p className="text-lg text-[#1e2338]/80 font-light leading-relaxed mb-8">
              Through the institutional <strong>Joyville Homes</strong> platform, Shapoorji Pallonji Real Estate delivers masterplanned residences across Pune. Compare all 11 developments in our <a href="/guides/shapoorji-pallonji-projects-pune-comparison" className="text-[#8A6B2D] font-medium hover:underline">Pune Projects Comparison Guide</a> or browse the official <a href="/projects" className="text-[#8A6B2D] font-medium hover:underline">Pune Projects Directory</a> for verified MahaRERA disclosures and floor plans.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a 
                href="/developers/shapoorji-pallonji-pune"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0A192F] text-white hover:bg-[#152a4a] text-xs font-semibold transition-all shadow-sm"
              >
                Developer Track Record & Legacy
              </a>
              <a 
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#0A192F]/20 text-[#0A192F] hover:bg-white text-xs font-semibold transition-all"
              >
                View All 11 Pune Projects
              </a>
            </div>
          </div>

          <div 
            className="w-full lg:w-1/2 relative h-[500px] rounded-sm overflow-hidden group shadow-sm border border-[#0A192F]/10"
          >
            <div className="absolute inset-0 overflow-hidden">
              <img 
                src="/images/story_bg.webp" 
                alt="Shapoorji Pallonji Real Estate Heritage" 
                loading="lazy" 
                decoding="async" 
                className="w-full h-full object-cover object-center brightness-[1.15] contrast-[1.05] transition-transform duration-1000 group-hover:scale-105" 
              />
            </div>
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Overlay logo or graphic */}
            <div className="absolute inset-0 flex items-center justify-center p-12">
               <div className="w-full h-full border border-white/30 flex items-center justify-center backdrop-blur-sm bg-black/20">
                 <Image 
                    src="/images/white-logo.svg" 
                    alt="Shapoorji Pallonji Real Estate Logo" 
                    width={200}
                    height={80}
                    className="w-48 opacity-90"
                 />
               </div>
            </div>

            {/* Stamp of Trust */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-30 pointer-events-none scale-75 md:scale-100">
              <TrustBadge />
            </div>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-[#0A192F]/10 pt-16">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="stat-item flex flex-col items-center text-center"
            >
              <div 
                className="text-[#8A6B2D] mb-6 animate-float"
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-serif text-[#0A192F] mb-2">{stat.value}</h3>
              <p className="text-sm uppercase tracking-widest text-[#0A192F]/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
