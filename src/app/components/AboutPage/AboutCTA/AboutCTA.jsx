"use client";

import Link from "next/link";
import "./aboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-container">

        <span>LET'S BUILD TOGETHER</span>

        <h2>
          Ready to Create Your
          <br />
          Next Digital Experience?
        </h2>

        <p>
          Whether it's game development, animation, interactive experiences,
          or immersive technology, our team is ready to bring your ideas to life.
        </p>

        <div className="about-cta-buttons">
          <Link href="/contact" className="primary-btn">
            Start Your Project
          </Link>

          <Link href="/portfolio" className="secondary-btn">
            View Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}