import Link from "next/link";
import "./portfolioCTA.css";

export default function PortfolioCTA() {
  return (
    <section className="portfolio-cta-section">
      <div className="portfolio-cta-container">

        <div className="portfolio-cta-content">
          <p className="portfolio-cta-label">
            Let&apos;s Create Together
          </p>

          <h2 className="portfolio-cta-title">
            Have an idea?
            <br />
            Let&apos;s bring it to <span>life.</span>
          </h2>

          <p className="portfolio-cta-description">
            From concept to final delivery, we collaborate with you to build
            powerful games, animations and interactive experiences.
          </p>

          <div className="portfolio-cta-actions">
            <Link href="/contact" className="portfolio-cta-primary">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>

            <Link href="/services" className="portfolio-cta-secondary">
              Explore Services
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}