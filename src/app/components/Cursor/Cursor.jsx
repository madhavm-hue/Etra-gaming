"use client";

import { useEffect, useRef } from "react";
import "./cursor.css";

export default function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth <= 900) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const hoverHandler = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select, label"
      );

      if (target) {
        cursor.classList.add("cursor-hover");
      } else {
        cursor.classList.remove("cursor-hover");
      }
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;

      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px,0)`;

      animationFrame = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", hoverHandler);

    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", hoverHandler);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}