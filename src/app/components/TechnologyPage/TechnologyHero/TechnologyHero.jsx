import Link from "next/link";
import "./technologyHero.css";

export default function TechnologyHero() {
  return (
    <section className="technology-hero-section">
      <div className="technology-hero-glow technology-hero-glow-one" />
      <div className="technology-hero-glow technology-hero-glow-two" />

      <div className="technology-hero-container">
        <div className="technology-hero-content">
          <div className="technology-breadcrumb">
            <Link href="/">Home</Link>
            <span>›</span>
            <p>Technology</p>
          </div>

          <p className="technology-hero-label">Our Technology</p>

          <h1 className="technology-hero-title">
            Powering imagination
            <br />
            through <span>innovation.</span>
          </h1>

          <p className="technology-hero-description">
            We use advanced tools, modern engines and production-ready
            workflows to create immersive games, animation and interactive
            digital experiences.
          </p>

          <div className="technology-hero-actions">
            <a
              href="#technologies"
              className="technology-primary-button"
            >
              Explore Technology
              <span aria-hidden="true">→</span>
            </a>

            <Link
              href="/portfolio"
              className="technology-secondary-button"
            >
              View Our Work
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="technology-hero-visual">
          <div className="technology-image-background">
            <div className="technology-image-glow" />

            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Technology and gaming character"
              className="technology-hero-image"
            />
          </div>

          <div className="technology-orbit technology-orbit-one" />
          <div className="technology-orbit technology-orbit-two" />

          <div className="technology-floating-dot technology-dot-one" />
          <div className="technology-floating-dot technology-dot-two" />

          <div className="technology-floating-card technology-card-one">
            <span>01</span>
            <p>Realtime</p>
          </div>

          <div className="technology-floating-card technology-card-two">
            <span>02</span>
            <p>Interactive</p>
          </div>

          <div className="technology-slider-indicator">
            <span className="active">01</span>
            <div className="technology-slider-line" />
            <span>02</span>
            <span>03</span>
            <span>04</span>
          </div>
        </div>
      </div>
    </section>
  );
}