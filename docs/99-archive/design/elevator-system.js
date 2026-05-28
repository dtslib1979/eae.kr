/**
 * ELEVATOR SYSTEM - EAE Broadcasting Station
 * Simple floor navigation
 */
(function() {
  'use strict';

  const elevatorBtns = document.querySelectorAll('.elevator-btn');
  const floorIndicator = document.querySelector('.current-floor');
  const floorSections = document.querySelectorAll('.floor-section');

  let currentFloor = 'lobby';

  function init() {
    setupElevatorButtons();

    // Check URL hash
    const hash = window.location.hash.replace('#floor-', '');
    if (hash) {
      const btn = document.querySelector(`[data-floor="${hash}"]`);
      if (btn && !btn.classList.contains('locked')) {
        navigateToFloor(hash);
      }
    }
  }

  function setupElevatorButtons() {
    elevatorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const floor = btn.dataset.floor;
        const isLocked = btn.classList.contains('locked');

        if (isLocked) {
          // Show lock prompt for HQ
          const section = document.getElementById(`floor-${floor}`);
          if (section) {
            showFloor(floor);
          }
          return;
        }

        navigateToFloor(floor);
      });
    });
  }

  function navigateToFloor(floor) {
    const targetSection = document.getElementById(`floor-${floor}`);
    const targetBtn = document.querySelector(`[data-floor="${floor}"]`);

    if (!targetSection || !targetBtn) return;

    // Update sections
    floorSections.forEach(section => {
      section.classList.remove('active');
    });
    targetSection.classList.add('active');

    // Update buttons
    elevatorBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    targetBtn.classList.add('active');

    // Update indicator
    if (floorIndicator) {
      floorIndicator.textContent = targetBtn.dataset.level;
    }

    currentFloor = floor;
    window.location.hash = `floor-${floor}`;

    // Scroll to top
    window.scrollTo(0, 0);
  }

  function showFloor(floor) {
    const targetSection = document.getElementById(`floor-${floor}`);
    const targetBtn = document.querySelector(`[data-floor="${floor}"]`);

    if (!targetSection || !targetBtn) return;

    floorSections.forEach(section => {
      section.classList.remove('active');
    });
    targetSection.classList.add('active');

    elevatorBtns.forEach(btn => {
      btn.classList.remove('active');
    });
    targetBtn.classList.add('active');

    if (floorIndicator) {
      floorIndicator.textContent = targetBtn.dataset.level;
    }

    window.scrollTo(0, 0);
  }

  // Expose for HQ unlock
  window.unlockHQ = function() {
    const hqBtn = document.querySelector('[data-floor="hq"]');
    if (hqBtn) {
      hqBtn.classList.remove('locked');
      const icon = hqBtn.querySelector('.btn-icon');
      if (icon) icon.textContent = '🏢';
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
