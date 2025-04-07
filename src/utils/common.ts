import { EMAIL_REGEX } from "./regex";

export const formatDate = (inputDate: string) =>{
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }as Intl.DateTimeFormatOptions;
    const date = new Date(inputDate);
    return date.toLocaleDateString('en-US', options);
}

export const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
}