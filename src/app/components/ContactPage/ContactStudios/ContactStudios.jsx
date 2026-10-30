import { Anton, Manrope } from "next/font/google";
import { FiArrowUpRight, FiMapPin } from "react-icons/fi";
import "./contactStudios.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-studio-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-studio-body",
});

const mapQuery =
  "1/400A North Street, Othaiyal, O. Mettuppatti Post, Sattur, Tamil Nadu 626203, India";

export default function ContactStudios() {
  return (
    <section
      className={`etra-contact-studio ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-contact-studio-title"
    >
      <div className="etra-contact-studio__container">
        <div className="etra-contact-studio__content">
          <p className="etra-contact-studio__label">
            Our Studio
          </p>

          <h2 id="etra-contact-studio-title">
            Visit Our
            <br />
            <span>Sattur Studio</span>
          </h2>

          <p className="etra-contact-studio__intro">
            Our Sattur studio brings together artists, designers and
            developers to create immersive digital experiences.
          </p>

          <div className="etra-contact-studio__location">
            <FiMapPin aria-hidden="true" />

            <div>
              <h3>Sattur Studio</h3>

              <p>ETRA DREAMS ANIMATIONS PRIVATE LIMITED</p>

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
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="etra-contact-studio__directions"
            aria-label="Get directions to Sattur studio in Google Maps (opens in a new tab)"
          >
            <span>Get Directions</span>
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="etra-contact-studio__map">
          <iframe
            src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="ETRA Sattur Studio Location"
          />
        </div>
      </div>
    </section>
  );
}