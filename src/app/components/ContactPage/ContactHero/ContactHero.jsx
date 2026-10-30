import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";
import "./contactHero.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-hero-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-hero-body",
});

export default function ContactHero() {
  return (
    <section
      className={`etra-contact-hero ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-contact-hero-title"
    >
      <div className="etra-contact-hero__container">
        <div className="etra-contact-hero__copy">
          <p className="etra-contact-hero__label">
            Contact Us
          </p>

          <h1 id="etra-contact-hero-title">
            <span>Let&apos;s Create</span>
            <span>Something</span>
            <span>Extraordinary</span>
          </h1>

          <p className="etra-contact-hero__description">
            Have a project in mind? We&apos;d love to hear about it.
            Let&apos;s collaborate and craft immersive experiences
            that captivate your audience.
          </p>

          <div className="etra-contact-hero__actions">
            <Link
              href="#contact-form"
              className="etra-contact-hero__primary"
            >
              <span>Start a Project</span>
              <FiArrowUpRight aria-hidden="true" />
            </Link>

            <Link
              href="#contact-form"
              className="etra-contact-hero__secondary"
            >
              <FiCalendar aria-hidden="true" />
              <span>Schedule a Call</span>
            </Link>
          </div>
        </div>

        <div className="etra-contact-hero__visual">
          <img
            src="/images/hero/Image27.jpg"
            alt="ETRA gaming contact"
            className="etra-contact-hero__image"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}