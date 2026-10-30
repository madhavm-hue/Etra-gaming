import Image from "next/image";
import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./services.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--etra-services-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--etra-services-body",
});

const gamingServices = [
  {
    number: "01",
    title: "Game Development",
    description:
      "End-to-end development for PC, console and mobile.",
  },
  {
    number: "02",
    title: "Digital Art",
    description:
      "3D assets and environments crafted with precision.",
  },
  {
    number: "03",
    title: "Interactive & Real-Time",
    description:
      "Web, mobile, AR, VR, visualization and simulation.",
  },
];

export default function Services() {
  return (
    <div
      id="services"
      className={`etra-home-worlds ${anton.variable} ${manrope.variable}`}
    >
      {/* SHARED STUDIO INTRODUCTION */}
      <section
        className="etra-studio-intro"
        aria-labelledby="etra-studio-intro-title"
      >
        <div className="etra-worlds-container etra-studio-intro__inner">
          <h2
            id="etra-studio-intro-title"
            className="etra-studio-intro__title"
          >
            <span>One studio.</span>
            <span>Two creative worlds.</span>
          </h2>

          <p className="etra-studio-intro__description">
            ETRA brings artists, designers and developers together
            to create immersive games and stories that move.
          </p>
        </div>
      </section>

      {/* GAMING */}
      <section
        id="gaming"
        className="etra-gaming-section"
        aria-labelledby="etra-gaming-title"
      >
        <div className="etra-worlds-container etra-gaming-section__inner">
          <header className="etra-gaming-heading">
            <h2
              id="etra-gaming-title"
              className="etra-gaming-heading__title"
            >
              <span>Built to</span>
              <span>be explored.</span>
            </h2>

            <div className="etra-gaming-heading__copy">
              <p className="etra-gaming-heading__label">
                Gaming / Interactive / Real-Time
              </p>

              <p className="etra-gaming-heading__description">
                <span>From game art to playable experiences.</span>
                <span>For PC, console and mobile.</span>
              </p>
            </div>
          </header>

          {/* FEATURED DIGITAL ART */}
          <figure className="etra-gaming-feature">
            <Image
              src="/images/hero/Image13.jpg"
              alt="ETRA digital artwork featuring illustrated characters and a detailed creative world"
              fill
              sizes="(max-width: 760px) 100vw, 92vw"
              className="etra-gaming-feature__image"
            />

            <figcaption className="etra-gaming-feature__caption">
              <span className="etra-gaming-feature__category">
                Digital Art / World Building
              </span>

              <Link
                href="/portfolio"
                className="etra-gaming-feature__link"
              >
                Explore the details
                <span aria-hidden="true">↗</span>
              </Link>
            </figcaption>
          </figure>

          {/* SERVICE INDEX */}
          <ul
            className="etra-gaming-services"
            aria-label="Gaming services"
          >
            {gamingServices.map((service) => (
              <li
                key={service.number}
                className="etra-gaming-services__item"
              >
                <Link
                  href="/services"
                  className="etra-gaming-services__link"
                >
                  <div className="etra-gaming-services__identity">
                    <span className="etra-gaming-services__number">
                      {service.number}
                    </span>

                    <h3 className="etra-gaming-services__title">
                      {service.title}
                    </h3>
                  </div>

                  <p className="etra-gaming-services__description">
                    {service.description}
                  </p>

                  <span
                    className="etra-gaming-services__arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="etra-gaming-action">
            <MagneticButton
              href="/contact"
              className="etra-gaming-action__button"
            >
              <span>Discuss a gaming project</span>
              <span aria-hidden="true">↗</span>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}