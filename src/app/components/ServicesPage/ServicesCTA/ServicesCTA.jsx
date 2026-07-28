import Link from "next/link";
import "./servicesCTA.css";

export default function ServicesCTA() {
  return (
    <section className="services-cta">
      <div className="services-cta-box">

        <span>LET'S BUILD TOGETHER</span>

        <h2>
          Ready To Bring Your
          <br />
          Vision To Life?
        </h2>

        <p>
          Whether it's game development, animation, cinematics or interactive
          experiences, our team is ready to turn your ideas into reality.
        </p>

        <div className="services-cta-buttons">
          <Link href="/contact" className="cta-primary">
            Start Your Project
          </Link>

          <Link href="/portfolio" className="cta-secondary">
            View Portfolio
          </Link>
        </div>

      </div>
    </section>
  );
}