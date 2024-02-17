import React from 'react'
import { Poppins } from "next/font/google";
import Image from 'next/image';
import Description from '../Sub/Descript';
import Reveal from '../Motion/Reveal';
import RevealBox from '../Motion/RevealHeading';

const font = Poppins({ subsets: ["latin"], weight: '300' });
const fontBold = Poppins({ subsets: ["latin"], weight: '500' });

type Props = {
  title: string,
  image: string,
  size: number,
}

 const Example = ({title, image, size}: Props) => { 
   return (
    <div  className='group overflow-hidden relative w-full cursor-pointer rounded-xl'>
      <Image src={image} alt='image' width={size} height={size} className='group-hover:opacity-75 group-hover:scale-105  rounded-xl shadow-md duration-300 ease-in-out'/>
      <div className='absolute -bottom-16 left-0 bg-black/50 py-2 group-hover:bottom-0 px-8 w-full transition-all duration-500 ease-in-out '>
        <h2 className=' text-white'>{title}</h2>
      </div>
    </div>
   )
 }

const IntroSection = () => {

const sectors = [
  {size: 350, title: 'Real Estate', image: '/images/estate.png'},
  {size: 350, title: 'General Trading', image: '/images/general.jpg'},
  {size: 350, title: 'Agriculture', image: '/images/agriculture.jpg'},
  {size: 400, title: 'Industrial', image: '/images/industry.png'},
]
const text = 'Marhaba Investment - a subsidiary of  Marhaba Group of companies that specializing in general trading, real estate, agriculture, and industries investment.'
  return (
    <div className='w-full h-full '>
      <div className='grid place-items-center gap-6 w-full h-full lg:py-8'>
        <div className='flex flex-col lg:w-[65%] md:w-[80%] w-full'>
        <Description title={text} />          
        </div>
        
      <div className=' w-fit h-fit  grid  lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 place-items-center'>
        {sectors.map( (i, index) => (
          <div key={i.title}>
            <RevealBox delay={1} idx={index}>
              <Example title={i.title} image={i.image}  size={i.size}/>
            </RevealBox>

          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default IntroSection