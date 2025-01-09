"use client"
import React, { useContext } from 'react';
import "./SlidevarSkill.css"
import { ThemContext } from '@/Component/Context/ThemContext';

const SideSkill = ({ heading, skills }) => {
    const { Light } = useContext(ThemContext)
    return (
        <div className={`skills-info-card ml-2 ${Light == "light" ? " bg-[#f9f9f9]" : "bg-[#16112F65]"}`}>
            <h6>{heading}</h6>
            <div className='skills-info-content'>
                {
                    skills.map((item, index) => (
                        <React.Fragment key={`skill_${index}`}>
                            <div className='skill_info'>
                                <p>{item.skill}</p>
                                <p className='percentage'>{item.percentage}</p>
                            </div>
                            <div className='skill-progress-bg'>
                                <div className='skill-progress' style={{ width: item.percentage }}></div>
                            </div>

                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default SideSkill;