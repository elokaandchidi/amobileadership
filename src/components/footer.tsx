import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.webp';
import ectcLogo from '../assets/images/ectc.png';
import { FaInstagram } from 'react-icons/fa6';
	

const Footer = () => {
  return (
    <div className='flex flex-col items-center w-full lg:py-10 py-5 shadow-2xl'>
      <div className='flex flex-col lg:w-9/12 w-11/12 justify-center items-center'>
        <NavLink className='' to='/'>
          <img src={logo} alt='logo' className='h-50'/>
        </NavLink>
        <span className='font-semibold text-xl'>Amobi Education Foundation</span>
        <div className={`tracking-wide flex flex-row flex-wrap gap-5 text-sm mt-7 justify-center items-center`}>
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
        <a href='https://instagram.com/amobifoundation?igshid=MzMyNGUyNmU2YQ==' target='_blank' rel="noreferrer noopener" className='rounded-full bg-pink-600 text-white p-2 mt-15'>
          <FaInstagram size={24}/>
        </a>
        <div className='mt-7'>Designed and Developed by  <a href='https://ectc.ltd' target="_blank" rel="noreferrer noopener" className='underline'>ECTC</a></div>
        <div className='bg-[#11181F] mt-5'>
          <img src={ectcLogo} alt='logo' className='h-8'/>
        </div>
      </div>

    </div>
  )
}

export default Footer