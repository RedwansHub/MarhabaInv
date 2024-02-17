'use client'

import { useAnimation, useScroll, motion } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import ImageReveal from '../Motion/ImageReveal'
import { useInView } from 'react-intersection-observer'

type Props = {
    title?: string
    children: React.ReactNode
    imgSrc?: string[]
    
}
const Items = ( { title, children, imgSrc } : Props ) => {
    const [ref, inView] = useInView()
    const slideControls = useAnimation()
    const mainVariant = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -75 },
      }
    useEffect( () => {
      if (inView) {
        slideControls.start("visible")
      } else {
        slideControls.start("hidden")
      }

    }, [slideControls, inView])
  
    return (
      <section className='h-full w-full lg:grid md:grid flex flex-col lg:grid-cols-11 md:grid-cols-6  gap-2'>
            <div className='relative col-span-2 lg:col-span-3  md:col-span-2  w-full p-2 lg:p-8 lg:h-full md:h-full  h-20 '>
                <div ref={ref} className='px-8  w-full '>
                    <motion.h3 
                         variants={mainVariant}
                         initial="hidden"
                         animate= {slideControls}
                         transition={{ duration: 1.5, delay: 0.1}}
                        className='title text-white w-full'>
                        {title}
                    </motion.h3>
                </div>
            </div>
            <div className=' w-full h-fit text-white col-span-4 p-8'>
                
                {children}
            </div>
            <div className='h-fit  w-full lg:col-span-3 md:col-span-6 col-span-4  flex flex-col justify-center items-center '>
                    <div className='h-fit w-fit flex lg:flex-col flex-col md:flex-row gap-4'>
                    {imgSrc && imgSrc.map((img, index) => (
                        <ImageReveal key={index}>
                            <Image src={img ? img : ''} alt='image' width={500} height={500} className='rounded-xl ' />
                        </ImageReveal>
                    ))}

                    </div>
            </div>
      </section>
    );
}

export default Items

