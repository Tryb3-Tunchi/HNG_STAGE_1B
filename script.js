// Wait until page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const timeEl = document.getElementById("user-time");

  function updateTime() {
    const now = Date.now();

    timeEl.textContent = now;

    timeEl.setAttribute("aria-label", "Current time in milliseconds: " + now);
  }

  // Run immediately
  updateTime();

  // Update every second
  setInterval(updateTime, 1000);
});
