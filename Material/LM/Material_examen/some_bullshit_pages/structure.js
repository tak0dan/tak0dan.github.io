/* ===============================================================
   FILE: structure.js
   PURPOSE: Provide extremely simple but educational JavaScript behavior
            for structure.html AND optionally reusable for selectors.html
            and layout.html.

   This script:
     • Adds hover-based "before vs after" demos
     • Adds click-to-reveal panels (HTML/CSS explainers)
     • Is written in VERY plain, exam-friendly, beginner-friendly style
     • Has extremely detailed comments explaining EVERYTHING

   IMPORTANT FOR STUDENTS:
     Think of JavaScript as "the hands" of the webpage.
     HTML is the body. CSS is the clothes. JS is the movement.

   =============================================================== */

// ---------------------------------------------------------------
// SAFETY CHECK: Wait for the page to fully load before running JS.
// ---------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  // Why? Because before DOMContentLoaded, the elements may not exist yet.
  // Trying to access missing elements = errors.

  // =====================================================================
  // PART 1 — BEFORE/AFTER HOVER DEMO
  // =====================================================================
  // Goal: When hovering certain elements, temporarily remove their CSS class
  // to show students what the element looks like WITHOUT styling.
  // =====================================================================

  // We pick elements by class. These classes come from structure.html.
  const hoverDemoTargets = document.querySelectorAll(
    ".intro-section, .content-section, .sample-article, .sidebar-note"
  );

  // Loop through each selected element.
  hoverDemoTargets.forEach(function (element) {
    // Save the original classes so we can restore them later.
    const originalClasses = element.className;

    element.addEventListener("mouseenter", function () {
      // Remove ALL classes → visually "resets" element.
      element.className = "hover-unstyled-demo";

      // Add a temporary inline style so students understand what's happening.
      element.style.outline = "2px dashed red";
      element.style.background = "#fff0f0";
      element.style.padding = "10px";
    });

    element.addEventListener("mouseleave", function () {
      // Restore original appearance exactly.
      element.className = originalClasses;

      // Clean up inline styles.
      element.style.outline = "";
      element.style.background = "";
      element.style.padding = "";
    });
  });

  // =====================================================================
  // PART 2 — CLICK-TO-REVEAL TEACHING PANELS
  // =====================================================================
  // Some elements will have a button that reveals a text panel underneath
  // explaining the HTML/CSS. Works like a W3Schools-style demo.
  // =====================================================================

  const revealButtons = document.querySelectorAll(".reveal-btn");

  revealButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const targetId = button.getAttribute("data-target");
      const panel = document.getElementById(targetId);

      if (!panel) return; // Safety.

      const isVisible = panel.classList.contains("open-panel");

      if (isVisible) {
        // Hide
        panel.classList.remove("open-panel");
        panel.style.maxHeight = "0px";
        button.textContent = "Show explanation";
      } else {
        // Show
        panel.classList.add("open-panel");
        panel.style.maxHeight = panel.scrollHeight + "px";
        button.textContent = "Hide explanation";
      }
    });
  });

  // =====================================================================
  // PART 3 — OPTIONAL TOOLTIP EXPLAINERS ON HOVER
  // =====================================================================
  // When hovering any element with data-explain="text", show a tooltip.
  // =====================================================================

  const explainTargets = document.querySelectorAll("[data-explain]");

  // Create ONE tooltip box we reuse. Efficient + clean.
  const tooltip = document.createElement("div");
  tooltip.className = "explain-tooltip";
  tooltip.style.position = "absolute";
  tooltip.style.padding = "6px 8px";
  tooltip.style.background = "#333";
  tooltip.style.color = "white";
  tooltip.style.fontSize = "0.85rem";
  tooltip.style.borderRadius = "4px";
  tooltip.style.pointerEvents = "none";
  tooltip.style.opacity = "0";
  tooltip.style.transition = "opacity 0.2s ease";
  document.body.appendChild(tooltip);

  explainTargets.forEach(function (el) {
    el.addEventListener("mouseenter", function (event) {
      const message = el.getAttribute("data-explain");
      tooltip.textContent = message;

      // Position tooltip near cursor.
      tooltip.style.left = event.pageX + 10 + "px";
      tooltip.style.top = event.pageY + 10 + "px";
      tooltip.style.opacity = "1";
    });

    el.addEventListener("mousemove", function (event) {
      // Move tooltip with cursor.
      tooltip.style.left = event.pageX + 10 + "px";
      tooltip.style.top = event.pageY + 10 + "px";
    });

    el.addEventListener("mouseleave", function () {
      tooltip.style.opacity = "0";
    });
  });
});

/* ===============================================================
   END OF structure.js
   =============================================================== */
