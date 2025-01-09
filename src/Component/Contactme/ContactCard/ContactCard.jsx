"use client"
import React, { useContext } from 'react';
import './ContactCard.css'
import Image from 'next/image';
import Link from 'next/link';
import { ThemContext } from '@/Component/Context/ThemContext';

const ContactCard = ({ iconURL, Text, link }) => {
    const { Light } = useContext(ThemContext)
    return (
        <div className='contact-card'>
            <div className='icons'>
                <a className=' cursor-pointer' href={link} target='blank'><Image src={iconURL} alt={Text} height={50} width={50}></Image></a>
            </div>
            <p className={`footers ${Light == "light" ? " text-gray-300" : ""}`}>{Text}</p>
        </div>
    );
};

export default ContactCard;