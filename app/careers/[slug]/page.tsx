// For reference - this remains exactly as you had it previously
import { notFound } from 'next/navigation';
import { getJobBySlug } from '@/lib/strapi-careers'; 
import JobDetails from '../components/JobDetails'; 

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function JobRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const currentJob = await getJobBySlug(slug);

  if (!currentJob) {
    notFound();
  }

  return <JobDetails job={currentJob} />;
}