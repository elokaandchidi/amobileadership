import { useRef, useState } from "react";
import logo from '../assets/images/logo.png';
import { useAlert } from "../utils/notification/alertcontext";
import { AiFillCloseCircle } from 'react-icons/ai';
import { YouTubeEmbed } from '@next/third-parties/google'
import InputField from "./input";
import SelectField from "./select";
import TextareaField from "./textarea";
import { validateEmail } from "../utils/common";
import { ERROR_EMAIL_INVALID } from "../constant/errors";
import { client } from "../utils/client";


export default function QuestionnariesForm({closeModal} : {closeModal?: (value: boolean) => void}) {
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const courseRef = useRef<HTMLInputElement>(null);
  const currentLevelRef = useRef<HTMLInputElement>(null);
  const courseDurationRef = useRef<HTMLInputElement>(null);
  const achievementRef = useRef<HTMLTextAreaElement>(null);
  const careerInterestRef = useRef<HTMLTextAreaElement>(null);
  const participationReasonRef = useRef<HTMLTextAreaElement>(null);
  const additionalInfoRef = useRef<HTMLTextAreaElement>(null);
  const [availability, setAvailability] = useState('')
  const [commitment, setCommitment] = useState('')

  const handleCloseModal = () => {
    if (closeModal) {
      closeModal(false);
    }
  };

  const optionList = ['Yes', 'No',];
  const durationList = ['30min - 1 hour', '1 - 2 hours', '2 - 3 hours',];
  

  const handleSubmit = async () => {  
    setIsSubmitting(true);
    const newBody = {
      fullname: fullNameRef.current?.value || "",
      email: emailRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      course: courseRef.current?.value || "",
      currentLevel: currentLevelRef.current?.value || "",
      courseDuration: courseDurationRef.current?.value || "",
      achievement: achievementRef.current?.value || "",
      careerInterests: careerInterestRef.current?.value || "",
      participationReason: participationReasonRef.current?.value || "",
      availability: availability || "",
      weeklyCommitment: commitment || "",
      additionalInfo: additionalInfoRef.current?.value || "",
    };

    const errors: string[] = []; // Collect all error messages
    
    Object.entries(newBody).forEach(([key, value]) => {
      if ((key === "fullname" || key === "email" || key === "phone" || key === "course" || key === "currentLevel" || key === "courseDuration" || key === "achievement" || key === "careerInterests" || key === "participationReason" || key === "availability" || key === "weeklyCommitment") && !value) {
        errors.push(`${key} is required`);
      }
      if (key === "email" && value && !validateEmail(value)) errors.push(ERROR_EMAIL_INVALID);
    });

    if (errors.length > 0) {
      errors.forEach((msg) => addAlert({ message: msg, type: "error" }));
      setIsSubmitting(false);
      return;
    }
    
    
    let doc = {
      _type: 'squire',
      ...newBody
    };  
    
    try {
      await client.create(doc)
      setIsSubmitting(false);
      setCommitment('')
      setAvailability('')
      if (fullNameRef.current) fullNameRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (courseRef.current) courseRef.current.value = "";
      if (currentLevelRef.current) currentLevelRef.current.value = "";
      if (courseDurationRef.current) courseDurationRef.current.value = "";
      if (achievementRef.current) achievementRef.current.value = "";
      if (careerInterestRef.current) careerInterestRef.current.value = "";
      if (participationReasonRef.current) participationReasonRef.current.value = "";
      if (additionalInfoRef.current) additionalInfoRef.current.value = "";
      addAlert({ message: 'Sent successfully', type: 'success' });
    } catch (error) {
      console.log(error);
      setIsSubmitting(false);
      addAlert({ message:'error occurred while submitting form', type: 'error' });
    }
  };


  return (
    <div className="absolute h-screen flex flex-col bg-black/60 gap-3 z-20 top-0 lg:justify-center lg:items-center w-screen overflow-auto">
      <div className="max-w-5xl relative flex md:flex-row flex-col items-center lg:gap-10 md:gap-5 pt-10 lg:pt-0 pb-10">
        <div className='w-full flex flex-row lg:-right-7 top-2 lg:-top-7 justify-end z-40 absolute'>
          <AiFillCloseCircle size={30} color='white' onClick={handleCloseModal}  className='cursor-pointer'/>
        </div>
        <div className="mx-auto bg-white rounded-t-3xl md:rounded-b-3xl lg:w-1/3 w-11/12 h-auto md:h-[38rem] overflow-auto shadow-md relative">
          <div className='aspect-16/9 object-cover rounded-t-3xl w-full'>
            <YouTubeEmbed 
              videoid="a6g8y3EDHkw" 
              style="width: 100%; height: 100%;"
            />
          </div>
          
          <p className="mt-1 px-6 text-[.7rem] text-red-600 italic">
            Please watch this video and reflect on Apple CEO - Tim Cook's response to the question he is asked.  He mentions "North star" in his response; if you do not know what this means, do research on this, to understand how it applies to career plans.
          </p>

          <div className="text-lg font-EB font-bold my-4 px-6 leading-tight">
            The Squire 1st Edition - Career Development competition - Selection Questionnaire
          </div>
          
          <p className="text-gray-600 mb-2 px-6 text-xs">
            The Squire is a career and entrepreneurial development competition for university students sponsored by the Amobi Leadership School (A.L.S.), an arm of the Amobi Education Foundation.  The purpose of the competition is to challenge candidates on a series of assessments which are modelled on current corporate and entrepreneurial activities aimed at developing the candidates for success.
          </p>

          <div className="text-xs text-gray-500 p-6 lg:absolute lg:bottom-2">
            <p>
              <a href="#" className="hover:underline">
                Contact us by email
              </a>{" "}
              -{" "}
              <a href="#" className="hover:underline">
                Privacy Statement
              </a>
            </p>
          </div>
        </div>
        <div className="lg:w-2/3 w-11/12 flex justify-center bg-white rounded-b-3xl md:rounded-3xl shadow-md h-[38rem] overflow-auto">
          <div className="w-10/12 flex flex-col relative py-10 text-sm">
            <div className="flex flex-row items-center justify-center gap-2 pb-5 w-full">
              <img src={logo} alt='logo' className='h-16 pl-2'/>
              <span className="text-lg font-bold font-EB">Fill the form below</span>
            </div>
            <div className="flex flex-col gap-5 w-full">
              <div className="grid lg:grid-cols-2 gap-4">
                <InputField
                  type="text"
                  title="Full Name"
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
                  title="Phone Number"
                  isRequired={true}
                  ref={phoneRef}
                />
                <InputField
                  type="text"
                  title="Course Title"
                  isRequired={true}
                  ref={courseRef}
                />
                <InputField
                  type="text"
                  title="Current Level of study"
                  isRequired={true}
                  ref={currentLevelRef}
                />
                <InputField
                  type="text"
                  title="Course Duration"
                  isRequired={true}
                  ref={courseDurationRef}
                />

              </div>
              <TextareaField
                title="Describe in brief, one achievement, project or experience you are proud of and why."
                isRequired={true}
                ref={achievementRef}
              />
              <TextareaField
                title="In brief, what career field or industry interests you most, and why?"
                isRequired={true}
                ref={careerInterestRef}
              />
              <TextareaField
                title="In brief, why do you want to participate in this competition?"
                isRequired={true}
                ref={participationReasonRef}
              />
              <div className="grid lg:grid-cols-2 gap-4"> 
                <SelectField title="Are you available to attend all competition sessions and activities?" value={availability} recordList={optionList} onChangeText={(value) => setAvailability(value)} placeholder="Select one option" />
                <SelectField title="Approximately how many hours per week can you commit?" value={commitment} recordList={durationList} onChangeText={(value) => setCommitment(value)} placeholder="Select one option" />
              </div>
              <TextareaField
                title="Is there anything else you would like the selection panel to know?"
                ref={additionalInfoRef}
              />
              <div className="flex flex-row w-full mb-5">
                <button className="p-3 px-5 rounded-sm text-center text-white font-medium bg-[#b8935c]/80 cursor-pointer" onClick={handleSubmit} disabled={isSubmitting}>
                  {!isSubmitting ? 'SUBMIT' : 'SUBMITTING ....'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
