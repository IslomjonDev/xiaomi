import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

/////////---------Images 


import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import exp1 from '../../assets/exp1.jpg'
import exp3 from '../../assets/exp3.jpg'
import exp4 from '../../assets/exp4.jpg'
import exp5 from '../../assets/exp5.jpg'
import exp6 from '../../assets/exp6.jpg'
import exp7 from '../../assets/exp7.jpg'
import exp8 from '../../assets/exp8.jpg'
import exp9 from '../../assets/exp9.jpg'
import exp10 from '../../assets/exp10.jpg'



const Explore: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);
  const [isHovered9, setIsHovered9] = useState(false);


  return (
    <>
      <div className="explore py-28 bg-[#F7F7F7]  relative">
        <h2 className='text-center my-20 text-[28px] font-sans font-semibold'>Explore Xiaomi</h2>
        <div className="absolute right-[250px] top-[210px] transform -translate-y-1/4 flex space-x-4">
          <div className="swiper-button-prev text-white bg-gray-300 p-5 right-[200px] rounded-xl flex items-center justify-center ">
            <SlArrowRight />
          </div>
          <div className="swiper-button-next text-black bg-black p-5 left-14 rounded-xl flex items-center justify-center ">
            <SlArrowLeft />
          </div>
        </div>
        
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          className="mySwiper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          <SwiperSlide
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp1} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Unlock 6 hidden features you may not know</h2>
                <p className={ isHovered ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Useful hidden features & how to enable them</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp10} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Panning photography</h2>
                <p className={ isHovered2 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>A photography tutorial</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered2 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp3} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Xiaomi SU7 Ultra prototype</h2>
                <p className={ isHovered3 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Next challenge: Nürburgring </p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered3 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp4} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Human x Car x Home</h2>
                <p className={ isHovered4 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>All your needs in one smart ecosystem</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered4 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp5} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Close-Up Magic</h2>
                <p className={ isHovered5 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Mastering Macro Shots with the Xiaomi 14</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered5 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp6} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Xiaomi SU7: A Revolutionary EV Experience</h2>
                <p className={ isHovered6 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Xiaomi SU7 brings a whole new level of innovation and performance to the table</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered6 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp7} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Xiaomi OpenWear Stereo unboxing</h2>
                <p className={ isHovered7 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Perfect For Work & Fitness </p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered7 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp8} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>This summer, get your 'front-row seat'</h2>
                <p className={ isHovered8 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Xiaomi TV A Pro: Enhance your game experience</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered8 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={() => setIsHovered9(true)}
            onMouseLeave={() => setIsHovered9(false)}
            className='w-[650px] h-[520px] rounded-lg bg-white '>
              <img className='w-650px h-[330px]  object-cover  rounded-lg' src={exp9} alt="" />
              <div className="exp__text p-8 flex flex-col justify-center text-center gap-4 ">
                 <h2 className='font-semibold mt-4 text-lg'>Capturing nature's beauty</h2>
                <p className={ isHovered9 ? 'opacity-0 duration-500' : 'opacity-100 duration-500 '}>Flower Photography with the Xiaomi 14 Ultra</p>
                <button
                className={` absolute bottom-14  left-[250px]  duration-500 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                  isHovered9 ? ' opacity-100  bottom-0 ' : 'opacity-0  bottom-[-100px]'
                }`}
              >
                Learn more
              </button>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Explore;
