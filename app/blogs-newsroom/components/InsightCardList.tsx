'use client';
import React, { useEffect, useState } from 'react';
import InsightCard from '@/components/common/InsightCard';
import { BlogPost } from '@/data/blogs-newsroom';
import { getImageUrl, getExcerpt, type Blog, fetchBlogCategories } from '@/lib/strapi';
import { useBlogsByPage } from '@/lib/strapi-hooks';

const DEFAULT_AUTHOR_AVATAR = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150';
const FALLBACK_BLOG_CATEGORIES = ['All', 'Insights', 'Design', 'News'];


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

interface InsightCardListProps {
  /** Fallback posts shown while backend loads or on error */
  posts: BlogPost[];
}

const InsightCardList: React.FC<InsightCardListProps> = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [categories, setCategories] = useState<string[]>(FALLBACK_BLOG_CATEGORIES);

useEffect(() => {
  fetchBlogCategories()
    .then((names) => {
      if (names.length > 0) setCategories(['All', ...names]);
    })
    .catch(() => {}); // silently keep fallback
}, []);


  const { data, pagination, isLoading, error, currentPage, goToPage } = useBlogsByPage({
    pageSize: 3,
    category: activeCategory,
  });

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    goToPage(1); // reset to page 1 on filter change
  };

  // Use live data if available, otherwise fall back to prop posts
  const livePosts: BlogPost[] = data ? data.map(mapBlogToPost) : [];
  const displayPosts = livePosts.length > 0 ? livePosts : posts;
  const totalPages = pagination?.pageCount ?? Math.ceil(posts.length / 3);

  return (
    <div className="px-4 md:px-8 sm:px-6 py-10">
      {/* Category Tabs */}
      <div className="flex border-b border-gray-200 mb-10 overflow-x-auto scrollbar-none">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`py-3 px-6 text-sm font-medium border-b-2 whitespace-nowrap transition-colors -mb-0.5 ${
              activeCategory === category
                ? 'border-blue-500 text-blue-600 font-semibold'
                : 'border-transparent text-gray-500 hover:text-gray-900'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-pulse">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="rounded-xl bg-gray-100 h-72 w-full" />
          ))}
        </div>
      )}

      {/* Error banner — still shows posts from fallback */}
      {!isLoading && error && (
        <p className="text-center text-sm text-red-400 mb-6">
          Could not load latest posts — showing cached content.
        </p>
      )}

      {/* Grid */}
      {!isLoading && displayPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPosts.map((post) => (
            <InsightCard
              key={post.id}
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
      )}

      {/* Empty state */}
      {!isLoading && displayPosts.length === 0 && (
        <div className="text-center py-20 text-gray-400 text-sm">
          No articles found matching this category.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && !isLoading && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            &larr; Previous
          </button>

          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => goToPage(pageNumber)}
              className={`w-9 h-9 flex items-center justify-center text-sm rounded-md font-medium transition-colors ${
                currentPage === pageNumber
                  ? 'bg-blue-500 text-white'
                  : 'border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </div>
  );
};

export default InsightCardList;