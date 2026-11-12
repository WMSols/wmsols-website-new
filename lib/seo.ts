import type { Metadata } from 'next'

export const SITE_URL = 'https://www.wmsols.com'

export function absolutePageMetadata(options: {
  title: string
  description: string
  path: string
  keywords?: string[]
}): Metadata {
  const title = options.title.replace(/WMSols/g, 'WMsols')
  const url = options.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${options.path}`

  return {
    title: { absolute: title },
    description: options.description,
    ...(options.keywords ? { keywords: options.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      title,
      description: options.description,
      url,
      type: 'website',
    },
  }
}

export function clipText(text: string, max = 160): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, max - 1).trimEnd()}…`
}

export function pageMetadata(options: {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
}): Metadata {
  const url = `${SITE_URL}${options.path}`
  const title = options.title.trim()
  const description = options.description.trim()
  const image = options.image?.startsWith('http') ? options.image : undefined

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: options.description,
      url,
      type: options.type ?? 'website',
      ...(image ? { images: [{ url: image, alt: options.title }] } : {}),
    },
  }
}
