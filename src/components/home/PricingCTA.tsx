"use client";

import { Button } from "@/components/ui/Button";

export default function PricingCTA() {
  return (
    <Button 
      variant="gold" 
      aria-label="Enquire Now for Pricing and Floor Plans"
      className="text-sm bg-[#0A192F] text-white shrink-0"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("open-enquiry-modal"));
        }
      }}
    >
      Enquire Now
    </Button>
  );
}
