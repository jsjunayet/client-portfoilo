"use client"
import React, { useState, useEffect, useContext, useRef } from 'react';
import SubSkill from '../SubSkill/SubSkill';
import { mySkill } from '../data/picture/data';
import './style.css';
import SideSkill from '../sidever/SideSkill';
import { ThemContext } from '@/Component/Context/ThemContext';
import Title from '@/Component/Utility/Title';

const Skill = () => {
    const [selectedskill, setselectedskill] = useState(mySkill[0]);
    const [index, setIndex] = useState(0);
    const { Light } = useContext(ThemContext);
    // const intervalRef = useRef(null);

    // useEffect(() => {
    //     intervalRef.current = setInterval(() => {
    //         setIndex((prevIndex) => (prevIndex + 1) % mySkill.length);
    //     }, 1000);

    //     return () => clearInterval(intervalRef.current);
    // }, []);

    // useEffect(() => {
    //     setselectedskill(mySkill[index]);
    // }, [index]);

    const handleselectedskill = (data) => {
        setselectedskill(data);
    };

    return (
        <section id='skills' className={`relative md:ml-2  ${Light === "light" ? "bg-light" : "bg-dark"}`}>
            <Title name={'Technical Proficiency'}/>
            <div className='Skills-content'>
                <div className='skills'>
                    {mySkill.map((item) => (
                        <SubSkill
                            key={item.title}
                            iconUrl={item.icons}
                            title={item.title}
                            isactive={selectedskill.title === item.title}
                            onclick={() => handleselectedskill(item)}
                        />
                    ))}
                </div>
                <div className='skill-info'>
                    <SideSkill heading={selectedskill.title} skills={selectedskill.skills} />
                </div>
            </div>
        </section>
    );
};

export default Skill;
