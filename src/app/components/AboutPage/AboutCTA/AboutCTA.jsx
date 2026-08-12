"use client";

import Link from "next/link";
import "./aboutCTA.css";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="about-cta-container">

        <h2>
          Ready to create your
          <br />
          next digital experience?
        </h2>

        <p>
          Whether it’s game development, animation, interactive experiences,
          or immersive technology, our team is here to bring your vision to life.
        </p>

        <div className="about-cta-buttons">
          <Link href="/contact" className="primary-btn">
            Let&apos;s Create Together
          </Link>
        </div>

      </div>
    </section>
  );
}