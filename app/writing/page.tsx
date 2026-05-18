import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";
import ReadingProgress from "@/components/ReadingProgress";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Writing | Tony Lombardi",
  description:
    "The Operating System Doesn't Change — on endurance, enterprise transformation, and why the same cognitive system that finishes an Ironman runs 326 overnight branch implementations without a single failure.",
};

export default function Writing() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          background: #0a0a0a;
          color: #f0ede8;
          font-family: 'DM Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ── INDEX HEADER ─────────────────────── */
        .wr-header {
          padding: 80px 48px 48px;
          max-width: 900px;
          margin: 0 auto;
          border-bottom: 0.5px solid rgba(240,237,232,0.08);
        }

        .wr-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.28);
          margin-bottom: 20px;
        }

        .wr-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 600;
          color: #f0ede8;
          line-height: 1;
          letter-spacing: -0.01em;
          margin-bottom: 16px;
        }

        .wr-sub {
          font-size: 14px;
          font-weight: 300;
          color: rgba(240,237,232,0.4);
          line-height: 1.7;
          max-width: 560px;
        }

        /* ── ARTICLE LIST ─────────────────────── */
        .wr-list {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 48px 80px;
        }

        .wr-article-card {
          padding: 40px 0;
          border-bottom: 0.5px solid rgba(240,237,232,0.08);
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .wr-article-card:hover { opacity: 0.75; }

        .wr-article-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }

        .wr-article-date {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(240,237,232,0.28);
          text-transform: uppercase;
        }

        .wr-article-tag {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.7);
          border: 0.5px solid rgba(200,169,110,0.25);
          padding: 2px 8px;
          border-radius: 2px;
        }

        .wr-article-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 3.5vw, 36px);
          font-weight: 600;
          color: #f0ede8;
          line-height: 1.1;
          letter-spacing: -0.01em;
          margin-bottom: 12px;
        }

        .wr-article-excerpt {
          font-size: 14px;
          font-weight: 300;
          color: rgba(240,237,232,0.45);
          line-height: 1.75;
          max-width: 640px;
        }

        .wr-read-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 16px;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #C8A96E;
          text-decoration: none;
          transition: gap 0.2s ease;
        }

        .wr-read-link:hover { gap: 12px; }

        /* ── ARTICLE PAGE ─────────────────────── */
        .ar-wrap {
          max-width: 720px;
          margin: 0 auto;
          padding: 72px 48px 96px;
        }

        .ar-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          text-decoration: none;
          margin-bottom: 48px;
          transition: color 0.2s ease;
        }

        .ar-back:hover { color: rgba(240,237,232,0.6); }

        .ar-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .ar-date {
          font-size: 11px;
          letter-spacing: 0.08em;
          color: rgba(240,237,232,0.28);
          text-transform: uppercase;
        }

        .ar-tag {
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.7);
          border: 0.5px solid rgba(200,169,110,0.25);
          padding: 2px 8px;
          border-radius: 2px;
        }

        .ar-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 600;
          color: #f0ede8;
          line-height: 0.95;
          letter-spacing: -0.01em;
          margin-bottom: 32px;
        }

        .ar-subheadline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-style: italic;
          font-weight: 400;
          color: rgba(200,169,110,0.65);
          margin-bottom: 28px;
          letter-spacing: 0.01em;
        }

        .ar-byline {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.35);
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 0.5px solid rgba(240,237,232,0.08);
        }

        .ar-byline strong {
          color: rgba(240,237,232,0.6);
          font-weight: 500;
        }

        /* Article body typography */
        .ar-body p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 400;
          line-height: 1.75;
          color: rgba(240,237,232,0.8);
          margin-bottom: 28px;
        }

        .ar-body .section-break {
          text-align: center;
          color: rgba(200,169,110,0.4);
          font-size: 20px;
          letter-spacing: 0.3em;
          margin: 48px 0;
          display: block;
        }

        .ar-body em {
          font-style: italic;
          color: rgba(240,237,232,0.9);
        }

        .ar-footer {
          margin-top: 64px;
          padding-top: 40px;
          border-top: 0.5px solid rgba(240,237,232,0.08);
        }

        .ar-footer-byline {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.4);
          line-height: 1.8;
        }

        .ar-footer-byline strong {
          color: rgba(240,237,232,0.7);
          font-weight: 500;
        }

        .ar-footer-byline a {
          color: #C8A96E;
          text-decoration: none;
        }

        .ar-footer-byline a:hover {
          text-decoration: underline;
        }

        .ar-nav {
          margin-top: 48px;
          display: flex;
          gap: 24px;
        }

        .ar-nav-link {
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .ar-nav-link:hover { color: rgba(240,237,232,0.6); }
        .ar-nav-link.gold { color: #C8A96E; }
        .ar-nav-link.gold:hover { color: #d4b87a; }

        /* Footer */
        .wr-footer {
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

        .wr-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.2);
          text-decoration: none;
        }

        .wr-footer-logo span { color: rgba(200,169,110,0.35); }

        .wr-footer-links { display: flex; gap: 28px; }

        .wr-footer-link {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .wr-footer-link:hover { color: rgba(240,237,232,0.55); }

        @media (max-width: 768px) {
          .wr-header { padding: 60px 24px 36px; }
          .wr-list { padding: 0 24px 60px; }
          .ar-wrap { padding: 48px 24px 72px; }
          .wr-footer { padding: 32px 24px; flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <ReadingProgress />
        <Navbar />

        {/* Writing index header */}
        <div className="wr-header">
          <div className="wr-eyebrow">Writing</div>
          <h1 className="wr-title">The long game.</h1>
          <p className="wr-sub">
            Essays on enterprise transformation, endurance, AI operations, and the discipline that connects them.
          </p>
        </div>

        {/* Article list */}
        <div className="wr-list">
          <div className="wr-article-card">
            <div className="wr-article-meta">
              <span className="wr-article-date">May 2026</span>
              <span className="wr-article-tag">Operator · Athlete</span>
            </div>
            <div className="wr-article-headline">
              The Operating System<br />Doesn't Change.
            </div>
            <p className="wr-article-excerpt">
              Mile 67. Sustained headwinds. A race plan that no longer existed.
              What remained was the operating system that runs when pressure rises
              and the script breaks.
            </p>
            <a href="#article" className="wr-read-link">Read essay →</a>
          </div>
        </div>

        {/* Article full text */}
        <div className="ar-wrap" id="article">
          <a href="#top" className="ar-back">← Writing</a>

          <div className="ar-meta">
            <span className="ar-date">May 2026</span>
            <span className="ar-tag">Operator · Athlete</span>
            <span style={{
              fontSize: "11px",
              letterSpacing: "0.06em",
              color: "rgba(240,237,232,0.28)",
              fontFamily: "'DM Sans', sans-serif",
            }}>5 min read</span>
          </div>

          <h2 className="ar-headline">
            The Operating System<br />Doesn't Change.
          </h2>

          <div className="ar-subheadline">
            "The race reveals who you are."
          </div>

          <div className="ar-byline">
            By <strong>Tony Lombardi</strong>
          </div>

          <div className="ar-body">
            <p>
              Mile 67. Sustained headwinds of 20 to 30 miles per hour for over
              three hours. I had already vomited during the second lap of the swim.
              My legs were empty, and the race plan I had trained for no longer existed.
            </p>

            <p>
              Quitting was the simplest option. No one would have blamed me.
            </p>

            <p>
              Instead, a strange calm settled in. I pedaled more steadily
              and made a deliberate decision: unless I was in serious physical danger,
              I would continue until my body physically stopped. Quitting just to
              escape discomfort wasn't something I wanted to carry.
            </p>

            <p>
              I sat down in the saddle, took in hydration and nutrition,
              and prioritized calm focus over physical pain.
            </p>

            <p>
              In Ironman, there is an old adage: "You can quit if you want
              and no one will care. But you will know. You will know for
              the rest of your life."
            </p>

            <p>
              Eleven hours later, I crossed the finish line.
            </p>

            <p>
              That day stopped being about endurance and became about the operating
              system I run when everything falls apart.
            </p>

            <span className="section-break">— — —</span>

            <p>
              Pressure does not build character. It reveals what was already installed.
            </p>

            <p>
              When the plan collapses and fatigue is total, you don't suddenly transform. You default to what you've already drilled — your composure, habits, and decision-making under stress.
            </p>

            <p>
              This principle has shown up across very different arenas.
            </p>

            <p>
              In Emergency First Response and Rescue Diver training, panic is often the real threat. Breathing accelerates, thinking narrows, and small problems become dangerous when emotion overrides process.
            </p>

            <p>
              In MMA sparring and BJJ matches, adrenaline, fatigue, and physical consequences test whether you stick with technique or let emotion take over. The best performers aren't usually the loudest — they're the ones who stay calm enough to think clearly.
            </p>

            <p>
              The same pattern appears in enterprise transformations. Overnight cutovers with zero margin for error, 2 a.m. crises, and demanding stakeholders quickly reveal whether a team's operating system is built for composure or collapse.
            </p>

            <p>
              The environments change. The operating system does not.
            </p>

            <p>
              Most people and teams perform fine when conditions are stable. What matters is what runs after the script breaks — when motivation is gone and nobody is watching.
            </p>

            <p>
              True resilience is quiet: consistency without applause, emotional control under pressure, and the willingness to keep executing in uncertainty.
            </p>

            <span className="section-break">— — —</span>

            <p>
              In a world being rewritten by AI and constant change, tools and processes will keep evolving. The ability to stay calm and functional when conditions turn ugly remains the real advantage.
            </p>

            <p>
              I bring this same operating system to enterprise transformation and AI operations — helping teams build the habits, governance, and composure to navigate chaos without breaking.
            </p>

            <p>
              If you're leading through uncertainty and value steady execution when it gets hard, I'd welcome the conversation.
            </p>
          </div>

          <div className="ar-footer">
            <p className="ar-footer-byline">
              <strong>Tony Lombardi</strong> is an enterprise transformation and AI operations leader based in Fuquay-Varina, NC. His work focuses on disciplined execution, operational resilience, and helping teams navigate uncertainty, pressure, and change. You can find his work at <a href="https://tonylombardi.ai">tonylombardi.ai</a>.
            </p>
            <div className="ar-nav">
              <Link href="/contact" className="ar-nav-link gold">Get in touch →</Link>
              <Link href="/about" className="ar-nav-link">About Tony</Link>
              <Link href="/experience" className="ar-nav-link">Experience</Link>
            </div>
          </div>
        </div>

        <footer className="wr-footer">
          <Link href="/" className="wr-footer-logo">
            tonylombardi<span>.ai</span>
          </Link>
          <div className="wr-footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="wr-footer-link">LinkedIn</a>
            <a href="/experience" className="wr-footer-link">Experience</a>
            <a href="/contact" className="wr-footer-link">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}