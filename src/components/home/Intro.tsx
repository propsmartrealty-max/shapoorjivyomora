export default function Intro() {
  return (
    <section id="vision" className="relative py-32 md:py-48 bg-watercolor text-[#1e2338] overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="w-full h-full" style={{ backgroundImage: "linear-gradient(#0A192F 1px, transparent 1px), linear-gradient(90deg, #0A192F 1px, transparent 1px)", backgroundSize: "100px 100px" }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-bold tracking-[0.3em] uppercase text-[#8A6B2D] mb-8">
            The Philosophy
          </p>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif leading-tight text-[#0A192F]">
              An endless horizon of happiness.
            </h2>
          </div>

          <div className="mt-16 max-w-2xl mx-auto space-y-6 text-base md:text-lg text-[#1e2338]/70 font-light leading-relaxed">
            <p>
              Vyomora by Shapoorji Pallonji is envisioned as a large-format residential community spread across 25 acres of thoughtfully planned land.
            </p>
            <p>
              In a neighbourhood defined by vertical growth, Vyomora brings horizontal breathing space. It is not just apartments within a cluster of towers – it is a master-planned environment shaped around openness, structure, and everyday ease.
            </p>
            <p>
              The vision is simple: create a community where scale feels expansive, yet life feels intimate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
