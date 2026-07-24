import "./about.css";
import CountUp from "../CountUp/CountUp";

const stats = [
  {
    value: "10",
    label: "Years Experience",
  },
  {
    value: "100",
    label: "Projects Completed",
  },
  {
    value: "50",
    label: "Global Clients",
  },
  {
    value: "40",
    label: "Creative Artists",
  },
];

export default function About() {
  return (
    <section className="about-section" id="studio">
      <div className="about-container">
        <div className="showreel-card">
          <div className="about-visual">
            <div className="about-overlay" />

            <div className="showreel-content">
              <p className="showreel-label">Inside ETRA Studio</p>

              <h2>
                Creativity meets
                <span> technology.</span>
              </h2>

              <p className="showreel-description">
                We create immersive gaming, animation and cinematic
                experiences by combining strong visual storytelling with
                modern production technology.
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

          <div className="about-content">
            <div className="about-copy">
              <p className="about-label">About ETRA</p>

              <h3>Passion. Creativity. Technology.</h3>

              <p>
                ETRA Animation & Game Development is a creative studio driven
                by passion and powered by technology. We partner with global
                clients to build memorable experiences that entertain, inspire
                and create lasting impact.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <strong> <CountUp end={parseInt(stat.value)} /></strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}