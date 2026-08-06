import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tony Lombardi",
  description: "A portfolio of builds, systems, and ventures. Real work, real outcomes — not a resume.",
};

export default function ProjectsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0d0d0d;
          color: #f0ede8;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }
        ul { list-style: none; }

        .container {
          width: 100%;
          max-width: 1120px;
          margin-inline: auto;
          padding-inline: 2rem;
        }

        .section-label {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 2rem;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          border-radius: 4px;
          font-family: 'Inter', system-ui, sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: all 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          border: 1.5px solid transparent;
          text-decoration: none;
        }

        .btn-primary {
          background: #c9a96e;
          color: #0d0d0d;
          border-color: #c9a96e;
        }
        .btn-primary:hover {
          background: #d4b07a;
          border-color: #d4b07a;
          box-shadow: 0 0 24px rgba(201,169,110,0.28);
          transform: translateY(-1px);
        }

        .btn-large { padding: 1rem 2.5rem; font-size: 1rem; }

        /* Page hero */
        .page-hero {
          padding-top: 2.5rem;
          padding-bottom: 5rem;
          position: relative;
          overflow: hidden;
        }
        .page-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 50% at 70% 30%, rgba(201,169,110,0.07) 0%, transparent 65%);
          pointer-events: none;
        }

        .page-hero-content {
          max-width: 640px;
          position: relative;
        }

        .page-eyebrow {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 1rem;
        }

        .page-headline {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(3rem, 7vw, 6rem);
          font-weight: 400;
          line-height: 0.95;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }

        .page-subline {
          font-size: 1.05rem;
          color: #888880;
          line-height: 1.75;
          max-width: 540px;
        }

        /* Hub grid */
        .inner-section {
          padding-block: 4rem 6rem;
        }

        .hub-grid {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
        }

        .hub-card {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 0;
          background: #141414;
          transition: background 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hub-card:hover { background: #1c1c1c; }

        .hub-card-left {
          padding: 3rem 2.5rem;
          border-right: 1px solid #2a2a2a;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 2rem;
        }

        .hub-card-num {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #c9a96e;
          margin-bottom: 0.75rem;
        }

        .hub-card-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.6rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 0.5rem;
          line-height: 1.15;
        }

        .hub-card-category {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.06em;
          color: #888880;
          text-transform: uppercase;
        }

        .hub-card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #c9a96e;
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: gap 0.22s ease, opacity 0.22s ease;
        }
        .hub-card-link:hover { gap: 0.75rem; }
        .hub-card-link--disabled {
          opacity: 0.35;
          pointer-events: none;
          cursor: default;
        }

        .hub-card-right {
          padding: 3rem 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hub-summary {
          font-size: 0.95rem;
          color: #888880;
          line-height: 1.75;
          margin-bottom: 0.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .hub-trio-item {
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }

        .hub-trio-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
        }

        .hub-trio-item p {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.65;
        }

        /* Page CTA */
        .page-cta {
          padding-block: 9rem;
          background: #141414;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .page-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
        }
        .page-cta::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .page-cta-inner {
          max-width: 580px;
          margin-inline: auto;
          padding-inline: 2rem;
          position: relative;
          z-index: 1;
        }

        .page-cta-headline {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .page-cta-copy {
          font-size: 1rem;
          color: #888880;
          line-height: 1.7;
          margin-bottom: 3rem;
        }

        .page-cta-actions { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; }

        /* Footer */
        .site-footer { padding-block: 4rem; background: #0d0d0d; }

        .footer-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          text-align: center;
          width: 100%;
          max-width: 1120px;
          margin-inline: auto;
          padding-inline: 2rem;
        }

        .footer-logo {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.2rem;
          color: #ffffff;
          text-decoration: none;
        }
        .footer-copy { font-size: 0.8rem; color: #888880; letter-spacing: 0.06em; }
        .footer-legal { font-size: 0.75rem; color: #555; }

        .footer-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .footer-link {
          font-size: 0.78rem;
          color: #444;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: color 0.2s ease;
        }

        .footer-link:hover { color: #888880; }

                /* Responsive */
        @media (max-width: 900px) {
          .hub-card { grid-template-columns: 1fr; }
          .hub-card-left { border-right: none; border-bottom: 1px solid #2a2a2a; padding-bottom: 2rem; }
        }

        @media (max-width: 640px) {
          .page-hero { padding-top: 2rem; }
          .hub-card-left, .hub-card-right { padding: 2rem; }
        }
      `}</style>

      <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
        <Navbar />
        <ScrollAnimations />

        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content fade-up">
              <p className="page-eyebrow">Portfolio</p>
              <h1 className="page-headline">Built.<br />Shipped.<br />Working.</h1>
              <p className="page-subline">These aren't concepts or proposals. They're things that got built — brands, systems, frameworks, and research engines — each with a real problem at the start and a real outcome at the end.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="inner-section">
          <div className="container">
            <div className="hub-grid">

              {/* Salterra */}
              <article className="hub-card fade-up">
                <div className="hub-card-left">
                  <div>
                    <p className="hub-card-num">01</p>
                    <h2 className="hub-card-title">Salterra Enterprises</h2>
                    <p className="hub-card-category">Brand / Web / Launch</p>
                  </div>
                  <Link href="/projects/salterra" className="hub-card-link">
                    Read the case study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="hub-card-right">
                  <p className="hub-summary">A financial services operations leader with decades of enterprise experience stepping out independently — with no brand, no website, and no service structure. Built everything from scratch: brand positioning, website, service architecture, and launch strategy. Market-ready in a single coordinated pass.</p>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Challenge</span>
                    <p>Financial services operator launching independently with no brand, no digital presence, and no defined service offerings.</p>
                  </div>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Build</span>
                    <p>Full brand positioning, website design and build, service architecture, CTA flow design, and practical launch strategy.</p>
                  </div>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Outcome</span>
                    <p>Market-ready consulting brand launched with a credible digital presence and service structure that enables confident sales conversations.</p>
                  </div>
                </div>
              </article>

              {/* TonyOS */}
              <article className="hub-card fade-up">
                <div className="hub-card-left">
                  <div>
                    <p className="hub-card-num">02</p>
                    <h2 className="hub-card-title">TonyOS</h2>
                    <p className="hub-card-category">Operating System / Framework</p>
                  </div>
                  <Link href="/tonyos" className="hub-card-link">
                    Explore TonyOS
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="hub-card-right">
                  <p className="hub-summary">Not a product, not a methodology — an operating framework built from years of pattern recognition across business leadership, independent building, and life design. TonyOS is the system behind how I think, decide, build, and advise. Every client engagement runs through it.</p>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Challenge</span>
                    <p>Building a coherent personal operating framework from years of pattern recognition across business, life, and execution — and making it legible enough to be useful.</p>
                  </div>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Build</span>
                    <p>An integrated framework connecting life pattern recognition, execution systems, and practical decision-making — designed to be applied, not archived.</p>
                  </div>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Outcome</span>
                    <p>A living operating system that drives every engagement. Not a methodology deck — a working framework that shapes real decisions.</p>
                  </div>
                </div>
              </article>

              {/* DMV 2.0 */}
              <article className="hub-card fade-up">
                <div className="hub-card-left">
                  <div>
                    <p className="hub-card-num">03</p>
                    <h2 className="hub-card-title">DMV 2.0</h2>
                    <p className="hub-card-category">Venture / Product Design / Workflow</p>
                  </div>
                  <Link href="/projects/dmv-2.0" className="hub-card-link">
                    Read the case study
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
                <div className="hub-card-right">
                  <p className="hub-summary">A mobile-first vehicle registration platform designed to eliminate DMV wait times in Connecticut. The concept: field representatives come to the customer, complete registration on-site, and transmit digitally to the DMV. Built from zero: market research, product design, workflow engineering, wireframes, and a full investor pitch.</p>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Challenge</span>
                    <p>Connecticut DMV customers waiting up to four hours for simple vehicle registration transactions. A broken public-sector experience with a viable private-sector solution.</p>
                  </div>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Build</span>
                    <p>Full product concept, two-sided platform design (customer app and employee mobile app), workflow documentation, requirements matrix, wireframes, business model, and investor presentation.</p>
                  </div>
                  <div className="hub-trio-item">
                    <span className="hub-trio-label">Outcome</span>
                    <p>Proof-of-concept complete with validated market demand. 47% of CT residents willing to pay a premium to skip the DMV line. Full documentation and investor materials produced.</p>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta">
          <div className="page-cta-inner fade-up">
            <h2 className="page-cta-headline">Have something worth building?</h2>
            <p className="page-cta-copy">The problems I work on best are the ones where the path isn't obvious and the stakes are real. If that's where you are, let's talk.</p>
            <div className="page-cta-actions">
              <Link href="/work-with-me" className="btn btn-primary btn-large">Work With Me</Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            <Link href="/" className="footer-logo">Tony Lombardi</Link>
            <div className="footer-links">
              <Link href="/about" className="footer-link">About</Link>
              <Link href="/projects" className="footer-link">Projects</Link>
              <Link href="/work-with-me" className="footer-link">Work With Me</Link>
              <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            </div>
            <p className="footer-legal">&copy; {new Date().getFullYear()} Tony Lombardi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}