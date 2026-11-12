import type { BlogPost } from '@/data/blogs-newsroom'
import { getExcerpt, getImageUrl, type Blog } from '@/lib/strapi'

const DEFAULT_AUTHOR_AVATAR =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150'

export function mapBlogToPost(blog: Blog): BlogPost {
  return {
    id: String(blog.id),
    slug: blog.slug,
    title: blog.title,
    excerpt: getExcerpt(blog.description) || blog.title,
    content: getExcerpt(blog.description) || blog.title,
    category: blog.category?.name ?? 'News',
    date: blog.date,
    imageUrl: getImageUrl(blog.image),
    isFeatured: blog.isFeatured,
    readTime: blog.readTime,
    author: {
      name: blog.author || 'WMsols Team',
      avatarUrl: DEFAULT_AUTHOR_AVATAR,
    },
  }
}
