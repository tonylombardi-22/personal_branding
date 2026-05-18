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
        }

        /* ── Logo ── */
        .tl-logo-zone {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-right: 32px;
          border-right: 0.5px solid rgba(240, 237, 232, 0.1);
          flex-shrink: 0;
          text-decoration: none;
        }

        /* CSS slash mark — 3 angled bars */
        .tl-slash-mark {
          display: flex;
          align-items: center;
          gap: 3px;
          height: 36px;
          flex-shrink: 0;
        }

        .tl-slash-mark span {
          display: block;
          width: 5px;
          height: 36px;
          background: #f0ede8;
          transform: skewX(-18deg);
          border-radius: 1px;
        }

        .tl-slash-mark span:nth-child(2) { opacity: 0.45; }
        .tl-slash-mark span:nth-child(3) { opacity: 0.18; }

        /* Wordmark — stacked two lines */
        .tl-wordmark {
          display: flex;
          flex-direction: column;
          line-height: 1;
          gap: 2px;
        }

        .tl-wordmark-top {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #f0ede8;
          text-transform: uppercase;
        }

        .tl-wordmark-bottom {
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: #B3995E;
          text-transform: uppercase;
        }

        /* ── Nav links ── */
        .tl-links {
          display: flex;
          align-items: center;
          gap: 4px;
          flex: 1;
          padding-left: 28px;
        }

        .tl-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: 0.05em;
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

        /* ── CTA ── */
        .tl-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          color: #C8A96E;
          text-decoration: none;
          border: 0.5px solid rgba(200, 169, 110, 0.5);
          border-radius: 4px;
          padding: 8px 18px;
          transition: background 0.18s ease, border-color 0.18s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background: rgba(200, 169, 110, 0.08);
          border-color: rgba(200, 169, 110, 0.8);
        }

        /* ── Mobile ── */
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

        .tl-mobile-menu {
          display: none;
          flex-direction: column;
          background: #0d0d0d;
          border-top: 0.5px solid rgba(240, 237, 232, 0.08);
          padding: 16px 24px 24px;
          gap: 4px;
        }

        .tl-mobile-menu.open { display: flex; }

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
        .tl-mobile-link.active { color: #f0ede8; }

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

          {/* ── Logo ── */}
          <Link href="/" className="tl-logo-zone" aria-label="tonylombardi.ai home">
            <div className="tl-slash-mark" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="tl-wordmark">
              <span className="tl-wordmark-top">Tony</span>
              <span className="tl-wordmark-bottom">Lombardi</span>
            </div>
          </Link>

          {/* ── Desktop links ── */}
          <div className="tl-links">
            <Link href="/about"      className={`tl-link${isActive("/about")      ? " active" : ""}`}>About</Link>
            <Link href="/experience" className={`tl-link${isActive("/experience") ? " active" : ""}`}>Experience</Link>
            <Link href="/projects"   className={`tl-link${isActive("/projects")   ? " active" : ""}`}>Projects</Link>
            <Link href="/writing"    className={`tl-link${isActive("/writing")    ? " active" : ""}`}>Writing</Link>
          </div>

          {/* ── CTA ── */}
          <Link href="/contact" className="tl-cta">GET IN TOUCH →</Link>

          {/* ── Hamburger ── */}
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