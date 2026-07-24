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
            <p className="cta-label">Start a Project</p>

            <h2>
              Have an idea?
              <span> Let’s bring it to life.</span>
            </h2>
             <MagneticButton
    href="mailto:contact@etragaming.com"
    className="cta-button"
  >
    Start a Project
    <span aria-hidden="true">→</span>
  </MagneticButton>

            <p className="cta-description">
              Partner with ETRA to create immersive games, animation,
              cinematics and interactive digital experiences.
            </p>

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