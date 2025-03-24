import objective1Img from "../assets/images/home-objective1.webp"
import objective2Img from "../assets/images/home-objective2.webp"
import objective3Img from "../assets/images/home-objective3.png"
import objective4Img from "../assets/images/home-objective4.webp"
import objective5Img from "../assets/images/home-objective5.png"

import TeamsComponent from "../components/team";

const About = () => {
  
  return (
    <div className='flex flex-col items-center gap-10 lg:w-8/12 w-11/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl mt-4 font-semibold">About Us</div>
      <div className="flex flex-col gap-10 md:w-4/5">
        <div className="flex flex-col gap-5">
          <div className="font-semibold md:text-[2rem] text-lg">Mission</div>
          <div className="leading-relaxed md:text-sm text-xs">Our Mission is to inspire creative thinking and prepare individuals for the future, utimately making a postive impact on their communities</div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold md:text-[2rem] text-lg">Vision</div>
          <div className="leading-relaxed md:text-sm text-xs">Our vision at the Amobi Leadership School is to transform ambition into action, inspiring and empowering young adults to succeed in their futures.</div>
        </div>
        <div className="grid md:grid-cols-2 w-full text-sm">
          <div className="grid grid-cols-2 bg-[#e54926]">
            <div className="flex flex-col gap-5 md:p-7 p-4 text-white">
              <div className="font-EB font-semibold md:text-lg text-sm">Objective 1</div>
              <div className="leading-relaxed md:text-sm text-xs">Prepare young adults for further education and personal growth.</div>
            </div>
            <img src={objective1Img} alt="objectiveImg" className="aspect-square h-full object-cover"/>
          </div>
          <div className="grid grid-cols-2 bg-[#f17811]">
            <div className="flex flex-col gap-5 md:p-7 p-4 text-white">
              <div className="font-EB font-semibold md:text-lg text-sm">Objective 2</div>
              <div className="leading-relaxed md:text-sm text-xs">Attract investment and opportunities to our community through academic programs</div>
            </div>
            <img src={objective2Img} alt="objectiveImg" className="aspect-square h-full object-cover"/>
          </div>
          <div className="grid grid-cols-2 bg-[#1f73d4]">
            <img src={objective3Img} alt="objectiveImg" className="aspect-square h-full object-cover"/>
            <div className="flex flex-col gap-5 md:p-7 p-4 text-white">
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
        <TeamsComponent />
      </div>
    </div>
  )
}

export default About;