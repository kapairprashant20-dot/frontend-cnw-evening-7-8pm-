import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='bg-gray-300 sm:mt-10 flex sm:flex-row flex-col
    justify-center items-center sm:gap-10 gap-4 px-7 py-10 text-gray-700'>
        <div className='flex flex-col gap-3
        justify-center items-center max-w-2xl'>
            <h1>Prashant kapair</h1>
            <p  className='text-justify'>I design scable and responsive web application 
                using mangoDB, Express, React and Nodejs. I
                have 2 years of experience of working as a full stack
                developer and instructor
            </p>
        </div>
        <div>
            <h1 className='text-center'>Social Contacts</h1>
            <div className='flex gap-4 text-x1 sm:text-2xl py-4 text-blue-500'>
                <a href='https://www.facebook.com/' target='_blank'><FaFacebook/></a>
                <a href='https://github.com/' target='_blank'><FaGithub/></a>
                <a href='https://www.linkedin.com/' target='_blank'><FaLinkedin/></a>
                <a href='https://x.com/' target='_blank'><FaTwitter/></a>
            </div>
        </div>
        <div>
            <p>@ All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer