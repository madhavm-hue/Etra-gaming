"use client";

import { useEffect, useRef } from "react";
import "./projects.css";

const projects = [
  { image: "/images/hero/Image30.jpg" },
  { image: "/images/hero/Image21.jpg" },
  { image: "/images/hero/Image20.jpg" },
  { image: "/images/hero/Image13.jpg" },
  { image: "/images/hero/Image11.jpg" },
  { image: "/images/hero/Image03.jpg" },
  { image: "/images/hero/Image01.jpg" },
];

export default function Projects() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animationFrame;
    let position = 0;

    const speed = 0.45;

    const animate = () => {
      position -= speed;

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

  const carouselProjects = [...projects, ...projects];

  return (
    <section className="projects-section">
      <div className="projects-container">

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