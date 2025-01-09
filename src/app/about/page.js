import Image from 'next/image';
import './about.css'
import { FaDownload, FaFacebook, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const About = () => {   
    return (
        <div className=' min-h-screen flex justify-center items-center pt-20 max-w-5xl mx-auto mb-10'>
           <div className='flex md:flex-row gap-10 flex-col-reverse'>
           <div className=' space-y-3 px-3 flex-1 md:mt-20 mt-0  '>
                            <p className='text-2xl font-semibold'>I`m <span className='text-green-600'>Junayet Shiblu</span>, a Web Developer</p>
                            <p className='text-lg text-[#a2a8a8]'> Passionate MERN stack developer who loves making user-friendly Website . I enjoy working with others to turn tricky ideas into smart solutions. I`m dedicated and a good team player, ready to bring my skills to your projects. Excited about creating cool web stuff together!</p>
                            <p className='text-base text-[#6e7272]'>
                                Also I am studying computer science and engineering at National Institute of Textile Engineering and Research so my love for coding works differently.
                            </p> 
                            <div className='flex items-center md:gap-20 gap-5'>
            <a className="flex gap-1 justify-center items-center mt-2  bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110" href='/Juanyet_Shiblu_MERN_Stack_Developer_resume.pdf' download>
                Resume <span><FaDownload /></span>
            </a>
            <div className='flex gap-5 mt-2 justify-center items-center'>
            <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
             <a href='https://github.com/jsjunayet' target='blank'> <FaGithubSquare className='text-2xl' /></a>
                </div>
                <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <a href={'https://www.linkedin.com/in/jsjunayet/'} target='blank'><FaLinkedin className='text-2xl' /></a>
                </div>
                <div className='bg-[#16112F65] border-2 cursor-pointer border-[#149ECA] px-2 py-1 rounded transition hover:border-[#130f2a] hover:bg-[#149ECA] transform hover:scale-110'>
                <a href={'https://web.facebook.com/jsjunayet73'} target='blank'><FaFacebook className='text-2xl' /></a>
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

export default About;