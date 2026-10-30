"use client";

import Image from "next/image";
import { Anton, Manrope } from "next/font/google";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./hero.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--etra-hero-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--etra-hero-body",
});

const worlds = [
  {
    id: "gaming",
    number: "01",
    label: "ETRA Gaming",
    title: ["Worlds", "you play."],
    description: [
      "Game development. Digital art.",
      "Real-time experiences.",
    ],
    image: "/images/hero/Hero1.png",
    alt: "ETRA gaming character wearing a red scarf",
    button: "Explore gaming",
    footer: "PC / Console / Mobile",
  },
  {
    id: "animation",
    number: "02",
    label: "ETRA Animation",
    title: ["Stories", "you feel."],
    description: [
      "Characters, CGI and animation",
      "that bring ideas to life.",
    ],
    image: "/images/hero/Parrot.png",
    alt: "ETRA animated bird characters",
    button: "Explore animation",
    footer: "3D Animation / CGI / Cinematics",
  },
];

export default function Hero() {
  return (
    <section
      className={`etra-split-hero ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-split-hero-title"
    >
      <h1
        id="etra-split-hero-title"
        className="etra-split-hero__accessible-title"
      >
        ETRA Gaming and Animation
      </h1>

      <div className="etra-split-hero__worlds">
        {worlds.map((world) => (
          <article
            key={world.id}
            className={`etra-world etra-world--${world.id}`}
            aria-labelledby={`etra-${world.id}-title`}
          >
            <div className="etra-world__art">
              <Image
                src={world.image}
                alt={world.alt}
                fill
                sizes="(max-width: 760px) 100vw, 52vw"
                className="etra-world__image"
                priority
              />
            </div>

            <div
              className="etra-world__shade"
              aria-hidden="true"
            />

            <div className="etra-world__copy">
              <p className="etra-world__eyebrow">
                <span>{world.number}</span>
                <span aria-hidden="true">/</span>
                <span>{world.label}</span>
              </p>

              <h2
                id={`etra-${world.id}-title`}
                className="etra-world__title"
              >
                {world.title.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h2>

              <p className="etra-world__description">
                {world.description.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </p>

              <div className="etra-world__action">
                <MagneticButton
                  href="/services"
                  className="etra-world__button"
                >
                  <span>{world.button}</span>
                  <span aria-hidden="true">↗</span>
                </MagneticButton>
              </div>
            </div>

            <p className="etra-world__footer">
              {world.footer}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}