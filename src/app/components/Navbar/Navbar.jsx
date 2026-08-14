"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

import "./navbar.css";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-wrap">

        {/* LEFT BRAND AREA */}
        <div className="navbar-brand">

          {/* ETRA DREAMS HOME */}
          <a
            href="https://etradreams.com"
            className="dreams-home-button"
            aria-label="Go to ETRA Dreams home"
            title="ETRA Dreams"
          >
            <FiHome />
          </a>

          {/* ETRA ANIMATION LOGO */}
          <Link
            href="/"
            className="logo"
            onClick={closeMenu}
          >
            <span>E</span>TRA

            <small>
              animation &amp; game development
            </small>
          </Link>

        </div>

        {/* NAVIGATION */}
        <nav
          className={`nav-menu ${
            open ? "show-menu" : ""
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "active"
                  : ""
              }
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE CONTACT BUTTON */}
          <Link
            href="/contact"
            className="mobile-nav-button"
            onClick={closeMenu}
          >
            Let&apos;s Talk
          </Link>
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="nav-actions">

          <ThemeToggle />

          <Link
            href="/contact"
            className="nav-button"
          >
            Let&apos;s Talk
          </Link>

        </div>

        {/* MOBILE MENU */}
        <button
          type="button"
          className="mobile-menu-btn"
          onClick={() =>
            setOpen((current) => !current)
          }
          aria-label={
            open
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}