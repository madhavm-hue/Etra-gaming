"use client";

import { useEffect, useRef } from "react";
import "./cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 900) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      cursor.style.width = "55px";
      cursor.style.height = "55px";
      cursor.style.background = "rgba(255,44,168,.15)";
      cursor.style.border = "2px solid #ff2ca8";
    };

    const handleMouseLeave = () => {
      cursor.style.width = "18px";
      cursor.style.height = "18px";
      cursor.style.background = "#ff2ca8";
      cursor.style.border = "none";
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      animationId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);

    const hoverElements = document.querySelectorAll("a, button");

    hoverElements.forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);

      hoverElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });

      cancelAnimationFrame(animationId);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}