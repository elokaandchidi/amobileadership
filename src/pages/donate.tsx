import { useRef, useState } from "react"
import InputField from "../components/input"
import TextareaField from "../components/textarea";
import SelectField from "../components/select";

import institutionsImg from "../assets/images/home-institutions.webp"
import { NavLink } from "react-router-dom";


const Donate = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const otherDetailRef = useRef<HTMLTextAreaElement>(null);
  const [selected, setSelected] = useState('')

  console.log('====================================');
  console.log(selected);
  console.log('====================================');
  const optionList = ['Search Engine', 'Social Media', 'TV', 'Radio', 'Friend or Family'];
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">Donate or Get Involved</div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5">
        <div className="leading-relaxed md:text-sm text-xs">Inspire drive in your students. Enrol your students.</div>
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
        <img src={institutionsImg} alt="institutionsImg" className="aspect-square object-cover"/>
        <div className="flex flex-col gap-7 order-6">
          <div className="font-EB font-bold text-2xl leading-tight">Educational Institutions</div>
          <div className="opacity-80 text-sm">
            Read “<NavLink to='/amobi-essay-prize' className="underline">How it works</NavLink>” and understand the benefits for your students, your institution and yourself.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
;