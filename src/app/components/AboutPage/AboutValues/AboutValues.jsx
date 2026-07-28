"use client";

import "./aboutValues.css";
import {
  FaLightbulb,
  FaHeart,
  FaUsers,
  FaStar,
} from "react-icons/fa";

const values = [
  {
    icon: <FaLightbulb />,
    title: "Innovation",
    desc: "We embrace creativity and emerging technologies to build unique gaming experiences.",
  },
  {
    icon: <FaHeart />,
    title: "Passion",
    desc: "Every project is crafted with dedication, creativity and attention to detail.",
  },
  {
    icon: <FaUsers />,
    title: "Collaboration",
    desc: "We believe teamwork and strong communication create exceptional results.",
  },
  {
    icon: <FaStar />,
    title: "Excellence",
    desc: "We constantly refine our work to deliver premium quality experiences.",
  },
];

export default function AboutValues() {
  return (
    <section className="about-values">
      <div className="about-values-container">

        <div className="about-values-heading">
          <span>OUR VALUES</span>
          <h2>What Drives ETRA</h2>
        </div>

        <div className="about-values-grid">
          {values.map((item, index) => (
            <div className="value-card" key={index}>

              <div className="value-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}