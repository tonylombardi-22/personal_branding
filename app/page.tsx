import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
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

        /* ─── HERO ─────────────────────────────────── */
        .hero {
          padding: 110px 48px 90px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .hero-tag {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240, 237, 232, 0.4);
          border: 0.5px solid rgba(240, 237, 232, 0.15);
          padding: 6px 14px;
          border-radius: 2px;
          margin-bottom: 44px;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(64px, 10vw, 108px);
          font-weight: 600;
          line-height: 0.92;
          letter-spacing: -0.01em;
          margin-bottom: 36px;
          color: #f0ede8;
        }

        .hero-h1 .gold {
          color: #C8A96E;
          font-style: italic;
        }

        .hero-sub {
          font-size: 17px;
          font-weight: 300;
          line-height: 1.75;
          color: rgba(240, 237, 232, 0.6);
          max-width: 560px;
          margin-bottom: 52px;
        }

        .hero-btns {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: #f0ede8;
          color: #0a0a0a;
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.07em;
          border-radius: 2px;
          text-decoration: none;
          transition: opacity 0.2s ease;
        }

        .btn-primary:hover { opacity: 0.88; }

        .btn-ghost {
          border: 0.5px solid rgba(240, 237, 232, 0.25);
          color: rgba(240, 237, 232, 0.65);
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.07em;
          border-radius: 2px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .btn-ghost:hover {
          border-color: rgba(240, 237, 232, 0.5);
          color: rgba(240, 237, 232, 0.9);
        }

        /* ─── DIVIDER ──────────────────────────────── */
        .rule {
          border: none;
          border-top: 0.5px solid rgba(240, 237, 232, 0.08);
          margin: 0 48px;
        }

        /* ─── METRICS ──────────────────────────────── */
        .metrics {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 64px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .metric {
          padding-right: 40px;
          border-right: 0.5px solid rgba(240, 237, 232, 0.08);
          margin-right: 40px;
        }

        .metric:last-child {
          border-right: none;
          margin-right: 0;
          padding-right: 0;
        }

        .metric-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
          letter-spacing: -0.01em;
        }

        .metric-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(240, 237, 232, 0.38);
          letter-spacing: 0.04em;
          margin-top: 8px;
          line-height: 1.5;
        }

        /* ─── WHAT I DO ────────────────────────────── */
        .what {
          padding: 72px 48px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240, 237, 232, 0.28);
          margin-bottom: 44px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(240, 237, 232, 0.08);
        }

        .card {
          background: #0a0a0a;
          padding: 40px 36px;
          transition: background 0.2s ease;
        }

        .card:hover { background: #111; }

        .card-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          color: #C8A96E;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
          opacity: 0.7;
        }

        .card-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #f0ede8;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .card-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240, 237, 232, 0.42);
        }

        /* ─── DUAL IDENTITY ────────────────────────── */
        .identity {
          display: grid;
          grid-template-columns: 1fr 1fr;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 48px 80px;
        }

        .identity-col {
          padding: 64px 56px 64px 0;
          border-right: 0.5px solid rgba(240, 237, 232, 0.08);
        }

        .identity-col:last-child {
          border-right: none;
          padding: 64px 0 64px 56px;
        }

        .identity-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          line-height: 1.05;
          margin-bottom: 20px;
          color: #f0ede8;
        }

        .identity-headline em {
          font-style: italic;
          color: #C8A96E;
        }

        .identity-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240, 237, 232, 0.48);
          margin-bottom: 28px;
        }

        .pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }

        .pill {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(200, 169, 110, 0.8);
          border: 0.5px solid rgba(200, 169, 110, 0.3);
          padding: 5px 12px;
          border-radius: 2px;
        }

        /* ─── CTA BAR ──────────────────────────────── */
        .cta-bar {
          background: #C8A96E;
          padding: 72px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .cta-bar-text-wrap {}

        .cta-bar-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .cta-bar-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: rgba(10, 10, 10, 0.6);
        }

        .cta-bar-btn {
          background: #0a0a0a;
          color: #f0ede8;
          padding: 15px 36px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          letter-spacing: 0.08em;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }

        .cta-bar-btn:hover { opacity: 0.85; }

        /* ─── FOOTER ───────────────────────────────── */
        .footer {
          padding: 36px 48px;
          border-top: 0.5px solid rgba(240, 237, 232, 0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240, 237, 232, 0.25);
          text-decoration: none;
        }

        .footer-logo .gold { color: rgba(200, 169, 110, 0.4); }

        .footer-links {
          display: flex;
          gap: 28px;
          align-items: center;
        }

        .footer-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(240, 237, 232, 0.28);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }

        .footer-link:hover { color: rgba(240, 237, 232, 0.6); }

        /* ─── RESPONSIVE ───────────────────────────── */
        @media (max-width: 900px) {
          .hero { padding: 72px 24px 64px; }
          .rule { margin: 0 24px; }
          .metrics {
            grid-template-columns: repeat(2, 1fr);
            padding: 48px 24px;
            gap: 40px;
          }
          .metric {
            border-right: none;
            margin-right: 0;
            padding-right: 0;
            border-bottom: 0.5px solid rgba(240, 237, 232, 0.08);
            padding-bottom: 32px;
          }
          .metric:nth-child(2),
          .metric:last-child {
            border-bottom: none;
          }
          .what { padding: 56px 24px; }
          .cards { grid-template-columns: 1fr; }
          .identity {
            grid-template-columns: 1fr;
            padding: 0 24px 64px;
          }
          .identity-col {
            border-right: none;
            border-bottom: 0.5px solid rgba(240, 237, 232, 0.08);
            padding: 48px 0;
          }
          .identity-col:last-child {
            padding: 48px 0 0;
          }
          .cta-bar {
            flex-direction: column;
            align-items: flex-start;
            padding: 56px 24px;
          }
          .footer {
            padding: 32px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <section className="hero">
          <div className="hero-tag">Enterprise Transformation · AI Operations · Builder</div>
          <h1 className="hero-h1">
            High-agency<br />
            operator<br />
            <span className="gold">with range.</span>
          </h1>
          <p className="hero-sub">
            I walk into complexity, design the operating model, and deliver measurable results.
            20+ years across insurance, financial services, SaaS, and sports technology —
            from developer to portfolio director.
          </p>
          <div className="hero-btns">
            <Link href="/experience" className="btn-primary">View my work</Link>
            <Link href="/about" className="btn-ghost">My story</Link>
          </div>
        </section>

        <hr className="rule" />

        {/* Metrics */}
        <section className="metrics">
          <div className="metric">
            <div className="metric-num">$8.6M</div>
            <div className="metric-label">Portfolio governed<br />at Verisk Analytics</div>
          </div>
          <div className="metric">
            <div className="metric-num">$5B+</div>
            <div className="metric-label">Client assets<br />supported</div>
          </div>
          <div className="metric">
            <div className="metric-num">326</div>
            <div className="metric-label">Overnight branch rollouts,<br />zero failures</div>
          </div>
          <div className="metric">
            <div className="metric-num">7×</div>
            <div className="metric-label">Ironman finisher &<br />20+ marathons</div>
          </div>
        </section>

        <hr className="rule" />

        {/* What I Do */}
        <section className="what">
          <div className="section-eyebrow">What I do</div>
          <div className="cards">
            <div className="card">
              <div className="card-num">01</div>
              <div className="card-title">Enterprise transformation</div>
              <div className="card-body">
                I build the delivery infrastructure that turns executive vision into operational
                reality — governance, roadmaps, and the operating model to sustain it.
              </div>
            </div>
            <div className="card">
              <div className="card-num">02</div>
              <div className="card-title">AI-enabled operations</div>
              <div className="card-body">
                I design AI-assisted workflows, performance analytics systems, and automation
                pipelines that scale human judgment — not just human labor.
              </div>
            </div>
            <div className="card">
              <div className="card-num">03</div>
              <div className="card-title">Platform & product strategy</div>
              <div className="card-body">
                From SaaS modernization to consumer platform roadmaps built from zero — I
                translate business constraints into phased, fundable architectures.
              </div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* Dual Identity */}
        <section className="identity">
          <div className="identity-col">
            <div className="section-eyebrow">The professional</div>
            <div className="identity-headline">
              Every role.<br /><em>One operator.</em>
            </div>
            <p className="identity-body">
              I've held nearly every seat on a modern delivery team — developer, BA, Scrum Master,
              PM, program lead, principal consultant, portfolio director. That breadth means I lead
              without guessing at what the work actually costs.
            </p>
            <div className="pills">
              <span className="pill">Verisk Analytics</span>
              <span className="pill">First Citizens Bank</span>
              <span className="pill">Jahnel Group</span>
              <span className="pill">The Fight Don</span>
              <span className="pill">USPTO Patent</span>
              <span className="pill">SOC 1 / SOC 2</span>
            </div>
          </div>
          <div className="identity-col">
            <div className="section-eyebrow">The athlete</div>
            <div className="identity-headline">
              Same discipline.<br /><em>Different arena.</em>
            </div>
            <p className="identity-body">
              Seven Ironman finishes. 20+ marathons. Active BJJ practitioner. Amateur MMA
              competitor. Currently pursuing a first-of-its-kind milestone: a sanctioned MMA
              fight and a full-distance Ironman in the same calendar year.
            </p>
            <div className="pills">
              <span className="pill">7× Ironman</span>
              <span className="pill">Brazilian Jiu-Jitsu</span>
              <span className="pill">Amateur MMA</span>
              <span className="pill">20+ marathons</span>
              <span className="pill">Emergency First Responder</span>
            </div>
          </div>
        </section>

        {/* CTA Bar */}
        <div className="cta-bar">
          <div className="cta-bar-text-wrap">
            <div className="cta-bar-headline">Ready to build something that works.</div>
            <div className="cta-bar-sub">
              Open to transformation leadership, consulting, and strategic advisory roles.
            </div>
          </div>
          <Link href="/contact" className="cta-bar-btn">Get in touch →</Link>
        </div>

        {/* Footer */}
        <footer className="footer">
          <Link href="/" className="footer-logo">
            TonyLombardi<span className="gold">.ai</span>
          </Link>
          <div className="footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="/resume" className="footer-link">Resume</a>
            <a href="mailto:tonylombardi1@gmail.com" className="footer-link">tonylombardi1@gmail.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}