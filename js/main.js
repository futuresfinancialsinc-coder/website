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

  // Dropdowns. One helper opens a panel and closes every other one, so two can
  // never be on screen together whether the menu was reached by pointer,
  // click/tap or keyboard. CSS shows a panel only while it carries .open.
  const dropItems = [...document.querySelectorAll(".has-dropdown")];
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Clicking a button focuses it, and that focus must not also drive the menu:
  // when it did, a clicked panel stayed open under the next hovered one.
  let viaKeyboard = false;
  // Escape puts focus back on the button; that focus must not reopen the menu.
  let suppressFocusOpen = false;
  document.addEventListener("keydown", (e) => {
    if (e.key === "Tab") viaKeyboard = true;
  }, true);
  document.addEventListener("mousedown", () => { viaKeyboard = false; }, true);
  document.addEventListener("touchstart", () => { viaKeyboard = false; }, { capture: true, passive: true });

  const setOpen = (item, open) => {
    item.classList.toggle("open", open);
    const btn = item.querySelector(".drop-btn");
    if (btn) btn.setAttribute("aria-expanded", String(open));
  };
  const closeAllDropdowns = () => dropItems.forEach((el) => setOpen(el, false));
  const openOnly = (item) => dropItems.forEach((el) => setOpen(el, el === item));

  dropItems.forEach((item) => {
    const btn = item.querySelector(".drop-btn");

    if (btn) {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        // Where there is no hover, the button is the only way in, so it toggles.
        // Where hover already opens the panel, the button only ever opens it;
        // closing is moving the pointer away, Escape, or a click outside.
        if (!canHover && item.classList.contains("open")) closeAllDropdowns();
        else openOnly(item);
      });
    }

    if (canHover) {
      // The panel sits below an 8px gap, bridged by .dropdown::before. Both are
      // descendants of the item, so moving onto them never fires mouseleave.
      item.addEventListener("mouseenter", () => openOnly(item));
      item.addEventListener("mouseleave", () => setOpen(item, false));
    }

    // Keyboard only: tabbing into the item opens it, tabbing out closes it.
    item.addEventListener("focusin", () => {
      if (viaKeyboard && !suppressFocusOpen) openOnly(item);
    });
    item.addEventListener("focusout", (e) => {
      if (viaKeyboard && !item.contains(e.relatedTarget)) setOpen(item, false);
    });
  });

  document.addEventListener("click", closeAllDropdowns);
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const open = dropItems.find((el) => el.classList.contains("open"));
    closeAllDropdowns();
    if (open) {
      const btn = open.querySelector(".drop-btn");
      if (btn) {
        suppressFocusOpen = true;   // focus() fires focusin synchronously
        btn.focus();
        suppressFocusOpen = false;
      }
    }
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

  // Header: clear over the page opening, solid once it has scrolled past.
  const hdr = document.querySelector(".site-header");
  const opening = document.querySelector("[data-hero]");
  if (hdr) {
    if (opening) {
      const syncSolid = () =>
        hdr.classList.toggle("is-solid", opening.getBoundingClientRect().bottom <= 80);
      syncSolid();
      window.addEventListener("scroll", syncSolid, { passive: true });
      window.addEventListener("resize", syncSolid);
      window.addEventListener("load", syncSolid);
    } else {
      // No branded opening on this page, so the bar is solid from the start.
      hdr.classList.add("is-solid");
    }
    // The mobile menu needs a readable backing whatever the scroll position.
    const syncNavOpen = () =>
      hdr.classList.toggle("nav-open", !!document.querySelector(".site-nav.open, .has-dropdown.open"));
    hdr.addEventListener("click", () => requestAnimationFrame(syncNavOpen));
    document.addEventListener("keyup", syncNavOpen);
  }

  // Header auto-hide: slide away while scrolling down, return on scroll up.
  const header = document.querySelector(".site-header");
  if (header && !reduceMotion) {
    const HIDE_BELOW = 200;   // never hide near the top of the page
    const DELTA = 6;          // ignore sub-pixel jitter
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const navOpen = document.querySelector(".site-nav.open");
      const menuOpen = document.querySelector(".has-dropdown.open");

      if (y <= HIDE_BELOW || navOpen || menuOpen) {
        header.classList.remove("is-hidden");
      } else if (y > lastY + DELTA) {
        header.classList.add("is-hidden");
      } else if (y < lastY - DELTA) {
        header.classList.remove("is-hidden");
      }
      lastY = y;
    };

    window.addEventListener("scroll", () => {
      if (!ticking) { ticking = true; requestAnimationFrame(update); }
    }, { passive: true });
  }
});
