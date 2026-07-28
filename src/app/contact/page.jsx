import Navbar from "../components/Navbar/Navbar";
import Cursor from "../components/Cursor/Cursor";
import Footer from "../components/Footer/Footer";

import ContactHero from "../components/ContactPage/ContactHero/ContactHero";
import ContactMain from "../components/ContactPage/ContactMain/ContactMain";
import ContactStudios from "../components/ContactPage/ContactStudios/ContactStudios";
import ContactFAQ from "../components/ContactPage/ContactFAQ/ContactFAQ";
import ContactCTA from "../components/ContactPage/ContactCTA/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <ContactHero />
        <ContactMain />
        <ContactStudios />
        <ContactFAQ />
        <ContactCTA />
      </main>
       <Footer />
    </>
  );
}