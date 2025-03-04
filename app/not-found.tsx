"use client"

import Link from 'next/link';
import { useLanguage } from '@/app/lib/context/LanguageContext';
import AnimationElement from '@/app/ui/AnimationElement';

export default function NotFound() {
  const { language } = useLanguage();
  const translation = {
    en: {
      title: "404 Not Found",
      description: "Could not find the requested page.",
      action: "Go Back"
    },
    ar: {
      title: "غير متوفر",
      description: "لم يتم العثور على الصفحة المطلوبة.",
      action: "تراجع"
    }
  }
  return (
    <main className="dark:text-white flex h-screen flex-col items-center justify-center gap-2">
      <AnimationElement animation="not-found" dimensions={{ width: 360, height: 360 }} />
      <h2 className="text-xl font-semibold">{translation[language].title}</h2>
      <p className="text-gray-400">{translation[language].description}</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        {translation[language].action}
      </Link>
    </main>
  );
}