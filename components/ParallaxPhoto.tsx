"use client";

import { useEffect, useRef } from "react";

export default function ParallaxPhoto() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapRef.current || !imgRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      const viewH = window.innerHeight;
      const progress = 1 - (rect.top + rect.height) / (viewH + rect.height);
      const offset = progress * 60 - 30;
      imgRef.current.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapRef}
      className="hero-photo-wrap fade-up delay-2"
      style={{ overflow: "hidden" }}
    >
      <img
        ref={imgRef}
        src="/tony-lombardi.jpg"
        alt="Tony Lombardi"
        className="hero-photo"
        style={{
          willChange: "transform",
          transition: "transform 0.1s linear",
          marginTop: "-30px",
          marginBottom: "-30px",
          height: "calc(100% + 60px)",
        }}
      />
      <div className="hero-photo-accent" aria-hidden="true" />
      <div className="hero-photo-label">Tony Lombardi</div>
    </div>
  );
}