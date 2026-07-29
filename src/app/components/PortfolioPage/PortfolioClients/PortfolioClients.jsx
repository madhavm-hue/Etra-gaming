import "./portfolioClients.css";

const clients = [
  "UBISOFT",
  "UNITY",
  "UNREAL",
  "EPIC GAMES",
  "PLAYSTATION",
  "XBOX",
  "STEAM",
  "NINTENDO",
];

export default function PortfolioClients() {
  return (
    <section className="portfolio-clients-section">
      <div className="portfolio-clients-container">

        <div className="portfolio-clients-header">
          <p className="portfolio-clients-label">
            Trusted Partners
          </p>

          <h2 className="portfolio-clients-title">
            Companies we've collaborated with
          </h2>

          <p className="portfolio-clients-description">
            We collaborate with studios, startups and global brands to create
            memorable gaming and animation experiences.
          </p>
        </div>

        <div className="portfolio-clients-grid">
          {clients.map((client) => (
            <div className="portfolio-client-card" key={client}>
              <span>{client}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}