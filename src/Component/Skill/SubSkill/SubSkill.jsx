"use client"
import Image from 'next/image';
import React, { useContext } from 'react';
import './style.css';
import { ThemContext } from '@/Component/Context/ThemContext';
const SubSkill = ({ title, iconUrl, isactive, onclick }) => {
    const { Light } = useContext(ThemContext)
    return (
        <div className={`skills-card  ${Light == "light" ? " bg-[#f9f9f9]" : "bg-[#16112F65]"} ${isactive ? "active" : ''}`}
            onClick={() => onclick()}
        >
            <div className='skill-icon'>
                <Image src={iconUrl} alt={title} height={40} width={50}></Image>
            </div>
            <span>{title}</span>

        </div>
    );
};

export default SubSkill;