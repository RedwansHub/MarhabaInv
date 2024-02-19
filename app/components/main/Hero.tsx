import Image from 'next/image'
import React from 'react'
import TitleReveal from '../Motion/TitleAnimate'
import Reveal from '../Motion/Reveal'
import { AnimateZoomIn } from '../Motion/Animation'

type Props = {}

const Hero = (props: Props) => {

  const Heading = 'Innovative Progress: Investing in Sustainable Development.'
  const Content = 'Join us in promoting progress through strategic investments in sustainable development. Together, we can create a world where innovation prospers communities thrive, and opportunities abound.'

  return (
    <div className='h-screen landing w-full lg:px-24 md:px-12 px-8'>
      <div className='w-full h-full flex items-center justify-center text-white  pt-24 md:pt-16 lg:p-16 sm:p-8'>
        <div className='flex flex-col lg:p-4 gap-12 lg:w-[60%] md:w-[80%] w-full'>
          <Reveal >
            <h2 className='text-center lg:text-5xl md:text-4xl text-4xl'>{Heading}</h2>
          </Reveal>
          <TitleReveal delay={0.8}>
          <p className='text-center text-gray-300'>{Content}</p>
          </TitleReveal>
          <div className='w-full p-2 flex justify-center'>
          <AnimateZoomIn delay={1.5}>
            <div className='border-2 rounded-full px-16 hover:bg-green-500/50 hover:border-transparent  cursor-pointer duration-300 ease-in py-3 text-center'>
              Explore
            </div>
          </AnimateZoomIn>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Hero