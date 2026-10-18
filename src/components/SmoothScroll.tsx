"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Preserve native hardware-accelerated compositor scrolling on touch devices for optimal INP
    const isTouch = window.matchMedia("(hover: none) and (pointer: coarse)").matches || 'ontouchstart' in window;
    if (isTouch) return;

    let lenisInstance: any = null;
    let rafId: number;

    import("lenis").then(({ default: Lenis }) => {
      const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      lenisInstance = lenis;

      function raf(time: number) {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisInstance) lenisInstance.destroy();
    };
  }, []);

  return null;
}
