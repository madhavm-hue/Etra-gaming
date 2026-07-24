"use client";

import { useEffect, useState } from "react";
import "./loader.css";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="site-loader">
      <div className="loader-content">
        <h1>
          <span>E</span>TRA
        </h1>

        <p>Animation &amp; Game Development</p>

        <div className="loader-line">
          <span />
        </div>
      </div>
    </div>
  );
}