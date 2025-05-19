import schoolsImg from "../assets/images/home-school.webp"
import libraryImg from "../assets/images/home-library.png"
import buildingImg from "../assets/images/home-building.png"
import bookImg from "../assets/images/home-book-on-table.webp"

const BackgroundHistory = () => {
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">Background and History</div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5">
        <div className="flex flex-col gap-5 items-center w-full lg:text-lg xl:text-sm">
          <div className="flex flex-col gap-7">
            <div className="opacity-80">
             The Amobi Royal family history can be traced back to Ogidi, Anambra state, Nigeria; and the family has always strived to further education as a catalyst for good leadership in the community.
            </div>
            <div className="opacity-80">
             Igwe Amobi I of Ogidi, Walter Okafor Amobi, was trained in Christian education and culture, and was active in the Palace Council of the Obi of Onitsha, and adjudicated in its native courts. A very wealthy and prosperous noble, he was appointed by Queen Victoria in 1898, and worked closely with the Royal Niger Company in Nigeria. 
            </div>
            <div className="opacity-80">
            Igwe Amobi II of Ogidi, Prince Benjamin Olisaeloka Amobi, succeeded his father on the throne, and he later represented the Colony and Protectorate of Nigeria at the coronation of King George VI of United Kingdom in 1937.
            </div>
            <div className="opacity-80">
            During the long reign of Igwe Benjamin O. Amobi II of Ogidi, the monarch maintained cordial relations with the rulers of other kingdoms and provinces, includinig the Oba of Benin, the Obi of Onitsha, the Ooni of Ife and the Oba of Lagos.
            </div>
            <div className="opacity-80">
              Igwe Amobi III of Ogidi, Dr. Benedict Vincent Obiora Amobi, succeeded his father on the throne in 1975.
            </div>
            <div className="opacity-80">
              Igwe Amobi IV of Ogidi, Engr. Walter Nnamdi Ifediora Amobi ascended to the throne in 1986 and continued to invest and advance education.
            </div>
            <div className="opacity-80">
              The Amobi Royal family continues to invest and promote the benefits of quality education as a way of furthering good values and leadership in the community.
            </div>
            <div className="opacity-80">
              Chief Olisaeloka “David” Amobi – Founder of the Amobi Leadership School, was inspired to further and promote the benefits of education internationally by his parents, Chief Victor Kenneth Onyechi Amobi – Ezeudo of Ogidi & Mrs Nne Amobi – Odibeze.
            </div>
            <div className="opacity-80">
              Chief Eloka “David” Amobi – Nna bu Ehi of Ogidi – completed the early years of his education in Nigeria, attending Grange Education, Lagos, Air Force Secondary School, Lagos and King’s College, Lagos.
            </div>
            <div className="opacity-80">
              The young Prince travelled to United Kingdom as a teenager to further his education, and is successfully trained in Business Economics,
              Law and Information Technology, with academic honours received from University of Greenwich, University of Buckingham and The University of Law, with vast work experience in global multinational companies across UK, Europe and USA.
            </div>
            <div className="opacity-80">
              Prince Eloka is on a mission to promote quality education and corporate apprenticeships, and continues to invest, train and support
              the next generation of youths on their journey to becoming great leaders and valuable members of society.
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 font-EB w-full">
          <img src={libraryImg} alt="libraryImg" className="lg:aspect-[3/4] aspect-square h-full object-cover"/>
          <div className="flex flex-col gap-5 p-4 text-white bg-[#f17811]">
            <div className=" font-semibold text-sm">2023</div>
            <div className="font-nunito leading-5 text-xs">The 6th Edition of the Amobi Essay Prize was held in Igbogi College, Lagos (Boys school).</div>
            <div className="font-nunito mt-2 leading-5 text-xs">The 5th Edition of the Amobi Essay Prize was held in Vivian Fowler Memorial College, Lagos (Girls school).</div>
          </div>
          <img src={schoolsImg} alt="schoolsImg" className="lg:aspect-[3/4] aspect-square h-full object-cover"/>
          <div className="flex flex-col gap-5 p-4 text-white bg-[#0e9617]">
            <div className=" font-semibold text-sm">2022</div>
            <div className="font-nunito leading-5 text-xs">The 4th Edition of the Amobi Essay Prize was held in Grange Secondary School, Lagos (Co-ed).</div>
            <div className="font-nunito mt-2 leading-5 text-xs">The 3th Edition of the Amobi Essay Prize was held in Queen's College, Lagos (Girls school).</div>
          </div>
          <div className="flex flex-col gap-5 p-4 text-white bg-[#e54926]">
            <div className=" font-semibold text-sm">2021</div>
            <div className="font-nunito leading-5 text-xs mb-[8rem]">The 2nd Edition of the Amobi Essay Prize was held in 2021 in King's College, Lagos (Boys school).</div>
          </div>
          <img src={buildingImg} alt="schoolsImg" className="lg:aspect-[3/4] aspect-square h-full object-cover"/>
          <div className="flex flex-col gap-5 p-4 text-white bg-[#1f73d4]">
            <div className=" font-semibold text-sm">2019</div>
            <div className="font-nunito leading-5 text-xs mb-[8rem]">The 1st Edition of the Amobi Essay Prize was held in 2019 in Air Force Secondary School (Co-ed).</div>
          </div>
          <img src={bookImg} alt="schoolsImg" className="lg:aspect-[3/4] aspect-square h-full object-cover"/>
        </div>
      </div>
    </div>
  )
}

export default BackgroundHistory;