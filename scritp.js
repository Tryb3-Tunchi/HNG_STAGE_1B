/* ════════════════════════════════════════════════════════
   HNG Stage 1b — Profile Card Script
   ════════════════════════════════════════════════════════ */

const timeEl = document.getElementById("user-time");

function updateTime() {
  const now = Date.now();
  timeEl.textContent = now;
  timeEl.setAttribute("aria-label", "Current time in milliseconds: " + now);
}

/* Set immediately on load, then tick every 1000ms */
updateTime();
setInterval(updateTime, 1000);