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
    <section className="process-section" id="process">
      <div className="process-container">
        <div className="process-heading">
          <p>How We Work</p>
          <h2>From idea to immersive experience</h2>
          <span>
            A focused creative process that keeps every project clear,
            collaborative and production-ready.
          </span>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <article className="process-card" key={step.number}>
              <div className="process-number">{step.number}</div>

              <div className="process-dot" />

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}