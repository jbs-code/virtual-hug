import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";

export const sendEmail = (
  to_name: string,
  to_email: string,
  link: string
) => {
  const templateParams = {
    to_name: to_name,
    to_email: to_email,
    link: link,
  };

  init(import.meta.env.VITE_INIT);

  return emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams);
};
