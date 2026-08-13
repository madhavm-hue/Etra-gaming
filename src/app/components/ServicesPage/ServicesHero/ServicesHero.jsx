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
            experiences that{" "}
            <span>move.</span>
          </h1>

          <p>
            High-end 3D visualization, CGI, animation and real-time
            interactive experiences for automotive, aerospace,
            technology and industrial brands.
          </p>

          <div className="services-hero-buttons">

            <Link
              href="/portfolio"
              className="services-hero-btn services-hero-primary"
            >
              VIEW OUR WORK
              <span>→</span>
            </Link>

            <Link
              href="/contact"
              className="services-hero-btn services-hero-secondary"
            >
              DISCUSS A PROJECT
              <span>→</span>
            </Link>

          </div>
        </div>


        {/* RIGHT VISUAL */}
        <div className="services-hero-visual">

          <div className="services-hero-glow" />

          <div className="services-hero-image-box">

            <img
              src="/images/hero/Image15-removebg-preview.png"
              alt="ETRA animation and digital experience"
              className="services-hero-image"
            />

          </div>


          {/* DECORATIONS */}

          <div className="hero-circle hero-circle-one" />

          <div className="hero-circle hero-circle-two" />

          <div className="hero-dot hero-dot-one" />

          <div className="hero-dot hero-dot-two" />

        </div>

      </div>

    </section>
  );
}