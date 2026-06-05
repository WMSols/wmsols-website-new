'use client';

import React, { useEffect, useState } from 'react';

interface CaseStudySidebarProps {
  hasResults: boolean;
}

export default function CaseStudySidebar({ hasResults }: CaseStudySidebarProps) {
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    // Collect the IDs of the sections we want to track
    const sectionIds = ['overview', 'challenge', 'solution', hasResults ? 'results' : null, 'tech-stack'].filter(Boolean) as string[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If the section is intersecting the viewport, set it as active
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // The root margin offsets the trigger area. 
      // This setting triggers the change when a section reaches the top 20% of the screen.
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [hasResults]);

  // Helper to dynamically apply classes based on the active section
  const getLinkClass = (id: string) => 
    `transition-colors duration-200 ${
      activeSection === id ? 'text-blue-500' : 'text-gray-300 hover:text-gray-900'
    }`;

  return (
    <aside className="hidden lg:block relative">
      <div className="sticky top-24 flex flex-col space-y-6 pt-5 text-sm font-medium">
        <a href="#overview" className={getLinkClass('overview')}>Overview</a>
        <a href="#challenge" className={getLinkClass('challenge')}>The Challenge</a>
        <a href="#solution" className={getLinkClass('solution')}>The Solution</a>
        {hasResults && (
          <a href="#results" className={getLinkClass('results')}>The Results</a>
        )}
        <a href="#tech-stack" className={getLinkClass('tech-stack')}>Tech Stack</a>
      </div>
    </aside>
  );
}