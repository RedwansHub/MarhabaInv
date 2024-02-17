import React from 'react'
import PopBox from '../components/Ui/PopBox'
import Image from 'next/image'

type Props = {}

const ServicesPage = (props: Props) => {
  const content1 = "Microfinance is one of our financial services for small businesses and household-based entrepreneurs to increase their capital asset and expand their businesses."
  const content2 = "Marhaba Investment will continue to contribute to community development by providing the financial services needed. Such as financing Agriculture, Home financing, SMEs, and providing Support to those who have fruitful business ideas and have no access for a financial support"
  return (
    <div className='h-screen w-full lg:p-44 pt-24 p-12 text-4xl'>
        <div className='text-white w-full flex-col flex gap-6'> 
            <h2>Our Services</h2>
          
          <div className='flex lg:flex-row md:flex-row  flex-col gap-8 w-full'>
            <div className='text-base flex flex-col w-[80%] gap-4 '>
                <h2>{content1}</h2>
                <h2>{content2}</h2>
            </div>
            <div className='w-full'>
              <Image src={'/Images/micro.png'} alt='microfinance' width={800} height={800} />
            </div>
          </div>

        </div>
    </div>
  )
}

export default ServicesPage