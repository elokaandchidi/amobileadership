import { useEffect, useState } from "react";
import BlockContent from '@sanity/block-content-to-react';


import { config } from "../utils/config";
import { client } from "../utils/client";
import { NewInfo, PrizeWinnerInfo } from "../utils/interface";
import { newsDetailMoreQuery, winnersTop3Query } from "../utils/data";

import StepFlow from "../components/stepFlow";
import TeamsComponent from "../components/team";
import ImageGallery from "../components/imageGallery";

import noImg from "../assets/images/no-image.jpg"

import prizeImg from "../assets/images/home-prize.png"
import missionImg from "../assets/images/home-mission.webp"
import competitionImg from "../assets/images/home-competition.webp"
import participateImg from "../assets/images/home-participate.webp"
import donationsImg from "../assets/images/home-donations.webp"
import winnerImg from "../assets/images/home-winner.webp"

import objective1Img from "../assets/images/home-objective1.webp"
import objective2Img from "../assets/images/home-objective2.webp"
import objective3Img from "../assets/images/home-objective3.png"
import objective4Img from "../assets/images/home-objective4.webp"
import objective5Img from "../assets/images/home-objective5.png"

import mechanicsImg from "../assets/images/home-mechanics.jpeg"
import nationalsImg from "../assets/images/home-nationals.webp"
import regionalsImg from "../assets/images/home-regionals.webp"
import studentsImg from "../assets/images/home-students.webp"
import parentsImg from "../assets/images/home-parents.webp"
import institutionsImg from "../assets/images/home-institutions.webp"
import sponsorsImg from "../assets/images/home-sponsors.webp"
import schoolsImg from "../assets/images/home-school.webp"
import libraryImg from "../assets/images/home-library.png"
import { NavLink } from "react-router-dom";
import DonationForm from "../components/donationForm";



