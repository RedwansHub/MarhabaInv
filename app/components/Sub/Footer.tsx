import Image from 'next/image'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='w-full lg:px-24 px-6  h-full pb-6 flex lg:flex-row md:flex-row flex-col gap-4 text-gray-500 justify-evenly items-center'>
            
             
            <div className='flex justify-center items-center gap-4'>
                <div className='py-4'>
                  <Image src={'/Images/Logo.png'} width={50} height={50} alt=''/>
                </div>
                <a href='/' className={`flex flex-col `}>
                  <h1  className=' text-sm text-white'>
                    Marhaba 
                  </h1>
                    <span className='text-green-400 text-xs'>Investment</span>
                </a>
          </div>  
          
            <div>
            <ul className={` gap-4 flex  text-xs`}>
          <li className='px-2 py-1 hover:border-b hover:text-green-400/50 hover:border-green-400/50 '>
            <a href='/'>Home</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400/50 hover:border-green-400/50'>
            <a href='/about'>About</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400/50 hover:border-green-400/50'>
            <a href='/divisions'>Investment</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400/50 hover:border-green-400/50'>
            <a href='/services'>Services</a>
          </li>
          <li className='px-2 py-1 hover:border-b hover:text-green-400/50 hover:border-green-400/50'>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
            </div>

            
                <div className='w-fit text-xs'>
                  <h2>All rights reserved. @ 2024 Marhaba Investment.</h2>
                </div>
    </div>
  )
}

export default Footer