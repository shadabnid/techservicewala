"use client"
import Link from 'next/link';
import React from 'react'
import { useState } from 'react';

import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  }
  return (
    <>
      <nav className='sticky top-0 z-40 px-4 py-6 bg-[#181b20]'>

        <div className='flex justify-between items-center '>
          <span className='text-[1.5rem] text-bgButton'>LOGO</span>
          <MenuIcon
            className='text-[1.5rem] text-bgButton hover:bg-bgButtonHover cursor-pointer lg:hidden'
            onClick={toggleVisibility}
          />
          <div className='hidden lg:block text-bgButton font-semibold'>
            <ul className='flex gap-6'>
              <Link href="/"><li className='cursor-pointer hover:text-bgButtonHover'>Home</li></Link>
              <Link href="/"><li className='cursor-pointer hover:text-bgButtonHover'>Services</li></Link>
              <Link href="/"><li className='cursor-pointer hover:text-bgButtonHover'>About</li></Link>
              <Link href="/"><li className='cursor-pointer hover:text-bgButtonHover'>Contact Us</li></Link>
            </ul>
          </div>
        </div>
      </nav>

      <div className={`fixed top-0 right-0 lg:hidden w-[80%]   max-w-[300px] h-screen bg-[#181b20] text-white font-semibold z-50  flex flex-col
          transform transition-transform ease-in duration-500 ${isVisible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='relative left-[88%] top-[1rem] '>
          <CloseIcon
            className=' text-[1.5rem]'
            onClick={handleClose}
          />
        </div>
        <div className='flex flex-col gap-10 mt-16 justify-center items-center'>
          <Link href="/" className='text-[1.3rem]' onClick={handleClose}>Home</Link>
          <Link href="/" className='text-[1.3rem]' onClick={handleClose}>Services</Link>
          <Link href="/" className='text-[1.3rem]' onClick={handleClose}>About</Link>
          <Link href="/" className='text-[1.3rem]' onClick={handleClose}>Contact Us</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
