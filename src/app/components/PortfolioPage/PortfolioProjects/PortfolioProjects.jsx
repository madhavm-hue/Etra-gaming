"use client";

import { useRef } from "react";
import { Anton, Manrope } from "next/font/google";
import "./portfolioProjects.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--portfolio-work-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--portfolio-work-body",
});

const projects = [
  {
    title: "Beyond The Horizon",
    image: "/images/hero/Messenger_0035.png",
    description:
      "A cinematic action adventure experience with immersive world building.",
  },
  {
    title: "Project Orion",
    image: "/images/hero/Reel_0542.png",
    description:
      "A futuristic cinematic sequence built with strong visual storytelling.",
  },
  {
    title: "Forgotten Realms",
    image: "/images/hero/Crock_1055.png",
    description:
      "A detailed fantasy environment created with atmosphere, depth and mood.",
  },
  {
    title: "Velocity Unbound",
    image: "/images/hero/Messenger_0285.png",
    description:
      "A fast-paced racing concept focused on speed, energy and visual impact.",
  },
  {
    title: "Echoes Of Legend",
    image: "/images/hero/Reel_2031.png",
    description:
      "A character-driven animation crafted with expressive motion and detail.",
  },
  {
    title: "Wasteland Explorer",
    image: "/images/hero/Messenger_0110.png",
    description:
      "Production-ready concept art and assets for a post-apocalyptic world.",
  },
  {
    title: "The Last Stand",
    image: "/images/hero/Messenger_0186.png",
    description:
      "A dramatic cinematic project with dynamic lighting and composition.",
  },
  {
    title: "Next Gen Arena",
    image: "/images/hero/Reel_2617.png",
    description:
      "A next-generation arena environment designed for competitive gameplay.",
  },
];

const SHOWREEL_START_TIME = 4;

export default function PortfolioProjects() {
  const videoRef = useRef(null);

  const seekToStart = (video) => {
    const start =
      Number.isFinite(video.duration) &&
      video.duration > SHOWREEL_START_TIME
        ? SHOWREEL_START_TIME
        : 0;

    video.currentTime = start;
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    seekToStart(video);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reducedMotion) {
      video.play().catch(() => {});
    }
  };

  const handleEnded = () => {
    const video = videoRef.current;

    if (!video) return;

    seekToStart(video);

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reducedMotion) {
      video.play().catch(() => {});
    }
  };

  return (
    <section
      className={`etra-portfolio-work ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-portfolio-work-title"
    >
      <div className="etra-portfolio-work__container">
        <div className="etra-portfolio-work__heading">
          <div>
            <p className="etra-portfolio-work__label">
              Selected Work
            </p>

            <h2 id="etra-portfolio-work-title">
              Projects that bring
              <br />
              <span>ideas to life</span>
            </h2>
          </div>

          <p className="etra-portfolio-work__intro">
            Explore a collection of games, animation, cinematics and visual
            experiences created with creativity and technical precision.
          </p>
        </div>

        <div
          id="showreel"
          className="etra-portfolio-work__showreel"
        >
          <div className="etra-portfolio-work__reel-heading">
            <h3>Studio Showreel</h3>
            <span aria-hidden="true">↘</span>
          </div>

          <div className="etra-portfolio-work__video-wrap">
            <video
              ref={videoRef}
              className="etra-portfolio-work__video"
              aria-label="ETRA studio showreel"
              controls
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
            >
              <source
                src="/images/hero/showreel_2.mp4"
                type="video/mp4"
              />

              Your browser does not support this video.
            </video>
          </div>
        </div>

        <div className="etra-portfolio-work__gallery-heading">
          <h3>All Work</h3>
          <span>{String(projects.length).padStart(2, "0")} Projects</span>
        </div>

        <div className="etra-portfolio-work__grid">
          {projects.map((project, index) => (
            <article
              className="etra-portfolio-work__project"
              key={project.title}
            >
              <div className="etra-portfolio-work__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="etra-portfolio-work__image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="etra-portfolio-work__project-content">
                <span
                  className="etra-portfolio-work__number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}