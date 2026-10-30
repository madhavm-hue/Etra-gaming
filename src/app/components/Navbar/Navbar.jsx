"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Manrope } from "next/font/google";
import { FiArrowUpRight, FiHome, FiMenu, FiX } from "react-icons/fi";

import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./navbar.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--etra-nav-body",
});

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const headerRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1101px)");

    const handleResize = () => {
      if (desktop.matches) setOpen(false);
    };

    desktop.addEventListener("change", handleResize);

    return () => {
      desktop.removeEventListener("change", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    const handlePointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className={`etra-header ${manrope.variable}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <div className="etra-header__container">
        <div className="etra-header__brand">
          <a
            href="https://etradreams.com"
            className="etra-header__dreams"
            aria-label="Go to ETRA Dreams home"
            title="ETRA Dreams"
          >
            <FiHome aria-hidden="true" />
          </a>

          <Link
            href="/"
            className="etra-header__logo"
            onClick={closeMenu}
            aria-label="ETRA Creative home"
          >
            <Image
              src="/images/hero/etra-dreams-logo (1).webp"
              alt="ETRA Dreams"
              width={484}
              height={106}
              priority
              className="etra-header__logo-image etra-header__logo-image--dark"
            />

            <Image
              src="/images/hero/etra-dreams-logo-light.png"
              alt="ETRA Dreams"
              width={484}
              height={106}
              className="etra-header__logo-image etra-header__logo-image--light"
            />
          </Link>
        </div>

        <nav
          id="etra-primary-navigation"
          className={`etra-header__nav ${
            open ? "etra-header__nav--open" : ""
          }`}
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className="etra-header__nav-link"
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="etra-header__mobile-cta"
            onClick={closeMenu}
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>
        </nav>

        <div className="etra-header__actions">
          <div className="etra-header__theme">
            <ThemeToggle />
          </div>

          <Link
            href="/contact"
            className="etra-header__cta"
            onClick={closeMenu}
          >
            <span>Let&apos;s Talk</span>
            <FiArrowUpRight aria-hidden="true" />
          </Link>

          <button
            ref={menuButtonRef}
            type="button"
            className="etra-header__menu-button"
            onClick={() => setOpen((current) => !current)}
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="etra-primary-navigation"
          >
            {open ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}