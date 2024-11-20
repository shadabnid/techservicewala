import Link from 'next/link'
import React from 'react'

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-blue-500 text-white py-6 px-8'>
            <ul className='flex justify-around font-orbitron '>
                <Link href="/AboutUs" className='hover:text-bgButtonHover'><li>About</li></Link>
                <Link href="/Services" className='hover:text-bgButtonHover'> <li>Services</li></Link>
                <Link href="/ContactUs" className='hover:text-bgButtonHover'><li>Contact</li></Link>
                <Link href="/career" className='hover:text-bgButtonHover'><li>career</li></Link>
            </ul>

            <div className='mt-8 md:mx-[7rem] md:flex md:justify-between'>

                <div className='flex gap-[12rem] ml-1'>
                    {/* <span>Privacy Policy</span>
                    <span>Terms of Use</span> */}
                    <span>Mobile : +919628995757</span>
                </div>
                {/* <div className='flex gap-4 text-[1.2rem] text-white mt-6 md:mt-0'>
                    <Link href="/"><FaLinkedin /></Link>
                    <Link href="/"><FaSquareXTwitter /></Link>
                    <Link href="/"><FaFacebookSquare /></Link>
                    <Link href="/"><FaInstagramSquare /></Link>
                </div> */}
            </div>
        </div>
    )
}

export default Footer
