import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.wmsols.com';

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/case-studies`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/careers`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/services/web-development`, lastModified: new Date() },
    { url: `${baseUrl}/services/mobile-development`, lastModified: new Date() },
    { url: `${baseUrl}/services/ai-automation`, lastModified: new Date() },
    { url: `${baseUrl}/services/ui-ux-design`, lastModified: new Date() },
    { url: `${baseUrl}/services/database-architecture`, lastModified: new Date() },
    { url: `${baseUrl}/services/digital-strategy`, lastModified: new Date() },
    { url: `${baseUrl}/services/data-analytics`, lastModified: new Date() },
  ]
}