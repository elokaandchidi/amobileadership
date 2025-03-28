import nationalsImg from "../assets/images/home-nationals.webp";
import regionalsImg from "../assets/images/home-regionals.webp";
import prizeImg from "../assets/images/home-prize.png";
const PrizeComponent = () => {
  return (
    <div className="flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12">
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">
        Prize to be won
      </div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5">
        <div className="flex flex-col gap-5 items-center w-full text-sm">
          <img
            src={prizeImg}
            alt="prizeImg"
            className="aspect-square object-cover "
          />
        </div>
        <div className="flex flex-col gap-5 text-sm w-full">
          <div className="font-semibold md:text-4xl text-3xl w-full leading-tight">
            Essay Competition Mechanics
          </div>
          <div className="opacity-80 font-nunito mt-5">
            Top 3 national winners get prizes!
          </div>
          <div className="opacity-80 font-nunito">
            Top 3 in each region also win!
          </div>
          <div className="opacity-80 font-nunito">
            Everyone gets a participation certificate!
          </div>
          <div className="opacity-80 font-nunito">
            Completion earns a recommendation letter for any global institution.
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
              <img
                src={nationalsImg}
                alt="nationalsImg"
                className="aspect-16/9 h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 bg-[#c50c66]">
              <img
                src={regionalsImg}
                alt="regionalsImg"
                className="aspect-16/9 h-full object-cover"
              />
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
  );
};

export default PrizeComponent;
