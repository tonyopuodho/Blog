import React from 'react'
import Banner from '../Components/Banner'
import { data } from '../Components/data'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div className='font-serif bg-gray-100'>
        <Banner/>
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

export default Home