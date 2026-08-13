import Cursor from "../components/Cursor/Cursor";
import Loader from "../components/Loader/Loader";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";

import ServicesHero from "../components/ServicesPage/ServicesHero/ServicesHero";
import ServicesCarousel from "../components/ServicesPage/ServicesCarousel/ServicesCarousel";
import ServicesIndustries from "../components/ServicesPage/ServicesIndustries/ServicesIndustries";
import ServicesWhyChoose from "../components/ServicesPage/ServicesWhyChoose/ServicesWhyChoose";
import ServicesProcess from "../components/ServicesPage/ServicesProcess/ServicesProcess";
import ServicesTech from "../components/ServicesPage/ServicesTech/ServicesTech";
import ServicesCTA from "../components/ServicesPage/ServicesCTA/ServicesCTA";

import Footer from "../components/Footer/Footer";

export default function ServicesPage() {
  return (
    <>
      <Cursor />
      <Loader />
      <Particles />
      <Navbar />

      <main className="services-page">
        {/* Hero */}
        <ServicesHero />

        {/* What We Do */}
        <ServicesCarousel />

        {/* Industries We Serve */}
        <ServicesIndustries />

        {/* Why Choose ETRA */}
        <ServicesWhyChoose />

        {/* Our Process */}
        <ServicesProcess />

        {/* Technologies We Use */}
        <ServicesTech />

        {/* CTA */}
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}