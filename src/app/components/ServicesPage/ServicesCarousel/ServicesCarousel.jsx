"use client";

import { useEffect, useRef } from "react";
import "./servicesCarousel.css";

import {
  FaCube,
  FaPaintBrush,
  FaGamepad,
  FaFilm,
  FaMountain,
  FaHeadset,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "3D Animation",
    image: "/images/services/service-3d.webp",
    icon: <FaCube />,
    description:
      "Premium 3D production for games, films and immersive experiences.",
    features: [
      "Asset Creation",
      "Animation",
      "Effects",
      "Lighting & Rendering",
    ],
  },
  {
    id: 2,
    title: "2D Digital Animation",
    image: "/images/services/service-2d.webp",
    icon: <FaPaintBrush />,
    description:
      "Creative 2D animation, storyboarding and concept development.",
    features: [
      "Character Design",
      "Storyboarding",
      "Concept Art",
      "Post Production",
    ],
  },
  {
    id: 3,
    title: "Gaming",
    image: "/images/services/service-game.webp",
    icon: <FaGamepad />,
    description:
      "Complete game development and immersive interactive experiences.",
    features: [
      "Game Development",
      "Art Services",
      "Unreal Engine",
      "Audio",
    ],
  },
  {
    id: 4,
    title: "Cinematics",
    image: "/images/services/service-cinematic.webp",
    icon: <FaFilm />,
    description:
      "High-quality cinematic storytelling with stunning visuals.",
    features: [
      "Storytelling",
      "Previsualization",
      "VFX",
      "Production",
    ],
  },
  {
    id: 5,
    title: "Environment Art",
    image: "/images/services/service-environment.webp",
    icon: <FaMountain />,
    description:
      "Beautiful environments for games and interactive worlds.",
    features: [
      "World Building",
      "Environment Design",
      "Props",
      "Lighting",
    ],
  },
  {
    id: 6,
    title: "Live Ops & Support",
    image: "/images/services/service-support.webp",
    icon: <FaHeadset />,
    description:
      "Continuous updates, optimization and live game support.",
    features: [
      "Updates",
      "Bug Fixing",
      "Optimization",
      "Support",
    ],
  },
];

export default function ServicesCarousel() {
  const carouselRef = useRef(null);
  const animationRef = useRef(null);
  const intervalRef = useRef(null);

  const smoothScrollTo = (targetPosition, duration = 3500) => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startPosition = carousel.scrollLeft;
    const distance = targetPosition - startPosition;
    const startTime = performance.now();

    const easeInOutCubic = (progress) => {
      return progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      carousel.scrollLeft =
        startPosition + distance * easedProgress;

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animateScroll);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current =
      requestAnimationFrame(animateScroll);
  };

  const getScrollAmount = () => {
    const carousel = carouselRef.current;

    if (!carousel) return 0;

    const firstCard = carousel.querySelector(".service-card");

    if (!firstCard) {
      return carousel.clientWidth;
    }

    const cardWidth = firstCard.getBoundingClientRect().width;
    const computedStyle = window.getComputedStyle(carousel);
    const gap = parseFloat(computedStyle.columnGap) || 0;

    const visibleCards =
      window.innerWidth <= 700
        ? 1
        : window.innerWidth <= 1100
          ? 2
          : 3;

    return (cardWidth + gap) * visibleCards;
  };

  const scrollLeft = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScrollLeft =
      carousel.scrollWidth - carousel.clientWidth;

    const atBeginning = carousel.scrollLeft <= 10;

    if (atBeginning) {
      smoothScrollTo(maxScrollLeft);
      return;
    }

    smoothScrollTo(
      Math.max(
        carousel.scrollLeft - getScrollAmount(),
        0
      )
    );
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;

    if (!carousel) return;

    const maxScrollLeft =
      carousel.scrollWidth - carousel.clientWidth;

    const atEnd =
      carousel.scrollLeft >= maxScrollLeft - 10;

    if (atEnd) {
      smoothScrollTo(0);
      return;
    }

    smoothScrollTo(
      Math.min(
        carousel.scrollLeft + getScrollAmount(),
        maxScrollLeft
      )
    );
  };

  const startAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      scrollRight();
    }, 12000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleLeftClick = () => {
    stopAutoSlide();
    scrollLeft();
    startAutoSlide();
  };

  const handleRightClick = () => {
    stopAutoSlide();
    scrollRight();
    startAutoSlide();
  };

  useEffect(() => {
    startAutoSlide();

    return () => {
      stopAutoSlide();

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <section
      className="services-carousel"
      id="core-services"
    >
      <div className="services-carousel-header">
        <span>OUR CORE SERVICES</span>

        <h2>
          Crafting Immersive Experiences
          <br />
          Across Every Medium
        </h2>

        <p>
          From concept to delivery, we provide a complete range
          of creative and technical services.
        </p>
      </div>

      <div className="services-carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          onClick={handleLeftClick}
          aria-label="Previous services"
        >
          ←
        </button>

        <button
          type="button"
          className="carousel-arrow"
          onClick={handleRightClick}
          aria-label="Next services"
        >
          →
        </button>
      </div>

      <div
        className="services-carousel-area"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="services-carousel-wrapper"
          ref={carouselRef}
        >
          {services.map((service) => (
            <article
              className="service-card"
              key={service.id}
            >
              <img
                src={service.image}
                alt={service.title}
                draggable="false"
              />

              <div className="service-card-content">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <button type="button">
                  Learn More <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}