const Home = () => {
  const [newsList, setNewsList] = useState<NewInfo[]>([]);
  const [showDonateModal, setShowDonateModal] = useState(false);

  const [winnerList, setWinnerList] = useState<PrizeWinnerInfo[]>([]);
  
  const fetchParticipants = () =>{
      // setLoading(true);
      client.fetch(winnersTop3Query())
      .then((data) => {
      setWinnerList(data);
      // setLoading(false);
      })
  }

  useEffect(() => {
      fetchParticipants();
      // eslint-disable-next-line
  }, []);
  
  const formatImage = (value: string) =>{    
    return value?.replace(/image-/g, "").replace(/-png/g, ".png").replace(/-svg/g, ".svg");
  }

  const serializers = {
    list: (props: any) => {
      const { type } = props;
      const bullet = type === 'bullet';
      if (bullet) {
        return <ul className='list-disc list-outside py-5 pl-[3rem]'>{props.children}</ul>;
      }
      return <ol className='list-disc list-inside'>{props.children}</ol>;
    },
    listItem: (props: any) => <li>{props.children}</li>,
    types: {
      code: (props: any) => (
        <pre data-language={props?.node.language}>
          <code>{props?.node.code}</code>
        </pre>
      ),
      image: (props: any) => (
        <img
          src={`https://cdn.sanity.io/images/${config.sanity.projectId}/production/${formatImage(props?.node.asset._ref)}`}
          alt={props.node.alt}
        />
      ),
    },
  }

  const handleCloseModal = (value: boolean) => {
    setShowDonateModal(value);
  };

  useEffect(() => {
    const getNewsQuery = newsDetailMoreQuery('');

    client.fetch(getNewsQuery)
    .then((data) => {
      setNewsList(data);
    })
  }, [])
  return (
    <div className='flex flex-col items-center md:gap-[5rem] gap-10 w-full'>
      {showDonateModal && <DonationForm closeModal={(value) => handleCloseModal(value)}/>}
      <div className='banner-home bg-cover flex flex-col items-center w-full'>
        <div className='w-full flex flex-col justify-center items-center bg-[#1f223d]/84 lg:py-[15rem] py-[7rem] h-full'>
          <div className='flex flex-col lg:gap-10 gap-8 w-11/12 lg:w-11/12 xl:w-8/12 items-center text-white'>
            <div className="font-EB text-center text-4xl lg:text-[3rem] font-semibold">Empower Minds, Ignite Change: <br/>Fuel Education</div>
            <div className="font-nunito text-center lg:w-1/2">We are a charity organization dedicated to driving education, academic excellence, entrepreneurship and workplace skills through our impactful essay competition program. Join us today!</div>
            <div className="flex flex-row gap-5 justify-center items-center font-EB font-medium">
              <NavLink to="/enroll" className="p-3 px-5 rounded-sm text-center bg-[#b8935c]/80">
                ENROLL
              </NavLink>
              <div onClick={() => setShowDonateModal(true)} className="p-3 px-5 rounded-sm text-center text-[#1f223d] bg-white cursor-pointer">
                DONATE
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 w-11/12 lg:w-11/12 xl:w-8/12 text-sm">
        <div className="grid grid-cols-2 bg-[#7a57d1]">
          <div className="flex flex-col justify-around gap-5 p-7 text-white">
            <div className="font-EB font-semibold md:text-lg text-sm">Our Mission</div>
            <div className="leading-relaxed md:text-sm text-xs">Our Mission is to inspire creative thinking and prepare individuals for the future, utimately making a postive impact on their communities</div>
            <NavLink to="/about" className="uppercase border rounded-sm py-3 lg:w-1/2 text-center font-EB text-xs">Read More</NavLink>
          </div>
          <img src={missionImg} alt="missionImg" className="aspect-4/5 h-full object-cover"/>
        </div>
        <div className="grid grid-cols-2 bg-[#c50c66]">
          <div className="flex flex-col justify-around gap-5 md:gap-3 p-7 text-white order-2 md:order-1">
            <div className="font-EB font-semibold md:text-lg text-sm">The Essay Competition</div>
            <div className="leading-relaxed md:text-sm text-xs">The AEP competition is open to anyone who wants to participate and gain new skills</div>
            <NavLink to="/amobi-essay-prize" className="uppercase border rounded-sm py-3 lg:w-3/4 xl:w-1/2 text-center font-EB text-xs">How it works</NavLink>
          </div>
          <img src={competitionImg} alt="competitionImg" className="aspect-4/5 h-full object-cover order-1 md:order-2"/>
        </div>
        <div className="grid grid-cols-2 bg-[#f17811]">
          <img src={prizeImg} alt="prizeImg" className="aspect-4/5 h-full object-cover order-2 md:order-1"/>
          <div className="flex flex-col justify-around gap-5 md:gap-3 p-7 text-white order-1 md:order-2">
            <div className="font-EB font-semibold md:text-lg text-sm">Prizes to be Won</div>
            <div className="leading-relaxed md:text-sm text-xs">Every completing student will be entitled to a recommendation letter to any academic or works institutions globally</div>
            <NavLink to="/prize" className="uppercase border rounded-sm py-3 lg:w-1/2 text-center font-EB text-xs">Read More</NavLink>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#141f40]">
          <img src={participateImg} alt="participateImg" className="aspect-4/5 h-full object-cover"/>
          <div className="flex flex-col justify-around gap-5 md:gap-3 p-7 text-white">
            <div className="font-EB font-semibold md:text-lg text-sm">How to Participate</div>
            <div className="leading-relaxed md:text-sm text-xs">You can participate as a parent, student and even sponsor. Scroll to find out more.</div>
            <NavLink to="/enroll" className="uppercase border rounded-sm py-3 lg:w-3/5 text-center font-EB text-xs">Find Out More</NavLink>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#1c923d]/80">
          <div className="flex flex-col justify-around gap-5 md:gap-3 p-7 text-white">
            <div className="font-EB font-semibold md:text-lg text-sm">Donate</div>
            <div className="leading-relaxed md:text-sm text-xs">There are many ways to get involved. if you would like to, please contact us through our social media channels or just DONATE</div>
            <div onClick={() => setShowDonateModal(true)} className="uppercase cursor-pointer border rounded-sm py-3 lg:w-3/4 text-center font-EB text-xs">Give to our cause</div>
          </div>
          <img src={donationsImg} alt="donationsImg" className="aspect-4/5 h-full object-cover"/>
        </div>
        <div className="grid grid-cols-2 bg-[#b8935c]/90">
          <div className="flex flex-col justify-around gap-5 md:gap-3 p-7 text-white order-2 md:order-1">
            <div className="font-EB font-semibold md:text-lg text-sm">Past Winners</div>
            <div className="leading-relaxed md:text-sm text-xs">Our winners can testify to how AEP has equipped them with life changing skills</div>
            <NavLink to="/winnersAndParticipants" className="uppercase border rounded-sm py-3 lg:w-3/5 text-center font-EB text-xs">See all winners</NavLink>
          </div>
          <img src={winnerImg} alt="winnerImg" className="aspect-4/5 h-full object-cover order-1 md:order-2"/>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 items-center w-11/12 lg:w-11/12 xl:w-8/12 text-sm">
        <div className="font-EB font-semibold md:text-[3rem] text-4xl">Our Mission</div>
        <div className="flex flex-col gap-7 opacity-80">
          <div>
            We want to empower tomorrow’s leaders by arming them early with skills for academics, careers, and entrepreneurship. Building Nigerian youth for a brighter society!
          </div>
          <div>
            Our mission is to inspire creative thinking and prepare individuals for the future, ultimately making a positive impact on their communities.
          </div>
          <div>
            Our vision at the Amobi Leadership School is to transform ambition into action, inspiring and empowering young adults to succeed in their futures.
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 w-11/12 lg:w-11/12 xl:w-8/12 text-sm">
        <div className="grid grid-cols-2 bg-[#e54926]">
          <div className="flex flex-col gap-5 md:p-7 p-4 text-white">
            <div className="font-EB font-semibold md:text-lg text-sm">Objective 1</div>
            <div className="leading-relaxed md:text-sm text-xs">Prepare young adults for further education and personal growth.</div>
          </div>
          <img src={objective1Img} alt="objectiveImg" className="aspect-square h-full object-cover"/>
        </div>
        <div className="grid grid-cols-2 bg-[#f17811]">
          <div className="flex flex-col gap-5 md:p-7 p-4 text-white order-2 md:order-1">
            <div className="font-EB font-semibold md:text-lg text-sm">Objective 2</div>
            <div className="leading-relaxed md:text-sm text-xs">Attract investment and opportunities to our community through academic programs</div>
          </div>
          <img src={objective2Img} alt="objectiveImg" className="aspect-square h-full object-cover order-1 md:order-2"/>
        </div>
        <div className="grid grid-cols-2 bg-[#1f73d4]">
          <img src={objective3Img} alt="objectiveImg" className="aspect-square h-full object-cover order-2 md:order-1"/>
          <div className="flex flex-col gap-5 md:p-7 p-4 text-white order-1 md:order-2">
            <div className="font-EB font-semibold md:text-lg text-sm">Objective 3</div>
            <div className="leading-relaxed md:text-sm text-xs">Nurture the next generation of leaders through collaboration with parents, students, teachers, and institutions</div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#0e9617]">
          <img src={objective4Img} alt="objectiveImg" className="aspect-square h-full object-cover"/>
          <div className="flex flex-col gap-5 md:p-7 p-4 text-white">
            <div className="font-EB font-semibold md:text-lg text-sm">Objective 4</div>
            <div className="leading-relaxed md:text-sm text-xs">National expansion of the AEP essay competition for secondary academic institutions.</div>
          </div>
        </div>
        <div className="grid grid-cols-2 bg-[#d99f7a]">
          <div className="flex flex-col gap-5 md:p-7 p-4 text-white">
            <div className="font-EB font-semibold md:text-lg text-sm">Objective 5</div>
            <div className="leading-relaxed md:text-sm text-xs">Offer certification and recommendation letters to successful participants for global educational institutions.</div>
          </div>
          <img src={objective5Img} alt="objectiveImg" className="aspect-square h-full object-cover"/>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 items-center w-11/12 lg:w-11/12 xl:w-8/12 text-sm">
        <div className="flex flex-col gap-7">
          <div className="font-EB font-semibold md:text-[3rem] text-4xl w-full leading-tight">Essay Competition Mechanics</div>
          <div className="opacity-80">
            The AEP competition is open to anyone who wants to participate and gain new skills.<br/>
            Students will be given a question about current affairs and asked to do independent research on the subjects.
          </div>
          <div className="opacity-80">
            Essays will be marked and prizes given for the best essays nationally and regionally.
          </div>
          <div className="opacity-80">
            Parents will be provided an opportunity for detailed feedback on their child’s performance with recommendations for improvements.
          </div>
        </div>
        <img src={mechanicsImg} alt="mechanicsImg" className="aspect-square object-cover "/>
      </div>
      <div className="w-11/12 lg:w-11/12 xl:w-8/12 flex flex-col items-center">
        <StepFlow/>
      </div>
      <div className="flex flex-col gap-2 items-center text-sm w-11/12 lg:w-11/12 xl:w-8/12">
        <div className="font-EB font-semibold text-[2rem] leading-tight">Prizes and Awards</div>
        <div className="opacity-80 font-nunito mt-5">
          Prizes will be given for the top 3 nationally 
        </div>
        <div className="opacity-80 font-nunito">
          Prizes will be given for the top 3 per region
        </div>
        <div className="opacity-80 font-nunito">
          Every student will earn a certificate of participation 
        </div>
        <div className="opacity-80 font-nunito text-center">
          Every completing student will be entitled to a recommendation letter to any academic or work institution globally.
        </div>
        <div className="mt-5 grid md:grid-cols-2 font-EB w-full">
          <div className="grid grid-cols-2 bg-[#7a57d1]">
            <div className="flex flex-col gap-5 p-7 text-white">
              <div className=" font-semibold text-lg">Nationals</div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-row items-center justify-between">
                  <div className="">1st</div>
                  <div className="font-nunito">NGN 100,000</div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="">2nd</div>
                  <div className="font-nunito">NGN 60,000</div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="">3rd</div>
                  <div className="font-nunito">NGN 30,000</div>
                </div>
              </div>
            </div>
            <img src={nationalsImg} alt="nationalsImg" className="aspect-16/9 h-full object-cover"/>
          </div>
          <div className="grid grid-cols-2 bg-[#c50c66]">
            <img src={regionalsImg} alt="regionalsImg" className="aspect-16/9 h-full object-cover"/>
            <div className="flex flex-col gap-5 p-7 text-white">
              <div className=" font-semibold text-lg">Regionals</div>
              <div className="flex flex-col gap-1 w-full">
                <div className="flex flex-row items-center justify-between">
                  <div className="">1st</div>
                  <div className="font-nunito">NGN 50,000</div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="">2nd</div>
                  <div className="font-nunito">NGN 30,000</div>
                </div>
                <div className="flex flex-row items-center justify-between">
                  <div className="">3rd</div>
                  <div className="font-nunito">NGN 15,000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center text-sm w-11/12 lg:w-11/12 xl:w-8/12">
        <div className="font-EB font-semibold text-[2rem] leading-tight">How to Participate</div>
        <div className="opacity-80 font-nunito mt-5">
          Listed below are the ways you can participate in The AEP Competition.  Read the section that applies to you and complete the form. 
        </div>
        <div className="grid md:grid-cols-2 items-center gap-10 w-full text-sm mt-10">
          <img src={studentsImg} alt="studentsImg" className="aspect-square object-cover order-1"/>
          <div className="flex flex-col gap-7 order-2">
            <div className="font-EB font-bold text-2xl leading-tight">Students</div>
            <div className="opacity-80">
              Tell your parent or school you want to get involved.<br/>
              Fill in the form and send us your details
            </div>
            <div className="flex flex-row gap-5 items-center font-EB font-medium">
              <NavLink to={'/enroll'} state={{ type: 'student' }} className="p-3 px-5 rounded-sm bg-[#b8935c]/80 uppercase text-white">
                Complete form
              </NavLink>
            </div>
          </div>
          <div  className="flex flex-col gap-7 md:order-3 order-4">
            <div className="font-EB font-bold text-2xl leading-tight">Parent</div>
            <div className="opacity-80">
              Read “<NavLink to='/amobi-essay-prize' className="underline">How it works</NavLink>” and understand the benefits to your child and their future<br />
              Complete registration and pay fee <br/>
              Receive course materials, timelines and other supporting information.  Start the learning!!
            </div>
            <div className="flex flex-row gap-5 items-center font-EB font-medium">
              <NavLink to={'/enroll'} state={{ type: 'parent' }} className="p-3 px-5 rounded-sm bg-[#b8935c]/80 uppercase text-white">
                Complete form
              </NavLink>
            </div>
          </div>
          <img src={parentsImg} alt="parentsImg" className="aspect-square object-cover md:order-4 order-3"/>
          <img src={institutionsImg} alt="institutionsImg" className="aspect-square object-cover order-5"/>
          <div className="flex flex-col gap-7 order-6">
            <div className="font-EB font-bold text-2xl leading-tight">Educational Institutions</div>
            <div className="opacity-80 text-sm">
              Read “<NavLink to='/amobi-essay-prize' className="underline">How it works</NavLink>” and understand the benefits for your students, your institution and yourself.
            </div>
            <div className="flex flex-row gap-5 items-center font-EB font-medium">
              <NavLink to={'/enroll'} state={{ type: 'institutions' }} className="p-3 px-5 rounded-sm bg-[#b8935c]/80 uppercase text-white">
                Complete form
              </NavLink>
            </div>
          </div>
          <div className="flex flex-col gap-7 md:order-7 order-8">
            <div className="font-EB font-bold text-2xl leading-tight">Sponsors</div>
            <div className="opacity-80">
              There are many ways to get involved.  Let us know your thoughts.
            </div>
            <div className="flex flex-row gap-5 items-center font-EB font-medium">
              <NavLink to={'/enroll'} state={{ type: 'sponsors' }} className="p-3 px-5 rounded-sm bg-[#b8935c]/80 uppercase text-white">
                Complete form
              </NavLink>
            </div>
          </div>
          <img src={sponsorsImg} alt="sponsorsImg" className="aspect-square object-cover md:order-8 order-7"/>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center text-sm w-11/12 lg:w-11/12 xl:w-8/12">
        <div className="font-EB font-semibold text-[2rem] leading-tight">Donate or Get Involved</div>
        <div className="opacity-80 font-nunito mt-5 text-center">
          There are many ways to get involved. If you would like to, please contact us.
        </div>
      </div>
      <div className="flex flex-col gap-5 items-center text-sm w-11/12 lg:w-11/12 xl:w-8/12">
        <div className="font-EB font-semibold text-[2rem] leading-tight">Our History</div>
        <div className="opacity-80 font-nunito mt-5 text-center md:w-2/4 leading-6">
          The Amobi Royal family history can be traced to Ogidi, Anambra State, Nigeria; and the family has always strived to further education as a catalyst for good leadership in the community. <NavLink to="/background-and-history" className="text-blue-400">Read more</NavLink>.
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 font-EB w-full">
          <img src={libraryImg} alt="libraryImg" className="lg:aspect-[3/4] aspect-square h-full object-cover"/>
          <div className="flex flex-col gap-5 lg:p-7 p-4 text-white bg-[#f17811]">
            <div className=" font-semibold lg:text-lg text-sm">2023</div>
            <div className="font-nunito leading-6 lg:text-sm text-xs">The 6th Edition of the Amobi Essay Prize was held in ighobi College, Lagos (Boys school).</div>
            <div className="font-nunito mt-2 leading-6 lg:text-sm text-xs">The 5th Edition of the Amobi Essay Prize was held in Vivan Flower Memorial College, Lagos (Boys school).</div>
          </div>
          <img src={schoolsImg} alt="schoolsImg" className="lg:aspect-[3/4] aspect-square h-full object-cover"/>
          <div className="flex flex-col gap-5 lg:p-7 p-4 text-white bg-[#0e9617]">
            <div className=" font-semibold lg:text-lg text-sm">2022</div>
            <div className="font-nunito leading-6 lg:text-sm text-xs">The 4th Edition of the Amobi Essay Prize was held in Grange Secondary School, Lagos (Co-ed).</div>
            <div className="font-nunito mt-2 leading-6 lg:text-sm text-xs">The 3th Edition of the Amobi Essay Prize was held in Queen's College, Lagos (Girls school).</div>
          </div>
        </div>
        <NavLink to="/background-and-history" className="p-3 px-5 rounded-sm bg-[#b8935c]/90 uppercase text-white font-EB font-semibold">
          Read More
        </NavLink>
      </div>
      <div className="flex flex-col gap-5 items-center text-sm w-11/12 lg:w-11/12 xl:w-8/12">
        <div className="font-EB font-semibold text-[2rem] leading-tight text-center">Participants & Previous Winners</div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 font-EB w-full">
          {winnerList?.map((winner, index) => (
            <div key={index} className="flex flex-col w-full max-w-4xl mx-auto justify-between items-center gap-7 lg:py-10 p-4 border border-gray-200 rounded-lg">
              <div 
                className={`${index % 2 === 0 ? `bg-[url('/images/bg-img-1.svg')]` : `bg-[url('/images/bg-img-2.svg')]`} flex flex-col relative items-center justify-center w-full h-[15rem] bg-cover bg-center bg-no-repeat`}
                style={{
                  backgroundSize: 'contain',
                  backgroundPosition: 'center center'
                }}
              >
                <img 
                  src={winner?.imageUrl || noImg} 
                  alt="winner" 
                  className="object-cover relative w-3/5 rounded-full aspect-square shadow-lg"
                />
              </div>

              <div className="w-full px-2 space-y-4">
                <h2 className="font-bold text-lg lg:text-xl text-gray-800 truncate">
                  {winner?.name}
                </h2>
                <div className="flex flex-row font-nunito font-semibold italic text-[#b8935c] justify-between items-center gap-3">
                  <div className="">{winner?.school}</div>
                  <div className="">{winner?.year}</div>
                </div>
                <div className="mt-3 w-full">
                  <span className="inline-block bg-[#141f3f] px-4 py-2 text-xs lg:text-sm text-white shadow-sm">
                    {winner?.position}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <NavLink to="/winnersAndParticipants" className="p-3 px-5 rounded-sm bg-[#b8935c]/90 uppercase text-white font-EB font-semibold">
          All Participants
        </NavLink>
      </div>
      <ImageGallery/>
      <div className="flex flex-col w-11/12 lg:w-11/12 xl:w-8/12 gap-5">
        <div className="text-[2rem] font-semibold">News & Updates</div>
        <div className="grid md:grid-cols-3 w-full gap-10">
          {newsList.length > 0 && newsList?.map((post) => (
              <div className="flex flex-col w-full font-nunito" key={post._id}>
                <img src={post.imageUrl} alt={post.title} className="aspect-2/1 object-cover"/>
                <div className="font-bold text-lg my-3 line-clamp-2 leading-6 hover:underline">{post.title}</div>
                <div className="opacity-80 text-sm w-full line-clamp-3">
                  <BlockContent className='' blocks={post?.body} serializers={serializers} />
                </div>
                <span className="underline opacity-80 text-sm">Read more</span>
              </div>
          ))}
        </div>
        <div className={`${newsList.length !== 0 ? 'hidden' : ''} w-full flex flex-col gap-3  items-center justify-center  my-[4rem]`}>
          <div className='text-lg font-semibold mb-3'>No news found</div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="p-3 px-5 rounded-sm bg-[#b8935c]/90 uppercase text-white font-EB font-semibold text-sm">
            Read More
          </div>
        </div>
      </div>
      <div className='banner2-home bg-cover flex flex-col items-center w-full'>
        <div className='w-full flex flex-col justify-center items-center bg-black/50 py-[7rem] h-full'>
          <div className='flex flex-col gap-5 md:w-1/3 w-4/5 font-nunito items-center text-white'>
            <div className="font-EB text-center text-sm">Testimonial</div>
            <div className="text-center">“The academic training and projects offered by Amobi Leadership school, is helping to redefine students understanding of leadership and personal development in Nigeria.</div>
            <div className="text-center">The students found the experience to be transformative, as they were encouraged to analyse and think critically, using real-world case studies</div>
            <div className="text-center">The next generation of youths and leaders will benefit greatly from the programmes.</div>
            <div className="text-center">We are pleased to be partners”</div>
            <div className="text-center">
              <div className="text-center font-semibold">Mr Andrew Ali Agada</div>
              <div className="font-EB text-center">Principal, King’s College, Lagos</div>

            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 lg:w-11/12 xl:w-8/12 flex flex-col items-center">
        <TeamsComponent />
      </div>
      <div className="w-full flex flex-col justify-center gap-3 items-center bg-[#1f223d] text-white py-[7rem] mb-24 lg:mb-50">
        <div className="font-EB text-center text-[2rem] font-semibold">Want to Get Involved?</div>
        <a href="https://www.instagram.com/amobifoundation?igshid=MzMyNGUyNmU2YQ%3D%3D" target="_blank" className="p-3 px-5 rounded-sm bg-[#b8935c]/90 uppercase text-white font-EB font-medium">
          Contact us
        </a>
      </div>
    </div>
  )
}

export default Home;