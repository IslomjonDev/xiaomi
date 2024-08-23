import React, { useState } from 'react';

////////////------Images
import pro1 from '../../assets/pro1.jpg';
import card1 from '../../assets/card1.png';
import card2 from '../../assets/card2.webp';
import card3 from '../../assets/card3.webp';
import card4 from '../../assets/card4.webp';



const Link1: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCardHover1, setIsCardHover1] = useState(false);
  const [isCardHover2, setIsCardHover2] = useState(false);
  const [isCardHover3, setIsCardHover3] = useState(false);
  const [isCardHover4, setIsCardHover4] = useState(false);


  return (
    <>
      <div
        className="link1 bg-white p-[30px] rounded-lg"
       
      >
        <div
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className="card__top bg-[#FAFAFA] flex  justify-between rounded-lg">
          <div className="top__left">
            <img    className={` duration-300  ${
                isHovered ? ' transform scale-105 ' : ' '
              }`} src={pro1} alt="Product" />
          </div>
          <div className="top__right text-center w-[670px] flex flex-col gap-4 py-14">
            <h2 className='text-[24px] font-semibold'>
              Redmi Note 13 Pro <span className='border-2 border-black py-[2px] px-[8px] rounded-xl'>5G</span>
            </h2>
            <h3 className='font-semibold'>Greenify Your Wallpaper</h3>
            <p className='w-[380px] text-center ml-36'>
              Checkout out the exclusive wallpapers to match with the new Olive Green
            </p>
            <button
              className={` right-[540px] absolute duration-300 rounded-lg transition-all justify-center py-1  w-[120px]  bg-black  text-white flex mx-auto   ${
                isHovered ? ' opacity-100  bottom-[-220px]' : 'opacity-0  bottom-[-300px] '
              }`}
            >
              Learn more
            </button>
          </div>
        </div>
        <div className="bottom__cards my-5 flex justify-between">
            <div 
            onMouseEnter={() => setIsCardHover1(true)}
            onMouseLeave={() => setIsCardHover1(false)}
             className="bottom__card rounded-lg p-7 h-[300px] bg-[#FAFAFA] w-80 flex flex-col justify-center items-center ">
              <img className={`'w-[160px] h-[160px] object-contain '  ${isCardHover1 ? ' duration-500 transform scale-105' : 'duration-500'} `}  src={card1} alt="" />
              <h3 className='font-semibold'>Redmi Note 13 </h3>
              <p className={`'mt-2 text-[15px] duration-300' ${isCardHover1 ? 'opacity-0' : 'opacity-100'}`}>108MP triple camera</p>
              <button
              className={` duration-500 absolute bg-black text-white  py-1 px-4 rounded-lg mt-3 ${
                isCardHover1 ? ' opacity-100 mb-[-220px]' : 'opacity-0 mb-[-400px]   '
              }`}
               >Learn more</button>
            </div>
            <div 
            onMouseEnter={() => setIsCardHover2(true)}
            onMouseLeave={() => setIsCardHover2(false)}
             className="bottom__card rounded-lg p-7 h-[300px] bg-[#FAFAFA] w-80 flex flex-col justify-center items-center ">
              <img className={`'w-[160px] h-[160px] object-contain '  ${isCardHover2 ? ' duration-500 transform scale-105' : 'duration-500'} `}   src={card2} alt="" />
              <h3 className='font-semibold'>Redmi Watch 3 activ </h3>
              <p className={`'mt-2 text-[15px] duration-300' ${isCardHover2 ? 'opacity-0' : 'opacity-100'}`}>108MP triple camera</p>
              <button
              className={` duration-500 absolute bg-black text-white  py-1 px-4 rounded-lg mt-3 ${
                isCardHover2 ? ' opacity-100 mb-[-220px]' : 'opacity-0 mb-[-400px]   '
              }`}
               >Learn more</button>
            </div>
            <div 
            onMouseEnter={() => setIsCardHover3(true)}
            onMouseLeave={() => setIsCardHover3(false)}
             className="bottom__card rounded-lg p-7 h-[300px] bg-[#FAFAFA] w-80 flex flex-col justify-center items-center ">
              <img  className={`'w-[160px] h-[160px] object-contain '  ${isCardHover3 ? ' duration-500 transform scale-105' : 'duration-500'} `}   src={card3} alt="" />
              <h3 className='font-semibold'>Redmi Note 13 </h3>
              <p className={`'mt-2 text-[15px] duration-300' ${isCardHover3 ? 'opacity-0' : 'opacity-100'}`}>108MP triple camera</p>
              <button
              className={` duration-500 absolute bg-black text-white  py-1 px-4 rounded-lg mt-3 ${
                isCardHover3 ? ' opacity-100 mb-[-220px]' : 'opacity-0 mb-[-300px]   '
              }`}
               >Learn more</button>
            </div>
            <div 
            onMouseEnter={() => setIsCardHover4(true)}
            onMouseLeave={() => setIsCardHover4(false)}
             className="bottom__card rounded-lg p-7 h-[300px] bg-[#FAFAFA] w-80 flex flex-col justify-center items-center ">
              <img className={`'w-[160px] h-[160px] object-contain '  ${isCardHover4 ? ' duration-500 transform scale-105' : 'duration-500'} `}  src={card4} alt="" />
              <h3 className='font-semibold'>Redmi Note 13 </h3>
              <p className={`'mt-2 text-[15px] duration-300' ${isCardHover4 ? 'opacity-0' : 'opacity-100'}`}>108MP triple camera</p>
              <button
              className={` duration-500 absolute bg-black text-white  py-1 px-4 rounded-lg mt-3 ${
                isCardHover4 ? ' opacity-100 mb-[-220px]' : 'opacity-0 mb-[-400px]   '
              }`}
               >Learn more</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Link1;
