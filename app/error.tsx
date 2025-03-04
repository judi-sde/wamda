// The error.tsx file can be used to define a UI boundary for a route segment. 
// It serves as a catch-all for unexpected errors and allows you to display a fallback UI to your users.
'use client';


import { useEffect } from 'react';
import { useLanguage } from '@/app/lib/context/LanguageContext';
import AnimationElement from '@/app/ui/AnimationElement';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
  const { language } = useLanguage();
  const translation = {
    ar: {
      message: "حدث خطأ ما!",
      action: "إعادة المحاولة"
    },
    en: {
      message: "Something went wrong!",
      action: "Try again"
    }
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <AnimationElement animation="error" dimensions={{ width: 360, height: 360 }} />
      <h2 className="text-center text-gray-900 dark:text-white">{translation[language].message}</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={
          // Attempt to recover by trying to re-render the route
          () => reset()
        }
      >
        {translation[language].action}
      </button>
    </main>
  );
}