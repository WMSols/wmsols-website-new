import { GradientLight } from '@/components/common/GradientLight'
import React from 'react'
import FeaturedPost from './components/FeaturedPost'
import { blogPosts } from '@/data/blogs-newsroom';
import InsightCardList from './components/InsightCardList';

const page = () => {
    // Extract the featured element, and gather the rest for the filtered grid
  const featured = blogPosts.find(p => p.isFeatured) || blogPosts[0];
  const remainingPosts = blogPosts.filter(p => p.id !== featured.id);
    return (
        <div>

            {/* Hero Section */}
            <div className='h-screen pt-14 flex items-center justify-center overflow-hidden relative'
                style={{
                    background: 'linear-gradient(180deg, #030015 0%, #0C0438 100%)'
                }}>
                <div className="absolute inset-0 -z-10 h-full w-full"
                    style={{
                        backgroundImage: `
                    radial-gradient(#e5e7eb_1px,transparent_1px),
                  `,
                        backgroundSize: '16px 16px',
                        backgroundPosition: 'center center'
                    }}
                />

                {/* Optional secondary light based on your image (left side, slightly purple) */}
                <GradientLight
                    size={400}
                    top="-10px"
                    left="-100px"
                    color="rgba(97, 4, 197, 29%)"
                />  <GradientLight
                    size={300}
                    top="400px"
                    right="-100px"
                    color="rgba(65, 273, 111, 29%)"
                />
                <div className='flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2'>
                    <h1 className=" max-w-5xl text-5xl text-center sm:text-6xl md:text-7xl font-bold text-white  ">Insights from the WMsols Team</h1>
                    <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
                        Practical thinking on technology, product design, AI, and digital strategy written by the engineers and strategists who build it every day.
                    </p>
                </div>
            </div>
            <FeaturedPost post={featured} />
                {/* Grid of remaining posts */}
                <InsightCardList posts={remainingPosts} />
        </div>
    )
}

export default page