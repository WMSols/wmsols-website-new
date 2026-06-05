import { GradientLight } from '@/components/common/GradientLight'
import React from 'react'
import ProjectListClient from './components/ProjectListClient'
import CtaSection from './components/CtaSection'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'

const page = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className='h-screen pt-14  flex items-center justify-center overflow-hidden relative'
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
                    left="-100px"
                    color="rgba(4, 136, 197, 29%)"
                /> <GradientLight
                    size={400}
                    top="300px"
                    right="0"
                    color="rgba(132, 4, 197, 29%)"
                />
                <StaggerFadeUp className='flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2'>
                    <h1 className=" max-w-4xl text-5xl text-center sm:text-6xl md:text-7xl font-bold text-white  ">Real Projects <br />
                        Real <span className="text-blue-500">Results</span></h1>
                    <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
                        From early-stage startups to scaling enterprises, explore how WMsols turns complex challenges into elegant digital solutions
                    </p>
                    <a  className='bg-transparent text-white  py-3 px-5  border border-white rounded-md' href="#projects">Explore Our Work &rarr;</a>
                </StaggerFadeUp>
            </div>
            <ProjectListClient  />
            <CtaSection/>
        </div>
    )
}

export default page