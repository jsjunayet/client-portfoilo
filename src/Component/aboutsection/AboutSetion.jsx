import Image from 'next/image';
import './aboutsetion.css'
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const AboutSetion = () => {   
    return (
        <div className='ml-0 md:ml-2   max-w-5xl mx-auto md:mt-20 mt-6'>
            <p className='md:text-xl text-lg text-center md:text-start font-semibold md:mb-10 mb-8'>My About</p>
           <div className='flex md:flex-row-reverse md:gap-x-20 gap-x-0 gap-y-8 md:gap-y-0 flex-col-reverse'>
           <div className=' space-y-3 px-3 flex-1 md:pt-8 mt-0  '>
                            <p className='text-base md:text-lg font-semibold'>I`m <span className='text-green-600'>Sadia AKter</span>, a Accountant & Bookkeeper</p>
                            <p className='text-sm md:text-base text-[#a2a8a8]'>  I specialize in organizing and maintaining accurate books, ensuring compliance with accounting standards, preparing accounts ready to fill TAX, and assisting businesses in making wise financial decisions!</p>
                            <p className='text-sm md:text-base text-[#6e7272]'>
                            Currently, I work at an agency “Pride Biz Solutions” where I handle diverse client accounts, with efficiency and precision in my work. I am passionate about providing specific bookkeeping solutions and optimizing workflows to improve financial clarity for my clients.
                            </p> 
                            <div className='flex items-center md:gap-5 gap-5'>
            <Link href={"/contact"} className="flex gap-1 justify-center items-center mt-2  bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110" >
                CONTACT ME
            </Link>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
             <Link href={"/about"}>MY PROJECT</Link>
                </div>
              
            </div>
            </div>    
                          
           </div>

           <div className='blob'>
           </div>
           </div>
        </div>
    );
};

export default AboutSetion;