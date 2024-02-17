'use client'

import {  motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
type Props = {
    title: string 
}

export default function Description( {title} : Props) {
     
    const phrase = "Behind the Brand: Crafting Moments, Connecting Families.";
    
    const [description, inView] = useInView()
    const slideUp0 = {
        initial: {
            y: "100%",
            opacity:0,
        },
        open: (i : number) => ({
            y: "0%",
            opacity:1,
            transition: {duration: 1.5, delay: 0.05 * i}
        }),
        closed: {
            y: "100%",
            opacity:0,
            transition: {duration: 1.5}
        }
      }
      inView
      useEffect(() => {
        if (inView) {
            slideUp0.open(0)
        } else {
            slideUp0.closed
        }
    }, [inView])
    
    return (

        <div className='w-full h-full'>
            <div ref={description} className={'description text-sm'}>
                <div className={'body '}>
                    <p>
                    { title.split(" ").map( (word, index) => {
                            return <span key={index} className={'mask'}><motion.span variants={slideUp0} custom={index} animate={inView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                        })
                    }
                    </p>
                </div>

            </div>
        </div>
    )
}