"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .fade-up {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 0.65s ease, transform 0.65s ease;
      }
      .fade-up.visible {
        opacity: 1;
        transform: translateY(0);
      }
      .fade-up.delay-1 { transition-delay: 0.1s; }
      .fade-up.delay-2 { transition-delay: 0.2s; }
      .fade-up.delay-3 { transition-delay: 0.3s; }
      .fade-up.delay-4 { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return null;
}