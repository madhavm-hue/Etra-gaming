import Image from "next/image";
import { Anton, Manrope } from "next/font/google";
import MagneticButton from "../MagneticButton/MagneticButton";
import "./home-animation.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--animation-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--animation-body",
});

const features = [
  {
    image: "/images/hero/Image01.jpg",
    alt: "Colourful animated bird characters",
    caption: "Character animation",
  },
  {
    image: "/images/hero/Image11.jpg",
    alt: "Animated rooftop scene overlooking Paris",
    caption: "Cinematic storytelling",
  },
];

const stages = [
  {
    number: "01",
    title: "Visual development",
    description: "Ideas, concepts and digital art.",
  },
  {
    number: "02",
    title: "3D & CGI production",
    description: "Characters, assets and environments.",
  },
  {
    number: "03",
    title: "Animation & finishing",
    description: "Performance, lighting and final frames.",
  },
];

export default function HomeAnimation() {
  return (
    <section
      id="animation"
      aria-labelledby="home-animation-title"
      className={`etra-home-animation ${anton.variable} ${manrope.variable}`}
    >
      <div className="etra-home-animation__container">
        <div className="etra-home-animation__hero">
          <div className="etra-home-animation__copy">
            <p className="etra-home-animation__eyebrow">
              Animation / CGI / Cinematics
            </p>

            <h2
              id="home-animation-title"
              className="etra-home-animation__title"
            >
              <span>A little</span>
              <span>character.</span>
              <span>A lot of life.</span>
            </h2>

            <p className="etra-home-animation__description">
              High-end 3D animation, CGI and visualization that bring ideas
              to life.
            </p>

            <MagneticButton
              href="/contact"
              className="etra-home-animation__cta"
            >
              Discuss an animation project
              <span aria-hidden="true">↗</span>
            </MagneticButton>
          </div>

          <div className="etra-home-animation__spotlight">
            <Image
              src="/images/hero/Image20.jpg"
              alt="Detailed CGI frog character in a forest environment"
              fill
              sizes="(max-width: 760px) 100vw, 52vw"
              className="etra-home-animation__image"
            />
          </div>
        </div>

        <div className="etra-home-animation__filmstrip">
          {features.map((feature) => (
            <figure
              key={feature.image}
              className="etra-home-animation__feature"
            >
              <div className="etra-home-animation__feature-art">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, 46vw"
                  className="etra-home-animation__image"
                />
              </div>

              <figcaption className="etra-home-animation__caption">
                {feature.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <ol className="etra-home-animation__stages">
          {stages.map((stage) => (
            <li
              key={stage.number}
              className="etra-home-animation__stage"
            >
              <span className="etra-home-animation__number">
                {stage.number}
              </span>

              <h3 className="etra-home-animation__stage-title">
                {stage.title}
              </h3>

              <p className="etra-home-animation__stage-description">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}