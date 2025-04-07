import ParticipantsComponent from "../components/participantComponent";
import WinnerComponent from "../components/winnerComponent";

const WinnersAndParticipants = () => {
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">Winners and Participants</div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5 mb-24 lg:mb-50">
        <div className="leading-relaxed md:text-sm text-xs">Here you can see all Amobi Essay Prize (AEP) winners and participants.</div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold md:text-[2.3rem] text-lg font-EB">Past Winners</div>
          <WinnerComponent/>
        </div>
        <div className="flex flex-col gap-5">
          <div className="font-semibold md:text-[2rem] text-lg">Participants</div>
          <div className="leading-relaxed md:text-sm text-xs">At Amobi Leadership School we acknowledge all participants of the AEP.</div>
        </div>
        <ParticipantsComponent />
      </div>
    </div>
  )
}

export default WinnersAndParticipants;