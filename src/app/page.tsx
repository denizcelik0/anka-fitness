import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Packages } from "@/components/Packages";
import { Trainers } from "@/components/Trainers";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <Trainers />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
