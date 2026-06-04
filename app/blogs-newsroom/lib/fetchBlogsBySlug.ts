import type { Blog, BlogsResponse } from '@/lib/strapi';

export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  const token = process.env.NEXT_PUBLIC_API_TOKEN ?? '';

  const url = new URL(`${base}/api/blogs`);
  url.searchParams.set('populate', '*');
  url.searchParams.set('filters[slug][$eq]', slug);

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) return null;

  const json: BlogsResponse = await response.json();
  return json.data?.[0] ?? null;
}

export function getImageUrl(image: Blog['image']): string {
  const FALLBACK = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200';
  if (!image?.url) return FALLBACK;
  if (image.url.startsWith('http')) return image.url;
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  if (!base) return image.url;
  return `${base}${image.url}`;
}