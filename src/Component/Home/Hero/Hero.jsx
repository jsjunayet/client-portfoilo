"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Link from 'next/link';
import { ThemContext } from '@/Component/Context/ThemContext';
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Photo from '../Photo/Photo';
const Hero = () => {
    const { Light } = useContext(ThemContext)
    return (
        <section className="max-w-5xl mx-auto md:mt-16 mt-0 ">
            <div className='flex md:flex-row gap-y-5 md:gap-y-0 flex-col-reverse md:justify-between justify-center items-center w-full '>
            <div className='md:w-[50%] w-full space-y-2 md:space-y-5 md:px-0 px-4'>
                <h2 className={`md:text-3xl text-xl md:leading-[50px] leading-[35px] font-semibold ${Light == "text-gray-900" ? "" : "text-gray-400"}`}>
                    HI, I`m Sadia Akter, Professional  {' '}
                    <span style={{ color: '#149ECA', fontWeight: 'bold' }}>
                        <Typewriter
                            words={["Accountant & Bookkeeper .","Specialist in E-Commerce ."]}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={100}
                            delaySpeed={2000}
                        />
                    </span>
                </h2>
                <p className='md:text-base text-sm'>Clean-up & Catch-up, and SME bookkeeping using Quickbooks Online, Xero, and Wave.
                </p>
                <div className='flex items-center md:gap-20 gap-5'>
            <a className="flex gap-1 justify-center items-center mt-2  bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110" href='/Juanyet_Shiblu_MERN_Stack_Developer_resume.pdf' download>
                Resume <span><FaDownload /></span>
            </a>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
             <a href="https://wa.me/8801963834298" target="blank"> <FaWhatsapp className='text-2xl' /></a>
                </div>
                <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <a href={'https://www.linkedin.com/in/sadia-akter-890089292/'} target='blank'><FaLinkedin className='text-2xl' /></a>
                </div>
                <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <a href={'https://www.facebook.com/sadia.akter.116950/'} target='blank'><FaFacebook className='text-2xl' /></a>
                </div>
            </div>
            </div>
            </div>
            <div className='md:w-[40%] w-full flex flex-col justify-center items-center mt-10 md:mt-0'>        
                    <div className='md:w-full w-72 '>
                        <Photo/>
                    </div>
             </div>
            </div>
              
        </section>
    );
};
export default Hero;