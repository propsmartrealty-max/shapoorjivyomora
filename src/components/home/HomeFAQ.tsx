import Link from "next/link";
import { HelpCircle, ChevronDown, CheckCircle2, ShieldCheck, Globe, Building2, MapPin } from "lucide-react";

export const homeFaqItems = [
  {
    q: "What is Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Hinjewadi?",
    a: "Shapoorji Pallonji Joyville Vyomora (marketed as Joy 3.0) is a flagship 25-acre residential township development located off Maan Road in Hinjewadi Phase 1, Pune. Developed jointly under the Joyville platform by Shapoorji Pallonji Real Estate, Actis, ADB, and IFC, Vyomora features high-rise residential towers, over 78% open and green biophilic spaces, a monumental 32,000+ sq. ft. clubhouse, and luxury 2, 3, 4 BHK, and Sky Duplex apartments overlooking the Mula river."
  },
  {
    q: "What is the MahaRERA registration number for Joyville Vyomora Hinjewadi?",
    a: "Shapoorji Pallonji Joyville Vyomora is officially registered under MahaRERA registration number PR1260002600999. All project disclosures, building layout approvals, tower sanctions, and completion timelines are independently verifiable on the official MahaRERA website (maharera.mahaonline.gov.in)."
  },
  {
    q: "What configurations and prices are available at Shapoorji Vyomora Pune?",
    a: "Joyville Vyomora offers flexible luxury configurations tailored for modern homebuyers and IT professionals: 2 BHK Luxe (684.91 sq. ft.) starting from ₹84.99 Lakhs*, 2 BHK Grande (780 - 785 sq. ft.) from ₹1.00 Cr*, 3 BHK Select & Elite (1,052 - 1,090 sq. ft.) from ₹1.32 Cr*, 3 BHK Imperial (1,184 - 1,186 sq. ft.) from ₹1.54 Cr*, and exclusive 3/4 BHK Sky Duplexes (1,459 - 1,467 sq. ft.) starting from ₹1.89 Cr*."
  },
  {
    q: "Where is Joyville Vyomora located and how is the connectivity to Hinjewadi IT Park?",
    a: "Joyville Vyomora is strategically located off Maan Road, directly adjacent to Hinjewadi Phase 1 in the Mahalunge-Hinjewadi growth corridor, Pune (PIN: 411057). It is just 1.8 km (5 minutes) from Rajiv Gandhi Infotech Park Phase 1 (Infosys Circle, Wipro, Cognizant, Barclays), 1.2 km from the upcoming Hinjewadi Metro Line 3 station, and 4.5 km from the Mumbai-Pune Expressway (NH-48)."
  },
  {
    q: "What clubhouse and sports amenities are provided at Joyville Vyomora Hinjewadi?",
    a: "The project boasts one of West Pune's largest residential clubhouses spanning over 32,000 sq. ft. along with 40+ lifestyle amenities. Highlights include an infinity temperature-controlled swimming pool, full-sized cricket pitch, tennis and pickleball courts, state-of-the-art gymnasium, yoga and wellness deck, co-working executive business lounge, kids adventure play park, pet agility park, and a scenic Mula riverfront promenade."
  },
  {
    q: "What is the possession date and construction status of Joyville Vyomora?",
    a: "Joyville Vyomora is scheduled for handover in December 2029 as per MahaRERA filings. Construction is executed using advanced Mivan aluminum shuttering technology by Shapoorji Pallonji Engineering & Construction, ensuring earthquake-resistant seismic structural integrity, monolithic concrete walls, superior finish, and timely handover."
  },
  {
    q: "Can NRIs from USA, UAE, UK, Singapore, and Australia invest in Joyville Vyomora?",
    a: "Yes. Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely purchase residential property in Shapoorji Pallonji Joyville Vyomora under RBI and FEMA regulations. The project provides 100% digital KYC verification, virtual 3D sample flat walkthroughs, remote legal document execution, approved NRI home loan assistance through major nationalized and private banks, and full repatriation support for rental income and capital gains."
  },
  {
    q: "What is the expected rental yield and capital appreciation in Hinjewadi Phase 1?",
    a: "Due to Hinjewadi's status as Pune's largest employment hub housing over 400,000 IT and biotechnology professionals, luxury apartments in Phase 1 command high rental yields of 4.5% to 5.5% annually. The impending completion of Pune Metro Line 3 and the Ring Road makes Joyville Vyomora an exceptionally strong asset for long-term capital appreciation."
  },
  {
    q: "How does Joyville Vyomora compare to Joyville Sensorium and Vanaha Pune?",
    a: "While Joyville Sensorium (also in Hinjewadi Phase 1) emphasizes 5D sensory biophilic living, Joyville Vyomora (Joy 3.0) is the newer flagship launch offering larger typologies including 4 BHK and Sky Duplexes, a massive 32,000+ sq. ft. clubhouse, and riverfront promenade views. Shapoorji Pallonji Vanaha, located in Bavdhan near Oxford Golf Resort, is a 1,000-acre mega-township focused on nature-centric luxury living."
  },
  {
    q: "How do I schedule an official site visit or download the Joyville Vyomora brochure?",
    a: "You can schedule a private site visit to the Shapoorji Pallonji Experience Centre on Maan Road, Hinjewadi Phase 1, by contacting our authorized sales desk at +91-7744009295 or by submitting an inquiry online. The comprehensive PDF brochure, floor plans, cost sheet, and payment schedules are available for instant digital download."
  }
];

