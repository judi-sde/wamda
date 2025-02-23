import Image from "next/image";
import { logoFont } from "@/app/ui/fonts"
import { translations } from "@/app/lib/translations";
import { useLanguage } from "@/app/lib/context/LanguageContext";

export default function WamdaLogo() {
  const { language } = useLanguage();
  const { logo } = translations[language].navlinks;

  return (
    <div
      className={`${logoFont.className} flex flex-row items-center gap-2 leading-none dark:text-white text-blue-500`}
    >
      <Image src="/wamda-logo.png" alt="Wamda Logo" width={44} height={44} />
      <p className="text-3xl lg-text-[44px]">{logo}</p>
    </div>
  );
}
