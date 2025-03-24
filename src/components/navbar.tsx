import { NavLink } from 'react-router-dom';

import logo from '../assets/images/logo.png';
import { useState } from 'react';
import { FaBars, FaRegCircleXmark } from 'react-icons/fa6';


const Navbar = () => {
  const [showMenu, SetShowMenu] = useState(false)


  return (
    <div className='flex flex-col items-center w-full relative shadow-sm'>
      <div className='flex flex-row justify-between items-center md:w-8/12 w-11/12 lg:py-5 py-3'>
        <NavLink className='flex flex-row gap-4 items-center md:w-auto w-2/3'  to='/'>
          <img src={logo} alt='logo' className='lg:h-20 h-12'/>
          <span className='font-bold'>Amobi Education Foundation</span>
        </NavLink>
        <div className="hidden lg:block">
          <div className={`flex flex-col text-lg justify-end`}>
            <div className={`tracking-wide flex flex-row flex-wrap justify-end w-full gap-3 text-sm items-center`}>
              <NavLink to='/about' className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
                About Us
              </NavLink>
              <NavLink to='/amobi-essay-prize' className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
                Amobi Essay Prize
              </NavLink>
              <NavLink to='/services' className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
                Winners and Participants
              </NavLink>
              <NavLink to='/news-updates' className={({ isActive }) => (isActive ? 'font-semibold' : '')}>
                News & Updates
              </NavLink>
            </div>
          </div>
        </div>
        <div className="lg:hidden block">
          <div className={`flex flex-row gap-4  items-center`}>
            <FaBars onClick={() => SetShowMenu(true)} className='cursor-pointer'/>
          </div>
        </div>
      </div>
      {showMenu && 
        <div className='flex flex-col fixed top-0 right-0 w-screen h-screen bg-black/30 z-50'>
          <div className='flex flex-col w-full relative bg-white p-5'>
            <div className='flex flex-row items-center justify-between w-full  border-b border-gray-200'>
              <NavLink to='/'>
                <img src={logo} alt='logo' className='h-16'/>
              </NavLink>
              <FaRegCircleXmark size={24} onClick={() => SetShowMenu(false)} className='cursor-pointer'/>
            </div>
            <div className='flex flex-col tracking-wide w-full gap-[2rem] mt-5'>
              <NavLink className={({ isActive }) => (isActive ? 'font-semibold' : '')} onClick={() => SetShowMenu(false)} to='/about'>
                About us
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'font-semibold' : '')} onClick={() => SetShowMenu(false)} to='/amobi-essay-prize'>
                Amobi Essay Prize
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'font-semibold' : '')} onClick={() => SetShowMenu(false)} to='/services'>
                Winners and Participants
              </NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'font-semibold' : '')} onClick={() => SetShowMenu(false)} to='/news-updates'>
                News & Updates
              </NavLink>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Navbar