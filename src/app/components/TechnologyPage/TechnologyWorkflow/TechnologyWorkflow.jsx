import "./technologyWorkflow.css";

const workflowFeatures = [
  {
    number: "01",
    title: "Real-Time Development",
    description: "Rapid iteration with real-time visual feedback.",
  },
  {
    number: "02",
    title: "Scalable Solutions",
    description: "Flexible systems built for projects of every scale.",
  },
  {
    number: "03",
    title: "Cross-Platform",
    description: "Optimized experiences across multiple platforms.",
  },
  {
    number: "04",
    title: "Performance",
    description: "Efficient workflows focused on speed and quality.",
  },
];

export default function TechnologyWorkflow() {
  return (
    <section className="technology-workflow-section">
      <div className="technology-workflow-container">
        <div className="technology-workflow-card">
          <div className="technology-workflow-image-wrap">
            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Advanced technology workflow"
              className="technology-workflow-image"
            />

            <div className="technology-workflow-image-overlay" />

            <div className="technology-workflow-image-tag">
              <span>ETRA</span>
              <p>Real-Time Production</p>
            </div>
          </div>

          <div className="technology-workflow-content">
            <p className="technology-workflow-label">
              Built for Performance
            </p>

            <h2 className="technology-workflow-title">
              Optimized workflows.
              <br />
              Exceptional <span>results.</span>
            </h2>

            <p className="technology-workflow-description">
              We combine powerful technology with structured production
              workflows to create high-quality visuals, responsive gameplay
              and memorable interactive experiences.
            </p>

            <div className="technology-workflow-features">
              {workflowFeatures.map((feature) => (
                <article
                  className="technology-workflow-feature"
                  key={feature.title}
                >
                  <div className="technology-workflow-feature-icon">
                    {feature.number}
                  </div>

                  <div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="technology-workflow-glow technology-workflow-glow-one" />
          <div className="technology-workflow-glow technology-workflow-glow-two" />
        </div>
      </div>
    </section>
  );
}