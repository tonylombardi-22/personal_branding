"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
   const pathname = usePathname();
   
  const isActive = (href: string) => pathname === href;

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
          align-items: stretch;
          height: 68px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px;
        }

        /* Logo zone */
        .tl-logo-zone {
          display: flex;
          align-items: center;
          padding-right: 36px;
          border-right: 0.5px solid rgba(240, 237, 232, 0.12);
          flex-shrink: 0;
        }

        .tl-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #f0ede8;
          text-decoration: none;
          white-space: nowrap;
        }

        .tl-logo .dot-ai {
          color: #C8A96E;
        }

        /* Nav links */
        .tl-links {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 0 24px;
          flex: 1;
        }

        .tl-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          color: rgba(240, 237, 232, 0.45);
          letter-spacing: 0.04em;
          padding: 6px 14px;
          border-radius: 3px;
          text-decoration: none;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .tl-link:hover {
          color: rgba(240, 237, 232, 0.9);
          background: rgba(240, 237, 232, 0.06);
        }

        /* Right zone */
        .tl-right {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .tl-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #C8A96E;
          opacity: 0.7;
          flex-shrink: 0;
        }

        /* Contact button — Option A style: gold border */
        .tl-contact {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.08em;
          color: #C8A96E;
          border: 0.5px solid rgba(200, 169, 110, 0.5);
          padding: 8px 22px;
          border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
          white-space: nowrap;
        }

        .tl-contact:hover {
          background: rgba(200, 169, 110, 0.1);
          border-color: rgba(200, 169, 110, 0.8);
          color: #d4b87a;
        }

        /* Mobile hamburger */
        .tl-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          color: rgba(240, 237, 232, 0.6);
          font-size: 20px;
          align-items: center;
          justify-content: center;
        }

        /* Mobile menu */
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
          font-size: 14px;
          color: rgba(240, 237, 232, 0.55);
          text-decoration: none;
          padding: 10px 12px;
          border-radius: 3px;
          transition: color 0.2s ease, background 0.2s ease;
        }

        .tl-mobile-link:hover {
          color: #f0ede8;
          background: rgba(240, 237, 232, 0.06);
        }

        .tl-mobile-contact {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #C8A96E;
          border: 0.5px solid rgba(200, 169, 110, 0.4);
          padding: 10px 16px;
          border-radius: 2px;
          text-decoration: none;
          margin-top: 8px;
          text-align: center;
          letter-spacing: 0.06em;
        }

        @media (max-width: 768px) {
          .tl-nav-inner {
            padding: 0 24px;
          }
          .tl-links {
            display: none;
          }
          .tl-right {
            display: none;
          }
          .tl-hamburger {
            display: flex;
          }
          .tl-logo-zone {
            border-right: none;
            padding-right: 0;
          }
        }
      `}</style>

      <nav className="tl-nav">
        <div className="tl-nav-inner">
          {/* Logo */}
          <div className="tl-logo-zone">
            <Link href="/" className="tl-logo">
              TonyLombardi<span className="dot-ai">.ai</span>
            </Link>
          </div>

          {/* Desktop nav links */}
          <div className="tl-links">
            <Link href="/about" className={`tl-link${isActive("/about") ? " active" : ""}`}>About</Link>
            <Link href="/experience" className={`tl-link${isActive("/experience") ? " active" : ""}`}>Experience</Link>
            <Link href="/projects" className={`tl-link${isActive("/projects") ? " active" : ""}`}>Projects</Link>
            <Link href="/writing" className={`tl-link${isActive("/writing") ? " active" : ""}`}>Writing</Link>
          </div>

          {/* Desktop right side */}
          <div className="tl-right">
            <a href="/tony-lombardi-resume.pdf" download className="tl-link">Resume</a>
            <div className="tl-dot" aria-hidden="true" />
            <Link href="/contact" className="tl-contact">Contact</Link>
          </div>

          {/* Mobile hamburger */}
          <div style={{ flex: 1 }} />
          <button
            className="tl-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`tl-mobile-menu${menuOpen ? " open" : ""}`}>
          <Link href="/about" className="tl-mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/experience" className="tl-mobile-link" onClick={() => setMenuOpen(false)}>Experience</Link>
          <Link href="/projects" className="tl-mobile-link" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/writing" className="tl-mobile-link" onClick={() => setMenuOpen(false)}>Writing</Link>
          <a href="/tony-lombardi-resume.pdf" download className="tl-mobile-link">Resume</a>
          <Link href="/contact" className="tl-mobile-contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>
    </>
  );
}