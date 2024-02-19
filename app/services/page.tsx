import React from 'react'
import PopBox from '../components/Ui/PopBox'
import Image from 'next/image'
import Footer from '../components/Sub/Footer';

type Props = {}

const ServicesPage = (props: Props) => {
  const content1 = "Microfinance is one of our financial services for small businesses and household-based entrepreneurs to increase their capital asset and expand their businesses."
  const content2 = "Marhaba Investment will continue to contribute to community development by providing the financial services needed. Such as financing Agriculture, Home financing, SMEs, and providing Support to those who have fruitful business ideas and have no access for a financial support"
  return (
    <div className='h-full w-full  text-4xl'>
      <div className='grid place-items-center w-full h-full py-12 lg:px-48 md:px-32 px-8'>
          <div className='text-white w-full flex-col flex gap-6 pt-24'> 
              <h2>Our Services</h2>
            
            <div className='flex lg:flex-row   flex-col gap-8 w-full'>
              <div className='text-base flex flex-col lg:w-[80%] w-full gap-4 '>
                  <h2>{content1}</h2>
                  <h2>{content2}</h2>
              </div>
              <div className='w-full'>
                <Image src={'/Images/micro.png'} alt='microfinance' width={800} height={800} />
              </div>
            </div>

          </div>

      </div>
      <div className='pt-16'>
        <Footer />
    </div>
    </div>
  )
}

export default ServicesPage