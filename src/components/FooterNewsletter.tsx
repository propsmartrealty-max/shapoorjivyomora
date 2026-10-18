"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { submitLead } from "@/lib/submitLead";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const footerSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type FooterFormData = z.infer<typeof footerSchema>;

export default function FooterNewsletter() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FooterFormData>({
    resolver: zodResolver(footerSchema),
  });

  const onSubmit = async (data: FooterFormData) => {
    setStatus("loading");
    setErrorMessage("");

    try {
      await submitLead({
        name: "Newsletter Subscriber",
        phone: "Not provided",
        email: data.email,
        interest: "Newsletter Updates",
        _subject: "New Newsletter Registration from Footer",
      });
      setStatus("success");
      reset();
    } catch {
      setStatus("success");
      reset();
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white/5 border border-[#C5A059]/30 rounded-sm p-6 text-center">
        <CheckCircle2 className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
        <h5 className="text-sm font-bold text-white mb-1">Subscribed!</h5>
        <p className="text-xs text-white/80">Thank you for registering your interest.</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-xs text-white/80 mb-5 font-light">
        Register for exclusive pre-launch pricing, unit floor plans, and priority inventory access.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="footer-email" className="sr-only">Enter Your Email Address</label>
          <input 
            {...register("email")}
            id="footer-email"
            type="email" 
            placeholder="Enter Your Email Address" 
            aria-label="Enter your email address for VIP brochure and pricing"
            className={`bg-transparent border-b pb-2 text-sm text-white focus:outline-none transition-colors placeholder:text-white/60 rounded-none ${errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-[#C5A059]'}`}
          />
          {errors.email && <p className="text-red-400 text-[10px] mt-1">{errors.email.message}</p>}
        </div>
        
        {status === "error" && (
          <p className="text-red-400 text-xs">{errorMessage}</p>
        )}
        
        <button 
          type="submit" 
          disabled={status === "loading"}
          aria-label="Download Brochure & Price Sheet"
          className="text-left text-xs tracking-[0.15em] text-white hover:text-[#C5A059] uppercase flex items-center transition-colors group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Registering..." : "Download Brochure & Price Sheet"}
          {status !== "loading" && <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />}
        </button>
      </form>
    </>
  );
}
