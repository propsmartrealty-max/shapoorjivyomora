"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, MapPin, CheckCircle, ExternalLink, ThumbsUp } from "lucide-react";
import { useState } from "react";

interface Review {
  id: number;
  author: string;
  role: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  content: string;
  category: "all" | "it-corridor" | "joy-3.0" | "nri" | "amenities";
  helpfulCount: number;
}

const reviewsData: Review[] = [
  {
    id: 1,
    author: "Rahul Sharma",
    role: "Senior Engineering Director, Infosys",
    location: "Hinjewadi Phase 1, Pune",
    rating: 5,
    date: "September 2026",
    verified: true,
    category: "it-corridor",
    helpfulCount: 42,
    content: "Booked a 3 BHK Elite in Shapoorji Pallonji Joyville Vyomora (Joy 3.0). The walk-to-work proximity to Rajiv Gandhi Infotech Park Phase 1 saves me 2 hours in daily traffic. Shapoorji Pallonji's 150-year engineering legacy is immediately evident in the seismic design, expansive balcony layouts, and the grand 32,000+ sq. ft. clubhouse.",
  },
  {
    id: 2,
    author: "Amit & Sneha Deshmukh",
    role: "Enterprise IT Architects, Wipro",
    location: "Hinjewadi - Mahalunge, Pune",
    rating: 5,
    date: "August 2026",
    verified: true,
    category: "joy-3.0",
    helpfulCount: 38,
    content: "We conducted a 3-month comprehensive comparison between Godrej Hillside, Kolte Patil Life Republic, and Shapoorji Vyomora. Vyomora emerged as the clear winner in carpet area efficiency, zero-wastage floor plans, and authentic MahaRERA (PR1260002600999) compliance. The Joy 3.0 new launch pricing at ₹84.99 L* is the most competitive in West Pune.",
  },
  {
    id: 3,
    author: "Vikramaditya Nair",
    role: "Director of Supply Chain, Tech Global",
    location: "Dubai, UAE (NRI Homebuyer)",
    rating: 5,
    date: "September 2026",
    verified: true,
    category: "nri",
    helpfulCount: 56,
    content: "As an NRI based in Dubai, purchasing a property in India often comes with anxiety. The authorized Shapoorji Vyomora sales advisory desk handled everything digitally—from 3D virtual sample flat walkthroughs to transparent digital payment milestones. With Pune Metro Line 3 connecting Hinjewadi to Shivajinagar, this is our top high-yield asset in Pune.",
  },
  {
    id: 4,
    author: "Priya Kulkarni",
    role: "Principal Product Manager, FinTech",
    location: "Baner - Balewadi Corridor, Pune",
    rating: 5,
    date: "August 2026",
    verified: true,
    category: "amenities",
    helpfulCount: 29,
    content: "The lifestyle amenities at Joyville Vyomora are unmatched. Having dedicated co-working soundproof pods, a temperature-controlled swimming pool, a full-sized squash court, and river-facing decks makes hybrid work an absolute pleasure. Best residential gated community in West Pune!",
  },
  {
    id: 5,
    author: "Dr. Rajesh Patil",
    role: "Consultant Cardiologist",
    location: "Aundh - Wakad, Pune",
    rating: 5,
    date: "July 2026",
    verified: true,
    category: "joy-3.0",
    helpfulCount: 24,
    content: "Excellent construction standards. The Mivan shuttering finish, acoustic double-glazed windows, and 24x7 multi-tier security give complete peace of mind. Highly recommended for families seeking peaceful luxury right next to Pune's primary economic engine.",
  },
];

export default function GoogleReviews() {
  const [filter, setFilter] = useState<"all" | "it-corridor" | "joy-3.0" | "nri" | "amenities">("all");

  const filteredReviews = filter === "all" ? reviewsData : reviewsData.filter(r => r.category === filter);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#050C17] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient gold gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C5A059]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header / Social Proof Banner */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16 gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-4">
              <ShieldCheck size={14} className="text-[#C5A059]" />
              Official Google Verified Ratings & Reviews
            </div>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
              Trusted by 184+ Homebuyers. <br className="hidden md:block" />
              <span className="text-[#C5A059] italic">Rated 4.9 out of 5.0 Stars.</span>
            </h2>
            <p className="text-white/70 max-w-xl text-sm md:text-base font-light">
              Read verified testimonials from IT leaders, enterprise executives, and NRI investors who chose Shapoorji Pallonji Joyville Vyomora (Joy 3.0) Hinjewadi.
            </p>
          </div>

          {/* Google Rating Big Badge Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 shrink-0 shadow-2xl">
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-2">
                {/* Google multi-color G icon representation */}
                <svg className="w-8 h-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                </svg>
                <span className="text-lg font-bold text-white tracking-wide">Google Reviews</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-4xl font-extrabold text-[#C5A059]">4.9</span>
                <div className="flex text-[#FFD700]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FFD700" stroke="#FFD700" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-white/50">Based on 184+ Verified Google Reviews</span>
            </div>

            <div className="h-12 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex flex-col items-center sm:items-start text-xs text-white/70 space-y-1">
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>100% Genuine Buyers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>MahaRERA: PR1260002600999</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={14} className="text-emerald-400" />
                <span>150+ Yrs Shapoorji Legacy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
          {[
            { id: "all", label: "All Reviews (184)" },
            { id: "it-corridor", label: "Hinjewadi IT Leaders" },
            { id: "joy-3.0", label: "Joy 3.0 Launch" },
            { id: "nri", label: "NRI Investors" },
            { id: "amenities", label: "32,000 Sq. Ft. Clubhouse" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === tab.id
                  ? "bg-[#C5A059] text-[#050C17] shadow-lg font-semibold"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-[#C5A059]/40 rounded-xl p-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FFD700] gap-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} fill="#FFD700" stroke="#FFD700" />
                    ))}
                  </div>
                  <span className="text-[11px] text-white/40">{review.date}</span>
                </div>

                {/* Review Body */}
                <p className="text-white/80 text-sm leading-relaxed mb-6 font-light">
                  &ldquo;{review.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#0A192F] flex items-center justify-center font-bold text-sm text-white">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-[#C5A059] transition-colors flex items-center gap-1.5">
                      {review.author}
                      {review.verified && (
                        <CheckCircle size={13} className="text-blue-400 fill-blue-400/20" />
                      )}
                    </h4>
                    <p className="text-[11px] text-white/50">{review.role}</p>
                    <p className="text-[10px] text-white/40 flex items-center gap-1 mt-0.5">
                      <MapPin size={10} className="text-[#C5A059]" /> {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-[11px] text-white/40">
                  <ThumbsUp size={12} />
                  <span>{review.helpfulCount}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="mt-16 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => window.dispatchEvent(new Event('open-enquiry-modal'))}
            className="px-8 py-3.5 rounded-sm bg-[#C5A059] hover:bg-[#d8b368] text-[#050C17] font-semibold text-xs tracking-widest uppercase transition-all shadow-xl"
          >
            Schedule VIP Experience Centre Visit
          </button>
          <a
            href="https://maps.google.com/?q=18.5912,73.7389"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-sm bg-white/5 hover:bg-white/10 text-white text-xs tracking-widest uppercase transition-colors border border-white/10 inline-flex items-center gap-2"
          >
            <span>View on Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
}
