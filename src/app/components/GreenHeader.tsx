import React from 'react'
import Image from 'next/image'
import Vector from "@/app/assets/Vector.png";
import { FaFacebook, FaRegEnvelope, FaTwitter, FaYoutube } from "react-icons/fa6";
import {Montserrat} from'@next/font/google';
import { FaInstagram } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { GrCart } from "react-icons/gr";

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
  });

export const GreenHeader = () => {
  return (
    <header className="bg-white shadow-sm border-b mx-auto flex flex-col w-full">
      {/* Top Banner */}
<div className="bg-[#23856D] text-white py-2 text-sm flex justify-between items-center px-8 w-full h-[58px]">
  {/* Left Section */}
  <div className="flex items-center gap-4">
    <Image src={Vector} alt="Phone" width={24} height={24} />
    <h6 className="font-montserrat text-sm font-bold leading-6 tracking-[0.2px] underline-offset-auto decoration-skip-ink-none">
      (225) 555-0118
    </h6>
  </div>

  {/* Center Section */}
  <div className="text-center">
    <div className="flex items-center gap-2 justify-center">
      <FaRegEnvelope />
      <h6 className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">michelle.rivera@example.com</h6></div>
  </div>
  <div className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">Follow Us and get a chance to win 80% off</div>

  {/* Right Section */}
  <div className="flex items-center gap-4">
    <span className="text-sm font-montserrat font-bold leading-6 tracking-[0.2px] text-left underline-offset-auto decoration-skip-ink-none">Follow Us:</span>
    <FaInstagram className="text-white text-xl" />
    <FaYoutube className="text-white text-xl" />
    <FaFacebook className="text-white text-xl" />
    <FaTwitter className="text-white text-xl" />
  </div>
</div>

<div className="w-full px-6 py-4 shadow-sm bg-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="font-Montserrat text-2xl text-[#252B42] font-bold">
          Bandage
        </h1>

        {/* Navigation */}
        <nav className="flex items-center space-x-8 text-sm font-Montserrat font-semibold">
          <a href="/" className="text-gray-600 hover:text-black">
            Home
          </a>
          <div className="flex items-center text-gray-600 hover:text-black">
            <a href="/shop">Shop</a>
            <RiArrowDropDownLine className="text-xl" />
          </div>
          <a href="/about" className="text-gray-600 hover:text-black">
            About
          </a>
          <a href="/blog" className="text-gray-600 hover:text-black">
            Blog
          </a>
          <a href="/contact" className="text-gray-600 hover:text-black">
            Contact
          </a>
          <a href="/pages" className="text-gray-600 hover:text-black">
            Pages
          </a>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-6 text-sm font-semibold">
          {/* Login/Register */}
          <a
            href="#"
            className="text-[#23A6F0] hover:underline flex items-center"
          >
            Login / Register
          </a>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <div className="border-2 border-[#23A6F0] rounded-md p-1">
              <CiSearch className="text-[#23A6F0] text-xl" />
            </div>
            {/* Cart Icon */}
            <div className="flex items-center space-x-1">
              <GrCart className="text-[#23A6F0] text-xl" />
              <span className="text-[#23A6F0] text-xs font-bold">1</span>
              </div>
            {/* Heart Icon */}
            <div className="flex items-center space-x-1">
            <CiHeart className="text-[#23A6F0] text-xl" />
            <span className="text-[#23A6F0] text-xs font-bold">1</span>
            </div>

          </div>
        </div>
      </div>
    </div>

      
      
    </header>
  )
}