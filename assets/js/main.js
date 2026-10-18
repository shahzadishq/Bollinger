/* Böllinger – interactions */
(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile navigation toggle
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.classList.toggle("is-active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    });
    // Close menu after clicking a link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Scroll reveal
  var revealTargets = document.querySelectorAll(
    ".card, .step, .stat, .about__media, .about__text, .gallery__item, .section__head"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(function (el) { io.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Animated counters
  var counters = document.querySelectorAll(".stat__num[data-count]");
  var countersDone = false;
  function runCounters() {
    if (countersDone) return;
    countersDone = true;
    counters.forEach(function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var start = 0;
      var duration = 1400;
      var startTime = null;
      function tick(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(start + (target - start) * eased);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
    });
  }

  var statsSection = document.querySelector(".stats");
  if (statsSection && "IntersectionObserver" in window) {
    var statObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { runCounters(); statObserver.disconnect(); }
      });
    }, { threshold: 0.4 });
    statObserver.observe(statsSection);
  } else {
    runCounters();
  }

  // Header shadow on scroll
  var header = document.querySelector(".header");
  if (header) {
    window.addEventListener("scroll", function () {
      header.style.boxShadow = window.scrollY > 10
        ? "0 6px 20px rgba(0,0,0,.12)"
        : "0 2px 12px rgba(0,0,0,.05)";
    }, { passive: true });
  }
})();
