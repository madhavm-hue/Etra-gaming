import "./servicesProcess.css";

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
    <section className="services-process">
      <div className="services-process-container">

        <div className="services-process-header">
          <span>OUR PROCESS</span>

          <h2>
            A proven pipeline for exceptional results.
          </h2>
        </div>

        <div className="services-process-grid">
          {processSteps.map((step) => (
            <article
              className="process-card"
              key={step.number}
            >
              <div className="process-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}