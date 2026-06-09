'use client';
import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  fetchCaseStudyCategories,
  getCaseStudyImageUrl,
  parseCaseStudyTechStack,
  type CaseStudy,
} from '@/lib/strapi';

// Static dummy data shown immediately while the first fetch is in-flight
import { caseStudies as dummyProjects } from '@/data/case-studies';
import { useCaseStudies } from '@/lib/strapi-hooks';

const POSTS_PER_PAGE = 10;
const FALLBACK_CASE_STUDY_CATEGORIES = ["All", "AI", "Web Dev", "Mobile", "Strategy", "Data", "Analytics"];

const ProjectListClient: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(FALLBACK_CASE_STUDY_CATEGORIES);

useEffect(() => {
  fetchCaseStudyCategories()
    .then((names) => {
      if (names.length > 0) setCategories(['All', ...names]);
    })
    .catch(() => {}); // silently keep fallback
}, []);

  const { data, pagination, isLoading, error, currentPage, goToPage } = useCaseStudies({
    pageSize: POSTS_PER_PAGE,
    category: activeCategory,
  });

  // Reset to page 1 whenever the category filter changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    goToPage(1);
  };

  // While loading, prefer stale API data if available; otherwise fall back to dummy data
  const displayProjects: CaseStudy[] | typeof dummyProjects =
    data ??
    (isLoading
      ? dummyProjects // show dummy data only on the very first load
      : []);

  const totalPages = pagination?.pageCount ?? 1;

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-12 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-12">
        Explore Our Work
      </h1>

      {/* Pill Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => handleCategoryChange(category)}
            aria-label={`Filter projects by ${category}`}
            aria-pressed={activeCategory === category}
            className={`py-2 px-6 text-sm rounded-full border transition-all ${
              activeCategory === category
                ? 'bg-blue-500 border-blue-500 text-white shadow-sm'
                : 'bg-white border-gray-300 text-gray-600 hover:border-gray-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Error Banner — non-blocking, shown alongside stale/dummy data */}
      {error && (
        <div className="mb-8 px-4 py-3 rounded-lg bg-red-50 border border-red-200 text-red-500 text-sm">
          Sorry the server did not respond: {error}
        </div>
      )}

      {/* Grid Display */}
      <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
        {displayProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProjects.map((project) => {
              // Handle both API CaseStudy shape and local dummy shape gracefully
              const isApiData = 'image' in project && Array.isArray((project as CaseStudy).image);

              const imageUrl = isApiData
                ? getCaseStudyImageUrl((project as CaseStudy).image)
                : (project as typeof dummyProjects[number]).imageUrl;

              const techStack = isApiData
                ? parseCaseStudyTechStack((project as CaseStudy).techStack).join(', ')
                : (project as typeof dummyProjects[number]).techStackSummary;

              const categoryName = isApiData
                ? (project as CaseStudy).category.name
                : (project as typeof dummyProjects[number]).category;

              return (
                <ProjectCard
                  key={project.id}
                  category={categoryName}
                  title={project.title}
                  description={
                    isApiData
                      ? (project as CaseStudy).overview
                      : (project as typeof dummyProjects[number]).description
                  }
                  imageUrl={imageUrl}
                  slug={project.slug}
                  techStack={techStack}
                />
              );
            })}
          </div>
        ) : (
          !isLoading && (
            <div className="text-center py-20 text-gray-400 text-sm">
              No projects found in this category.
            </div>
          )
        )}
      </div>

      {/* Skeleton shimmer shown only on first load (no data yet) */}
      {isLoading && !data && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
            <div key={i} className="rounded-xl bg-gray-100 animate-pulse h-64" />
          ))}
        </div>
      )}

      {/* Pagination — driven entirely by API meta */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-4 mt-16 text-sm text-gray-500">
          <span>Page {currentPage} of {totalPages}</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goToPage(Math.max(currentPage - 1, 1))}
              disabled={currentPage === 1 || isLoading}
              aria-label="Go to previous page"
              className="p-1 rounded-full bg-gray-200 text-white disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-medium text-gray-900">{currentPage}</span>
            <button
              type="button"
              onClick={() => goToPage(Math.min(currentPage + 1, totalPages))}
              disabled={currentPage === totalPages || isLoading}
              aria-label="Go to next page"
              className="p-1 rounded-full bg-[#060053] text-white disabled:opacity-50 hover:bg-blue-900 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectListClient;