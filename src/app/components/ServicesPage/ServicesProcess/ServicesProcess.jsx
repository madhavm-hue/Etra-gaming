import "./servicesProcess.css";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We understand your vision, audience, goals and creative requirements.",
  },
  {
    number: "02",
    title: "Pre-Production",
    description:
      "We plan the concept, storyboard, art direction and complete production flow.",
  },
  {
    number: "03",
    title: "Production",
    description:
      "Our team creates animation, game assets, cinematics and interactive content.",
  },
  {
    number: "04",
    title: "Review & Polish",
    description:
      "We refine visuals, performance, sound and every important production detail.",
  },
  {
    number: "05",
    title: "Final Delivery",
    description:
      "The completed project is optimized, tested and delivered in the required format.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="services-process">
      <div className="services-process-header">
        <span>OUR PROCESS</span>

        <h2>
          From First Idea
          <br />
          To Final Experience
        </h2>

        <p>
          A clear and collaborative production pipeline that keeps every project
          focused, creative and efficient.
        </p>
      </div>

      <div className="services-process-grid">
        {processSteps.map((step) => (
          <article className="process-card" key={step.number}>
            <div className="process-number">{step.number}</div>

            <div className="process-line" />

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}