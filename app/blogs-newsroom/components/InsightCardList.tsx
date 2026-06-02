'use client';
import React, { useState, useMemo } from 'react';
import InsightCard from '@/components/common/InsightCard';
import { BlogPost } from '@/data/blogs-newsroom';

interface InsightCardListProps {
  posts: BlogPost[];
}

const POSTS_PER_PAGE = 8;
const CATEGORIES = ["All", "Insights", "Design", "News"];

const InsightCardList: React.FC<InsightCardListProps> = ({ posts }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    setCurrentPage(1); // Reset page whenever filter changes
    if (activeCategory === "All") return posts;
    return posts.filter(post => post.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory, posts]);

  // Paginate filtered posts
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  return (
    <div className=" px-4 md:px-8 sm:px-6 py-10 ">
      {/* Category Tabs */}
      <div className="flex border-b border-gray-200 mb-10 overflow-x-auto scrollbar-none">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
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

      {/* Grid Display */}
      {paginatedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedPosts.map((post) => (
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
      ) : (
        <div className="text-center py-20 text-gray-400 text-sm">
          No articles found matching this category.
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-16">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:hover:bg-transparent"
          >
            &larr; Previous
          </button>

          {Array.from({ length: totalPages }, (_, idx) => idx + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
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
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
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