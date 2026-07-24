"use client";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top-line"></div>

      <div className="footer-container">

        <div className="footer-brand">
          <h2>ETRA</h2>

          <p>
            Creating immersive gaming, animation and cinematic experiences
            through creativity, technology and innovation.
          </p>

          <div className="footer-socials">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">YouTube</a>
            <a href="#">Behance</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>

          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#portfolio">Projects</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#studio">Studio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>

          <ul>
            <li>Game Development</li>
            <li>3D Animation</li>
            <li>Cinematics</li>
            <li>Environment Art</li>
            <li>Live Ops</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <p>hello@etra.com</p>
          <p>Nagercoil, Tamil Nadu</p>

          <button
            className="scroll-top"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            ↑ Back to Top
          </button>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 ETRA. All Rights Reserved.</span>

        <span>
          Designed & Developed by <strong>ETRA</strong>
        </span>
      </div>

    </footer>
  );
}