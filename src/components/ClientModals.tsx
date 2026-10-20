"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const EnquiryModal = dynamic(() => import("@/components/EnquiryModal"), { ssr: false });
const ExitIntentModal = dynamic(() => import("@/components/ExitIntentModal"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export default function ClientModals() {
  const [loadEnquiry, setLoadEnquiry] = useState(false);
  const [loadDesktopModals, setLoadDesktopModals] = useState(false);

  useEffect(() => {
    // 1. Mount EnquiryModal immediately when user clicks any CTA button
    const handleEnquiry = () => setLoadEnquiry(true);
    window.addEventListener("open-enquiry-modal", handleEnquiry, { once: true });

    // 2. Desktop-only features: ExitIntent & CustomCursor (only if pointer is fine and not touch)
    if (typeof window !== "undefined" && window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      const handleDesktopInteraction = () => {
        setLoadDesktopModals(true);
        window.removeEventListener("mousemove", handleDesktopInteraction);
        window.removeEventListener("scroll", handleDesktopInteraction);
      };
      window.addEventListener("mousemove", handleDesktopInteraction, { passive: true, once: true });
      window.addEventListener("scroll", handleDesktopInteraction, { passive: true, once: true });
    }

    // 3. Fallback engagement: load EnquiryModal when user scrolls past 800px
    const handleScrollEngagement = () => {
      if (window.scrollY > 800) {
        setLoadEnquiry(true);
        window.removeEventListener("scroll", handleScrollEngagement);
      }
    };
    window.addEventListener("scroll", handleScrollEngagement, { passive: true });

    return () => {
      window.removeEventListener("open-enquiry-modal", handleEnquiry);
      window.removeEventListener("scroll", handleScrollEngagement);
    };
  }, []);

  return (
    <>
      <WhatsAppWidget />
      {loadDesktopModals && <CustomCursor />}
      {loadDesktopModals && <ExitIntentModal />}
      {loadEnquiry && <EnquiryModal />}
    </>
  );
}
