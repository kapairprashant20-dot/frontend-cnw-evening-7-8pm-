import {FaFacebook, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { Link } from "react-router-dom";

function hero() {
  return (
    <div className='flex sm:flex-row flex-col-reverse min-h-screen justify-center 
    items-center sm:gap-24 gap-8'>

      {/* left content */}
      <div className='max-w-2xl flex flex-col gap-8'>
        {/* heading and paragraph */}
          <div className='flex flex-col gap-4 justify-center text-center'>
            <h1 className='text-blue-500 text-3x1 font-bold'>Prashant Kapair</h1>
            <h2 className='text-x1 text-green-400 font-semibold'>Frontend web developer and trainer</h2>
            <p className='text-justify leading-8 text-[16px] px-4'>I am passionate frontend web developer and trianer with experience in 
              crating responsive and user-friendly web applications. I design and developm website</p>
          </div>

        {/* button */}
        
          <div className='flex gap-4 text-center justify-center'>
            <a href='cv.pdf' download>
            <button className='bg-blue-500 text-white font-semibold px-4 py-3'>download cv</button> 
            </a>
          
          <Link to="/project">
            <button className='border border-gray-4 px-4 py-3'>view project</button>
          </Link>
          
          </div>

          {/* social icon */}
        <div className='flex gap-7 justify-center text-2x1 text-gray-700'>
          <a href='https://www.facebook.com/' target='_blank'><FaFacebook/></a>
          <a href='https://www.github.com/' target='_blank'><FaGithub/></a>
          <a href='https://www.linkedin.com/' target='_blank'><FaLinkedin/></a>
          <a href='https://www.twitter.com/' target='_blank'><FaTwitter/></a>
        </div>
      </div>

      {/* right imgae */}
      <div>
        <img src="profiling.jpeg" alt="Prashant kapair" className='sm:h-100 
        sm:w-100 rounded-full h-50 w-50 mt-10'/>
      </div>
    </div>
  )
}
export default hero