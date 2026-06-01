import React from 'react'
import {ourStory} from '@/data/about'

const OurStory = () => {
  return (
    <div className='h-auto flex items-center justify-center sm:py-20 py-4' >
        <div className="flex sm:flex-row flex-col justify-center items-center px-4 sm:px-24 gap-8">
            <h1 className='text-3xl  sm:text-5xl font-bold mb-6 text-center'>From a Small Team to a Global Partner</h1>
            <div>
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