import "./process.css";

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
    <section className="home-process-section" id="process">
      <div className="home-process-container">

        <div className="home-process-heading">
          <p className="home-process-label">
            OUR PROCESS
          </p>

          <h2 className="home-process-title">
            A simple process. Exceptional results.
          </h2>
        </div>

        <div className="home-process-grid">
          {processSteps.map((step) => (
            <article
              className="home-process-card"
              key={step.number}
            >
              <div className="home-process-number">
                {step.number}
              </div>

              <div
                className="home-process-dot"
                aria-hidden="true"
              />

              <h3 className="home-process-card-title">
                {step.title}
              </h3>

              <p className="home-process-card-description">
                {step.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}