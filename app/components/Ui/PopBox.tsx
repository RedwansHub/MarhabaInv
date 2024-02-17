'use client'

import React, { useState } from 'react'
import {AnimatePresence, motion} from 'framer-motion'

type Props = {
  title: string,
  content: string
}

const PopBox = ({title, content}: Props) => {

  const [isOpen, setIsOpen] = useState(false);
  const boxVariants = {
    open: { opacity: 1, height: 'auto' },
    closed: { opacity: 0, height: 0 },
  }
  return (
    <div className='Pop-container'>
      <motion.div onClick={() => setIsOpen(!isOpen)} className='p-4 cursor-pointer justify-center items-center card border-2 flex flex-col gap-2  hover:border-green-400  duration-300 ease-in-out rounded-md w-full'>
        <motion.h2 layout='position' className='font-semibold text-green-400 ' >{title}</motion.h2>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial="closed"
              animate="open"
              exit="closed"
              variants={boxVariants}
              transition={{ duration: 0.5 }}
            >
              <p className='text-sm text-center'>{content}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default PopBox