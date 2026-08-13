"use client";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top-line" />

      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>ETRA</h2>

          <p>
            Creating immersive gaming, animation and cinematic experiences
            through creativity, technology and innovation.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="ETRA Instagram">
              Instagram
            </a>

            <a href="#" aria-label="ETRA LinkedIn">
              LinkedIn
            </a>

            <a href="#" aria-label="ETRA YouTube">
              YouTube
            </a>

            <a href="#" aria-label="ETRA Behance">
              Behance
            </a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-links">
          <h4>Explore</h4>

          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/portfolio">Projects</a>
            </li>

            <li>
              <a href="/services">Services</a>
            </li>

            <li>
              <a href="/about">Studio</a>
            </li>

            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links">
          <h4>Services</h4>

          <ul>
            <li>3D & CGI Production</li>
            <li>Digital Art</li>
            <li>Interactive Experiences</li>
            <li>Real-Time Solutions</li>
            <li>Game Development</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Phone</span>

            <a
              href="tel:+919500622644"
              className="footer-phone"
            >
              +91 95006 22644
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-contact-label">Address</span>

            <address>
              Etra Automotive Engineering and Technologies Private Limited
              <br />
              No. 51, Dr. Ramasamy Salai,
              <br />
              K.K. Nagar, Chennai – 600078
            </address>
          </div>

          <button
            type="button"
            className="scroll-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <span aria-hidden="true">↑</span>
            Back to Top
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <span>© 2026 ETRA. All Rights Reserved.</span>

        <span>
          Designed &amp; Developed by <strong>ETRA</strong>
        </span>
      </div>
    </footer>
  );
}