import React from 'react'
import Footer from '../Components/Footer'

function Service() {
  const service = [
    {
      name:"Content Writing & Publishing",
      descrip:"Professional creation and publishing of engaging blog articles tailored to specific audiences, industries, and trends.",
      img:"src/assets/content.jpg"
    }, {
      name:"SEO Optimization",
      descrip:"Improving blog visibility on search engines through keyword research, meta descriptions, and optimized content structure..",
      img:"src/assets/seo.png"
    },{
      name:"Website Design & Management",
      descrip:"Custom blog website design, maintenance, and updates to ensure a modern, responsive, and user-friendly experience.",
      img:"src/assets/website.jpg"
    },{
      name:"Social Media Promotion",
      descrip:"Sharing blog content across social platforms to increase traffic, audience engagement, and brand awareness.",
      img:"src/assets/socialmedia.jpg"
    }
  ]
  return (
    <div className='bg-gray-100 font-serif'>
    <div className='py-40 p-4 font-serif bg-black text-center text-white'>
      <h1 className='text-5xl md:text-7xl font-extrabold'>Service Page</h1>
      <p className='text-white text-xl'>We offer various services</p>
    </div>
    <div className='max-w-7xl md:w-[80%] mx-auto px-2 grid grid-cols-2 md:grid-cols-4 gap-2 py-10'>
      {
        service.map((item) => (
          <div className='p-2 bg-white rounded-md shadow-md'>
            <div className='w-full mb-2 md:h-[60%]'>
              <img src={item.img} alt="" className='w-full h-full'/>
            </div>
            <h1 className='text-lg font-extrabold text-gray-800'>{item.name}</h1>
            <p className='text-gray-600'>{item.descrip}</p>
          </div>
        ))
      }
    </div>
    <Footer/>
    </div>
  )
}

export default Service