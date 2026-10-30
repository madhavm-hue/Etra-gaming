import Image from "next/image";
import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./about.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--studio-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--studio-body",
});

export default function About() {
  return (
    <section
      className={`etra-home-studio ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-studio-title"
    >
      <div className="etra-home-studio__container">
        <div className="etra-home-studio__copy">
          <p className="etra-home-studio__eyebrow">
            Inside ETRA Studio
          </p>

          <h2
            id="etra-studio-title"
            className="etra-home-studio__title"
          >
            Where creativity
            <span>meets technology.</span>
          </h2>

          <p className="etra-home-studio__description">
            We are a team of artists, designers and developers
            passionate about creating extraordinary digital experiences.
          </p>

          <div className="etra-home-studio__actions">
            <Link
              href="/portfolio#showreel"
              className="etra-home-studio__showreel"
              aria-label="View ETRA studio showreel"
            >
              <span
                className="etra-home-studio__play"
                aria-hidden="true"
              >
                ▶
              </span>

              <span className="etra-home-studio__button-copy">
                <small>Watch our</small>
                <span>Studio showreel</span>
              </span>

              <span
                className="etra-home-studio__arrow"
                aria-hidden="true"
              >
                ↗
              </span>
            </Link>

            <Link
              href="/about"
              className="etra-home-studio__about-link"
            >
              Meet the studio
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div
          className="etra-home-studio__gallery"
          role="group"
          aria-label="Inside the ETRA studio"
        >
          <div className="etra-home-studio__main-photo">
            <Image
              src="/images/hero/Studio_02.png"
              alt="Interior view of the ETRA studio"
              fill
              sizes="(max-width: 900px) 92vw, 50vw"
              className="etra-home-studio__image"
            />
          </div>

          <div className="etra-home-studio__small-photo">
            <Image
              src="/images/hero/Studio_03.png"
              alt="Another view of the ETRA studio workspace"
              fill
              sizes="(max-width: 900px) 44vw, 24vw"
              className="etra-home-studio__image"
            />
          </div>

          <div className="etra-home-studio__small-photo">
            <Image
              src="/images/hero/Studio_04.png"
              alt="Additional interior view of the ETRA studio"
              fill
              sizes="(max-width: 900px) 44vw, 24vw"
              className="etra-home-studio__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}