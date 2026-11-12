import { MetadataRoute } from 'next'

const allowAll = { allow: '/' as const }

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', ...allowAll },
      { userAgent: 'GPTBot', ...allowAll },
      { userAgent: 'PerplexityBot', ...allowAll },
      { userAgent: 'ClaudeBot', ...allowAll },
      { userAgent: 'Google-Extended', ...allowAll },
    ],
    sitemap: 'https://www.wmsols.com/sitemap.xml',
  }
}
