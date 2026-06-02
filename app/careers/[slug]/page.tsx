import { notFound } from 'next/navigation';
import { jobs } from '@/data/careers'; // Ensure your data file is at the root src/data/careers.ts
import JobDetails from '../components/JobDetails'; // Updated to match your folder structure

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobRoutePage({ params }: PageProps) {
  // 1. Await the params object (Required for Next.js 15+)
  const { slug } = await params;
  
  // 2. Look up the job using the resolved slug
  const currentJob = jobs.find((job) => job.slug === slug);

  // 3. Trigger 404 if it still doesn't match
  if (!currentJob) {
    notFound();
  }

  // 4. Render the component with the found job data
  return <JobDetails job={currentJob} />;
}