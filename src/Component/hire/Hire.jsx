"use client"
import React, { useContext } from 'react';
import { ThemContext } from '../Context/ThemContext';

const Hire = () => {
    const { Light } = useContext(ThemContext)
    return (
        <div className='md:ml-2 ml-0 mt-5 md:mt-10'>
            <h1 className='md:text-xl text-lg text-center md:text-start font-semibold md:mb-10 mb-4'>Why would you hire me?</h1>
            <div className=' mx-2 md:mx-0'>
            <div className={`collapse collapse-plus mb-5 ${Light == "light" ? "bg-[#16112F65]" : "bg-[#149ECA]"} `}>
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-base font-medium">
                    What qualities or experiences do you possess that make you a strong candidate for this position?
                </div>
                <div className="collapse-content">
                    <p className='md:text-sm text-[12px]'>I`ve gained two months of valuable experience working on team projects, including one where I received a recommendation letter for my achievements. In these projects, I`ve learned a lot about teamwork and how to work well with others. Being part of big projects like the Digital Voting Project has given me a lot of experience in handling complicated tasks and understanding what`s needed for successful projects.</p>
                </div>
            </div>
            <div className={`collapse collapse-plus mb-5 ${Light == "light" ? "bg-[#16112F65]" : "bg-[#149ECA]"} `}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-base font-medium">
                    Why should I consider hiring me?
                </div>
                <div className="collapse-content">
                    <p className='md:text-sm text-[12px]'>I`ve finished more than 10 projects using the MERN stack, and I`ve also worked on four projects with Next.js. I`m always eager to learn new things. I understand that technology trends can change quickly. Even though Next.js is popular now, it might not be as important in the future. That`s why I`m always ready to learn about new technologies and adapt to them.
                    </p>
                </div>
            </div>
            <div className={`collapse collapse-plus mb-5 ${Light == "light" ? "bg-[#16112F65]" : "bg-[#149ECA]"} `}>
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-base font-medium">
                    This is my Personal Opinion.
                </div>
                <div className="collapse-content">
                    <p className='md:text-sm text-[12px]'>I have a strong commitment to seeing tasks through. Whenever I encounter a coding error, I focus solely on fixing it before moving on to anything else. I truly believe that nothing is beyond reach. With dedication and effort, I am confident that I can tackle any challenge and achieve my goals.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Hire;