import emailjs from '@emailjs/browser'

const sendEmail = (e) => {
  e.preventDefault();

  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");

  console.log('contactForm', contactForm)
  console.log('submitButton', submitButton)

  submitButton.disabled = true;

  const serviceID = 'service_86j0nfr';
  const templateID = 'template_5yo3rpj';
  const publicKey = 'qxxzJq5vCOVNRww2i';

  console.log(serviceID)

console.log(`${serviceID}, ${templateID}, ${contactForm}, ${publicKey}`)

  // sending the email
  emailjs.sendForm(serviceID, templateID, contactForm, publicKey).then(
    () => {
      contactForm.reset();
      submitButton.disabled = false;
      alert("Your message has been sent!");
    },
    (error) => {
      submitButton.disabled = false;
      alert("Error...", error);
    }
  );

}

// document.addEventListener('DOMContentLoaded', initApp)

export default sendEmail