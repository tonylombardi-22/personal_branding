import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TonyOS — Operating Framework | Tony Lombardi",
  description: "TonyOS is the operating framework behind how Tony Lombardi thinks, builds, decides, and advises. Pattern recognition, execution systems, practical decision-making.",
};

export default function TonyOSPage() {
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

        /* Sections */
        .inner-section {
          padding-block: 7rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .inner-section--alt {
          background: #141414;
        }

        .inner-section-content { max-width: 680px; }

        /* Principles grid */
        .tos-principles {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
          margin-top: 4rem;
        }

        .tos-principle {
          background: #141414;
          padding: 3rem 2.5rem;
          transition: background 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .tos-principle:hover { background: #1c1c1c; }

        .tos-principle-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .tos-principle-copy {
          font-size: 0.9rem;
          color: #888880;
          line-height: 1.7;
        }

        /* Projects table */
        .tos-projects {
          margin-top: 4rem;
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
        }

        .tos-project-row {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 2rem;
          background: #141414;
          padding: 2rem 2.5rem;
          align-items: start;
          transition: background 0.22s ease;
        }
        .tos-project-row:hover { background: #1c1c1c; }

        .tos-project-name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #c9a96e;
          letter-spacing: 0.01em;
        }

        .tos-project-desc {
          font-size: 0.9rem;
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

                /* Responsive */
        @media (max-width: 900px) {
          .tos-principles { grid-template-columns: 1fr; }
          .tos-project-row { grid-template-columns: 1fr; gap: 0.75rem; }
        }

        @media (max-width: 640px) {
          .page-hero { padding-top: 2rem; }
          .tos-principle { padding: 2rem; }
          .tos-project-row { padding: 1.5rem; }
        }
      `}</style>

      <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
        <Navbar />
        <ScrollAnimations />

        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content fade-up">
              <p className="page-eyebrow">Intellectual Framework</p>
              <h1 className="page-headline">TonyOS</h1>
              <p className="page-subline">An operating framework built from years of pattern recognition across business, building, and life. Not a product. Not a methodology. The actual system behind how I think and work.</p>
            </div>
          </div>
        </section>

        {/* What it is */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">What TonyOS Is</div>
              <h2 className="inner-heading">A way of operating, not a model to sell</h2>
              <p className="inner-copy">TonyOS is the operating framework behind how I think, build, decide, and advise. It connects pattern recognition, execution systems, and practical decision-making into something coherent enough to apply consistently — across very different types of problems.</p>
              <p className="inner-copy">Every client engagement runs through this framework. Every project. Every decision. Not because it's a methodology I've packaged — because it's how I actually work.</p>
            </div>
          </div>
        </section>

        {/* Why it exists */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">Why It Exists</div>
              <h2 className="inner-heading">Most people operate reactively. This is the alternative.</h2>
              <p className="inner-copy">I built TonyOS because I noticed a pattern in how I was working — and in how most people I worked with were working. Operating reactively: responding to what shows up, defaulting to familiar approaches, confusing activity with progress.</p>
              <p className="inner-copy">The more complex the environment, the more expensive reactive operating gets. Enterprise transformation, independent practice, leadership under pressure — these situations don't reward people who are waiting to see what happens. They reward people who have a system for thinking through what's happening and deciding what to do about it.</p>
            </div>
          </div>
        </section>

        {/* Core principles */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="section-label fade-up">Core Principles</div>
            <h2 className="inner-heading fade-up" style={{ maxWidth: "640px" }}>Four elements. One coherent system.</h2>
            <div className="tos-principles">
              <div className="tos-principle fade-up">
                <h3 className="tos-principle-title">Pattern Recognition</h3>
                <p className="tos-principle-copy">Most situations have been encountered before — in a different context, at a different scale, under different conditions. The ability to recognize what type of problem you're actually facing (versus what it appears to be on the surface) is where the leverage lives. TonyOS trains attention on patterns first, before jumping to solutions.</p>
              </div>
              <div className="tos-principle fade-up">
                <h3 className="tos-principle-title">Execution Systems</h3>
                <p className="tos-principle-copy">Insight without execution is expensive entertainment. TonyOS is built around the question of what actually needs to happen — and in what sequence, by whom, at what tempo. The execution system is where ideas become things. It's where the real work is, and it's where most people get stuck.</p>
              </div>
              <div className="tos-principle fade-up">
                <h3 className="tos-principle-title">Practical Decision-Making</h3>
                <p className="tos-principle-copy">Decisions under ambiguity are different from decisions with complete information. TonyOS includes a decision-making discipline built for conditions where you don't have everything you'd want — because that's the normal operating condition in complex environments. Making good-enough decisions quickly and adjusting beats making perfect decisions slowly every time.</p>
              </div>
              <div className="tos-principle fade-up">
                <h3 className="tos-principle-title">Life Design</h3>
                <p className="tos-principle-copy">Work doesn't happen in a vacuum. How you live shapes how you think, how you recover, and how you sustain performance over time. TonyOS integrates life design — the deliberate construction of how and where you spend your time — as a first-class input, not an afterthought. Seven Ironman finishes weren't accidental. They're part of the same system.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How it influences work */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">How It Influences My Work</div>
              <h2 className="inner-heading">The framework in practice</h2>
              <p className="inner-copy">TonyOS isn't something I apply after the fact to make work look organized. It's the actual structure of how I approach every engagement from the first conversation.</p>
              <p className="inner-copy">In practice, that means:</p>
              <ul className="inner-list">
                <li>Starting every engagement with a pattern-recognition pass — what type of problem is this, and what's actually being asked versus what's being stated?</li>
                <li>Separating the positioning problem from the execution problem — they require different tools and different sequencing</li>
                <li>Building execution clarity before starting the build — defining what done looks like before touching anything</li>
                <li>Making explicit decisions at ambiguous points rather than letting ambiguity drive the work</li>
                <li>Designing for forward motion, not for completeness — getting something that works in the world over something that's perfect on paper</li>
              </ul>
              <p className="inner-copy" style={{ marginTop: "2rem" }}>This is also why I'm direct with clients. The framework requires honest diagnosis. I can't operate it well if I'm managing your feelings about the problem instead of actually addressing it.</p>
            </div>
          </div>
        </section>

        {/* How it shows up in projects */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="section-label fade-up">How It Shows Up In Projects</div>
            <h2 className="inner-heading fade-up" style={{ maxWidth: "640px" }}>Same framework. Different problems.</h2>
            <p className="inner-copy fade-up" style={{ maxWidth: "680px" }}>The projects below are structurally different — a consulting brand launch, a combat sports business, an archival research system — but each one was approached through the same TonyOS lens.</p>
            <div className="tos-projects">
              <div className="tos-project-row fade-up">
                <span className="tos-project-name">Salterra Enterprises</span>
                <p className="tos-project-desc">Pattern recognition surfaced that this wasn't a website problem — it was a positioning problem. Execution discipline ensured positioning was resolved before a single line of design work started. Decision clarity defined what "done" meant at each stage so the launch didn't drift.</p>
              </div>
              <div className="tos-project-row fade-up">
                <span className="tos-project-name">The Fight Don</span>
                <p className="tos-project-desc">Recognized early that the challenge wasn't brand awareness — it was structural. No framework for turning expertise and community energy into repeatable engagements. The build was designed around that structural problem, not the surface symptoms.</p>
              </div>
              <div className="tos-project-row fade-up">
                <span className="tos-project-name">Cuba Property Research</span>
                <p className="tos-project-desc">A research problem without a clear playbook requires the same pattern-recognition discipline as a business problem. What type of information problem is this? What sources exist? What can be inferred? The research system was built to operate systematically in conditions of genuine ambiguity.</p>
              </div>
              <div className="tos-project-row fade-up">
                <span className="tos-project-name">DMV 2.0</span>
                <p className="tos-project-desc">A public-sector problem treated as a product problem. Pattern recognition identified that wait times weren't a staffing issue — they were a distribution issue. TonyOS structured the full build: market validation first, workflow design second, two-sided platform architecture third, investor materials last. The sequencing was the product.</p>
              </div>
              <div className="tos-project-row fade-up">
                <span className="tos-project-name">This Site</span>
                <p className="tos-project-desc">TonyLombardi.ai was built using TonyOS. Positioning first — what is this site actually for, and for whom? Architecture second — what structure serves that positioning? Build third. The framework applies to every build, including the ones about the framework itself.</p>
              </div>
            </div>
          </div>
        </section>

        {/* One more thing */}
        <section className="inner-section">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">One More Thing</div>
              <h2 className="inner-heading">It's unfinished. Intentionally.</h2>
              <p className="inner-copy">TonyOS isn't a completed product. It's a living system. The patterns it recognizes get updated. The execution models evolve. The decision-making discipline improves with each engagement where it's tested under real conditions.</p>
              <p className="inner-copy">This page isn't a documentation of a finished framework. It's a snapshot of a working one. The version that's running today is better than the one that ran last year. That's the point.</p>
            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta">
          <div className="page-cta-inner fade-up">
            <h2 className="page-cta-headline">Want to see the framework applied to your problem?</h2>
            <p className="page-cta-copy">The best way to understand TonyOS is to watch it work. If you have a real problem, let's have that conversation.</p>
            <div className="page-cta-actions">
              <Link href="/work-with-me" className="btn btn-primary btn-large">Work With Me</Link>
              <Link href="/projects" className="btn btn-ghost">See The Projects</Link>
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
