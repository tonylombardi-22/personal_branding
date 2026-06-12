import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tony Lombardi — Builder. Designer. Advisor.",
  description: "When the path isn't obvious, I build the system that gets people moving again.",
};

export default function Home() {
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

        img, svg { display: block; max-width: 100%; }
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

        .section-label--light { color: rgba(201,169,110,0.75); }

        .section-heading {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.8rem, 3vw, 2.6rem);
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 4rem;
          line-height: 1.2;
        }

        /* Buttons */
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
          box-shadow: 0 0 28px rgba(201,169,110,0.35);
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

        .btn-outline-light {
          background: transparent;
          color: #ffffff;
          border-color: rgba(255,255,255,0.3);
        }
        .btn-outline-light:hover {
          border-color: #c9a96e;
          color: #c9a96e;
        }

        .btn-large { padding: 1rem 2.5rem; font-size: 1rem; }

        /* ─── Hero ─── */
        .hero {
          padding-top: 2.5rem;
          padding-bottom: 3rem;
          min-height: calc(100svh - 76px);
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background:
            radial-gradient(ellipse 70% 60% at 75% 30%, rgba(201,169,110,0.10) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 15% 80%, rgba(201,169,110,0.05) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 50% 50%, rgba(201,169,110,0.03) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-layout {
          display: grid;
          grid-template-columns: 1fr 500px;
          gap: 3.5rem;
          align-items: center;
          position: relative;
        }

        .hero-content { position: relative; }

        .hero-eyebrow {
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 1rem;
        }

        .hero-headline {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 400;
          line-height: 0.95;
          color: #ffffff;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }

        .hero-copy {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: #888880;
          max-width: 480px;
          margin-bottom: 2rem;
          line-height: 1.75;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        /* Portrait */
        .hero-portrait-col {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-portrait-wrap {
          position: relative;
        }

        .hero-portrait-frame {
          position: relative;
          width: 460px;
          height: 460px;
          border-radius: 6px;
          overflow: hidden;
          border: 1px solid rgba(201,169,110,0.35);
          box-shadow:
            0 0 0 1px rgba(201,169,110,0.12),
            0 0 60px rgba(201,169,110,0.14),
            0 32px 80px rgba(0,0,0,0.65);
        }

        .hero-portrait-frame img {
          object-fit: cover;
          object-position: center top;
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }

        .hero-portrait-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 55%, rgba(13,13,13,0.45) 100%);
          pointer-events: none;
          z-index: 1;
        }

        /* Accent line + corner marks */
        .hero-portrait-accent {
          position: absolute;
          top: -12px; right: -12px;
          width: 60px; height: 60px;
          border-top: 1px solid rgba(201,169,110,0.5);
          border-right: 1px solid rgba(201,169,110,0.5);
          border-radius: 0 4px 0 0;
          pointer-events: none;
        }

        .hero-portrait-accent-bl {
          position: absolute;
          bottom: -12px; left: -12px;
          width: 60px; height: 60px;
          border-bottom: 1px solid rgba(201,169,110,0.5);
          border-left: 1px solid rgba(201,169,110,0.5);
          border-radius: 0 0 0 4px;
          pointer-events: none;
        }

        .hero-line {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #2a2a2a, transparent);
        }

        /* ─── BDA ─── */
        .bda {
          padding-block: 7rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .bda-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
        }

        .bda-card {
          background: #141414;
          padding: 4rem 2rem;
          transition: background 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }

        .bda-card::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(201,169,110,0);
          transition: box-shadow 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }

        .bda-card:hover {
          background: #1a1a1a;
          transform: translateY(-3px);
        }
        .bda-card:hover::after {
          box-shadow: inset 0 0 0 1px rgba(201,169,110,0.25);
        }

        .bda-card--center {
          background: #1c1c1c;
          position: relative;
        }
        .bda-card--center::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
        }

        .bda-icon {
          color: #c9a96e;
          margin-bottom: 2rem;
          transition: transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .bda-card:hover .bda-icon { transform: scale(1.1); }

        .bda-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .bda-copy {
          font-size: 0.925rem;
          color: #888880;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .bda-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          list-style: none;
        }

        .bda-list li {
          font-size: 0.85rem;
          color: #888880;
          padding-left: 1rem;
          position: relative;
          transition: color 0.22s ease;
        }
        .bda-card:hover .bda-list li { color: #a0a09a; }
        .bda-list li::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-size: 0.7rem;
          top: 0.15em;
        }

        /* ─── Credibility strip ─── */
        .credibility {
          padding-block: 2.25rem;
          background: #141414;
          border-bottom: 1px solid #2a2a2a;
          position: relative;
        }
        .credibility::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }

        .credibility-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0;
          list-style: none;
        }

        .credibility-item {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
          padding: 0.5rem 2rem;
          flex: 1 1 auto;
          min-width: 0;
        }

        .credibility-value {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: #c9a96e;
          line-height: 1;
          flex-shrink: 0;
        }

        .credibility-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #888880;
          letter-spacing: 0.02em;
          line-height: 1.4;
        }

        .credibility-divider {
          width: 1px;
          height: 2rem;
          background: #2a2a2a;
          flex-shrink: 0;
          align-self: center;
        }

        /* ─── Case study ─── */
        .case-study {
          padding-block: 9rem;
          background: #111111;
          border-bottom: 1px solid #2a2a2a;
          position: relative;
          overflow: hidden;
        }
        .case-study::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
        }
        .case-study::after {
          content: '';
          position: absolute;
          top: 0; right: 0; bottom: 0;
          width: 40%;
          background: radial-gradient(ellipse 80% 60% at 80% 40%, rgba(201,169,110,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .case-study-inner { max-width: 820px; position: relative; z-index: 1; }

        .case-study-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .case-tag {
          display: inline-block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #c9a96e;
          background: rgba(201,169,110,0.12);
          padding: 0.3rem 0.85rem;
          border-radius: 2px;
          border: 1px solid rgba(201,169,110,0.22);
        }

        .case-study-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2rem, 4vw, 3.5rem);
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 2rem;
          line-height: 1.1;
        }

        .case-study-copy {
          font-size: 1.05rem;
          color: #888880;
          line-height: 1.75;
          margin-bottom: 4rem;
          max-width: 680px;
        }

        .case-study-proof {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          margin-bottom: 4rem;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          overflow: hidden;
        }

        .proof-item {
          padding: 2rem 1.75rem;
          background: #141414;
          border-right: 1px solid #2a2a2a;
          transition: background 0.25s ease;
        }
        .proof-item:last-child { border-right: none; }
        .proof-item:hover { background: #1c1c1c; }

        .proof-label {
          display: block;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 0.75rem;
        }

        .proof-item p {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.65;
        }

        /* ─── Projects grid ─── */
        .projects {
          padding-block: 9rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
        }

        .project-card {
          background: #141414;
          padding: 3.5rem 2.5rem;
          transition: background 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          cursor: default;
        }
        .project-card::after {
          content: '';
          position: absolute;
          inset: 0;
          box-shadow: inset 0 0 0 1px rgba(201,169,110,0);
          transition: box-shadow 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          pointer-events: none;
        }
        .project-card:hover {
          background: #1a1a1a;
          transform: translateY(-2px);
        }
        .project-card:hover::after { box-shadow: inset 0 0 0 1px rgba(201,169,110,0.18); }

        .project-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
        }

        .project-number {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #c9a96e;
        }

        .project-category {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #888880;
        }

        .project-name {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.75rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 2rem;
          line-height: 1.15;
          transition: color 0.22s ease;
        }
        .project-card:hover .project-name { color: #f5f0e8; }

        .project-trio {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #2a2a2a;
        }

        .project-trio-item { display: flex; flex-direction: column; gap: 0.25rem; }

        .trio-label {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a96e;
        }

        .project-trio-item p {
          font-size: 0.875rem;
          color: #888880;
          line-height: 1.65;
          transition: color 0.22s ease;
        }
        .project-card:hover .project-trio-item p { color: #9d9d94; }

        /* ─── TonyOS section ─── */
        .tonyos {
          padding-block: 9rem;
          background: #0a0a0a;
          border-bottom: 1px solid #2a2a2a;
          position: relative;
          overflow: hidden;
        }

        .tonyos::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 55% 60% at 80% 50%, rgba(201,169,110,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .tonyos-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          position: relative;
        }

        .tonyos-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(2.5rem, 5vw, 4.5rem);
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 2rem;
          line-height: 1.05;
        }

        .tonyos-copy {
          font-size: 1rem;
          color: #888880;
          line-height: 1.75;
          margin-bottom: 1rem;
          max-width: 500px;
        }

        .tonyos-visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tonyos-diagram {
          position: relative;
          width: 280px;
          height: 280px;
        }

        .diagram-lines { position: absolute; inset: 0; }
        .diagram-lines svg { width: 100%; height: 100%; }

        .diagram-node {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          line-height: 1.3;
          font-family: 'Inter', system-ui, sans-serif;
        }

        .diagram-node--center {
          width: 64px; height: 64px;
          left: 50%; top: 50%;
          transform: translate(-50%, -50%);
          background: #c9a96e;
          color: #0d0d0d;
          border-radius: 50%;
          font-size: 0.9rem;
          font-weight: 700;
          font-family: 'DM Serif Display', Georgia, serif;
          box-shadow: 0 0 40px rgba(201,169,110,0.35);
        }

        .diagram-node--top    { top: 0; left: 50%; transform: translateX(-50%); color: rgba(240,237,232,0.45); width: 80px; }
        .diagram-node--right  { right: 0; top: 50%; transform: translateY(-50%); color: rgba(240,237,232,0.45); width: 80px; }
        .diagram-node--bottom { bottom: 0; left: 50%; transform: translateX(-50%); color: rgba(240,237,232,0.45); width: 80px; }
        .diagram-node--left   { left: 0; top: 50%; transform: translateY(-50%); color: rgba(240,237,232,0.45); width: 80px; }

        /* ─── Final CTA ─── */
        .final-cta {
          padding-block: 9rem;
          background: #141414;
          text-align: center;
          border-bottom: 1px solid #2a2a2a;
          position: relative;
          overflow: hidden;
        }
        .final-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 60% 70% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .final-cta-inner { max-width: 640px; margin-inline: auto; position: relative; }

        .final-cta-headline {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: clamp(1.8rem, 4vw, 3rem);
          font-weight: 400;
          color: #ffffff;
          line-height: 1.15;
          margin-bottom: 2rem;
        }

        .final-cta-copy {
          font-size: 1.05rem;
          color: #888880;
          line-height: 1.7;
          margin-bottom: 4rem;
        }

        .final-cta-actions { display: flex; justify-content: center; }

        /* ─── Footer ─── */
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
        .footer-copy {
          font-size: 0.8rem;
          color: #888880;
          letter-spacing: 0.06em;
        }
        .footer-legal { font-size: 0.75rem; color: #555; }

        /* ─── Fade animations ─── */
        .fade-up {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ─── Responsive ─── */
        @media (max-width: 1024px) {
          .hero-layout { grid-template-columns: 1fr 380px; gap: 2.5rem; }
          .hero-portrait-frame { width: 340px; height: 340px; }
        }

        @media (max-width: 900px) {
          .hero-layout { grid-template-columns: 1fr; }
          .hero-portrait-col { display: none; }
          .bda-grid { grid-template-columns: 1fr; }
          .case-study-proof { grid-template-columns: 1fr; }
          .case-study-proof .proof-item { border-right: none; border-bottom: 1px solid #2a2a2a; }
          .case-study-proof .proof-item:last-child { border-bottom: none; }
          .tonyos-inner { grid-template-columns: 1fr; }
          .tonyos-visual { display: none; }
          .projects-grid { grid-template-columns: 1fr; }
          .credibility-list { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
          .credibility-divider { display: none; }
          .credibility-item { padding: 0.4rem 0; }
        }

        @media (max-width: 640px) {
          .hero { min-height: auto; padding-top: 2rem; }
          .hero-actions { flex-direction: column; }
          .hero-actions .btn { width: 100%; justify-content: center; }
          .bda-card { padding: 2rem; }
          .project-header { flex-direction: column; align-items: flex-start; gap: 0.25rem; }
          .project-card { padding: 2.5rem 1.5rem; }
        }
      `}</style>

      <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
        <Navbar />
        <ScrollAnimations />

        {/* Hero */}
        <section className="hero">
          <div className="container">
            <div className="hero-layout">
              <div className="hero-content fade-up">
                <p className="hero-eyebrow">Tony Lombardi</p>
                <h1 className="hero-headline">Builder.<br />Designer.<br />Advisor.</h1>
                <p className="hero-copy">When the path isn&apos;t obvious, I build the system that gets people moving again.</p>
                <div className="hero-actions">
                  <Link href="/work-with-me" className="btn btn-primary">Work With Me</Link>
                  <Link href="/projects" className="btn btn-ghost">See My Projects</Link>
                </div>
              </div>

              <div className="hero-portrait-col fade-up">
                <div className="hero-portrait-wrap">
                  <div className="hero-portrait-accent" aria-hidden="true" />
                  <div className="hero-portrait-accent-bl" aria-hidden="true" />
                  <div className="hero-portrait-frame">
                    <Image
                      src="/tony-lombardi.jpg"
                      alt="Tony Lombardi"
                      width={1024}
                      height={1024}
                      priority
                      style={{
                        objectFit: "cover",
                        objectPosition: "center top",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-line" aria-hidden="true"></div>
        </section>

        {/* Credibility strip */}
        <section className="credibility">
          <div className="container">
            <ul className="credibility-list">
              <li className="credibility-item fade-up">
                <span className="credibility-value">18+</span>
                <span className="credibility-label">Years enterprise transformation</span>
              </li>
              <li className="credibility-divider" aria-hidden="true"></li>
              <li className="credibility-item fade-up">
                <span className="credibility-label">Portfolio leadership across technology and operations</span>
              </li>
              <li className="credibility-divider" aria-hidden="true"></li>
              <li className="credibility-item fade-up">
                <span className="credibility-label">Banking · Insurance · Consulting · Software delivery</span>
              </li>
              <li className="credibility-divider" aria-hidden="true"></li>
              <li className="credibility-item fade-up">
                <span className="credibility-label">Founder. Builder. Operator.</span>
              </li>
              <li className="credibility-divider" aria-hidden="true"></li>
              <li className="credibility-item fade-up">
                <span className="credibility-value">7×</span>
                <span className="credibility-label">Ironman finisher</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Build / Design / Advise */}
        <section id="what-i-do" className="bda">
          <div className="container">
            <div className="section-label">What I Do</div>
            <div className="bda-grid">

              <div className="bda-card fade-up">
                <div className="bda-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                    <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                    <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                    <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                  </svg>
                </div>
                <h2 className="bda-title">Build</h2>
                <p className="bda-copy">AI systems, ventures, websites, operating workflows, teams, and execution engines. If it needs to exist and doesn&apos;t, I build it.</p>
                <ul className="bda-list">
                  <li>AI-powered systems &amp; tools</li>
                  <li>Ventures &amp; new business builds</li>
                  <li>Websites &amp; digital products</li>
                  <li>Operating workflows</li>
                  <li>Teams &amp; execution engines</li>
                </ul>
              </div>

              <div className="bda-card bda-card--center fade-up">
                <div className="bda-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M14 4 L14 24" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M4 14 L24 14" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M7 7 L21 21" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2"/>
                    <path d="M21 7 L7 21" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2"/>
                  </svg>
                </div>
                <h2 className="bda-title">Design</h2>
                <p className="bda-copy">Operating models, customer experiences, decision frameworks, business processes, and transformation plans. Structure that actually holds.</p>
                <ul className="bda-list">
                  <li>Operating models</li>
                  <li>Customer experiences</li>
                  <li>Decision frameworks</li>
                  <li>Business process design</li>
                  <li>Transformation plans</li>
                </ul>
              </div>

              <div className="bda-card fade-up">
                <div className="bda-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 4 C9 4 5 8 5 13 C5 16.5 7 19.5 10 21.2 L10 24 L18 24 L18 21.2 C21 19.5 23 16.5 23 13 C23 8 19 4 14 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                    <line x1="10" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.75"/>
                  </svg>
                </div>
                <h2 className="bda-title">Advise</h2>
                <p className="bda-copy">Founders, executives, small business owners, and transformation leaders who need clarity, momentum, and practical execution. Not theory — traction.</p>
                <ul className="bda-list">
                  <li>Founders &amp; entrepreneurs</li>
                  <li>Executives &amp; operators</li>
                  <li>Small business owners</li>
                  <li>Transformation leaders</li>
                  <li>Clarity → momentum → execution</li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* Featured case study */}
        <section className="case-study">
          <div className="container">
            <div className="section-label">Featured Case Study</div>
            <div className="case-study-inner">
              <div className="case-study-meta">
                <span className="case-tag">Brand Positioning</span>
                <span className="case-tag">Website Build</span>
                <span className="case-tag">Service Architecture</span>
                <span className="case-tag">Launch Support</span>
              </div>
              <h2 className="case-study-title fade-up">Salterra Enterprises</h2>
              <p className="case-study-copy">A full business website and positioning system built for a financial services operations leader launching an independent consulting brand. This wasn&apos;t a template drop — it was a ground-up build: brand positioning, service architecture, CTA flow, and practical launch support designed to move a founder from idea to market.</p>
              <div className="case-study-proof">
                <div className="proof-item fade-up">
                  <span className="proof-label">Challenge</span>
                  <p>An experienced financial operations leader stepping out on their own with no digital presence, no defined service offerings, and no positioning.</p>
                </div>
                <div className="proof-item fade-up">
                  <span className="proof-label">Build</span>
                  <p>Full brand identity, website architecture, service structure, and a CTA system aligned to how the right clients actually make decisions.</p>
                </div>
                <div className="proof-item fade-up">
                  <span className="proof-label">Outcome</span>
                  <p>A credible, positioned, market-ready consulting brand — launched. Not someday. Done.</p>
                </div>
              </div>
              <Link href="/projects/salterra" className="btn btn-primary">Read the Case Study</Link>
            </div>
          </div>
        </section>

        {/* Selected projects */}
        <section id="projects" className="projects">
          <div className="container">
            <div className="section-label">Selected Projects</div>
            <h2 className="section-heading">Built. Shipped. Working.</h2>
            <div className="projects-grid">

              <article className="project-card fade-up">
                <div className="project-header">
                  <span className="project-number">01</span>
                  <span className="project-category">Brand / Web / Launch</span>
                </div>
                <h3 className="project-name">Salterra Enterprises</h3>
                <div className="project-trio">
                  <div className="project-trio-item">
                    <span className="trio-label">Challenge</span>
                    <p>Financial services operator launching independently with no brand, no site, no defined market position.</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Build</span>
                    <p>Full brand system, website, service architecture, and CTA flow from zero.</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Outcome</span>
                    <p>Market-ready consulting brand launched with a credible, positioned digital presence.</p>
                  </div>
                </div>
              </article>

              <article className="project-card fade-up">
                <div className="project-header">
                  <span className="project-number">02</span>
                  <span className="project-category">Brand / Community / Media</span>
                </div>
                <h3 className="project-name">The Fight Don</h3>
                <div className="project-trio">
                  <div className="project-trio-item">
                    <span className="trio-label">Challenge</span>
                    <p>How do you turn combat sports expertise, coaching, and community energy into a scalable business?</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Build</span>
                    <p>Brand positioning, coaching framework, content system, community strategy, and digital platform architecture.</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Outcome</span>
                    <p>A repeatable model for helping ordinary people enter combat sports with structure, confidence, and momentum.</p>
                  </div>
                </div>
              </article>

              <article className="project-card fade-up">
                <div className="project-header">
                  <span className="project-number">03</span>
                  <span className="project-category">Operating System / Framework</span>
                </div>
                <h3 className="project-name">TonyOS</h3>
                <div className="project-trio">
                  <div className="project-trio-item">
                    <span className="trio-label">Challenge</span>
                    <p>Building a coherent personal operating framework from years of pattern recognition across business, life, and execution.</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Build</span>
                    <p>An integrated decision and execution system covering how I think, build, decide, and advise.</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Outcome</span>
                    <p>A living framework that drives every engagement — not a methodology deck, an actual operating system.</p>
                  </div>
                </div>
              </article>

              <article className="project-card fade-up">
                <div className="project-header">
                  <span className="project-number">04</span>
                  <span className="project-category">Research / Data / International</span>
                </div>
                <h3 className="project-name">Cuba Property Research</h3>
                <div className="project-trio">
                  <div className="project-trio-item">
                    <span className="trio-label">Challenge</span>
                    <p>How do you reconstruct a family property history across Cuba, exile, legal uncertainty, and fragmented public records?</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Build</span>
                    <p>A structured research system combining family history, property clues, historical maps, legal context, and archival evidence.</p>
                  </div>
                  <div className="project-trio-item">
                    <span className="trio-label">Outcome</span>
                    <p>A clearer investigative path through an information problem with no obvious playbook.</p>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </section>

        {/* TonyOS section */}
        <section id="tonyos" className="tonyos">
          <div className="container">
            <div className="tonyos-inner">
              <div className="tonyos-content fade-up">
                <div className="section-label section-label--light">Intellectual Framework</div>
                <h2 className="tonyos-title">TonyOS</h2>
                <p className="tonyos-copy">TonyOS is the operating framework behind how I think, build, decide, and advise. It connects pattern recognition, execution systems, and practical decision-making.</p>
                <p className="tonyos-copy">Every engagement I take on runs through this framework. It&apos;s not a methodology I sell. It&apos;s how I work.</p>
                <Link href="/tonyos" className="btn btn-outline-light" style={{ marginTop: "2rem" }}>Explore TonyOS</Link>
              </div>
              <div className="tonyos-visual" aria-hidden="true">
                <div className="tonyos-diagram">
                  <div className="diagram-node diagram-node--center">OS</div>
                  <div className="diagram-node diagram-node--top">Pattern<br />Recognition</div>
                  <div className="diagram-node diagram-node--right">Execution<br />Systems</div>
                  <div className="diagram-node diagram-node--bottom">Decision<br />Making</div>
                  <div className="diagram-node diagram-node--left">Life<br />Design</div>
                  <div className="diagram-lines">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                      <line x1="100" y1="100" x2="100" y2="30" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                      <line x1="100" y1="100" x2="170" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                      <line x1="100" y1="100" x2="100" y2="170" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                      <line x1="100" y1="100" x2="30" y2="100" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="final-cta">
          <div className="container">
            <div className="final-cta-inner fade-up">
              <h2 className="final-cta-headline">Have something important<br />to build, fix, or clarify?</h2>
              <p className="final-cta-copy">I work best where the problem is complex, the stakes are real, and forward motion matters.</p>
              <div className="final-cta-actions">
                <Link href="/work-with-me" className="btn btn-primary btn-large">Work With Me</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            <Link href="/" className="footer-logo">Tony Lombardi</Link>
            <p className="footer-copy">Builder. Designer. Advisor.</p>
            <p className="footer-legal">&copy; {new Date().getFullYear()} Tony Lombardi. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
