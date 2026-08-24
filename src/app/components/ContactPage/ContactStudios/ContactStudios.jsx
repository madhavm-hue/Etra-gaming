import {
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";

import "./contactStudios.css";

export default function ContactStudios() {
  return (
    <section className="contact-studios-section">

      {/* HEADING */}
      <div className="contact-studios-heading">
        <span>OUR STUDIO</span>

        <h2>
          Visit Our
          <br />
          Sattur Studio
        </h2>

        <p>
          Our Sattur studio brings together artists, designers and
          developers to create immersive digital experiences.
        </p>
      </div>


      {/* SATTUR STUDIO */}
      <div className="contact-studios-grid">

        <article className="studio-card">

          {/* MAP */}
          <div className="studio-map">
            <iframe
              src="https://www.google.com/maps?q=1%2F400A%20North%20Street%2C%20Othaiyal%2C%20O.%20Mettuppatti%20Post%2C%20Sattur%2C%20Tamil%20Nadu%20626203%2C%20India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ETRA Sattur Studio Location"
            />
          </div>


          {/* LOCATION BADGE */}
          <div className="studio-location-badge">
            <FiMapPin />

            <span>Sattur, Tamil Nadu</span>
          </div>


          {/* CONTENT */}
          <div className="studio-content">

            <div>
              <h3>Sattur Studio</h3>

              <p>
                ETRA DREAMS ANIMATIONS PRIVATE LIMITED
              </p>

              <address>
                1/400A, North Street, Othaiyal,
                <br />
                O. Mettuppatti Post,
                <br />
                Sattur, Tamil Nadu – 626203
                <br />
                India
              </address>
            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=1%2F400A%2C%20North%20Street%2C%20Othaiyal%2C%20O.%20Mettuppatti%20Post%2C%20Sattur%2C%20Tamil%20Nadu%20626203%2C%20India"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-direction-button"
              aria-label="Get directions to Sattur studio"
            >
              <span>Get Directions</span>

              <FiArrowUpRight />
            </a>

          </div>

        </article>

      </div>

    </section>
  );
}