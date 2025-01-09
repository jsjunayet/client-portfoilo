"use client"
import React, { useContext, useEffect } from 'react';
import './style.css'
import ContactCard from '../ContactCard/ContactCard';
import ContactFrom from '../ContactFrom/ContactFrom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const Contact = () => {

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='relative md:ml-2 ml-0 mt-6 md:mt-10 '>
            <h5 className='md:text-xl text-lg text-center md:text-start font-semibold md:mb-10 mb-4'>Contact Information</h5>

            <div className='contact-content'>
                <div data-aos="fade-up" data-aos-delay="100" className='left' >
                    {/* <ContactCard iconURL='/mail.png' Text="junayetshiblu0@gmail.com" ></ContactCard> */}
                    <ContactCard link='https://wa.me/8801963834298' iconURL="/github.png" Text="jsjunayet" ></ContactCard>
                    <ContactCard link='https://www.linkedin.com/in/sadia-akter-890089292/' iconURL='/linkedin.png' Text='Junayet Shiblu' ></ContactCard>
                </div>
                <div data-aos="fade-up" className='right'>
                    <ContactFrom></ContactFrom>
                </div>
            </div>
        </section>
    );
};

export default Contact;