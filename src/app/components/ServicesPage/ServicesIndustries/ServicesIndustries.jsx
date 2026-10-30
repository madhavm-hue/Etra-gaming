import { Anton, Manrope } from "next/font/google";
import {
  FaIndustry,
  FaGamepad,
  FaBuilding,
  FaBoxOpen,
} from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import "./servicesIndustries.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--industries-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--industries-body",
});

const industries = [
  {
    title: "Gaming & Entertainment",
    icon: FaGamepad,
  },
  {
    title: "Architecture & Real Estate",
    icon: FaBuilding,
  },
  {
    title: "Industrial & Manufacturing",
    icon: FaIndustry,
  },
  {
    title: "AR / VR",
    icon: FaMicrochip,
  },
  {
    title: "Consumer Products",
    icon: FaBoxOpen,
  },
];

export default function ServicesIndustries() {
  return (
    <section
      className={`etra-services-industries ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-industries-title"
    >
      <div className="etra-services-industries__container">
        <header className="etra-services-industries__heading">
          <p className="etra-services-industries__eyebrow">
            Industries we serve
          </p>

          <h2
            id="etra-industries-title"
            className="etra-services-industries__title"
          >
            We create for industries
            <span>that shape the world.</span>
          </h2>
        </header>

        <ul className="etra-services-industries__grid">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <li
                key={industry.title}
                className="etra-services-industries__item"
              >
                <div className="etra-services-industries__item-top">
                  <Icon
                    className="etra-services-industries__icon"
                    aria-hidden="true"
                  />

                  <span
                    className="etra-services-industries__number"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="etra-services-industries__item-title">
                  {industry.title}
                </h3>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}