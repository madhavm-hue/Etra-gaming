import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./portfolioCTA.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--portfolio-cta-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--portfolio-cta-body",
});

export default function PortfolioCTA() {
  return (
    <section
      className={`etra-portfolio-cta ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-portfolio-cta-title"
    >
      <div className="etra-portfolio-cta__container">
        <div className="etra-portfolio-cta__heading">
          <p className="etra-portfolio-cta__label">
            Let&apos;s Create Together
          </p>

          <h2 id="etra-portfolio-cta-title">
            <span>Have an idea?</span>
            <span>Let&apos;s bring it to life.</span>
          </h2>
        </div>

        <div className="etra-portfolio-cta__content">
          <p className="etra-portfolio-cta__description">
            From concept to final delivery, we collaborate with you to build
            powerful games, animations and interactive experiences.
          </p>

          <div className="etra-portfolio-cta__actions">
            <Link
              href="/contact"
              className="etra-portfolio-cta__primary"
            >
              <span>Start a Project</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/services"
              className="etra-portfolio-cta__secondary"
            >
              <span>Explore Services</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}