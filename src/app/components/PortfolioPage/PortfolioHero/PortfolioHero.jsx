"use client";

import Link from "next/link";
import "./portfolioHero.css";

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="portfolio-hero-container">

        {/* LEFT CONTENT */}
        <div className="portfolio-hero-content">

          <p className="portfolio-hero-label">
            Our Portfolio
          </p>

          <h1 className="portfolio-hero-title">
            <span className="portfolio-title-line">
              Creating Worlds.
            </span>

            <span className="portfolio-title-line">
              Delivering{" "}
              <span className="portfolio-title-gradient">
                Impact.
              </span>
            </span>
          </h1>

          <p className="portfolio-hero-description">
            Explore our diverse portfolio of projects across games,
            animation, cinematics, environments and more. Each project
            is a story of creativity, collaboration and uncompromising
            quality.
          </p>

          <div className="portfolio-hero-actions">
            <Link
              href="/contact"
              className="portfolio-primary-button"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/services"
              className="portfolio-secondary-button"
            >
              Our Services
              <span aria-hidden="true">▦</span>
            </Link>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="portfolio-hero-visual">
          <div className="portfolio-image-shape">

            <div className="portfolio-image-glow" />

            <img
              src="/images/hero/ride1.png"
              alt="ETRA portfolio showcase"
              className="portfolio-hero-image active"
            />

          </div>

          {/* DECORATIONS */}
          <div className="portfolio-floating-circle portfolio-circle-one" />
          <div className="portfolio-floating-circle portfolio-circle-two" />
          <div className="portfolio-floating-dot" />
        </div>

      </div>
    </section>
  );
}