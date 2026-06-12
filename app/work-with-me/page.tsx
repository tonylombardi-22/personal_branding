import Navbar from "@/components/Navbar";
import ScrollAnimations from "@/components/ScrollAnimations";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me | Tony Lombardi",
  description: "How I engage — building systems, designing operating models, and advising leaders through complexity. Three types of engagements, one approach.",
};

export default function WorkWithMePage() {
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

        /* Engagement cards */
        .wwm-engagements {
          padding-block: 9rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .wwm-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: #2a2a2a;
          border: 1px solid #2a2a2a;
          border-radius: 12px;
          overflow: hidden;
        }

        .wwm-card {
          background: #141414;
          padding: 4rem 2rem;
          transition: background 0.32s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
        }
        .wwm-card:hover { background: #1c1c1c; }

        .wwm-card--center {
          background: #1c1c1c;
          position: relative;
        }
        .wwm-card--center::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #c9a96e, transparent);
        }

        .bda-icon {
          color: #c9a96e;
          margin-bottom: 2rem;
        }

        .wwm-card-title {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 2rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .wwm-card-copy {
          font-size: 0.925rem;
          color: #888880;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .wwm-examples {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .wwm-example {
          font-size: 0.82rem;
          color: #888880;
          padding-left: 1rem;
          position: relative;
          line-height: 1.5;
        }
        .wwm-example::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-size: 0.7rem;
          top: 0.12em;
        }

        /* Who I work with */
        .wwm-fit {
          padding-block: 7rem;
          border-bottom: 1px solid #2a2a2a;
          background: #141414;
        }

        .wwm-fit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .wwm-fit-column h3 {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 400;
          color: #ffffff;
          margin-bottom: 2rem;
        }

        .wwm-fit-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .wwm-fit-item {
          font-size: 0.9rem;
          color: #888880;
          line-height: 1.65;
          padding-left: 1.25rem;
          position: relative;
        }
        .wwm-fit-item::before {
          content: '—';
          position: absolute;
          left: 0;
          color: #c9a96e;
          font-size: 0.7rem;
          top: 0.2em;
        }

        /* What good looks like */
        .wwm-what-looks-like {
          padding-block: 7rem;
          border-bottom: 1px solid #2a2a2a;
        }

        .wwm-signals {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 4rem;
        }

        .wwm-signal {
          background: #141414;
          border: 1px solid #2a2a2a;
          border-radius: 8px;
          padding: 2rem;
          transition: border-color 0.22s ease, background 0.22s ease;
        }
        .wwm-signal:hover { border-color: rgba(201,169,110,0.3); background: #1c1c1c; }

        .wwm-signal-head {
          font-size: 1rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: 0.01em;
        }

        .wwm-signal p {
          font-size: 0.9rem;
          color: #888880;
          line-height: 1.7;
        }

        /* How to start */
        .inner-section {
          padding-block: 7rem;
        }

        .inner-section--alt {
          background: #141414;
          border-top: 1px solid #2a2a2a;
          border-bottom: 1px solid #2a2a2a;
        }

        .inner-section-content { max-width: 640px; }

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
          .wwm-grid { grid-template-columns: 1fr; }
          .wwm-fit-grid { grid-template-columns: 1fr; gap: 3rem; }
          .wwm-signals { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .page-hero { padding-top: 2rem; }
          .wwm-card { padding: 2rem; }
        }
      `}</style>

      <div style={{ background: "#0d0d0d", minHeight: "100vh" }}>
        <Navbar />
        <ScrollAnimations />

        {/* Hero */}
        <section className="page-hero">
          <div className="container">
            <div className="page-hero-content fade-up">
              <p className="page-eyebrow">Work With Me</p>
              <h1 className="page-headline">Complex problems.<br />Real stakes.<br />Forward motion.</h1>
              <p className="page-subline">I don't do retainer relationships with no deliverables. I don't do strategy without execution. I work best where the problem is real, the timeline matters, and someone needs to actually make something happen.</p>
            </div>
          </div>
        </section>

        {/* Engagement types */}
        <section className="wwm-engagements">
          <div className="container">
            <div className="section-label">How I Engage</div>
            <div className="wwm-grid">

              <div className="wwm-card fade-up">
                <div className="bda-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                    <rect x="16" y="3" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                    <rect x="3" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                    <rect x="16" y="16" width="9" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.75"/>
                  </svg>
                </div>
                <h2 className="wwm-card-title">Build</h2>
                <p className="wwm-card-copy">If it needs to exist and doesn't, I build it. This engagement type is about creating something from zero — a system, a product, a brand, a workflow, or a business. Build engagements end with something real that works.</p>
                <div className="wwm-examples">
                  <span className="wwm-example">AI systems and automation tools</span>
                  <span className="wwm-example">Websites and digital products</span>
                  <span className="wwm-example">Operating workflows and execution systems</span>
                  <span className="wwm-example">Business infrastructure and launch</span>
                  <span className="wwm-example">Team structures and operating cadences</span>
                </div>
              </div>

              <div className="wwm-card wwm-card--center fade-up">
                <div className="bda-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M14 4 L14 24" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M4 14 L24 14" stroke="currentColor" strokeWidth="1.75"/>
                    <path d="M7 7 L21 21" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2"/>
                    <path d="M21 7 L7 21" stroke="currentColor" strokeWidth="1.25" strokeDasharray="2 2"/>
                  </svg>
                </div>
                <h2 className="wwm-card-title">Design</h2>
                <p className="wwm-card-copy">When the structure doesn't exist or the current structure isn't working, I design the model. This engagement type is about creating the architecture — the operating model, the customer journey, the decision framework — that makes execution possible.</p>
                <div className="wwm-examples">
                  <span className="wwm-example">Operating models and org design</span>
                  <span className="wwm-example">Customer experience architecture</span>
                  <span className="wwm-example">Decision frameworks and governance</span>
                  <span className="wwm-example">Business process and workflow design</span>
                  <span className="wwm-example">Transformation planning and sequencing</span>
                </div>
              </div>

              <div className="wwm-card fade-up">
                <div className="bda-icon" aria-hidden="true">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 4 C9 4 5 8 5 13 C5 16.5 7 19.5 10 21.2 L10 24 L18 24 L18 21.2 C21 19.5 23 16.5 23 13 C23 8 19 4 14 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round"/>
                    <line x1="10" y1="21" x2="18" y2="21" stroke="currentColor" strokeWidth="1.75"/>
                  </svg>
                </div>
                <h2 className="wwm-card-title">Advise</h2>
                <p className="wwm-card-copy">When the problem is clear but the path isn't, I advise. This engagement type is about providing the clarity, the perspective, and the honest feedback needed to move — not validation, not cheerleading, and not generic frameworks.</p>
                <div className="wwm-examples">
                  <span className="wwm-example">Founders navigating early-stage complexity</span>
                  <span className="wwm-example">Executives managing transformation</span>
                  <span className="wwm-example">Operators building independent practices</span>
                  <span className="wwm-example">Leaders in career or business transitions</span>
                  <span className="wwm-example">Teams stuck between strategy and execution</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="wwm-fit">
          <div className="container">
            <div className="section-label">Who This Is For</div>
            <div className="wwm-fit-grid">
              <div className="wwm-fit-column fade-up">
                <h3>Who I work best with</h3>
                <ul className="wwm-fit-list">
                  <li className="wwm-fit-item">Founders who are building something real and need someone who can actually execute alongside them — not just advise from a distance</li>
                  <li className="wwm-fit-item">Executives managing complex change who need a thinking partner with both strategic and operational range</li>
                  <li className="wwm-fit-item">Experienced operators going independent who need to translate institutional expertise into a market-ready practice</li>
                  <li className="wwm-fit-item">Small business owners who have outgrown their current operating model and need to redesign how they work</li>
                  <li className="wwm-fit-item">Leaders who have a clear problem, not just a vague ambition — and want honest engagement, not expensive encouragement</li>
                </ul>
              </div>
              <div className="wwm-fit-column fade-up">
                <h3>Who this probably isn't for</h3>
                <ul className="wwm-fit-list">
                  <li className="wwm-fit-item">Organizations that need a large team or a firm with headcount to run parallel workstreams at scale</li>
                  <li className="wwm-fit-item">Situations where the real answer is a hire, not a consultant — I'll tell you that if it's true</li>
                  <li className="wwm-fit-item">Engagements where the client already knows the answer and wants validation, not evaluation</li>
                  <li className="wwm-fit-item">Projects where the problem is undefined and the brief is "figure out what our problem is" — I need a real problem to engage with</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What good looks like */}
        <section className="wwm-what-looks-like">
          <div className="container">
            <div className="section-label">What Good Engagements Look Like</div>
            <h2 className="inner-heading" style={{ maxWidth: "640px" }}>The signals that tell me this will work</h2>
            <p className="inner-copy">Not every engagement is a fit. The ones that work best have a recognizable shape — and it's not about budget or scope. It's about the nature of the problem and the appetite of the person bringing it.</p>
            <div className="wwm-signals">
              <div className="wwm-signal fade-up">
                <div className="wwm-signal-head">The problem is real</div>
                <p>Not a project that got created because someone wanted to do something. An actual problem that's costing something — time, money, momentum, or optionality. The stakes are clear and the urgency is honest.</p>
              </div>
              <div className="wwm-signal fade-up">
                <div className="wwm-signal-head">The path isn't obvious</div>
                <p>If the answer is already known, you don't need me. The engagements that work are the ones where the problem is real but the solution isn't clear — and working through that ambiguity together produces something neither of us would have reached alone.</p>
              </div>
              <div className="wwm-signal fade-up">
                <div className="wwm-signal-head">Honest feedback is welcome</div>
                <p>I'm not going to tell you what you want to hear. I'm going to tell you what I think is true. The clients I work best with want that — they find the validation elsewhere, and they come here for the real read.</p>
              </div>
              <div className="wwm-signal fade-up">
                <div className="wwm-signal-head">Forward motion is the goal</div>
                <p>The point of every engagement is to get somewhere. Not to produce a document, not to complete a process, not to check a box — but to make something actually happen. That orientation has to run both ways.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How to start */}
        <section className="inner-section inner-section--alt">
          <div className="container">
            <div className="inner-section-content fade-up">
              <div className="section-label">How to Start</div>
              <h2 className="inner-heading">A simple process</h2>
              <p className="inner-copy">There's no intake form or discovery package. Send me a message that describes the problem — the actual problem, not the polished version. What's happening, what you've tried, and what you need. That's enough to start the conversation.</p>
              <p className="inner-copy">From there, we'll have a short call to determine whether it's a fit. If it is, we'll agree on scope and move. If it isn't, I'll tell you why and point you somewhere more useful.</p>
              <p className="inner-copy">I don't take on many engagements at once. That's intentional — the work gets done better that way.</p>
            </div>
          </div>
        </section>

        {/* Page CTA */}
        <section className="page-cta">
          <div className="page-cta-inner fade-up">
            <h2 className="page-cta-headline">Have something important to build, fix, or clarify?</h2>
            <p className="page-cta-copy">I work best where the problem is complex, the stakes are real, and forward motion matters.</p>
            <div className="page-cta-actions">
              <a href="mailto:tony@tonylombardi.ai" className="btn btn-primary btn-large">Send Me a Message</a>
              <Link href="/projects" className="btn btn-ghost">See What I've Built</Link>
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
