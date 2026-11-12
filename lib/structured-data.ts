import { contactOffices, footerSocialLinks } from '@/data/navigation'
import { SITE_URL } from '@/lib/seo'

const EMAIL = 'info@wmsols.com'
const PHONES = ['+1-505-386-1888', '+92-309-0049555']

function officeAddress(label: string, address: string) {
  if (label === 'US Office') {
    return {
      '@type': 'PostalAddress',
      addressLocality: 'San Francisco',
      addressRegion: 'California',
      addressCountry: 'US',
    }
  }

  if (label === 'Karachi') {
    return {
      '@type': 'PostalAddress',
      streetAddress: '27-C, Khayaban-e-Sehar, DHA',
      postalCode: '75500',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    }
  }

  return {
    '@type': 'PostalAddress',
    streetAddress: address.replace(/,?\s*44000$/, ''),
    postalCode: '44000',
    addressLocality: 'Islamabad',
    addressCountry: 'PK',
  }
}

export function organizationGraph() {
  const sameAs = footerSocialLinks
    .map((link) => link.href)
    .filter((href) => href.startsWith('http'))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'WMsols',
        url: SITE_URL,
        email: EMAIL,
        telephone: PHONES,
        sameAs,
      },
      {
        '@type': 'WebSite',
        name: 'WMsols',
        url: SITE_URL,
      },
      ...contactOffices.map((office) => ({
        '@type': 'LocalBusiness',
        name: `WMsols ${office.label}`,
        url: `${SITE_URL}/contact`,
        email: EMAIL,
        telephone: PHONES,
        address: officeAddress(office.label, office.address),
        parentOrganization: {
          '@type': 'Organization',
          name: 'WMsols',
          url: SITE_URL,
        },
      })),
    ],
  }
}

export function breadcrumbList(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${item.path}`,
    })),
  }
}

export function faqPage(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function blogPosting(post: {
  title: string
  description: string
  path: string
  date?: string
  author?: string
  image?: string
}) {
  const published = post.date && !Number.isNaN(Date.parse(post.date))
    ? new Date(post.date).toISOString()
    : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}${post.path}`,
    ...(published ? { datePublished: published } : {}),
    ...(post.image?.startsWith('http') ? { image: post.image } : {}),
    author: {
      '@type': 'Person',
      name: post.author || 'WMsols Team',
    },
    publisher: {
      '@type': 'Organization',
      name: 'WMsols',
      url: SITE_URL,
    },
  }
}

export function jobPosting(job: {
  title: string
  description: string
  path: string
  datePosted?: string
  employmentType?: string
  location?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: job.description,
    url: `${SITE_URL}${job.path}`,
    ...(job.datePosted ? { datePosted: job.datePosted } : {}),
    ...(job.employmentType ? { employmentType: job.employmentType } : {}),
    ...(job.location
      ? {
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: job.location,
            },
          },
        }
      : {}),
    hiringOrganization: {
      '@type': 'Organization',
      name: 'WMsols',
      sameAs: SITE_URL,
    },
  }
}
