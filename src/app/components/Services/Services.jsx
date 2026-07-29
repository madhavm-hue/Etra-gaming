import "./services.css";

const services = [
  {
    title: "Game Development",
    icon: "🎮",
    description:
      "From concept to launch, we build immersive and engaging game experiences.",
  },
  {
    title: "3D Animation",
    icon: "◈",
    description:
      "High-quality 3D animation created for games, films and digital experiences.",
  },
  {
    title: "Cinematics",
    icon: "▶",
    description:
      "Cinematic trailers and visual storytelling designed to create strong impact.",
  },
  {
    title: "Environment Art",
    icon: "▣",
    description:
      "Detailed worlds and environments built with strong mood, depth and realism.",
  },
  {
    title: "Art Services",
    icon: "✦",
    description:
      "Creative support for characters, props, concepts and production-ready assets.",
  },
  {
    title: "Live Ops & Support",
    icon: "↻",
    description:
      "Ongoing updates, optimization and production support after launch.",
  },
];

export default function Services() {
  return (
    <section className="home-services-section" id="services">
      <div className="home-services-container">
        <div className="home-services-heading">
          <p className="home-services-label">What We Do</p>

          <h2 className="home-services-title">
            Services built for immersive experiences
          </h2>

          <p className="home-services-intro">
            We combine creativity, technology and production expertise to bring
            ambitious gaming and animation ideas to life.
          </p>
        </div>

        <div className="home-services-grid">
          {services.map((service) => (
            <article
              className="home-service-card"
              key={service.title}
            >
              <div
                className="home-service-icon"
                aria-hidden="true"
              >
                {service.icon}
              </div>

              <h3 className="home-service-title">
                {service.title}
              </h3>

              <p className="home-service-description">
                {service.description}
              </p>

              <a href="/contact" className="home-service-link">
                Learn More
                <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}