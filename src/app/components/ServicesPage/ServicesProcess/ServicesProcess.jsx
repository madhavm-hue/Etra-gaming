import { Anton, Manrope } from "next/font/google";
import "./servicesProcess.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--service-process-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--service-process-body",
});

const processSteps = [
  {
    number: "01",
    title: "Brief",
    description:
      "We understand your goals and requirements.",
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "Concepts and strategies crafted for your vision.",
  },
  {
    number: "03",
    title: "Asset Production",
    description:
      "3D assets, art and technology built with precision.",
  },
  {
    number: "04",
    title: "Look Development",
    description:
      "Lighting, materials and details refined.",
  },
  {
    number: "05",
    title: "Real-Time / Animation",
    description:
      "Bringing everything to life in real-time or animation.",
  },
  {
    number: "06",
    title: "Review & Feedback",
    description:
      "Collaborative reviews to ensure perfection.",
  },
  {
    number: "07",
    title: "Optimization",
    description:
      "Performance optimization for all platforms.",
  },
  {
    number: "08",
    title: "Delivery",
    description:
      "Final delivery, support and ongoing partnership.",
  },
];

export default function ServicesProcess() {
  return (
    <section
      className={`etra-services-process ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-services-process-title"
    >
      <div className="etra-services-process__container">
        <header className="etra-services-process__heading">
          <p className="etra-services-process__eyebrow">
            Our process
          </p>

          <h2
            id="etra-services-process-title"
            className="etra-services-process__title"
          >
            A proven pipeline
            <span>for exceptional results.</span>
          </h2>
        </header>

        <ol className="etra-services-process__grid">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="etra-services-process__step"
            >
              <div className="etra-services-process__step-top">
                <span
                  className="etra-services-process__number"
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                <span
                  className="etra-services-process__arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </div>

              <h3 className="etra-services-process__step-title">
                {step.title}
              </h3>

              <p className="etra-services-process__description">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}