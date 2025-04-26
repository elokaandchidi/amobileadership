import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom";
import parse from 'html-react-parser';

import InputField from "../components/input"
import TextareaField from "../components/textarea";
import SelectField from "../components/select";


import { EnrolleeTypes, enrollMessageMap, errorMessageMap, ErrorTypes } from "../constant";
import { useAlert } from "../utils/notification/alertcontext";
import { ERROR_EMAIL_INVALID } from "../constant/errors";
import { validateEmail } from "../utils/common";
import { client } from "../utils/client";


const Enroll = () => {
  const { addAlert } = useAlert();
  const location = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const otherDetailRef = useRef<HTMLTextAreaElement>(null);
  const [referral, setReferral] = useState('')
  const [pageMessage, setPageMessage] = useState({} as any)
  const enrolleeType = location?.state?.type || 'institutions';

  const optionList = ['Search Engine', 'Social Media', 'TV', 'Radio', 'Friend or Family'];

  const handleSubmit = async () => {  
    setIsSubmitting(true);
    const newBody = {
      fullname: fullNameRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      email: emailRef.current?.value || "",
      referral: referral,
      type: enrolleeType,
      body: otherDetailRef.current?.value || "",
    };

    const errors: string[] = []; // Collect all error messages
    
    Object.entries(newBody).forEach(([key, value]) => {
      if (!value) errors.push(errorMessageMap[key as ErrorTypes]);
      if (key === "email" && value && !validateEmail(value)) errors.push(ERROR_EMAIL_INVALID);
    });

    if (errors.length > 0) {
      errors.forEach((msg) => addAlert({ message: msg, type: "error" }));
      setIsSubmitting(false);
      return;
    }
    
    
    let doc = {
      _type: 'enroll',
      ...newBody
    };  
    
    try {
      await client.create(doc)
      setIsSubmitting(false);
      setReferral('')
      if (fullNameRef.current) fullNameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (otherDetailRef.current) otherDetailRef.current.value = "";
      addAlert({ message: 'Enrollement successfully', type: 'success' });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      addAlert({ message:'error occurred while submitting form', type: 'error' });
    }
  };

  useEffect(() => {
    if (enrolleeType) {
      setPageMessage(enrollMessageMap[enrolleeType as EnrolleeTypes])
    }
  }, [enrolleeType]);
  
  
  return (
    <div className='flex flex-col items-center gap-10 w-11/12 lg:w-11/12 xl:w-8/12'>
      <div className="w-full text-left md:text-[3rem] text-3xl md:mt-7 mt-4 font-semibold">{pageMessage?.title}</div>
      <div className="flex flex-col gap-10 lg:w-4/5 xl:w-3/5">
        <div className="leading-relaxed md:text-sm text-xs">{pageMessage?.subtitle}</div>
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
            ref={emailRef}
          />
          <InputField
            type="text"
            title="Phone"
            ref={phoneRef}
          />
          <SelectField title="How did you hear about us?" value={referral} recordList={optionList} onChangeText={(value) => setReferral(value)} placeholder="Select one option" />
          <TextareaField
            title="Other Details"
            ref={otherDetailRef}
          />
          <div className="flex flex-row w-full">
            <button className="p-3 px-5 rounded-sm text-center text-white font-medium bg-[#b8935c]/80 cursor-pointer" onClick={handleSubmit} disabled={isSubmitting}>
              {!isSubmitting ? 'SEND' : 'SENDING ....'}
            </button>
          </div>
        </div>
        <img src={pageMessage?.footer?.image} alt="institutionsImg" className="aspect-square object-cover"/>
        <div className="flex flex-col gap-7 mb-24 lg:mb-50">
          <div className="font-EB font-bold text-2xl leading-tight">{pageMessage?.footer?.title}</div>
          <div className="opacity-80 text-sm">
            {pageMessage?.footer?.body ? parse(pageMessage?.footer?.body) : '---'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Enroll
;