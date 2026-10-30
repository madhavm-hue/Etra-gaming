import Image from "next/image";
import { Anton, Manrope } from "next/font/google";
import "./aboutStory.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--story-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--story-body",
});

export default function AboutStory() {
  return (
    <section
      id="about-story"
      className={`etra-about-story ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-story-title"
    >
      <div className="etra-about-story__container">
        <div className="etra-about-story__content">
          <p className="etra-about-story__eyebrow">
            Our story
          </p>

          <h2
            id="etra-story-title"
            className="etra-about-story__title"
          >
            Every great experience
            <span>starts with a vision.</span>
          </h2>

          <div className="etra-about-story__description">
            <p>
              Founded with a passion for creativity and technology, ETRA has
              evolved into a studio delivering immersive games, animation and
              interactive digital experiences for brands and audiences worldwide.
            </p>

            <p>
              Our mission is to transform ideas into meaningful experiences
              through art, technology and innovation.
            </p>
          </div>
        </div>

        <div className="etra-about-story__visual">
          <div
            className="etra-about-story__glow"
            aria-hidden="true"
          />

          <div className="etra-about-story__art">
            <Image
              src="/images/hero/rat.png"
              alt="Rat character artwork from ETRA"
              fill
              sizes="(max-width: 900px) 92vw, 46vw"
              className="etra-about-story__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}