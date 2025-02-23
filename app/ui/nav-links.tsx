"use client"

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/app/lib/context/LanguageContext';
import { translations } from '@/app/lib/translations';

export default function NavLinks({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean, setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const { home, about, contact, services } = translations[language].navlinks;
  const links = [
    { name: home, href: '/' },
    { name: about, href: '/about-us', },
    { name: contact, href: '/contact-us' },
    { name: services, href: '/services' },
  ];

  return (
    <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`} id="navbar-sticky">
      <ul className="flex flex-col p-4 lg:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 lg:space-x-7 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-transparent dark:border-gray-700">
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link href={href}
              className={`block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 ${pathname === href ? 'text-white bg-blue-700 rounded-sm lg:bg-transparent lg:text-blue-700 lg:p-0 lg:dark:text-blue-500' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div >
  );
}
