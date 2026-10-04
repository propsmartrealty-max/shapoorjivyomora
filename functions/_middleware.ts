/// <reference types="@cloudflare/workers-types" />

interface Env {
  PROJECT_NAME?: string;
  DEFAULT_RECIPIENT_EMAIL?: string;
  SALES_PHONE?: string;
  MAHARERA_REG?: string;
  BASE_URL?: string;
  NEXT_PUBLIC_GA_ID?: string;
}

// Edge Bot & Crawler Detection Pattern
const SEARCH_BOT_REGEX = /Googlebot|Googlebot-Image|Bingbot|Applebot|GPTBot|PerplexityBot|ClaudeBot|DuckDuckBot|Slurp/i;

// NRI Target Markets
const NRI_COUNTRIES = new Set(['AE', 'US', 'GB', 'SG', 'QA', 'SA', 'KW', 'OM', 'BH', 'AU', 'CA']);

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;
  const url = new URL(request.url);

  // 1. Canonical Domain & Trailing Slash Enforcement at the Edge
  // Normalize apex to www.shapoorji-vyomora.com
  if (url.hostname === 'shapoorji-vyomora.com') {
    url.hostname = 'www.shapoorji-vyomora.com';
    return Response.redirect(url.toString(), 301);
  }

  // Remove trailing slashes on routes (except root) to prevent duplicate SERP indexing
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    return Response.redirect(url.toString(), 301);
  }

  // 2. Fetch the response from the origin / Pages static assets
  const response = await context.next();

  // Only apply HTMLRewriter on successful HTML responses
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html') || response.status !== 200) {
    return response;
  }

  // 3. Inspect Edge Context (Geo-IP & User Agent)
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchBot = SEARCH_BOT_REGEX.test(userAgent);
  const country = (request.cf?.country as string) || 'IN';
  const city = (request.cf?.city as string) || 'Pune';
  const isNri = NRI_COUNTRIES.has(country);

  // 4. Ultra-Advanced Cloudflare Edge HTMLRewriter Transformations
  const rewriter = new HTMLRewriter()
    // A. Head Injection: Preconnect, Favicon, Web Analytics, GA4, and Verified Robots Directives
    .on('head', {
      element(head) {
        // High-priority DNS prefetch & preconnect for sub-second Core Web Vitals
        head.prepend(
          `<link rel="preconnect" href="https://fonts.googleapis.com" crossorigin />
           <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
           <link rel="dns-prefetch" href="https://shapoorjirealestate.com" />
           <link rel="icon" href="/favicon.ico" sizes="any" />
           <link rel="icon" href="/icon.svg" type="image/svg+xml" />
           <link rel="apple-touch-icon" href="/icon.svg" />
           <meta name="cf-edge-processed" content="true" />
           <meta name="cf-edge-location" content="${country}" />`,
          { html: true }
        );

        // If Googlebot or Search Bot: ensure ultra-permissive indexing directives
        if (isSearchBot) {
          head.append(
            `<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
             <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
            { html: true }
          );
        }

        // NRI Personalization: Inject Geo-Specific Investor signals
        if (isNri) {
          head.append(
            `<meta name="nri-investor-desk" content="Active for ${country} - Direct Developer Channel & Remote Video Tours" />
             <meta property="og:locale:alternate" content="en_${country}" />`,
            { html: true }
          );
        }

        // GA4 Dynamic Edge Injection (if configured in environment)
        if (env.NEXT_PUBLIC_GA_ID) {
          head.append(
            `<script async src="https://www.googletagmanager.com/gtag/js?id=${env.NEXT_PUBLIC_GA_ID}"></script>
             <script>
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${env.NEXT_PUBLIC_GA_ID}');
             </script>`,
            { html: true }
          );
        }
      }
    })
    // B. Edge Entity Keyword Reinforcement for Title & Meta Tags
    .on('title', {
      element(title) {
        if (url.pathname === '/') {
          if (isNri) {
            title.setInnerContent(
              'Shapoorji Pallonji Joyville Vyomora Hinjewadi (Joy 3.0) | Official NRI Investor Portal'
            );
          } else {
            title.setInnerContent(
              'Shapoorji Pallonji Joyville Vyomora Hinjewadi (Joy 3.0) | Official Website Pune'
            );
          }
        }
      }
    })
    // C. Inject Cloudflare Web Analytics Beacon
    .on('body', {
      element(body) {
        const analyticsBeacon = `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "c37033c129a04f96b75fc9b727658477"}'></script>`;
        body.append(analyticsBeacon, { html: true });
      }
    });

  // 5. Transform the response stream through HTMLRewriter
  const transformedResponse = rewriter.transform(response);

  // 6. Set Enterprise Edge Headers
  const headers = new Headers(transformedResponse.headers);
  headers.set('X-Edge-Engine', 'Cloudflare Pages HTMLRewriter v2.1');
  headers.set('X-Edge-Country', country);
  headers.set('X-Edge-City', city);
  headers.set('X-Edge-Bot', isSearchBot ? 'true' : 'false');
  headers.set('Cache-Control', 'public, max-age=0, s-maxage=3600, stale-while-revalidate=86400');

  return new Response(transformedResponse.body, {
    status: transformedResponse.status,
    statusText: transformedResponse.statusText,
    headers
  });
};
