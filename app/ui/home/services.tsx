"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { home } from "@/app/lib/translation/home";
import { services } from "@/app/lib/translation/services";

export default function Services() {
  const { language } = useLanguage();
  return (
    <section className="m-4 relative bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 pointer-events-none"></div>
      <h2 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{services[language].services.title}</h2>
      <p className="relative text-lg text-gray-700 dark:text-gray-300 mb-4">{home[language].sectionDescription}</p>
      <div className="relative flex flex-col space-y-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{services[language].services.printing.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{services[language].services.printing.description}</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{services[language].services.videoEditing.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{services[language].services.videoEditing.description}</p>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{services[language].services.environment.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{services[language].services.environment.description}</p>
        </div>
      </div>
    </section>
  );
}
