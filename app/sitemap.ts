import type { MetadataRoute } from 'next'
import { servicesDetailedData } from '@/data/services'
import { fetchBlogs, fetchCaseStudies } from '@/lib/strapi'
import { fetchJobs } from '@/lib/strapi-careers'

const baseUrl = 'https://www.wmsols.com'
const pageSize = 100

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

type SlugItem = { slug: string; updatedAt?: string }

async function collectSlugs(
  fetchPage: (page: number) => Promise<{ data: SlugItem[]; meta?: { pagination?: { pageCount?: number } } }>
): Promise<{ slug: string; lastModified?: Date }[]> {
  try {
    const first = await fetchPage(1)
    const items = [...(first.data ?? [])]
    const pageCount = first.meta?.pagination?.pageCount ?? 1

    for (let page = 2; page <= pageCount; page += 1) {
      const next = await fetchPage(page)
      const batch = next.data ?? []
      items.push(...batch)
      if (batch.length < pageSize) break
    }

    return items
      .filter((item) => item.slug)
      .map((item) => ({
        slug: item.slug,
        lastModified: item.updatedAt ? new Date(item.updatedAt) : undefined,
      }))
  } catch {
    return []
  }
}

function entry(url: string, lastModified?: Date): MetadataRoute.Sitemap[number] {
  return lastModified ? { url, lastModified } : { url }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [caseStudies, blogs, jobs] = await Promise.all([
    collectSlugs((page) => fetchCaseStudies(page, pageSize)),
    collectSlugs((page) => fetchBlogs(page, pageSize)),
    collectSlugs((page) => fetchJobs(pageSize, undefined, page)),
  ])

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) =>
    entry(`${baseUrl}${path === '/' ? '/' : path}`)
  )

  const serviceEntries: MetadataRoute.Sitemap = servicesDetailedData.map((service) =>
    entry(`${baseUrl}/services/${service.id}`)
  )

  const caseStudyEntries = caseStudies.map(({ slug, lastModified }) =>
    entry(`${baseUrl}/case-studies/${slug}`, lastModified)
  )

  const blogEntries = blogs.map(({ slug, lastModified }) =>
    entry(`${baseUrl}/blogs-newsroom/${slug}`, lastModified)
  )

  const jobEntries = jobs.map(({ slug, lastModified }) =>
    entry(`${baseUrl}/careers/${slug}`, lastModified)
  )

  return [...staticEntries, ...serviceEntries, ...caseStudyEntries, ...blogEntries, ...jobEntries]
}
