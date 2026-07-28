import Cursor from "../components/Cursor/Cursor";
import Loader from "../components/Loader/Loader";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";
import ServicesCarousel from "../components/ServicesPage/ServicesCarousel/ServicesCarousel";
import ServicesProcess from "../components/ServicesPage/ServicesProcess/ServicesProcess";
import ServicesTech from "../components/ServicesPage/ServicesTech/ServicesTech";
import ServicesCTA from "../components/ServicesPage/ServicesCTA/ServicesCTA";
import Footer from "../components/Footer/Footer";


import ServicesHero from "../components/ServicesPage/ServicesHero/ServicesHero";

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <Loader />
      <Particles />
      <Navbar />

      <main className="services-page">
        <ServicesHero />
        <ServicesCarousel />
        <ServicesProcess />
        <ServicesTech />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}