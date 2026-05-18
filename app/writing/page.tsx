import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Writing | Tony Lombardi",
  description:
    "The Operating System Doesn't Change — on resilience, leadership, transformation, and the operating system that remains when pressure rises and the plan fails.",
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
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 0.5px solid rgba(240,237,232,0.08);
        }

        .ar-byline strong {
          color: rgba(240,237,232,0.6);
          font-weight: 500;
        }

        .ar-body p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2.2vw, 22px);
          font-weight: 400;
          line-height: 1.75;
          color: rgba(240,237,232,0.8);
          margin-bottom: 28px;
        }

        .ar-body ul {
          margin: 0 0 28px 28px;
          color: rgba(240,237,232,0.8);
        }

        .ar-body li {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2.2vw, 22px);
          line-height: 1.75;
          margin-bottom: 8px;
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

        <div className="wr-header">
          <div className="wr-eyebrow">Writing</div>
          <h1 className="wr-title">The long game.</h1>
          <p className="wr-sub">
            Essays on enterprise transformation, endurance, AI operations, and the discipline that connects them.
          </p>
        </div>

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
              Mile 67. Headwinds at 20 to 30 miles per hour for three and a half hours. I had already vomited during the second lap of the swim. My legs had nothing left, and the plan I arrived with was gone. What happened next became a lesson in resilience, leadership, and the operating system that remains when pressure rises.
            </p>
            <a href="#article" className="wr-read-link">Read essay →</a>
          </div>
        </div>

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
              Mile 67. Headwinds at 20 to 30 miles per hour for three and a half hours. I had already vomited during the second lap of the swim. My legs had nothing left, and the plan I arrived with was gone.
            </p>

            <p>
              The plan was simple: get to the next aid station, hand in my timing chip, let them ask me three times if I wanted to quit, answer yes three times, find the nearest bar, and never do another triathlon again.
            </p>

            <p>
              As Mike Tyson famously said, everyone has a plan until they get punched in the face.
            </p>

            <p>
              What happened next was something I've thought about many times since — not just in endurance sports, but in leadership, business, and life.
            </p>

            <p>
              A strange calm came over me.
            </p>

            <p>
              I sat for twenty minutes and made a decision: unless I was in serious physical danger, I would continue until my body physically quit. Because if I quit simply to escape discomfort, exhaustion, or adversity, I would never be able to stand the person looking back at me in the mirror.
            </p>

            <p>
              So I grabbed another water bottle and kept moving.
            </p>

            <p>
              The only acceptable outcomes became medical extraction or the finish line.
            </p>

            <p>
              I crossed that finish line over fourteen hours later.
            </p>

            <p>
              At the time, I thought that experience was about endurance.
            </p>

            <p>
              Years later, I realized it was actually about operating systems.
            </p>

            <span className="section-break">— — —</span>

            <p>
              Pressure reveals what is already there.
            </p>

            <p>
              When the plan breaks, when conditions deteriorate, when uncertainty rises, when fatigue sets in — people do not suddenly become someone else. They fall back on the operating system they built long before the crisis arrived.
            </p>

            <p>
              The operating system does not change.
            </p>

            <p>
              That lesson has followed me everywhere:
            </p>

            <ul>
              <li>in Ironman races,</li>
              <li>in enterprise transformation work,</li>
              <li>in overnight implementation bridges with zero margin for failure,</li>
              <li>in Emergency First Response and Rescue Diver training, where panic itself becomes the primary threat,</li>
              <li>and in MMA and Brazilian Jiu-Jitsu environments, where composure disappears quickly if you allow emotion to overtake technique.</li>
            </ul>

            <p>
              The environments change.
            </p>

            <p>
              The operating system does not.
            </p>

            <p>
              Most people perform well when conditions are stable.
            </p>

            <p>
              What defines individuals and organizations is what happens after the script fails.
            </p>

            <p>
              Can you remain composed?
            </p>

            <p>
              Can you adapt?
            </p>

            <p>
              Can you continue executing when the original strategy no longer applies?
            </p>

            <p>
              Can you make decisions under pressure without losing your identity?
            </p>

            <p>
              Those moments expose whether resilience was ever truly built in the first place.
            </p>

            <span className="section-break">— — —</span>

            <p>
              Combat sports reinforced that lesson even further for me.
            </p>

            <p>
              There is a unique form of chaos that exists during a hard MMA sparring session or a Brazilian Jiu-Jitsu tournament match — adrenaline, uncertainty, physical consequence, fatigue, and the constant temptation to abandon technique for emotion.
            </p>

            <p>
              The athletes who perform best are rarely the loudest or most aggressive.
            </p>

            <p>
              They are the ones who remain composed enough to think clearly while pressure escalates around them.
            </p>

            <p>
              The same principle exists in Rescue Diver training.
            </p>

            <p>
              Underwater, panic compounds itself quickly. Breathing accelerates. Decision-making narrows. Small problems become dangerous when emotion overrides process. The training is not simply about physical skill. It is about slowing the mind down enough to continue functioning clearly while stress rises.
            </p>

            <p>
              That lesson translates directly into leadership.
            </p>

            <p>
              In high-pressure operational environments, the ability to remain calm while others become reactive is often the difference between resolution and escalation.
            </p>

            <p>
              One of the biggest misconceptions about resilience is that it is loud, emotional, or motivational.
            </p>

            <p>
              In my experience, it is usually quiet.
            </p>

            <p>
              It looks like:
            </p>

            <ul>
              <li>consistency when motivation disappears,</li>
              <li>discipline when outcomes are uncertain,</li>
              <li>emotional control under pressure,</li>
              <li>and continuing to move forward when nobody is watching.</li>
            </ul>

            <span className="section-break">— — —</span>

            <p>
              The world today rewards adaptability more than certainty.
            </p>

            <p>
              Industries are changing. Technology is changing. Careers are changing. Entire operating models are being rewritten in real time.
            </p>

            <p>
              AI is accelerating that reality even further.
            </p>

            <p>
              But while tools evolve, the underlying operating system still matters:
            </p>

            <ul>
              <li>discipline,</li>
              <li>composure,</li>
              <li>accountability,</li>
              <li>resilience,</li>
              <li>and the ability to continue functioning effectively when conditions become uncomfortable.</li>
            </ul>

            <p>
              That is true in endurance sports.
            </p>

            <p>
              It is true underwater.
            </p>

            <p>
              It is true in combat sports.
            </p>

            <p>
              And it is absolutely true in leadership.
            </p>

            <p>
              Looking back, the Ironman finish line itself mattered far less than the realization that came from it:
            </p>

            <p>
              You can survive far more than you think you can.
            </p>

            <p>
              And when the plan fails — as it often will — your operating system is what remains.
            </p>

            <p>
              Today, I apply that same mindset to leadership, transformation, and operational execution — helping organizations navigate uncertainty, pressure, and change without losing momentum.
            </p>

            <p>
              If you're building teams that value resilience, adaptability, disciplined execution, and composure under pressure, I'd welcome the conversation.
            </p>
          </div>

          <div className="ar-footer">
            <p className="ar-footer-byline">
              <strong>Tony Lombardi</strong> is an enterprise transformation and AI operations leader based in Fuquay-Varina, NC. He is a 7× Ironman finisher, Rescue Scuba Diver with Emergency First Response training, and active BJJ practitioner focused on resilience, disciplined execution, and helping organizations navigate change. You can find his work at <a href="https://tonylombardi.ai">tonylombardi.ai</a>.
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