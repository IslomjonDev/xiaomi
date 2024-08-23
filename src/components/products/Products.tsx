import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Products: React.FC = () => {
  return (
    <>
      <div className="products py-20 bg-[#F7F7F7]">
        <div className="container">
            <div className="products__title  flex flex-col">
            <h2 className='text-center text-[32px] font-sans font-semibold'>Featured Products</h2>
            <div className='flex gap-20 mt-10 justify-center'>
                <NavLink
                to={'link1'}
                className={({ isActive }) => 
                    isActive ? 'text-[#FF8129] text-[16.5px] border-b-2 border-[#ff7918] h-10' : 'text-black'
                }
                >
                Stay On Trend
                </NavLink>
                <NavLink
                to={'link2'}
                className={({ isActive }) => 
                    isActive ? 'text-[#FF8129] text-[16.5px]  border-b-2 border-[#ff7918] h-10 ' : 'text-black'
                }
                >
                Latest Flagship
                </NavLink>
                <NavLink
                to={'link3'}
                className={({ isActive }) => 
                    isActive ? 'text-[#FF8129] text-[16.5px]  border-b-2 border-[#ff7918] h-10' : 'text-black'
                }
                >
                Cleaning Solutions
                </NavLink>
                <NavLink
                to={'link4'}
                className={({ isActive }) => 
                    isActive ? 'text-[#FF8129] text-[16.5px]  border-b-2 border-[#ff7918] h-10' : 'text-black'
                }
                >
                Lifestyle Companions
                </NavLink>
            </div>
            </div>
            <Outlet />
        </div>
      </div>
    </>
  );
}

export default Products;
