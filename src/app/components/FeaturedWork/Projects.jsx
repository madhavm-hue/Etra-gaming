import "./projects.css";

const projects = [
  {
    title: "Cyber Arena",
    category: "Game Development",
    image: "/images/hero/cyber-arena.jpg..png",
    href: "#",
  },
  {
    title: "VR Experience",
    category: "Virtual Reality",
    image: "/images/hero/VR.jpg",
    href: "#",
  },
  {
    title: "3D Animation",
    category: "Animation",
    image: "/images/hero/AN.jpg",
    href: "#",
  },
  {
    title: "CGI Studio",
    category: "CGI",
    image: "/images/hero/cgi-studio.jpg",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="portfolio">
      <div className="projects-container">
        <div className="projects-head">
          <div>
            <p className="projects-label">Featured Work</p>
            <h2>A glimpse of our latest creations</h2>
          </div>

          <a href="#" className="projects-view-all">
            View All Work
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              href={project.href}
              className="project-card"
              key={project.title}
            >
              <div className="project-image-wrap">
                <div
                  className="project-thumb"
                  style={{ backgroundImage: `url("${project.image}")` }}
                />

                <div className="project-overlay" />

                <div className="project-info">
                  <span className="project-category">{project.category}</span>

                  <div className="project-title-row">
                    <h3>{project.title}</h3>
                    <span className="project-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}