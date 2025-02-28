"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext"
import { translations } from "@/app/lib/translations";
import { useState } from "react";

function AccordionItem({ question, index, activeIndex, toggleAccordion }: { question: { question: string, answer: string }, index: number, activeIndex: number | null, toggleAccordion: (index: number) => void }) {
  return (
    <div className="mb-4">
      <h2 id={`accordion-collapse-heading-${index}`}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 rounded-lg"
          data-accordion-target={`#accordion-collapse-body-${index}`}
          aria-expanded={activeIndex === index}
          aria-controls={`accordion-collapse-body-${index}`}
          onClick={() => toggleAccordion(index)}
        >
          <span>{question.question}</span>
          <svg
            data-accordion-icon
            className={`w-3 h-3 ${activeIndex === index ? 'rotate-180' : ''} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-collapse-body-${index}`}
        className={`${activeIndex === index ? '' : 'hidden'}`}
        aria-labelledby={`accordion-collapse-heading-${index}`}
      >
        <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 rounded-b-lg">
          <p className="mb-2 text-gray-500 dark:text-gray-400">{question.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const { language } = useLanguage();
  const { title, description, questions } = translations[language].about.faqs;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-gray-900 lg:text-justify py-16 text-center bg-cover">
      <div className="w-full px-4 mx-auto flex justify-between gap-96">
        <div>
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