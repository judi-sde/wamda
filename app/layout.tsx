import type { Metadata } from "next";
import "@/app/ui/globals.css";
import ProviderWrapper from "@/app/lib/context/ProviderWrapper";
import Navbar from "@/app/navbar";
import { kufi } from "@/app/ui/fonts";
import Footer from "@/app/footer";
import Glitter from "./ui/Glitter";

export const metadata: Metadata = {
  title: {
    template: '%s | Wamda Center',
    default: 'Wamda Center',
  },
  description: "Design first company",
  metadataBase: new URL('https://wamda-center.vercel.app'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`rtl:${kufi.className} antialiased bg-white dark:bg-[#111827]`}
      >
        <ProviderWrapper>
          <Navbar />
          <Glitter />
          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}

// NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_6ns3bc7
// NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_kljhl1m
// NEXT_PUBLIC_EMAILJS_USER_ID=SvzYUl3U3UCuO-qGL
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyBMrvvh6ozeFu7P7YSQw4MwELgtstE0QJk
