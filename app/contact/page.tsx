'use client'
import React, { useState } from 'react'
import Accordion from '../components/Ui/Accordion'
import Image from 'next/image'
import TitleReveal from '../components/Motion/TitleAnimate'
import { FaLocationDot } from 'react-icons/fa6'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Reveal from '../components/Motion/Reveal'
import { contactStructure } from '@/constants/Interface'
import ImageReveal from '../components/Motion/ImageReveal'
import Footer from '../components/Sub/Footer'

type Props = {}

const ContactPage = (props: Props) => {

    const contactDetails = [
        {
          email: 'info@marhabainvestment.com',
          phone: '+252617994946 +252613333609',
          office: 'A-6-4, TCC, Maka almukarama Street, Mogadishu – Somalia'
        }
      ]
      const [contactData, setContactData] = useState<contactStructure[] | null>(contactDetails);

  return (
    <div className='h-full w-full text-white flex flex-col  overflow-hidden pt-28'>
        <div className='grid lg:grid-cols-12 md:grid-cols-8 grid-cols-1 gap-8 px-8 h-full w-full'>
            <div className='grid lg:col-span-4 md:col-span-3 md:col-start-2 lg:col-start-2 w-full gap-8  h-full '>
                <div className='flex flex-col h-full w-full justify-center items-start   '>
                    <Reveal>
                        <div className=' flex flex-col  h-full gap-2'>
                            <h2 className="lg:text-3xl text-3xl font-semibold tracking-tight text-gray-200">
                                Contact Us
                            </h2>
                            {contactData && (
                                <div className='flex flex-col flex-wrap w-fit gap-2 pt-4'>
                                    <div className=' lg:items-center flex duration-300 ease-in-out hover:text-green-500 gap-4 border-2 border-transparent w-fit hover:border-green-500 rounded-xl p-4 px-6 '>
                                        <MdEmail size={20} />
                                        <p className='text-gray-300 font-medium text-sm'>{contactData[0].email}</p>
                                    </div>
                                    <div className='flex lg:flex-row flex-col lg:items-center duration-300 ease-in-out hover:text-green-500 gap-6 border-2 border-transparent w-fit hover:border-green-500 rounded-xl p-4 lg:px-6 px-6 '>
                                        <div className='flex items-center gap-4'>
                                            <FaPhoneAlt size={20} />
                                            <p className='text-gray-300 font-medium text-sm'>{contactData[0].phone}</p>
                                        </div>

                                    </div>
                                    <div className='w-full '>
                                    </div>
                                </div>
                            ) }
                        </div>
                    </Reveal>
                    <div className='flex flex-col w-full items-end h-full justify-end  gap-2'>
                        <div className='w-full '>
                            {/* <FadeUp> */}
                                <form action="https://getform.io/f/02a724d7-f99f-4586-bd01-d2e2c22a257c" method="POST" 
                                        className="flex flex-col gap-4 w-full " >
                                    <TitleReveal width='100%'>
                                        <input style={{ outline: 'none' }} name='name' type="text" placeholder="Name" className="border-2 w-full border-transparent duration-500 ease-in-out rounded-lg p-3  bg-white/10 hover:border-[#610F7F]  placeholder-white/50 font-semibold text-white active:outline-none text-sm" />
                                    </TitleReveal>
                                    <TitleReveal delay={0.5}>
                                    <input style={{ outline: 'none' }} name='email' type="text"  placeholder="Email Address" className=" w-full border-2 border-transparent duration-500 ease-in-out rounded-lg p-3  bg-white/10 hover:border-[#610F7F]  placeholder-white/50 font-semibold text-white active:outline-none text-sm" />
                                    </TitleReveal>
                                    <TitleReveal delay={0.6}>
                                    <textarea   placeholder="Message" name='message' className=" w-full grid col-span-2 border-2 border-transparent duration-500 ease-in-out rounded-lg p-3  bg-white/10 hover:border-[#610F7F]  placeholder-white/50 font-semibold text-white active:outline-none text-sm" />
                                    </TitleReveal>

                                    <Reveal>
                                        <div className='flex  w-full place-items-center'>
                                            <button type='submit' className=" bg-green-600 text-white rounded-lg p-4 w-full hover:bg-green-600/70 duration-300 ease-in-out font-semibold" >Send</button>
                                        </div>
                                    </Reveal>
                                </form>
                            {/* </FadeUp> */}
                        </div>        
                    </div>
                </div>
            
            </div>
            <div className='grid lg:col-span-3 md:col-span-3 md:col-start-5 lg:col-start-6 place-items-center place-content-center   w-full   '>
                     
            <ImageReveal>
                <Image src={'/Images/map.svg'} alt='map' width={300} height={300}  />
            </ImageReveal>
            
            </div>
            <div className='p-8 grid w-full lg:col-span-3 md:col-span-6 md:col-start-2 lg:col-start-9   '>
                <div className='  w-full flex flex-col gap-4  '>
                        <TitleReveal>
                            <h2 className='text-bold text-xl'>Our Offices   </h2>
                        </TitleReveal>

                        <Accordion />    
                </div>
    
            </div>

        </div>


    <div className='pt-16'>
        <Footer />
    </div>
    </div>
  )
}

export default ContactPage