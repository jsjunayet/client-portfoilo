import Image from 'next/image';
import './aboutsetion.css'
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
import Title from '../Utility/Title';

const AboutSetion = () => {   
    return (
        <section id='about' className='ml-0 md:ml-2   max-w-5xl mx-auto'>
            <Title name={'About Me'}/>
            <div className='flex md:flex-row-reverse md:gap-x-20 gap-x-0 gap-y-8 md:gap-y-0 flex-col-reverse'>
           <div className=' space-y-3 px-3 flex-1 md:pt-8 mt-0  '>
                            <p className='text-base md:text-lg font-semibold'>I`m <span className='text-green-600'>Sadia AKter</span>, a Accountant & Bookkeeper</p>
                            <p className='text-sm md:text-base '>  I specialize in organizing and maintaining accurate books, ensuring compliance with accounting standards, preparing accounts ready to fill TAX, and assisting businesses in making wise financial decisions!</p>
                            <p className='text-sm md:text-base '>
                            Currently, I work at an agency <strong>“Pride Biz Solutions”</strong> where I handle diverse client accounts, with efficiency and precision in my work. I am passionate about providing specific bookkeeping solutions and optimizing workflows to improve financial clarity for my clients.
                            </p> 
                            <div className='flex items-center md:gap-5 gap-0 md:justify-start justify-evenly'>
            <Link href={"#contact"} className="flex gap-1 justify-center items-center mt-2  bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110" >
                CONTACT ME
            </Link>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
             <Link href={"#project cs"}>MY PROJECT</Link>
                </div>
              
            </div>
            </div>    
                          
           </div>

           <div className='blob'>
           </div>
           </div>
        </section>
    );
};

export default AboutSetion;