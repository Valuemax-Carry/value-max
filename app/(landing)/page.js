import Navbar from "@/components/app-shell/Navbar";
import WhatsaapIcon from "@/components/app-shell/WhatsaapIcon";
import Hero from "@/components/landing/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <WhatsaapIcon />
    </>
  );
}
