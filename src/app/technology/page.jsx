import Cursor from "../components/Cursor/Cursor";
import Loader from "../components/Loader/Loader";
import Particles from "../components/Particles/Particles";
import Navbar from "../components/Navbar/Navbar";

import TechnologyHero from "../components/TechnologyPage/TechnologyHero/TechnologyHero";
import TechnologyCategories from "../components/TechnologyPage/TechnologyCategories/TechnologyCategories";
import TechnologyWorkflow from "../components/TechnologyPage/TechnologyWorkflow/TechnologyWorkflow";
import TechnologyPipeline from "../components/TechnologyPage/TechnologyPipeline/TechnologyPipeline";
import TechnologyCompanies from "../components/TechnologyPage/TechnologyCompanies/TechnologyCompanies";
import TechnologyCTA from "../components/TechnologyPage/TechnologyCTA/TechnologyCTA";

import Footer from "../components/Footer/Footer";

export default function TechnologyPage() {
  return (
    <>
      <Cursor />
      <Loader />
      <Particles />
      <Navbar />

      <main>
        <TechnologyHero />
        <TechnologyCategories />
        <TechnologyWorkflow />
        <TechnologyPipeline />
        <TechnologyCompanies />
        <TechnologyCTA />
      </main>

      <Footer />
    </>
  );
}