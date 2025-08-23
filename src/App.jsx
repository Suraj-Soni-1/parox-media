import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Logos from "./components/Logos";
import Stats from "./components/Stats";
import Process from "./components/Process";
import CaseStudies from "./components/CaseStudies";
import Testimonials from "./components/Testimonials";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import PersonalBrand from "./components/PersonalBrand";
import ServiceBlocks from "./components/ServiceBlocks";
import BookingPage from "./components/BookingPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={
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

                <section id="personal">
                  <PersonalBrand />
                </section>

                <section id="service-blocks">
                  <ServiceBlocks />
                </section>

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
          }
        />

        {/* Booking page */}
        <Route path="/book" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}
