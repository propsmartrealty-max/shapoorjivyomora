"use client";

import React from "react";

interface EnquiryTriggerButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export function EnquiryTriggerButton({ children = "Enquire Now", className }: EnquiryTriggerButtonProps) {
  return (
    <button
      type="button"
      onClick={() => {
        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("open-enquiry-modal"));
        }
      }}
      className={className}
    >
      {children}
    </button>
  );
}
