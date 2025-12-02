// main.js

document.addEventListener("DOMContentLoaded", () => {
  /* ==============================
     1. Scroll reveal animations
     ============================== */

  const animatedEls = document.querySelectorAll(
    ".section, .project-card, .timeline-item"
  );

  animatedEls.forEach(el => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  animatedEls.forEach(el => observer.observe(el));

  /* ==============================
     2. Custom cursor
     ============================== */

  const cursorDot = document.querySelector(".cursor-dot");
  const cursorOutline = document.querySelector(".cursor-outline");

  if (cursorDot && cursorOutline) {
    // follow mouse
    document.addEventListener("mousemove", e => {
      const { clientX: x, clientY: y } = e;

      cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      cursorOutline.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    // shrink / grow on hoverable elements
    const hoverTargets = document.querySelectorAll(
      "a, button, .project-card, .timeline-item"
    );

    hoverTargets.forEach(el => {
      el.addEventListener("mouseenter", () => {
        cursorDot.classList.add("cursor-hover");
        cursorOutline.classList.add("cursor-hover");
      });

      el.addEventListener("mouseleave", () => {
        cursorDot.classList.remove("cursor-hover");
        cursorOutline.classList.remove("cursor-hover");
      });
    });

    // small click animation
    document.addEventListener("mousedown", () => {
      cursorDot.classList.add("cursor-click");
      cursorOutline.classList.add("cursor-click");
    });

    document.addEventListener("mouseup", () => {
      cursorDot.classList.remove("cursor-click");
      cursorOutline.classList.remove("cursor-click");
    });
  }

  /* ==============================
     3. Subtle hero text fade-in
     ============================== */

  const hero = document.querySelector(".hero-inner");
  if (hero) {
    hero.classList.add("hero-loaded");
  }
});
