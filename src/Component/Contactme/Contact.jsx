"use client"
import React, { useContext, useEffect } from 'react';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Title from '@/Component/Utility/Title';
import ContactCard from './ContactCard/ContactCard';
import ContactFrom from './ContactFrom/ContactFrom';

const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section id='contact' className='relative md:ml-2 ml-0  '>
            <Title name={'Contact Information'}/>
            <div className='contact-content'>
                <div data-aos="fade-up" data-aos-delay="100" className='left' >
                    <ContactCard link='https://wa.me/8801963834298' iconURL="/whatsapp1.png" Text="WhatsApp" ></ContactCard>
                    <ContactCard link='https://www.linkedin.com/in/sadia-akter-890089292/' iconURL='/linkedin.png' Text='LinkedIn' ></ContactCard>
                </div>
                <div data-aos="fade-up" className='right'>
                    <ContactFrom></ContactFrom>
                </div>
            </div>
        </section>
    );
};

export default Contact;