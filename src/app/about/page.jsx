import Cursor from "../components/Cursor/Cursor";
import Loader from "../components/Loader/Loader";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";

import AboutHero from "../components/AboutPage/AboutHero/AboutHero";
import AboutValues from "../components/AboutPage/AboutValues/AboutValues";
import AboutStory from "../components/AboutPage/AboutStory/AboutStory";
import AboutStudio from "../components/AboutPage/AboutStudio/AboutStudio";
import AboutCTA from "../components/AboutPage/AboutCTA/AboutCTA";

import Footer from "../components/Footer/Footer";

export default function AboutPage() {
  return (
    <>
      <Cursor />
      <Loader />
      <Particles />
      <Navbar />

      <main>
        <AboutHero />
        <AboutValues />
        <AboutStory />
        <AboutStudio />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}