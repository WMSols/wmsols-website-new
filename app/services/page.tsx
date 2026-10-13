import { Mouse } from 'lucide-react'
import ServicesGrid from './components/ServicesGrid'
import CtaSection from './components/CtaSection'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'
import { ImagePlaceholder } from '@/components/common/ImagePlaceholder'
import { placeholderImages } from '@/data/placeholder-images'
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
      <div className="min-h-screen pt-14 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0">
          <ImagePlaceholder
            src={placeholderImages.servicesListingHero}
            alt="Digital solutions and engineering workspace"
            className="h-full w-full"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-[#030015]/65 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-[#030015]/50 via-[#0C0438]/40 to-[#030015]/80 pointer-events-none" />

        <StaggerFadeUp className="relative z-10 flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2">
          <h1 className="max-w-full sm:max-w-4xl text-5xl text-center sm:text-6xl md:text-7xl font-bold text-white">
            Solutions Engineered for Your <span className="text-blue-500">Success</span>
          </h1>
          <p className="text-lg text-center max-w-2xl px-4 text-muted-foreground">
            At WMsols, we transform complex business challenges into seamless digital experiences. Whether you need a high-performance web application, an intelligent automation system, or an intuitive mobile interface, our engineering-first approach ensures your product is built for scale. We combine modern technology stacks with purposeful design to deliver solutions that not only look exceptional but drive measurable growth for your business.
          </p>
          <Mouse size={34} className="sm:block hidden animate-bounce text-white" />
        </StaggerFadeUp>
      </div>
      <ServicesGrid />
      <CtaSection />
    </div>
  )
}

export default page
