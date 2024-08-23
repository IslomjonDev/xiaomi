import React from 'react'
import { Link } from 'react-router-dom'


////////-------Icons


import { FaFacebookSquare  , FaInstagramSquare, FaYoutube} from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';


const Footer:React.FC = () => {
  return (
    <>
        <footer className='bg-black py-9'>
            <div className="container">
                <div className="footer__content flex justify-between">
                    <div className="footer__card text-[gray] flex flex-col gap-5 w-[300px]">
                        <h2 className='font-semibold text-[#fff] ' >SUPPORT</h2>
                        <Link className='  hover:underline underline-offset-1 hover:text-[#fff]'  to={'/'}>Contact Us</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>User Guide</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Warranty</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>International Warranty</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>EU Declaration of Conformity</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Scooter Safety Notice</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Android Enterprice Recommended</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Digital Services Act</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Contact Us</Link>
                    </div>
                    <div className="footer__card text-[gray] flex flex-col gap-5 w-[300px]">
                        <h2 className='font-semibold text-[#fff] ' >ABOUT US</h2>
                        <Link className='  hover:underline underline-offset-1 hover:text-[#fff]'  to={'/'}>Xiaomi</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Leadership Team</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Privacy Policy</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Integrity & Compiliance</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Investor Relations</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Sustainability</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Trust Center</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Xiaomi Accessibility</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Xiaomi HyperOS</Link>
                    </div>
                    <div className="footer__card text-[gray] flex flex-col gap-5 w-[300px]">
                        <h2 className='font-semibold text-[#fff] ' >XIAOMI PROJECTS</h2>
                        <Link className='  hover:underline underline-offset-1 hover:text-[#fff]'  to={'/'}>Xiaomi Creators</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Xiaomi Studios</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Xiaomi Imagery</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Xiaomi Master Class</Link>
                        <Link className='hover:underline underline-offset-1 hover:text-[#fff]' to={'/'}>Xiaomi Renovation</Link>
                    </div>
                    <div className="footer__card text-[gray] flex flex-col gap-5 w-[300px]">
                        <h2 className='font-semibold text-[#fff] ' >Follow XIAOMI</h2>
                        <div className="icons flex gap-4">
                            <Link to={'/'}>
                                <FaFacebookSquare className='text-3xl hover:text-[#fff]'/>
                            </Link>
                            <Link to={'/'}>
                                <FaYoutube className='text-3xl hover:text-[#fff]'/>
                            </Link>
                            <Link to={'/'}>
                                <FaXTwitter className='text-3xl hover:text-[#fff]'/>
                            </Link>
                            <Link to={'/'}>
                                <FaInstagramSquare className='text-3xl hover:text-[#fff]'/>
                            </Link>
                        </div>
                        <form action="">
                            <p>Enter your email address to subscribe to our newsletters</p>
                            <input className='bg-transparent p-3 border border-white rounded-xl mt-4' type="text" placeholder='enter email addres'  />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer