import { Anton, Manrope } from "next/font/google";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./cta.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--cta-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--cta-body",
});

export default function CTA() {
  return (
    <section
      id="contact"
      className={`etra-home-cta ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-cta-title"
    >
      <div className="etra-home-cta__container">
        <div className="etra-home-cta__content">
          <h2
            id="etra-cta-title"
            className="etra-home-cta__title"
          >
            Have a project
            <span>in mind?</span>
          </h2>

          <div className="etra-home-cta__action">
            <p className="etra-home-cta__description">
              Let&apos;s create something extraordinary together.
            </p>

            <MagneticButton
              href="/contact"
              className="etra-home-cta__button"
            >
              <span>Discuss a project</span>
              <span
                className="etra-home-cta__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}