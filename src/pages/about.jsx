import React from 'react'

export default function about() {
  return (
    <div className='flex flex-col min-h-screen items-center justify-center '>
      {/* heading and paragraps */}
      <div className='flex flex-col text-center gap-6'>
      <h1 className='text-green-500 font-bold 
      uppercase text-3xl pt-15'>About me</h1>
      
      <p className='text-lg text-justify 
      text-gray-500 text-justify-center px-4'>I am Prashant kapair, a professional full stack 
        Developer from Nepal. I enjoy building representive and  mobile friendly website
      </p>
      
      <p className='text-lg text-gray-500 px-4 text-justify'>I love learning new technologies, 
        solving problems and creating modern solutions</p>
      
      </div>

      {/* to list skills */}
      <div className='border-gray-300 border-2 p-2 sm:m-10 m-4 px-10 py-6'>
        <h1 className='text-center text-green-500 sm:text-2xl font-semibold m-4'>My skill and knowledges</h1>
        <ul className='grid sm:grid-cols-2 grid-cols-1  gap-4'>
        <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold sm:text'>HTML CSS and Java script</li>
        <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold sm:text'>REACT AND TAILWIND CSS</li>
        <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold sm:text'>NODE JS</li>
        <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold sm:text'>MONGODB</li>
        <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold sm:text'>POSTGRESQL</li>
        <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold sm:text'>GIT AND GITHUB</li>
        </ul>
      </div>
      </div>
  )
}
