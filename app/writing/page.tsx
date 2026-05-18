import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

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

        .ar-byline {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.35);
          margin-bottom: 48px;
          padding-bottom: 48px;
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
              Mile 67. Headwinds at 20 to 30 miles per hour for three and a half hours. I had vomited on the second lap of the swim. My legs had nothing left. I had a plan, and the plan was finished. What happened next is the same story as 326 overnight branch implementations, zero failures.
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
          </div>

          <h2 className="ar-headline">
            The Operating System<br />Doesn't Change.
          </h2>

          <div className="ar-byline">
            By <strong>Tony Lombardi</strong>
          </div>

          <div className="ar-body">
            <p>
              Mile 67. Headwinds at 20 to 30 miles per hour for three and a half hours. I had vomited on the second lap of the swim. My legs had nothing left. I had a plan, and the plan was finished.
            </p>

            <p>
              The plan was simple: get to the next aid station, hand in my timing chip, let them ask me three times if I wanted to quit, answer yes three times, find the nearest bar, and never do another triathlon again.
            </p>

            <p>
              As Mike Tyson famously put it — everyone has a plan until they get punched in the face.
            </p>

            <p>
              What happened instead was stranger. A calm came over me. I took twenty minutes. I told myself something that I've thought about many times since: <em>Unless you are in serious physical danger or risking death, you will carry on until your body quits. If you quit, you will never be able to stand the face you see in the mirror.</em> I grabbed a water bottle at the next aid station and pushed on. The only acceptable outcomes were medical extraction or the finish line.
            </p>

            <p>
              I crossed that finish line 14 hours, 25 minutes, and 57 seconds after I started — my slowest Ironman ever, and the one I'm most proud of.
            </p>

            <span className="section-break">— — —</span>

            <p>
              People ask me what endurance sports have to do with enterprise transformation. I've never had a clean answer. But after twenty years of leading programs across insurance, financial services, and SaaS — and seven Ironman finishes — I've come to believe they're not two things. They're the same thing.
            </p>

            <p>
              The cognitive operating system is identical.
            </p>

            <p>
              At First Citizens Bank, I ran 326 consecutive overnight branch implementations. Every night, after each branch closed, I opened a conference bridge. Technicians checked in. The branch manager confirmed. I gave the go-ahead and ran status checks through the night. When a Bloomberg data feed failed at 2 AM with a hard 9 AM branch open deadline and no margin for error, I stayed on the bridge and worked it through to resolution. Ninety minutes before the deadline, the feed was restored. Zero branches missed their opening.
            </p>

            <p>
              That's not a technology story. That's the same story as mile 67.
            </p>

            <p>
              Small goals. One segment at a time. Don't look at the finish line — look at the next landmark. When the vendor fails, you don't quit; you escalate, stay on the line, and work through to resolution. The bridge stays open as long as it needs to stay open.
            </p>

            <p>
              In the race, I set targets from hotel sign to ice cream shop, running 25 to 100 yards at a time for hours. In the bank, I set targets from branch close to branch open, one location at a time across 326 nights. The physical pain is different. The mental architecture is the same.
            </p>

            <span className="section-break">— — —</span>

            <p>
              What I've learned is that the operating system isn't built in races or boardrooms. It's built in the moments when the plan fails and the only available input is whether you continue or don't.
            </p>

            <p>
              Telling my wife on Father's Day 2020 that I wanted to try another Ironman after nearly a decade away — that was the same conversation as every transformation engagement I've walked into. No infrastructure. No playbook. A program already running. The question is always the same: <em>Are you going to build this thing or not?</em>
            </p>

            <p>
              The answer, every time, has been yes.
            </p>

            <span className="section-break">— — —</span>

            <p>
              Now I'm doing something I haven't done before. Brazilian Jiu-Jitsu. Kickboxing. Muay Thai. MMA. I'm pursuing what would be a first-of-its-kind milestone: a sanctioned MMA fight and a full-distance Ironman triathlon in the same calendar year.
            </p>

            <p>
              People ask why. I don't have a good answer for that either.
            </p>

            <p>
              What I know is that the operating system doesn't change. The arena does. The discipline, the sequencing, the refusal to stop at mile 67 — those are constant. They show up on the mat the same way they show up in the conference bridge at 2 AM.
            </p>

            <p>
              Ironman taught me something I've never been able to fully articulate until recently: it's not a race. It enters your bloodstream, and no matter how far you veer from it, it waits. Patient. It waits for you to decide to prove to yourself that anything is possible.
            </p>

            <p>
              I've decided again.
            </p>
          </div>

          <div className="ar-footer">
            <p className="ar-footer-byline">
              <strong>Tony Lombardi</strong> is an enterprise transformation and AI operations leader based in Fuquay-Varina, NC. He is a 7× Ironman finisher and active BJJ practitioner pursuing a first-of-its-kind milestone: a sanctioned MMA fight and a full-distance Ironman in the same calendar year. You can find his work at <a href="https://tonylombardi.ai">tonylombardi.ai</a>.
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
            tonyLombardi<span>.ai</span>
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