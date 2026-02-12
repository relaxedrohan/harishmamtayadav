import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import ParallaxQuote from "@/components/ParallaxQuote";
import Vision from "@/components/Vision";
import Initiatives from "@/components/Initiatives";
import Stats from "@/components/Stats";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <ParallaxQuote />
        <Vision />
        <Initiatives />
        <Stats />
        <Achievements />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
