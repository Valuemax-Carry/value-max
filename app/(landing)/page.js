import WhatsaapIcon from "@/components/app-shell/WhatsaapIcon";
import Categories from "@/components/landing/Categories";
import Contact from "@/components/landing/Contact";
import Deals from "@/components/landing/Deals";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
    <Hero />
    <WhatsaapIcon />
    <Categories />
    <Deals />
    <Contact />
    </>
  );
}
