"use client";
import React, { useContext, useEffect } from 'react';
import Image from 'next/image';
import './Education.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemContext } from '../Context/ThemContext';

const Education = () => {
    const { Light } = useContext(ThemContext);
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className='relative md:ml-2 ml-0 mt-6 md:mt-20 mx-2 md:mx-0'>
            <h5 className='md:text-xl text-lg text-center md:text-start font-semibold md:mb-10 mb-4'>Educational Qualifications</h5>
            <ul className={`timeline timeline-snap-icon max-md:timeline-compact timeline-vertical ${Light === "light" ? "text-gray-300" : ""}`}>
                
                {/* MBA */}
                <li data-aos="fade-up">
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/niter.png" alt='Govt. Titumir College' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-start md:text-end Alldesgin">
                        <time className="font-mono italic">2017-2018</time>
                        <p><strong>MBA in Accounting</strong></p>
                        <p>Institution: Govt. Titumir College</p>
                        <p>Location: Dhaka, Bangladesh</p>
                        <p>
                            Successfully completed an MBA in Accounting with a CGPA of 3.29. The program focused on advanced financial management, corporate accounting, and strategic business analysis.
                        </p>
                    </div>
                    <hr />
                </li>

                {/* BBA */}
                <li data-aos="fade-up" data-aos-delay="100">
                    <hr />
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/colloges.png" alt='Govt. Titumir College' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-end Alldesgin">
                        <time className="font-mono italic">2013-2014</time>
                        <p><strong>BBA in Accounting</strong></p>
                        <p>Institution: Govt. Titumir College</p>
                        <p>Location: Dhaka, Bangladesh</p>
                        <p>
                            Completed a Bachelor of Business Administration (BBA) in Accounting with a CGPA of 3.08. The program provided comprehensive knowledge in financial reporting, cost analysis, and organizational management.
                        </p>
                    </div>
                    <hr />
                </li>

                {/* HSC */}
                <li data-aos="fade-up" data-aos-delay="200">
                    <hr />
                    <div className="timeline-middle">
                        <Image className='bg-white rounded' src="/shikarpur.png" alt='Mirpur Girls Ideal Laboratory Institute' width={25} height={25}></Image>
                    </div>
                    <div className="timeline-start md:text-end Alldesgin">
                        <time className="font-mono italic">2011-2013</time>
                        <p><strong>Higher Secondary School Certificate (HSC)</strong></p>
                        <p>Institution: Mirpur Girls Ideal Laboratory Institute</p>
                        <p>Location: Mirpur, Dhaka, Bangladesh</p>
                        <p>
                            Successfully completed the HSC program with a GPA of 5.00. The coursework emphasized science, mathematics, and critical thinking skills.
                        </p>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default Education;
