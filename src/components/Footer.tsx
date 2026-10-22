import Link from "next/link";
import { ArrowRight, MapPin, Phone, Building2, Navigation } from "lucide-react";
import FooterNewsletter from "./FooterNewsletter";

export default function Footer() {

  return (
    <footer className="bg-[#0A192F] text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-[#C5A059] to-transparent opacity-30" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" prefetch={false} className="flex flex-col group mb-8">
              <span className="text-2xl font-serif tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#C5A059]">
                VYOMORA
              </span>
              <span className="text-[0.65rem] tracking-[0.25em] text-[#C5A059] font-bold uppercase mt-1">
                By Shapoorji Pallonji
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed font-light mb-8 max-w-xs">
              Extraordinary luxury township development project located in Mahalunge & Hinjewadi Phase 1, West Pune. Crafted with 150+ years of engineering excellence.
            </p>
            <div className="flex flex-col gap-3">
              <a 
                href="https://maps.google.com/?q=18.5913,73.7389" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Get Google Maps Directions to Shapoorji Vyomora Experience Centre"
                className="inline-flex items-center text-xs font-medium text-[#C5A059] hover:text-white transition-colors gap-2"
              >
                <Navigation size={14} />
                Get Google Maps Directions
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Explore Project</h4>
            <ul className="space-y-3">
              {[
                { label: "The Vision", href: "/vision" },
                { label: "Masterplan", href: "/masterplan" },
                { label: "Luxury Residences", href: "/residences" },
                { label: "32k Sq. Ft. Clubhouse", href: "/amenities" },
                { label: "Specifications & Finishes", href: "/specifications" },
                { label: "Location & Metro Connectivity", href: "/location" },
                { label: "All Pune Projects", href: "/projects" },
                { label: "Developer Profile", href: "/developers/shapoorji-pallonji-pune" },
                { label: "Projects Comparison", href: "/guides/shapoorji-pallonji-projects-pune-comparison" },
                { label: "West Pune Real Estate Hub", href: "/west-pune-real-estate" },
                { label: "Market Intelligence Hub", href: "/market" },
                { label: "ROI & EMI Calculator", href: "/investment-calculator" },
                { label: "Real Estate Articles", href: "/articles" }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} prefetch={false} className="text-xs text-white/70 hover:text-white flex items-center group transition-colors">
                    <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out text-[#C5A059]">
                      <ArrowRight size={10} />
                    </span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Sales & Experience Desk</h4>
            <ul className="space-y-5">
              <li className="flex items-start">
                <MapPin size={18} className="text-[#C5A059]/60 mt-1 mr-3 shrink-0" />
                <span className="text-xs text-white/70 leading-relaxed">
                  Shapoorji Pallonji Joyville Vyomora Experience Centre,<br />
                  Off Maan Road, Near Infosys Circle & Hinjewadi Phase 1,<br />
                  Mahalunge-Hinjewadi, Pune - 411057
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-[#C5A059]/60 mr-3 shrink-0" />
                <a href="tel:+917744009295" className="text-xs text-white/70 hover:text-white transition-colors">
                  +91 7744009295 (VIP Sales Desk)
                </a>
              </li>
              <li className="flex items-center">
                <Building2 size={18} className="text-[#C5A059]/60 mr-3 shrink-0" />
                <span className="text-xs text-white/60">
                  Daily Open: 9:30 AM – 7:30 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter & Brochure */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase mb-8">Get VIP Pricing</h4>
            <FooterNewsletter />
          </div>
        </div>

        {/* Thematic Real Estate Keyword Hub (Crawlable Semantic Links) */}
        <div className="border-t border-white/10 pt-10 mt-10 mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Shapoorji Pune Ecosystem</h4>
            <ul className="space-y-2 text-[11px] text-white/80">
              <li><Link href="/developers/shapoorji-pallonji-pune" prefetch={false} className="text-[#C5A059] font-semibold hover:text-white transition-colors">Developer Profile: Shapoorji Pallonji</Link></li>
              <li><Link href="/guides/shapoorji-pallonji-projects-pune-comparison" prefetch={false} className="text-[#C5A059] font-semibold hover:text-white transition-colors">Pune Projects Comparison Guide</Link></li>
              <li><Link href="/projects" prefetch={false} className="hover:text-white transition-colors">All Pune Projects Master Directory</Link></li>
              <li><Link href="/projects/joyville-sensorium" prefetch={false} className="hover:text-white transition-colors">Joyville Sensorium Hinjewadi Phase 1</Link></li>
              <li><Link href="/projects/shapoorji-pallonji-vanaha" prefetch={false} className="hover:text-white transition-colors">Shapoorji Pallonji Vanaha Bavdhan</Link></li>
              <li><Link href="/projects/vanaha-golfland" prefetch={false} className="hover:text-white transition-colors">Vanaha Golfland Bavdhan Valley</Link></li>
              <li><Link href="/projects/joyville-hadapsar-annexe" prefetch={false} className="hover:text-white transition-colors">Joyville Hadapsar Annexe & Celestia</Link></li>
              <li><Link href="/projects/wildernest-sp-kingstown" prefetch={false} className="hover:text-white transition-colors">Wildernest at SP Kingstown Pune</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Pune Micro-Markets Focus</h4>
            <ul className="space-y-2 text-[11px] text-white/80">
              <li><Link href="/market/mahalunge/luxury-apartments/property-investment" prefetch={false} className="hover:text-white transition-colors">Mahalunge Real Estate & Township Projects</Link></li>
              <li><Link href="/market/hinjewadi-phase-1/2bhk-in-hinjewadi/location-benefits" prefetch={false} className="hover:text-white transition-colors">2 BHK Flats in Hinjewadi Phase 1</Link></li>
              <li><Link href="/market/baner/4bhk-in-baner/price-trends" prefetch={false} className="hover:text-white transition-colors">Luxury 4 BHK Apartments in Baner</Link></li>
              <li><Link href="/market/wakad/3bhk-in-mahalunge/floor-plans" prefetch={false} className="hover:text-white transition-colors">Premium 3 BHK Homes near Wakad & Baner</Link></li>
              <li><Link href="/market/balewadi-high-street/sky-duplex/future-growth" prefetch={false} className="hover:text-white transition-colors">Sky Duplexes near Balewadi High Street</Link></li>
              <li><Link href="/market/rajiv-gandhi-infotech-park/luxury-apartments/connectivity" prefetch={false} className="hover:text-white transition-colors">Apartments near Rajiv Gandhi Infotech Park</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Typologies & Luxury Residences</h4>
            <ul className="space-y-2 text-[11px] text-white/80">
              <li><Link href="/market/hinjewadi/2bhk-in-hinjewadi/price-trends" prefetch={false} className="hover:text-white transition-colors">2 BHK Smart Apartments in Hinjewadi</Link></li>
              <li><Link href="/market/mahalunge/3bhk-in-mahalunge/floor-plans" prefetch={false} className="hover:text-white transition-colors">3 BHK Premium Township Flats in Mahalunge</Link></li>
              <li><Link href="/market/baner/4bhk-in-baner/brochure-download" prefetch={false} className="hover:text-white transition-colors">4 BHK Luxury Sky Suites in Baner-Mahalunge</Link></li>
              <li><Link href="/market/pune-west/sky-duplex/amenities" prefetch={false} className="hover:text-white transition-colors">Ultra Luxury Sky Duplex & Simplex Homes</Link></li>
              <li><Link href="/market/pune/5bhk-sky-villas/masterplan" prefetch={false} className="hover:text-white transition-colors">5 BHK Sky Villas & Presidential Penthouses</Link></li>
              <li><Link href="/market/hinjewadi/best-flats-for-it-professionals/investment-roi" prefetch={false} className="hover:text-white transition-colors">Best Flats for IT Professionals in Pune</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.15em] text-[#C5A059] uppercase mb-4">Market Research & Guides</h4>
            <ul className="space-y-2 text-[11px] text-white/80">
              <li><Link href="/west-pune-real-estate" prefetch={false} className="text-[#C5A059] font-semibold hover:text-white transition-colors">West Pune Real Estate Market Guide 2026</Link></li>
              <li><Link href="/articles/shapoorji-vyomora-vs-godrej-24-and-godrej-hillside-hinjewadi" prefetch={false} className="hover:text-white transition-colors">Vyomora vs Godrej 24 & Godrej Hillside</Link></li>
              <li><Link href="/articles/joyville-vyomora-vs-kolte-patil-life-republic-hinjewadi" prefetch={false} className="hover:text-white transition-colors">Joyville Vyomora vs Kolte Patil Life Republic</Link></li>
              <li><Link href="/articles/pune-metro-line-3-hinjewadi-to-shivajinagar-real-estate-impact" prefetch={false} className="hover:text-white transition-colors">Pune Metro Line 3 Price Impact Report</Link></li>
              <li><Link href="/articles/luxury-3bhk-4bhk-duplex-apartments-in-baner-mahalunge" prefetch={false} className="hover:text-white transition-colors">Luxury 3BHK, 4BHK & Duplex in Baner-Mahalunge</Link></li>
              <li><Link href="/articles/nri-guide-investing-in-pune-real-estate-from-usa-dubai-uk" prefetch={false} className="hover:text-white transition-colors">NRI Investment Guide: Dubai, USA & UK to Pune</Link></li>
            </ul>
          </div>
        </div>

        {/* RERA & Channel Partner Compliance Disclosures */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col justify-between items-center text-[10px] md:text-xs text-white/75 font-light gap-6">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="mb-1">MahaRERA Registration No: <span className="text-white/90 font-semibold">PR1260002600999</span></p>
              <p>Project details verified at official portal: <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="hover:text-white transition-colors underline">maharera.mahaonline.gov.in</a></p>
            </div>
            <div className="text-center md:text-right">
              <p className="mb-2">&copy; {new Date().getFullYear()} Shapoorji Pallonji Real Estate. All rights reserved.</p>
              <div className="flex space-x-4 justify-center md:justify-end">
                <Link href="/privacy-policy" prefetch={false} className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" prefetch={false} className="hover:text-white transition-colors">Terms of Service</Link>
                <Link href="/market" prefetch={false} className="hover:text-white transition-colors text-[#C5A059]">Market Index</Link>
                <Link href="/sitemap" prefetch={false} className="hover:text-white transition-colors text-[#C5A059]">HTML Sitemap</Link>
                <a href="#disclaimer" className="hover:text-white transition-colors">RERA Disclaimers</a>
              </div>
            </div>
          </div>
          
          <div id="disclaimer" className="text-[9px] md:text-[10px] text-justify text-white/70 max-w-7xl mx-auto leading-relaxed border-t border-white/5 pt-6">
            Disclaimer: The content provided on this website is for informational purposes only and does not constitute an offer of contract. Prices, configurations, specifications, floor plans, and amenities mentioned are subject to change without prior notice. Rendered images and artist impressions are for representative purposes only. This website is managed by an authorized channel partner for Shapoorji Pallonji Real Estate. We may share inquiries with MahaRERA registered real estate advisors for processing.
          </div>
        </div>
      </div>
      
      {/* Comprehensive Pune Real Estate Authority Footprint */}
      <div className="border-t border-white/5 bg-[#050c17] py-6 mt-10">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-[0.65rem] leading-relaxed text-white/70 text-justify font-light">
            <strong>Pune Real Estate Market, Shapoorji Pune &amp; Hinjewadi Authority:</strong> <strong>Shapoorji Pallonji Real Estate</strong> and <strong>Joyville Homes</strong> continue to set the benchmark in premium real estate across the entire Pune market. While landmark projects like Joyville Sensorium Hinjewadi, Joyville Hadapsar Annexe, Shapoorji Pallonji Vanaha Bavdhan, and Wildernest at SP Kingstown represent trusted developments, <strong>Shapoorji Vyomora Hinjewadi</strong> (<strong>Joyville Homes Hinjewadi</strong> - Joy 3.0) stands as the flagship luxury residential township. Offering 2 BHK, 3 BHK, 4 BHK, and Sky Duplex residences in <strong>Hinjewadi Phase 1</strong> near Rajiv Gandhi Infotech Park, <strong>Vyomora Hinjewadi</strong> delivers the highest capital appreciation and rental yield in West Pune. Explore the complete <strong>Shapoorji Pune</strong> portfolio with verified MahaRERA PR1260002600999 compliance.
          </p>
        </div>
      </div>
    </footer>
  );
}
