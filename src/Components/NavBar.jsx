import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaPinterest } from 'react-icons/fa'
import { FaCross, FaXmark } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import "../index.css"
function NavBar() {
    const navItems = [
        {path:"/Home",link:"Home"},
        {path:"/About",link:"About"},
        {path:"/Service",link:"Service"},
        {path:"/Blog",link:"Blog"},
        {path:"/Contact",link:"Contact"}
    ]
    const [open,setOpen] = useState(false)
  return (
    <header className='fixed w-full bg-black'>
        <nav className='p-4 max-w-7xl md:w-[80%] mx-auto px-2 flex justify-between items-center font-serif'>
            <h1 className='text-white font-serif text-3xl'>Design<span className='text-orange-800'>DK</span></h1>
            <ul className='text-white md:flex gap-4 hidden'>
                {
                    navItems.map(({path,link}) => (
                        <li className='text-lg'>
                            <NavLink to={path} className={({isActive,pending}) => 
                            isActive ? "active" :
                            pending ? "pending" : ""
                            
                            } key={link}>{link}</NavLink>
                        </li>
                    ))
                }
            </ul>
            {/* icons */}
            <div className='hidden md:flex gap-4 text-white transition-all items-center duration-300'>
                <FaFacebook className='hover:text-orange-800'/>
                <FaInstagram  className='hover:text-orange-800'/>
                <FaPinterest  className='hover:text-orange-800'/>
                <button className='text-white bg-orange-800 py-2 px-8 rounded-md cursor-pointer'>Login</button>
            </div>
            {/* mobile view */}
            <div className='block md:hidden' onClick={() => setOpen(!open)}>
               
                {
                    open ? <FaXmark className='text-white text-2xl'/> :  <FaBars className='text-white text-2xl'/>
                }
            </div>
        </nav>
        {/* mobile navigation */}
        <div className=''>
            <ul className={`bg-gray-100 py-2 space-y-5 mt-17 w-full md:hidden ${open ? 'fixed top-0 left-0 transition-all duration-300' :'hidden'}`}>
             {
                    navItems.map(({path,link}) => (
                        <li className='text-lg px-9 font-serif'>
                             <NavLink to={path} className={({isActive,pending}) => 
                            isActive ? "active" :
                            pending ? "pending" : ""
                            
                            } key={link}  onClick={() => setOpen(!open)}>{link}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </div>
    </header>
  )
}

export default NavBar