import Contact from '@/Component/Contactme/Contackt/Contact';
import React from 'react';

const contact = () => {
    return (
        <div className='min-h-screen max-w-7xl mx-auto md:pt-0 pt-20'>
            <h5 className='pt-20 pb-2 text-center  text-2xl hidden md:block'>Contact ME</h5>
            <p className='mb-10 text-center text-[#a2a8a8] hidden md:block'>If you need help with building a website, I am here for you! I am skilled at creating websites that look great and work well. Whether you are starting a business, already have one, or just have an idea you want to share with the world, I can help you make it happen online. I pay attention to the little details and make sure your website represents you perfectly.Let`s work together to create something amazing! Get in touch with me today by filling up the form below.</p>
            <Contact></Contact>
        </div>
    );
};

export default contact;