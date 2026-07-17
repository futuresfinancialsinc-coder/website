// Futures Financials — shared site behavior
// Mobile nav toggle, dropdown menus, footer year, stat counters.

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Dropdowns (click/tap; hover handled in CSS on pointer devices)
  document.querySelectorAll(".has-dropdown > .drop-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = btn.parentElement;
      const wasOpen = item.classList.contains("open");
      document.querySelectorAll(".has-dropdown.open").forEach((el) => el.classList.remove("open"));
      item.classList.toggle("open", !wasOpen);
      btn.setAttribute("aria-expanded", String(!wasOpen));
    });
  });
  document.addEventListener("click", () => {
    document.querySelectorAll(".has-dropdown.open").forEach((el) => el.classList.remove("open"));
  });

  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mailto-composing forms — shared handler for every inquiry/application form on the
  // site until a real form backend is chosen. Each form needs: id, data-subject-field
  // (the FormData key used to personalize the email subject) and data-subject-label
  // (fallback label if that field is blank).
  document.querySelectorAll("form[data-mailto-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [];
      data.forEach((value, key) => {
        if (String(value).trim()) lines.push(key + ": " + value);
      });
      const subjectField = form.dataset.subjectField;
      const subjectLabel = form.dataset.subjectLabel || "New Submission";
      const subjectPrefix = form.dataset.subjectPrefix || "";
      const subjectValue = (subjectField && data.get(subjectField)) || subjectLabel;
      const subject = subjectPrefix + subjectValue;
      const mailto = "mailto:futuresfinancialsinc@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(lines.join("\n\n"));
      window.location.href = mailto;
      form.classList.add("sent");
    });
  });

  // Interactive world map (Impact page): inject SVG, highlight active countries
  const mapFrame = document.getElementById("world-map");
  if (mapFrame) {
    const ACTIVE = {
      "United States": "NJ · SD · CA · NC · TX · NY",
      "India": "",
      "United Arab Emirates": "",
      "Uruguay": "",
      "Uzbekistan": "",
      "China": "",
      "Canada": "",
    };
    fetch(mapFrame.dataset.src)
      .then((r) => r.text())
      .then((svgText) => {
        mapFrame.innerHTML = svgText;
        const tooltip = document.getElementById("map-tooltip");
        mapFrame.querySelectorAll("path").forEach((path) => {
          const name = path.getAttribute("aria-label") || "";
          const isActive = Object.prototype.hasOwnProperty.call(ACTIVE, name);
          if (isActive) path.classList.add("active");
          path.addEventListener("mousemove", (e) => {
            if (!tooltip || !name) return;
            const sub = isActive && ACTIVE[name] ? '<span class="tt-sub">' + ACTIVE[name] + "</span>" : "";
            tooltip.innerHTML = name + sub;
            tooltip.style.left = e.clientX + "px";
            tooltip.style.top = e.clientY + "px";
            tooltip.style.display = "block";
          });
          path.addEventListener("mouseleave", () => {
            if (tooltip) tooltip.style.display = "none";
          });
        });
      })
      .catch(() => {
        mapFrame.textContent = "[WORLD MAP — failed to load images/world.svg]";
      });
  }

  // Animated stat counters (skipped if reduced motion is preferred)
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const counters = document.querySelectorAll(".stat-num[data-count]");
  if (counters.length) {
    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || "";
      if (reduceMotion || isNaN(target)) {
        el.firstChild.textContent = isNaN(target) ? el.dataset.count : target.toLocaleString("en-US");
        return;
      }
      const duration = 1200;
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.firstChild.textContent = Math.round(target * eased).toLocaleString("en-US");
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      void suffix; // suffix rendered via .stat-suffix span in markup
    };
    const seen = new WeakSet();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !seen.has(entry.target)) {
          seen.add(entry.target);
          animate(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach((el) => io.observe(el));
  }

  // Scroll-reveal — fade/slide elements in as they enter the viewport.
  // Elements opt in with the .reveal class; reduced-motion shows them at once.
  const revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if (reduceMotion) {
      revealEls.forEach((el) => el.classList.add("in"));
    } else {
      const revealIO = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealIO.unobserve(entry.target);
          }
        });
      }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });
      revealEls.forEach((el) => revealIO.observe(el));
    }
  }

  // "Guarantee gap" state grid (homepage) — staggered cell reveal on scroll.
  // Cells are fully visible without JS; the .anim class opts into the animation.
  const gapGrid = document.getElementById("gap-cells");
  if (gapGrid && !reduceMotion) {
    gapGrid.classList.add("anim");
    gapGrid.querySelectorAll(".us-state").forEach((cell, idx) => {
      cell.style.transitionDelay = idx * 18 + "ms";
    });
    const gapIO = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gapGrid.classList.add("revealed");
          gapIO.disconnect();
        }
      });
    }, { threshold: 0.3 });
    gapIO.observe(gapGrid);
  }
});
