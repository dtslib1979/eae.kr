// public/assets/js/floating-dock.js

function initFloatingDock() {
  const dock = document.querySelector("[data-floating-dock]");
  if (!dock) return;

  dock.querySelectorAll("button").forEach((btn) => {
    const action = btn.getAttribute("data-action");
    if (!action) return;

    btn.addEventListener("click", () => {
      if (action === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (action === "home") {
        window.location.href = "/"; // eae.kr 홈
      }
    });
  });
}

// Initialize immediately if DOM is already ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFloatingDock);
} else {
  // DOM is already ready, but React might not have rendered yet
  // Try immediately and also set a mutation observer
  initFloatingDock();
  
  // Watch for the dock to appear in case React renders it later
  const observer = new MutationObserver(() => {
    const dock = document.querySelector("[data-floating-dock]");
    if (dock && dock.querySelectorAll("button").length > 0) {
      initFloatingDock();
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Disconnect observer after 5 seconds to prevent memory leak
  setTimeout(() => observer.disconnect(), 5000);
}
