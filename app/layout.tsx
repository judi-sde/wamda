import type { Metadata } from "next";
import "@/app/ui/globals.css";
import ProviderWrapper from "@/app/lib/context/ProviderWrapper";
import Navbar from "@/app/navbar";
import { kufi } from "@/app/ui/fonts";
import Footer from "@/app/footer";

export const metadata: Metadata = {
  title: "Wamda Ceneter",
  description: "Design first company",
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
