'use client'

import React, { useState } from 'react'

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import RevealBox from '../Motion/RevealHeading';
type Props = {
    title: string;
    email?: string;
    phone?: string;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    children: React.ReactNode,
}

const Accordion = () => { 
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const locations = [
        {
          id: 1,
          title: 'Somalia Headquaters',
          content: 'A-6-4, TCC, Maka almukarama Street, Mogadishu – Somalia',
          email: 'Somalia Headquaters',
          type: 'A',
          phone: '+252611111554, +252617994946, +252613333609',
        },
        {   
          id: 2,
          title: 'UAE Branch',
          content: 'Al Mubarak Centre, Al Nabba, Sharjah, UAE',
          email: 'UAE Branch',
          type: 'A',
          phone: '+971506447470, +971556445447',
        },
        {
          id: 3,
          type: 'A',
          title: 'Turkey Branch',
          content: 'Zafer Mah. 185. SK. Babacan Premium B Blok No: 4 B İÇ Kapi No: 10 Esnyurt/ İstanbul',
          email: 'Turkey Branch',
          phone: '+905356621020',
        },
        {
          type: 'B',
          content: '',
          email: '',
          phone: '',
          id: 4,
          title: 'South Sudan Branch',
        },
        {
          type: 'B',
          content: '',
          email: '',
          phone: '',
          id: 5,
          title: 'Djibouti Branch',
        },
        {
          type: 'B',
          content: '',
          email: '',
          phone: '',
          id: 6,
          title: 'Ethiopia Branch',
        },
        // Add other office locations here
      ];
    return (
        <>
        <div className='grid lg:grid-cols-1 md:grid-cols-2 gap-4'>
            {locations.map((item, idx) => (
                <div key={item.id} className=''>
                  <RevealBox delay={0.5} idx={idx}>
                      <AccordionLayout 
                          title={item.title}
                          index={item.id}
                          activeIndex={activeIndex}
                          setActiveIndex={setActiveIndex}
                      > {item.content ? <p className='text-xs'>{item.content}</p> : ''}
                      </AccordionLayout>
                  </RevealBox>
                </div>
            )) }
        </div>
        </>

      );
  };
export default Accordion





export const AccordionLayout = ({ title, children, index, email, phone, activeIndex, setActiveIndex } : Props) => {
  const handleSetIndex = (index: any) => {
    if(activeIndex !== index )
        setActiveIndex(index) 
    else 
        setActiveIndex(0)
      
    if(index == 4 || index == 5 || index == 6)
      setActiveIndex(0)
      
  }

  return (
    <>
        <div onClick={() => handleSetIndex(index)} className='flex flex-col  w-full cursor-pointer p-3 px-4 rounded-lg border-2  border-green-400/30'>
            <div className='flex'>
                <div className='text-white text-sm'>{title}</div>
            </div>
            <div className='transition-all duration-300 ease-in-out'>
            {(activeIndex === index ) && ( 
                <div className={`shadow-3xl rounded-2xl text-[2px] font-light text-gray-300 ${children == '' ? ''  : 'p-2 '}`}>
                {children ? children : ''}
                </div>
            )}
            </div>
        </div>
    </>
  );
};
