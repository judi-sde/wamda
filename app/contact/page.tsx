import Landing from "@/app/ui/contact/landing";
import ContactInfo from "@/app/ui/contact/contact-info";
import ContactForm from "../ui/contact/contact-form";
import { Metadata } from "next";
import GoogleMaps from "@/app/ui/contact/google-maps";
export const metadata: Metadata = {
  title: 'Contact',
};
export default function Page() {

  return (
    <>
      <Landing />
      <ContactForm />
      <ContactInfo />
      {/* <GoogleMaps /> */}
    </>
  )
}