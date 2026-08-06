import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salterra Enterprises — Case Study | Tony Lombardi",
  description: "How Tony Lombardi built a market-ready consulting brand from zero, later evolved into Salterra Studio, a creative experience studio.",
};

export default function SalterraPage() {
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

        .inner-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 2rem;
          line-height: 1.15;
        }

        .inner-copy {
          font-size: 1rem;
          color: #888880;
          line-height: 1.75;
          max-width: 660px;
          margin-bottom: 1rem;
        }

        .inner-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
          max-width: 640px;
        }

        .inner-list li {
          font-size: 0.95rem;
          color: #888880;
          line-height: 1.65;
          padding-left: 1.25rem;
          position: relative;
        }
        .inner-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-size: 0.75rem;
          top: 0.15em;
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

        .btn-ghost {
          background: transparent;
          color: #f0ede8;
          border-color: #2a2a2a;
        }
        .btn-ghost:hover {
          border-color: #c9a96e;
          color: #c9a96e;
        }

        .btn-large { padding: 1rem 2.5rem; font-size: 1rem; }

        .case-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c9a96e;
          background: rgba(201,169,110,0.15);
          padding: 0.25rem 0.75rem;
          border-radius: 2px;
          border: 1px solid rgba(201,169,110,0.2);
        }

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
          max-width: 680px;
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
          font-size: clamp(2.5rem, 6vw, 5rem);
          font-weight: 400;
          line-height: 1.0;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.01em;
        }

        .page-subline {
          font-size: 1.05rem;
          color: #888880;
          line-height: 1.75;
          max-width: 540px;
          margin-bottom: 2rem;
        }

        .page-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        /* Sections */
        .inner-section {
          padding-block: 7rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .inner-section--alt { background: #141414; }

        .inner-section--dark {
          background: #0a0a0a;
          border-top: 1px solid #2a2a2a;
        }

        .inner-section-content { max-width: 680px; }
        .screenshot-section {
          padding-block: 7rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .screenshot-intro {
          max-width: 680px;
          margin-bottom: 3rem;
        }

        .screenshot-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
        }

        .screenshot-card {
          border: 1px solid rgba(201, 169, 110, 0.22);
          border-radius: 10px;
          overflow: hidden;
          background: #141414;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.32);
        }

        .screenshot-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid rgba(201, 169, 110, 0.16);
          background: rgba(201, 169, 110, 0.05);
        }

        .screenshot-title {
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
        }

        .screenshot-context {
          font-size: 0.8rem;
          color: #888880;
        }

        .screenshot-image {
          display: block;
          width: 100%;
          height: auto;
        }

        @media (min-width: 900px) {
          .screenshot-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        /* Client overview */
        .cs-overview {
          padding-block: 7rem;
          background: #141414;
          border-bottom: 1px solid #2a2a2a;
          position: relative;
        }
        .cs-overview::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
        }

        .cs-overview-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .cs-stat-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid #2a2a2a;
        }

        .cs-stat { display: flex; flex-direction: column; gap: 0.4rem; }

        .cs-stat-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
        }

        .cs-stat-value {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.5;
        }

        .cs-highlight-box {
          background: rgba(201,169,110,0.06);
          border: 1px solid rgba(201,169,110,0.2);
          border-radius: 8px;
          padding: 2.5rem;
        }

        .cs-highlight-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 1rem;
        }

        .cs-highlight-box p {
          font-size: 0.925rem;
          color: #888880;
          line-height: 1.75;
        }

        /* Three-column grid */
        .trio-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 3rem;
        }

        .trio-cell {
          background: #141414;
          padding: 2rem;
        }

        .trio-cell-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 0.75rem;
        }

        .trio-cell p {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.65;
        }

        /* Approach steps */
        .cs-approach-steps {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 3rem;
        }

        .cs-step {
          display: grid;
          grid-template-columns: 3rem 1fr;
          gap: 1.5rem;
          background: #141414;
          padding: 2rem 2.5rem;
          align-items: start;
          transition: background 0.22s ease;
        }
        .cs-step:hover { background: #1c1c1c; }

        .cs-step-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.5rem;
          color: rgba(201,169,110,0.4);
          font-weight: 400;
          line-height: 1;
          padding-top: 0.2rem;
        }

        .cs-step-content { display: flex; flex-direction: column; gap: 0.5rem; }

        .cs-step-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.4;
        }

        .cs-step-desc {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.7;
        }

        /* Outcomes */
        .cs-outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
          margin-top: 4rem;
        }

        .cs-outcome-card {
          background: #141414;
          padding: 3rem 2rem;
          transition: background 0.22s ease;
        }
        .cs-outcome-card:hover { background: #1c1c1c; }

        .cs-outcome-icon {
          font-size: 1.25rem;
          color: #c9a96e;
          margin-bottom: 1.25rem;
          opacity: 0.7;
        }

        .cs-outcome-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .cs-outcome-desc {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.7;
        }

        /* Key lessons */
        .cs-lessons {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 3rem;
        }

        .cs-lesson {
          display: grid;
          grid-template-columns: 2.5rem 1fr;
          gap: 1.5rem;
          background: #141414;
          padding: 1.75rem 2rem;
          align-items: start;
          transition: background 0.22s ease;
        }
        .cs-lesson:hover { background: #1c1c1c; }

        .cs-lesson-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.3rem;
          color: rgba(201,169,110,0.35);
          font-weight: 400;
          line-height: 1;
          padding-top: 0.15rem;
        }

        .cs-lesson-text {
          font-size: 0.9rem;
          color: #888880;
          line-height: 1.7;
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

        .page-cta-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

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

                /* Proof / artifact panels */
        .cs-artifact-panel {
          margin-top: 3rem;
          border: 1px solid rgba(201,169,110,0.25);
          border-radius: 8px;
          overflow: hidden;
          background: rgba(201,169,110,0.03);
        }

        .cs-artifact-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.75rem;
          background: rgba(201,169,110,0.08);
          border-bottom: 1px solid rgba(201,169,110,0.15);
        }

        .cs-artifact-badge {
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #0d0d0d;
          background: #c9a96e;
          padding: 0.2rem 0.6rem;
          border-radius: 2px;
        }

        .cs-artifact-file {
          font-size: 0.8rem;
          color: rgba(201,169,110,0.7);
          font-family: 'Inter', monospace;
          letter-spacing: 0.02em;
        }

        .cs-artifact-body {
          padding: 1.5rem 1.75rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .cs-artifact-row {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1.25rem;
          align-items: start;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .cs-artifact-row:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .cs-artifact-label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9a96e;
          padding-top: 0.15rem;
        }

        .cs-artifact-value {
          font-size: 0.9rem;
          color: #888880;
          line-height: 1.65;
        }

        /* Pull quote */
        .cs-pull-quote {
          margin-top: 2.5rem;
          padding: 1.5rem 2rem;
          border-left: 3px solid #c9a96e;
          background: rgba(201,169,110,0.04);
          border-radius: 0 6px 6px 0;
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.2rem;
          font-weight: 400;
          font-style: italic;
          color: rgba(240,237,232,0.75);
          line-height: 1.55;
        }

        /* Service architecture cards */
        .cs-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 2.5rem;
        }

        .cs-service-card {
          background: #141414;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          transition: background 0.22s ease;
        }
        .cs-service-card:hover { background: #1c1c1c; }

        .cs-service-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 400;
          color: rgba(201,169,110,0.4);
          line-height: 1;
        }

        .cs-service-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #ffffff;
          line-height: 1.35;
        }

        .cs-service-scope {
          font-size: 0.825rem;
          color: #888880;
          line-height: 1.65;
        }

        @media (max-width: 768px) {
          .cs-artifact-row { grid-template-columns: 1fr; gap: 0.4rem; }
          .cs-service-grid { grid-template-columns: 1fr; }
        }

                /* Responsive */
        @media (max-width: 900px) {
          .cs-overview-grid { grid-template-columns: 1fr; }
          .cs-stat-row { grid-template-columns: 1fr; }
          .trio-grid { grid-template-columns: 1fr; }
          .cs-outcomes-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .page-hero { padding-top: 2rem; }
          .cs-step { grid-template-columns: 2rem 1fr; padding: 1.5rem; }
          .cs-outcome-card { padding: 2rem; }
        }
      `}</style>

      <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
        <Navbar />
        <ScrollAnimations />

        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content fade-up">
              <p className="page-eyebrow">Case Study</p>
              <h1 className="page-headline">Salterra Enterprises</h1>
              <p className="page-subline">From experienced operator to market-ready consulting brand. A ground-up build — positioning, website, service architecture, and practical launch support. The brand has since evolved into Salterra Studio, shown in the screenshots below.</p>
              <div className="page-tags">
                <span className="case-tag">Brand Positioning</span>
                <span className="case-tag">Website Build</span>
                <span className="case-tag">Service Architecture</span>
                <span className="case-tag">CTA Flow</span>
                <span className="case-tag">Launch Support</span>
              </div>
            </div>
          </div>
        </section>

        {/* Evolution note */}
        <section className="cs-overview" style={{ paddingTop: 0, paddingBottom: "2rem" }}>
          <div className="container">
            <div className="cs-highlight-box fade-up">
              <span className="cs-highlight-label">Where the brand stands now</span>
              <p>The original build documented below launched Salterra as an independent consulting brand. Since then, the brand has evolved into <strong>Salterra Studio</strong>, a creative experience studio aligning strategy, creativity, and precision, still built and maintained on the same foundation established in this engagement. The screenshots on this page reflect the current live site.</p>
            </div>
          </div>
        </section>

        {/* Client overview */}
        <section className="cs-overview">
          <div className="container">
            <div className="cs-overview-grid">
              <div className="fade-up">
                <div className="section-label">Client Overview (Original Engagement)</div>
                <p className="inner-copy">Salterra Enterprises began as the independent consulting brand of a senior financial services operations leader with decades of enterprise-level experience spanning banking, insurance, and financial operations management.</p>
                <p className="inner-copy">The client had spent a career building and running complex operational systems inside large organizations. The knowledge was real, the track record was proven — but none of it existed in a form that an independent market could see, evaluate, or hire.</p>
                <div className="cs-stat-row">
                  <div className="cs-stat">
                    <span className="cs-stat-label">Client Type</span>
                    <span className="cs-stat-value">Senior financial services operations leader launching independently</span>
                  </div>
                  <div className="cs-stat">
                    <span className="cs-stat-label">Industry</span>
                    <span className="cs-stat-value">Financial services operations / consulting</span>
                  </div>
                  <div className="cs-stat">
                    <span className="cs-stat-label">Scope</span>
                    <span className="cs-stat-value">Brand positioning, website design and build, service architecture, launch strategy</span>
                  </div>
                  <div className="cs-stat">
                    <span className="cs-stat-label">Outcome</span>
                    <span className="cs-stat-value">Market-ready consulting brand — launched</span>
                  </div>
                </div>
              </div>
              <div className="fade-up">
                <div className="cs-highlight-box">
                  <span className="cs-highlight-label">The core problem</span>
                  <p>Experienced operators who go independent often discover that institutional credibility doesn't automatically translate into market credibility. The skills are real. The positioning is invisible. The website doesn't exist. The service offerings have never been named, scoped, or priced. Everything that made them effective inside a large organization needs to be rebuilt — from scratch — for an independent context.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Project screenshots */}
        <section className="screenshot-section">
          <div className="container">
            <div className="screenshot-intro fade-up">
              <div className="section-label">Project Proof</div>
              <h2 className="inner-heading">The work, not just the description</h2>
              <p className="inner-copy">
                Salterra needed more than a website. It needed a credible market presence that made the client&apos;s operational depth visible, understandable, and easy to act on.
              </p>
            </div>

            <div className="screenshot-grid">
              <div className="screenshot-card fade-up">
                <div className="screenshot-card-header">
                  <span className="screenshot-title">Homepage</span>                
                </div>
                <img
                  className="screenshot-image"
                  src="/projects/salterra-homepage.png"
                  alt="Salterra Studio homepage screenshot"
                />
              </div>

              <div className="screenshot-card fade-up">
                <div className="screenshot-card-header">
                  <span className="screenshot-title">Brand Presence</span>                  
                </div>
                <img
                  className="screenshot-image"
                  src="/projects/salterra-services.png"
                  alt="Salterra Studio brand presence section screenshot"
                />
              </div>

              <div className="screenshot-card fade-up">
                <div className="screenshot-card-header">
                  <span className="screenshot-title">The Team</span>                  
                </div>
                <img
                  className="screenshot-image"
                  src="/projects/salterra-about.png"
                  alt="Salterra Studio team section screenshot"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Challenge */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">The Challenge</div>
              <h2 className="inner-heading">An experienced leader with no independent market presence</h2>
              <p className="inner-copy">When the client came to me, they had no website, no defined service offerings, and no positioning statement. They had decades of results — but those results lived inside organizations that owned the credit. Stepping out independently meant starting from zero in terms of visible credibility.</p>
              <p className="inner-copy">The challenge wasn't capability. It was translation. How do you take twenty-plus years of enterprise operations expertise and turn it into something a client can read, understand, and confidently act on — without a resume, a job title, or an institutional brand behind it?</p>
              <div className="trio-grid">
                <div className="trio-cell">
                  <span className="trio-cell-label">No digital presence</span>
                  <p>No website. No professional online identity. Invisible to anyone who searched for what they do.</p>
                </div>
                <div className="trio-cell">
                  <span className="trio-cell-label">No service structure</span>
                  <p>Years of expertise with no framework for how to scope, sell, or deliver it as a consulting engagement.</p>
                </div>
                <div className="trio-cell">
                  <span className="trio-cell-label">No positioning</span>
                  <p>Deep credibility with no language to express it — nothing that connected experience to client need.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Approach</div>
              <h2 className="inner-heading">Position first. Build second. Launch third.</h2>
              <p className="inner-copy">Every decision on this engagement flowed from a single rule: don't touch the website until the positioning is right. A well-designed site built on weak positioning is just expensive noise. The work had to start with what the client actually does, for whom, and why it matters.</p>
              <div className="cs-approach-steps">
                <div className="cs-step fade-up">
                  <span className="cs-step-num">01</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Discovery — extract the real positioning from the experience</span>
                    <span className="cs-step-desc">Extended working sessions to pull out the actual expertise — not what the client thought they should say, but what they actually do and what makes it different. Most of the real positioning material was buried in stories about past work, not resume language.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">02</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Define the ideal client — who this is actually for</span>
                    <span className="cs-step-desc">Identified the specific types of organizations and leaders most likely to benefit, most likely to engage, and most likely to value what this client brings. Specificity here is the difference between a general consulting brand and one that wins the right clients.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">03</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Structure the services — scope what gets delivered</span>
                    <span className="cs-step-desc">Mapped the client's experience into three clear service areas. Named them, scoped them, and framed each around client outcomes — not deliverables. This is what makes a consulting engagement something a client can evaluate before they say yes.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">04</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Build the website — architecture, copy, and CTA flow</span>
                    <span className="cs-step-desc">Designed and built the website with a clear conversion path: problem to credibility to services to contact. Copy written to qualify the right clients, not just attract volume. Every element earned its place.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">05</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Launch — practical steps to go to market with confidence</span>
                    <span className="cs-step-desc">Developed a practical launch plan: professional network outreach, LinkedIn positioning aligned to the brand, and initial conversation frameworks for turning existing relationships into early client conversations.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Positioning strategy */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Positioning Strategy</div>
              <h2 className="inner-heading">Credibility you can read, not just sense</h2>
              <p className="inner-copy">The goal of the positioning work was to make the client's credibility legible. Enterprise operators who go independent often get trapped between two failure modes: being too generic ("strategic advisor") or too jargon-heavy ("driving operational excellence through stakeholder-aligned transformation"). Neither works.</p>
              <p className="inner-copy">The positioning for Salterra was built around operational specificity — what the client actually knows, at the level of detail that signals real expertise. Financial services operations has its own language, its own failure modes, and its own markers of quality. The positioning leaned into that specificity rather than softening it for a general audience.</p>
              <ul className="inner-list">
                <li>Led with operational depth and institutional experience — not general advisory positioning</li>
                <li>Named the specific types of organizations and situations the client works best with</li>
                <li>Framed services around the client's problem, not the consultant's process</li>
                <li>Kept language direct and concrete — no generic consultant copy</li>
                <li>Built differentiation on depth and relevance, not claims of uniqueness</li>
              </ul>

              <div className="cs-artifact-panel fade-up">
                <div className="cs-artifact-header">
                  <span className="cs-artifact-badge">Positioning Output</span>
                </div>
                <div className="cs-artifact-body">
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Primary Positioning</span>
                    <span className="cs-artifact-value">Senior financial services operations consulting — for organizations navigating complex operational transitions, compliance requirements, and performance gaps that need someone who has run these systems from the inside.</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Ideal Client</span>
                    <span className="cs-artifact-value">Regional banks, insurance carriers, and financial operations teams that need senior-level operational expertise without a full-time executive hire. Decision-makers who value depth over generalist advisory.</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Key Differentiator</span>
                    <span className="cs-artifact-value">Operational depth from inside enterprise organizations — not strategic advisory positioning, not methodology-first consulting — direct pattern recognition from decades in the roles that built and ran these systems.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Website architecture */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Website Architecture</div>
              <h2 className="inner-heading">Simple. Credible. Converts.</h2>
              <p className="inner-copy">A consulting website for an independent operator has one job: make the right client confident enough to reach out. It doesn't need to be complex. It needs to be clear.</p>
              <p className="inner-copy">The architecture was deliberately lean. One page for launch, structured around a single conversion path. The copy at every stage was written to either qualify the reader in or let them qualify themselves out — both outcomes are useful.</p>
              <blockquote className="cs-pull-quote fade-up">
                "The right clients read it and recognize themselves. The wrong ones move on. Both outcomes are correct."
              </blockquote>

              <div className="trio-grid">
                <div className="trio-cell">
                  <span className="trio-cell-label">Structure</span>
                  <p>Single-page architecture for launch speed. Clean narrative flow: context to credibility to services to contact. No clutter.</p>
                </div>
                <div className="trio-cell">
                  <span className="trio-cell-label">Copy approach</span>
                  <p>Every section written to move the right reader forward, not to impress a general audience. Qualifying copy beats volume copy.</p>
                </div>
                <div className="trio-cell">
                  <span className="trio-cell-label">CTA flow</span>
                  <p>Single primary CTA throughout — no decision paralysis. Contact path is visible and friction-free for a qualified reader.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service design */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Service Design</div>
              <h2 className="inner-heading">Expertise structured for the client's decision</h2>
              <p className="inner-copy">Independent consultants often struggle to name their services because their expertise is broad and contextual — it adapts to the situation. That's actually a strength. The job of service design is to create enough structure that a client can make a decision, while leaving enough room to actually solve the problem correctly.</p>
              <p className="inner-copy">Three service areas were designed and scoped for Salterra, each anchored to a specific type of engagement the client had strong track record in:</p>
              <ul className="inner-list">
                <li>Operational assessment and design — reviewing and restructuring operational models for efficiency, resilience, and performance</li>
                <li>Transformation leadership and advisory — providing senior-level operational leadership through periods of change</li>
                <li>Implementation support — hands-on engagement to execute on operational improvements, not just recommend them</li>
              </ul>
              <div className="cs-service-grid fade-up">
                <div className="cs-service-card">
                  <span className="cs-service-num">01</span>
                  <h4 className="cs-service-name">Operational Assessment & Design</h4>
                  <p className="cs-service-scope">Reviewing and restructuring operational models for efficiency, resilience, and measurable performance improvement.</p>
                </div>
                <div className="cs-service-card">
                  <span className="cs-service-num">02</span>
                  <h4 className="cs-service-name">Transformation Leadership</h4>
                  <p className="cs-service-scope">Senior-level operational leadership through periods of change — transition, integration, or significant process redesign.</p>
                </div>
                <div className="cs-service-card">
                  <span className="cs-service-num">03</span>
                  <h4 className="cs-service-name">Implementation Support</h4>
                  <p className="cs-service-scope">Hands-on engagement to execute on operational improvements — not just recommendations, but the follow-through to make them real.</p>
                </div>
              </div>
              <p className="inner-copy" style={{ marginTop: "2rem" }}>Each service was scoped as a client outcome, not a deliverable list. This matters because clients hire for results, not for process. The scoping also includes enough specificity to enable confident sales conversations without boxing the client into a rigid methodology.</p>
            </div>
          </div>
        </section>

        {/* Launch strategy */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Launch Strategy</div>
              <h2 className="inner-heading">Practical. Not theoretical.</h2>
              <p className="inner-copy">Launch strategy for an independent consulting brand is almost always the same answer: start with your network, not with strangers. Enterprise operators have spent years building relationships with potential clients, referral partners, and former colleagues who already know their work. The market already exists. The job is to activate it.</p>
              <p className="inner-copy">The launch approach for Salterra was structured around three phases:</p>
              <div className="cs-approach-steps">
                <div className="cs-step fade-up">
                  <span className="cs-step-num">1</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Soft launch to professional network</span>
                    <span className="cs-step-desc">Personal outreach to former colleagues, clients, and contacts with a direct message about the new direction. Not a mass announcement — individual conversations with people positioned to refer or engage.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">2</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">LinkedIn positioning aligned to the brand</span>
                    <span className="cs-step-desc">Profile updated to match the consulting brand positioning. Content strategy built around demonstrating specific operational expertise — not career updates or generic professional content.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">3</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Conversation frameworks for inbound and outreach</span>
                    <span className="cs-step-desc">Simple language templates for describing what you do, what a good engagement looks like, and how to start a conversation — for both inbound inquiries and proactive outreach.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="inner-section inner-section--dark">
          <div className="container">
            <div className="section-label fade-up">Outcome</div>
            <h2 className="inner-heading fade-up" style={{ maxWidth: "600px" }}>A consulting brand that can hold up to enterprise scrutiny</h2>
            <div className="cs-outcomes-grid">
              <div className="cs-outcome-card fade-up">
                <div className="cs-outcome-icon">◎</div>
                <h3 className="cs-outcome-title">Market-ready and launched</h3>
                <p className="cs-outcome-desc">Salterra went from zero to market-ready in a single coordinated build. Not a soft launch without substance — a positioned, professional brand ready for enterprise conversations.</p>
              </div>
              <div className="cs-outcome-card fade-up">
                <div className="cs-outcome-icon">◎</div>
                <h3 className="cs-outcome-title">Positioning that qualifies clients</h3>
                <p className="cs-outcome-desc">The website and positioning work together to filter for the right type of engagement. The right clients read it and recognize themselves. The wrong ones move on. Both outcomes are correct.</p>
              </div>
              <div className="cs-outcome-card fade-up">
                <div className="cs-outcome-icon">◎</div>
                <h3 className="cs-outcome-title">Confident sales conversations</h3>
                <p className="cs-outcome-desc">Defined service areas and clear positioning gave the client a foundation for talking about their work with confidence — not selling, describing. The structure does the selling.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key lessons */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Key Lessons</div>
              <h2 className="inner-heading">What this engagement reinforced</h2>
              <div className="cs-lessons">
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">1</span>
                  <p className="cs-lesson-text">Experienced professionals often underestimate how much translation work going independent requires. Institutional credibility is real — but it doesn't travel. It has to be rebuilt in a form the independent market can read.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">2</span>
                  <p className="cs-lesson-text">The website isn't the product. The positioning is. A clean, well-built website communicating weak positioning will underperform a simple site communicating strong positioning every time.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">3</span>
                  <p className="cs-lesson-text">Service structure enables confident sales conversations. When a consultant can describe what they do in a scoped, outcome-oriented way, the client can say yes. Vague expertise is hard to buy.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">4</span>
                  <p className="cs-lesson-text">Simplicity wins at launch. A one-page site with clear positioning and a clean conversion path outperforms a complex site with vague messaging. Add complexity after the first clients are in the door, not before.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">5</span>
                  <p className="cs-lesson-text">Network is the first market. Enterprise operators go independent with a built-in advantage most founders don't have — a decade or more of professional relationships. The launch strategy should start there.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta">
          <div className="page-cta-inner fade-up">
            <h2 className="page-cta-headline">Building something similar?</h2>
            <p className="page-cta-copy">If you're stepping out on your own and need to build the brand, the positioning, and the presence that matches what you actually do — let's talk.</p>
            <div className="page-cta-actions">
              <Link href="/work-with-me" className="btn btn-primary btn-large">Work With Me</Link>
              <Link href="/projects" className="btn btn-ghost">See More Projects</Link>
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
