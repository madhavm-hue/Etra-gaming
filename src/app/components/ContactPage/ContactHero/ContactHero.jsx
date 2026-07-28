import Link from "next/link";
import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

import "./contactHero.css";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="contact-hero-content">
        <div className="contact-hero-copy">
          <span className="contact-hero-label">CONTACT US</span>

          <h1>
            Let&apos;s Create
            <br />
            Something
            <br />
            <span>Extraordinary</span>
          </h1>

          <p>
            Have a project in mind? We&apos;d love to hear about it. Let&apos;s
            collaborate and craft immersive experiences that captivate your
            audience.
          </p>

          <div className="contact-hero-actions">
            <Link href="#contact-form" className="contact-primary-btn">
              Start a Project
              <FiArrowUpRight />
            </Link>

            <Link href="#contact-form" className="contact-call-btn">
              <FiCalendar />
              Schedule a Call
            </Link>
          </div>
        </div>

        <div className="contact-hero-visual">
          <div className="contact-hero-image">
            <img
              src="/images/contact/contact-hero.webp"
              alt="ETRA gaming contact"
            />
          </div>

          <span className="contact-orbit contact-orbit-one" />
          <span className="contact-orbit contact-orbit-two" />
          <span className="contact-dot" />
        </div>
      </div>
    </section>
  );
}