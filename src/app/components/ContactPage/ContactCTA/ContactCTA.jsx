import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import { FiArrowUpRight } from "react-icons/fi";
import "./contactCTA.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-cta-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--contact-cta-body",
});

export default function ContactCTA() {
  return (
    <section
      className={`etra-contact-cta ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-contact-cta-title"
    >
      <div className="etra-contact-cta__container">
        <div className="etra-contact-cta__heading">
          <p className="etra-contact-cta__label">
            Have a Project in Mind?
          </p>

          <h2 id="etra-contact-cta-title">
            <span>Let&apos;s Create</span>
            <span>Something Great</span>
            <span>Together</span>
          </h2>
        </div>

        <div className="etra-contact-cta__content">
          <p>
            Share your idea with us and let&apos;s explore how we can turn it
            into an engaging digital experience.
          </p>

          <Link
            href="#contact-form"
            className="etra-contact-cta__button"
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}