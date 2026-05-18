"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .tl-nav {
          background: #0d0d0d;
          border-bottom: 0.5px solid rgba(240, 237, 232, 0.08);
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
        }

        .tl-nav-inner {
          display: flex;
          align-items: center;
          height: 72px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
          gap: 0;
        }

        /* ── Logo zone ── */
        .tl-logo-zone {
          display: flex;
          align-items: center;
          padding-right: 36px;
          border-right: 0.5px solid rgba(240, 237, 232, 0.1);
          flex-shrink: 0;
          text-decoration: none;
        }

        .tl-logo-svg {
          height: 44px;
          width: auto;
          display: block;
        }

        /* ── Nav links ── */
        .tl-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          padding-left: 32px;
        }

        .tl-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.06em;
          color: rgba(240, 237, 232, 0.5);
          text-decoration: none;
          padding: 6px 14px;
          border-radius: 4px;
          transition: color 0.18s ease, background 0.18s ease;
        }

        .tl-link:hover {
          color: rgba(240, 237, 232, 0.9);
          background: rgba(240, 237, 232, 0.05);
        }

        .tl-link.active {
          color: #f0ede8;
          background: rgba(200, 169, 110, 0.1);
        }

        /* ── CTA button ── */
        .tl-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.1em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.5);
          border-radius: 4px;
          padding: 8px 20px;
          transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background: rgba(200, 169, 110, 0.1);
          border-color: rgba(200, 169, 110, 0.8);
          color: #d4b87a;
        }

        /* ── Mobile hamburger ── */
        .tl-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          margin-left: auto;
        }

        .tl-hamburger span {
          display: block;
          width: 22px;
          height: 1.5px;
          background: rgba(240, 237, 232, 0.6);
          transition: all 0.2s ease;
        }

        /* ── Mobile menu ── */
        .tl-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0d0d0d;
          border-top: 0.5px solid rgba(240, 237, 232, 0.08);
          padding: 16px 24px 24px;
          gap: 4px;
        }

        .tl-mobile-menu.open {
          display: flex;
        }

        .tl-mobile-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          color: rgba(240, 237, 232, 0.6);
          text-decoration: none;
          padding: 10px 0;
          border-bottom: 0.5px solid rgba(240, 237, 232, 0.06);
          transition: color 0.15s ease;
        }

        .tl-mobile-link:hover,
        .tl-mobile-link.active {
          color: #f0ede8;
        }

        .tl-mobile-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.4);
          border-radius: 4px;
          padding: 10px 16px;
          text-align: center;
          margin-top: 12px;
        }

        @media (max-width: 768px) {
          .tl-nav-inner { padding: 0 24px; }
          .tl-links { display: none; }
          .tl-cta { display: none; }
          .tl-hamburger { display: flex; }
        }
      `}</style>

      <nav className="tl-nav">
        <div className="tl-nav-inner">

          {/* ── Logo: inline SVG slash mark ── */}
          <Link href="/" className="tl-logo-zone" aria-label="tonylombardi.ai home">
            <svg
              className="tl-logo-svg"
              viewBox="0 0 320 44"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Slash bars */}
              <polygon points="6,42 18,2 25,2 13,42" fill="#f0ede8"/>
              <polygon points="18,42 30,2 37,2 25,42" fill="#f0ede8" opacity="0.4"/>
              <polygon points="30,42 42,2 49,2 37,42" fill="#f0ede8" opacity="0.15"/>

              {/* TONY */}
              <text
                x="58"
                y="34"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="800"
                fill="#f0ede8"
                letterSpacing="-0.5"
              >TONY</text>

              {/* LOMBARDI in camel gold */}
              <text
                x="148"
                y="34"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="32"
                fontWeight="800"
                fill="#B3995E"
                letterSpacing="-0.5"
              >LOMBARDI</text>
            </svg>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="tl-links">
            <Link href="/about"       className={`tl-link${isActive("/about")       ? " active" : ""}`}>About</Link>
            <Link href="/experience"  className={`tl-link${isActive("/experience")  ? " active" : ""}`}>Experience</Link>
            <Link href="/projects"    className={`tl-link${isActive("/projects")    ? " active" : ""}`}>Projects</Link>
            <Link href="/writing"     className={`tl-link${isActive("/writing")     ? " active" : ""}`}>Writing</Link>
          </div>

          {/* ── CTA ── */}
          <Link href="/contact" className="tl-cta">GET IN TOUCH →</Link>

          {/* ── Mobile hamburger ── */}
          <button
            className="tl-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ opacity: menuOpen ? 0 : 1 }} />
            <span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>

        {/* ── Mobile menu ── */}
        <div className={`tl-mobile-menu${menuOpen ? " open" : ""}`}>
          <Link href="/about"      className={`tl-mobile-link${isActive("/about")      ? " active" : ""}`} onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/experience" className={`tl-mobile-link${isActive("/experience") ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link href="/projects"   className={`tl-mobile-link${isActive("/projects")   ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/writing"    className={`tl-mobile-link${isActive("/writing")    ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Writing</Link>
          <Link href="/contact"    className="tl-mobile-cta"                                               onClick={() => setMenuOpen(false)}>GET IN TOUCH →</Link>
        </div>
      </nav>
    </>
  );
}