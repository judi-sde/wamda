"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import Image from "next/image";

export default function Services() {
  const { language } = useLanguage();
  const { services } = translations[language].services;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center pb-8 px-4 mx-auto max-w-screen-xl">
        <h2 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{services.title}</h2>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image className="rounded-lg" src="/folio1.png" alt="portfolio 1" width={1280} height={720} />
          <Image className="mt-4 lg:mt-10 rounded-lg" src="/folio2.png" alt="portfolio 2" width={1280} height={720} />
        </div>
      </div>
    </section>
  )
}
