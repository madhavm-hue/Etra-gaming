import Link from "next/link";
import { FiArrowUpRight, FiMessageCircle } from "react-icons/fi";

import "./contactCTA.css";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="contact-cta-box">
        <div className="contact-cta-icon">
          <FiMessageCircle />
        </div>

        <div className="contact-cta-content">
          <span>HAVE A PROJECT IN MIND?</span>

          <h2>Let&apos;s Create Something Great Together</h2>

          <p>
            Share your idea with us and let&apos;s explore how we can turn it
            into an engaging digital experience.
          </p>
        </div>

        <Link href="#contact-form" className="contact-cta-button">
          Let&apos;s Talk
          <FiArrowUpRight />
        </Link>
      </div>
    </section>
  );
}