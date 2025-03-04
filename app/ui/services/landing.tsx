"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import Gallery from "@/app/ui/services/gallery";
import AnimationElement from "../AnimationElement";

export default function Landing() {
  const { language } = useLanguage();
  const { title, description } = translations[language].services;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="lg:gap-8 flex lg:flex-row flex-col justify-between lg:items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16  mt-[78.75px]">
        <div className="font-light sm:text-lg">
          {/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{title}</h2> */}
          <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h2>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
        </div>
        <div className="grid grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-1 gap-4 mt-8">
          <Gallery />
          <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 lg:hidden">
            <AnimationElement animation="printing" />
          </div>
        </div>
      </div>
    </section>
  )
}
