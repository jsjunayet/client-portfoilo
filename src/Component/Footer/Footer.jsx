"use client"
import React, { useContext } from 'react';
import './footer.css'
import { ThemContext } from '../Context/ThemContext';

const Footer = () => {
    const { Light } = useContext(ThemContext)
    return (
        <div className={`footers ${Light === "light" ? "text-gray-400" : "text-gray-200"}`}>
        &copy; 2025 | Empowering Financial Clarity | Your Trusted Bookkeeping Partner
    </div>
    
    );
};

export default Footer;