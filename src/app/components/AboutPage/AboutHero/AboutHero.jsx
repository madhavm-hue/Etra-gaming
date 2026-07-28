"use client";

import "./aboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-glow about-hero-glow-one" />
      <div className="about-hero-glow about-hero-glow-two" />

      <div className="about-hero-container">
        <div className="about-hero-content">
          <p className="about-hero-label">ABOUT ETRA</p>

          <h1 className="about-hero-title">
            Driven by passion.
            <br />
            Built for <span>impact.</span>
          </h1>

          <p className="about-hero-description">
            We are a creative studio crafting immersive games, cinematic
            animation and interactive digital experiences that bring bold
            ideas to life.
          </p>

          <a href="#about-story" className="about-hero-button">
            Discover Our Journey
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="about-hero-visual">
          <div className="about-hero-image-wrapper">
            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="ETRA creative gaming studio"
              className="about-hero-image"
            />

            <div className="about-hero-image-overlay" />

            <div className="about-hero-floating-card">
              <span>CREATIVE STUDIO</span>
              <strong>Ideas into experiences</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="about-hero-scroll">
        <span>Scroll to explore</span>
        <div className="about-hero-scroll-line" />
      </div>
    </section>
  );
}