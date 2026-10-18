"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const EnquiryModal = dynamic(() => import("@/components/EnquiryModal"), { ssr: false });
const ExitIntentModal = dynamic(() => import("@/components/ExitIntentModal"), { ssr: false });
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/ui/CustomCursor"), { ssr: false });

export default function ClientModals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleImmediate = () => setMounted(true);
    window.addEventListener("open-enquiry-modal", handleImmediate, { once: true });

    let idleId: number | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    if ("requestIdleCallback" in window) {
      idleId = (window as any).requestIdleCallback(() => setMounted(true), { timeout: 2500 });
    } else {
      timeoutId = setTimeout(() => setMounted(true), 2000);
    }

    return () => {
      window.removeEventListener("open-enquiry-modal", handleImmediate);
      if (idleId && "cancelIdleCallback" in window) (window as any).cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CustomCursor />
      <EnquiryModal />
      <ExitIntentModal />
      <WhatsAppWidget />
    </>
  );
}
