import "./portfolioStats.css";

const stats = [
  {
    number: "100+",
    label: "Projects Completed",
  },
  {
    number: "50+",
    label: "Happy Clients",
  },
  {
    number: "10+",
    label: "Years of Experience",
  },
  {
    number: "15+",
    label: "Creative Awards",
  },
];

export default function PortfolioStats() {
  return (
    <section className="portfolio-stats-section">
      <div className="portfolio-stats-container">
        <div className="portfolio-stats-intro">
          <p className="portfolio-stats-label">Our Impact</p>

          <h2 className="portfolio-stats-title">
            Creativity backed by real results
          </h2>

          <p className="portfolio-stats-description">
            Every project reflects our commitment to quality, innovation and
            memorable digital experiences.
          </p>
        </div>

        <div className="portfolio-stats-grid">
          {stats.map((stat, index) => (
            <article className="portfolio-stat-card" key={stat.label}>
              <span className="portfolio-stat-index">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{stat.number}</h3>
              <p>{stat.label}</p>

              <div className="portfolio-stat-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}