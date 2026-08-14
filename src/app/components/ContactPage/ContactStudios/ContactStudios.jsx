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
          Chennai Studio
        </h2>

        <p>
          Our Chennai studio brings together artists, designers and
          developers to create immersive digital experiences.
        </p>
      </div>


      {/* CHENNAI STUDIO */}
      <div className="contact-studios-grid">

        <article className="studio-card">

          {/* MAP */}
          <div className="studio-map">
            <iframe
              src="https://www.google.com/maps?q=No.%2051%20Dr.%20Ramasamy%20Salai%20KK%20Nagar%20Chennai%20600078&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ETRA Chennai Studio Location"
            />
          </div>


          {/* LOCATION BADGE */}
          <div className="studio-location-badge">
            <FiMapPin />

            <span>Chennai, India</span>
          </div>


          {/* CONTENT */}
          <div className="studio-content">

            <div>
              <h3>Chennai Studio</h3>

              <p>
                Etra Automotive Engineering and Technologies Private Limited
              </p>

              <address>
                No. 51, Dr. Ramasamy Salai,
                <br />
                K.K. Nagar,
                <br />
                Chennai – 600078
              </address>
            </div>


            <a
              href="https://www.google.com/maps/search/?api=1&query=No.+51,+Dr.+Ramasamy+Salai,+K.K.+Nagar,+Chennai+600078"
              target="_blank"
              rel="noopener noreferrer"
              className="studio-direction-button"
              aria-label="Get directions to Chennai studio"
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