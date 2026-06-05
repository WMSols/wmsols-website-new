import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getCaseStudyImageUrl, parseCaseStudyTechStack } from '@/lib/strapi';
import { CheckCircle2 } from 'lucide-react';
import React, { Suspense } from 'react';
import ProjectCTA from '../components/ProjectCta';
import { Skeleton } from '@/components/ui/skeleton';

import CaseStudySidebar from '../components/CaseStudySidebar';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ─── Skeleton ─────────────────────────────────────────────────────────────────

function CaseStudyHeroSkeleton() {
  return (
    <section className="w-full bg-linear-to-br from-[#060053] to-[#050109] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <Skeleton className="h-12 w-3/4 mx-auto bg-white/10" />
        <Skeleton className="h-4 w-full mx-auto bg-white/10" />
        <Skeleton className="h-4 w-5/6 mx-auto bg-white/10" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8 mt-12">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-3 w-16 bg-white/10" />
              <Skeleton className="h-5 w-28 bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyContentSkeleton() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-12 lg:gap-24">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-24" />
          ))}
        </aside>

        {/* Content */}
        <div className="space-y-16 border-l-0 lg:border-l border-gray-100 lg:pl-16">
          <div className="space-y-3">
            <Skeleton className="h-7 w-32" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
          <hr className="border-gray-100" />
          <div className="space-y-3">
            <Skeleton className="h-7 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="bg-[#f5f7ff] rounded-2xl p-8 md:p-10 space-y-4">
            <Skeleton className="h-7 w-36" />
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-start gap-3">
                <Skeleton className="w-5 h-5 rounded-full shrink-0 mt-0.5" />
                <Skeleton className="h-4 flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main content (async) ─────────────────────────────────────────────────────

async function CaseStudyContent({ slug }: { slug: string }) {
  const project = await getCaseStudyBySlug(slug);

  if (!project) {
    notFound();
  }

  const techStack = parseCaseStudyTechStack(project.techStack);
  const imageUrl = getCaseStudyImageUrl(project.image);

  const solutionItems = project.solutionItems && project.solutionItems
    .split('\n')
    .map(s => s.trim().replace(/^"|",?$|"$/g, '').trim())
    .filter(Boolean);

  const results: string | null = project.results || null;

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-linear-to-br from-[#060053] to-[#050109] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-16">
            {project.overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8 mt-12">
            <div>
              <p className="text-gray-400 text-sm mb-1">Client</p>
              <p className="text-white font-medium">{project.client}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Category</p>
              <p className="text-white font-medium">{project.category.name}</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Tech Stack</p>
              <p className="text-white font-medium">{techStack.join(' , ')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="max-w-6xl sm:ml-6 px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">

          <CaseStudySidebar hasResults={!!results} />

          {/* Content */}
          <div className="space-y-16 border-l-0 lg:border-l border-gray-100 lg:pl-10 px-4 sm:px-0">

            {/* Added scroll-mt-32 to all section containers */}
            <div id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Overview:</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{project.overview}</p>
            </div>

            <hr className="border-gray-100" />

            <div id="challenge" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">The Challenge:</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{project.chellenge}</p>
            </div>

            {/* Merged scroll-mt-32 with existing background/padding classes */}
            <div id="solution" className="bg-[#f5f7ff] rounded-2xl sm:p-8 md:p-10 scroll-mt-32">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">The Solution:</h2>
              <ul className="space-y-4">
                {solutionItems && solutionItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {results && (
              <div id="results" className="scroll-mt-32">
                <h2 className="text-2xl font-medium text-gray-900 mb-6">Quantifiable Outcomes & Results</h2>
                <p className="text-green-500 text-lg font-medium">{results}</p>
              </div>
            )}

            <div id="tech-stack" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-gray-900 mb-6">Tech Stack:</h2>
              <div className="flex flex-wrap items-center gap-3 text-sm text-blue-500">
                {techStack.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span>• {tech}</span>
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="min-h-screen bg-white font-sans">
      <Suspense fallback={
        <>
          <CaseStudyHeroSkeleton />
          <CaseStudyContentSkeleton />
        </>
      }>
        <CaseStudyContent slug={slug} />
      </Suspense>
      <ProjectCTA />
    </div>
  );
}