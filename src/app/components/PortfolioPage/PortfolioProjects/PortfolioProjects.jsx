"use client";

import "./portfolioProjects.css";

const projects = [
  {
    title: "Beyond The Horizon",
    category: "Games",
    image: "/images/hero/Messenger_0035.png",
    description:
      "A cinematic action adventure experience with immersive world building.",
  },
  {
    title: "Project Orion",
    category: "Cinematics",
    image: "/images/hero/Reel_0542.png",
    description:
      "A futuristic cinematic sequence built with strong visual storytelling.",
  },
  {
    title: "Forgotten Realms",
    category: "Environment",
    image: "/images/hero/Crock_1055.png",
    description:
      "A detailed fantasy environment created with atmosphere, depth and mood.",
  },
  {
    title: "Velocity Unbound",
    category: "Games",
    image: "/images/hero/Messenger_0285.png",
    description:
      "A fast-paced racing concept focused on speed, energy and visual impact.",
  },
  {
    title: "Echoes Of Legend",
    category: "Animation",
    image: "/images/hero/Reel_2031.png",
    description:
      "A character-driven animation crafted with expressive motion and detail.",
  },
  {
    title: "Wasteland Explorer",
    category: "Art Services",
    image: "/images/hero/Messenger_0110.png",
    description:
      "Production-ready concept art and assets for a post-apocalyptic world.",
  },
  {
    title: "The Last Stand",
    category: "Cinematics",
    image: "/images/hero/Messenger_0186.png",
    description:
      "A dramatic cinematic project with dynamic lighting and composition.",
  },
  {
    title: "Next Gen Arena",
    category: "Environment",
    image: "/images/hero/Reel_2617.png",
    description:
      "A next-generation arena environment designed for competitive gameplay.",
  },
];

export default function PortfolioProjects() {
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
              className="portfolio-showreel-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="/images/hero/Messengers_compressed.mp4"
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

        {/* ALL PROJECTS */}
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

                <span className="portfolio-project-category">
                  {project.category}
                </span>

                <button
                  type="button"
                  className="portfolio-project-arrow"
                  aria-label={`View ${project.title}`}
                >
                  ↗
                </button>
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