import { NavLink } from "react-router-dom";
import Footer from "../reuseables/footer";
import Navbar from "../reuseables/navbar";

import BloomarketSiteImage from '../../assets/images/bloomarket_site.svg';
import VyesociaSiteImage from '../../assets/images/vye_social_site.svg';
import BloomarketLogo from '../../assets/images/bloo_market_logo.png';
import EctcLogo from '../../assets/images/eccorp.png';
import bgImg from '../../assets/images/bg_home.png';

const Subsidaries = () => {
  
  return (
    <div className='flex flex-col lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-subsidaries w-full'>
        <Navbar/>
        <div className='flex flex-row lg:justify-start justify-center playfair-font gap-2 w-full lg:px-[10rem] lg:text-lg text-white pt-10 lg:pt-[4rem]'>
          <NavLink to='/'>
            HOMEPAGE
          </NavLink>/
          <span className='font-semibold'>SUBSIDIARIES</span>
        </div>
        <div className='flex flex-col gap-5 w-full items-center lg:mt-[5rem] lg:mb-[10rem] mb-20'>
          <div className={`leading-relaxed text-white playfair-font lg:text-[3rem] text-2xl mt-5 font-bold text-center lg:w-1/3 w-4/6`}>
            Subsidiaries
          </div>
          <div className='text-white lg:text-[1.25rem] text-[1rem] lg:w-full w-3/4 text-center'>Explore EC CORP's diverse range of subsidiaries, each specialising in unique areas to meet the evolving needs of our clients and communities.</div>
        </div>
      </div>
      <div className='flex flex-col gap-10 justify-between items-start w-full lg:px-[10rem] px-5'>
        <div className='flex lg:flex-row flex-col-reverse w-full gap-10'>
          <img src={BloomarketSiteImage} className='lg:w-1/2 lg:h-[30rem]' alt='BloomarketSiteImage'/>
          <div className='bg-[#383838] lg:w-1/2 relative'>
            <div className='flex flex-col gap-4 lg:p-10 p-5'>
              <div className='flex flex-row justify-end items-center mb-5'>
                <img src={BloomarketLogo} className='h-12' alt='BloomarketLogo'/>
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                bloo.market is a platform that links both buyers and sellers effortlessly. Few key things you want to look out for; you can shop on bloo.market, you can sell on bloo.market, you can negotiate prices with vendors on bloo.market and much more. We are more focused on event vendors and event planners, so if you are planning an event anytime soon (Parties, Conferences, etc) or you just want to treat yourself, then you should be registered on bloo.market. If you are a vendor (food vendor , MC or DJ,
                baker, tailor, etc) then you should also register on bloo.market to get clients.
              </div>
              <div className='flex flex-row justify-end items-center right-10 lg:absolute bottom-10 gap-8 mt-10'>
                <a href="https://bloo.market" target="_blank" rel="noreferrer" className='bg-[#B39659] p-4 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wide uppercase flex flex-row items-center'>
                  Go to Bloo Market
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col w-full gap-10'>
          <div className='bg-[#383838] lg:w-1/2 relative'>
            <div className='flex flex-col gap-4 lg:p-10 p-5'>
              <div className='flex flex-row justify-end items-center mb-5'>
                <img src={EctcLogo} className='h-20' alt='EctcLogo'/>
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                EC Corp provides expert advice and solutions to businesses seeking to leverage technology for strategic advantage. With a team of experienced technology consultants, we offer a wide range of services, including app, software and website development, IT strategy, digital transformation, cybersecurity, cloud computing and data analytics. Our company's track record of successful projects and satisfied clients speaks to the quality and effectiveness of our services.
              </div>
              <a href="http://eccorp.ltd" target="_blank" rel="noreferrer" className='flex flex-row justify-end items-center right-10 lg:absolute bottom-10 gap-8 mt-10'>
                <div className='bg-[#B39659] p-4 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wide uppercase flex flex-row items-center'>
                  Go to EC Corp
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </div>
              </a>
            </div>
          </div>
          <img src={bgImg} className='lg:w-1/2 lg:h-[30rem]' alt='BloomarketSiteImage'/>
        </div>
        <div className='flex lg:flex-row flex-col-reverse w-full gap-10'>
          <img src={VyesociaSiteImage} className='lg:w-1/2 lg:h-[30rem]' alt='VyesociaSiteImage'/>
          <div className='bg-[#383838] lg:w-1/2 relative'>
            <div className='flex flex-col gap-4 lg:p-10 p-5'>
              <div className='flex flex-row justify-end items-center mb-5'>
                <div className='text-[3rem] text-white'>vYe</div>
              </div>
              <div className='text-white lg:text-xl text-sm leading-relaxed'>
                vYe - Voice Your Experience is a social and political website, presented on a dynamic platform that fosters open dialogue, informed debate, and community engagement around pressing social and political issues. It serves as a hub for individuals, groups, and organizations to share their perspectives, voice their opinions, and collaborate on solutions to complex societal challenges.
              </div>
              <div className='flex flex-row justify-end items-center right-10 lg:absolute bottom-10 gap-8 mt-10'>
                <a href="https://www.vye.social" target="_blank" rel="noreferrer" className='bg-[#B39659] p-4 px-10 text-white font-semibold lg:text-xl text-sm gap-2 tracking-wide flex flex-row items-center'>
                  GO TO vYe
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Subsidaries;
