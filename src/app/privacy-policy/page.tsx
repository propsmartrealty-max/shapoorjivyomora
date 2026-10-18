import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Shapoorji Pallonji Joyville Vyomora Hinjewadi",
  description: "Privacy policy and data protection disclosures for Shapoorji Pallonji Joyville Vyomora (Joy 3.0) official channel partner portal.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
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
            <Shield size={20} />
          </div>
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#8A6B2D]">Compliance & Data Protection</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-serif mb-8 text-[#0A192F]">
          Privacy Policy
        </h1>
        <p className="text-xs text-gray-500 mb-12">Last Updated: October 2026</p>

        <div className="space-y-8 text-sm md:text-base text-[#1e2338]/80 leading-relaxed font-light">
          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">1. Information Collection</h2>
            <p>
              When you submit an inquiry form, schedule a site visit, or request pricing and floor plan brochures on this portal for <strong>Shapoorji Pallonji Joyville Vyomora</strong>, we collect your name, email address, telephone number, and residential configuration preferences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">2. Purpose of Processing</h2>
            <p>
              Your contact details are processed strictly to provide project updates, verified MahaRERA documentation, official cost sheets, site inspection appointments, and developer notifications regarding Joyville Vyomora (Joy 3.0) Hinjewadi.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">3. Channel Partner & RERA Disclosures</h2>
            <p>
              This portal is managed by an authorized channel partner for Shapoorji Pallonji Real Estate. In accordance with MahaRERA guidelines (Project Registration No: <strong>PR1260002600999</strong>), your inquiries may be coordinated with certified real estate advisors for prompt on-site facilitation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">4. Data Security & Retention</h2>
            <p>
              We implement industry-standard encryption, strict access controls, and security headers to prevent unauthorized access or disclosure of personal data. We never sell, rent, or trade your personal information to third-party commercial marketing entities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif font-bold text-[#0A192F] mb-3">5. Contact Our Privacy Officer</h2>
            <p>
              For any questions, data modification requests, or opt-out inquiries, please reach out to our desk at <a href="mailto:propsmartrealty@gmail.com" className="text-[#8A6B2D] font-semibold underline">propsmartrealty@gmail.com</a> or call <a href="tel:+917744009295" className="text-[#8A6B2D] font-semibold underline">+91 7744009295</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
