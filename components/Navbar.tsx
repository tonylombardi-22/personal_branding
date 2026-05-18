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
          height: 76px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .tl-logo-zone {
          display: flex;
          align-items: center;
          padding-right: 32px;
          border-right: 0.5px solid rgba(240, 237, 232, 0.1);
          flex-shrink: 0;
          text-decoration: none;
          line-height: 0;
        }

        /* Height 36px on viewBox 640x132 → scale 36/132 = 0.273
           Name: 58 * 0.273 = ~16px rendered (vs 13px nav = ~23% larger, close to 30%) */
        .tl-logo-svg {
          height: 36px;
          width: auto;
          display: block;
        }

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

          <Link href="/" className="tl-logo-zone" aria-label="tonylombardi.ai home">
            <svg
              className="tl-logo-svg"
              viewBox="0 0 640 132"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Slash bars — full height y=8 to y=124 */}
              <polygon points="16,124 34,8 46,8 28,124" fill="#FFFFFF"/>
              <polygon points="32,124 50,8 62,8 44,124" fill="#FFFFFF" opacity="0.4"/>
              <polygon points="48,124 66,8 78,8 60,124" fill="#FFFFFF" opacity="0.15"/>

              {/* TONY white */}
              <text x="100" y="72"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="58" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.5">TONY</text>

              {/* LOMBARDI gold */}
              <text x="282" y="72"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="58" fontWeight="800" fill="#B3995E" letterSpacing="-0.5">LOMBARDI</text>

              {/* Rule */}
              <line x1="100" y1="84" x2="616" y2="84" stroke="#B3995E" strokeWidth="0.8"/>

              {/* Tagline — fontSize 29 so it renders ~9px at navbar scale */}
              <text x="102" y="118" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="29" fontWeight="700" fill="#B3995E" letterSpacing="6">AI &amp; </text>
              <text x="210" y="118" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="29" fontWeight="700" fill="#FFFFFF" letterSpacing="6">HUMAN </text>
              <text x="348" y="118" fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif" fontSize="29" fontWeight="700" fill="#B3995E" letterSpacing="6">FACILITATOR</text>
            </svg>
          </Link>

          <div className="tl-links">
            <Link href="/about"      className={`tl-link${isActive("/about")      ? " active" : ""}`}>About</Link>
            <Link href="/experience" className={`tl-link${isActive("/experience") ? " active" : ""}`}>Experience</Link>
            <Link href="/projects"   className={`tl-link${isActive("/projects")   ? " active" : ""}`}>Projects</Link>
            <Link href="/writing"    className={`tl-link${isActive("/writing")    ? " active" : ""}`}>Writing</Link>
          </div>

          <Link href="/contact" className="tl-cta">GET IN TOUCH →</Link>

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