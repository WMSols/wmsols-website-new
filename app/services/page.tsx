import { GradientLight } from '@/components/common/GradientLight'
import { Mouse } from 'lucide-react'
import React from 'react'
import ServicesGrid from './components/ServicesGrid'
import CtaSection from './components/CtaSection'

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
                            bottom="-100px"
                            left="35vw"
                            color="rgba(4, 136, 197, 29%)"
                        />
                        <div className='flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2'>
                            <h1 className=" max-w-4xl text-5xl text-center sm:text-6xl md:text-7xl font-bold text-white  ">Solutions Engineered for Your <span className="text-blue-500">Success</span></h1>
                            <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
                               A Senior React Developer is an experienced front-end or full-stack engineer who designs scalable architectures, mentors junior team members, and drives high-level technical decisions. They typically have 4+ years of hands-on experience, a deep understanding of React, TypeScript, and state management, and are adept at solving complex production-level challenges
                            </p>
                        </div>
                        <Mouse size={24} className='absolute bottom-10 animate-bounce text-white'/>
                    </div>
                    <ServicesGrid/>
                    <CtaSection/>
    </div>
  )
}

export default page