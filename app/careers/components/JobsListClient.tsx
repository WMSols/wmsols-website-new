'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { getExcerpt } from '@/lib/strapi'; // Adjust the import path as needed
import { fetchJobs, Job } from '@/lib/strapi-careers';

const JobsListClient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [department, setDepartment] = useState('All');
  const [location, setLocation] = useState('All');
  const [jobType, setJobType] = useState('All');

  const [jobs, setJobs] = useState<Job[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [totalJobs, setTotalJobs] = useState(0);

  // Fetch jobs dynamically when filters or pageSize change
  useEffect(() => {
    const loadJobs = async () => {
      // Show full loading state if it's a completely new filter/search
      if (pageSize === 10) setIsLoading(true); 
      else setIsFetchingMore(true);

      try {
        const res = await fetchJobs(pageSize, {
          searchTerm,
          domain: department,
          location: location,
          type: jobType,
        });
        
        setJobs(res.data);
        setTotalJobs(res.meta.pagination.total);
      } catch (error) {
        console.error('Failed to load jobs:', error);
      } finally {
        setIsLoading(false);
        setIsFetchingMore(false);
      }
    };

    // Simple debounce to prevent spamming requests on keystrokes
    const timeoutId = setTimeout(() => {
      loadJobs();
    }, 400);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, department, location, jobType, pageSize]);

  // Reset page size to 10 whenever a filter changes
  useEffect(() => {
    setPageSize(10);
  }, [searchTerm, department, location, jobType]);

  const handleLoadMore = () => {
    setPageSize((prev) => prev + 10);
  };

  // ─── Loading Skeleton UI ──────────────────────────────────────────────────
  const JobSkeleton = () => (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm space-y-4">
      <Skeleton className="h-8 w-2/3 max-w-75" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
        <Skeleton className="h-4 w-28" />
      </div>
    </div>
  );

  return (
    <div id="jobslist" className="max-w-5xl mx-auto px-4 py-16 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Current Openings
      </h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 text-sm">
        <span className="text-gray-600">Filters:</span>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">Department</span>
          <select 
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className="border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:outline-none text-gray-500 w-36"
          >
            <option value="All">All</option>
            <option value="Web development">Web Development</option>
            <option value="Design">Design</option>
            <option value="QA">QA</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">Location</span>
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:outline-none text-gray-500 w-36"
          >
            <option value="All">All</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Remote">Remote</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">Type</span>
          <select 
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:outline-none text-gray-500 w-36"
          >
            <option value="All">All</option>
            <option value="Full Time">Full-Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>

      {/* Jobs List & States */}
      <div className="space-y-6">
        {isLoading ? (
          // Initial Loading State
          <>
            <JobSkeleton />
            <JobSkeleton />
            <JobSkeleton />
          </>
        ) : jobs.length > 0 ? (
          jobs.map((job) => {
            // Convert comma-separated string back to an array for mapping
            const skillsArray = job.skills 
              ? job.skills.split(',').map((s) => s.trim()).filter(Boolean)
              : [];

            return (
              <div key={job.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                {/* Notice the route uses documentId because the JSON doesn't contain a slug */}
                <Link href={`/careers/${job.slug}`}>
                  <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-600 mb-3 cursor-pointer">
                    {job.title}
                  </h2>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                  {getExcerpt(job.overview)}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {skillsArray.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-indigo-50 text-indigo-900 border border-indigo-100 text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="text-gray-800 text-sm font-medium hover:underline whitespace-nowrap"
                  >
                    View Job Details &rarr;
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10">
            <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search term.</p>
          </div>
        )}

        {/* Fetching More Skeleton */}
        {isFetchingMore && (
           <div className="pt-2"><JobSkeleton /></div>
        )}
      </div>

      {/* Load More Button */}
      {!isLoading && jobs.length < totalJobs && (
        <div className="mt-10 text-center">
          <button 
            onClick={handleLoadMore}
            disabled={isFetchingMore}
            className="text-gray-600 text-sm font-medium cursor-pointer hover:underline underline-offset-4 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isFetchingMore ? 'Loading...' : 'Load more jobs'}
          </button>
        </div>
      )}
    </div>
  );
};

export default JobsListClient;