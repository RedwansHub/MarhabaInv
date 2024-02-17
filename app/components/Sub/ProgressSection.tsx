'use client'

import './prg.css'
import { useScroll, motion } from 'framer-motion';
import React, { useRef } from 'react'
import AboutUs from './AboutUs';

type Props = {}



const ProgressSection = (props: Props) => {
      const { scrollYProgress } = useScroll();  
  return (
    <div className=''>
        <motion.div
            className="progress-bar-Long"
            style={{ scaleY: scrollYProgress }}
        />    

        <AboutUs />
    </div>
  )
}

export default ProgressSection