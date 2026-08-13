import Link from "next/link";
import "./services.css";

const services = [
  {
    title: "3D & CGI Production",
    icon: "◈",
    description:
      "High-end 3D animation, CGI and visualization that bring ideas to life.",
  },
  {
    title: "Digital Art",
    icon: "✦",
    description:
      "3D assets and environments crafted with precision and creativity.",
  },
  {
    title: "Interactive Experiences",
    icon: "🎮",
    description:
      "Real-time experiences across web, mobile, AR, VR and beyond.",
  },
  {
    title: "Real-Time Solutions",
    icon: "◉",
    description:
      "Visualization and simulation using cutting-edge engines and workflows.",
  },
  {
    title: "Game Development",
    icon: "▣",
    description:
      "End-to-end game development for PC, console and mobile platforms.",
  },

];

export default function Services() {
  return (
    <section className="home-services-section" id="services">
      <div className="home-services-container">

        <div className="home-services-heading">
          <div className="home-services-heading-left">
            <p className="home-services-label">
              What We Do
            </p>

            <h2 className="home-services-title">
              End-to-end services built around your vision.
            </h2>
          </div>

          <Link
            href="/services"
            className="home-services-view-all"
          >
            View All Services
            <span aria-hidden="true">→</span>
          </Link>
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

              <Link
                href="/services"
                className="home-service-link"
                aria-label={`View ${service.title} service`}
              >
                <span aria-hidden="true">↗</span>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}