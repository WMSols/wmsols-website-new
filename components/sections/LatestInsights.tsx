import React from 'react';
import Link from 'next/link';
import InsightCard from '@/components/common/InsightCard';
import { insightsData } from '@/data/homepage';
import { fetchBlogs, getImageUrl, getExcerpt, type Blog } from '@/lib/strapi';

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

export default async function LatestInsights() {
  let posts = insightsData;
  let error = false;

  try {
    const result = await fetchBlogs(1, 3);
    if (result.data?.length) {
      posts = result.data.map(mapBlogToInsightCard);
    }
  } catch {
    error = true;
  }

  return (
    <section className="w-full bg-white min-h-250 py-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4 tracking-tight">
              Insights from the WMsols Team
            </h2>
            <p className="text-lg text-gray-400">
              Stay updated with our latest thoughts on technology, design, and digital strategy.
            </p>
          </div>
          <Link
            href="/blogs-newsroom"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gray-300 bg-[#3b82f6] font-medium text-sm  text-white hover:bg-blue-600 transition-colors whitespace-nowrap"
          >
            View All Posts
          </Link>
        </div>

        {error && (
          <p className="text-xs text-gray-400 text-center mb-6">
            Showing cached articles — live feed unavailable.
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {posts.map((post) => (
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
}
