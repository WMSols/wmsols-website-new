"use client";

import React, { useMemo } from 'react';
import { GradientLight } from '@/components/common/GradientLight';
import FeaturedPost from './components/FeaturedPost';
import InsightCardList from './components/InsightCardList';
import { blogPosts, type BlogPost } from '@/data/blogs-newsroom';
import { getImageUrl, getExcerpt, type Blog } from '@/lib/strapi';
import { useBlogsByPage } from '@/lib/strapi-hooks';
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp';

const DEFAULT_AUTHOR_AVATAR =
  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150';

function mapBlogToPost(blog: Blog): BlogPost {
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
  };
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function BlogSkeleton() {
  return (
    <div className="animate-pulse px-6 py-10 max-w-6xl mx-auto">
      <div className="rounded-2xl bg-white/5 h-80 w-full mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-xl bg-white/5 h-56 w-full" />
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

const Page = () => {
  const { data, isLoading, error } = useBlogsByPage();

  const posts = useMemo<BlogPost[]>(() => {
    if (data && data.length > 0) return data.map(mapBlogToPost);
    return blogPosts;
  }, [data]);

  const featured = posts.find(p => p.isFeatured);
  const remaining = posts.filter(p => p.id !== featured?.id);

  const statusMessage = isLoading
    ? 'Loading latest articles…'
    : error
    ? 'Unable to load fresh content — showing local articles.'
    : data?.length
    ? null
    : 'Showing local articles while content loads.';

  return (
    <div>
      {/* ── Hero ── */}
      <div
        className="h-screen pt-14 flex items-center justify-center overflow-hidden relative"
        style={{ background: 'linear-gradient(180deg, #030015 0%, #0C0438 100%)' }}
      >
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(#e5e7eb_1px,transparent_1px)',
            backgroundSize: '16px 16px',
            backgroundPosition: 'center center',
          }}
        />
        <GradientLight size={400} top="-10px" left="-100px" color="rgba(97, 4, 197, 29%)" />
        <GradientLight size={300} top="400px" right="-100px" color="rgba(65, 273, 111, 29%)" />

        <StaggerFadeUp className="flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2">
          <h1 className="max-w-5xl text-5xl text-center sm:text-6xl md:text-7xl font-bold text-white">
            Insights from the WMsols Team
          </h1>
          <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
            Practical thinking on technology, product design, AI, and digital strategy written
            by the engineers and strategists who build it every day.
          </p>
        </StaggerFadeUp>
      </div>

      {/* ── Status banner ── */}
      {statusMessage && (
        <p className="mt-4 text-sm text-center text-slate-300">{statusMessage}</p>
      )}

      {/* ── Content ── */}
      {isLoading ? (
        <BlogSkeleton />
      ) : (
        <>
          {featured && <FeaturedPost post={featured} />}
          <InsightCardList posts={remaining} />
        </>
      )}
    </div>
  );
};

export default Page;