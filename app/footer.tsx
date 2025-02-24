"use client"

import WamdaLogo from "@/app/ui/wamda-logo";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import Link from "next/link";
import clsx from "clsx";
import { formatNumber } from "@/app/lib/utils";

const SocialLink = ({ href, name, icon }: { href: string, name: string, icon: React.ReactNode }) => (
  <Link href={href} className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
    {icon}
    <span className="sr-only">{name}</span>
  </Link>
);

export default function Footer() {
  const { language } = useLanguage();
  const { about, contact, services, logo } = translations[language].navlinks;
  const { copyright, support, follow } = translations[language].footer;
  const email =
    { name: "wamdacenter1@gmail.com", href: "mailto:wamdacenter1@gmail.com", icon: <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l11.985-7.713h-23.97l11.985 7.713zm0 2.287l-12-7.713v12.713h24v-12.713l-12 7.713z" /></svg> }
  const socials = [
    { name: follow.instagram, href: "https://www.instagram.com/wamdacenter?igsh=MWZzaHF1ZTZwbWRxcA==", icon: <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.281.059-2.418.27-3.29.542-.872.272-1.611.63-2.347 1.366-.736.736-1.094 1.475-1.366 2.347-.272.872-.483 2.009-.542 3.29-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.059 1.281.27 2.418.542 3.29.272.872.63 1.611 1.366 2.347.736.736 1.475 1.094 2.347 1.366.872.272 2.009.483 3.29.542 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.281-.059 2.418-.27 3.29-.542.872-.272 1.611-.63 2.347-1.366.736-.736 1.094-1.475 1.366-2.347.272-.872.483-2.009.542-3.29.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.059-1.281-.27-2.418-.542-3.29-.272-.872-.63-1.611-1.366-2.347-.736-.736-1.475-1.094-2.347-1.366-.872-.272-2.009-.483-3.29-.542-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zm6.406-11.845c-.796 0-1.441.645-1.441 1.441s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.441-1.441-1.441z" /></svg> },
    { name: follow.facebook, href: "https://www.facebook.com/profile.php?id=100004029557927&mibextid=ZbWKwL", icon: <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19"><path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd" /></svg> },
  ]
  const links = [
    { name: about, href: '/about-us', },
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
            <SocialLink href={email.href} name={email.name} icon={email.icon} />
          </div>
        </div>
      </div>
    </footer>
  );
};
