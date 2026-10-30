import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./servicesCTA.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--services-cta-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--services-cta-body",
});

export default function ServicesCTA() {
  return (
    <section
      className={`etra-services-cta ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-services-cta-title"
    >
      <div className="etra-services-cta__container">
        <div className="etra-services-cta__content">
          <h2
            id="etra-services-cta-title"
            className="etra-services-cta__title"
          >
            Have a project
            <span>in mind?</span>
          </h2>

          <div className="etra-services-cta__action">
            <p className="etra-services-cta__description">
              Let&apos;s create something extraordinary together.
            </p>

            <Link
              href="/contact"
              className="etra-services-cta__button"
            >
              <span>Discuss a project</span>
              <span
                className="etra-services-cta__arrow"
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