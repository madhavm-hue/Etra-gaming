import Image from "next/image";
import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./servicesHero.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--services-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--services-body",
});

export default function ServicesHero() {
  return (
    <section
      className={`etra-services-hero ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-services-title"
    >
      <div className="etra-services-hero__container">
        <div className="etra-services-hero__main">
          <div className="etra-services-hero__content">
            <p className="etra-services-hero__eyebrow">
              Our services
            </p>

            <h1
              id="etra-services-title"
              className="etra-services-hero__title"
            >
              We build digital
              <span>experiences that</span>
              <em>move.</em>
            </h1>

            <p className="etra-services-hero__description">
              End-to-end game development, real-time interactive services
              and CGI animation — from design and asset creation to
              production and final delivery.
            </p>

            <div className="etra-services-hero__actions">
              <Link
                href="/portfolio"
                className="etra-services-hero__primary"
              >
                View our work
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className="etra-services-hero__secondary"
              >
                Discuss a project
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <div className="etra-services-hero__visual">
            <div
              className="etra-services-hero__glow"
              aria-hidden="true"
            />

            <div className="etra-services-hero__art">
              <Image
                src="/images/hero/elephant.png"
                alt="Stylized elephant character artwork from ETRA"
                fill
                priority
                sizes="(max-width: 900px) 92vw, 46vw"
                className="etra-services-hero__image"
              />
            </div>
          </div>
        </div>

        <nav
          className="etra-services-hero__divisions"
          aria-label="Explore services by division"
        >
          <a
            href="#gaming-services"
            className="etra-services-hero__division etra-services-hero__division--gaming"
          >
            <span className="etra-services-hero__division-number">
              01 / ETRA Gaming
            </span>

            <span className="etra-services-hero__division-title">
              Game development
              <span aria-hidden="true">↓</span>
            </span>

            <span className="etra-services-hero__division-description">
              Game development &amp; real-time interactive services
            </span>
          </a>

          <a
            href="#animation-services"
            className="etra-services-hero__division etra-services-hero__division--animation"
          >
            <span className="etra-services-hero__division-number">
              02 / ETRA Animation
            </span>

            <span className="etra-services-hero__division-title">
              CGI animation
              <span aria-hidden="true">↓</span>
            </span>

            <span className="etra-services-hero__division-description">
              Core production pipeline &amp; technical services
            </span>
          </a>
        </nav>
      </div>
    </section>
  );
}