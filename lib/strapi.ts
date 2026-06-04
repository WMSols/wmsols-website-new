import { useState, useEffect } from 'react';
import type { BlocksContent } from '@strapi/blocks-react-renderer';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface StrapiImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  focalPoint: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    medium?: StrapiImageFormat;
    large?: StrapiImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: unknown | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiCategory {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  description: BlocksContent;
  slug: string;
  author: string;
  readTime: string;
  date: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage;
  category: StrapiCategory;
}

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface BlogsResponse {
  data: Blog[];
  meta: {
    pagination: PaginationMeta;
  };
}

// ─── Hook options ─────────────────────────────────────────────────────────────

export interface UseBlogsOptions {
  page?: number;
  pageSize?: number;
}

// ─── Hook return type ─────────────────────────────────────────────────────────

export interface UseBlogsResult {
  data: Blog[] | null;
  pagination: PaginationMeta | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}

// ─── Fetcher ──────────────────────────────────────────────────────────────────

async function fetchBlogs(page: number, pageSize: number): Promise<BlogsResponse> {
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  const token = process.env.NEXT_PUBLIC_API_TOKEN ?? '';

  const url = new URL(`${base}/api/blogs`);
  url.searchParams.set('populate', '*');
  url.searchParams.set('pagination[page]', String(page));
  url.searchParams.set('pagination[pageSize]', String(pageSize));

  const response = await fetch(url.toString(), {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch blogs: ${response.status} ${response.statusText}`);
  }

  return response.json() as Promise<BlogsResponse>;
}

// ─── useBlogs hook ────────────────────────────────────────────────────────────

export function useBlogs(options: UseBlogsOptions = {}): UseBlogsResult {
  const { page = 1, pageSize = 9 } = options; // 9 fits 3x3 grid cleanly

  const [data, setData] = useState<Blog[] | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState<number>(0);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetchBlogs(page, pageSize);
        if (!cancelled) {
          setData(result.data);
          setPagination(result.meta.pagination);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error occurred');
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [page, pageSize, tick]);

  const refetch = () => setTick(t => t + 1);
  return { data, pagination, isLoading, error, refetch };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getImageUrl(image: Blog['image']): string {
  const FALLBACK = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200';
  if (!image?.url) return FALLBACK;
  if (image.url.startsWith('http')) return image.url;
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  if (!base) return image.url;
  return `${base}${image.url}`;
}

export function getExcerpt(description: BlocksContent): string {
  if (!Array.isArray(description) || description.length === 0) return '';

  for (const block of description) {
    if (block.type === 'paragraph' && Array.isArray(block.children)) {
      const text = block.children
        .map((c) => ('text' in c ? (c.text as string) : ''))
        .join(' ')
        .trim();
      if (text) return text;
    }
  }

  return '';
}

// ─── Server-side fetcher ──────────────────────────────────────────────────────

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
// ─── Hook options ─────────────────────────────────────────────────────────────

export interface UseBlogsByPageOptions {
  pageSize?: number;
  category?: string;
}

export interface UseBlogsByPageResult {
  data: Blog[] | null;
  pagination: PaginationMeta | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  goToPage: (page: number) => void;
}

export function useBlogsByPage(options: UseBlogsByPageOptions = {}): UseBlogsByPageResult {
  const { pageSize = 9, category } = options;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<Blog[] | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
        const token = process.env.NEXT_PUBLIC_API_TOKEN ?? '';

        const url = new URL(`${base}/api/blogs`);
        url.searchParams.set('populate', '*');
        url.searchParams.set('pagination[page]', String(currentPage));
        url.searchParams.set('pagination[pageSize]', String(pageSize));

        // Filter by category slug on the backend if provided
        if (category && category !== 'All') {
          url.searchParams.set('filters[category][name][$eqi]', category);
        }

        const response = await fetch(url.toString(), {
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

        const result: BlogsResponse = await response.json();

        if (!cancelled) {
          setData(result.data);
          setPagination(result.meta.pagination);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error occurred');
        }
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, [currentPage, pageSize, category]);

  const goToPage = (page: number) => setCurrentPage(page);

  return { data, pagination, isLoading, error, currentPage, goToPage };
}