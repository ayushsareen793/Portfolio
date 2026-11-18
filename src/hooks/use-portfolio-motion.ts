import { useEffect, useRef } from "react";

/** Progressive enhancement: content remains visible without animation support. */
export function usePortfolioMotion() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dispose = () => {};

    function setup() {
      dispose();
      if (!page) return;
      const reduced = preference.matches;
      page.classList.toggle("motion-paused", reduced);
      page.classList.toggle("motion-ready", !reduced);
      const targets = page.querySelectorAll<HTMLElement>("[data-reveal]");
      const observer = !reduced && "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            });
          }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" })
        : null;
      targets.forEach((target) => {
        if (observer) observer.observe(target);
        else target.classList.add("is-visible");
      });
      const sections = Array.from(page.querySelectorAll<HTMLElement>("main > section[id]"));
      const links = page.querySelectorAll<HTMLAnchorElement>(".desktop-links a");
      let frame = 0;
      function updateScroll() {
        frame = 0;
        if (!page) return;
        const range = document.documentElement.scrollHeight - window.innerHeight;
        page.style.setProperty("--reading-progress", String(range > 0 ? Math.min(1, window.scrollY / range) : 0));
        page.classList.toggle("has-scrolled", window.scrollY > 40);
        const current = sections.filter((section) => section.getBoundingClientRect().top <= 180).at(-1);
        links.forEach((link) => {
          if (current && link.hash === `#${current.id}`) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
      function onScroll() { if (!frame) frame = requestAnimationFrame(updateScroll); }
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
      updateScroll();

      const cleanups: (() => void)[] = [];
      if (!reduced && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        page.querySelectorAll<HTMLElement>(".project-image-link").forEach((preview) => {
          const move = (event: PointerEvent) => {
            const bounds = preview.getBoundingClientRect();
            preview.style.setProperty("--tilt-x", `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 5}deg`);
            preview.style.setProperty("--tilt-y", `${((event.clientX - bounds.left) / bounds.width - 0.5) * 5}deg`);
          };
          const reset = () => {
            preview.style.setProperty("--tilt-x", "0deg");
            preview.style.setProperty("--tilt-y", "0deg");
          };
          preview.addEventListener("pointermove", move);
          preview.addEventListener("pointerleave", reset);
          cleanups.push(() => {
            preview.removeEventListener("pointermove", move);
            preview.removeEventListener("pointerleave", reset);
            reset();
          });
        });
      }
      dispose = () => {
        observer?.disconnect();
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        cancelAnimationFrame(frame);
        cleanups.forEach((cleanup) => cleanup());
      };
    }
    setup();
    preference.addEventListener("change", setup);
    return () => {
      dispose();
      preference.removeEventListener("change", setup);
      page.classList.remove("motion-ready");
    };
  }, []);

  return pageRef;
}