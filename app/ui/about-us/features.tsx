"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import ListElement from "@/app/ui/about-us/feature-element";

export default function Features({ className = "lg:hidden flex gap-4 max-sm:flex-col text-center max-sm:text-justify px-4 py-16" }: { className?: string }) {
  const { language } = useLanguage();
  const { features } = translations[language].aboutUs
  return (
    <ul className={className}>
      {features.map((itm, idx) => (
        <ListElement key={itm.title} idx={idx} {...itm} />
      ))}
    </ul>
  )
}