import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useAlert } from "../utils/notification/alertcontext";
import Disclaimer from "../components/disclaimer";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { EMAIL_REGEX } from "../utils/regex";


// interface ContactDocument {
//   _type: string;
//   name: string;
//   email: string;
//   phone: string;
//   message: string;
// }

const Contact = () => {
  const { addAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [handleDisclaimerPopUp, setHandleDisclaimerPopUp] = useState(false);
  const [formInfo, setFormInfo] = useState({name: '', email: '', phone: '', message:''});

  const handleToggleModal = (newValue : boolean) => {    
    setHandleDisclaimerPopUp(newValue);
  };

  const handleSubmit = async () => {  
    setIsSubmitting(true);
    const { name, email, phone, message} = formInfo;
  
    const requiredFields = [
      { field: email, message: 'Please add email' },
      { field: phone, message: 'Please add mobile' },
      { field: name, message: 'Please add price' },
      { field: message, message: 'Please select message' },
    ];
  
    for (const { field, message } of requiredFields) {
      if (!field) {
        setIsSubmitting(false);
        return addAlert({ message, type: 'error' });
      }
    }

    if(!EMAIL_REGEX.test(email)) {
      setIsSubmitting(false);
      return addAlert({ message:'Invalid email provided', type: 'error' });
    }
    
    
    // let doc: ContactDocument = {
    //   _type: 'contact',
    //   name,
    //   email,
    //   phone,
    //   message
    // };  
    
  };

  if (handleDisclaimerPopUp) {
    return <Disclaimer handleToggleModal={handleToggleModal}/>
  }
  
  return (
    <div className='flex flex-col items-center lg:gap-[5rem] gap-10 w-full'>
      <div className='bg-contact bg-black bg-opacity-60 flex flex-col items-center w-full'>
        <div className='h-full lg:w-9/12 w-11/12'>
          <Navbar/>
          <div className='flex flex-row  lg:justify-start justify-center  gap-2 w-full lg:text-lg text-sm text-white pt-10 lg:pt-[4rem] lg:mb-[25rem]'>
            <NavLink className='text-[#B39659]' to='/'>
              HOMEPAGE
            </NavLink>/
            <div className='font-semibold uppercase'>Contact Us</div>
          </div>
          <div className={`lg:hidden flex flex-col w-full items-center lg:mt-[5rem] lg:mb-[20rem] mb-[10rem]`}>
            <div className={`tracking-wider text-white lg:text-[3rem] text-3xl my-5 font-bold text-center lg:w-1/3 w-4/6`}>
              Contact Us
            </div>
          </div>
        </div>
      </div>

      <div className={`flex-col lg:flex-row lg:items-start flex lg:w-9/12 w-11/12 lg:mt-[-25rem] mt-[-10rem]`}>
        <div className={`flex flex-col lg:w-1/4 gap-3 items-start pt-1 w-3/4`}>
          <div className='text-white lg:text-[1.7rem] w-1/2 text-lg font-medium  tracking-wide'>
            ENQUIRE
            <div className='border-b-2 border-[#B39659] w-4/12 pt-3'></div>
          </div>
        </div>
        
        <div className='flex flex-col lg:w-3/5 justify-between gap-5 lg:mt-0 mt-5 text-white'>
          <div className={`max-sm:hidden block font-semibold tracking-wider lg:text-[3rem] text-[1.4rem] capitalize text-center `}>contact us</div>
          
          <div className='flex flex-col gap-6 lg:mt-20 w-full text-white'>
          <div className='grid lg:grid-cols-2 grid-cols-1  gap-5 items-center'>
              <div className='flex flex-col'>
                <input value={formInfo.name} onChange={({ target}) => {setFormInfo({ ...formInfo, name: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Name *' type='text'/>
              </div>
              <div className='flex flex-col'>
                <input value={formInfo.email} onChange={({ target}) => {setFormInfo({ ...formInfo, email: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Email *' type='email'/>
              </div>
            </div>
            <div className='grid lg:grid-cols-2 grid-cols-1  gap-4 items-center'>
              <div className='flex flex-col'>
                <input value={formInfo.phone} onChange={({ target}) => {setFormInfo({ ...formInfo, phone: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Phone *' type='text'/>
              </div>
            </div>
            <div className='flex flex-col '>
              <textarea value={formInfo.message} onChange={({ target}) => {setFormInfo({ ...formInfo, message: target.value })}} className='bg-transparent outline-none text-white placeholder:text-white border-b-2 border-[#B39659] py-5 px-3' placeholder='Message *'/>
            </div>
            <div className='flex flex-col  lg:items-start items-center mt-7 w-full'>
              <div onClick={handleSubmit} className='lg:w-1/3 w-1/2 border border-white p-3 cursor-pointer text-center text-white uppercase font-semibold text-sm lg:text-xl'>{!isSubmitting ? 'SUBMIT' : 'Submitting ....'}</div>
            </div>
            <div onClick={() => setHandleDisclaimerPopUp(!handleDisclaimerPopUp)} className='flex flex-row gap-3 lg:mt-9 mt-4 lg:mb-0 mb-14 items-center cursor-pointer'>
              <div className=''>Read disclaimer</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Contact;