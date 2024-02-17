'use client'

import React, { useEffect, useRef} from 'react'
import {motion as m,  useAnimation} from 'framer-motion'
import { once } from 'events'
import { useInView } from 'react-intersection-observer'


type RevealProps = {
    children : React.ReactNode,
    delay?: number | 0.5;
    width? : "fit-content" | '100%',
}
const mainVariant = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -75 },
  }
const TextReveal = ({children, delay, width = "fit-content"} : RevealProps) => {

    const [ref, inView] = useInView()
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect( () => {
      if (inView) {
        mainControls.start("visible")
        slideControls.start("visible")
      } else {
        mainControls.start("hidden")
        slideControls.start("hidden")
      }

    }, [mainControls, inView])
  return (
    <div ref={ref} className={`relative overflow-hidden h-full`}>
        <m.div variants={mainVariant}
            initial="hidden"
            animate= {mainControls}
            transition={{ duration: 1.5, delay: delay}}
        >
            {children}
        </m.div>
    </div>
  )
}

export default TextReveal