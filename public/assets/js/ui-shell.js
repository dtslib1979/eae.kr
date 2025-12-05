// ui-shell.js - Global UI behaviors for floating scroll menu

document.addEventListener("DOMContentLoaded", () => {
  initFloatingMenu();
});

function initFloatingMenu() {
  const menu = document.querySelector("[data-floating-menu]");
  if (!menu) return;

  const buttons = menu.querySelectorAll("[data-scroll-to]");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selector = btn.getAttribute("data-scroll-to");
      if (!selector) return;
      const target = document.querySelector(selector);
      if (!target) return;

      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
