import Link from "next/link";
import "./servicesCTA.css";

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta-box">

        <div className="services-cta-content">
          <h2>
            Have a project in mind?
          </h2>

          <p>
            Let&apos;s create something extraordinary together.
          </p>
        </div>

        <Link
          href="/contact"
          className="services-cta-button"
        >
          DISCUSS A PROJECT
          <span aria-hidden="true">↗</span>
        </Link>

      </div>
    </section>
  );
}