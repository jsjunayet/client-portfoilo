"use client"
import { useState, useEffect, useContext } from "react";
import { IoIosHome, IoIosCube, IoMdInformationCircle, IoMdList, IoIosConstruct } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import NavLink from "./NavLink ";
import { MdCastForEducation, MdMedicalServices, MdOutlineContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemContext } from "../Context/ThemContext";
import { GrAchievement } from "react-icons/gr";

const SubNavbar = () => {
    const Links = [
        {
            id: 1,
            path: "/",
            title: "Home",
            icon: <IoIosHome />,
        },
        {
            id: 2,
            path: "/about",
            title: "About ME",
            icon: <IoMdInformationCircle />,
        },
        {
            id: 3,
            path: "/service",
            title: "Service",
            icon: <MdMedicalServices />,
        },

    ];



    const [open, setOpen] = useState(false);
    const controls = useAnimation();
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const { Light, setLight } = useContext(ThemContext)
    const handleClick = () => {
        setLight((prev) => prev == "light" ? "dark" : "light")
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            const threshold = 78;

            if (isScrollingDown && currentScrollPos > threshold) {
                controls.start({ opacity: 0, y: -50 });
            } else {
                controls.start({ opacity: 1, y: 0 });
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, controls]);

    const closeMenu = () => setOpen(false);


    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 ${Light == "light" ? " bg-[#060417]" : "bg-[#149ECA]"}  shadow-lg`}
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
        >
            <div className="max-w-5xl  mx-auto py-3 flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    className="flex ml-2 md:ml-0 items-center justify-between"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="font-bold mr-5  text-2xl flex items-center font-[Poppins] text-white"
                    >
                        <span className="md:text-3xl text-2xl text-indigo-600">
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span>
                        SADIA | <span className={` ml-1 ${Light == "light" ? "text-[#149ECA]" : "text-gray-600"} `}>AKTER</span>
                    </Link>
                    {
                        Light == "light" ? <MdLightMode onClick={handleClick} className="text-xl block md:hidden text-white" /> : <MdOutlineDarkMode onClick={handleClick} className="text-xl block md:hidden" />
                    }
                    <div className="md:hidden ml-2">
                        <motion.div
                            onClick={() => setOpen(!open)}
                            className="text-3xl cursor-pointer transition-transform duration-300 transform"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {open ? (
                                <FiX onClick={closeMenu} className="text-2xl text-white" />
                            ) : (
                                <FiMenu className="text-2xl text-white" />
                            )}
                        </motion.div>
                    </div>

                </motion.div>

                <ul
                    className={`md:flex md:items-center md:space-x-6 md:pb-0 pb-3 ${open ? "block" : "hidden md:block"
                        }`}
                >
                    {Links.map((link) => (
                        <motion.li
                            key={link.name}
                            className="md:my-0 my-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <NavLink href={link.path} icon={link.icon} title={link.title} />
                        </motion.li>
                    ))}
                    {
                        Light == "light" ? <MdLightMode onClick={handleClick} className="text-xl md:block hidden text-white" /> : <MdOutlineDarkMode onClick={handleClick} className="text-xl md:block hidden" />
                    }
                </ul>
            </div>
        </motion.nav>
    );
};

export default SubNavbar;