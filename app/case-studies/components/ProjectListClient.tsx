'use client';
import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard';
import { CaseStudy } from '@/data/case-studies';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectListProps {
  projects: CaseStudy[];
}

const POSTS_PER_PAGE = 5;
const CATEGORIES = ["All", "AI", "Web Dev", "Mobile", "Strategy", "Data", "Analytics"];

const ProjectListClient: React.FC<ProjectListProps> = ({ projects }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProjects = useMemo(() => {
    setCurrentPage(1);
    if (activeCategory === "All") return projects;
    return projects.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
  }, [activeCategory, projects]);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredProjects.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredProjects, currentPage]);

  const totalPages = Math.ceil(filteredProjects.length / POSTS_PER_PAGE);

  return (
    <div id="projects" className="max-w-7xl mx-auto px-4 sm:px-12 py-16 font-sans">
      <h1 className="text-4xl md:text-5xl font-medium text-center text-gray-900 mb-12">
        Explore Our Work
      </h1>

      {/* Pill Filters */}
      <div className="flex flex-wrap items-center  gap-3 mb-12">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
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

      {/* Grid Display */}
      {paginatedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              category={project.category}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              slug={project.slug}
              techStack={project.techStackSummary}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400 text-sm">
          No projects found in this category.
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-end gap-4 mt-16 text-sm text-gray-500">
          <span>Page {currentPage} of {totalPages}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-1 rounded-full bg-gray-200 text-white disabled:opacity-50 hover:bg-gray-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-medium text-gray-900">{currentPage}</span>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
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