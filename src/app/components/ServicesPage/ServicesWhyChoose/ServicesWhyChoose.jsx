import { Anton, Manrope } from "next/font/google";
import "./servicesWhyChoose.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--why-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--why-body",
});

const reasons = [
  {
    title: "End-to-End Production",
    description: "Concept to final delivery, all under one roof.",
    icon: "◉",
  },
  {
    title: "Real-Time Expertise",
    description:
      "Advanced real-time solutions for interactive experiences.",
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
    <section
      className={`etra-services-why ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-services-why-title"
    >
      <div className="etra-services-why__container">
        <header className="etra-services-why__heading">
          <p className="etra-services-why__eyebrow">
            Why choose ETRA
          </p>

          <h2
            id="etra-services-why-title"
            className="etra-services-why__title"
          >
            A creative studio
            <span>with production</span>
            at our core.
          </h2>
        </header>

        <ul className="etra-services-why__grid">
          {reasons.map((reason, index) => (
            <li
              key={reason.title}
              className="etra-services-why__item"
            >
              <div className="etra-services-why__item-top">
                <span
                  className="etra-services-why__icon"
                  aria-hidden="true"
                >
                  {reason.icon}
                </span>

                <span
                  className="etra-services-why__number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="etra-services-why__item-title">
                {reason.title}
              </h3>

              <p className="etra-services-why__description">
                {reason.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}