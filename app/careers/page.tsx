import WhyUs from './components/WhyUs'
import JobsListClient from './components/JobsListClient'
import OpenApplicationCTA from './components/OpenApplicationCta'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { placeholderImages } from '@/data/placeholder-images'
import { Metadata } from 'next'

export const metadata: Metadata = {
 title: "Careers at WMsols | Join Our Team of Digital Builders",

description:
  "We're hiring! Join the WMsols team and help build transformative digital products. Explore open roles in engineering, design, AI, and strategy.",

keywords: [
  "software developer jobs",
  "tech startup careers",
  "digital agency hiring",
  "remote software jobs",
], 
}

const page = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className="h-screen pt-14 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0">
                    <ImagePlaceholder
                        src={placeholderImages.careersHero}
                        alt="WMsols team culture and workplace"
                        className="h-full w-full"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#030015]/65 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-b from-[#030015]/40 via-[#0C0438]/35 to-[#030015]/75 pointer-events-none" />

                <StaggerFadeUp className="relative z-10 flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2">
                    <h1 className="max-w-4xl text-4xl text-center sm:text-6xl md:text-7xl font-bold text-white">Build the Future. Build It With Us.</h1>
                    <p className="text-lg text-center max-w-2xl px-4 mb-4 text-muted-foreground">
                        We're a team of engineers, designers, strategists, and innovators who believe technology should do more. If you're driven by craft and motivated by impact, we'd love to meet you.
                    </p>
                    <a
                      className="inline-flex items-center justify-center bg-transparent text-white py-3.5 px-8 border border-white rounded-md"
                      href="#jobslist"
                    >
                      View Open Roles &rarr;
                    </a>
                </StaggerFadeUp>
            </div>
            <WhyUs/>
            <JobsListClient/>
            <OpenApplicationCTA/>
        </div>
    )
}

export default page
