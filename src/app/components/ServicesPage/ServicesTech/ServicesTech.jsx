import {
  SiUnrealengine,
  SiUnity,
  SiBlender,
  SiAutodesk,
  SiFigma,
  SiGit,
} from "react-icons/si";

import { TbCube3dSphere } from "react-icons/tb";
import { FaFilm, FaImage } from "react-icons/fa6";

import "./servicesTech.css";

const technologies = [
  {
    name: "Unreal Engine",
    icon: <SiUnrealengine />,
  },
  {
    name: "Unity",
    icon: <SiUnity />,
  },
  {
    name: "Blender",
    icon: <SiBlender />,
  },
  {
    name: "Autodesk Maya",
    icon: <SiAutodesk />,
  },
  {
    name: "ZBrush",
    icon: <TbCube3dSphere />,
  },
  {
    name: "After Effects",
    icon: <FaFilm />,
  },
{
  name: "Photoshop",
  icon: <FaImage />,
},
  {
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
];

export default function ServicesTech() {
  return (
    <section className="services-tech">
      <div className="services-tech-header">
        <span>TOOLS & TECHNOLOGIES</span>

        <h2>
          Built With Powerful
          <br />
          Creative Technology
        </h2>

        <p>
          We combine industry-leading software, real-time engines and creative
          tools to build high-quality visual and interactive experiences.
        </p>
      </div>

      <div className="services-tech-grid">
        {technologies.map((technology) => (
          <article className="tech-card" key={technology.name}>
            <div className="tech-icon">{technology.icon}</div>

            <h3>{technology.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}