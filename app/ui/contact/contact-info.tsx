"use client"

import CardButton from "@/app/ui/contact/card-button";
import { contactInfoIcons } from "@/app/ui/icons";
import { useLanguage } from "@/app/lib/context/LanguageContext";
import { translations } from "@/app/lib/translations";
import { email, formatNumber } from "@/app/lib/utils";


export default function ContactInfo({ className="lg:hidden grid grid-cols-1 gap-4 md:grid-cols-2 text-justify py-4 px-4" }: { className?: string }) {
  const { language } = useLanguage();
  const { info } = translations[language].contact;
  const contactInfo = [
    { title: info.address.title, description: info.address.describtion, href: "https://maps.app.goo.gl/oc1Q1x6fnFJCaf4i9", icon: contactInfoIcons["address"] },
    { title: info.email, description: email, href: "mailto:" + email, icon: contactInfoIcons["email"] },
    { title: info.phone, description: formatNumber(language), href: "tel:+963994912998", icon: contactInfoIcons["phone"] },
    { title: info.inbox, description: formatNumber(language), href: "https://wa.me/+963994912998", icon: contactInfoIcons["inbox"] },
  ]

  return (
    <ul className={className}>
      {contactInfo.map((itm, index) => (
        <CardButton key={itm.title} {...itm} />
      ))}
    </ul>
  )
}
