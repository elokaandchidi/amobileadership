import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";


interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  body: string;
}


const Services = () => {
  const [selected, setSelected] = useState(0)
  const [newsList, setNewsList] = useState<NewInfo[]>([]);

  
  useEffect(() => {
    // const getNewsQuery = newsDetailMoreQuery('');

    // client.fetch(getNewsQuery)
    //   .then((data) => {
    //     setNewsList(data);
    //   })

  }, [])
  
  
  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-services bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row lg:justify-start justify-center  gap-2 w-full lg:text-xl text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <span className='font-semibold uppercase'>Services</span>
          </div>
          <div className='flex flex-col w-full items-center lg:mt-[5rem] lg:mb-[25rem] mb-[10rem]'>
            <div className={`tracking-wider text-white lg:text-[3.5rem] text-2xl my-5 font-bold text-center`}>
              Service Areas
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col lg:w-9/12 w-11/12 lg:items-center lg:mt-[-20rem] mt-[-12rem]'>
        <div className='flex flex-col w-full border-t border-white'>
          {/* {serviceList?.map((service, index) => (
            <div key={index} className='flex flex-col gap-4 mt-5 border-b text-white'>
              <div onClick={() => setSelected(selected !== service.id ? service.id : 0)} className='flex flex-row cursor-pointer items-center pb-2 lg:py-7  justify-between w-full'>
                <div className='tracking-widest text-lg lg:text-[3rem] uppercase font-semibold'>{service.title}</div>
                <FaPlus className={`${selected !== service.id? '' : 'hidden'} text-[#B39659] text-lg lg:text-[1.5rem]`}/>
                <FaMinus className={`${selected === service.id? '' : 'hidden'} text-[#B39659] text-lg lg:text-[1.5rem]`}/>
              </div>
              <div className={`${selected === service.id? '' : 'hidden'} pb-4 w-full`}>
                <div className={`w-full line-clamp-3 lg:text-[1.4rem] text-lg`}>
                  {service.subtitle}
                </div>
                <NavLink to={`/services/${service.title}`} className='flex flex-col text-[#B39659] text-lg font-semibold uppercase gap-3'>
                  Read More
                </NavLink>
              </div>
            </div>
          ))} */}
        </div>
      </div>
      <div className='flex flex-col lg:items-center lg:w-9/12 w-11/12 pt-5'>
        <div className='text-white lg:text-[2rem] text-xl font-semibold tracking-wider'>
          UPDATES
          <div className='border-b-2 border-[#B39659] lg:w-1/3 w-2/12 pt-3'></div>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[4rem] w-full gap-5 lg:mt-10 mt-5'>
          {newsList?.map((post) => (
            <div className='bg-[#383838] w-full' key={post._id}>
              <div className='flex flex-col gap-4 lg:p-10 p-5'>
                <div className='text-white lg:text-[1.5rem] text-lg mb-3 font-bold line-clamp-2'>
                  {post?.title}
                </div>
                <div className='text-white lg:text-lg text-sm leading-relaxed line-clamp-5'>
                  {post?.subtitle}
                </div>
              </div>

              <div className='flex flex-col items-center lg:gap-3 gap-1 border-t lg:py-5 py-3'>
                <NavLink to={`/updates/${post?._id}`} className='text-[#B39659] lg:text-xl font-semibold gap-2 flex flex-row items-center'>
                  READ ARTICLE
                  <i className="fi fi-rr-angle-small-right mb-[-.3rem]"></i>
                </NavLink>
                <div className='text-white lg:text-lg text-sm gap-2 flex flex-row items-center'>
                  <i className="fi fi-rr-hourglass-end mb-[-.3rem]"></i>
                  {post?.duration} mins read
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={`${newsList.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3 items-center justify-center text-white my-[5rem]`}>
          <div className='text-2xl font-semibold mb-3'>No news found</div>
        </div>
        <div className='flex flex-row w-full justify-center items-center gap-8 mt-10'>
          <NavLink to={'/updates'} className='border border-white p-3 px-5 lg:px-10 text-white font-semibold lg:text-lg text-sm gap-2 tracking-wider uppercase flex flex-row items-center'>
            Read More
          </NavLink>
        </div>
      </div>
        
      <Footer/>
    </div>
  )
}

export default Services;