import "./cta.css";
import MagneticButton from "../MagneticButton/MagneticButton";

export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-glow cta-glow-one" />
          <div className="cta-glow cta-glow-two" />

          <div className="cta-content">
            <div className="cta-text">
              <h2>Have a project in mind?</h2>

              <p>
                Let&apos;s create something extraordinary together.
              </p>
            </div>

            <MagneticButton
             href="/contact"
              className="cta-button"
            >
              <span>DISCUSS A PROJECT</span>
              <span className="cta-arrow" aria-hidden="true">
                ↗
              </span>
            </MagneticButton>
          </div>

          <div className="cta-decoration" aria-hidden="true">
            <span className="cta-ring cta-ring-one" />
            <span className="cta-ring cta-ring-two" />
            <span className="cta-orb" />
          </div>
        </div>
      </div>
    </section>
  );
}