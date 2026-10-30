"use client";

import Link from "next/link";
import { Anton, Manrope } from "next/font/google";
import "./footer.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--footer-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--footer-body",
});

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const handleBackToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  return (
    <footer
      className={`etra-site-footer ${anton.variable} ${manrope.variable}`}
    >
      <div className="etra-site-footer__container">
        <div className="etra-site-footer__main">
          <div className="etra-site-footer__brand">
            <Link
              href="/"
              className="etra-site-footer__wordmark"
              aria-label="ETRA home"
            >
              ETRA
              <span aria-hidden="true">.</span>
            </Link>

            <p className="etra-site-footer__description">
              Creating immersive gaming, animation and cinematic
              experiences through creativity, technology and innovation.
            </p>

            <div className="etra-site-footer__worlds">
              <Link
                href="/#gaming"
                className="etra-site-footer__world etra-site-footer__world--gaming"
              >
                Gaming
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/#animation"
                className="etra-site-footer__world etra-site-footer__world--animation"
              >
                Animation
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <nav aria-labelledby="etra-footer-explore">
            <h2
              id="etra-footer-explore"
              className="etra-site-footer__heading"
            >
              Explore
            </h2>

            <ul className="etra-site-footer__links">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="etra-site-footer__heading">
              Services
            </h2>

            <div className="etra-site-footer__service-group">
              <h3 className="etra-site-footer__group-label etra-site-footer__group-label--gaming">
                Gaming
              </h3>

              <ul className="etra-site-footer__services">
                <li>Game Development</li>
                <li>Digital Art</li>
                <li>Interactive Experiences</li>
                <li>Real-Time Solutions</li>
              </ul>
            </div>

            <div className="etra-site-footer__service-group">
              <h3 className="etra-site-footer__group-label etra-site-footer__group-label--animation">
                Animation
              </h3>

              <ul className="etra-site-footer__services">
                <li>3D &amp; CGI Production</li>
              </ul>
            </div>
          </div>

          <div className="etra-site-footer__contact">
            <h2 className="etra-site-footer__heading">
              Contact
            </h2>

            <div className="etra-site-footer__contact-item">
              <p className="etra-site-footer__contact-label">
                Phone
              </p>

              <a
                href="tel:+919500622644"
                className="etra-site-footer__phone"
              >
                +91 95006 22644
              </a>
            </div>

            <div className="etra-site-footer__contact-item">
              <p className="etra-site-footer__contact-label">
                Address
              </p>

              <address className="etra-site-footer__address">
                ETRA DREAMS ANIMATIONS PRIVATE LIMITED
                <br />
                1/400A North Street, Othaiyal
                <br />
                O. Mettuppatti Post
                <br />
                Sattur, Tamil Nadu - 626 203, India
              </address>
            </div>

            <button
              type="button"
              className="etra-site-footer__back"
              onClick={handleBackToTop}
            >
              Back to top
              <span aria-hidden="true">↑</span>
            </button>
          </div>
        </div>

        <div className="etra-site-footer__bottom">
          <span>© 2026 ETRA. All Rights Reserved.</span>

          <span>
            Designed &amp; Developed by <strong>ETRA</strong>
          </span>
        </div>
      </div>
    </footer>
  );
}