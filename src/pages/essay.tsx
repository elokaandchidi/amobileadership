import StepFlow from "../components/stepFlow";

import nationalsImg from "../assets/images/home-nationals.webp"
import regionalsImg from "../assets/images/home-regionals.webp"
import mechanicsImg from "../assets/images/home-mechanics.jpeg"
const Essay = () => {
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">Amobi Essay Prize
      </div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5 mb-24 lg:mb-50">
        <div className="flex flex-col gap-5 items-center w-full text-sm">
          <img src={mechanicsImg} alt="mechanicsImg" className="aspect-square object-cover "/>
          <div className="flex flex-col gap-7">
            <div className="font-EB font-semibold md:text-4xl text-3xl w-full leading-tight">Essay Competition Mechanics</div>
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
        </div>
        <StepFlow/>
        <div className="flex flex-col gap-5 text-sm w-full">
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
          <div className="opacity-80 font-nunito">
            Every completing student will be entitled to a recommendation letter to any academic or work institution globally.
          </div>
          <div className="mt-5 grid md:grid-cols-2 text-xs font-EB w-full">
            <div className="grid grid-cols-2 bg-[#7a57d1]">
              <div className="flex flex-col gap-5 p-5 text-white">
                <div className=" font-semibold text-sm">Nationals</div>
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
              <div className="flex flex-col gap-5 p-5 text-white">
                <div className=" font-semibold text-sm">Regionals</div>
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
      </div>
    </div>
  )
}

export default Essay;