import "./technologies.css";

const technologies = [
  "Unreal Engine",
  "Unity",
  "Blender",
  "Autodesk Maya",
  "Houdini",
  "Substance 3D",
  "After Effects",
  "ZBrush",
];

export default function Technologies() {
  return (
   <section className="technologies-section" id="technology">
      <div className="technologies-container">
        <div className="technologies-heading">
          <p>Our Toolkit</p>
          <h2>Technology powering every experience</h2>
          <span>
            We use industry-leading creative and real-time tools to build
            polished, high-performance digital experiences.
          </span>
        </div>

        <div className="technologies-grid">
          {technologies.map((technology, index) => (
            <div className="technology-card" key={technology}>
              <span className="technology-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{technology}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}