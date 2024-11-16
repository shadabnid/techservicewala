"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation"; // Use usePathname for App Router
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { IoCloseSharp as CloseIcon } from "react-icons/io5";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleVisibility = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const isActive = (path) => pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-40 px-4 py-6 bg-blue-500">
        <div className="flex justify-between items-center">
          <span className="text-[1.5rem] text-white">LOGO</span>
          <MenuIcon
            className="text-[1.5rem] text-white hover:bg-bgButtonHover cursor-pointer lg:hidden"
            onClick={toggleVisibility}
          />
          <div className="hidden lg:block text-white font-semibold">
            <ul className="flex gap-6">
              <Link href="/">
                <li
                  className={`cursor-pointer ${
                    isActive("/") ? "text-pink-500" : "hover:text-bgButtonHover"
                  }`}
                >
                  Home
                </li>
              </Link>
              <Link href="/Services">
                <li
                  className={`cursor-pointer ${
                    isActive("/Services")
                      ? "text-pink-500"
                      : "hover:text-bgButtonHover"
                  }`}
                >
                  Services
                </li>
              </Link>
              <Link href="/AboutUs">
                <li
                  className={`cursor-pointer ${
                    isActive("/AboutUs")
                      ? "text-pink-500"
                      : "hover:text-bgButtonHover"
                  }`}
                >
                  About
                </li>
              </Link>
              <Link href="/ContactUs">
                <li
                  className={`cursor-pointer ${
                    isActive("/ContactUs")
                      ? "text-pink-500"
                      : "hover:text-bgButtonHover"
                  }`}
                >
                  Contact Us
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 lg:hidden w-[80%] max-w-[300px] h-screen bg-[#181b20] text-white font-semibold z-50 flex flex-col transform transition-transform ease-in duration-500 ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="relative left-[88%] top-[1rem]">
          <CloseIcon className="text-[1.5rem]" onClick={handleClose} />
        </div>
        <div className="flex flex-col gap-10 mt-16 justify-center items-center">
          <Link href="/" onClick={handleClose}>
            <span
              className={`text-[1.3rem] ${
                isActive("/") ? "text-pink-500" : ""
              }`}
            >
              Home
            </span>
          </Link>
          <Link href="/Services" onClick={handleClose}>
            <span
              className={`text-[1.3rem] ${
                isActive("/Services") ? "text-pink-500" : ""
              }`}
            >
              Services
            </span>
          </Link>
          <Link href="/AboutUs" onClick={handleClose}>
            <span
              className={`text-[1.3rem] ${
                isActive("/AboutUs") ? "text-pink-500" : ""
              }`}
            >
              About
            </span>
          </Link>
          <Link href="/ContactUs" onClick={handleClose}>
            <span
              className={`text-[1.3rem] ${
                isActive("/ContactUs") ? "text-pink-500" : ""
              }`}
            >
              Contact Us
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
