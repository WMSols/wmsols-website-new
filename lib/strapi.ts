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

export interface PaginationMeta {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

// ─── Blog Types ───────────────────────────────────────────────────────────────

export interface Blog {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  author: string;
  readTime: string;
  date: string;
  description: unknown; // rich text blocks
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage;
  category: StrapiCategory;
}

export interface BlogsResponse {
  data: Blog[];
  meta: { pagination: PaginationMeta };
}

// ─── Case Study Types ─────────────────────────────────────────────────────────

export interface CaseStudy {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  overview: string;
  results: string | null;
  client: string;
  solutionItems?: string;
  chellenge: string;
  techStack: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: StrapiImage[];
  category: StrapiCategory;
}

export interface CaseStudiesResponse {
  data: CaseStudy[];
  meta: { pagination: PaginationMeta };
}

// ─── Shared internals ─────────────────────────────────────────────────────────

export function buildHeaders(): HeadersInit {
  const token = process.env.NEXT_PUBLIC_API_TOKEN ?? '';
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

export function strapiUrl(path: string): string {
  return (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '') + path;
}

// ─── Blog fetchers ────────────────────────────────────────────────────────────

export async function fetchBlogs(
  page: number,
  pageSize: number,
  category?: string
): Promise<BlogsResponse> {
  const url = new URL(strapiUrl('/api/blogs'));
  url.searchParams.set('populate', '*');
  url.searchParams.set('pagination[page]', String(page));
  url.searchParams.set('pagination[pageSize]', String(pageSize));
  if (category && category !== 'All') {
    url.searchParams.set('filters[category][name][$eqi]', category);
  }

  const res = await fetch(url.toString(), {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status} ${res.statusText}`);
  return res.json() as Promise<BlogsResponse>;
}

export async function fetchBlogBySlug(slug: string): Promise<Blog | null> {
  const url = new URL(strapiUrl('/api/blogs'));
  url.searchParams.set('populate', '*');
  url.searchParams.set('filters[slug][$eq]', slug);

  const res = await fetch(url.toString(), {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;

  const json: BlogsResponse = await res.json();
  return json.data?.[0] ?? null;
}

// ─── Case Study fetchers ──────────────────────────────────────────────────────

export async function fetchCaseStudies(
  page: number,
  pageSize: number,
  category?: string
): Promise<CaseStudiesResponse> {
  const url = new URL(strapiUrl('/api/case-studies'));
  url.searchParams.set('populate', '*');
  url.searchParams.set('pagination[page]', String(page));
  url.searchParams.set('pagination[pageSize]', String(pageSize));
  if (category && category !== 'All') {
    url.searchParams.set('filters[category][name][$eqi]', category);
  }

  const res = await fetch(url.toString(), {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Failed to fetch case studies: ${res.status} ${res.statusText}`);
  return res.json() as Promise<CaseStudiesResponse>;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const url = new URL(strapiUrl('/api/case-studies'));
  url.searchParams.set('populate', '*');
  url.searchParams.set('filters[slug][$eq]', slug);

  const res = await fetch(url.toString(), {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });
  if (!res.ok) return null;

  const json: CaseStudiesResponse = await res.json();
  return json.data?.[0] ?? null;
}

// ─── Helpers (no React — safe anywhere) ──────────────────────────────────────

export function getImageUrl(image: Blog['image']): string {
  const FALLBACK = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200';
  if (!image?.url) return FALLBACK;
  if (image.url.startsWith('http')) return image.url;
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  return base ? `${base}${image.url}` : image.url;
}

export function getCaseStudyImageUrl(images: CaseStudy['image']): string {
  const FALLBACK = 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200';
  const image = images?.[0];
  if (!image?.url) return FALLBACK;
  if (image.url.startsWith('http')) return image.url;
  const base = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/$/, '');
  return base ? `${base}${image.url}` : image.url;
}

export function parseCaseStudyTechStack(techStack: string): string[] {
  return techStack
    .split(',')
    .map(s => s.trim().replace(/^"|"$/g, ''))
    .filter(Boolean);
}

export function getExcerpt(description: unknown): string {
  if (!Array.isArray(description) || description.length === 0) return '';
  for (const block of description) {
    if (block.type === 'paragraph' && Array.isArray(block.children)) {
      const text = block.children
        .map((c: unknown) => (typeof c === 'object' && c !== null && 'text' in c ? (c as { text: string }).text : ''))
        .join(' ')
        .trim();
      if (text) return text;
    }
  }
  return '';
}
