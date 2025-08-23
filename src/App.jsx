import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Stats from "./components/Stats";
// import Services from "./components/Services"; // <- keep commented if duplicate
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import PersonalBrand from "./components/PersonalBrand";
import ServiceBlocks from "./components/ServiceBlocks";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="logos">
          <Logos />
        </section>

        <section id="stats">
          <Stats />
        </section>

        {/* Personal brand feature row */}
        <section id="personal">
          <PersonalBrand />
        </section>

        {/* Service blocks */}
        <section id="service-blocks">
          <ServiceBlocks />
        </section>

        {/* Uncomment only if Services.jsx is DIFFERENT from ServiceBlocks */}
        {/* <section id="services">
          <Services />
        </section> */}

        <section id="process">
          <Process />
        </section>

        <section id="cases">
          <CaseStudies />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="about">
          <Founder />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
