import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsTelegram} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3hvpuv', 'template_0dd6cba', form.current, 'AfxZeiQYtVxGJzjRy')

    e.target.reset()

  
  };
  return (
    <section id='contact'>
      <h5>Get In touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>samuelmapusaoborja23@gmail.com</h5>
            <a href="mailto:samuelmapusaoborja23@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaFacebookMessenger  className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>https://m.me/SamBorja23</h5>
            <a href="https://m.me/SamBorja23">Send a message</a>
          </article>
          <article className='contact__option'>
            <BsTelegram  className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>+63 995 026 4165</h5>
            <a href="https://web.telegram.org/a/">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact