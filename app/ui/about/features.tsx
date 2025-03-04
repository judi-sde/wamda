"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import ListElement from "@/app/ui/about/feature-element";

export default function Features({ className="lg:hidden sm:flex gap-4 max-sm:block sm:text-center px-4 py-16" }: { className?: string }) {
  const { language } = useLanguage();
  const { features } = translations[language].about
  return (
    <ul className={className}>
      {features.map((itm, idx) => (
        <ListElement key={itm.title} idx={idx} {...itm} />
      ))}
    </ul>
  )
}