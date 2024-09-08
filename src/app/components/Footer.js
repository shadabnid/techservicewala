import Link from 'next/link'
import React from 'react'

import { FaLinkedin } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-[#242529] text-[#505154] py-6 px-8'>
            <ul className='flex justify-around font-orbitron '>
                <Link href="/" className='hover:text-bgButtonHover'><li>About</li></Link>
                <Link href="/" className='hover:text-bgButtonHover'> <li>Services</li></Link>
                <Link href="/" className='hover:text-bgButtonHover'><li>Contact</li></Link>
                <Link href="/" className='hover:text-bgButtonHover'><li>career</li></Link>
            </ul>

            <div className='mt-8 md:mx-[7rem] md:flex md:justify-between'>

                <div className='flex gap-5'>
                    <span>Privacy Policy</span>
                    <span>Terms of Use</span>
                </div>
                <div className='flex gap-4 text-[1.2rem] text-white mt-6 md:mt-0'>
                    <Link href="/"><FaLinkedin /></Link>
                    <Link href="/"><FaSquareXTwitter /></Link>
                    <Link href="/"><FaFacebookSquare /></Link>
                    <Link href="/"><FaInstagramSquare /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer