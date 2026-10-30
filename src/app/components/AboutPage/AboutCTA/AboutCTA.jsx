import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./aboutCTA.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--about-cta-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--about-cta-body",
});

export default function AboutCTA() {
  return (
    <section
      className={`etra-about-cta ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-about-cta-title"
    >
      <div className="etra-about-cta__container">
        <div className="etra-about-cta__content">
          <h2
            id="etra-about-cta-title"
            className="etra-about-cta__title"
          >
            Ready to create your
            <span>next digital experience?</span>
          </h2>

          <div className="etra-about-cta__action">
            <p className="etra-about-cta__description">
              Whether it&apos;s game development, animation, interactive
              experiences, or immersive technology, our team is here to
              bring your vision to life.
            </p>

            <Link
              href="/contact"
              className="etra-about-cta__button"
            >
              <span>Let&apos;s Create Together</span>
              <span
                className="etra-about-cta__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}