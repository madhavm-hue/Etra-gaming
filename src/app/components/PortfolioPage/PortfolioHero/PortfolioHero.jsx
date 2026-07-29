import Link from "next/link";
import "./portfolioHero.css";

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero-section">
      <div className="portfolio-hero-glow portfolio-hero-glow-one" />
      <div className="portfolio-hero-glow portfolio-hero-glow-two" />

      <div className="portfolio-hero-container">
        <div className="portfolio-hero-content">
          <div className="portfolio-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <p>Portfolio</p>
          </div>

          <p className="portfolio-hero-label">Our Portfolio</p>

          <h1 className="portfolio-hero-title">
            Creating Worlds.
            <br />
            Delivering <span>Impact.</span>
          </h1>

          <p className="portfolio-hero-description">
            Explore our diverse portfolio of projects across games, animation,
            cinematics, environments and more. Each project is a story of
            creativity, collaboration and uncompromising quality.
          </p>

          <div className="portfolio-hero-actions">
            <Link href="/contact" className="portfolio-primary-button">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/services" className="portfolio-secondary-button">
              Our Services
              <span aria-hidden="true">▦</span>
            </Link>
          </div>
        </div>

        <div className="portfolio-hero-visual">
          <div className="portfolio-image-shape">
            <div className="portfolio-image-glow" />

            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Gaming character representing ETRA portfolio"
              className="portfolio-hero-image"
            />
          </div>

          <div className="portfolio-floating-circle portfolio-circle-one" />
          <div className="portfolio-floating-circle portfolio-circle-two" />
          <div className="portfolio-floating-dot" />

          <div className="portfolio-slider-indicator">
            <span className="active">01</span>
            <div className="portfolio-slider-line" />
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
          </div>
        </div>
      </div>
    </section>
  );
}