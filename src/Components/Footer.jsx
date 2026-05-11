import React from 'react'
import { FaCopyright } from 'react-icons/fa'

function Footer() {
  return (
    <div className='py-10 bg-gray-900 font-serif'>
        <div className='max-w-7xl md:w-[80%] px-2 mx-auto '>
           <div className='grid grid-cols-1 md:grid-cols-4'>
             <div>
                <h1 className='text-white font-extrabold text-xl'>Category</h1>
                <h3 className='text-gray-400'>News</h3>
                <h3 className='text-gray-400'>World</h3>
                <h3 className='text-gray-400'>Game</h3>
                <h3 className='text-gray-400'>Reference</h3>
            </div>
             <div>
                <h1 className='text-white font-extrabold text-xl'>Apples</h1>
                <h3 className='text-gray-400'>Ecomerce</h3>
                <h3 className='text-gray-400'>Business</h3>
                <h3 className='text-gray-400'>Entertainment</h3>
                <h3 className='text-gray-400'>Portfolio</h3>
            </div>
            <div>
                <h1 className='text-white font-extrabold text-xl'>Business</h1>
                <h3 className='text-gray-400'>Mpesa</h3>
                <h3 className='text-gray-400'>Person</h3>
                <h3 className='text-gray-400'>Wiki</h3>
                <h3 className='text-gray-400'>Forum</h3>
            </div>
             <div>
                <h1 className='text-white font-extrabold text-xl'>Subscribe for updates</h1>
                <form action="" className='flex flex-col'>
                    <input type="text"  className='w-full p-2 bg-white rounded-md outline-none'/>
                    <button className='p-2 w-full bg-orange-900 text-white text-lg mt-2 rounded-md'>subscribe</button>
                </form>
            </div>
           </div>
           <hr className='text-orange-900 mt-8'/>
          <div className='flex justify-center items-center mt-4 text-amber-900'>
               Copyright <FaCopyright className='ml-2 mr-2'/>  {new Date().getFullYear()} DesignDk All Rights reserved
        </div>
        </div>
    </div>
  )
}

export default Footer