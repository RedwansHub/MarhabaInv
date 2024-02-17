'use client'
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import Image from 'next/image';
import { Poppins } from "next/font/google";
const fontlight = Poppins({ subsets: ["latin"], weight: '300' });
const font = Poppins({ subsets: ["latin"], weight: '400' });
const fontbold = Poppins({ subsets: ["latin"], weight: '600' });


const Header = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 590) {
        setColor('#1D1D1D');
        setTextColor('#ffffff');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-30 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center lg:px-24 md:px-2  px-4 text-white'>
          <div className='flex justify-center items-center gap-4'>
            <div className='py-4'>
              <Image src={'/Images/Logo.png'} width={50} height={50} alt=''/>
            </div>
              <a href='/' className={`flex flex-col ${font.className}`}>
                <h1 style={{ color: `${textColor}` }} className=' text-sm'>
                  Marhaba 
                </h1>
                  <span className='text-green-400 text-xs'>Investment</span>
              </a>

          </div>
        <ul style={{ color: `${textColor}` }} className={`${fontlight.className} hidden gap-4 sm:flex text-sm`}>
          <li className='px-2 py-1 hover:border-b hover:text-green-400 hover:border-green-400 '>
            <a href='/'>Home</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400 hover:border-green-400'>
            <a href='/about'>About</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400 hover:border-green-400'>
            <a href='/divisions'>Investment</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400 hover:border-green-400'>
            <a href='/services'>Services</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400 hover:border-green-400'>
            <a href='/contact'>Contact</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={30} style={{ color: 'white',}} />
          ) : (
            <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div className={nav ? 'fixed left-0 top-0 w-[100%] h-fit   border-r border-r-gray-900 bg-gradient-to-r from-[#0a1b11]  to-[#48BB78]/40 ease-in-out duration-500'
                             : 'fixed left-[100%] ease-in-out duration-500'}>
          <div className='flex px-8 items-center p-2'>
            <div className='py-4'>
              <Image src={'/Images/Logo.png'} width={75} height={75} alt=''/>
            </div>
              <a href='/' className={`flex flex-col ${font.className}`}>
                <h1 style={{ color: `${textColor}` }} className=' text-base'>
                  Marhaba 
                </h1>
                  <span className='text-green-400 text-xs'>Investment</span>
              </a>
          </div>
           <ul className='uppercase p-4'>
              <li className='p-4 hover:text-green-400'><a href="/" >Home</a> </li>
              <li className='p-4 hover:text-green-400'><a href="/about" >About</a> </li>
              <li className='p-4 hover:text-green-400'><a href="/divisions" >Investment</a> </li>
              <li className='p-4 hover:text-green-400'><a href="/services" >Services</a> </li>
              <li className='p-4 hover:text-green-400'><a href="/contact" >Contact</a> </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
