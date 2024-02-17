import React, { useState } from 'react'
import Form from '../Ui/Form';
import Image from 'next/image';
import Accordion from '../Ui/Accordion';
import { contactStructure } from '@/constants/Interface';
import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Reveal from '../Motion/Reveal';
import TitleReveal from '../Motion/TitleAnimate';

type Props = {}

const ContactSection = (props: Props) => {
  const contactDetails = [
    {
      email: 'info@marhabainvestment.com',
      phone: '+252617994946 +252613333609',
      office: 'A-6-4, TCC, Maka almukarama Street, Mogadishu – Somalia'
    }
  ]
  const [contactData, setContactData] = useState<contactStructure[] | null>(contactDetails);
  return (
    <div className='w-full h-full bg-[#1D1D1D] text-white'> 
    <div className='lg:px-36 md:px-24 px-2 lg:py-24 py-12'>
            <div className='w-full grid lg:grid-cols-2 grid-cols-1 lg:place-content-between place-content-center gap-8'>
                <Reveal>
                    <div className=' flex flex-col justify-center gap-2'>
                        <h2 className="lg:text-5xl text-3xl font-semibold tracking-tight text-gray-200">
                            Contact Us
                        </h2>
                        <h2 className="lg:text-xl text-lg font-medium  text-green-600">
                            Get in touch with Us
                        </h2>
                        {contactData && (
                            <div className='flex flex-col flex-wrap w-full gap-2 pt-4'>
                                <div className=' lg:items-center flex flex-col lg:flex-row md:flex-row duration-300 ease-in-out hover:text-green-500 gap-4 border-2 border-transparent w-full hover:border-green-500 rounded-xl p-4 px-6 '>
                                    <MdEmail size={28} />
                                    <p className='text-gray-300 font-medium text-xs sm:text-sm'>{contactData[0].email}</p>
                                </div>
                                <div className='flex lg:flex-row flex-col lg:items-center duration-300 ease-in-out hover:text-green-500 gap-6 border-2 border-transparent w-fit hover:border-green-500 rounded-xl p-4 lg:px-6 px-6 '>
                                    <div className='flex items-center gap-4'>
                                        <FaPhoneAlt size={28} />
                                        <p className='text-gray-300 font-medium text-sm'>{contactData[0].phone}</p>
                                    </div>

                                </div>
                                <div className='flex lg:items-center duration-300 ease-in-out hover:text-green-500 gap-4 border border-transparent w-full hover:border-green-500 rounded-xl  p-4 px-6 '>
                                    <FaLocationDot size={28} />
                                    <p className='text-gray-300 font-medium text-sm'>{contactData[0].office}</p>
                                </div>
                            </div>
                        ) }
                    </div>
                </Reveal>
                <div className='p-12'>
                    {/* <FadeUp> */}
                        <form action="https://getform.io/f/02a724d7-f99f-4586-bd01-d2e2c22a257c" method="POST" 
                                className="flex flex-col gap-4 " >
                            <TitleReveal width='100%'>
                                <input style={{ outline: 'none' }} name='name' type="text" placeholder="Name" className="border-2 w-full border-transparent duration-500 ease-in-out rounded-lg p-3  bg-white/10 hover:border-[#610F7F]  placeholder-white/50 font-semibold text-white active:outline-none text-sm" />
                            </TitleReveal>
                            <TitleReveal delay={0.5}>
                            <input style={{ outline: 'none' }} name='email' type="text"  placeholder="Email Address" className=" w-full border-2 border-transparent duration-500 ease-in-out rounded-lg p-3  bg-white/10 hover:border-[#610F7F]  placeholder-white/50 font-semibold text-white active:outline-none text-sm" />
                            </TitleReveal>
                            <TitleReveal delay={0.6}>
                            <textarea  placeholder="Message" name='message' className=" w-full grid col-span-2 border-2 border-transparent duration-500 ease-in-out rounded-lg p-3  bg-white/10 hover:border-[#610F7F]  placeholder-white/50 font-semibold text-white active:outline-none text-sm" />
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
  )
}

export default ContactSection