"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&display=swap');

        .tl-nav {
          background: rgba(13,13,13,0.92);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(240, 237, 232, 0.07);
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
          border-right: 0.5px solid rgba(240, 237, 232, 0.08);
          flex-shrink: 0;
          text-decoration: none;
          line-height: 0;
        }

        .tl-logo-svg {
          height: 44px;
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
          background: rgba(201, 169, 110, 0.1);
        }

        .tl-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0d0d0d;
          background: #c9a96e;
          text-decoration: none;
          border-radius: 4px;
          padding: 9px 20px;
          transition: background 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .tl-cta:hover {
          background: #d4b07a;
          box-shadow: 0 0 18px rgba(201,169,110,0.28);
          transform: translateY(-1px);
        }

        .tl-cta.active {
          box-shadow: 0 0 12px rgba(201,169,110,0.2);
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
          border-top: 0.5px solid rgba(240, 237, 232, 0.07);
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
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0d0d0d;
          background: #c9a96e;
          text-decoration: none;
          border-radius: 4px;
          padding: 12px 16px;
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
              <polygon points="16,124 34,8 46,8 28,124" fill="#FFFFFF"/>
              <polygon points="32,124 50,8 62,8 44,124" fill="#FFFFFF" opacity="0.4"/>
              <polygon points="48,124 66,8 78,8 60,124" fill="#FFFFFF" opacity="0.15"/>

              <text x="100" y="72"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="58" fontWeight="800" fill="#FFFFFF" letterSpacing="-0.5">TONY</text>

              <text x="282" y="72"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="58" fontWeight="800" fill="#B3995E" letterSpacing="-0.5">LOMBARDI</text>

              <line x1="100" y1="84" x2="616" y2="84" stroke="#B3995E" strokeWidth="0.8"/>

              <text x="100" y="118"
                fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
                fontSize="26" fontWeight="700" letterSpacing="4">
                <tspan fill="#B3995E">BUILDER · </tspan><tspan fill="#FFFFFF">DESIGNER · </tspan><tspan fill="#B3995E">ADVISOR</tspan>
              </text>
            </svg>
          </Link>

          <div className="tl-links">
            <Link href="/projects" className={`tl-link${isActive("/projects") ? " active" : ""}`}>Projects</Link>
            <Link href="/tonyos"   className={`tl-link${isActive("/tonyos")   ? " active" : ""}`}>TonyOS</Link>
          </div>

          <Link href="/work-with-me" className={`tl-cta${isActive("/work-with-me") ? " active" : ""}`}>Work With Me</Link>

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
          <Link href="/projects"    className={`tl-mobile-link${isActive("/projects")    ? " active" : ""}`} onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/tonyos"      className={`tl-mobile-link${isActive("/tonyos")      ? " active" : ""}`} onClick={() => setMenuOpen(false)}>TonyOS</Link>
          <Link href="/work-with-me" className="tl-mobile-cta"                                               onClick={() => setMenuOpen(false)}>Work With Me</Link>
        </div>
      </nav>
    </>
  );
}
