'use client'

import React, { useEffect, useRef} from 'react'
import {motion as m,  useAnimation} from 'framer-motion'
import { once } from 'events'
import { useInView } from 'react-intersection-observer'


type RevealProps = {
    children : React.ReactNode,
    width? : "fit-content" | '100%',
    idx : number,
    delay: number | 0.5;
}
const mainVariant = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 75 },
  }
const RevealBox = ({children, idx, delay, width = "fit-content"} : RevealProps) => {

    const [ref, inView] = useInView()
    const mainControls = useAnimation()

    useEffect( () => {
      if (inView) {
        mainControls.start("visible")
      } else {
        mainControls.start("hidden")
      }

    }, [mainControls, inView])
  return (
    <div ref={ref} className={`relative overflow-hidden h-full   ${width}`}>
        <m.div variants={mainVariant}
            initial="hidden"
            animate= {mainControls}
            transition={{ duration: 1.5, delay: delay + (0.2 * idx)}}
        >
            {children}
        </m.div>
    </div>
  )
}

export default RevealBox