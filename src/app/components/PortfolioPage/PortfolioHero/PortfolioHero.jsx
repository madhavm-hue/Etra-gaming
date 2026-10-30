import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./portfolioHero.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--portfolio-hero-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--portfolio-hero-body",
});

export default function PortfolioHero() {
  return (
    <section
      className={`etra-portfolio-hero ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-portfolio-hero-title"
    >
      <div className="etra-portfolio-hero__container">
        <div className="etra-portfolio-hero__content">
          <p className="etra-portfolio-hero__label">
            Our Portfolio
          </p>

          <h1
            className="etra-portfolio-hero__title"
            id="etra-portfolio-hero-title"
          >
            <span>Creating Worlds.</span>
            <span>
              Delivering{" "}
              <em>Impact.</em>
            </span>
          </h1>

          <p className="etra-portfolio-hero__description">
            Explore our diverse portfolio of projects across games,
            animation, cinematics, environments and more. Each project
            is a story of creativity, collaboration and uncompromising
            quality.
          </p>

          <div className="etra-portfolio-hero__actions">
            <Link
              href="/contact"
              className="etra-portfolio-hero__button"
            >
              <span>Start a Project</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              href="/services"
              className="etra-portfolio-hero__link"
            >
              <span>Our Services</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="etra-portfolio-hero__visual">
          <div
            className="etra-portfolio-hero__halo"
            aria-hidden="true"
          />

          <img
            src="/images/hero/ride1.png"
            alt="ETRA portfolio showcase"
            className="etra-portfolio-hero__image"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  );
}