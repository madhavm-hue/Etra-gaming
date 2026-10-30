import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./servicesCarousel.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--catalogue-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--catalogue-body",
});

const divisions = [
  {
    id: "gaming-services",
    theme: "gaming",
    label: "01 / ETRA Gaming",
    title: "Game development",
    subtitle: "Game development & real-time interactive services",
    scopeTitle: "End-to-end game development & technical capabilities",
    deliverablesTitle: "Target deliverables & specializations",
    services: [
      {
        title: "Game Design & Direction",
        scope:
          "GDD Authoring, Mechanics Design, Level Design, Systems Economy, Combat & Progression Balancing",
      },
      {
        title: "Concept & Visual Target",
        scope:
          "Character & Creature Concept, Environment Visual Targets, Key Art, UI/UX Wireframing & Style Guides",
      },
      {
        title: "3D Game Art (Assets)",
        scope:
          "Low-Poly / High-Poly Modeling, PBR Texturing, Asset Optimization, Modular Kits, Hard Surface & Props",
      },
      {
        title: "Environment Art & World",
        scope:
          "Worldbuilding, Terrain Generation, Modular Set Dressing, Photogrammetry Processing, Lighting & Atmosphere",
      },
      {
        title: "Rigging & Game Anim",
        scope:
          "Gameplay Animation, Motion Capture Retargeting & Cleanup, State Machine Setup, Blend Spaces, Facial Rigs",
      },
      {
        title: "Real-Time VFX (VFX)",
        scope:
          "Particle Systems, Environmental Effects, Weapon/Combat VFX, Shaders & Materials, Dissolve & Distortion Effects",
      },
      {
        title: "Game Engineering",
        scope:
          "Gameplay Programming, Core Systems, Physics, AI Behaviors & Pathfinding, Network Gameplay (Multiplayer)",
      },
      {
        title: "Cinematics & Cutscenes",
        scope:
          "In-Engine Sequencing, Virtual Camera Operation, Motion Capture Directing, Trailer Production, ICVFX Setup",
      },
      {
        title: "UI / UX & HUD",
        scope:
          "In-Game HUD Design, Diegetic UI, Menu Systems, Motion Graphics UI, Localization Prep & Integration",
      },
      {
        title: "Audio & Sound Design",
        scope:
          "Sound FX Creation, Adaptive / Dynamic Music Integration, Voice Over Processing, Spatial 3D Audio, Middleware Setup",
      },
      {
        title: "Optimization & Porting",
        scope:
          "Draw Call & Polygon Reduction, Memory Profiling, Shader Optimization, Console & Mobile Porting Setup",
      },
      {
        title: "QA, Testing & Tech TD",
        scope:
          "Functional QA, Compatibility Testing, Automated Test Scripts, CI/CD Pipeline Build Management, Version Control",
      },
    ],
    deliverables: [
      "AAA & Indie Game Co-Development",
      "PC, Console & Mobile Title Production",
      "High-End Game Cinematics & Trailers",
      "AR / VR / XR Interactive Media",
      "Metaverse & Virtual World Assets",
      "Architectural & Gamified Simulation",
    ],
  },
  {
    id: "animation-services",
    theme: "animation",
    label: "02 / ETRA Animation",
    title: "CGI animation",
    subtitle: "CGI animation division & technical capabilities",
    scopeTitle: "Core production pipeline & technical services",
    deliverablesTitle: "Target deliverables & solutions",
    services: [
      {
        title: "Pre-Production",
        scope:
          "Script Breakdown, Storyboards, Animatics, Shot Planning",
      },
      {
        title: "Concept Art & Design",
        scope:
          "Character Design, Environment Design, Props, Color Keys",
      },
      {
        title: "3D Modeling",
        scope:
          "Characters, Environments, Vehicles, Props (Hard Surface & Organic)",
      },
      {
        title: "3D Sculpting",
        scope:
          "High-Resolution Characters, Creatures, Fine Detail Sculpting",
      },
      {
        title: "Retopology & UV",
        scope:
          "Clean Topology Optimization, UV Mapping, Asset Preparation",
      },
      {
        title: "Texturing & LookDev",
        scope:
          "PBR Texturing, Material Creation, Custom Shaders, Surface LookDev",
      },
      {
        title: "Rigging",
        scope:
          "Character Rigs, Facial Rigs, Mechanical Rigs, Blend Shapes",
      },
      {
        title: "Layout & Previs",
        scope:
          "Camera Blocking, Scene Layout, Previsualization",
      },
      {
        title: "Animation",
        scope:
          "Character, Creature, Facial & Mechanical Animation",
      },
      {
        title: "Crowd Simulation",
        scope:
          "Crowd Systems, Agent Behaviors & AI Simulation",
      },
      {
        title: "CFX (Character FX)",
        scope:
          "Hair, Fur, Cloth, Muscle & Tissue Simulation",
      },
      {
        title: "FX Simulation",
        scope:
          "Fire, Smoke, Water, Explosions, Destruction, Magic Effects",
      },
      {
        title: "Lighting & Rendering",
        scope:
          "Cinematic Lighting, HDRI Setups, Render Pass Optimization",
      },
      {
        title: "Compositing",
        scope:
          "Render Pass Integration, Color Grading, Deep Compositing, VFX",
      },
      {
        title: "Editing & Output",
        scope:
          "Video Editing, Motion Graphics, Title Sequence, Final Delivery",
      },
      {
        title: "Pipeline & TD",
        scope:
          "Asset Management, Version Control, Automation & Custom Tooling",
      },
    ],
    deliverables: [
      "Feature Film Animation",
      "TV & Streaming Series (OTT)",
      "Commercials & Brand Campaign Ads",
      "AR/VR Immersive Interactive Media",
      "Game Cinematics & Cutscenes",
      "Virtual Production / In-Engine",
      "Digital Humans & Creatures",
      "Architectural & Product Vis",
    ],
  },
];

