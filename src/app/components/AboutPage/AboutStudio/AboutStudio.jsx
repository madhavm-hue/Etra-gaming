"use client";

import "./aboutStudio.css";

export default function AboutStudio() {
  return (
    <section className="about-studio">
      <div className="about-studio-container">

        <div className="studio-heading">
          <span>OUR STUDIO</span>

          <h2>Behind every great experience.</h2>

          <p>
            Our studio transforms ideas into immersive gaming experiences.
            We combine artisty, technology and collaboration to bring worlds to 
            life with precision and passion.
          </p>

          <button className="story-btn">
            See Our Studio
          </button>
        </div>

        <div className="studio-gallery">

          <div className="studio-large">
            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="ETRA Studio"
            />
          </div>

          <div className="studio-small-grid">
            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="ETRA Studio"
            />

            <img
              src="/images/hero/gaming-girl-removebg-preview.png"
              alt="ETRA Studio"
            />
          </div>

        </div>

      </div>
    </section>
  );
}