// src/components/FloatingDock.tsx
import React, { useEffect } from "react";

export function FloatingDock() {
  useEffect(() => {
    const handleTopClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleHomeClick = () => {
      window.location.href = "/";
    };

    const topBtn = document.querySelector('[data-floating-dock] button[data-action="top"]');
    const homeBtn = document.querySelector('[data-floating-dock] button[data-action="home"]');

    if (topBtn) topBtn.addEventListener("click", handleTopClick);
    if (homeBtn) homeBtn.addEventListener("click", handleHomeClick);

    return () => {
      if (topBtn) topBtn.removeEventListener("click", handleTopClick);
      if (homeBtn) homeBtn.removeEventListener("click", handleHomeClick);
    };
  }, []);

  return (
    <nav className="floating-dock" data-floating-dock>
      <button type="button" data-action="top">
        TOP
      </button>
      <button type="button" data-action="home">
        HOME
      </button>
    </nav>
  );
}

export default FloatingDock;
