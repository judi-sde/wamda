import Image from "next/image";
import { logoFont } from "@/app/ui/fonts"
import { translations } from "@/app/lib/translations";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import Link from "next/link";

interface WamdaLogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> { }

export default function WamdaLogo({ ...attr }: WamdaLogoProps) {
  const { language } = useLanguage();
  const { logo } = translations[language].navbar;

  return (
    <Link
      href="/"
      {...attr}
      className={`${logoFont.className} flex flex-row items-center gap-2 leading-none dark:text-white text-blue-500`}
    >
      <Image src="/wamda-logo.png" alt="Wamda Logo" width={44} height={44}  className="ltr:scale-x-[-1]" />
      <p className="text-3xl">{logo}</p>
    </Link>
  );
}
