import Cursor from "../components/Cursor/Cursor";
import Loader from "../components/Loader/Loader";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";

import PortfolioHero from "../components/PortfolioPage/PortfolioHero/PortfolioHero";
import PortfolioProjects from "../components/PortfolioPage/PortfolioProjects/PortfolioProjects";
import PortfolioCTA from "../components/PortfolioPage/PortfolioCTA/PortfolioCTA";

import Footer from "../components/Footer/Footer";

export default function PortfolioPage() {
  return (
    <>
      <Cursor />
      <Loader />
      <Particles />
      <Navbar />

      <main>
        <PortfolioHero />
        <PortfolioProjects />
        <PortfolioCTA />
      </main>

      <Footer />
    </>
  );
}