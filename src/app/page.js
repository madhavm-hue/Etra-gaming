import Particles from "./components/Particles/Particles";
import Cursor from "./components/Cursor/Cursor";
import Reveal from "./components/Reveal/Reveal";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/FeaturedWork/Projects";
import Process from "./components/Process/Process";
import CTA from "./components/CTA/CTA";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Cursor />
      <Loader />
      <Particles />

      <Navbar />

      {/* Hero */}
      <Hero />

      {/* What We Do / Services */}
      <Reveal delay={0.05}>
        <Services />
      </Reveal>

      {/* Selected Work */}
      <Reveal delay={0.1}>
        <Projects />
      </Reveal>

      {/* Inside ETRA Studio */}
      <Reveal delay={0.15}>
        <About />
      </Reveal>

      {/* Our Process */}
      <Reveal delay={0.2}>
        <Process />
      </Reveal>

      {/* CTA */}
      <Reveal delay={0.25}>
        <CTA />
      </Reveal>

      <Footer />
    </>
  );
}