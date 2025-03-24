import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

const Career = () => {
  
  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-professionals bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='h-full lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row  lg:justify-start justify-center  gap-2 w-full lg:text-xl text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <span className='font-semibold'>CAREERS</span>
          </div>
          <div className='flex flex-col gap-5 w-full items-center lg:mt-[5rem] mb-20'>
            <div className={`tracking-wider text-white lg:text-[3rem] text-3xl mt-5 font-bold text-center lg:w-1/3 w-4/6`}>
              Careers
            </div>
          </div>
          <div className='flex lg:flex-row flex-col gap-5 justify-between items-start w-full lg:mb-36'>
            <div className='flex flex-col lg:w-2/6 w-full gap-3 lg:text-lg text-sm'>
              <div className='text-white  lg:text-[3rem] lg:text-start text-center text-[1.7rem] leading-snug tracking-wider font-bold'>
                Committed to providing the highest quality to our clients.
              </div>
            </div>
            <div className='lg:w-3/5 flex flex-col  lg:mt-0 mt-20 gap-4 text-lg text-white'>
              <div className='leading-relaxed'>EC Corp is committed to providing and delivering the highest quality of technology consulting service to its clients, which means hiring elite consultants capable of delivering extraordinary results. We seek individuals who are committed to maintaining our record of excellence and upholding our impeccable reputation. Although we infrequently hire new consultants and we are extremely selective in our hiring decisions, we are always looking for the next great contributor to the team</div>
              <div className='text-white w-1/2 lg:text-lg text-sm font-semibold  tracking-wide'>
                HOW TO APPLY
                <div className='border-b-2 border-[#B39659] lg:w-2/12 w-3/12 pt-3'></div>
              </div>
              <div className='flex lg:flex-row flex-col lg:gap-3 gap-1 lg:text-lg text-sm lg:items-center '>
                Submit a CV and cover letter to 
                <div className='flex flex-row gap-3 lg:text-lg items-center text-[#D1D0CF]'>
                  <div className='underline'>“info@ectc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`sm:bg-about-mobile bg-about2 bg-cover bg-no-repeat w-full grayscale mb-10`}>
        <div className='bg-[#191919] bg-opacity-70 h-[15rem] flex flex-col items-center justify-center'>
          <NavLink to={"/professionals"} className='border border-white  tracking-wider flex flex-row gap-2 p-3 lg:px-[5rem] px-10 items-center text-white uppercase font-bold text-sm lg:text-xl'>
            The Professionals
          </NavLink>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Career;