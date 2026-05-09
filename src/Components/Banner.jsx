import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='py-40 w-full font-serif bg-black p-4'>
        <div className='max-w-7xl md:[80%] mx-auto flex items-center justify-center flex-col'>
            <h1 className='text-5xl md:text-7xl font-extrabold text-white'>Welcome to our blog</h1>
            <p className='text-gray-200 md:w-3/5 mx-auto mt-5 mb-5 text-lg'>Start your blog today, and join a community of writers and readers 
                who are passionate about sharing their stories and ideas. We offer everything you need to get started, from helpful tips and tutorials.
            </p>
            <Link to={"/blog"} className='text-white flex items-center cursor-pointer text-xl mt-8 hover:text-orange-800 duration-300'>Learn more <FaArrowRight className='ml-4'/></Link>
        </div>
    </div>
  )
}

export default Banner