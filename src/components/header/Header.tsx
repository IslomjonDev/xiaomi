import React, { useState } from 'react'

///////////-------Images  and  Icons


import { BsSearch } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { NavLink } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import hcard1 from '../../assets/hcard1.webp'
import hcard2 from '../../assets/hcard2.webp'
import hcard3 from '../../assets/hcard3.webp'
import hcard4 from '../../assets/hcard4.webp'
import hcard5 from '../../assets/hcard5.webp'

const Header: React.FC = () => {

  const [home , setHome] = useState(false)

  return (
    <>
      <header className=' bg-white  shadow-lg shadow-gray-300 z-10 sticky top-0 left-0 w-full'>
        <div className="container">
          <div className="navbar flex items-center justify-between gap-10">
            <div className="navlogo flex items-center gap-20">
              <div
              onMouseEnter={() => setHome(true)}
              onMouseLeave={() => setHome(false)}             
               className="img w-10 h-10 p-1 rounded-xl bg-[#FF6700] "> 
              <IoMdHome  className={ `absolute   text-3xl left-[200px] duration-200 text-[#fff] ${home ? 'left-[238px]' : ''}`}/>
               <h2 className={`absolute text-[#fff] duration-200 text-2xl font-semibold left-[238px] ${home ? 'opacity-0' : ''}`} >mi</h2>
              </div>
              <div className="nav__list flex">
                <ul className='flex gap-20'>
                  <li  className='group mt-4  hover:text-[#ff7a1c] h-10 hover:border-b-[#FE611B] hover:border-b-[2px]'>
                    <NavLink to={'/'}>Mobile</NavLink>
                      <div className=' group-hover:scale-y-100 py-[40px] px-[200px] absolute w-full h-[400px] bg-[#fff] scale-y-0 origin-top top-14 left-0 duration-300 z-50 flex justify-between'>
                        <div className="links 2xl:container mx-auto flex flex-col px-10 gap-3 text-gray-500">
                         <p className= ' 2xl:container mx-auto text-[#FE611B] flex gap-2 items-center'>Phones <IoIosArrowDown /></p>
                          <NavLink className={'hover:text-[#FE611b] hover:underline underline-offset-1'} to={'/'}>Xiaomi Series</NavLink>
                          <NavLink className={'hover:text-[#FE611b] hover:underline underline-offset-1'} to={'/'}>Redmi Series</NavLink>
                          <NavLink className={'hover:text-[#FE611b] hover:underline underline-offset-1'} to={'/'}>Poco Series</NavLink>
                        </div>
                         <div className="cards flex gap-10">
                            <div className="card1 w-[215px] h-[260px] bg-[#f5f5f5] flex flex-col justify-center p-5 rounded-lg  ">
                                  <img className='relative hover:mt-[-50px] mt-[-30px] duration-500' src={hcard1} alt="" />
                                  <p className=' text-black text-center absolute bottom-32 left-[555px]'>Xiaomi </p> 
                            </div>
                            <div className="card1 w-[215px] h-[260px] bg-[#f5f5f5] flex flex-col justify-center p-5 rounded-lg  ">
                                  <img className='relative hover:mt-[-50px] mt-[-30px] duration-500' src={hcard2} alt="" />
                                  <p className=' text-black text-center absolute bottom-32 left-[810px]'>Xiaomi </p> 
                            </div>
                            <div className="card1 w-[215px] h-[260px] bg-[#f5f5f5] flex flex-col justify-center p-5 rounded-lg  ">
                                  <img className='relative hover:mt-[-50px] mt-[-30px] duration-500' src={hcard3} alt="" />
                                  <p className=' text-black text-center absolute bottom-32 left-[1065px]'>Xiaomi </p> 
                            </div>
                            <div className="card1 w-[215px] h-[260px] bg-[#f5f5f5] flex flex-col justify-center p-5 rounded-lg  ">
                                  <img className='relative hover:mt-[-50px] mt-[-30px] duration-500' src={hcard4} alt="" />
                                  <p className=' text-black text-center absolute bottom-32 left-[1320px]'>Xiaomi </p> 
                            </div>
                            <div className="card1 w-[215px] h-[260px] bg-[#f5f5f5] flex flex-col justify-center p-5 rounded-lg  ">
                                  <img className='relative hover:mt-[-50px] mt-[-30px] duration-500' src={hcard5} alt="" />
                                  <p className=' text-black text-center absolute bottom-32 left-[1575px]'>Xiaomi </p> 
                            </div>
                         </div>
                      </div>
                  </li>
                  <li  className='group mt-4  hover:text-[#ff7a1c] h-10 hover:border-b-[#FE611B] hover:border-b-[2px]'>
                    <NavLink to={'/'}>Wearables</NavLink>
                      <div className=' group-hover:scale-y-100 absolute w-full h-[400px] bg-[#fff] scale-y-0 origin-top top-14 left-0 duration-300 z-50'>
                        <p className= ' p-10 2xl:container mx-auto text-[#FE611B]'></p>
                      </div>
                  </li>
                  <li  className='group mt-4  hover:text-[#ff7a1c] h-10 hover:border-b-[#FE611B] hover:border-b-[2px]'>
                    <NavLink to={'/'}>Smart Home</NavLink>
                      <div className=' group-hover:scale-y-100 absolute w-full h-[400px] bg-[#fff] scale-y-0 origin-top top-14 left-0 duration-300 z-50'>
                        <p className= ' p-10 2xl:container mx-auto text-black'></p>
                      </div>
                  </li>
                  <li  className='group mt-4  hover:text-[#ff7a1c] h-10 hover:border-b-[#FE611B] hover:border-b-[2px]'>
                    <NavLink to={'/'}>Lifestyle</NavLink>
                      <div className=' group-hover:scale-y-100 absolute w-full h-[400px] bg-[#fff] scale-y-0 origin-top top-14 left-0 duration-300 z-50'>
                        <p className= ' p-10 2xl:container mx-auto text-black'></p>
                      </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="nav__icons">
                <ul className='flex gap-16 items-center'>
                  <li>
                    <a  href="">Discover</a>
                  </li>
                  <li>
                    <a href="">Support</a>
                  </li>
                  <li>
                    <a href="">
                      <BsSearch size={22} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <GoPerson size={28} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
