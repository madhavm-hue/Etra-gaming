import Cursor from "./components/Cursor/Cursor";
import Reveal from "./components/Reveal/Reveal";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Projects from "./components/FeaturedWork/Projects";
import Process from "./components/Process/Process";
import Technologies from "./components/Technologies/Technologies";
import TrustedBy from "./components/TrustedBy/TrustedBy";
import CTA from "./components/CTA/CTA";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <>
    <Cursor/>
      <Loader />
   <Navbar />

<Hero />

<Reveal>
  <Projects />
</Reveal>

<Reveal delay={0.05}>
  <Services />
</Reveal>

<Reveal delay={0.1}>
  <About />
</Reveal>

<Reveal delay={0.15}>
  <Process />
</Reveal>

<Reveal delay={0.2}>
  <Technologies />
</Reveal>

<Reveal delay={0.25}>
  <TrustedBy />
</Reveal>

<Reveal delay={0.3}>
  <CTA />
</Reveal>

<Footer />
    </>
  );
}