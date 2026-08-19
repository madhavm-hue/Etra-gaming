"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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

          {/* THEME BASED LOGO */}
          <Link
            href="/"
            className="logo"
            onClick={closeMenu}
            aria-label="Go to ETRA Gaming home"
          >
            {/* DARK MODE LOGO */}
            <Image
              src="/images/hero/etra-dreams-logo (1).webp"
              alt="ETRA Dreams"
              width={484}
              height={106}
              priority
              className="navbar-logo-image navbar-logo-dark"
            />

            {/* LIGHT MODE LOGO */}
            <Image
              src="/images/hero/etra-dreams-logo-light.png"
              alt="ETRA Dreams"
              width={484}
              height={106}
              priority
              className="navbar-logo-image navbar-logo-light"
            />
          </Link>

        </div>

        {/* NAVIGATION */}
        <nav
          id="mobile-navigation"
          className={`nav-menu ${open ? "show-menu" : ""}`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? "active" : ""}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}

          {/* MOBILE LET'S TALK */}
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

          {/* DESKTOP LET'S TALK */}
          <Link
            href="/contact"
            className="nav-button"
            aria-label="Go to contact page"
          >
            Let&apos;s Talk
          </Link>

        </div>

        {/* MOBILE MENU BUTTON */}
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
          aria-controls="mobile-navigation"
        >
          {open ? "✕" : "☰"}
        </button>

      </div>
    </header>
  );
}