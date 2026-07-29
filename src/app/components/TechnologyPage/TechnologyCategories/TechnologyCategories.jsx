"use client";

import { useState } from "react";
import "./technologyCategories.css";

const categories = [
  "All",
  "Game Engine",
  "3D Creation",
  "Animation",
  "Rendering",
  "Programming",
  "Audio",
  "Pipeline & Tools",
];

const technologies = [
  {
    name: "Unreal Engine 5",
    shortName: "UE",
    category: "Game Engine",
    description:
      "A powerful real-time engine for creating immersive games, cinematic environments and interactive experiences.",
  },
  {
    name: "Unity",
    shortName: "U",
    category: "Game Engine",
    description:
      "A flexible engine used for cross-platform game development, simulations and interactive applications.",
  },
  {
    name: "Autodesk Maya",
    shortName: "M",
    category: "3D Creation",
    description:
      "Industry-standard software for 3D modeling, rigging, animation and visual effects production.",
  },
  {
    name: "Blender",
    shortName: "B",
    category: "3D Creation",
    description:
      "An open-source 3D creation suite for modeling, sculpting, animation, rendering and compositing.",
  },
  {
    name: "3ds Max",
    shortName: "3D",
    category: "3D Creation",
    description:
      "A professional tool for detailed modeling, environment creation, visualization and asset development.",
  },
  {
    name: "ZBrush",
    shortName: "Z",
    category: "3D Creation",
    description:
      "Digital sculpting software for creating high-detail characters, creatures, props and production assets.",
  },
  {
    name: "Substance 3D",
    shortName: "S",
    category: "Rendering",
    description:
      "A texturing and material creation suite for realistic, stylized and production-ready 3D assets.",
  },
  {
    name: "Houdini",
    shortName: "H",
    category: "Animation",
    description:
      "Procedural software for simulations, destruction, particles, environments and complex visual effects.",
  },
  {
    name: "Marvelous Designer",
    shortName: "MD",
    category: "Animation",
    description:
      "A realistic clothing design solution for creating detailed fabric, garments and character costumes.",
  },
  {
    name: "Perforce",
    shortName: "P",
    category: "Pipeline & Tools",
    description:
      "Version control and collaboration software designed for large production teams and game pipelines.",
  },
  {
    name: "React",
    shortName: "R",
    category: "Programming",
    description:
      "A modern JavaScript library for building responsive, scalable and interactive user interfaces.",
  },
  {
    name: "FMOD",
    shortName: "F",
    category: "Audio",
    description:
      "An adaptive audio solution for designing immersive sound systems and interactive game experiences.",
  },
];

export default function TechnologyCategories() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTechnologies =
    activeCategory === "All"
      ? technologies
      : technologies.filter(
          (technology) => technology.category === activeCategory
        );

  return (
    <section
      className="technology-categories-section"
      id="technologies"
    >
      <div className="technology-categories-container">
        <div className="technology-categories-header">
          <p className="technology-categories-label">
            Industry-Leading Tools
          </p>

          <h2 className="technology-categories-title">
            Technologies we use
          </h2>

          <p className="technology-categories-description">
            Our team combines powerful engines, creative software and
            production-ready tools to deliver high-quality digital
            experiences.
          </p>
        </div>

        <div className="technology-category-filter">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={
                activeCategory === category
                  ? "technology-category-button active"
                  : "technology-category-button"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="technology-cards-grid">
          {filteredTechnologies.map((technology) => (
            <article
              className="technology-tool-card"
              key={technology.name}
            >
              <div className="technology-tool-top">
                <div className="technology-tool-icon">
                  {technology.shortName}
                </div>

                <span className="technology-tool-category">
                  {technology.category}
                </span>
              </div>

              <h3>{technology.name}</h3>

              <p>{technology.description}</p>

              <button
                type="button"
                className="technology-tool-arrow"
                aria-label={`View ${technology.name}`}
              >
                →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}