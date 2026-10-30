import { Anton, Manrope } from "next/font/google";
import {
  FaLightbulb,
  FaHeart,
  FaUsers,
  FaStar,
} from "react-icons/fa";
import "./aboutValues.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--values-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--values-body",
});

const values = [
  {
    icon: FaLightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and emerging technologies to create unique experiences.",
  },
  {
    icon: FaHeart,
    title: "Passion",
    description:
      "Every project is crafted with dedication and love for what we do.",
  },
  {
    icon: FaUsers,
    title: "Collaboration",
    description:
      "We believe teamwork and open communication lead to exceptional results.",
  },
  {
    icon: FaStar,
    title: "Excellence",
    description:
      "We constantly refine our skills to deliver the highest quality in every detail.",
  },
];

export default function AboutValues() {
  return (
    <section
      className={`etra-about-values ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-values-title"
    >
      <div className="etra-about-values__container">
        <header className="etra-about-values__heading">
          <p className="etra-about-values__eyebrow">
            Our values
          </p>

          <h2
            id="etra-values-title"
            className="etra-about-values__title"
          >
            The principles that
            <span>drive us forward.</span>
          </h2>
        </header>

        <ul className="etra-about-values__grid">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <li
                key={value.title}
                className="etra-about-values__item"
              >
                <div className="etra-about-values__item-top">
                  <Icon
                    className="etra-about-values__icon"
                    aria-hidden="true"
                  />

                  <span
                    className="etra-about-values__number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="etra-about-values__item-title">
                  {value.title}
                </h3>

                <p className="etra-about-values__description">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}