import { OurClients } from '@/constants/data'
import Image from 'next/image'
import React from 'react'
import RevealBox from '../Motion/RevealHeading'
import TitleReveal from '../Motion/TitleAnimate'

type Props = {}

const Clients = (props: Props) => {
  return (
    <div className='h-full w-full py-8 text-black '>
        <div className='flex justify-center gap-12 flex-col items-center w-full h-full lg:px-24 px-12'>
            <TitleReveal>
                <h2 className='font-semibold text-green-500'>Our Clients</h2>
            </TitleReveal>
        <div className='grid place-items-center grid-cols-3  lg:grid-cols-6 gap-4 h-full items-center w-full '>
            {OurClients.map( i => (
                <div className='w-full ' key={i.id}>
                    <RevealBox delay={1} idx={i.id}>
                        <Image src={i.src} alt='logo' width={i.size} height={i.size}/>
                    </RevealBox>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Clients