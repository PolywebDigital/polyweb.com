import * as emailjs from "@emailjs/browser"
import { EMAIL_SERVICE, EMAIL_TEMPLATE } from "../constants/Constants";

export type AppointmentInputs = {
    firstname: string;
    lastname: string;
    email: string;
    businessName: string;
    message: string;
  };


export const sendAppointmentEmail = (props: AppointmentInputs): Promise<emailjs.EmailJSResponseStatus> => {
  const { businessName, firstname, lastname, message, email } = props


  const templateParams = {
    email: email,
    businessName: businessName.toUpperCase(),
    lastname: lastname.toUpperCase(),
    firstname: firstname.charAt(0).toUpperCase() + firstname.slice(1),
    message: message,
  }

  return emailjs.send(EMAIL_SERVICE, EMAIL_TEMPLATE, templateParams)
}