"use client";

import Link from "next/link";
import "./servicesHero.css";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      <div className="services-hero-container">

        <div className="services-hero-content">
          <span className="services-hero-tag">
            SERVICES
          </span>

          <h1>
            What We Do
            <br />
            <span>Exceptionally</span>
          </h1>

          <p>
            End-to-end creative and development services that bring
            ideas to life through art, technology and passion.
          </p>

          <Link href="#core-services" className="services-hero-btn">
            Let&apos;s Build Together
            <span>→</span>
          </Link>
        </div>

        <div className="services-hero-visual">
          <div className="services-hero-glow"></div>

          <img
            src="/images/hero/gaming-girl-removebg-preview.png"
            alt="ETRA creative services"
            className="services-hero-image"
          />

          <span className="hero-circle hero-circle-one"></span>
          <span className="hero-circle hero-circle-two"></span>
          <span className="hero-dot"></span>
        </div>

      </div>
    </section>
  );
}