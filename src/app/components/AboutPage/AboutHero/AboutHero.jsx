"use client";

import "./aboutHero.css";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-glow about-hero-glow-one" />
      <div className="about-hero-glow about-hero-glow-two" />

      <div className="about-hero-container">
        <div className="about-hero-content">
          <p className="about-hero-label">
            ABOUT ETRA
          </p>

          <h1 className="about-hero-title">
            Driven by passion.
            <br />
            Built for <span>impact.</span>
          </h1>

          <div className="about-hero-description">
            <p>
              ETRA is a creative technology studio pioneering the next
              generation of 3D movies and series, game development, and
              immersive AR/VR experiences.
            </p>

            <p>
              We bring together art, storytelling and technology to create
              worlds that audiences don&apos;t just watch — they experience.
            </p>

            <p>
              From cinematic 3D films and animated series to interactive games,
              virtual worlds and immersive AR/VR experiences, we work across
              the entire creative and technical pipeline — from the first idea
              to the final experience.
            </p>

            <p>
              Our team combines expertise in 3D art, character and environment
              creation, animation, cinematics, real-time technologies, game
              development, AR/VR and interactive experiences to transform
              ambitious ideas into visually striking digital experiences.
            </p>
          </div>
        </div>

        <div className="about-hero-visual">
          <div className="about-hero-image-wrapper">
            <img
              src="/images/hero/pink-girl.png"
              alt="ETRA creative studio"
              className="about-hero-image"
            />

            <div className="about-hero-image-overlay" />
          </div>
        </div>
      </div>
    </section>
  );
}