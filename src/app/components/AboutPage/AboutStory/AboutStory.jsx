"use client";

import "./aboutStory.css";

export default function AboutStory() {
  return (
    <section className="about-story" id="about-story">
      <div className="about-story-container">
        <div className="about-story-content">
          <span className="story-tag">OUR STORY</span>

          <h2>
            Every great experience
            <br />
            starts with a vision.
          </h2>

          <p>
            Founded with a passion for creativity and technology, ETRA has
            evolved into a studio delivering immersive games, animation and
            interactive digital experiences for brands and audiences worldwide.
          </p>

          <p>
            Our mission is to transform ideas into meaningful experiences
            through art, technology and innovation.
          </p>

          <a href="#about-values" className="story-btn">
            Read Our Story
          </a>
        </div>

        <div className="about-story-image">
          <img
            src="/images/hero/gaming-girl-removebg-preview.png"
            alt="Our Story"
          />
        </div>
      </div>
    </section>
  );
}