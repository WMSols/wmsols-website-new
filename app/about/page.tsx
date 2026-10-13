import React from 'react'
import OurStory from './components/OurStory'
import TeamMembers from './components/TeamMembers'
import OurValues from './components/OurValues'
import TrackRecord from './components/TrackRecord'
import CtaSection from './components/CtaSection'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { placeholderImages } from '@/data/placeholder-images'
import { Metadata } from 'next'

export const metadata: Metadata = {
title: "About WMsols | Our Story, Team & Mission",

description:
  "WMsols is a digital solutions agency committed to building technology that matters. Learn about our story, our values, and the team behind our work.",

keywords: [
  "about WMsols",
  "software development agency team",
  "tech company mission",
  "digital agency story",
],
}

const page = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="h-screen pt-14 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0">
                    <ImagePlaceholder
                        src={placeholderImages.aboutHero}
                        alt="WMsols workspace and team"
                        className="h-full w-full"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-[#030015]/65 pointer-events-none" />
                <div className="absolute inset-0 bg-linear-to-b from-[#030015]/40 via-[#0C0438]/35 to-[#030015]/75 pointer-events-none" />

                <StaggerFadeUp className="relative z-10 flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2">
                    <h1 className="text-4xl text-center sm:text-6xl md:text-7xl font-bold text-white">We Build With Purpose</h1>
                    <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
                        WMsols is a digital solutions agency on a mission to make world-class
                        technology accessible to every ambitious business — wherever they are in the
                        world.
                    </p>
                </StaggerFadeUp>
            </div>
            <OurStory />
            <TeamMembers />
            <OurValues />
            <TrackRecord/>
            <CtaSection/>
        </div>
    )
}

export default page
