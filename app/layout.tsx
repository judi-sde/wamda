import type { Metadata } from "next";
import "@/app/ui/globals.css";
import ProviderWrapper from "@/app/lib/context/ProviderWrapper";
import Navbar from "@/app/navbar";
import { kufi } from "@/app/ui/fonts";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`rtl:${kufi.className} antialiased`}
      >
        <ProviderWrapper>
          <Navbar />
          {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
