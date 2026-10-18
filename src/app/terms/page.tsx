import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Shapoorji Pallonji Joyville Vyomora Hinjewadi",
  description: "Terms and conditions of use for Shapoorji Pallonji Joyville Vyomora (Joy 3.0) official channel partner portal.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#FDFBF7] min-h-screen text-[#0A192F]">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#8A6B2D] hover:text-[#0A192F] mb-8 transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Homepage
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#0A192F] flex items-center justify-center text-[#C5A059]">
            <FileText size={20} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A6B2D]">Legal Terms & Disclaimers</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif mb-8 text-[#0A192F]">
          Terms of Service
        </h1>
        <p className="text-xs text-gray-500 mb-12">Last Updated: October 2026</p>

        <div className="space-y-8 text-sm md:text-base text-[#1e2338]/80 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">1. Informational Purposes Only</h2>
            <p>
              The content published on this website is for general informational purposes only and does not constitute an offer, contract, warranty, or commitment of any kind by Shapoorji Pallonji Real Estate or its channel partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">2. Pricing, Specifications & Architectural Renders</h2>
            <p>
              All unit carpet areas, floor plans, specifications, clubhouse amenities, and prices mentioned are indicative and subject to change without prior notice. Visual depictions, 3D artist impressions, and renderings are creative impressions intended to communicate architectural aesthetics.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">3. MahaRERA Verification</h2>
            <p>
              Joyville Vyomora is registered under MahaRERA No: <strong>PR1260002600999</strong>. Homebuyers are encouraged to verify project filings and statutory approvals directly on the official portal at <a href="https://maharera.mahaonline.gov.in" target="_blank" rel="noreferrer" className="text-[#8A6B2D] underline font-semibold">maharera.mahaonline.gov.in</a> before entering into any binding allotment agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">4. Intellectual Property</h2>
            <p>
              All logos, brand names, trademarks, blueprints, and text materials displayed on this website are the property of their respective owners, including Shapoorji Pallonji Real Estate.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
