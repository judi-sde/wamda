"use client"

import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import ContactInfo from "@/app/ui/contact/contact-info";
import ContactForm from "@/app/ui/contact/contact-form";

export default function Landing() {
  const { language } = useLanguage();
  const { title, description } = translations[language].contactUs;

  return (
    <section className="bg-white lg:dark:bg-gray-900 max-lg:h-[350.75px] py-16 lg:text-justify text-center bg-cover dark:bg-gray-700 bg-blend-multiply max-lg:dark:bg-[url(https://flowbite.s3.amazonaws.com/blocks/marketing-ui/contact/laptop-human.jpg)]">
      <div className="relative z-10 max-w-screen-xl px-4 mx-auto flex justify-center gap-8 mt-[78.75px]">
        <div>
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">{title}</h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">{description}</p>
          <hr className="hidden lg:block border-gray-200 lg:mx-auto dark:border-gray-700 lg:my-8" />
          <ContactInfo className="hidden lg:grid gap-4 grid-cols-2 text-justify" />
        </div>
        <ContactForm className="hidden h-full lg:block space-y-8 p-4 min-w-96  bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 dark:bg-gray-800" />
      </div>
      <div className="lg:hidden absolute bg-black/5 top-0 left-0 w-full h-[350.75px]" />
    </section>
  )
}
