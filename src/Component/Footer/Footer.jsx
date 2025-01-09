"use client"
import React, { useContext } from 'react';
import './footer.css'
import { ThemContext } from '../Context/ThemContext';

const Footer = () => {
    const { Light } = useContext(ThemContext)
    return (
        <div className={`footers ${Light == "light" ? "text-gray-400" : ""}`}>
            @2024 Let`s code! Happy coding!
        </div>
    );
};

export default Footer;