"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext"
import { translations } from "@/app/lib/translations";

export default function ContactForm({ className }: { className?: string }) {
  const { language } = useLanguage();
    const { form } = translations[language].contactUs;
  
  return (
    <div className={className ? "" : "px-4 -mt-16"}>
      <form action="#" className={className || "lg:hidden space-y-8 p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800 relative z-10"}>
        <div>
          <label htmlFor="contact-info" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{form["info"].label}</label>
          <input type="text" id="contact-info" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={form["info"].placeholder} required />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">{form["subject"].label}</label>
          <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder={form["subject"].placeholder} required />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">{form["message"].label}</label>
          <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={form["message"].placeholder}></textarea>
        </div>
        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{form["button"]}</button>
      </form>
    </div>
  )
}