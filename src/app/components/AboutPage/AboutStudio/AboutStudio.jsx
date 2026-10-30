import Image from "next/image";
import { Anton, Manrope } from "next/font/google";
import "./aboutStudio.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--about-studio-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--about-studio-body",
});

const studioImages = [
  {
    src: "/images/hero/Studio_02.png",
    alt: "ETRA studio workspace with desks and character artwork",
  },
  {
    src: "/images/hero/Studio_03.png",
    alt: "ETRA studio reception and display wall",
  },
  {
    src: "/images/hero/Studio_04.png",
    alt: "Another view of the ETRA studio reception",
  },
];

export default function AboutStudio() {
  return (
    <section
      className={`etra-about-studio ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-about-studio-title"
    >
      <div className="etra-about-studio__container">
        <header className="etra-about-studio__heading">
          <div>
            <p className="etra-about-studio__eyebrow">
              Our studio
            </p>

            <h2
              id="etra-about-studio-title"
              className="etra-about-studio__title"
            >
              Behind every
              <span>great experience.</span>
            </h2>
          </div>

          <div className="etra-about-studio__intro">
            <p className="etra-about-studio__description">
              Our studio transforms ideas into immersive gaming experiences.
              We combine artistry, technology and collaboration to bring worlds
              to life with precision and passion.
            </p>

            <a
              href="#etra-studio-gallery"
              className="etra-about-studio__link"
            >
              See our studio
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </header>

        <div
          id="etra-studio-gallery"
          className="etra-about-studio__gallery"
          role="group"
          aria-label="Three views of the ETRA studio"
          tabIndex={-1}
        >
          {studioImages.map((image) => (
            <div
              key={image.src}
              className="etra-about-studio__photo"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 600px) 90vw, 30vw"
                className="etra-about-studio__image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}