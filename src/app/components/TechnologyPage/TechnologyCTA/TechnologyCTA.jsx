import Link from "next/link";
import "./technologyCTA.css";

export default function TechnologyCTA() {
  return (
    <section className="technology-cta-section">
      <div className="technology-cta-container">
        <div className="technology-cta-card">
          <div className="technology-cta-content">
            <p className="technology-cta-label">
              Build With Technology
            </p>

            <h2 className="technology-cta-title">
              Let&apos;s create the next
              <br />
              digital <span>experience.</span>
            </h2>

            <p className="technology-cta-description">
              From real-time games and cinematic animation to interactive
              digital solutions, our team is ready to transform your idea into
              a powerful experience.
            </p>

            <div className="technology-cta-actions">
              <Link
                href="/contact"
                className="technology-cta-primary"
              >
                Start a Project
                <span aria-hidden="true">→</span>
              </Link>

              <Link
                href="/portfolio"
                className="technology-cta-secondary"
              >
                View Portfolio
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="technology-cta-visual">
            <div className="technology-cta-circle technology-cta-circle-one" />
            <div className="technology-cta-circle technology-cta-circle-two" />
            <div className="technology-cta-circle technology-cta-circle-three" />

            <div className="technology-cta-core">
              <span>ETRA</span>
              <p>Future Ready</p>
            </div>

            <div className="technology-cta-tag technology-cta-tag-one">
              <span>01</span>
              <p>Realtime</p>
            </div>

            <div className="technology-cta-tag technology-cta-tag-two">
              <span>02</span>
              <p>Interactive</p>
            </div>

            <div className="technology-cta-tag technology-cta-tag-three">
              <span>03</span>
              <p>Scalable</p>
            </div>
          </div>

          <div className="technology-cta-glow technology-cta-glow-one" />
          <div className="technology-cta-glow technology-cta-glow-two" />
        </div>
      </div>
    </section>
  );
}