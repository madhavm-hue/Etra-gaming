import "./trustedBy.css";

const clients = [
  "Nova Interactive",
  "Pixel Forge",
  "Vortex Studios",
  "Dream Frame",
  "Motion Lab",
  "Next Realm",
];

export default function TrustedBy() {
  return (
    <section className="trusted-section">
      <div className="trusted-container">
        <div className="trusted-heading">
          <p>Trusted By</p>
          <h2>Creative partnerships across the world</h2>
        </div>

        <div className="trusted-grid">
          {clients.map((client) => (
            <div className="trusted-card" key={client}>
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}