function ServiceColumn({ services, offset, divisionId }) {
  return (
    <div className="etra-service-catalogue__column">
      {services.map((service, index) => (
        <details
          key={service.title}
          className="etra-service-catalogue__service"
          open={offset === 0 && index === 0}
        >
          <summary className="etra-service-catalogue__summary">
            <span
              className="etra-service-catalogue__number"
              aria-hidden="true"
            >
              {String(offset + index + 1).padStart(2, "0")}
            </span>

            <h4 className="etra-service-catalogue__service-title">
              {service.title}
            </h4>

            <span
              className="etra-service-catalogue__toggle"
              aria-hidden="true"
            />
          </summary>

          <div className="etra-service-catalogue__scope">
            <p>{service.scope}</p>

            <Link
              href="/contact"
              className="etra-service-catalogue__enquiry"
              aria-label={`Discuss ${service.title} for ${
                divisionId === "gaming-services" ? "gaming" : "animation"
              }`}
            >
              Discuss this service
              <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </details>
      ))}
    </div>
  );
}

export default function ServicesCarousel() {
  return (
    <div
      id="core-services"
      className={`etra-service-catalogue ${anton.variable} ${manrope.variable}`}
    >
      {divisions.map((division) => {
        const midpoint = Math.ceil(division.services.length / 2);

        return (
          <section
            key={division.id}
            id={division.id}
            className={`etra-service-catalogue__division etra-service-catalogue__division--${division.theme}`}
            aria-labelledby={`${division.id}-title`}
          >
            <div className="etra-service-catalogue__container">
              <header className="etra-service-catalogue__heading">
                <div>
                  <p className="etra-service-catalogue__eyebrow">
                    {division.label}
                  </p>

                  <h2
                    id={`${division.id}-title`}
                    className="etra-service-catalogue__title"
                  >
                    {division.title}
                  </h2>
                </div>

                <p className="etra-service-catalogue__subtitle">
                  {division.subtitle}
                </p>
              </header>

              <div className="etra-service-catalogue__body">
                <div className="etra-service-catalogue__intro">
                  <h3 className="etra-service-catalogue__scope-title">
                    {division.scopeTitle}
                  </h3>

                  <Link
                    href="/contact"
                    className="etra-service-catalogue__contact"
                  >
                    Discuss a project
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>

                <div className="etra-service-catalogue__services">
                  <ServiceColumn
                    services={division.services.slice(0, midpoint)}
                    offset={0}
                    divisionId={division.id}
                  />

                  <ServiceColumn
                    services={division.services.slice(midpoint)}
                    offset={midpoint}
                    divisionId={division.id}
                  />
                </div>
              </div>

              <div className="etra-service-catalogue__deliverables">
                <h3 className="etra-service-catalogue__deliverables-title">
                  {division.deliverablesTitle}
                </h3>

                <ul className="etra-service-catalogue__deliverables-list">
                  {division.deliverables.map((deliverable) => (
                    <li key={deliverable}>
                      <span aria-hidden="true">↗</span>
                      {deliverable}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}