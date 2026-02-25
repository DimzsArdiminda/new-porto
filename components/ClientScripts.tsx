"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientScripts() {
  const pathname = usePathname();

  useEffect(() => {
    // Cursor glow (initialize once)
    const cursorGlow = document.getElementById("cursorGlow");
    if (cursorGlow) {
      let mouseX = 0,
        mouseY = 0;
      let glowX = 0,
        glowY = 0;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursorGlow.style.opacity = "1";
        document.documentElement.style.setProperty(
          "--mouse-x",
          e.clientX + "px",
        );
        document.documentElement.style.setProperty(
          "--mouse-y",
          e.clientY + "px",
        );
      };

      const onMouseLeave = () => (cursorGlow.style.opacity = "0");

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseleave", onMouseLeave);

      let animId = 0;
      const animateGlow = () => {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        cursorGlow.style.left = glowX - 200 + "px";
        cursorGlow.style.top = glowY - 200 + "px";
        animId = requestAnimationFrame(animateGlow);
      };
      animateGlow();

      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseleave", onMouseLeave);
        cancelAnimationFrame(animId);
      };
    }
  }, []);

  useEffect(() => {
    // Re-run intersection observers and stat counters on each route change
    // Fade-in elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

    // Smooth scrolling for hash links
    const clickHandler = (e: Event) => {
      const target = e.target as HTMLElement;
      const anchor =
        target.closest && (target.closest("a") as HTMLAnchorElement | null);
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("#")) return;
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        (el as HTMLElement).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.addEventListener("click", clickHandler);

    // Stats counters
    document.querySelectorAll(".stat-number").forEach((stat) => {
      const el = stat as HTMLElement & { dataset: DOMStringMap };
      if (el.dataset.animated) return;
      const text = el.textContent || "";
      if (text === "∞" || text === "24/7") return;
      const target = parseInt(text);
      if (isNaN(target)) return;
      el.dataset.animated = "true";
      let current = 0;
      const increment = target / 50;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          el.textContent = Math.floor(current) + "+";
          setTimeout(updateCounter, 30);
        } else {
          el.textContent = text;
        }
      };

      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            counterObserver.unobserve(entry.target);
          }
        });
      });

      counterObserver.observe(el);
    });

    return () => {
      observer.disconnect();
      document.removeEventListener("click", clickHandler);
    };
  }, [pathname]);

  return null;
}
