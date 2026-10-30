import { Anton, Manrope } from "next/font/google";
import "./process.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--process-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--process-body",
});

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, audience and requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create the right strategy, visuals and experience.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build with precision using the best tools and technologies.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We deliver, optimize and support for long-term success.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className={`etra-home-process ${anton.variable} ${manrope.variable}`}
      aria-labelledby="etra-process-title"
    >
      <div className="etra-home-process__container">
        <header className="etra-home-process__heading">
          <p className="etra-home-process__eyebrow">
            Our process
          </p>

          <h2
            id="etra-process-title"
            className="etra-home-process__title"
          >
            A simple process.
            <span>Exceptional results.</span>
          </h2>
        </header>

        <ol className="etra-home-process__steps">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="etra-home-process__step"
            >
              <span
                className="etra-home-process__number"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div
                className="etra-home-process__connector"
                aria-hidden="true"
              >
                <span className="etra-home-process__dot" />
                <span className="etra-home-process__arrow">→</span>
              </div>

              <h3 className="etra-home-process__step-title">
                {step.title}
              </h3>

              <p className="etra-home-process__description">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}