"use client";
import {
  FaUsers,
  FaGamepad,
  FaGlobe,
  FaTrophy,
} from "react-icons/fa";
import "./aboutStats.css";

const stats = [
  {
    icon: <FaGamepad />,
    number: "50+",
    title: "Projects Delivered",
  },
  {
    icon: <FaUsers />,
    number: "15+",
    title: "Creative Experts",
  },
  {
    icon: <FaGlobe />,
    number: "5+",
    title: "Years Experience",
  },
  {
    icon: <FaTrophy />,
    number: "100%",
    title: "Client Focus",
  },
];

export default function AboutStats() {
  return (
    <section className="about-stats">
      <div className="about-stats-container">
        {stats.map((item, index) => (
          <div className="about-stat-card" key={index}>
            <div className="about-stat-icon">
  {item.icon}
</div>

            <h2>{item.number}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}