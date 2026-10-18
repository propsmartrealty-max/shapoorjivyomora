"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with fine pointer (no touch/mobile overhead)
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine) and (hover: hover)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let outerX = -100;
    let outerY = -100;
    let isHovering = false;
    let isVisible = false;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        if (outerRef.current) outerRef.current.style.opacity = "1";
        if (innerRef.current) innerRef.current.style.opacity = "1";
      }

      // Position inner dot directly on current tick for immediate response
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0) scale(${isHovering ? 0 : 1})`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      
      const isInteractive = !!(
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".group") ||
        target.closest(".interactive")
      );

      if (isInteractive !== isHovering) {
        isHovering = isInteractive;
        if (outerRef.current) {
          outerRef.current.style.backgroundColor = isHovering ? "rgba(197, 160, 89, 0.15)" : "transparent";
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        isVisible = false;
        if (outerRef.current) outerRef.current.style.opacity = "0";
        if (innerRef.current) innerRef.current.style.opacity = "0";
      }
    };

    const loop = () => {
      // Smooth lerp on outer ring without triggering React component re-renders
      outerX += (mouseX - outerX) * 0.25;
      outerY += (mouseY - outerY) * 0.25;

      if (outerRef.current && isVisible) {
        outerRef.current.style.transform = `translate3d(${outerX - 20}px, ${outerY - 20}px, 0) scale(${isHovering ? 1.5 : 1})`;
      }

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mouseout", onMouseOut, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <>
      {/* Outer Ring - Hardware Accelerated */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-10 h-10 border border-[#C5A059] rounded-full pointer-events-none z-[9999] opacity-0 transition-[opacity,background-color] duration-150 mix-blend-difference will-change-transform"
      />
      {/* Inner Dot - Hardware Accelerated */}
      <div
        ref={innerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 w-2 h-2 bg-[#C5A059] rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-150 mix-blend-difference will-change-transform"
      />
    </>
  );
}
