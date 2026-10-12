import type { MetadataRoute } from 'next'
import { servicesDetailedData } from '@/data/services'
import { fetchBlogs, fetchCaseStudies } from '@/lib/strapi'

const baseUrl = 'https://www.wmsols.com'

const staticRoutes = [
  '/',
  '/about',
  '/careers',
  '/contact',
  '/services',
  '/case-studies',
  '/blogs-newsroom',
  '/odoo',
  '/odoo/development',
  '/odoo/customization',
  '/odoo/integration',
  '/odoo/support-maintenance',
  '/odoo/migration',
  '/odoo/training',
]

async function safeFetchSlugs(
  fetcher: () => Promise<{ data: { slug: string; updatedAt?: string }[] }>
): Promise<{ slug: string; lastModified?: Date }[]> {
  try {
    const res = await fetcher()
    return (res.data ?? []).map((item) => ({
      slug: item.slug,
      lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,
    }))
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const [caseStudies, blogs] = await Promise.all([
    safeFetchSlugs(() => fetchCaseStudies(1, 100)),
    safeFetchSlugs(() => fetchBlogs(1, 100)),
  ])

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path === '/' ? '/' : path}`,
    lastModified: now,
  }))

  const serviceEntries: MetadataRoute.Sitemap = servicesDetailedData.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: now,
  }))

  const caseStudyEntries: MetadataRoute.Sitemap = caseStudies.map(({ slug, lastModified }) => ({
    url: `${baseUrl}/case-studies/${slug}`,
    lastModified: lastModified ?? now,
  }))

  const blogEntries: MetadataRoute.Sitemap = blogs.map(({ slug, lastModified }) => ({
    url: `${baseUrl}/blogs-newsroom/${slug}`,
    lastModified: lastModified ?? now,
  }))

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...blogEntries]
}
