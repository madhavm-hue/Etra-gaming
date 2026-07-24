"use client";
import MagneticButton from "../MagneticButton/MagneticButton";
import { useRef } from "react";
import Image from "next/image";
import "./hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const artRef = useRef(null);
  const imageRef = useRef(null);

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

  return (
    <main>
      <section
        ref={heroRef}
        className="hero-section"
        id="home"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="hero-mouse-glow" aria-hidden="true" />

        <div className="hero-inner">
          <div className="hero-content">
            <p className="hero-tag">We Create</p>

            <h1 className="hero-title">
              Imagination
              <span>In Motion</span>
            </h1>

            <p className="hero-desc">
              ETRA Animation &amp; Game Development crafts immersive experiences
              that entertain, inspire and leave a lasting impact.
            </p>

         <div className="hero-buttons">
  <MagneticButton href="#portfolio" className="hero-primary">
    Explore Our Work
    <span aria-hidden="true">→</span>
  </MagneticButton>

  <MagneticButton href="#services" className="hero-secondary">
    Our Services
    <span aria-hidden="true">▦</span>
  </MagneticButton>
</div>
          </div>

          <div ref={artRef} className="hero-art">
            <div className="hero-glow" />

            <div className="shape shape-one" />
            <div className="shape shape-two" />
            <div className="shape shape-three" />
            <div className="shape shape-four" />

            <div ref={imageRef} className="art-card">
              <Image
                src="/images/hero/gaming-girl-removebg-preview.png"
                alt="ETRA gaming character holding a game controller"
                width={900}
                height={1100}
                className="hero-image"
                priority
              />
            </div>
          </div>

          <div className="hero-pagination" aria-hidden="true">
            <span className="hero-page-dot" />
            <span className="hero-page-current">01</span>

            <div className="hero-page-line">
              <span />
            </div>

            <span className="hero-page-total">05</span>
          </div>

          <a href="#portfolio" className="scroll-explore">
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