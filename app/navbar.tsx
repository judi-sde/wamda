"use client"

import { motion } from 'framer-motion';
import Link from "next/link";
import { useEffect, useState } from "react";
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import WamdaLogo from "@/app/ui/wamda-logo";
import NavLinks from "@/app/ui/nav-links";
import { useLanguage } from "@/app/lib/context/LanguageContext";
// import { useTheme } from './lib/context/ThemeContext';

export default function Navbar() {
  const { setLanguage, language } = useLanguage();
  // const { setTheme, theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };
  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light");
  // };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: isHidden ? -100 : 0 }}
      transition={{ duration: 0.5 }}
      // className={`fixed w-full z-20 top-0 start-0 ${isScrolled ? 'bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600' : 'bg-transparent'}`}
      className={`fixed w-full z-20 top-0 start-0 bg-blue-200 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-600 ${isScrolled ? '' : ''}`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" onClick={() => setIsMenuOpen(false)}>
          <WamdaLogo />
        </Link>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          {/* <div className="flex lg:order-2 space-x-3 rtl:space-x-reverse"> */}
            <button onClick={toggleLanguage} type="button" className="flex justify-evenly items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <GlobeAltIcon className="w-6 h-6" />
              <span>{language === "en" ? 'EN' : 'AR'}</span>
            </button>
            {/* <button onClick={toggleTheme} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded-full p-2 text-center">
              {theme === "dark" ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
              <span className="sr-only">{theme === "dark" ? "light" : "dark"}</span>
            </button>
          </div> */}
          <button onClick={toggleMenu} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded={isMenuOpen}>
            <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isMenuOpen ? <CloseButton /> : <MenuButton />}
          </button>
        </div>
        <NavLinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </motion.nav>
  )
}

const MenuButton = () => {
  return (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    </svg>
  )
}

const CloseButton = () => {
  return (
    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}