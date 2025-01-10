"use client"
import React from 'react';

import ContextProvider, { ThemContext } from '../Context/ThemContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => {
    return (
        <>
            <ContextProvider>
                <ThemContext.Consumer>
                    {(value) => (
                        <div className={value.Light === "light" ? "light-mode" : "dark-mode"}>
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    )}
                </ThemContext.Consumer>
            </ContextProvider>
        </>
    );
};

export default MainLayout;