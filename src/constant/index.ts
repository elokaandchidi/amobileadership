// export const BASE_API_URL = process.env.REACT_APP_API_URL

// export enum ErrorMessage {
//   INVALID_FIRSTNAME = '⛔ First Name is required',
//   INVALID_LASTNAME = '⛔ Last Name is required',
//   INVALID_EMAIL = '⛔ Email is invalid',
//   INVALID_PASSWORD = '⛔ Your password must contain at least an uppercase, a lowercase and a special character.',
//   SUCCESSFULLY_SYNCED = `✅ Successfully synced`,
// }

// export enum ErrorTypes {
//   ERROR_EMAIL = 'email',
//   ERROR_PASSWORD = 'password',
//   ERROR_FIRSTNAME = 'firstname',
//   ERROR_LASTNAME = 'lastname',
// }

// export const errorMessageMap: Record<ErrorTypes, ErrorMessage> = {
//   [ErrorTypes.ERROR_EMAIL]: ErrorMessage.INVALID_EMAIL,
//   [ErrorTypes.ERROR_PASSWORD]: ErrorMessage.INVALID_PASSWORD,
//   [ErrorTypes.ERROR_FIRSTNAME]: ErrorMessage.INVALID_FIRSTNAME,
//   [ErrorTypes.ERROR_LASTNAME]: ErrorMessage.INVALID_LASTNAME,
// }

import studentsImg from "../assets/images/home-students.webp";
import parentsImg from "../assets/images/home-parents.webp"
import institutionsImg from "../assets/images/home-institutions.webp"
import sponsorsImg from "../assets/images/home-sponsors.webp"

export const EnrollMessage = {
  STUDENT: {
    title: "Enroll",
    subtitle: "Express your interest as a student. Complete the form below.",
    footer: {
      title: "Student",
      image: studentsImg,
      body: `<div className='opacity-80 text-sm'>Tell your parent or school you want to get involved.<br/> Fill in the form and send us your details</div>`,
    },
  },
  PARENT: {
    title: "Enroll your Child",
    subtitle:
      "Interested in enrolling your child/ward? Complete the form below.",
    footer: {
      title: "Parents",
      image: parentsImg,
      body: `<div className="w-full flex flex-col gap-5 opacity-80">
          <div className="">
            Read <span>“<a href='/amobi-essay-prize' className="underline">How it works</a>”</span> and understand the benefits to your child and their future.
          </div>
          <div className="">
            Complete registration and pay fee
          </div>
          <div className="">
            Receive course materials, timelines and other supporting information.  Start the learning!!
          </div>
        </div>`,
    },
  },
  INSTITUTION: {
    title: "Enroll your students",
    subtitle:
      "Inspire drive in your students. Enrol your students.",
    footer: {
      title: "Educational Institutions",
      image: institutionsImg,
      body: `<div className="opacity-80 text-sm">
              Read “<a href='/amobi-essay-prize' className="underline">How it works</a>” and understand the benefits for your students, your institution and yourself.
            </div>`,
    },
  },
  SPONSORS: {
    title: "Get Involved",
    subtitle:
      "Have suggestions or would like to sponsor? Complete the form below",
    footer: {
      title: "Sponsors",
      image: sponsorsImg,
      body: `<div className="opacity-80 text-sm">
              There are many ways to get involved.  Let us know your thoughts.
            </div>`,
    },
  },
} as const;

export enum EnrolleeTypes {
  STUDENT = "student",
  PARENT = "parent",
  INSTITUTION = "institutions",
  SPONSORS = "sponsors",
}

export const enrollMessageMap: Record<
  EnrolleeTypes,
  (typeof EnrollMessage)[keyof typeof EnrollMessage]
> = {
  [EnrolleeTypes.STUDENT]: EnrollMessage.STUDENT,
  [EnrolleeTypes.PARENT]: EnrollMessage.PARENT,
  [EnrolleeTypes.INSTITUTION]: EnrollMessage.INSTITUTION,
  [EnrolleeTypes.SPONSORS]: EnrollMessage.SPONSORS,
};
