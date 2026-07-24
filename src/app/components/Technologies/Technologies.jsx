import {
  SiUnrealengine,
  SiUnity,
  SiBlender,
  SiAutodesk,
} from "react-icons/si";

import {
  TbCube3dSphere,
  TbMovie,
  TbBrush,
} from "react-icons/tb";

import {
  GiMagicSwirl,
} from "react-icons/gi";

import "./technologies.css";
import "./technologies.css";

const technologies = [
  {
    number: "01",
    title: "Unreal Engine",
    icon: <SiUnrealengine />,
  },
  {
    number: "02",
    title: "Unity",
    icon: <SiUnity />,
  },
  {
    number: "03",
    title: "Blender",
    icon: <SiBlender />,
  },
  {
    number: "04",
    title: "Autodesk Maya",
    icon: <SiAutodesk />,
  },
  {
    number: "05",
    title: "Houdini",
    icon: <GiMagicSwirl />,
  },
  {
    number: "06",
    title: "Substance 3D",
    icon: <TbCube3dSphere />,
  },
{
  number: "07",
  title: "After Effects",
  icon: <TbMovie />,
},
{
  number: "08",
  title: "ZBrush",
  icon:  <TbBrush />,
},
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
    {technologies.map((technology) => (
  <div className="technology-card" key={technology.number}>
    <span className="technology-number">
      {technology.number}
    </span>

    <div className="technology-icon">
      {technology.icon}
    </div>

    <h3>{technology.title}</h3>
  </div>
))}
        </div>
      </div>
    </section>
  );
}