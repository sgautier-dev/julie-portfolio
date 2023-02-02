"use client";

import emailjs from '@emailjs/browser'

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const contactForm = document.getElementById("contactForm")! as HTMLFormElement;
  const submitButton = document.getElementById("submitButton")! as HTMLButtonElement;

  // console.log('contactForm', contactForm)
  // console.log('submitButton', submitButton)

  submitButton.disabled = true;

  const serviceID = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!
  const templateID = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!

  // console.log(`${serviceID}, ${templateID}, ${contactForm}, ${publicKey}`)

  // sending the email
  emailjs.sendForm(serviceID, templateID, contactForm, publicKey).then(
    () => {
      contactForm.reset();
      submitButton.disabled = false;
      alert("Your message has been sent!");
    },
    (error) => {
      submitButton.disabled = false;
      alert("Error..." + error);
    }
  );

}

// document.addEventListener('DOMContentLoaded', initApp)

export default sendEmail