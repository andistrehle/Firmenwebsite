import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Contact from "@/components/sections/Contact";
import Demo from "@/components/sections/Demo";
import DemoOffer from "@/components/sections/DemoOffer";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Privacy from "@/components/sections/Privacy";
import Problems from "@/components/sections/Problems";
import References from "@/components/sections/References";
import Services from "@/components/sections/Services";
import Video from "@/components/sections/Video";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problems />
        <Benefits />
        <Services />
        <Demo />
        <Video />
        <DemoOffer />
        <References />
        <Privacy />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
