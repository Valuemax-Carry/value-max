import Navbar from "@/components/app-shell/Navbar";
import WhatsaapIcon from "@/components/app-shell/WhatsaapIcon";
import Categories from "@/components/landing/Categories";
import Contact from "@/components/landing/Contact";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <WhatsaapIcon />
    <Categories />
    <Contact />
    </>
  );
}
