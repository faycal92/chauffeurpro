import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Realisations from "@/components/Realisations";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Pricing />
        <Realisations />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
