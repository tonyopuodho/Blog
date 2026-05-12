import React from 'react'
import Footer from '../Components/Footer'

function About() {
  const authors = [
    {
      name:"John Doe",
      img:"src/assets/user-01.png",
      direct:"Director of operation",
      doc:"5 Articles published"
    },{
      name:"Maya L.",
      img:"src/assets/user-02.png",
      direct:"Content writer",
      doc:"15 Articles published"
    },{
      name:"Timothy E.",
      img:"src/assets/user-03.png",
      direct:"Software engineer",
      doc:"4 Articles published"
    }
  ]
  return (
    <div className='font-serif bg-gray-100'>
        <div className='py-40 p-4 font-serif bg-black text-center text-white'>
          <h1 className='text-5xl md:text-7xl font-extrabold'>About Page</h1>
        </div> 
        <div className='max-w-7xl md:w-[80%] px-2 mx-auto  py-10'>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
       <div className='h-[50vh] p-2 rounded-md bg-white shadow-md'>
            <img src="src/assets/Blogging-in-Digital-Marketing.jpg" alt="" className='w-full h-full'/>
          </div>
          <div>
            <p className='text-gray-500 text-lg'>Welcome to our blog website, your trusted source for insightful, engaging, and inspiring content across a variety of topics. Our mission is to inform, educate, and entertain readers by delivering high-quality articles that are relevant, practical, and easy to understand.

We are passionate about sharing ideas, trends, tips, and stories that help our audience stay informed and connected in today’s fast-changing world. From technology and lifestyle to business, travel, health, and personal development, our blog covers diverse subjects designed to meet the interests of every reader.

Our team of dedicated writers and creators works hard to provide fresh, accurate, and valuable content that sparks curiosity and meaningful conversations. Whether you are here to learn something new, find inspiration, or simply enjoy reading, we are glad to have you as part of our growing community.</p>
          </div>
       </div>
       <div className='mt-4'>
        <h1 className='text-4xl font-extrabold text-gray-800'>Our top Authors</h1>
        <hr  className='text-orange-900 mt-4'/>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-8 gap-4'>
          {
            authors.map((item) => (
              <div className='p-2 bg-white shadow-md rounded-md flex justify-center items-center flex-col'>
                <div className='h-[50px] w-[50px] rounded-full'>
                  <img src={item.img} alt="" />
                </div>
                <h1 className='text-xl text-gray-800 font-extrabold'>{item.name}</h1>
                <p>{item.direct}</p>
                <p className='text-gray-500'>{item.doc}</p>
              </div>
            ))
          }
        </div>
       </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About