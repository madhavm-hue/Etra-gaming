"use client";

import "./servicesCarousel.css";

import {
  FaCube,
  FaPaintBrush,
  FaGamepad,
 
  FaCubes,
} from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";

const services = [
  {
    id: 1,
    title: "3D & CGI Production",
    icon: <FaCube />,
    description:
      "High-end 3D animation, CGI and visualization that bring ideas to life.",
    features: [
      "3D Animation",
      "Product Visualization",
      "Cinematics & Trailers",
      "Motion Graphics",
    ],
  },
  {
    id: 2,
    title: "Digital Art",
    icon: <FaPaintBrush />,
    description:
      "High-qualty 3D assets and envirorments crafted with artistic precision",
    features: [
      "3D Modeling",
      "Environment Art",
      "Character Art",
      "Materials & Texturing",
    ],
  },
  {
    id: 3,
    title: "Interactive Experiences",
    icon: <FaGamepad />,
    description:
      "Real-time experiences across web, mobile, AR, VR and beyond.",
    features: [
      "Configurators",
      "AR / VR Experiences",
      "Digital Twins",
      "Interactive Showrooms",
    ],
  },
  {
  id: 4,
  title: "Real-Time Solutions",
  icon: <SiUnrealengine />,
  description:
    "Visualization and simulation using cutting-edge engines and workflows.",
  features: [
    "Unreal Engine",
    "Unity Development",
    "Simulation",
    "Virtual Production",
  ],
},
  {
    id: 5,
    title: "Game Development",
    icon: <FaCubes />,
    description:
      "End-to-end game development for PC, console and mobile platforms.",
    features: [
      "Game Design",
      "Development",
      "Optimization",
      "QA & Testing",
    ],
  },
];

export default function ServicesCarousel() {
  return (
    <section className="services-carousel" id="core-services">
      <div className="services-carousel-container">

        <div className="services-carousel-header">
          <div>
            <span>WHAT WE DO</span>

            <h2>
              End-to-end services built around your vision.
            </h2>
          </div>

       
        </div>

        <div className="services-static-grid">
          {services.map((service) => (
            <article
              className="service-card"
              key={service.id}
            >
              <div className="service-card-content">
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <ul>
                  {service.features.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">◉</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}