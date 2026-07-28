"use client";

import "./aboutStudio.css";

export default function AboutStudio() {
  return (
    <section className="about-studio">
      <div className="about-studio-container">

        <div className="studio-heading">
          <span>OUR STUDIO</span>
          <h2>Behind Every Great Experience</h2>

          <p>
            Every project begins with creativity, collaboration and
            innovation. Our studio transforms ideas into immersive
            gaming experiences.
          </p>
        </div>

        <div className="studio-gallery">

          <div className="studio-large">
            <img
             src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Studio"
            />
          </div>

          <div className="studio-small-grid">

            <img
             src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Studio"
            />

            <img
             src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Studio"
            />

            <img
             src="/images/hero/gaming-girl-removebg-preview.png"
              alt="Studio"
            />

          </div>

        </div>

      </div>
    </section>
  );
}