import Link from "next/link";
import "./about.css";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="showreel-card">
          <div className="about-visual">

            <div className="about-overlay" />

            <div className="showreel-content">
              <p className="showreel-label">
                INSIDE ETRA STUDIO
              </p>

              <h2>
                Where creativity
                <span> meets technology.</span>
              </h2>

              <p className="showreel-description">
                We are a team of artists, designers and developers passionate
                about creating extraordinary digital experiences.
              </p>

              <Link
                href="/portfolio#showreel"
                className="showreel-button"
                aria-label="View ETRA studio showreel"
              >
                <span className="play-icon" aria-hidden="true">
                  ▶
                </span>

                <span>
                  <small>Watch Our</small>
                  Studio Showreel
                </span>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}