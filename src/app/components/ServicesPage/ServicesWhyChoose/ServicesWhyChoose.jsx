"use client";

import "./servicesWhyChoose.css";

const reasons = [
  {
    title: "End-to-End Production",
    description:
      "Concept to final delivery, all under one roof.",
    icon: "◉",
  },
  {
    title: "Real-Time Expertise",
    description:
      "Advanced real-time solutions with Unreal Engine & Unity.",
    icon: "◈",
  },
  {
    title: "Scalable & Flexible",
    description:
      "Right team, right skills, right when you need it.",
    icon: "✦",
  },
  {
    title: "Quality & Reliability",
    description:
      "Production-driven pipeline with focus on quality.",
    icon: "◎",
  },
];

export default function ServicesWhyChoose() {
  return (
    <section className="services-why-section">
      <div className="services-why-container">
        <div className="services-why-heading">
          <p className="services-why-label">
            WHY CHOOSE ETRA
          </p>

          <h2>
            A creative studio with production at our core.
          </h2>
        </div>

        <div className="services-why-grid">
          {reasons.map((reason) => (
            <article
              className="services-why-card"
              key={reason.title}
            >
              <div
                className="services-why-icon"
                aria-hidden="true"
              >
                {reason.icon}
              </div>

              <h3>
                {reason.title}
              </h3>

              <p>
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}