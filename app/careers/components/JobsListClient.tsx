'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { jobs } from '@/data/careers';

const JobsListClient: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div id='jobslist' className="max-w-5xl mx-auto px-4 py-16 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Current Openings
      </h1>

      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Jobs"
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
          <select className="border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:outline-none text-gray-500 w-32">
            <option>Web Dev</option>
            <option>Design</option>
            <option>QA</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">Location</span>
          <select className="border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:outline-none text-gray-500 w-32">
            <option>Web Dev</option>
            <option>Islamabad</option>
            <option>Remote</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-900">Type</span>
          <select className="border border-gray-300 rounded-md py-1.5 px-3 bg-white focus:outline-none text-gray-500 w-32">
            <option>Web Dev</option>
            <option>Full-Time</option>
            <option>Contract</option>
          </select>
        </div>
      </div>

      {/* Jobs List */}
      <div className="space-y-6">
        {jobs.map((job) => (
          <div key={job.id} className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/careers/${job.slug}`}>
              <h2 className="text-2xl font-bold text-blue-500 hover:text-blue-600 mb-3 cursor-pointer">
                {job.title}
              </h2>
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {job.shortDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
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
        ))}
      </div>

      {/* Load More */}
      <div className="mt-10 text-center">
        <button className="text-gray-600 text-sm font-medium hover:underline underline-offset-4">
          Load more jobs
        </button>
      </div>
    </div>
  );
};

export default JobsListClient;