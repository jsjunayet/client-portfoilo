"use client"
import React, { useRef } from 'react';
import './ContactFrom.css'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const ContactFrom = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_jtcfjzr',
            'template_m58weau',
            form.current,
            'BeNNFtPCQezvr023U')
            .then((result) => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You Success fully send the message",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.current.reset();

            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='md:mx-0 mx-2'>
            <div className='contact-from '>
            <form ref={form} onSubmit={sendEmail}>
                <div className='name-contaner'>
                    <input name="to_name" required type="text" placeholder='First Name' />
                    <input name='to_names' required type="text" placeholder='Last Name' />
                </div>
                <input name="from_name" required type="email" placeholder='Enter your email address' />
                <textarea required name="message" placeholder='Message'></textarea>
                <button>Send</button>
            </form>
        </div>
        </div>
    );
};

export default ContactFrom;