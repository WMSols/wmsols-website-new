import React from 'react'
import {ourStory} from '@/data/about'
import { Infinity } from 'lucide-react'

const OurStory = () => {
  return (
    <div className='h-auto flex items-center justify-center sm:py-20 py-4 relative overflow-hidden' >
        <Infinity size={1000} strokeWidth={1} className="text-blue-300 absolute rotate-45 animate-[spin_30s_ease-in-out_infinite] blur-2xl left-0  " />
        {/* <Infinity size={1000} className="text-blue-300 absolute blur-xl left-0 rotate-90 animate-[caret-blink_3.2s_ease-in-out_infinite] " /> */}
        <div className="flex sm:flex-row flex-col justify-center items-center z-10 relative px-4 sm:px-20 gap-8">
            <h1 className='text-3xl  sm:text-6xl font-bold mb-6 text-center'>From a Small Team to a Global Partner</h1>
            <div className='border rounded-md p-4 bg-blue-100'>
                {
                    ourStory.map((item: string, idx: number) => (
                        <div key={idx} className='mb-2 sm:max-w-2xl'>
                            <h2 className='text-muted-foreground'>{item}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurStory