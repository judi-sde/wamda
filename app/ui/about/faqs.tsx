"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext"
import { translations } from "@/app/lib/translations";
import { useState } from "react";

import AccordionItem from "@/app/ui/about/accordion-element";

export default function FAQs() {
  const { language } = useLanguage();
  const { title, description, questions } = translations[language].about.faqs;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 lg:text-left rtl:lg:text-right pb-16 px-4 text-center bg-cover">
      <div className="w-full mx-auto flex flex-col lg:flex-row lg:justify-between lg:gap-96">
        <div className="flex flex-col max-lg:items-center">
          <h1 className="max-w-lg mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
        </div>
        <div id="accordion-collapse" data-accordion="collapse" className="max-w-xl w-full mx-auto">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              question={question}
              index={index}
              activeIndex={activeIndex}
              toggleAccordion={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}