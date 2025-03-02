import Landing from "@/app/ui/services/landing";
import Services from "@/app/ui/home/services";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Services',
};
export default function Page() {
  return (
    <>
      <Landing />
      <Services />
    </>
  )
}