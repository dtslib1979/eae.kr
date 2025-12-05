import React from "react";

export function FloatingDock() {
  const handleHome = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  };

  const handlePull = () => {
    if (typeof window !== "undefined") {
      const current = window.scrollY || 0;
      const step = window.innerHeight * 0.9;
      window.scrollTo({
        top: current + step,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="floating-dock">
      <button type="button" onClick={handleHome}>HOME</button>
      <button type="button" onClick={handlePull}>PULL</button>
    </nav>
  );
}

export default FloatingDock;
