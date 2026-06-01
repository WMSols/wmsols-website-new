import React from 'react'

const notFound = () => {
  return (
    <div className='h-screen flex items-center justify-center bg-linear-to-b from-[#050109] from-0% via-[#471793] via-50% to-[#060053] to-100%'>
      <div className="flex flex-col items-center gap-6">
        <h1 className='text-6xl font-bold text-center mb-4 text-white '>404 - Page Not Found</h1>
        <p className='text-center text-gray-500'>Sorry, the page you are looking for does not exist.</p>
        <a href="/" className= "text-center border rounded-2xl px-3 py-1 text-white hover:bg-white hover:text-purple-900">Back to Home</a>
      </div>
        </div>
  )
}

export default notFound