import Image from 'next/image'
import React from 'react'
import ImageReveal from '../Motion/ImageReveal'
import TextReveal from '../Motion/TextReveal'
import Reveal from '../Motion/Reveal'
import RevealBox from '../Motion/RevealHeading'
import Link from 'next/link'

type Props = {}

const AboutSection = (props: Props) => {

  const Heading = 'What we do'
  const Content = "We are a significant contributor to our country's economic development, actively participating in a variety of projects aimed at utilizing our natural resources for the benefit of our country. Our most recent initiative involves the creation of the first maize flour processing factory in Mogadishu, utilizing our country's enormous agricultural areas. "
  const Content2 = 'At our core, we are driven by a vision of sustainable progress and community prosperity. Our dedication extends beyond mere business endeavors; we actively seek opportunities to uplift local communities, empower individuals, and foster economic resilience. Through responsible investment and strategic partnerships, we aim to catalyze positive change and create a lasting impact that transcends generations.'

  return (
    
    <div className='w-full h-full  flex justify-center items-center bg-white relative'>
      
      <div className='w-[80%] flex lg:flex-row justify-center items-center flex-col py-8 place-content-center   gap-6 h-full'>
        <div className='h-fit flex flex-col gap-4 pt-8 md:w-[80%] w-full lg:w-[40%] '>
            <Reveal>
              <h2 className='  font-semibold text-xl text-green-600'>{Heading}</h2>
            </Reveal>
              <TextReveal delay={1}>
                <div className='h-full '>
                  <p className='text-black text-sm  w-full  '>{Content}</p>

                </div>
              </TextReveal>
              <div className='w-full'>
                <TextReveal delay={1.5} >
                    <Link href={'/about'} className='rounded-full p-2 '>
                        <h2 className='rounded-full p-2  hover:bg-green-600  w-48 border-2 border-black hover:border-green-600 cursor-pointer duration-500 ease-in-out text-white text-center text-sm bg-black'>
                        Read More
                        </h2>
                    </Link>
                </TextReveal>
                      {/* <div className='w-full h-full'>
                      </div> */}

              </div>
        </div>
        <ImageReveal >
            <div className='w-full h-full   '>
              <Image src={'/Images/invest.svg'} alt='container' width={500} height={500}/>
            </div>
        </ImageReveal>

      </div>
    </div>
  )
}

export default AboutSection