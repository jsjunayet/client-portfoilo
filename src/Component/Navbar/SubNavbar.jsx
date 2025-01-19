"use client";
import { useState, useEffect, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { MdLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { ThemContext } from "../Context/ThemContext";
import { navLinks } from "../Utility/Alldata";
import { usePathname } from "next/navigation";

const SubNavbar = () => {
  const [open, setOpen] = useState(false);
  const controls = useAnimation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const { Light, setLight } = useContext(ThemContext);
  const pathname = usePathname();  // Track the current path

  // Toggle Light/Dark mode
  const handleClick = () => {
    setLight((prev) => (prev === "light" ? "dark" : "light"));
  };

  const closeMenu = () => setOpen(false);
  const [activeSection, setActiveSection] = useState("hero");
  const getThreshold = () => {
    if (window.innerWidth >= 1280) return 0.9; // XL screens
    if (window.innerWidth >= 1024) return 0.7; // LG screens
    if (window.innerWidth >= 768) return 0.5; // MD screens
    return 0.3; // SM screens
  };

  // Detect page scroll and active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: getThreshold(), // 30% visible to activate section
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll to the specific section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      closeMenu();
    }
  };

  // Ensure the navbar resets on route change (to handle dynamic pages like project details)
  useEffect(() => {
    // Reset open menu on route change
    setOpen(false);
  }, [pathname]); // When pathname changes, reset the navbar

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 ${Light === "light" ? "bg-[#060417]" : "bg-[#149ECA]"} shadow-lg`}
      animate={controls}
      initial={{ opacity: 1, y: 0 }}
    >
      <div className="max-w-5xl mx-auto py-3 flex flex-col md:flex-row justify-between items-center">
        <motion.div
          className="flex ml-2 md:ml-0 items-center justify-between"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="font-bold mr-5 text-2xl flex items-center font-[Poppins] text-white"
          >
            <span className="md:text-3xl text-2xl text-indigo-600 ">
              <ion-icon name="logo-ionic"></ion-icon>
            </span>
            SADIA | <span className={`ml-1 ${Light === "light" ? "text-[#149ECA]" : "text-gray-600"}`}>AKTER</span>
          </Link>
          {Light === "light" ? (
            <MdLightMode onClick={handleClick} className="text-xl block md:hidden text-white" />
          ) : (
            <MdOutlineDarkMode onClick={handleClick} className="text-xl block md:hidden" />
          )}
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
          className={`md:flex md:items-center md:space-x-6 md:pb-0 pb-3 ${open ? "block" : "hidden md:block"}`}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p
                onClick={() => scrollToSection(link.id)}
                className={`text-white px-1 py-2 rounded-md cursor-pointer ${activeSection === link.id ? "border-b-2 border-blue-200" : ""}`}
              >
                {link.title}
              </p>
            </motion.li>
          ))}

          {Light === "light" ? (
            <MdLightMode onClick={handleClick} className="text-xl md:block hidden text-white" />
          ) : (
            <MdOutlineDarkMode onClick={handleClick} className="text-xl md:block hidden" />
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default SubNavbar;