export default function HomeFAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden section-deferred border-t border-[#0A192F]/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[#C5A059]/40 bg-white shadow-sm">
            <HelpCircle size={14} className="text-[#8A6B2D]" />
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#8A6B2D]">
              Frequently Asked Questions
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif text-[#0A192F] leading-tight mb-6">
            Everything You Need to Know About <br className="hidden sm:inline" />
            <span className="text-[#8A6B2D]">Shapoorji Vyomora Hinjewadi</span>
          </h2>
          
          <p className="text-base md:text-lg text-[#1e2338]/80 font-light leading-relaxed">
            Verified answers covering pricing, MahaRERA disclosures, floor plans, clubhouse amenities, Hinjewadi IT Park connectivity, and global NRI property investment.
          </p>
        </div>

        {/* FAQ Accordion List - Pure Semantic HTML5 with Zero Client JS Overhead */}
        <div className="max-w-4xl mx-auto space-y-4">
          {homeFaqItems.map((item, index) => (
            <details 
              key={index} 
              className="group bg-white rounded-xl border border-[#0A192F]/10 p-6 shadow-sm transition-all duration-300 hover:border-[#C5A059]/60 hover:shadow-md [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer list-none select-none">
                <span className="text-lg md:text-xl font-medium text-[#0A192F] pr-4 group-hover:text-[#8A6B2D] transition-colors duration-200">
                  {item.q}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#FDFBF7] border border-[#0A192F]/10 flex items-center justify-center shrink-0 text-[#0A192F] group-open:rotate-180 group-open:bg-[#0A192F] group-open:text-[#C5A059] transition-all duration-300">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-[#0A192F]/10 text-base text-[#1e2338]/85 font-light leading-relaxed">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* MahaRERA & Trust Callout */}
        <div className="mt-16 max-w-4xl mx-auto p-6 md:p-8 bg-[#0A192F] rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#C5A059]/30">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C5A059]/20 flex items-center justify-center text-[#C5A059] shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">MahaRERA Registered Project</h3>
              <p className="text-sm text-white/70">Registration No: <strong className="text-[#C5A059] tracking-wider">PR1260002600999</strong> | Target Possession: Dec 2029</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Link 
              href="/contact" 
              prefetch={false}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#C5A059] text-[#0A192F] font-semibold text-sm hover:bg-[#b08e4d] transition-all shadow-md"
            >
              Schedule Site Visit
            </Link>
            <Link 
              href="/residences" 
              prefetch={false}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/10 text-white font-medium text-sm hover:bg-white/20 transition-all border border-white/20"
            >
              Floor Plans
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
