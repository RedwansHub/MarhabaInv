'use client'

import './prg.css'
import { useScroll, motion } from 'framer-motion';
import Image from 'next/image';
import React, { Children, useRef } from 'react'
import Items from './Items';
import { data } from '@/constants/data';
import Footer from './Footer';
import { Poppins } from "next/font/google";
import TextReveal from '../Motion/TextReveal';
import Reveal from '../Motion/Reveal';
import RevealHeading from '../Motion/RevealHeading';
import ImageReveal from '../Motion/ImageReveal';
import PopBox from '../Ui/PopBox';
import RevealBox from '../Motion/RevealHeading';
const font = Poppins({ subsets: ["latin"], weight: '400' });


const AboutUs = () => {
    const cont = 'Marhaba investment is a subsidiary company licensed by Marhaba Group of Companies. Marhaba group of companies is a holding company that has multiple independent companies in different sectors under its control all working towards their goals through their individual corporate strategic plan, Marhaba investment success stems from its founding operational principles. Groundbreaking innovations that set it apart from any other investment company in the region and most importantly Crystal-clear transparency with clients.'
    const cont2 = 'With deep emphasis on the best of international practices as well as principles of Islamic law and shariah compliant investment. Marhaba investment continues to operate successfully in multiple regions.'
    const cont3 = "We specialize in various sectors including general trading, agriculture, industries, and real estate. Our contributions to the Somali economy are significant, as we play a vital role in the nation's development. Through various projects, we harness the country's natural resources for sustainable growth. "
    const cont4 = 'We also provide financial services for small businesses and household-based entrepreneurs to increase their capital asset and expand their businesses.'

  return (
    <>
    <div className={`${font.className} h-full w-full p-8 lg:p-12`}>
        <Items title='Who we are' imgSrc={["/Images/residence.png"]}>
            <div className='w-full flex flex-col gap-6 lg:py-32 text-sm'>
                <Reveal >
                    <p>{cont}</p>
                </Reveal>
                <Reveal delay={0.8}>
                    <p>{cont2}</p>
                </Reveal>
                <div className='flex flex-col gap-2'>
                    <ImageReveal>
                        <h2 className='font-bold text-green-400'>Headquarters</h2>
                    </ImageReveal>
                        <Reveal delay={1.2}>
                    <h2 className='text-white/50'>Mogadishu, Somalia</h2>
                        </Reveal>
                </div>
            </div>
        </Items>
        <Items title='What we do' imgSrc={["/Images/industrial.png", "/Images/agriculture.jpg" ]}>
            <div className='w-full flex flex-col gap-8 lg:py-32 text-sm'>
                <Reveal>
                    <p>{cont3}</p>
                </Reveal>
                
                <div className='flex flex-col gap-2'>
                    <ImageReveal>
                        <a href='/' className='font-semibold py-8 text-lg text-green-400 cursor-pointer '>Investment Divisions</a>
                    </ImageReveal>
                    <div>
                        <Reveal delay={1.2}>
                            <ul className='divisons grid grid-cols-2 gap-2  text-white/50'>
                                <li className=''>General Trading</li>
                                <li className=''>Industrial</li>
                                <li className=''>Agriculture</li>
                                <li className=''>Real Estate</li>
                            </ul>
                        </Reveal>
                    </div>
                </div>

                <Reveal delay={2}>
                    <p>{cont4}</p>
                </Reveal>
                
            </div>
        </Items>
    </div>
    <div className='w-full lg:p-48 p-12 text-white flex flex-col gap-12'>
        <div className='flex lg:flex-row flex-col justify-between lg:gap-48 gap-16'>
            <div className='w-full flex flex-col lg:gap-8 gap-4 h-full '>
                <TextReveal >
                <h2>Our Vision</h2>
                </TextReveal>
                <Reveal>
                <p className='text-sm'>To become the foremost investment company in the region, recognized for our commitment to excellence, integrity, and ethical business practices.</p>
                </Reveal>
            </div>
            <div className='w-full h-full flex flex-col gap-4 lg:gap-8 '>
                <TextReveal>
                <h2 className=''>Our Mission</h2>
                </TextReveal>
                <Reveal>
                    <p className='text-sm'>To be a key player in the economic development of Somalia through strategic investments and sustainable projects.</p>
                </Reveal>
            </div>
        </div>

        <div className='flex flex-col w-full lg:justify-center md:justify-center justify-start gap-4 lg:items-center'>
                <TextReveal>
                    <h2 className=''>Our Values</h2>

                </TextReveal>
                <Reveal delay={1}>
                    <h2 className='text-base lg:w-96 w-full lg:text-center md:text-center'>At Marhaba Investment, we uphold a set of core values that guide our actions and decisions.</h2>
                </Reveal>

                <div className=' grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 py-6 lg:gap-8 md:gap-6 gap-4 text-white'>
                    { data.map(i => (
                        <div className='w-80 text-base overflow-hidden ' key={i.id}>
                            <RevealBox delay={1} idx={i.id}>
                                <PopBox title={i.name} content={i.desc} />
                            </RevealBox>
                        </div>
                    ))}
                </div>
        </div>
    </div>
    <Footer />

    </>
  )
}

export default AboutUs