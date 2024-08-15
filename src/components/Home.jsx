import { Carousel } from 'flowbite-react';
import React from 'react';
import banner  from '../assets/banner.png';
import banner1 from '../assets/banner_images/banner1.jpg'
import banner2 from '../assets/banner_images/banner2.jpg'






const Home = () => {
  return (


    <div className='bg-neutralSilver' id='home'>
        <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto'>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
          <div>
          <img src={banner} alt="" /></div>
          {/* hero text */}

          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights <span className=' text-brandPrimary'>from 8 years</span></h1>
            <p className=' text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button  className="btn-primary">Register</button>
          </div>

        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img src={banner1} alt="" /></div>
          {/* hero text */}

          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lets Lessons and Earn money <span className=' text-brandPrimary'>in 4 Months</span></h1>
            <p className=' text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className='btn-primary'>Register</button>
          </div>

        </div>
        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
          <img  src={banner2} alt="" /></div>
          {/* hero text */}

          <div className='md:w-1/2'>
            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Fuck Your Selfs  &  <span >Do your work</span></h1>
            <p className=' text-neutralGrey text-base mb-8'>Where to grow your business as a photographer: site or social media?</p>
            <button className="btn-primary">Register</button>
          </div>

        </div>
        
      </Carousel>
   
        </div>
    </div>
  )
}

export default Home;
