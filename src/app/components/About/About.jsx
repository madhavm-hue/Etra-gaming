import "./about.css";

export default function About() {
  return (
    <section className="about-section" id="studio">
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

              <button
                type="button"
                className="showreel-button"
                aria-label="Play ETRA studio showreel"
              >
                <span className="play-icon" aria-hidden="true">
                  ▶
                </span>

                <span>
                  <small>Watch Our</small>
                  Studio Showreel
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}