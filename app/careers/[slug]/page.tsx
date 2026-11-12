import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getJobBySlug } from '@/lib/strapi-careers';
import { getExcerpt } from '@/lib/strapi';
import { clipText, pageMetadata } from '@/lib/seo';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbList, jobPosting } from '@/lib/structured-data';
import JobDetails from '../components/JobDetails';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const { slug } = await params;
    const job = await getJobBySlug(slug);
    if (!job) return { title: 'Career | WMsols' };

    const overview = typeof job.overview === 'string' ? job.overview : getExcerpt(job.overview);
    const description = clipText(
      overview || [job.title, job.location, job.type].filter(Boolean).join(' · '),
    );

    return pageMetadata({
      title: job.title,
      description,
      path: `/careers/${job.slug}`,
    });
  } catch {
    return { title: 'Career | WMsols' };
  }
}

export default async function JobRoutePage({ params }: PageProps) {
  const { slug } = await params;
  const currentJob = await getJobBySlug(slug).catch(() => null);

  if (!currentJob) {
    notFound();
  }

  const overview = typeof currentJob.overview === 'string'
    ? currentJob.overview
    : getExcerpt(currentJob.overview);

  return (
    <>
      <JsonLd
        data={breadcrumbList([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
          { name: currentJob.title, path: `/careers/${currentJob.slug}` },
        ])}
      />
      <JsonLd
        data={jobPosting({
          title: currentJob.title,
          description: overview || currentJob.title,
          path: `/careers/${currentJob.slug}`,
          datePosted: currentJob.publishedAt,
          employmentType: currentJob.type,
          location: currentJob.location,
        })}
      />
      <JobDetails job={currentJob} />
    </>
  );
}