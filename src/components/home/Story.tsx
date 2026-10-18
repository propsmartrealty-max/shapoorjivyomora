export default function Story() {
  return (
    <section id="story" className="relative w-full section-deferred">
      <div className="relative w-full min-h-screen bg-[#FDFBF7] flex items-center overflow-hidden py-24 lg:py-0">
        
        {/* Background Image Container - Half Width on Desktop */}
        <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full overflow-hidden">
          <div className="relative w-full h-full origin-center">
            <img 
              src="/images/story_bg.webp" 
              alt="Shapoorji Pallonji Joyville Vyomora Architecture" 
              loading="lazy" 
              decoding="async" 
              width={640}
              height={640}
              className="w-full h-full object-cover object-center brightness-[1.15] contrast-[1.05]" 
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBF7] via-[#FDFBF7]/80 to-transparent hidden lg:block" />
          <div className="absolute inset-0 bg-[#FDFBF7]/80 lg:bg-transparent" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="w-full lg:w-1/2 lg:pr-16">
            <span className="block text-xs font-bold tracking-[0.3em] uppercase text-[#8A6B2D] mb-6">
              The Project Story
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0A192F] leading-tight mb-8">
              Expansive Scale.<br />Intimate Living.
            </h2>
            <div className="w-12 h-1 bg-[#C5A059] mb-8" />
            <p className="text-lg text-[#1e2338]/80 font-light leading-relaxed mb-6">
              Spread across 25 acres, Vyomora is conceived as an oasis of calm within the bustling IT corridor of Hinjawadi.
            </p>
            <p className="text-lg text-[#1e2338]/80 font-light leading-relaxed mb-10">
              Step outside on lush ground-level gardens, relax at a vibrant 32,000+ sq. ft. clubhouse, and enjoy an elevated eco-deck that will lift your mood. At Vyomora, you'll feel happiness growing around you.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="border-l border-[#0A192F]/20 pl-4">
                <h3 className="text-3xl font-serif text-[#0A192F] mb-2">685-1434</h3>
                <p className="text-xs uppercase tracking-widest text-[#0A192F]/80 font-medium">Sq. Ft. Spaces</p>
              </div>
              <div className="border-l border-[#0A192F]/20 pl-4">
                <h3 className="text-3xl font-serif text-[#0A192F] mb-2">₹84.99L</h3>
                <p className="text-xs uppercase tracking-widest text-[#0A192F]/80 font-medium">Starting Price</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
