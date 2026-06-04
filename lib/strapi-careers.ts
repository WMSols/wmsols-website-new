// ─── Job Types ───────────────────────────────────────────────────────────────

import { buildHeaders, PaginationMeta, strapiUrl } from "./strapi";

export interface Job {
  id: number;
  documentId: string;
  title: string;
  overview: unknown; // rich text blocks
  responsiblities: unknown; // rich text blocks (note: keeping exact spelling from JSON)
  requirements: unknown; // rich text blocks
  skills: string; // Comma-separated string
  benefits: unknown; // rich text blocks
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
  meta: { pagination: PaginationMeta };
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
  url.searchParams.set('populate', '*');
  // Always fetch from page 1, but increase the size to handle the "Load More" logic 
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
      // Using $contains for partial text matching on the title
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