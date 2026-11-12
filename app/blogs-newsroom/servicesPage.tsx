import React from 'react';
import { GradientLight } from '@/components/common/GradientLight';
import FeaturedPost from './components/FeaturedPost';
import InsightCardList from './components/InsightCardList';
import { type BlogPost } from '@/data/blogs-newsroom';
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp';

interface ServicesPageProps {
  featured: BlogPost | null;
  posts: BlogPost[];
  pageCount: number;
  statusMessage: string | null;
}

const Page = ({ featured, posts, pageCount, statusMessage }: ServicesPageProps) => {
  return (
    <div>
      <div
        className="min-h-[85vh] pt-14 flex items-center justify-center overflow-hidden relative"
        style={{ background: 'linear-gradient(180deg, #030015 0%, #0C0438 100%)' }}
      >
        <div
          className="absolute inset-0 -z-10 h-full w-full"
          style={{
            backgroundImage: 'radial-gradient(#e5e7eb_1px,transparent_1px)',
            backgroundSize: '16px 16px',
            backgroundPosition: 'center center',
          }}
        />
        <GradientLight size={400} top="-10px" left="-100px" color="rgba(97, 4, 197, 29%)" />
        <GradientLight size={300} top="400px" right="-100px" color="rgba(65, 273, 111, 29%)" />

        <StaggerFadeUp className="flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2">
          <h1 className="max-w-5xl text-4xl text-center sm:text-6xl md:text-7xl font-bold text-white">
            Insights from the WMsols Team
          </h1>
          <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
            Practical thinking on technology, product design, AI, and digital strategy written
            by the engineers and strategists who build it every day.
          </p>
        </StaggerFadeUp>
      </div>

      {statusMessage && (
        <p className="mt-4 text-sm text-center text-slate-300">{statusMessage}</p>
      )}

      {featured && <FeaturedPost post={featured} />}
      <InsightCardList posts={posts} initialPageCount={pageCount} />
    </div>
  );
};

export default Page;
