import { useEffect, useState } from "react";
import { Blog, BlogsResponse } from "./strapi";

export interface UseLatestBlogsResult {
  data: Blog[] | null;
  isLoading: boolean;
  error: string | null;
}

export function useLatestBlogs(count: number = 3): UseLatestBlogsResult {
  const [data, setData] = useState<Blog[] | null>(null);
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
        url.searchParams.set('pagination[pageSize]', String(count));
        url.searchParams.set('pagination[page]', '1');
        url.searchParams.set('sort', 'date:desc'); // latest first

        const response = await fetch(url.toString(), {
          headers: {
            'Content-Type': 'application/json',
            ...(token ? { Authorization: `Bearer ${token}` } : {}),
          },
        });

        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);

        const result: BlogsResponse = await response.json();
        if (!cancelled) setData(result.data);
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
  }, [count]);

  return { data, isLoading, error };
}