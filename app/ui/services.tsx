"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { home } from "@/app/lib/translation/home";
import { services } from "@/app/lib/translation/services";

export default function Services() {
  const { language } = useLanguage();
  const serviceList = [
    services[language].services.printing,
    services[language].services.videoEditing,
    services[language].services.environment,
  ];

  return (
    <section className="m-4 relative bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg transition-colors duration-300 overflow-hidden">
      <div className="absolute inset-0 dark:from-gray-700 dark:via-gray-900 dark:to-black bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 pointer-events-none"></div>
      <h2 className="relative text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">{services[language].services.title}</h2>
      <p className="relative text-lg text-gray-700 dark:text-gray-300 mb-4">{home[language].description}</p>
      <div className="relative flex flex-col space-y-4">
        {serviceList.map((service, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transform transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{service.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
