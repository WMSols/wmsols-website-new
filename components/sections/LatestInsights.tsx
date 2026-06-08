'use client';

import React from 'react';
import InsightCard from '@/components/common/InsightCard';
import { insightsData } from '@/data/homepage';
import { getImageUrl, getExcerpt, type Blog } from '@/lib/strapi';
import { Skeleton } from '@/components/ui/skeleton';
import { useLatestBlogs } from '@/lib/strapi-latestBlogs';

const DEFAULT_AUTHOR_AVATAR =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150';

function mapBlogToInsightCard(blog: Blog) {
  return {
    id: String(blog.id),
    slug: blog.slug,
    title: blog.title,
    excerpt: getExcerpt(blog.description) || blog.title,
    category: blog.category?.name ?? 'News',
    date: blog.date,
    imageUrl: getImageUrl(blog.image),
    readTime: blog.readTime,
  };
}

function InsightCardSkeleton() {
  return (
    <div className="flex flex-col w-full bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <Skeleton className="w-full h-64" />
      <div className="p-6 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-3 rounded-full" />
          <Skeleton className="h-3 w-20" />
        </div>
        <Skeleton className="h-6 w-full" />
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-full mt-1" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-16 mt-2" />
      </div>
    </div>
  );
}

const LatestInsights: React.FC = () => {
  const { data, isLoading, error } = useLatestBlogs(3);

  const posts = React.useMemo(() => {
    if (data && data.length > 0) return data.map(mapBlogToInsightCard);
    return insightsData; // fallback to dummy data on error or empty
  }, [data]);

  return (
    <section className="w-full bg-white min-h-250 py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Insights from the WMsols Team
            </h2>
            <p className="text-lg text-gray-400">
              Stay updated with our latest thoughts on technology, design, and digital strategy.
            </p>
          </div>
          <a
            href="/blogs-newsroom"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gray-300 bg-[#3b82f6] font-medium text-sm  text-white hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            View All Posts
          </a>
        </div>

        {/* Error banner — silent fallback, just a subtle note */}
        {error && !isLoading && (
          <p className="text-xs text-gray-400 text-center mb-6">
            Showing cached articles — live feed unavailable.
          </p>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <InsightCardSkeleton key={i} />
              ))
            : posts.map((post) => (
                <InsightCard
                  key={post.slug}
                  category={post.category}
                  date={post.date}
                  title={post.title}
                  excerpt={post.excerpt}
                  imageUrl={post.imageUrl}
                  slug={post.slug}
                  readTime={post.readTime}
                />
              ))}
        </div>

      </div>
    </section>
  );
};

export default LatestInsights;