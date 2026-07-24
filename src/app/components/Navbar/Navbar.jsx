"use client";

import { useEffect, useState } from "react";
import "./navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#studio", id: "studio" },
  { label: "Services", href: "#services", id: "services" },
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Technology", href: "#technology", id: "technology" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting);

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <a href="#home" className="logo" onClick={closeMenu}>
          <span>E</span>TRA
          <small>animation &amp; game development</small>
        </a>

        <nav className={`nav-menu ${open ? "show-menu" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={activeSection === link.id ? "active" : ""}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            className="mobile-nav-button"
            onClick={closeMenu}
          >
            Let&apos;s Talk
          </a>
        </nav>

        <div className="nav-actions">
          <ThemeToggle />

          <a href="#contact" className="nav-button">
            Let&apos;s Talk
          </a>
        </div>

        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}