"use client";

import { useRef } from "react";
import "./portfolioProjects.css";

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

  const handleLoadedMetadata = () => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime = SHOWREEL_START_TIME;

    video.play().catch(() => {});
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video) return;

    /*
      When the video reaches the end,
      restart from the point after the intro.
    */
    if (
      video.duration &&
      video.currentTime >= video.duration - 0.15
    ) {
      video.currentTime = SHOWREEL_START_TIME;
      video.play().catch(() => {});
    }
  };

  return (
    <section className="portfolio-projects-section">
      <div className="portfolio-projects-container">

        {/* HEADING */}
        <div className="portfolio-projects-heading">
          <div>
            <p className="portfolio-projects-label">
              Selected Work
            </p>

            <h2 className="portfolio-projects-title">
              Projects that bring ideas to life
            </h2>
          </div>

          <p className="portfolio-projects-description">
            Explore a collection of games, animation, cinematics and visual
            experiences created with creativity and technical precision.
          </p>
        </div>

        {/* FEATURED VIDEO */}
        <div
          id="showreel"
          className="portfolio-video-section"
          style={{ scrollMarginTop: "120px" }}
        >
          <div className="portfolio-video-wrap">
            <video
              ref={videoRef}
              className="portfolio-showreel-video"
              autoPlay
              muted
              playsInline
              preload="auto"
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
            >
              <source
                src="/images/hero/showreel_2.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>

        {/* ALL WORK */}
        <div className="portfolio-filter">
          <button
            type="button"
            className="portfolio-filter-button active"
          >
            All Work
          </button>
        </div>

        {/* PROJECT GRID */}
        <div className="portfolio-projects-grid">
          {projects.map((project) => (
            <article
              className="portfolio-project-card"
              key={project.title}
            >
              <div className="portfolio-project-image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio-project-image"
                />

                <div className="portfolio-project-overlay" />
              </div>

              <div className="portfolio-project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}