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

  // 2. Edge Context Inspection (Geo-IP & User Agent)
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchBot = SEARCH_BOT_REGEX.test(userAgent);
  const country = (request.cf?.country as string) || 'IN';
  const city = (request.cf?.city as string) || 'Pune';
  const isNri = NRI_COUNTRIES.has(country);

  // 3. Ultra-Fast Edge Cache Lookup (<30ms TTFB) with Deterministic Cache Versioning
  const cache = typeof caches !== 'undefined' ? (caches as any).default : null;
  const noCache = request.headers.get('cache-control')?.includes('no-cache');
  const cacheKeyUrl = new URL(request.url);
  // Add deterministic cache bucket parameters so Bots and NRIs receive tailored edge variants
  cacheKeyUrl.searchParams.set('__edge_bot', isSearchBot ? '1' : '0');
  cacheKeyUrl.searchParams.set('__edge_nri', isNri ? country : '0');
  cacheKeyUrl.searchParams.set('__v', 'v11'); // Edge cache version invalidation bucket
  const cacheKey = new Request(cacheKeyUrl.toString(), {
    method: 'GET',
    headers: request.headers,
  });

  if (request.method === 'GET' && cache && !noCache) {
    try {
      const cachedResponse = await cache.match(cacheKey);
      if (cachedResponse) {
        const cachedHeaders = new Headers(cachedResponse.headers);
        cachedHeaders.set('X-Edge-Cache', 'HIT');
        return new Response(cachedResponse.body, {
          status: cachedResponse.status,
          statusText: cachedResponse.statusText,
          headers: cachedHeaders,
        });
      }
    } catch {
      // Fallback to fresh execution on cache error
    }
  }

  // 4. Fetch the response from the Pages static asset store
  const response = await context.next();

  // Only apply HTMLRewriter on successful HTML responses
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html') || response.status !== 200) {
    return response;
  }

  // 5. Cloudflare Edge HTMLRewriter Transformations
  const rewriter = new HTMLRewriter()
    // A. Head Directives: Favicon, Edge Location, and Googlebot directives
    .on('head', {
      element(head) {
        head.prepend(
          `<link rel="icon" href="/favicon.ico" sizes="any" />
           <link rel="icon" href="/icon.svg" type="image/svg+xml" />
           <link rel="apple-touch-icon" href="/icon.svg" />
           <meta name="cf-edge-processed" content="true" />
           <meta name="cf-edge-location" content="${country}" />`,
          { html: true }
        );

        if (isSearchBot) {
          head.append(
            `<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
             <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
            { html: true }
          );
        }

        // Global International Hreflang & Geolocation Directives
        const pageCanonical = url.pathname === '/'
          ? 'https://www.shapoorji-vyomora.com/'
          : `https://www.shapoorji-vyomora.com${url.pathname}`;

        head.append(
          `<link rel="alternate" hreflang="en-IN" href="${pageCanonical}" />
           <link rel="alternate" hreflang="en-US" href="${pageCanonical}" />
           <link rel="alternate" hreflang="en-AE" href="${pageCanonical}" />
           <link rel="alternate" hreflang="en-GB" href="${pageCanonical}" />
           <link rel="alternate" hreflang="en-SG" href="${pageCanonical}" />
           <link rel="alternate" hreflang="en-CA" href="${pageCanonical}" />
           <link rel="alternate" hreflang="en-AU" href="${pageCanonical}" />
           <link rel="alternate" hreflang="x-default" href="${pageCanonical}" />
           <meta name="geo.region" content="IN-MH" />
           <meta name="geo.placename" content="Hinjewadi, Pune" />
           <meta name="geo.position" content="18.5913;73.7389" />
           <meta name="ICBM" content="18.5913, 73.7389" />`,
          { html: true }
        );

        if (isNri) {
          head.append(
            `<meta name="nri-investor-desk" content="Active for ${country} - Direct Developer Channel & Remote Video Tours" />
             <meta property="og:locale:alternate" content="en_${country}" />`,
            { html: true }
          );
        }

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
    // B. Title Entity Optimization for Global #1 Ranking
    .on('title', {
      element(title) {
        if (url.pathname === '/') {
          if (isNri && !isSearchBot) {
            title.setInnerContent(
              'Shapoorji Vyomora Hinjewadi | Official NRI Investor Portal | Shapoorji Pallonji Pune'
            );
          } else {
            title.setInnerContent(
              'Shapoorji Vyomora Hinjewadi | Joyville Homes Pune | Shapoorji Pallonji Real Estate'
            );
          }
        }
      }
    });

  const transformedResponse = rewriter.transform(response);

  // 6. Set Enterprise Edge Headers
  const headers = new Headers(transformedResponse.headers);
  headers.set('X-Edge-Engine', 'Cloudflare Pages HTMLRewriter v2.2');
  headers.set('X-Edge-Country', country);
  headers.set('X-Edge-City', city);
  headers.set('X-Edge-Bot', isSearchBot ? 'true' : 'false');
  headers.set('X-Edge-Cache', 'MISS');
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'SAMEORIGIN');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
  headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
  headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), browsing-topics=()');
  headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  headers.set('Cache-Control', 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800');

  // Read transformed body to cache and return cleanly
  const bodyText = await transformedResponse.text();

  const finalResponse = new Response(bodyText, {
    status: transformedResponse.status,
    statusText: transformedResponse.statusText,
    headers,
  });

  // Store in Cloudflare Edge Cache for subsequent instantaneous requests (<30ms)
  if (request.method === 'GET' && cache) {
    try {
      const cacheResponseHeaders = new Headers(headers);
      cacheResponseHeaders.set('Cache-Control', 'public, max-age=86400');
      const responseToCache = new Response(bodyText, {
        status: finalResponse.status,
        statusText: finalResponse.statusText,
        headers: cacheResponseHeaders,
      });
      context.waitUntil(cache.put(cacheKey, responseToCache));
    } catch {
      // Cache put fails silently without disrupting response
    }
  }

  return finalResponse;
};
