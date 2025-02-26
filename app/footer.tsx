"use client"

import WamdaLogo from "@/app/ui/wamda-logo";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import Link from "next/link";
import clsx from "clsx";
import { email, formatNumber } from "@/app/lib/utils";
import { footerIcons } from "@/app/ui/icons";

export default function Footer() {
  const { language } = useLanguage();
  const { about, contact, services, logo } = translations[language].navlinks;
  const { copyright, support, follow } = translations[language].footer;
  const emailInfo =
    { name: email, href: "mailto:" + email, icon: footerIcons["email"] }
  const socials = [
    { name: follow.instagram, href: "https://www.instagram.com/wamdacenter?igsh=MWZzaHF1ZTZwbWRxcA==", icon: footerIcons["instagram"] },
    { name: follow.facebook, href: "https://www.facebook.com/profile.php?id=100004029557927&mibextid=ZbWKwL", icon: footerIcons["facebook"] },
  ]
  const links = [
    { name: about, href: '/about', },
    { name: services, href: '/services' },
  ];
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <WamdaLogo />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{logo}</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {links.map(({ name, href }, idx) => (
                  <li key={name} className={clsx("mb-4", { "mb-0": links.length - 1 === idx })}>
                    <Link href={href} className="hover:underline">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{follow.title}</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {socials.map(({ name, href }, idx) => (
                  <li key={name} className={clsx("mb-4", { "mb-0": socials.length - 1 === idx })}>
                    <Link href={href} className="hover:underline">{name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{contact}</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="tel:+963994912998" className="hover:underline">{formatNumber(language)}</Link>
                </li>
                <li>
                  <span>{support}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <Link href="/" className="hover:underline">{logo}™</Link>. {copyright}.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {socials.map(({ href, name, icon }) => (
              <SocialLink key={name} href={href} name={name} icon={icon} />
            ))}
            <SocialLink href={emailInfo.href} name={emailInfo.name} icon={emailInfo.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, name, icon }: { href: string, name: string, icon: React.ReactNode }) => (
  <Link href={href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    {icon}
    <span className="sr-only">{name}</span>
  </Link>
);
