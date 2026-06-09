import { GradientLight } from '@/components/common/GradientLight'
import React from 'react'
import Contact from './components/Contact'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
title: "Contact WMsols | Let's Start Your Digital Project",

description:
  "Get in touch with the WMsols team. Tell us about your project and we'll get back to you within 24 hours. We're ready to build something great together.",

keywords: [
  "contact software development agency",
  "hire app developers",
  "get a tech quote",
  "digital agency contact",
],   
}
const page = () => {
    return (
        <div>

            {/* Hero Section */}
            <div className='h-screen  pt-14 flex items-center justify-center overflow-hidden relative'
                style={{
                    background: 'linear-gradient(180deg, #030015 0%, #0C0438 100%)'
                }}>
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: `
                    linear-gradient(#ffffff 1px, transparent 1px), 
                    linear-gradient(90deg, #ffffff 1px, transparent 1px)
                  `,
                        backgroundSize: '60px 60px',
                        backgroundPosition: 'center center'
                    }}
                />

                {/* Optional secondary light based on your image (left side, slightly purple) */}
                <GradientLight
                    size={400}
                    top="-100px"
                    left="35vw"
                    color="rgba(4, 136, 197, 29%)"
                />
                <StaggerFadeUp className='flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2'>
                    <h1 className=" max-w-4xl text-4xl text-center sm:text-6xl md:text-7xl font-bold text-white  ">Let's Build Something
                        Great Together</h1>
                    <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
                        Tell us about your project. Whether it's a quick question or
                        a full project brief, we respond within 24 hours.
                    </p>
                </StaggerFadeUp>
            </div>
            <Contact/>
        </div>
    )
}

export default page