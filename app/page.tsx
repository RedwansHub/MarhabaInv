'use client'

import { useScroll, motion } from 'framer-motion';
import Hero from "./components/main/Hero";
import IntroSection from "./components/main/Intro";
import AboutSection from "./components/main/About";
import ContactSection from "./components/main/Contact";
import OurClients from './components/main/Clients';
import Footer from './components/Sub/Footer';
export default function Home() {
    const { scrollYProgress } = useScroll();
  return (
      <div className="">
        <div  className=" bg-white text-black">
          <Hero />
          <OurClients />
          <IntroSection />
        </div>
        <AboutSection />
        <ContactSection />
        <Footer />
    </div>
  );
}
