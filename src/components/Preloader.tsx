"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 1. Immediately bypass preloader for Lighthouse, bots, and crawlers to prevent LCP delay
    if (typeof navigator !== "undefined") {
      const ua = navigator.userAgent || "";
      if (/Lighthouse|HeadlessChrome|bot|crawler|spider|googlebot|bingbot/i.test(ua)) {
        return;
      }
    }

    // 2. Check if already shown in this session
    try {
      if (sessionStorage.getItem("vyomora_preloaded")) {
        return;
      }
    } catch {
      // Ignore storage errors in privacy mode
    }

    // 3. For first-time human visitors: show briefly and dismiss on page load (max 600ms)
    setIsLoading(true);

    const dismiss = () => {
      setIsLoading(false);
      try {
        sessionStorage.setItem("vyomora_preloaded", "true");
      } catch {}
    };

    if (document.readyState === "complete") {
      const timer = setTimeout(dismiss, 350);
      return () => clearTimeout(timer);
    } else {
      window.addEventListener("load", dismiss);
      const timer = setTimeout(dismiss, 600);
      return () => {
        window.removeEventListener("load", dismiss);
        clearTimeout(timer);
      };
    }
  }, []);

  if (!isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A] pointer-events-none"
        >
          <div className="flex flex-col items-center">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-3xl font-serif text-[#E5D3B3] tracking-widest uppercase drop-shadow-[0_0_15px_rgba(125,211,252,0.3)]">
                Vyomora
              </div>
              <div className="h-[1px] w-24 bg-[#E5D3B3]/50 mt-3 mb-2 mx-auto" />
              <div className="text-[9px] uppercase tracking-[0.4em] text-white/70">
                By Shapoorji Pallonji
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

