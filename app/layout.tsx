import type { Metadata } from "next";
import "@/app/ui/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProviderWrapper from "@/app/lib/context/ProviderWrapper";
import Navbar from "@/app/navbar";
import { kufi } from "@/app/ui/fonts";
import Footer from "@/app/footer";

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
          {children}
          <Footer />
        </ProviderWrapper>
      </body>
    </html>
  );
}
