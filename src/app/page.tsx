import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Facilities } from "@/components/Facilities";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Location } from "@/components/Location";
import { Packages } from "@/components/Packages";
import { Trainers } from "@/components/Trainers";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getGalleryItems } from "@/content/gallery";
import { getTrainers } from "@/content/trainers";

export default function Home() {
  const galleryItems = getGalleryItems();
  const trainers = getTrainers();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Facilities />
        <Packages />
        <Trainers items={trainers} />
        <Gallery items={galleryItems} />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
