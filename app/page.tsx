import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/sections/About";
import Audiences from "@/components/sections/Audiences";
import Contact from "@/components/sections/Contact";
import Demo from "@/components/sections/Demo";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Privacy from "@/components/sections/Privacy";
import Process from "@/components/sections/Process";
import References from "@/components/sections/References";
import Services from "@/components/sections/Services";
import Video from "@/components/sections/Video";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Audiences />
        <Services />
        <Demo />
        <Process />
        <Video />
        <References />
        <About />
        <Privacy />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
