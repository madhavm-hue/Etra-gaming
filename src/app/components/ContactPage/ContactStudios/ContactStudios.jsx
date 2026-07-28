import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import "./contactStudios.css";

const studios = [
  {
    city: "Chennai",
    country: "India",
    address: "Creative and development studio",
    image: "/images/contact/studio-chennai.webp",
  },
  {
    city: "Bengaluru",
    country: "India",
    address: "Game and interactive production hub",
    image: "/images/contact/studio-bengaluru.webp",
  },
  {
    city: "Dubai",
    country: "United Arab Emirates",
    address: "Global client collaboration studio",
    image: "/images/contact/studio-dubai.webp",
  },
];

export default function ContactStudios() {
  return (
    <section className="contact-studios">
      <div className="contact-studios-header">
        <span>OUR STUDIOS</span>

        <h2>
          Global Presence,
          <br />
          Local Insight
        </h2>

        <p>
          Our creative teams collaborate across locations to deliver immersive,
          high-quality digital experiences for clients worldwide.
        </p>
      </div>

      <div className="contact-studios-grid">
        {studios.map((studio) => (
          <article className="studio-card" key={studio.city}>
            <div className="studio-image">
              <img
                src={studio.image}
                alt={`${studio.city} studio`}
              />

              <div className="studio-location-badge">
                <FiMapPin />
                <span>{studio.country}</span>
              </div>
            </div>

            <div className="studio-content">
              <div>
                <h3>{studio.city}</h3>
                <p>{studio.address}</p>
              </div>

              <button type="button" aria-label={`View ${studio.city} studio`}>
                <FiArrowUpRight />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}