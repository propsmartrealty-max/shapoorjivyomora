"use client";

export default function EcosystemCTA() {
  return (
    <button
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("open-enquiry-modal"));
        }
      }}
      className="text-xs font-bold uppercase tracking-widest text-[#050C17] bg-[#C5A059] hover:bg-white px-5 py-2.5 rounded-sm transition-colors"
    >
      Get Multi-Project Price Comparison
    </button>
  );
}
