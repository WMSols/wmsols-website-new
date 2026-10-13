import { notFound } from 'next/navigation';
import { getCaseStudyBySlug, getCaseStudyImageUrl, parseCaseStudyTechStack, type CaseStudy } from '@/lib/strapi';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';
import ProjectCTA from '../components/ProjectCta';
import CaseStudySidebar from '../components/CaseStudySidebar';
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder';
import { placeholderImages } from '@/data/placeholder-images';

interface PageProps {
  params: Promise<{ slug: string }>;
}

function CaseStudyContent({ project }: { project: CaseStudy }) {
  const techStack = parseCaseStudyTechStack(project.techStack);

  const solutionItems = project.solutionItems && project.solutionItems
    .split('\n')
    .map(s => s.trim().replace(/^"|",?$|"$/g, '').trim())
    .filter(Boolean);

  const results: string | null = project.results || null;
  const coverSrc = project.image?.[0]?.url
    ? getCaseStudyImageUrl(project.image)
    : placeholderImages.caseStudyCover;

  return (
    <>
      {/* HERO */}
      <section className="w-full bg-linear-to-br from-[#060053] to-[#050109] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white mb-8 leading-tight">
            {project.title}
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-10">
            {project.overview}
          </p>

          <ImagePlaceholder
            src={coverSrc}
            alt={`${project.title} cover`}
            className="w-full h-64 md:h-80 rounded-2xl mb-12"
            priority
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-white/10 pt-8 mt-4">
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

            <div id="overview" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">Overview:</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{project.overview}</p>
            </div>

            <hr className="border-gray-100" />

            <div id="challenge" className="scroll-mt-32">
              <h2 className="text-2xl font-medium text-gray-900 mb-4">The Challenge:</h2>
              <p className="text-gray-500 text-sm leading-relaxed">{project.chellenge}</p>
            </div>

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

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = await getCaseStudyBySlug(slug);

  // Resolve notFound at page level so unknown / Strapi-down slugs return a real 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <CaseStudyContent project={project} />
      <ProjectCTA />
    </div>
  );
}
