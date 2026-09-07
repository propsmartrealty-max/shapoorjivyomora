/// <reference types="@cloudflare/workers-types" />

interface Env {
  DEFAULT_RECIPIENT_EMAIL?: string;
  PROJECT_NAME?: string;
}

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfHvV9JAKt4MDrd-Pt_B8i_CBv94u66NXA8wi15_OGzR9P_dLYXCo7AOIFa1cwXVO26w/exec";

// Strip HTML tags & unsafe characters to prevent injection
function sanitizeInput(str: string | undefined): string {
  if (!str) return "";
  return str.replace(/[<>]/g, "").replace(/javascript:/gi, "").trim();
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
    "Content-Type": "application/json",
  };

  try {
    const data = await request.json() as Record<string, any>;

    const leadName = sanitizeInput(data.name) || "Interested Buyer";
    const leadPhone = sanitizeInput(data.phone || data.mobile) || "Not provided";
    const leadEmail = sanitizeInput(data.email) || "Not provided";
    const leadConfig = sanitizeInput(data.configuration || data.interest) || "Not specified";
    const visitDate = sanitizeInput(data.visit_date || data.visitDate) || "Not scheduled";
    const message = sanitizeInput(data.message || data.notes) || "New enquiry from website";
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const recipientEmail = env.DEFAULT_RECIPIENT_EMAIL || "propsmartrealty@gmail.com";
    const formSubmitUrl = `https://formsubmit.co/ajax/${recipientEmail}`;

    const subject = `🔥 New Lead: Shapoorji Vyomora - ${leadName} (${leadPhone})`;

    // Edge multi-tier parallel dispatch
    const formSubmitPromise = fetch(formSubmitUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (compatible; CloudflareEdgeLeadDispatcher/2.0)"
      },
      body: JSON.stringify({
        Name: leadName,
        Phone: leadPhone,
        Email: leadEmail,
        Configuration: leadConfig,
        Visit_Date: visitDate,
        Message: message,
        Submitted_At_IST: timestamp,
        Edge_Country: request.cf?.country || "IN",
        Edge_City: request.cf?.city || "Unknown",
        _subject: subject,
        _template: "table",
        _captcha: "false"
      }),
    }).catch((err) => console.warn("Cloudflare Edge FormSubmit dispatch warning:", err));

    const googleSheetPromise = fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: leadName,
        phone: leadPhone,
        email: leadEmail,
        configuration: leadConfig,
        visit_date: visitDate,
        message: message,
        submitted_at: timestamp,
        source: "Cloudflare Pages Edge"
      }),
    }).catch((err) => console.warn("Cloudflare Edge Google Script dispatch warning:", err));

    // Wait for dispatches
    await Promise.allSettled([formSubmitPromise, googleSheetPromise]);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Lead successfully recorded and dispatched via Cloudflare Edge",
        edgeLocation: request.cf?.colo || "EDGE",
      }),
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    console.error("Cloudflare Edge Contact API error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Internal edge processing error" }),
      { status: 500, headers: corsHeaders }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Accept",
      "Access-Control-Max-Age": "86400",
    },
  });
};
