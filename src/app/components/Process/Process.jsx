import "./process.css";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, audience and creative requirements before production begins.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team develops the visual direction, concepts and overall experience.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We transform approved ideas into polished, production-ready experiences.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "After testing and refinement, the final project is delivered with complete support.",
  },
];

export default function Process() {
  return (
    <section className="home-process-section" id="process">
      <div className="home-process-container">
        <div className="home-process-heading">
          <p className="home-process-label">How We Work</p>

          <h2 className="home-process-title">
            From idea to immersive experience
          </h2>

          <span className="home-process-description">
            A focused creative process that keeps every project clear,
            collaborative and production-ready.
          </span>
        </div>

        <div className="home-process-grid">
          {processSteps.map((step) => (
            <article className="home-process-card" key={step.number}>
              <div className="home-process-number">{step.number}</div>

              <div className="home-process-dot" />

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