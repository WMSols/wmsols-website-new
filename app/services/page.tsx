import { GradientLight } from '@/components/common/GradientLight'
import { Mouse } from 'lucide-react'
import ServicesGrid from './components/ServicesGrid'
import CtaSection from './components/CtaSection'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "WMsols Services | Custom Software Development & Digital Solutions",
  description:  "Discover WMsols' comprehensive range of services, including custom software development, web and mobile app development, AI solutions, and digital transformation strategies. Learn how we can help your business thrive in the digital age.",
  keywords: [
    "WMsols services",  
    "custom software development",
    "web app development",
    "mobile app development",
    "AI solutions",
    "digital transformation"
  ]
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
                            bottom="-100px"
                            left="35vw"
                            color="rgba(4, 136, 197, 29%)"
                        />
                        <StaggerFadeUp className='flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2'>
                            <h1 className=" max-w-full sm:max-w-4xl text-5xl text-center sm:text-6xl md:text-7xl font-bold text-white  ">Solutions Engineered for Your <span className="text-blue-500">Success</span></h1>
                            <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
                              At WMsols, we transform complex business challenges into seamless digital experiences. Whether you need a high-performance web application, an intelligent automation system, or an intuitive mobile interface, our engineering-first approach ensures your product is built for scale. We combine modern technology stacks with purposeful design to deliver solutions that not only look exceptional but drive measurable growth for your business.
                            </p>
                        </StaggerFadeUp>
                        <Mouse size={34} className='absolute sm:block hidden bottom-10 animate-bounce text-white'/>
                    </div>
                    <ServicesGrid/>
                    <CtaSection/>
    </div>
  )
}

export default page