import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section id="home" 
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7]"
    >
      {/* 100% Direct Composited LCP Hero Picture */}
      <picture className="absolute inset-0 w-full h-full z-0 block">
        <source media="(min-width: 769px)" srcSet="/images/hero_bg.webp" type="image/webp" />
        <img 
          src="/images/hero_bg_mobile.webp"
          alt="Shapoorji Pallonji Joyville Vyomora Luxury Project in Hinjewadi Pune"
          width={640}
          height={640}
          fetchPriority="high"
          decoding="sync"
          loading="eager"
          className="w-full h-full object-cover object-center"
        />
      </picture>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-white/70">
            <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
            <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#0A192F] uppercase">
              Joy 3.0 New Launch • Phase 1 Residences from ₹84.99 L*
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#0A192F] leading-[1.1] tracking-tight mb-6">
            Shapoorji Pallonji Joyville Vyomora <br className="hidden sm:inline" />
            <span className="text-gradient block text-2xl sm:text-4xl md:text-5xl mt-3 font-normal">
              Joyville Homes Pune • Luxury 2, 3 & 4 BHK in Hinjewadi
            </span>
          </h1>
          
          <h2 
            className="text-base md:text-lg text-[#0A192F]/85 max-w-3xl mx-auto font-normal leading-relaxed mb-10"
            style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
          >
            Official portal for <strong>Shapoorji Pallonji Real Estate Pune</strong> &amp; <strong>Joyville Homes Pune</strong>. Discover <strong>Joyville Vyomora (Joy 3.0)</strong> — flagship river-facing 2, 3 & 4 BHK residences with a monumental 32,000+ sq. ft. clubhouse in Hinjewadi Phase 1, Rajiv Gandhi Infotech Park, Pune. Possession: Dec 2029 | MahaRERA: PR1260002600999.
          </h2>
          
          <HeroCTA />
        </div>
      </div>

      {/* Pure CSS GPU Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#0A192F]/60">Scroll</span>
        <div className="w-[1px] h-8 bg-[#0A192F]/20 relative overflow-hidden">
          <div className="w-full h-full bg-[#C5A059] animate-scroll-line" />
        </div>
      </div>
    </section>
  );
}
