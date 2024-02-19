'use client'
import { useScroll, motion } from 'framer-motion';
import React, { useState } from 'react'
import { Tab } from '@headlessui/react'
import Image from 'next/image';

import { Poppins } from "next/font/google";
import Link from 'next/link';
import { TbBabyCarriage } from "react-icons/tb";
import TextReveal from '../components/Motion/TextReveal';
import ImageReveal from '../components/Motion/ImageReveal';
import Reveal from '../components/Motion/Reveal';
import TitleReveal from '../components/Motion/TitleAnimate';
import { AnimateRight, AnimateDown  } from '../components/Motion/Animation';
import RevealBox from '../components/Motion/RevealHeading';
import { BiBlanket } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { GiFlour } from "react-icons/gi";
import Footer from '../components/Sub/Footer';
const font = Poppins({ subsets: ["latin"], weight: '300' });
const fontBold = Poppins({ subsets: ["latin"], weight: '500' });


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
type Props = {}

const DivisionPage = (props: Props) => {
      const { scrollYProgress } = useScroll();
      const [InvestDivisions] = useState({
        'General Trading': [ {
            id: 1,
            title: 'General Trading Investment',
            description: "The ever-increasing economy and Africa's trading hub has heightened the growth of the trading industry in East Africa, especially Somalia. Ranked as one of the top developing countries, supported by the country's natural resources and favorable business conditions, growth is imminent. more and more businesses are opening their doors and expanding in the market.",
            Content: '',
            Content2: '',
            subtitle : 'Products range',
            type: [
                {id: 1, icon: <GiFlour size={20} />, title: 'Foodstuffs'},
                {id: 2, icon: <BiBlanket size={20} />, title: 'Beauty Care'},
                {id: 3, icon: <TbBabyCarriage size={20} />, title: 'Baby Products'},
                {id: 4, icon: <BsTools size={20} />, title: 'Building Materials'},
            ],
            images:  [
                {id: 1, title: 'products', size: 600, src: '/Images/generalProducts.png'},
             ],
            companies: [
                // {id: 2, logo: '/Images/Logo/high-life.png'},
                {id: 2, size: 120, logo: '/Images/Logo/Mtissue.svg'},    
                {id: 3, size: 100, logo: '/Images/Logo/Unicare.svg'},    
            ],
        }, ],
        Agriculture: [{
            id: 2,
            title: 'Agriculture Investment',
            description: "As a leading investment company dedicated to the agricultural sector, we embark on a mission to harness the immense potential of farming enterprises worldwide. With a firm belief in the power of agriculture to drive economic growth, empower communities, and sustainably feed the planet, we stand at the forefront of transformative change in the agricultural landscape.",
            type: [],
            subtitle: 'Our Aim',
            Content2: '',
            Content: 'At our core, we thrive on collaborating with ambitious management teams, crafting supportive investment frameworks, and leveraging specialized knowledge to foster the growth of high-potential agribusiness ventures. Through strategic investments, we bolster specific agricultural sub-sectors, tapping into the network of smallholder farmers to uplift countless families across Somalia.',
            
            images:
            [
               {id: 1, title: 'Agro', size: 600, src: '/Images/Agro.jpg'},
            ],
            companies:
             [
                {id: 1, size: 200, logo: '/Images/Logo/marhabaAgro.svg'},
            ],
        }, ],
        Industrial: [
        {
            id: 3,
            title: 'Industrial Investment',
            description: "We invest in the industries sector by grasping new opportunities that are economically viable and add value to the growing economy, especially projects that complement the activities of the other companies in the Group.",
            type: [],
            subtitle: 'Our Role',
            Content: "Marhaba investment plays a major role of a developer in the industry segment through selected projects, ongoing research, and acquisition of shares. The company is expanding the portfolio through participation or acquisition of factories and construction of new factories with the latest technology, by obtaining the licenses and necessary expertise.",
            Content2: 'Our industries investment focus on through specialized divisions like Bottled Water Manufacturer, Package Manufacturer, tissue Manufacturer, Maize mill and Grain silos factory etc.',
            images: [
                {id: 1, alt:'Dalsan Water', size: 350, src: '/Images/DalsanWater.jpg'},
                {id: 2, alt:'Marhaba Water', size: 350, src: '/Images/MarhabaWater.png'},    
            ],
            companies: [
                {id: 1, size: 120, logo: '/Images/Logo/Dwater.jpg'},
                {id: 2, size: 120, logo: '/Images/Logo/Dindustries.jpg'},    
                {id: 3, size: 120, logo: '/Images/Logo/Mwater.jpg'},    
            ],
        }, ],
        'Real Estate': [
        {
            id: 4,
            title: 'Real Estate Investment',
            description: "Our real estate investment department was established to contribute new investment opportunities, to satisfy the growing real estate demand in Somalia. Due to the civil war in Somalia, many buildings and monuments were torn down, others damaged by the war. this has created a gap in the real estate market. This has fueled the rapid growth of the construction and real estate industry.",
            type: [],
            subtitle: 'Our Aim',
            Content2: '',
            Content: 'We aim to be the leading real estate company in Somalia with strong emphasis on world class standards by developing new innovative and groundbreaking real estate projects, adopting best practices and standards, creating variation in quantity, while maintaining utmost quality, ultimately working towards our goal of creating successful rates on return on investment',
            images: 
            [
                {id: 1, alt: 'residental', size: 300, src: '/Images/residence.png'},
            ],
            companies: 
            [
                {id: 1, size: 120, logo: '/Images/Logo/MarhabaEstate.svg'},
            ],
        },
    ]
    })
  return (
    <div className='w-full h-full text-2xl'>
       <div className='  h-full flex flex-col justify-center items-center'>
       <Tab.Group>
       <Tab.List className="flex flex-col gap-4 lg:w-[70%] w-full  rounded-xl  pt-24 p-4">
            <AnimateDown>
                <h2 className={`${fontBold.className} text-center text-white`}>Investment Divisions</h2>
            </AnimateDown>
            <div className='lg:grid-cols-4 grid sm:grid-cols-2 gap-2 w-full '>
                    {Object.keys(InvestDivisions).map((division, idx) => (
                        <RevealBox key={idx} delay={0.2} idx={idx}>
                            <Tab
                            key={division}
                            className={({ selected }) =>
                                classNames(
                                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 px-4',
                                'focus:outline-none',
                                selected
                                    ? 'border border-green-400 text-green-400  shadow'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                )
                            }
                            >
                            {division}
                            </Tab>
                        </RevealBox>
                    ))}
            </div>
    </Tab.List>
        <Tab.Panels className="mt-2 w-full h-full">
          {Object.values(InvestDivisions).map((item, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'rounded-xl p-3 h-full',
                ' '
              )}
            >
            <div className='p-4 lg:px-24'>
                {item.map( i => (
                    <div key={i.id} className=' w-full flex lg:flex-row flex-col  gap-24'>
                        <div className='flex flex-col lg:w-[50%] w-full gap-4'>
                            <div className='flex flex-col h-full gap-4'>
                                <Reveal delay={0.5}>
                                    <h2 className={`${fontBold.className} text-white`}>{i.title}</h2>
                                </Reveal>
                                    <div className='h-full'>
                                <AnimateRight delay={1}>

                                    <p className={`text-sm text-gray-300 ${font.className}`}>{i.description}</p>
                                </AnimateRight>
                                    </div>
                               
                            </div>
                            <div className='flex flex-col gap-4'>
                                <Reveal delay={1.3}>
                                    <h2 className={`${fontBold.className} text-white text-sm`}>{i.subtitle}</h2>
                                </Reveal>
                                

                                {i.Content === '' ? 
                                            <div className={` text-gray-300 flex flex-col gap-2  text-sm ${font.className}`} >
                                                {i.type.map( (ite, idx) => (
                                                    <RevealBox key={idx} delay={1.8} idx={idx} >
                                                        <div className='px-2 flex gap-4'>
                                                            <div className='text-green-400'> {ite.icon} </div>
                                                            <h2 className='' key={idx}>{ite.title}</h2>
                                                        </div>
                                                    </RevealBox>
                                                ))}
                                            </div>
                                :   <div>
                                        <ImageReveal delay={2.2}>
                                            <p className='text-sm text-gray-300'>{ i.Content }</p>
                                        </ImageReveal>
                                    </div>
                                }
                               
                                <div className='w-full text-gray-300'>
                                    {i.id === 3 
                                    ? <ImageReveal delay={2.5} >
                                        <p className='text-sm'>{i.Content2}</p>
                                    </ImageReveal>
                                    :''
                                     }
                                </div>
                            </div>
                            <div className=' py-2 flex flex-col h-full'>
                                    <div>
                                        <Reveal delay={3}>
                                            <h2 className={`text-sm pb-4 font-medium text-green-400 ${fontBold.className}`}>Sponsered Companies</h2>
                                        </Reveal>
                                    </div>
                                <div className='flex  gap-4 px-8 h-full'>
                                    {i.companies.map(companies => (
                                        <div key={companies.id}>
                                            <RevealBox delay={3} idx={companies.id}>
                                                <Link href={'https://www.unicaresom.co'}  className=''>
                                                <Image src={companies.logo} alt='company logo' 
                                                    height={companies.size} width={companies.size}
                                                    className='rounded-md'/> 
                                                </Link>
                                            </RevealBox>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center lg:w-fit md:w-fit w-full'>
                            <div className=' flex flex-col    gap-4 w-full '>
                                {i.images.map(img => (
                                    <div key={img.id}>
                                        <RevealBox delay={1} idx={img.id}>
                                            <Image src={img.src} alt='company images' 
                                            height={img.size} width={img.size}
                                            className='rounded-md'/> 
                                        </RevealBox>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
       </div>

    <div className='pt-8'>
       <Footer />
    </div>
    </div>
  )
}

export default DivisionPage