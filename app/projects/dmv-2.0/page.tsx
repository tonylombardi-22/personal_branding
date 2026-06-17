import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMV 2.0 — Case Study | Tony Lombardi",
  description: "How Tony Lombardi led the design and build of DMV 2.0 — a mobile-first vehicle registration platform designed to eliminate DMV wait times in Connecticut.",
};

export default function DMV20Page() {
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
          content: '--';
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

        .duo-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 3rem;
        }

        .duo-cell {
          background: #141414;
          padding: 2.5rem 2rem;
        }

        .duo-cell-label {
          display: block;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 1rem;
        }

        .duo-cell ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .duo-cell ul li {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.6;
          padding-left: 1rem;
          position: relative;
        }
        .duo-cell ul li::before {
          content: '--';
          position: absolute;
          left: 0;
          color: rgba(201,169,110,0.5);
          font-size: 0.7rem;
          top: 0.2em;
        }

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

        .cs-service-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
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

        .cs-data-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
          margin-top: 3rem;
        }

        .cs-data-cell {
          background: #141414;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .cs-data-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 2.2rem;
          font-weight: 400;
          color: #c9a96e;
          line-height: 1;
        }

        .cs-data-label {
          font-size: 0.8rem;
          color: #888880;
          line-height: 1.5;
        }

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

        @media (max-width: 900px) {
          .cs-overview-grid { grid-template-columns: 1fr; }
          .cs-stat-row { grid-template-columns: 1fr; }
          .trio-grid { grid-template-columns: 1fr; }
          .duo-grid { grid-template-columns: 1fr; }
          .cs-outcomes-grid { grid-template-columns: 1fr; }
          .cs-service-grid { grid-template-columns: 1fr; }
          .cs-data-row { grid-template-columns: 1fr; }
          .cs-artifact-row { grid-template-columns: 1fr; gap: 0.4rem; }
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
              <h1 className="page-headline">DMV 2.0</h1>
              <p className="page-subline">A mobile-first vehicle registration platform built to eliminate DMV wait times. The DMV comes to the customer, not the other way around.</p>
              <div className="page-tags">
                <span className="case-tag">Venture Build</span>
                <span className="case-tag">Product Design</span>
                <span className="case-tag">Workflow Engineering</span>
                <span className="case-tag">Mobile Platform</span>
                <span className="case-tag">Public Sector Innovation</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project overview */}
        <section className="cs-overview">
          <div className="container">
            <div className="cs-overview-grid">
              <div className="fade-up">
                <div className="section-label">Project Overview</div>
                <p className="inner-copy">DMV 2.0 was a venture concept built in 2018 under LCL Business Solutions, LLC. The premise was simple: the vehicle registration process in Connecticut was broken, demand for a better option was validated, and the technology to fix it existed.</p>
                <p className="inner-copy">The concept proposed a licensed mobile registration service. Trained field representatives would travel to the customer, verify the vehicle and documents on-site, transmit everything digitally to the DMV, and install plates before leaving. The customer would never set foot in a DMV office.</p>
                <div className="cs-stat-row">
                  <div className="cs-stat">
                    <span className="cs-stat-label">Entity</span>
                    <span className="cs-stat-value">LCL Business Solutions, LLC</span>
                  </div>
                  <div className="cs-stat">
                    <span className="cs-stat-label">Year</span>
                    <span className="cs-stat-value">2018</span>
                  </div>
                  <div className="cs-stat">
                    <span className="cs-stat-label">Role</span>
                    <span className="cs-stat-value">Founder and lead. Product design, business model, investor materials.</span>
                  </div>
                  <div className="cs-stat">
                    <span className="cs-stat-label">Status</span>
                    <span className="cs-stat-value">Proof of concept. Full documentation, wireframes, and investor pitch produced.</span>
                  </div>
                </div>
              </div>
              <div className="fade-up">
                <div className="cs-highlight-box">
                  <span className="cs-highlight-label">The core question</span>
                  <p>Four hours for a simple vehicle registration transaction. That was the average wait at Connecticut DMV offices in 2018 and had been for years, despite a major software upgrade in 2015. The question was not whether the problem was real. It was whether you could build a service model to eliminate the wait entirely.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">The Problem</div>
              <h2 className="inner-heading">A public-sector experience unchanged for decades</h2>
              <p className="inner-copy">Vehicle registration in Connecticut followed a simple but painful sequence: gather paperwork, drive to a DMV branch, wait in line, complete the transaction, leave. If anything was missing, repeat the process.</p>
              <p className="inner-copy">A software upgrade in 2015 was supposed to fix it. It did not. Lines remained long, satisfaction remained low, and political pressure mounted. The problem was not operational. It was structural — the fixed-location model created a bottleneck that no amount of software could fully solve.</p>
              <div className="trio-grid">
                <div className="trio-cell">
                  <span className="trio-cell-label">Wait times</span>
                  <p>Up to four hours for a transaction that takes minutes to execute. A throughput problem, not a complexity problem.</p>
                </div>
                <div className="trio-cell">
                  <span className="trio-cell-label">Paper-intensive</span>
                  <p>Multiple physical documents required, no pre-validation, and high error rates from incomplete submissions causing repeat visits.</p>
                </div>
                <div className="trio-cell">
                  <span className="trio-cell-label">Fixed-location model</span>
                  <p>Service only delivered at branch locations during limited hours. No flexibility for the customer's schedule or situation.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Concept */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">The Concept</div>
              <h2 className="inner-heading">What if the DMV came to you?</h2>
              <p className="inner-copy">The core insight was structural. The bottleneck was not the transaction itself. It was the location model. Move the transaction to the customer, remove the branch from the equation, and the wait drops to zero.</p>
              <p className="inner-copy">DMV 2.0 proposed two service tiers built on a licensed public-private partnership with the Connecticut DMV:</p>
              <div className="cs-service-grid fade-up">
                <div className="cs-service-card">
                  <span className="cs-service-num">01</span>
                  <h4 className="cs-service-name">DMV 2.0 Standard</h4>
                  <p className="cs-service-scope">Remote concierge service. A trained field representative comes to the customer at their preferred location — home, dealership, or workplace — and completes the full registration on-site.</p>
                </div>
                <div className="cs-service-card">
                  <span className="cs-service-num">02</span>
                  <h4 className="cs-service-name">DMV 2.0 Premier</h4>
                  <p className="cs-service-scope">Scheduled appointment at an existing DMV branch. Customer is seen immediately with zero wait time. A concierge lane inside the existing DMV infrastructure.</p>
                </div>
              </div>
              <blockquote className="cs-pull-quote fade-up">
                "Being the first in line at the DMV has never happened. Until today."
              </blockquote>
            </div>
          </div>
        </section>

        {/* The Build */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">The Build</div>
              <h2 className="inner-heading">From concept to investor-ready in six months</h2>
              <p className="inner-copy">Building DMV 2.0 from zero required a complete venture architecture, not just a product idea. That meant validating demand, designing the full product, documenting every workflow, building the business model, and producing materials ready for investor scrutiny.</p>
              <div className="cs-approach-steps">
                <div className="cs-step fade-up">
                  <span className="cs-step-num">01</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Market research and demand validation</span>
                    <span className="cs-step-desc">Surveyed Connecticut residents to test the core hypothesis: that a meaningful share of DMV customers would pay a premium to avoid the wait. The data confirmed it. 47% said yes, with willingness to pay up to $40 per transaction.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">02</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Customer journey redesign</span>
                    <span className="cs-step-desc">Mapped the complete current-state and future-state journeys side by side. The current state required seven steps from vehicle purchase to completed registration. The future state collapsed most of them: schedule online, upload preliminary info, representative arrives, plates go on.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">03</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Two-sided platform design</span>
                    <span className="cs-step-desc">Designed the customer-facing web and mobile platform alongside the employee mobile platform as parallel workflows with defined interaction points. Customer books, pays, and uploads. Employee navigates, scans, captures, transmits, and installs.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">04</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Workflow engineering and requirements documentation</span>
                    <span className="cs-step-desc">Produced detailed workflow documentation for every step of both the buyer and employee experiences, plus a full requirements traceability matrix mapping each functional requirement to priority, sprint, and implementation approach.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">05</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Wireframe design and prototype</span>
                    <span className="cs-step-desc">Built complete wireframes in Adobe XD for both the buyer platform and the employee mobile app. Every screen, interaction, and edge case covered. Detailed enough to hand to a development team and start building.</span>
                  </div>
                </div>
                <div className="cs-step fade-up">
                  <span className="cs-step-num">06</span>
                  <div className="cs-step-content">
                    <span className="cs-step-title">Business model and investor pitch</span>
                    <span className="cs-step-desc">Built the full business model covering revenue structure, cost breakdown, market sizing, and projections. Produced a complete investor pitch deck and presented the concept to state stakeholders as a public-private partnership opportunity for Connecticut.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research and Validation */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Research and Validation</div>
              <h2 className="inner-heading">The demand was there, and it was measurable</h2>
              <p className="inner-copy">The hypothesis going in was that people dislike waiting at the DMV enough to pay to avoid it. Market research confirmed it. More than that, it revealed a willingness-to-pay number strong enough to support a profitable service model at scale.</p>
              <div className="cs-data-row fade-up">
                <div className="cs-data-cell">
                  <span className="cs-data-num">47%</span>
                  <span className="cs-data-label">of CT residents surveyed willing to pay a convenience fee to skip the DMV line</span>
                </div>
                <div className="cs-data-cell">
                  <span className="cs-data-num">$40</span>
                  <span className="cs-data-label">average willingness-to-pay among CT residents to eliminate the DMV trip</span>
                </div>
                <div className="cs-data-cell">
                  <span className="cs-data-num">425K</span>
                  <span className="cs-data-label">private vehicle registrations in Connecticut annually (2017 baseline)</span>
                </div>
              </div>
              <p className="inner-copy" style={{ marginTop: "2rem" }}>The market was not uncharted. Services like YoGov, SameOleLineDudes, and LineAngel already charged $25 or more just to hold a spot in line. DMV 2.0 did not skip the line. It eliminated the trip entirely.</p>
              <div className="cs-artifact-panel fade-up">
                <div className="cs-artifact-header">
                  <span className="cs-artifact-badge">Market Validation</span>
                  <span className="cs-artifact-file">DMV 2.0 Cost Benefit Analysis</span>
                </div>
                <div className="cs-artifact-body">
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Market Size</span>
                    <span className="cs-artifact-value">425,000 private vehicle registrations in Connecticut annually (2017 baseline)</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Penetration Target</span>
                    <span className="cs-artifact-value">45% market penetration = 191,250 registrations captured annually</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Revenue Projection</span>
                    <span className="cs-artifact-value">$4.8M annually at a $25 service fee with 45% market penetration</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Comparable Market</span>
                    <span className="cs-artifact-value">Existing line-waiting services charged $25+ per hour just to hold a DMV spot. DMV 2.0 eliminated the trip entirely.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Design */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Product Design</div>
              <h2 className="inner-heading">Two platforms. One seamless transaction.</h2>
              <p className="inner-copy">A two-sided marketplace requires two complete products. Both have to work for the model to function. The customer experience and the employee experience were designed in parallel, with every handoff between them explicitly mapped.</p>
              <div className="duo-grid fade-up">
                <div className="duo-cell">
                  <span className="duo-cell-label">Customer Platform</span>
                  <ul>
                    <li>Account registration and vehicle information entry</li>
                    <li>Appointment scheduling with live resource availability</li>
                    <li>VIN entry with automated vehicle data population</li>
                    <li>Sales tax calculation and payment processing</li>
                    <li>Automated document checklist via email and SMS</li>
                    <li>CarFax report generation on payment confirmation</li>
                    <li>Real-time status updates through the transaction</li>
                  </ul>
                </div>
                <div className="duo-cell">
                  <span className="duo-cell-label">Employee Mobile Platform</span>
                  <ul>
                    <li>Daily assignment dashboard with route optimization</li>
                    <li>One-tap navigation to appointment location</li>
                    <li>VIN barcode scanning via phone camera</li>
                    <li>Document capture and upload using phone camera</li>
                    <li>Digital submission to DMV with status tracking</li>
                    <li>Approval notification and license plate entry</li>
                    <li>Appointment completion and archive workflow</li>
                  </ul>
                </div>
              </div>
              <p className="inner-copy" style={{ marginTop: "2rem" }}>The employee experience followed an Uber-like model for the field side: navigate to the customer, execute the transaction, complete and archive. The customer experience was designed to feel like booking a premium concierge service, not scheduling a government appointment.</p>
            </div>
          </div>
        </section>

        {/* Business Model */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Business Model</div>
              <h2 className="inner-heading">Revenue structure built for partnership, not competition</h2>
              <p className="inner-copy">The business model was designed around one strategic constraint: do not compete with the DMV, partner with it. That meant sharing revenue with the state and positioning the service as capacity expansion rather than replacement. A union-friendly model that created no job eliminations was critical to the pitch.</p>
              <div className="cs-artifact-panel fade-up">
                <div className="cs-artifact-header">
                  <span className="cs-artifact-badge">Business Model</span>
                  <span className="cs-artifact-file">DMV 2.0 Revenue Structure</span>
                </div>
                <div className="cs-artifact-body">
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Customer Pays</span>
                    <span className="cs-artifact-value">Connecticut sales tax on vehicle + standard DMV registration fee + DMV 2.0 service fee</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Revenue Split</span>
                    <span className="cs-artifact-value">10% to DMV (new state revenue), 40% to field representative, 50% net to LCL Business Solutions</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Partnership Rationale</span>
                    <span className="cs-artifact-value">DMV receives new revenue and reduced branch traffic. Field reps earn flexible income. State expands registration capacity without capital investment.</span>
                  </div>
                  <div className="cs-artifact-row">
                    <span className="cs-artifact-label">Expansion Paths</span>
                    <span className="cs-artifact-value">Dealership partnerships, insurance integration, title and lien services, adjacent state markets</span>
                  </div>
                </div>
              </div>
              <p className="inner-copy" style={{ marginTop: "2rem" }}>The pitch to Connecticut was explicitly bipartisan: a privatization model that created jobs, reduced DMV friction, generated new state revenue, and modernized citizen experience without eliminating a single DMV employee.</p>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="inner-section inner-section--dark">
          <div className="container">
            <div className="section-label fade-up">Outcome</div>
            <h2 className="inner-heading fade-up" style={{ maxWidth: "600px" }}>Full venture architecture. Proof of concept complete.</h2>
            <div className="cs-outcomes-grid">
              <div className="cs-outcome-card fade-up">
                <div className="cs-outcome-icon">&#9678;</div>
                <h3 className="cs-outcome-title">Investor-ready documentation</h3>
                <p className="cs-outcome-desc">Complete venture package produced: market research, product design, workflow documentation, requirements traceability matrix, wireframes, business model, and investor pitch deck.</p>
              </div>
              <div className="cs-outcome-card fade-up">
                <div className="cs-outcome-icon">&#9678;</div>
                <h3 className="cs-outcome-title">Validated demand</h3>
                <p className="cs-outcome-desc">47% of Connecticut residents surveyed expressed willingness to pay a premium. Market sizing confirmed a $4.8M annual revenue opportunity at conservative penetration rates.</p>
              </div>
              <div className="cs-outcome-card fade-up">
                <div className="cs-outcome-icon">&#9678;</div>
                <h3 className="cs-outcome-title">Enterprise thinking applied to public-sector friction</h3>
                <p className="cs-outcome-desc">DMV 2.0 demonstrated that the same systems thinking used to redesign enterprise operations can fix broken public-sector services when approached as a partnership rather than a replacement.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Lessons */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Key Lessons</div>
              <h2 className="inner-heading">What this venture reinforced</h2>
              <div className="cs-lessons">
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">1</span>
                  <p className="cs-lesson-text">Public-sector friction creates private-sector opportunity, but only if you approach it as a partner. The DMV 2.0 pitch was viable because it made the DMV better, not because it replaced it. A competitive positioning against a government entity is a dead end.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">2</span>
                  <p className="cs-lesson-text">Validate willingness to pay before building the product. The market research was not decoration. It was the foundation the entire business model stood on. Knowing 47% would pay, and at what price, made everything else calculable.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">3</span>
                  <p className="cs-lesson-text">Two-sided marketplace design is a sequencing problem as much as a product problem. The customer experience and the employee experience have to be designed together, not one after the other, because every interaction on one side creates a dependency on the other.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">4</span>
                  <p className="cs-lesson-text">Public-private partnerships add a timeline layer that product development does not. Government procurement and political buy-in operate on different cycles than software builds. The product was ready faster than the institutional path could accommodate.</p>
                </div>
                <div className="cs-lesson fade-up">
                  <span className="cs-lesson-num">5</span>
                  <p className="cs-lesson-text">The operating principles that drive enterprise transformation apply at the venture stage too. Structured problem framing, validated assumptions, designed workflows, and a clear business model are not just corporate tools. They are the difference between a fundable concept and a good idea.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta">
          <div className="page-cta-inner fade-up">
            <h2 className="page-cta-headline">Have a problem worth solving?</h2>
            <p className="page-cta-copy">The best opportunities are usually hiding inside broken experiences that everyone accepts as normal. If you have found one and want to think through it, let&apos;s talk.</p>
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
