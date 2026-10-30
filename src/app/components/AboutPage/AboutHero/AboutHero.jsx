import Image from "next/image";
import { Anton, Manrope } from "next/font/google";
import "./aboutHero.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--about-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--about-body",
});

export default function AboutHero() {
  return (
    <section
      className={`etra-about-hero ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-about-title"
    >
      <div className="etra-about-hero__container">
        <div className="etra-about-hero__main">
          <div className="etra-about-hero__content">
            <p className="etra-about-hero__eyebrow">
              About ETRA
            </p>

            <h1
              id="etra-about-title"
              className="etra-about-hero__title"
            >
              Driven by passion.
              <span>
                Built for <em>impact.</em>
              </span>
            </h1>

            <div className="etra-about-hero__intro">
              <p>
                ETRA is a creative technology studio pioneering the next
                generation of 3D movies and series, game development, and
                immersive AR/VR experiences.
              </p>

              <p>
                We bring together art, storytelling and technology to create
                worlds that audiences don&apos;t just watch — they experience.
              </p>
            </div>

            <ul
              className="etra-about-hero__worlds"
              aria-label="Our creative divisions"
            >
              <li className="etra-about-hero__world etra-about-hero__world--gaming">
                <span aria-hidden="true" />
                Gaming
              </li>

              <li className="etra-about-hero__world etra-about-hero__world--animation">
                <span aria-hidden="true" />
                Animation
              </li>
            </ul>
          </div>

          <div className="etra-about-hero__visual">
            <div
              className="etra-about-hero__halo"
              aria-hidden="true"
            />

            <div className="etra-about-hero__art">
              <Image
                src="/images/hero/pink-girl.png"
                alt="Stylized character artwork from ETRA"
                fill
                priority
                sizes="(max-width: 900px) 90vw, 42vw"
                className="etra-about-hero__image"
              />
            </div>
          </div>
        </div>

        <div className="etra-about-hero__details">
          <p>
            From cinematic 3D films and animated series to interactive games,
            virtual worlds and immersive AR/VR experiences, we work across
            the entire creative and technical pipeline — from the first idea
            to the final experience.
          </p>

          <p>
            Our team combines expertise in 3D art, character and environment
            creation, animation, cinematics, real-time technologies, game
            development, AR/VR and interactive experiences to transform
            ambitious ideas into visually striking digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}