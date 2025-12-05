import React from "react";

export function FloatingMenu() {
  return (
    <nav className="floating-menu" data-floating-menu>
      <button type="button" data-scroll-to="#top">
        TOP
      </button>
      <button type="button" data-scroll-to="#toc">
        목차
      </button>
      <button type="button" data-scroll-to="#whitepaper">
        백서
      </button>
    </nav>
  );
}

export default FloatingMenu;
