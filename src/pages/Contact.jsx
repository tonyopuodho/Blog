import React from 'react'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div className='font-serif'>
      <div className='py-40 p-4 font-serif bg-black text-center text-white'>
      <h1 className='text-5xl md:text-7xl font-extrabold'>Contact us Page</h1>
      </div>
      <div className='bg-gray-100'>
        <div className='py-10 max-w-7xl md:w-[80%] mx-auto px-2 grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='w-full h-[60vh]'>
          <img src="src/assets/contact.png" alt="" className='w-full h-full'/>
        </div>
        <div >
          <form action="">
            <label htmlFor="name" className='text-xl font-bold'>First name</label>
            <input type="text"  className='w-full p-2 bg-white border outline-none rounded-md mb-2'/>
            <label htmlFor="name" className='text-xl font-bold'>Last name</label>
            <input type="text"  className='w-full p-2 bg-white border outline-none rounded-md mb-2'/>
            <label htmlFor="name" className='text-xl font-bold'>Email</label>
            <input type="text"  className='w-full p-2 bg-white border outline-none rounded-md mb-4'/>
            <textarea name="" id="" className='w-full bg-white  h-[20vh] border rounded-md p-2 outline-none' placeholder='Enter your message...'/>
            <button className='bg-black text-orange-900 text-xl font-bold py-2 w-[40%] rounded-md cursor-pointer'>Send</button>
          </form>
        </div>
      </div>
      </div>
      <Footer/>    
    </div>
  )
}

export default Contact