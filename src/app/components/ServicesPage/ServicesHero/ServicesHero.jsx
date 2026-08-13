"use client";

import Link from "next/link";
import "./servicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-container">

        {/* LEFT CONTENT */}
        <div className="services-hero-content">

          <span className="services-hero-tag">
            OUR SERVICES
          </span>

        <h1>
  We build digital
  <br />
  experiences that <span>move.</span>
</h1>

          <p className="services-hero-description">
            High-end 3D visualization, CGI, animation and real-time interactive
            <br className="services-description-break" />
            experiences for automotive, aerospace, technology and industrial brands.
          </p>

          <div className="services-hero-buttons">

            <Link
              href="/portfolio"
              className="services-hero-btn services-hero-primary"
            >
              VIEW OUR WORK
              <span aria-hidden="true">→</span>
            </Link>

            <Link
              href="/contact"
              className="services-hero-btn services-hero-secondary"
            >
              DISCUSS A PROJECT
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>


        {/* RIGHT VISUAL */}
        <div className="services-hero-visual">

          <div className="services-hero-glow" />

          <img
            src="/images/hero/gaming-girl-removebg-preview.png"
            alt="ETRA creative services"
            className="services-hero-image"
          />

          <span className="hero-circle hero-circle-one" />
          <span className="hero-circle hero-circle-two" />
          <span className="hero-dot" />

        </div>

      </div>
    </section>
  );
}