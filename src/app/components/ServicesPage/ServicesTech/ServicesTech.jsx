"use client";

import "./servicesTech.css";

import {
  SiUnrealengine,
  SiUnity,
  SiBlender,
  SiAutodesk,
  SiFigma,
  SiGit,
} from "react-icons/si";

import {
  TbCube3dSphere,
  TbBrandCinema4D,
} from "react-icons/tb";

import {
  FaFilm,
  FaCubes,
  FaLayerGroup,
  FaCodeBranch,
  FaPenNib,
  FaImage,
} from "react-icons/fa6";


const technologyGroups = [
  {
    title: "REAL-TIME",
    tools: [
      {
        name: "Unreal Engine",
        icon: <SiUnrealengine />,
      },
      {
        name: "Unity",
        icon: <SiUnity />,
      },
      {
        name: "Real-Time Tools",
        icon: <FaCodeBranch />,
      },
    ],
  },

  {
    title: "3D CREATION",
    tools: [
      {
        name: "Autodesk Maya",
        icon: <SiAutodesk />,
      },
      {
        name: "Blender",
        icon: <SiBlender />,
      },
      {
        name: "ZBrush",
        icon: <TbCube3dSphere />,
      },
      {
        name: "3ds Max",
        icon: <TbBrandCinema4D />,
      },
    ],
  },

  {
    title: "TEXTURING & LOOK DEV",
    tools: [
      {
        name: "Substance 3D",
        icon: <FaLayerGroup />,
      },
      {
        name: "Mari",
        icon: <FaCubes />,
      },
      {
        name: "Quixel Megascans",
        icon: <TbCube3dSphere />,
      },
    ],
  },

  {
    title: "VFX & ANIMATION",
    tools: [
      {
        name: "Houdini",
        icon: <FaCubes />,
      },
      {
        name: "After Effects",
        icon: <FaFilm />,
      },
      {
        name: "Nuke",
        icon: <FaFilm />,
      },
    ],
  },

  {
    title: "PRODUCTIVITY",
    tools: [
      {
        name: "Photoshop",
        icon: <FaImage />,
      },
      {
        name: "Illustrator",
        icon: <FaPenNib />,
      },
      {
        name: "Figma",
        icon: <SiFigma />,
      },
    ],
  },

  {
    title: "PIPELINE & TOOLS",
    tools: [
      {
        name: "Perforce",
        icon: <FaCodeBranch />,
      },
      {
        name: "Git",
        icon: <SiGit />,
      },
      {
        name: "ShotGrid",
        icon: <FaLayerGroup />,
      },
    ],
  },
];


export default function ServicesTech() {
  return (
    <section className="services-tech">
      <div className="services-tech-container">

        <div className="services-tech-header">
          <span>
            TECHNOLOGIES WE USE
          </span>
        </div>

        <div className="services-tech-grid">
          {technologyGroups.map((group) => (
            <div
              className="services-tech-column"
              key={group.title}
            >
              <h3>
                {group.title}
              </h3>

              <div className="services-tech-list">
                {group.tools.map((tool) => (
                  <div
                    className="services-tech-item"
                    key={tool.name}
                  >
                    <div
                      className="services-tech-icon"
                      aria-hidden="true"
                    >
                      {tool.icon}
                    </div>

                    <span>
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}