import React from 'react';
import {Montserrat} from'@next/font/google';
import Image from 'next/image';
import img1 from '@/app/assets/img1.png';
import Link from 'next/link';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'],
  });


const HeroSection = () => {
  return (
    <div className="relative w-full h-auto  flex items-center justify-center bg-[#FAFAFA]">
      {/* Left Content */}
      <div className="absolute center px-10 top-1/2 transform -translate-y-1/2 text-white space-y-4 max-w-md">
        <p className="uppercase text-sm tracking-wide">Summer 2020</p>
        <h1 className="text-2xl md:text-4xl sm:text-sm lg:6xl font-bold leading-tight">
          New Collection
        </h1>
        <p className="text-sm md:text-lg font-light py-2">
          We know how large objects will act, but things on a small scale.
        </p>
        <Link href="/shop" >
        <button className="bg-green-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-green-600">
          Shop Now
        </button>
        </Link>
      </div>

      {/* Centered Image */}
      <div className="w-[100%]">
        <Image
          src={img1}
          alt="Shop"
          layout="responsive"
          width={1440}
          height={716}
          className="rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default HeroSection;
