import WhyUs from './components/WhyUs'
import JobsListClient from './components/JobsListClient'
import OpenApplicationCTA from './components/OpenApplicationCta'
import { StaggerFadeUp } from '@/components/animations/StaggerFadeUp'
import { absolutePageMetadata } from '@/lib/seo'
import { fetchJobs, type Job } from '@/lib/strapi-careers'

export const metadata = absolutePageMetadata({
 title: "Careers at WMsols | Join Our Team of Digital Builders",
 description:
  "We're hiring! Join the WMsols team and help build transformative digital products. Explore open roles in engineering, design, AI, and strategy.",
 path: "/careers",
 keywords: [
  "software developer jobs",
  "tech startup careers",
  "digital agency hiring",
  "remote software jobs",
],
})

const page = async () => {
    let initialJobs: Job[] = []
    let initialTotal = 0
    let fetchFailed = false

    try {
        const result = await fetchJobs(10)
        initialJobs = result.data ?? []
        initialTotal = result.meta.pagination.total
    } catch {
        fetchFailed = true
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className='min-h-[85vh] pt-14 flex items-center justify-center overflow-hidden relative'
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
                <StaggerFadeUp className='flex flex-col items-center sm:gap-4 gap-2 justify-center h-full sm:px-0 px-2'>
                    <h1 className=" max-w-4xl text-4xl text-center sm:text-6xl md:text-7xl font-bold text-white  ">Build the Future. Build It With Us.</h1>
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
            <JobsListClient
                initialJobs={initialJobs}
                initialTotal={initialTotal}
                fetchFailed={fetchFailed}
            />
            <OpenApplicationCTA/>
        </div>
    )
}

export default page