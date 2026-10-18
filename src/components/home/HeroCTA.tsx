"use client";

import { Button } from "@/components/ui/Button";

export default function HeroCTA() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
      <Button 
        variant="primaryDark" 
        size="lg" 
        aria-label="Book Site Visit"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("open-enquiry-modal"));
          }
        }}
        className="w-full sm:w-auto"
      >
        Book Site Visit
      </Button>
      <Button 
        variant="outlineDark" 
        size="lg" 
        aria-label="Download Brochure"
        onClick={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new Event("open-enquiry-modal"));
          }
        }}
        className="w-full sm:w-auto"
      >
        Download Brochure
      </Button>
    </div>
  );
}
