"use client";

import MagneticButton from "../MagneticButton/MagneticButton";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "./hero.css";

const heroSlides = [
  {
    id: "01",
    image: "/images/hero/Hero1.png",
  },
  {
    id: "02",
    image: "/images/hero/pigeon.png",
  },
  {
    id: "03",
    image: "/images/hero/pig.png",
  },
  {
    id: "04",
    image: "/images/hero/yellowboy.png",
    className: "hero-image-boy",
  },
  {
    id: "05",
    image: "/images/hero/goats.png",
  },
];

export default function Hero() {
  const heroRef = useRef(null);
  const artRef = useRef(null);
  const imageRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrentSlide((current) =>
        current === heroSlides.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const handleMouseMove = (event) => {
    if (window.innerWidth <= 900) return;

    const hero = heroRef.current;
    const art = artRef.current;
    const image = imageRef.current;

    if (!hero || !art || !image) return;

    const rect = hero.getBoundingClientRect();

    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const moveX = (mouseX - centerX) / centerX;
    const moveY = (mouseY - centerY) / centerY;

    hero.style.setProperty("--mouse-x", `${mouseX}px`);
    hero.style.setProperty("--mouse-y", `${mouseY}px`);

    art.style.transform = `
      translate3d(${moveX * 8}px, ${moveY * 8}px, 0)
    `;

    image.style.transform = `
      translate3d(${moveX * 14}px, ${moveY * 14}px, 0)
      rotateY(${moveX * 2.5}deg)
      rotateX(${moveY * -2.5}deg)
    `;
  };

  const handleMouseLeave = () => {
    const art = artRef.current;
    const image = imageRef.current;

    if (art) {
      art.style.transform = "translate3d(0, 0, 0)";
    }

    if (image) {
      image.style.transform =
        "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)";
    }
  };

  const activeSlide = heroSlides[currentSlide];

  return (
    <main>
      <section
        ref={heroRef}
        className="hero-section"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-mouse-glow" />

        <div className="hero-inner">

          {/* LEFT CONTENT */}
          <div className="hero-content">
            <p className="hero-tag">
              Digital Experiences That Move
            </p>

            <h1 className="hero-title">
              We Create
              <br />
              Imagination
              <span>In Motion</span>
            </h1>

            <p className="hero-desc">
              ETRA is a digital production studio delivering high-end 3D, CGI,
              animation and real-time experiences for forward-thinking brands.
            </p>

            <div className="hero-buttons">
              <MagneticButton
                href="#portfolio"
                className="hero-primary"
              >
                View Our Work
                <span aria-hidden="true">↗</span>
              </MagneticButton>

              <MagneticButton
                href="#contact"
                className="hero-secondary"
              >
                Discuss a Project
                <span aria-hidden="true">↗</span>
              </MagneticButton>
            </div>
          </div>

          {/* RIGHT ART */}
          <div
            ref={artRef}
            className="hero-art"
          >
            <div className="hero-glow" />

            <div className="shape shape-one" />
            <div className="shape shape-two" />
            <div className="shape shape-three" />
            <div className="shape shape-four" />

            <div
              ref={imageRef}
              className="art-card"
            >
              <Image
                key={currentSlide}
                src={activeSlide.image}
                alt={`ETRA hero slide ${activeSlide.id}`}
                width={900}
                height={1100}
                className={`hero-image ${
                  activeSlide.className || ""
                }`}
                priority
              />
            </div>
          </div>

          {/* PAGINATION */}
          <div className="hero-pagination">
            <span className="hero-page-dot" />

            <span className="hero-page-current">
              {activeSlide.id}
            </span>

            <div className="hero-page-line">
              <span
                style={{
                  height: `${
                    ((currentSlide + 1) / heroSlides.length) * 100
                  }%`,
                }}
              />
            </div>

            <span className="hero-page-total">
              {String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>

          {/* SCROLL */}
          <a
            href="#portfolio"
            className="scroll-explore"
          >
            <span className="scroll-mouse">
              <span />
            </span>

            <span>Scroll to Explore</span>
          </a>

        </div>
      </section>
    </main>
  );
}