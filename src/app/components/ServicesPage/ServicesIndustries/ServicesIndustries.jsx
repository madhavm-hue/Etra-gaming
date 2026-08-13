"use client";

import "./servicesIndustries.css";

import {
  FaIndustry,
  FaGamepad,
  FaBuilding,
  FaBoxOpen,
} from "react-icons/fa";

import { FaMicrochip } from "react-icons/fa6";

const industries = [
  {
    title: "Industrial & Manufacturing",
    icon: <FaIndustry />,
  },
  {
    title: "Technology",
    icon: <FaMicrochip />,
  },
  {
    title: "Gaming & Entertainment",
    icon: <FaGamepad />,
  },
  {
    title: "Architecture & Real Estate",
    icon: <FaBuilding />,
  },
  {
    title: "Consumer Products",
    icon: <FaBoxOpen />,
  },
];

export default function ServicesIndustries() {
  return (
    <section className="services-industries-section">
      <div className="services-industries-container">

        <div className="services-industries-heading">
          <p className="services-industries-label">
            INDUSTRIES WE SERVE
          </p>

          <h2>
            We create for industries that shape the world.
          </h2>
        </div>

        <div className="services-industries-grid">
          {industries.map((industry) => (
            <div
              className="services-industry-item"
              key={industry.title}
            >
              <div className="services-industry-icon">
                {industry.icon}
              </div>

              <p>{industry.title}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}