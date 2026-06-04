'use client';

import { useState, useEffect } from 'react';
import {
  fetchBlogs,
  fetchCaseStudies,
  type Blog,
  type CaseStudy,
  type PaginationMeta,
  type BlogsResponse,
} from '@/lib/strapi';

// ─── useBlogs ─────────────────────────────────────────────────────────────────

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
  refetch: () => void;
}

export function useBlogsByPage(options: UseBlogsByPageOptions = {}): UseBlogsByPageResult {
  const { pageSize = 9, category } = options;

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<Blog[] | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetchBlogs(currentPage, pageSize, category)
      .then(result => {
        if (!cancelled) {
          setData(result.data);
          setPagination(result.meta.pagination);
        }
      })
      .catch(err => {
        if (!cancelled)
          setError(err instanceof Error ? err.message : 'Unknown error occurred');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => { cancelled = true; };
  }, [currentPage, pageSize, category, tick]);

  return {
    data,
    pagination,
    isLoading,
    error,
    currentPage,
    goToPage: setCurrentPage,
    refetch: () => setTick(t => t + 1),
  };
}

// ─── useCaseStudies ───────────────────────────────────────────────────────────

export interface UseCaseStudiesOptions {
  pageSize?: number;
  category?: string;
}

export interface UseCaseStudiesResult {
  data: CaseStudy[] | null;
  pagination: PaginationMeta | null;
  isLoading: boolean;
  error: string | null;
  currentPage: number;
  goToPage: (page: number) => void;
  refetch: () => void;
}

export function useCaseStudies(options: UseCaseStudiesOptions = {}): UseCaseStudiesResult {
  const { pageSize = 5, category } = options;

  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState<CaseStudy[] | null>(null);
  const [pagination, setPagination] = useState<PaginationMeta | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    setError(null);

    fetchCaseStudies(currentPage, pageSize, category)
      .then(result => {
        if (!cancelled) {
          setData(result.data);
          setPagination(result.meta.pagination);
        }
      })
      .catch(err => {
        if (!cancelled)
          setError(err instanceof Error ? err.message : 'Unknown error occurred');
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => { cancelled = true; };
  }, [currentPage, pageSize, category, tick]);

  return {
    data,
    pagination,
    isLoading,
    error,
    currentPage,
    goToPage: setCurrentPage,
    refetch: () => setTick(t => t + 1),
  };
}