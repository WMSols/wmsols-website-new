import ServicesPage from './servicesPage'
import { blogPosts, type BlogPost } from '@/data/blogs-newsroom'
import { fetchBlogs } from '@/lib/strapi'
import { mapBlogToPost } from './lib/mapBlog'

import { absolutePageMetadata } from '@/lib/seo'

export const metadata = absolutePageMetadata({
  title: "Insights & Blog | WMsols — Tech, Design & Digital Strategy",
  description:
    "Read the WMsols blog for expert insights on web development, mobile apps, AI automation, UI/UX design, and digital transformation. Practical knowledge for builders.",
  path: "/blogs-newsroom",
  keywords: [
    "software development blog",
    "tech insights",
    "AI automation articles",
    "digital strategy blog",
    "web development tips",
  ],
})

const LIST_PAGE_SIZE = 3

function localListing(): { featured: BlogPost | null; posts: BlogPost[]; pageCount: number } {
  return {
    featured: blogPosts.find((post) => post.isFeatured) ?? blogPosts[0] ?? null,
    posts: blogPosts.slice(0, LIST_PAGE_SIZE),
    pageCount: Math.max(1, Math.ceil(blogPosts.length / LIST_PAGE_SIZE)),
  }
}

export default async function Page() {
  let featured: BlogPost | null = null
  let posts: BlogPost[] = []
  let pageCount = 1
  let statusMessage: string | null = null

  try {
    const result = await fetchBlogs(1, 9)
    if (result.data?.length) {
      const mapped = result.data.map(mapBlogToPost)
      featured = mapped.find((post) => post.isFeatured) ?? mapped[0]
      posts = mapped.slice(0, LIST_PAGE_SIZE)
      pageCount = Math.max(1, Math.ceil(result.meta.pagination.total / LIST_PAGE_SIZE))
    }
  } catch {
    const fallback = localListing()
    featured = fallback.featured
    posts = fallback.posts
    pageCount = fallback.pageCount
    statusMessage = 'Unable to load fresh content — showing local articles.'
  }

  return (
    <ServicesPage
      featured={featured}
      posts={posts}
      pageCount={pageCount}
      statusMessage={statusMessage}
    />
  )
}
