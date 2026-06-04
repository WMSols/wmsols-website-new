// ─── Job Types ───────────────────────────────────────────────────────────────

import { buildHeaders, strapiUrl } from "./strapi";

export interface Job {
  id: number;
  documentId: string;
  title: string;
  slug: string; // <-- Added slug
  overview: unknown; 
  responsiblities: unknown; 
  requirements: unknown; 
  skills: string; 
  benefits: unknown; 
  extras: string;
  domain: string;
  type: string;
  location: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface JobsResponse {
  data: Job[];
  meta: { pagination: { page: number; pageSize: number; pageCount: number; total: number } };
}

// ─── Job fetchers ────────────────────────────────────────────────────────────

export async function fetchJobs(
  pageSize: number,
  filters?: {
    searchTerm?: string;
    domain?: string;
    location?: string;
    type?: string;
  }
): Promise<JobsResponse> {
  const url = new URL(strapiUrl('/api/job-posts'));
  // Removed url.searchParams.set('populate', '*');
  url.searchParams.set('pagination[page]', '1');
  url.searchParams.set('pagination[pageSize]', String(pageSize));

  if (filters) {
    if (filters.domain && filters.domain !== 'All') {
      url.searchParams.set('filters[domain][$eqi]', filters.domain);
    }
    if (filters.location && filters.location !== 'All') {
      url.searchParams.set('filters[location][$eqi]', filters.location);
    }
    if (filters.type && filters.type !== 'All') {
      url.searchParams.set('filters[type][$eqi]', filters.type);
    }
    if (filters.searchTerm) {
      url.searchParams.set('filters[title][$contains]', filters.searchTerm);
    }
  }

  const res = await fetch(url.toString(), {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });
  
  if (!res.ok) throw new Error(`Failed to fetch jobs: ${res.status} ${res.statusText}`);
  return res.json() as Promise<JobsResponse>;
}

export async function getJobBySlug(slug: string): Promise<Job | null> {
  const url = new URL(strapiUrl('/api/job-posts'));
  // Removed url.searchParams.set('populate', '*');
  
  // Filter by the new slug field instead of documentId
  url.searchParams.set('filters[slug][$eq]', slug);

  const res = await fetch(url.toString(), {
    headers: buildHeaders(),
    next: { revalidate: 60 },
  });
  
  if (!res.ok) return null;

  const json: JobsResponse = await res.json();
  return json.data?.[0] ?? null;
}

// Helper to parse Strapi Rich Text arrays into simple string arrays for lists
export function parseRichTextBlocks(blocks: unknown): string[] {
  if (!Array.isArray(blocks)) return [];
  return blocks
    .map((block) => {
      if (block.type === 'paragraph' && Array.isArray(block.children)) {
        return block.children
          .map((c: any) => (typeof c === 'object' && c !== null && 'text' in c ? c.text : ''))
          .join('')
          .trim();
      }
      return '';
    })
    .filter(Boolean); // Remove empty strings
}