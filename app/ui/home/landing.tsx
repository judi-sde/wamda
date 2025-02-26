"use client"

import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import { arrowIcon } from "@/app/ui/icons";
// import { useTheme } from "@/app/lib/context/ThemeContext";

export default function Landing() {
  // const { theme } = useTheme();
  const { language } = useLanguage();
  const { title, description, action1, action2, sequence } = translations[language].home;

  return (
    <section className="py-24 bg-center bg-no-repeat bg-gray-700 bg-blend-multiply bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')]">
      <div className="px-4 mx-auto max-w-screen-xl text-center relative z-10 mt-[78.75px]">
        <TypeAnimation
          preRenderFirstString={true}
          key={language}
          className="md:text-4xl text-xl font-bold text-gray-900 backdrop-brightness-200"
          cursor={true}
          sequence={[
            sequence[0],
            2000,
            sequence[1],
            2000,
            sequence[2],
            2000,
          ]}
          wrapper="div"
          repeat={Infinity}
        />
        <h1 className="m-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">{title}</h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{description}</p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link href="/contact" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
            {action1}
            {arrowIcon}
          </Link>
          <Link href="/about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
            {action2}
          </Link>
        </div>
      </div>
      <div className="bg-gradient-to-b to-transparent from-blue-900 h-[462px] w-full absolute top-0 left-0 z-0"></div>
    </section>
  );
}