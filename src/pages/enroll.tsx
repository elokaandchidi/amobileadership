import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";
import parse from 'html-react-parser';

import InputField from "../components/Input/input"
import TextareaField from "../components/textarea";
import SelectField from "../components/select";


import { EnrolleeTypes, enrollMessageMap } from "../constant";


const Enroll = () => {
  const location = useLocation();
  const fullNameRef = useRef<HTMLInputElement>(null);
  const otherDetailRef = useRef<HTMLTextAreaElement>(null);
  const [selected, setSelected] = useState('')
  const [messageMap, setMessageMap] = useState({} as any)
  const enrolleeType = location?.state?.type;

  useEffect(() => {
    if (enrolleeType) {
      console.log("enrolleeType", enrolleeType);
      
      setMessageMap(enrollMessageMap[enrolleeType as EnrolleeTypes])
    }
    // const messageMap = enrollMessageMap[enrolleeType as EnrolleeTypes]; // Explicitly type it
    // console.log(messageMap);
  }, [enrolleeType]);
  
  const optionList = ['Search Engine', 'Social Media', 'TV', 'Radio', 'Friend or Family'];
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">{messageMap?.title}</div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5">
        <div className="leading-relaxed md:text-sm text-xs">{messageMap?.subtitle}</div>
        <div className="flex flex-col gap-7 w-full">
          <InputField
            type="text"
            title="Name"
            isRequired={true}
            ref={fullNameRef}
          />
          <InputField
            type="email"
            title="Email"
            isRequired={true}
            ref={fullNameRef}
          />
          <InputField
            type="text"
            title="Phone"
            ref={fullNameRef}
          />
          <SelectField title="How did you hear about us?" recordList={optionList} onChangeText={(value) => setSelected(value)} placeholder="Select one option" />
          <TextareaField
            title="Other Details"
            ref={otherDetailRef}
          />
          <div className="flex flex-row w-full">
            <div className="p-3 px-5 rounded-sm text-center text-white font-medium bg-[#b8935c]/80">
              SEND
            </div>
          </div>
        </div>
        <img src={messageMap?.footer?.image} alt="institutionsImg" className="aspect-square object-cover"/>
        <div className="flex flex-col gap-7 order-6">
          <div className="font-EB font-bold text-2xl leading-tight">{messageMap?.footer?.title}</div>
            {messageMap?.footer?.body ? parse(messageMap?.footer?.body) : '---'}
          {/* <div className="opacity-80 text-sm">
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Enroll
;