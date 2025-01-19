"use client"
import React from 'react';

import ContextProvider, { ThemContext } from '../Context/ThemContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { usePathname } from 'next/navigation';
import Loader from '../Loader/Loader';

const MainLayout = ({ children }) => {
        const pathName = usePathname()
    const isDynamicPath = /\/[^/]+/.test(pathName);
    return (
        <>
            <ContextProvider>
               <Loader>
               <ThemContext.Consumer>
                    {(value) => (
                        <div className={value.Light === "light" ? "light-mode" : "dark-mode"}>
                            {!isDynamicPath && <Navbar />}
                            {children}
                            <Footer />
                        </div>
                    )}
                </ThemContext.Consumer>

               </Loader>
            </ContextProvider>
        </>
    );
};

export default MainLayout;