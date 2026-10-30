import Image from "next/image";
import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./projects.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--selected-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--selected-body",
});

const projects = [
  {
    image: "/images/hero/Image30.jpg",
    alt: "Animated characters aboard a boat in a tropical environment",
  },
  {
    image: "/images/hero/Image21.jpg",
    alt: "Stylized animated character in an interior scene",
  },
  {
    image: "/images/hero/Image03.jpg",
    alt: "Animated shark character on a colourful outdoor stage",
  },
];

export default function Projects() {
  return (
    <section
      className={`etra-selected-work ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-selected-title"
    >
      <div className="etra-selected-work__container">
        <header className="etra-selected-work__heading">
          <div>
            <p className="etra-selected-work__eyebrow">
              Selected work
            </p>

            <h2
              id="etra-selected-title"
              className="etra-selected-work__title"
            >
              A glimpse of our work.
            </h2>
          </div>

          <Link
            href="/portfolio"
            className="etra-selected-work__view-all"
          >
            View all projects
            <span aria-hidden="true">↗</span>
          </Link>
        </header>

        <div className="etra-selected-work__grid">
          {projects.map((project, index) => (
            <Link
              key={project.image}
              href="/portfolio"
              className="etra-selected-work__project"
              aria-label={`View portfolio: ${project.alt}`}
            >
              <div className="etra-selected-work__art">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 760px) 92vw, 31vw"
                  className="etra-selected-work__image"
                />

                <span
                  className="etra-selected-work__open"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>

              <div className="etra-selected-work__caption">
                <span className="etra-selected-work__category">
                  Animation / CGI
                </span>

                <span className="etra-selected-work__number">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}