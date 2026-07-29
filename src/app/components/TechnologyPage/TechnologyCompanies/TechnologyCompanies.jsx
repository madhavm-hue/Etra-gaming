import "./technologyCompanies.css";

const companies = [
  {
    name: "Epic Games",
    shortName: "EPIC",
  },
  {
    name: "Xbox",
    shortName: "XBOX",
  },
  {
    name: "PlayStation",
    shortName: "PS",
  },
  {
    name: "Electronic Arts",
    shortName: "EA",
  },
  {
    name: "Ubisoft",
    shortName: "UBISOFT",
  },
  {
    name: "Warner Bros",
    shortName: "WB",
  },
  {
    name: "Riot Games",
    shortName: "RIOT",
  },
];

export default function TechnologyCompanies() {
  return (
    <section className="technology-companies-section">
      <div className="technology-companies-container">
        <div className="technology-companies-heading">
          <p className="technology-companies-label">
            Industry Ecosystem
          </p>

          <h2 className="technology-companies-title">
            Built around leading platforms
          </h2>

          <p className="technology-companies-description">
            Our production workflows are designed around tools, platforms and
            standards used across the global gaming and entertainment industry.
          </p>
        </div>

        <div className="technology-companies-track-wrapper">
          <div className="technology-companies-track">
            {companies.map((company) => (
              <article
                className="technology-company-card"
                key={company.name}
              >
                <div className="technology-company-logo">
                  {company.shortName}
                </div>

                <p>{company.name}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="technology-companies-bottom">
          <span />
          <p>
            Supporting scalable pipelines for modern digital production.
          </p>
          <span />
        </div>
      </div>
    </section>
  );
}