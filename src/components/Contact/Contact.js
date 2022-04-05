import React from 'react'
import './Contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_djikt0k', 'template_juu2zye', form.current, 'Gl0elAV95hg-kms9N');
        e.target.reset();
      };
  return (
    <section id ='contact' className='contact'>
        <h2 className='contact-heading'>Contact</h2>
        <div className="split-contact">
            <div className="other-contacts">
                <div className="contacts-container">
                    <MdOutlineMail size={35} color="#452BC7"/>
                    <h4>Email</h4>
                    <span>paul.john.marinas@gmail.com</span>
                    <a href="mailto:paul.john.marinas@gmail.com" target="_blank">Send a message</a>
                </div>
                <div className="contacts-container">
                    <RiMessengerLine size={35} color="#452BC7"/>
                    <h4>Messenger</h4>
                    <span>Paul John Mariñas</span>
                    <a href="https://m.me/pauljohn.marinas" target="_blank">Send a message</a>
                </div>
                <div className="contacts-container">
                    <BsWhatsapp size={35} color="#452BC7"/>
                    <h4>WhatsApp</h4>
                    <span>+639663171451</span>
                    <a href="https://api.whatsapp.com/send?phone=+639663171451" target="_blank">Send a message</a>
                </div>
            </div>
            <div className="email-form">
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                    <label>Email:</label>
                    <input type="text" name="email" required />
                    <label>Message:</label>
                    <textarea name="message" rows="7" required></textarea>
                    <button className='btn-submit' type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact