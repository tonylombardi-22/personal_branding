import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tony Lombardi",
  description:
    "DMV 2.0 — a patented GovTech disruption concept adopted by a gubernatorial campaign. The Fight Don — a complete digital operating infrastructure and AI-enabled performance analytics platform built from zero.",
};

const projects = [
  {
    number: "01",
    name: "DMV 2.0",
    positioning:
      "A mobile-first GovTech disruption concept that would replace Connecticut's in-person vehicle registration process with an on-demand, Uber-style field service — designed, patented, and pitched at the gubernatorial level.",
    summary:
      "Connecticut's DMV registration process for private vehicle sales was paper-heavy, slow, and required in-person visits — friction the system had accepted for decades. Tony founded LCL Business Solutions, assembled a four-person team, and designed a dual mobile app allowing consumers to schedule a registration appointment while a trained DMV 2.0 field employee came to their location, processed all documentation via mobile OCR and VIN verification, collected payment, and installed plates on the spot. A non-provisional patent application was filed with the USPTO and a trademark application was cleared. The concept was adopted as a policy platform element by a major-party Connecticut gubernatorial campaign before the project was discontinued following the 2018 election.",
    proofPoints: [
      "USPTO non-provisional patent filed August 13, 2018 (App. No. 16/102,677); converted to provisional No. 62/763,133 with Anthony Dominic Lombardi as named inventor",
      "USPTO trademark application (Serial No. 88132179) cleared with no conflicting marks",
      "Concept formally adopted by the Bob Stefanowski 2018 Connecticut gubernatorial campaign as a policy platform element",
    ],
    tags: ["GovTech", "Product Design", "Patent", "Startup", "Digital Transformation"],
    role: "Founder & President, LCL Business Solutions",
    year: "2017 — 2018",
  },
  {
    number: "02",
    name: "The Fight Don — Digital Platform & AI Operations",
    positioning:
      "A complete digital operating infrastructure and AI-enabled performance analytics platform built from zero for a growth-stage combat sports organization.",
    summary:
      "A launching combat sports organization had no technology infrastructure, no digital operating model, and no playbook — everything needed to be stood up simultaneously with active business operations. Tony designed and deployed the full collaboration and productivity stack, architected a modular training platform spanning MMA, BJJ, boxing, Muay Thai, and bare-knuckle disciplines, and built fighter performance analytics infrastructure capturing training load, progression, and fight preparation metrics. He simultaneously designed a two-phase consumer digital platform roadmap — Phase 1 monetizing sponsorships and ticket sales to self-fund Phase 2's full platform buildout — and developed a structured sponsorship pipeline converting ad hoc conversations into a tracked, measurable revenue stream.",
    proofPoints: [
      "Full digital operating stack — Slack, Google Workspace, Dropbox, Monday.com — live within the first 30 days from zero legacy foundation",
      "Two-phase consumer platform roadmap designed to self-fund the full platform buildout through early-stage revenue operations — no external capital required for Phase 1",
      "Complete digital operating model designed, standing, and actively generating revenue operations within the first 120 days of engagement",
    ],
    tags: ["AI-Enabled Operations", "Sports Technology", "Operating Model Design", "Digital Infrastructure", "Startup"],
    role: "Director, Digital Transformation & AI Operations",
    year: "2025 — Present",
  },
];

export default function Projects() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0a0a0a;
          color: #f0ede8;
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── HERO ─────────────────────────────── */
        .pj-hero {
          padding: 100px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pj-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          margin-bottom: 28px;
        }

        .pj-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 78px);
          font-weight: 600;
          line-height: 0.93;
          color: #f0ede8;
          margin-bottom: 32px;
          letter-spacing: -0.01em;
        }

        .pj-h1 em {
          color: #C8A96E;
          font-style: italic;
        }

        .pj-lead {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240,237,232,0.5);
          max-width: 560px;
        }

        /* ── RULE ─────────────────────────────── */
        .rule {
          border: none;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          margin: 0 48px;
        }

        /* ── PROJECT CARDS ────────────────────── */
        .pj-projects {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(240,237,232,0.06);
        }

        .pj-project {
          background: #0a0a0a;
          padding: 72px 48px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 72px;
          transition: background 0.2s ease;
        }

        .pj-project:hover { background: #0d0d0d; }

        /* Left column */
        .pj-left {}

        .pj-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(200,169,110,0.4);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .pj-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #f0ede8;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .pj-role {
          font-size: 11px;
          color: rgba(240,237,232,0.3);
          letter-spacing: 0.04em;
          margin-bottom: 4px;
          line-height: 1.5;
        }

        .pj-year {
          font-size: 11px;
          color: rgba(240,237,232,0.2);
          letter-spacing: 0.06em;
          margin-bottom: 24px;
        }

        .pj-tags {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pj-tag {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(200,169,110,0.65);
          border: 0.5px solid rgba(200,169,110,0.22);
          padding: 3px 10px;
          border-radius: 2px;
          width: fit-content;
        }

        /* Right column */
        .pj-right {}

        .pj-positioning {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 500;
          color: rgba(200,169,110,0.75);
          line-height: 1.45;
          margin-bottom: 28px;
          border-left: 1.5px solid rgba(200,169,110,0.25);
          padding-left: 22px;
        }

        .pj-summary {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.95;
          color: rgba(240,237,232,0.5);
          margin-bottom: 36px;
        }

        .pj-proof-label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.2);
          margin-bottom: 16px;
        }

        .pj-proof-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pj-proof-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .pj-proof-dash {
          color: #C8A96E;
          opacity: 0.5;
          flex-shrink: 0;
          font-size: 14px;
          padding-top: 1px;
        }

        .pj-proof-text {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.45);
          line-height: 1.65;
        }

        /* ── CTA ──────────────────────────────── */
        .pj-cta {
          background: #C8A96E;
          padding: 72px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .pj-cta-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: #0a0a0a;
          margin-bottom: 8px;
          line-height: 1.05;
        }

        .pj-cta-sub {
          font-size: 13px;
          font-weight: 300;
          color: rgba(10,10,10,0.58);
        }

        .pj-cta-btn {
          background: #0a0a0a;
          color: #f0ede8;
          padding: 15px 36px;
          font-size: 12.5px;
          letter-spacing: 0.08em;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }

        .pj-cta-btn:hover { opacity: 0.85; }

        /* ── FOOTER ───────────────────────────── */
        .pj-footer {
          padding: 36px 48px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 16px;
        }

        .pj-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.2);
          text-decoration: none;
        }

        .pj-footer-logo span { color: rgba(200,169,110,0.35); }

        .pj-footer-links {
          display: flex;
          gap: 28px;
        }

        .pj-footer-link {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }

        .pj-footer-link:hover { color: rgba(240,237,232,0.55); }

        /* ── RESPONSIVE ───────────────────────── */
        @media (max-width: 900px) {
          .pj-hero { padding: 72px 24px 64px; }
          .rule { margin: 0 24px; }

          .pj-project {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 48px 24px;
          }

          .pj-tags { flex-direction: row; flex-wrap: wrap; }

          .pj-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 56px 24px;
          }

          .pj-footer {
            padding: 32px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <section className="pj-hero">
          <div className="pj-eyebrow">Projects</div>
          <h1 className="pj-h1">
            Built from<br />
            <em>zero.</em>
          </h1>
          <p className="pj-lead">
            Not every project lives on a resume. These are the ones that required
            building something that didn't exist — a product, a platform, an operating
            model — from a blank page.
          </p>
        </section>

        <hr className="rule" />

        {/* Project cards */}
        <div className="pj-projects">
          {projects.map((project) => (
            <div key={project.number} className="pj-project">
              {/* Left */}
              <div className="pj-left">
                <div className="pj-num">{project.number}</div>
                <div className="pj-name">{project.name}</div>
                <div className="pj-role">{project.role}</div>
                <div className="pj-year">{project.year}</div>
                <div className="pj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pj-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="pj-right">
                <div className="pj-positioning">{project.positioning}</div>
                <p className="pj-summary">{project.summary}</p>
                <div className="pj-proof-label">Proof points</div>
                <div className="pj-proof-items">
                  {project.proofPoints.map((point, i) => (
                    <div key={i} className="pj-proof-item">
                      <div className="pj-proof-dash">—</div>
                      <div className="pj-proof-text">{point}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        {/* CTA */}
        <div className="pj-cta">
          <div>
            <div className="pj-cta-headline">Let's build something that works.</div>
            <div className="pj-cta-sub">Open to transformation leadership, consulting, and strategic advisory roles.</div>
          </div>
          <Link href="/contact" className="pj-cta-btn">Get in touch →</Link>
        </div>

        {/* Footer */}
        <footer className="pj-footer">
          <Link href="/" className="pj-footer-logo">
            tonyLombardi<span>.ai</span>
          </Link>
          <div className="pj-footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="pj-footer-link">LinkedIn</a>
            <a href="/experience" className="pj-footer-link">Experience</a>
            <a href="/contact" className="pj-footer-link">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}