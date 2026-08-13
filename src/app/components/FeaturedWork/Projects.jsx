"use client";

import { useEffect, useRef } from "react";
import "./projects.css";

const projects = [
  {
    image: "/images/hero/Image30.jpg",
  },
  {
    image: "/images/hero/Image21.jpg",
  },
  {
    image: "/images/hero/Image20.jpg",
  },
  {
    image: "/images/hero/Image13.jpg",
  },
  {
    image: "/images/hero/Image11.jpg",
  },
  {
    image: "/images/hero/Image03.jpg",
  },
  {
    image: "/images/hero/Image01.jpg",
  },
];

export default function Projects() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame;
    let position = 0;

    /*
      Smaller number = slower movement
      Bigger number = faster movement
    */
    const speed = 0.45;

    const animate = () => {
      position -= speed;

      /*
        We duplicated the complete project list once.

        So when the first complete set has moved out,
        reset the track back to the beginning.

        Because the second set is identical,
        the user will not notice the reset.
      */
      const halfWidth = track.scrollWidth / 2;

      if (Math.abs(position) >= halfWidth) {
        position = 0;
      }

      track.style.transform = `translate3d(${position}px, 0, 0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  /*
    Duplicate the same 7 images.

    Original:
    1 2 3 4 5 6 7

    Duplicate:
    1 2 3 4 5 6 7

    Result:
    1 2 3 4 5 6 7 1 2 3 4 5 6 7...
  */
  const carouselProjects = [...projects, ...projects];

  return (
    <section className="projects-section" id="portfolio">
      <div className="projects-container">

        {/* Heading */}
        <div className="projects-head">
          <div>
            <p className="projects-label">
              Selected Work
            </p>

            <h2>
              A glimpse of our work.
            </h2>
          </div>

          <a
            href="/portfolio"
            className="projects-view-all"
          >
            VIEW ALL PROJECTS
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Infinite Carousel */}
        <div className="projects-carousel">

          <div
            ref={trackRef}
            className="projects-track"
          >
            {carouselProjects.map((project, index) => (
              <div
                className="project-card"
                key={`${project.image}-${index}`}
              >
                <img
                  src={project.image}
                  alt=""
                  className="project-image"
                  draggable="false"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}