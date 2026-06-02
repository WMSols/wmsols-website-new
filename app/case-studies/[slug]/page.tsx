import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/case-studies';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudies.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      
      {/* HERO SECTION */}
      <section className="w-full bg-linear-to-br from-[#060053] to-[#050109] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-16">
            {project.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8 mt-12">
            <div>
              <p className="text-gray-400 text-sm mb-1">Client</p>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Industry</p>
              <p className="text-white font-medium">{project.industry}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Tech Stack</p>
              <p className="text-white font-medium">{project.techStackSummary.join(' , ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
          
          {/* Sticky Sidebar Navigation */}
          <aside className="hidden lg:block relative">
            <div className="sticky top-24 flex flex-col space-y-6 text-sm font-medium">
              <a href="#overview" className="text-blue-500 hover:text-blue-600 transition-colors">Overview</a>
              <a href="#challenge" className="text-gray-300 hover:text-gray-900 transition-colors">The Challenge</a>
              <a href="#solution" className="text-gray-300 hover:text-gray-900 transition-colors">The Solution</a>
              <a href="#results" className="text-gray-300 hover:text-gray-900 transition-colors">The Results</a>
              <a href="#tech-stack" className="text-gray-300 hover:text-gray-900 transition-colors">Tech Stack</a>
            </div>
          </aside>

          {/* Content Area */}
          <div className="space-y-16 border-l-0 lg:border-l border-gray-100 lg:pl-16">
            
            {/* Overview */}
            <div id="overview">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Overview:</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{project.overview}</p>
            </div>
            
            <hr className="border-gray-100" />

            {/* The Challenge */}
            <div id="challenge">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">The Challenge:</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{project.challenge}</p>
            </div>

            {/* The Solution */}
            <div id="solution" className="bg-[#f5f7ff] rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">The Solution:</h2>
              <ul className="space-y-4">
                {project.solutionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div id="results">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Quntifiable Outcomes & Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.results.map((stat, idx) => (
                  <div key={idx} className="bg-[#f5f7ff] rounded-2xl p-6 text-center flex flex-col justify-center items-center h-32">
                    <p className="text-gray-400 text-xs mb-2">{stat.label}</p>
                    <p className="text-3xl md:text-4xl font-medium text-green-500">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div id="tech-stack">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Tech Stack:</h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-blue-500">
                {project.fullTechStack.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span>• {tech}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}