import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import ved1 from '../../assets/f5a06dd6829543ee1c665e619bb9f80e.mp4';
import ban1 from '../../assets/ban1-1.svg';
import ban2 from '../../assets/ban2.jpg';
import ban3 from '../../assets/ban3.jpg';
import ban4 from '../../assets/ban4.jpg';
import ban44 from '../../assets/ban4-4.svg';





const Banner: React.FC = () => {
  return (
    <div className="banner relative">
      <div className="banner__container">
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            modules={[Pagination, Navigation, Autoplay]}
            className="mySwiper"
        >
          <SwiperSlide className='w-full mx-auto h-[600px] bg-[#E3E6EB]'>
            <div className="flex items-center justify-center h-full w-full">
              <video src={ved1} autoPlay muted loop className="w-full h-full object-cover"></video>
              <div className="swiper__content absolute right-[300px] top-40">
                    <img className='w-[450px] h-[112px]' src={ban1} alt="" />
                    <p className='w-[200px] font-sans text-center absolute right-[120px] mt-3'>Leica Summilux optical lens All Around Liquid Display</p>
                    <button className='absolute bottom-[-150px] right-[160px] bg-black text-white px-[25px] flex justify-center py-[4px] rounded-[10px] hover:opacity-75'>learn more</button>
              </div>
            </div> 
          </SwiperSlide>
          <SwiperSlide className='w-full mx-auto h-[600px] bg-[#DEDEDE]'>
            <div className="flex items-center justify-center h-full w-full">
              <div className="swiper__content absolute left-[300px] top-40">
                    <h2 className='absalute text-[32px] font-semibold '> Redmi Not 13 Pro <span className='border-black border-2 text-[20px] px-[8px] py-[2px] rounded-[10px]'>5G</span></h2>
                    <h3 className=' text-[18px] font-semibold font-sans'>Every shot iconic</h3>
                    <p className='w-[200px] font-sans  absolute right-[120px] mt-3'>200MP OIS camera 1.5K 120Hz display</p>
                    <button className='absolute bottom-[-150px] right-[190px] bg-black text-white px-[25px] flex justify-center py-[4px] rounded-[10px] hover:opacity-75'>learn more</button>
              </div>
              <img className='h-full w-full object-cover' src={ban2} alt="" />
            </div> 
          </SwiperSlide>
          <SwiperSlide className='w-full mx-auto h-[600px] bg-[#DEDEDE]'>
            <div className="flex items-center justify-center h-full w-full">
              <div className="swiper__content absolute left-[300px] top-40">
                    <h2 className='absalute text-[32px] font-semibold '> Xiaomi Pad 6S Pro  <span className='border-black border-2 text-[20px] px-[8px] py-[2px] rounded-[10px]'>12.4</span></h2>
                    <h3 className=' text-[18px] font-semibold font-sans'>Big ideas on bigger screen</h3>
                    <p className='w-[300px] font-sans  absolute right-[50px] mt-3'>12.4" 144Hz 3K crystal-clear display</p>
                    <button className='absolute bottom-[-150px] right-[220px] bg-black text-white px-[25px] flex justify-center py-[4px] rounded-[10px] hover:opacity-75'>learn more</button>
              </div>
              <img className='h-full w-full object-cover' src={ban3} alt="" />
            </div> 
          </SwiperSlide>
          <SwiperSlide className='w-full mx-auto h-[600px] bg-[#DEDEDE]'>
            <div className="flex items-center justify-center h-full w-full">
              <div className="swiper__content absolute left-[300px] top-40">
                    <img src={ban44} alt="" />
                    <p className='w-[500px] font-sans  absolute right-[100px] mt-3'>Powered by Snapdragon® W5+ Gen 1 Wearable Platform</p>
                    <button className='absolute bottom-[-150px] right-[470px] bg-black text-white px-[25px] flex justify-center py-[4px] rounded-[10px] hover:opacity-75'>learn more</button>
              </div>
              <img className='h-full w-full object-cover' src={ban4} alt="" />
            </div> 
          </SwiperSlide>
          <div className="swiper-button-next absolute top-1/2 right-8 transform -translate-y-1/2 text-white bg-gray-300 p-6 rounded-2xl flex items-center justify-center text-lg z-1">
            <SlArrowRight />
          </div>
          <div className="swiper-button-prev absolute top-1/2 left-8 transform -translate-y-1/2 text-white bg-gray-300 p-6 rounded-2xl flex items-center justify-center text-lg z-1">
            <SlArrowLeft />
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
