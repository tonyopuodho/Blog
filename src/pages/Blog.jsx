import React from 'react'
import { data } from '../Components/data'
import Footer from '../Components/Footer'

function Blog() {
  return (
    <div className='bg-gray-100 font-serif'>
      <div className='py-40 p-4 font-serif bg-black text-center text-white'>
        <h1 className='text-5xl md:text-7xl font-extrabold'>Blog Page</h1>
      </div>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2 py-16 grid grid-cols-2 md:grid-cols-4 gap-4'>
        {
          data.map((item) => (
            <div className='rounded-md shadow-sm p-2 bg-white'>
              <img src={item.img} alt="" className='h-[200px]'/>
              <div className='mt-2'>
                <h1 className='text-xl font-extrabold text-gray-800 line-clamp-2 '>{item.title}</h1>
               
              </div>
               <button className='py-2 w-full bg-orange-900 text-white font-bold rounded-md cursor-pointer'>Read more</button>
            </div>
          ))
        }
      </div>     
      <Footer/>     
    </div>
    
  )
}

export default Blog