import "./technologyPipeline.css";

const pipelineSteps = [
  {
    number: "01",
    title: "Research",
    description:
      "We study the project goals, audience, platform and technical requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create concepts, visual directions, workflows and experience plans.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Our team builds scalable systems, assets and interactive experiences.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "We validate quality, performance, usability and platform compatibility.",
  },
  {
    number: "05",
    title: "Deploy",
    description:
      "The final experience is prepared, optimized and released successfully.",
  },
  {
    number: "06",
    title: "Support",
    description:
      "We provide continued improvements, maintenance and technical support.",
  },
];

export default function TechnologyPipeline() {
  return (
    <section className="technology-pipeline-section">
      <div className="technology-pipeline-container">
        <div className="technology-pipeline-header">
          <p className="technology-pipeline-label">Our Process</p>

          <h2 className="technology-pipeline-title">
            A structured production pipeline
          </h2>

          <p className="technology-pipeline-description">
            From the first idea to the final delivery, every stage follows a
            clear workflow focused on creativity, quality and performance.
          </p>
        </div>

        <div className="technology-pipeline-grid">
          {pipelineSteps.map((step, index) => (
            <article
              className="technology-pipeline-card"
              key={step.title}
            >
              <div className="technology-pipeline-card-top">
                <span className="technology-pipeline-number">
                  {step.number}
                </span>

                {index !== pipelineSteps.length - 1 && (
                  <span
                    className="technology-pipeline-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>

              <h3>{step.title}</h3>
              <p>{step.description}</p>

              <div className="technology-pipeline-line" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}