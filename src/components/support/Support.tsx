import React, { useState } from 'react'


/////////-------Icons

import { RiCustomerServiceLine } from "react-icons/ri";
import { LuShieldCheck } from "react-icons/lu";
import { BsCopy } from "react-icons/bs";
import { RiQuestionAnswerLine } from "react-icons/ri";


const Support:React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
  return (
    <>
        <div className="support py-28 bg-[#F7F7F7]">
            <div className="container">
                <h1 className='text-center text-[32px] font-semibold' >Xiaomi Support </h1>
                <div className="support__cards flex justify-between mt-10">
                    <div
                     onMouseEnter={() => setIsHovered(true)}
                     onMouseLeave={() => setIsHovered(false)}
                     className="support__card w-60 flex justify-center flex-col items-center">
                        <RiCustomerServiceLine className= {`text-8xl duration-300  ${isHovered ? 'text-[#FE6900]' : 'text-[#a1a1a1]'} `}/>
                        <p className={`text-center duration-300 my-5 font-semibold text-xl ${isHovered ? 'text-[#FE6900]' : ''}`}>Customer Support</p>
                        <p className={` duration-300 text-center ${isHovered ? 'text-[#FE6900]' : ''}`}>Contact us via live-chat, email, and phone call</p>
                    </div>
                    <div
                     onMouseEnter={() => setIsHovered2(true)}
                     onMouseLeave={() => setIsHovered2(false)}
                     className="support__card w-60 flex justify-center flex-col items-center">
                        <LuShieldCheck className= {`text-8xl duration-300  ${isHovered2 ? 'text-[#FE6900]' : 'text-[#a1a1a1]'} `}/>
                        <p className={`text-center duration-300 my-5 font-semibold text-xl ${isHovered2 ? 'text-[#FE6900]' : ''}`}>Warranty</p>
                        <p className={` duration-300 text-center ${isHovered2 ? 'text-[#FE6900]' : ''}`}>Local warranty policy protection is provided</p>
                    </div>
                    <div
                     onMouseEnter={() => setIsHovered3(true)}
                     onMouseLeave={() => setIsHovered3(false)}
                     className="support__card w-60 flex justify-center flex-col items-center">
                        <BsCopy className= {`text-8xl duration-300  ${isHovered3 ? 'text-[#FE6900]' : 'text-[#a1a1a1]'} `}/>
                        <p className={`text-center duration-300 my-5 font-semibold text-xl ${isHovered3 ? 'text-[#FE6900]' : ''}`}>User Guides</p>
                        <p className={` duration-300 text-center ${isHovered3 ? 'text-[#FE6900]' : ''}`}>Find and download your Xiaomi product user guide</p>
                    </div>
                    <div
                     onMouseEnter={() => setIsHovered4(true)}
                     onMouseLeave={() => setIsHovered4(false)}
                     className="support__card w-60 flex justify-center flex-col items-center">
                        <RiQuestionAnswerLine className= {`text-8xl duration-300  ${isHovered4 ? 'text-[#FE6900]' : 'text-[#a1a1a1]'} `}/>
                        <p className={`text-center duration-300 my-5 font-semibold text-xl ${isHovered4 ? 'text-[#FE6900]' : ''}`}>FAQ</p>
                        <p className={` duration-300 text-center ${isHovered4 ? 'text-[#FE6900]' : ''}`}>Search for help about Xiaomi</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Support