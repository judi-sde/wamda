import Landing from "@/app/ui/about/landing";
import Features from "@/app/ui/about/features";
import FAQs from "../ui/about/faqs";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'About',
};
export default function Page() {
  return (
    <>
      <Landing />
      <Features />
      <FAQs />
    </>
  )
}