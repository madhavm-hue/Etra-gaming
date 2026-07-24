"use client";

import { useRef } from "react";

export default function MagneticButton({
  children,
  className = "",
  href,
}) {
  const buttonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (window.innerWidth <= 900) return;

    const button = buttonRef.current;

    if (!button) return;

    const rect = button.getBoundingClientRect();

    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate3d(${x * 0.15}px, ${
      y * 0.15
    }px, 0)`;
  };

  const handleMouseLeave = () => {
    const button = buttonRef.current;

    if (button) {
      button.style.transform = "translate3d(0, 0, 0)";
    }
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </a>
  );
}