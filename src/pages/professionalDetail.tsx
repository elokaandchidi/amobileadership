import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
// import BlockContent from '@sanity/block-content-to-react';
import { newsDetailMoreQuery, professionalDetailQuery } from "../utils/data";
import { config  } from "../utils/config";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

interface professionalInfo{
  _id: string;
  name: string;
  body: string;
  title: string;
  mainImageUrl: string;
  role: string;
  education: any;
  experience: any;
}

interface NewInfo{
  _id: string;
  title: string;
  subtitle: string;
  duration: string;
  body: Object;
  _createdAt: string;
}


const ProfessionalDetail = () => {
  const [showEducationAccordion, setShowEducationAccordion] = useState(false)
  // const [showExperienceAccordion, setShowExperienceAccordion] = useState(false)
  const [professionalDetail, setProfessionalDetail] = useState<professionalInfo>({_id: "", name: "", title: "", body: "", mainImageUrl: "", role: "", education:[], experience:[]});
  const [postDetailMore, setPostDetailMore] = useState<NewInfo[]>([]);
  const {id} = useParams();

  const formatImage = (value: string) =>{    
    return value?.replace(/image-/g, "").replace(/-png/g, ".png").replace(/-svg/g, ".svg");
  }
  
  // const serializers = {
  //   list: (props: any) => {
  //     const { type } = props;
  //     const bullet = type === 'bullet';
  //     if (bullet) {
  //       return <ul className='list-disc list-outside py-5 pl-[3rem]'>{props.children}</ul>;
  //     }
  //     return <ol className='list-disc list-inside'>{props.children}</ol>;
  //   },
  //   listItem: (props: any) => <li>{props.children}</li>,
  //   types: {
  //     code: (props: any) => (
  //       <pre data-language={props?.node.language}>
  //         <code>{props?.node.code}</code>
  //       </pre>
  //     ),
  //     image: (props: any) => (
  //       <img
  //         src={`https://cdn.sanity.io/images/${config.sanity.projectId}/production/${formatImage(props?.node.asset._ref)}`}
  //         alt={props.node.alt}
  //       />
  //     ),
  //   },
  // }

  useEffect(() => {    
    if(id){
      const getProfessionalDetailquery = professionalDetailQuery(id);
    
      // client.fetch(getProfessionalDetailquery)
      // .then((data) => {
      //   setProfessionalDetail(data[0]);
      // })

      // const getMorePostquery = newsDetailMoreQuery(id);
    
      // client.fetch(getMorePostquery)
      // .then((data) => {
      //   setPostDetailMore(data);
      // })
    }
    
  }, [id])
  

  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-professionals bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='flex flex-col pb-[20rem] lg:w-9/12 w-11/12 overflow-auto'>
          <Navbar/>
          <div className='flex flex-row lg:justify-start justify-center gap-2 w-full lg:text-lg text-sm text-white pt-10 lg:pt-[4rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <NavLink to='/professionals' className='font-semibold uppercase'>Professionals</NavLink>/
            <span className='font-extrabold tracking-wide uppercase'>{professionalDetail.name}</span>
          </div>
        </div>
      </div>
      <div className={`max-md:flex-col items-center lg:flex-row lg:items-start flex lg:w-9/12 w-11/12 z-20 lg:gap-10 mt-[-15rem]`}>
        <div className='flex flex-col 2xl:w-1/4 lg:w-2/5 gap-5 items-center w-3/4'>
          <img src={professionalDetail.mainImageUrl} alt='logo' className='lg:w-[15rem] lg:h-[15rem] grayscale w-[10rem] h-[10rem] object-fit rounded-full' />
          <div className='text-white lg:text-[2.4rem] text-lg text-center font-semibold  tracking-wide'>
            {professionalDetail.name}
          </div>
          <div className='text-[#B39659] lg:text-[1.5rem] text-center tracking-wide'>{professionalDetail.role}</div>
         
        </div>
        
        <div className='flex flex-col lg:w-8/12 lg:text-[1.4rem] text-[1.2rem] justify-between gap-5 lg:mt-0 mt-5 text-white'>
          <div className='font-semibold leading-relaxed lg:text-[2.7rem] text-[1.5rem] lg:text-start text-center tracking-wider pb-3'>{professionalDetail.title}</div>
          
          {/* <BlockContent className='leading-relaxed ' blocks={professionalDetail?.body} serializers={serializers} /> */}

          <div className='flex flex-col gap-4 mt-5'>
            <div onClick={() => setShowEducationAccordion(!showEducationAccordion)} className='flex flex-row cursor-pointer items-center border-b pb-2 justify-between w-full'>
              <div className='font-semibold text-[#B39659] tracking-widest text-lg lg:text-[1.4rem] '>EDUCATION</div>
              {/* <FaPlus className={`${!showEducationAccordion? '' : 'hidden'} cursor-pointer`}/>
              <FaMinus className={`${showEducationAccordion? '' : 'hidden'} cursor-pointer`}/> */}
            </div>
            <div className={`${showEducationAccordion? '' : 'hidden'}  w-5/6`}>
              {professionalDetail.education?.map((education: string) => (
                  <div className='flex flex-row items-start' key={education}>
                    <span className='pr-2'>.</span>   {education}
                  </div>
              ))}
            </div>
          </div>
          {/* <div className='flex flex-col gap-4 mt-5'>
            <div onClick={() => setShowExperienceAccordion(!showExperienceAccordion)} className='flex flex-row items-center cursor-pointer border-b pb-2 justify-between w-full'>
              <div className='font-semibold tracking-widest text-lg lg:text-[1.4rem] '>EXPERIENCE</div>
              <FaPlus className={`${!showExperienceAccordion? '' : 'hidden'} cursor-pointer`}/>
              <FaMinus className={`${showExperienceAccordion? '' : 'hidden'} cursor-pointer`}/>
            </div>
            <div className={`${showExperienceAccordion? '' : 'hidden'}  w-5/6`}>
              {professionalDetail.experience?.map((experience: string) => (
                <div className='flex flex-row items-start' key={experience}>
                  <span className='pr-2'>.</span>   {experience}
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <div className={`sm:bg-about-mobile bg-about2 w-full bg-cover bg-no-repeat lg:mb-0 mb-20`}>
        <div className='bg-[#191919] bg-opacity-70 h-[15rem] flex flex-col items-center justify-center'>
          <NavLink to={"/professionals"} className='border border-white  tracking-wider flex flex-row gap-2 p-3 lg:px-[5rem] px-10 items-center text-white uppercase font-bold text-sm lg:text-xl'>
            The Professionals
            {/* <BsChevronRight className="lg:text-[1.3rem]"/> */}
          </NavLink>
        </div>
      </div>

      <div className={`flex flex-col lg:items-center lg:py-10 py-5 lg:w-9/12 w-11/12`}>
        <div className='text-white lg:text-[1.6rem]  text-lg font-semibold tracking-wider'>
          UPDATES
          <div className='border-b-2 border-[#B39659] lg:w-1/3 w-2/12 pt-3'></div>
        </div>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-[4rem] w-full gap-5 lg:mt-10 mt-5'>
          {postDetailMore?.map((post) => (
            <div className='bg-[#383838] w-full' key={post._id}>
              <div className='flex flex-col gap-4 lg:p-10 p-5'>
                <div className='text-white lg:text-[1.5rem] text-lg mb-3 font-bold sm:line-clamp-1'>
                  {post?.title}
                </div>
                <div className='text-white lg:text-lg text-sm sm:h-[7rem] line-clamp-4'>
                  {post?.subtitle}
                </div>
              </div>

              <div className='flex flex-col items-center lg:gap-3 gap-1 border-t lg:py-5 py-3'>
                <NavLink to={`/updates/${post?._id}`} className=' text-[#B39659] lg:text-xl font-semibold gap-2 flex flex-row items-center'>
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
        <div className={`${postDetailMore.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3 items-center justify-center text-white my-[5rem]`}>
          <div className='text-2xl  font-semibold mb-3'>No news found</div>
        </div>
        <div className='flex flex-row w-full justify-center items-center gap-8 mt-10'>
          <NavLink to={'/updates'} className='border border-white  p-3 px-5 lg:px-10 text-white font-semibold lg:text-lg text-sm gap-2 tracking-wider uppercase flex flex-row items-center'>
            Read More
          </NavLink>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default ProfessionalDetail;