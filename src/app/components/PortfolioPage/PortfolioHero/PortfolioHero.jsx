"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "./portfolioHero.css";


const portfolioSlides = [
  "/images/hero/gaming-girl-removebg-preview.png",
  "/images/hero/gaming-girl-removebg-preview.png",
  "/images/hero/gaming-girl-removebg-preview.png",
  "/images/hero/gaming-girl-removebg-preview.png",
  "/images/hero/gaming-girl-removebg-preview.png",
];


export default function PortfolioHero() {
  const [activeSlide, setActiveSlide] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) =>
        current === portfolioSlides.length - 1
          ? 0
          : current + 1
      );
    }, 4000);


    return () => clearInterval(interval);
  }, []);


  return (
    <section className="portfolio-hero-section">
      <div className="portfolio-hero-glow portfolio-hero-glow-one" />
      <div className="portfolio-hero-glow portfolio-hero-glow-two" />


      <div className="portfolio-hero-container">

        {/* LEFT CONTENT */}
        <div className="portfolio-hero-content">

          <p className="portfolio-hero-label">
            Our Portfolio
          </p>


          <h1 className="portfolio-hero-title">
            <span className="portfolio-title-line">
              Creating Worlds.
            </span>

            <span className="portfolio-title-line">
              Delivering{" "}
              <span className="portfolio-title-gradient">
                Impact.
              </span>
            </span>
          </h1>


          <p className="portfolio-hero-description">
            Explore our diverse portfolio of projects across games,
            animation, cinematics, environments and more. Each project
            is a story of creativity, collaboration and uncompromising
            quality.
          </p>


          <div className="portfolio-hero-actions">

            <Link
              href="/contact"
              className="portfolio-primary-button"
            >
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>


            <Link
              href="/services"
              className="portfolio-secondary-button"
            >
              Our Services
              <span aria-hidden="true">▦</span>
            </Link>

          </div>

        </div>


        {/* RIGHT CAROUSEL */}
        <div className="portfolio-hero-visual">

          <div className="portfolio-image-shape">

            <div className="portfolio-image-glow" />


            {portfolioSlides.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`ETRA portfolio showcase ${index + 1}`}
                className={`portfolio-hero-image ${
                  activeSlide === index ? "active" : ""
                }`}
              />
            ))}

          </div>


          {/* DECORATIONS */}
          <div className="portfolio-floating-circle portfolio-circle-one" />

          <div className="portfolio-floating-circle portfolio-circle-two" />

          <div className="portfolio-floating-dot" />

        </div>

      </div>
    </section>
  );
}