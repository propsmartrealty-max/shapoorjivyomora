import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.shapoorji-vyomora.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Google-InspectionTool',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Storebot-Google',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-News',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'GoogleOther',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: [
          'OAI-SearchBot',
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'Applebot',
          'Applebot-Extended',
          'Meta-ExternalAgent',
          'FacebookBot',
          'cohere-ai',
          'Bytespider'
        ],
        allow: '/',
        disallow: ['/api/'],
      }
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/feed.xml`,
      `${baseUrl}/google-merchant-feed.xml`
    ],
    host: baseUrl,
  };
}
