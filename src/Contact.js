import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contactstyles.css';
import Fade from 'react-reveal/Fade';


function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_re1mnet', 'template_t23nrdp', form.current, 'yfsFpK783Zqjg6VgY')
      .then(() => {
        alert("Message successfully sent!")
        window.location.reload(false)
      },
      () => {alert('Failed to send the message, please try again.')}
  )};

  return (
  <form ref={form} onSubmit={sendEmail}>

<div class="container">
  <Fade left>
		<div class="contact-box">
			<div class="left">
        <h2>Contact Me</h2>
      <input name="user_name" type="text" class="field" placeholder="Your Name" />
      <input name="user_email" type="text" class="field" placeholder="Your Email" />
      <input name="phone_number" type="text" class="field" placeholder="Phone" />
      <textarea name="message" placeholder="Message" class="field"></textarea>

      <button class="btn">Send</button></div>

		</div>
    </Fade>
	</div>

    </form>
    );

    };
    export default Contact;