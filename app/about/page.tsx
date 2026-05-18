import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "About | Tony Lombardi",
  description:
    "The operating system doesn't change. The arena does. 20+ years of enterprise transformation, 7× Ironman finisher, active BJJ practitioner pursuing a first-of-its-kind milestone.",
};

export default function About() {
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
        .ab-hero {
          padding: 100px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 80px;
          align-items: end;
        }

        .ab-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          margin-bottom: 32px;
        }

        .ab-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(56px, 8vw, 86px);
          font-weight: 600;
          line-height: 0.93;
          color: #f0ede8;
          letter-spacing: -0.01em;
        }

        .ab-h1 em {
          color: #C8A96E;
          font-style: italic;
        }

        .ab-hero-right {
          padding-bottom: 8px;
        }

        .ab-hero-stat {
          border-left: 0.5px solid rgba(200,169,110,0.3);
          padding-left: 20px;
          margin-bottom: 28px;
        }

        .ab-hero-stat:last-child { margin-bottom: 0; }

        .ab-hero-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
        }

        .ab-hero-stat-label {
          font-size: 12px;
          color: rgba(240,237,232,0.38);
          letter-spacing: 0.04em;
          margin-top: 5px;
          line-height: 1.4;
        }

        /* ── RULE ─────────────────────────────── */
        .rule {
          border: none;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          margin: 0 48px;
        }

        /* ── STORY ────────────────────────────── */
        .ab-story {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 72px;
          padding: 80px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ab-story-nav {
          position: sticky;
          top: 88px;
          height: fit-content;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .ab-story-nav-item {
          font-size: 12px;
          letter-spacing: 0.05em;
          color: rgba(240,237,232,0.28);
          padding: 9px 0 9px 16px;
          border-left: 0.5px solid rgba(240,237,232,0.1);
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          text-decoration: none;
          display: block;
        }

        .ab-story-nav-item:hover {
          color: rgba(240,237,232,0.65);
        }

        .ab-story-content {
          display: flex;
          flex-direction: column;
          gap: 72px;
        }

        .ab-section {}

        .ab-section-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.25);
          margin-bottom: 20px;
        }

        .ab-section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 38px;
          font-weight: 600;
          line-height: 1.05;
          color: #f0ede8;
          margin-bottom: 24px;
        }

        .ab-section-title em {
          color: #C8A96E;
          font-style: italic;
        }

        .ab-body {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.95;
          color: rgba(240,237,232,0.52);
          margin-bottom: 18px;
        }

        .ab-body:last-of-type { margin-bottom: 0; }

        .ab-pull {
          font-family: 'Cormorant Garamond', serif;
          font-size: 21px;
          font-style: italic;
          font-weight: 500;
          color: rgba(200,169,110,0.75);
          border-left: 1.5px solid rgba(200,169,110,0.25);
          padding: 4px 0 4px 22px;
          margin: 32px 0;
          line-height: 1.45;
        }

        .ab-stats-row {
          display: flex;
          gap: 40px;
          margin: 32px 0;
          flex-wrap: wrap;
        }

        .ab-stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
        }

        .ab-stat-label {
          font-size: 11px;
          color: rgba(240,237,232,0.32);
          letter-spacing: 0.05em;
          margin-top: 6px;
          line-height: 1.4;
        }

        .ab-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 28px;
        }

        .ab-pill {
          font-size: 11px;
          letter-spacing: 0.07em;
          color: rgba(200,169,110,0.7);
          border: 0.5px solid rgba(200,169,110,0.2);
          padding: 5px 14px;
          border-radius: 2px;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          cursor: default;
        }

        .ab-pill:hover {
          color: #C8A96E;
          border-color: rgba(200,169,110,0.55);
          background: rgba(200,169,110,0.06);
        }

        /* ── ATHLETIC PHOTOS ──────────────────── */
        .ab-photos {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          grid-template-rows: auto auto;
          gap: 8px;
          margin: 32px 0;
        }

        .ab-photo-primary {
          grid-row: 1 / 3;
          position: relative;
          overflow: hidden;
          border-radius: 3px;
        }

        .ab-photo-primary img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(10%) contrast(1.04);
          transition: transform 0.4s ease;
        }

        .ab-photo-primary:hover img { transform: scale(1.02); }

        .ab-photo-secondary {
          position: relative;
          overflow: hidden;
          border-radius: 3px;
          aspect-ratio: 4 / 3;
        }

        .ab-photo-secondary img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          filter: grayscale(10%) contrast(1.04);
          transition: transform 0.4s ease;
        }

        .ab-photo-secondary:hover img { transform: scale(1.02); }

        .ab-photo-caption {
          position: absolute;
          bottom: 10px;
          left: 10px;
          font-size: 9px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(200,169,110,0.8);
          background: rgba(10,10,10,0.65);
          padding: 4px 8px;
          border-radius: 2px;
          backdrop-filter: blur(4px);
        }

        @media (max-width: 700px) {
          .ab-photos {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .ab-photo-primary { grid-row: auto; aspect-ratio: 3/4; }
        }

        /* ── CTA BAR ──────────────────────────── */
        .ab-cta {
          background: #C8A96E;
          padding: 72px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .ab-cta-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: #0a0a0a;
          line-height: 1.05;
          margin-bottom: 8px;
        }

        .ab-cta-sub {
          font-size: 13px;
          font-weight: 300;
          color: rgba(10,10,10,0.58);
        }

        .ab-cta-btn {
          background: #0a0a0a;
          color: #f0ede8;
          padding: 15px 36px;
          font-size: 12.5px;
          letter-spacing: 0.08em;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s;
        }

        .ab-cta-btn:hover { opacity: 0.85; }

        /* ── FOOTER ───────────────────────────── */
        .ab-footer {
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

        .ab-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.2);
          text-decoration: none;
        }

        .ab-footer-logo span { color: rgba(200,169,110,0.35); }

        .ab-footer-links {
          display: flex;
          gap: 28px;
        }

        .ab-footer-link {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }

        .ab-footer-link:hover { color: rgba(240,237,232,0.55); }

        /* ── RESPONSIVE ───────────────────────── */
        @media (max-width: 900px) {
          .ab-hero {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 24px 64px;
          }

          .ab-hero-right {
            display: flex;
            gap: 32px;
            flex-wrap: wrap;
            border-top: 0.5px solid rgba(240,237,232,0.08);
            padding-top: 32px;
          }

          .ab-hero-stat {
            margin-bottom: 0;
          }

          .rule { margin: 0 24px; }

          .ab-story {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 56px 24px;
          }

          .ab-story-nav {
            position: static;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 4px;
          }

          .ab-story-nav-item {
            border-left: none;
            border-bottom: 0.5px solid rgba(240,237,232,0.1);
            padding: 6px 12px 6px 0;
          }

          .ab-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 56px 24px;
          }

          .ab-footer {
            padding: 32px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <section className="ab-hero">
          <div>
            <div className="ab-eyebrow">About</div>
            <h1 className="ab-h1">
              Different arena.<br />
              <em>Same obsession.</em>
            </h1>
          </div>
          <div className="ab-hero-right">
            <div className="ab-hero-stat">
              <div className="ab-hero-stat-num">20+</div>
              <div className="ab-hero-stat-label">Years across every role<br />on a delivery team</div>
            </div>
            <div className="ab-hero-stat">
              <div className="ab-hero-stat-num">7×</div>
              <div className="ab-hero-stat-label">Ironman finisher &<br />20+ marathon completions</div>
            </div>
            <div className="ab-hero-stat">
              <div className="ab-hero-stat-num">1st</div>
              <div className="ab-hero-stat-label">Pursuing MMA fight +<br />Ironman in same year</div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* Story */}
        <div className="ab-story">

          {/* Left nav */}
          <nav className="ab-story-nav" aria-label="Page sections">
            <a href="#operator" className="ab-story-nav-item">The operator</a>
            <a href="#athlete" className="ab-story-nav-item">The athlete</a>
            <a href="#builder" className="ab-story-nav-item">The builder</a>
            <a href="#now" className="ab-story-nav-item">Right now</a>
          </nav>

          {/* Content */}
          <div className="ab-story-content">

            {/* The Operator */}
            <section id="operator" className="ab-section">
              <div className="ab-section-label">01</div>
              <div className="ab-section-title">The <em>operator</em></div>
              <p className="ab-body">
                I started my career as a developer and business analyst at Travelers, where I was selected into a leadership development program that accepted 10–15 people from a pool of over 3,000 applicants. I rotated through every seat on a delivery team — developer, BA, project lead, project manager — which gave me a ground-level understanding of how technology actually gets built that most senior leaders never acquire.
              </p>
              <p className="ab-body">
                That breadth became the foundation for everything that followed. At ESPN, First Citizens Bank, Apex Systems, Jahnel Group, and Verisk Analytics, I wasn't just managing programs. I was redesigning the operating models underneath them — cutting delivery cycle times by 50–60%, delivering SOC 1 and SOC 2 certifications months ahead of schedule, and translating executive vision into roadmaps that actually survived contact with reality.
              </p>
              <div className="ab-pull">
                "I read operational signals early — before they become compliance findings, missed SLAs, or executive escalations."
              </div>
              <div className="ab-stats-row">
                <div>
                  <div className="ab-stat-num">$8.6M</div>
                  <div className="ab-stat-label">Portfolio governed<br />at Verisk Analytics</div>
                </div>
                <div>
                  <div className="ab-stat-num">326</div>
                  <div className="ab-stat-label">Overnight branch rollouts,<br />zero failures</div>
                </div>
                <div>
                  <div className="ab-stat-num">3mos</div>
                  <div className="ab-stat-label">Ahead of schedule<br />on SOC 2 delivery</div>
                </div>
              </div>
              <div className="ab-pills">
                <span className="ab-pill">Verisk Analytics</span>
                <span className="ab-pill">First Citizens Bank</span>
                <span className="ab-pill">Jahnel Group</span>
                <span className="ab-pill">ESPN</span>
                <span className="ab-pill">Travelers</span>
                <span className="ab-pill">SAFe · Scrum · Kanban</span>
                <span className="ab-pill">SOC 1 / SOC 2</span>
                <span className="ab-pill">AWS</span>
              </div>
              <div className="ab-pull">
                "I design operating models the way I train for an Ironman — clear milestones, relentless iteration, accountability, and the endurance to see it through."
              </div>
            </section>

            {/* The Athlete */}
            <section id="athlete" className="ab-section">
              <div className="ab-section-label">02</div>
              <div className="ab-section-title">The <em>athlete</em></div>
              <p className="ab-body">
                Seven Ironman finishes. 20+ marathons. Active Brazilian Jiu-Jitsu practitioner pursuing a first-of-its-kind milestone: a sanctioned MMA fight and a full-distance Ironman in the same calendar year. Certified Emergency First Responder and rescue scuba diver.
              </p>
              <p className="ab-body">
                The athletic identity is not separate from the professional one — it is the same identity in a different arena. The discipline required to cross seven Ironman finish lines is the same discipline that runs 326 overnight branch implementations without a single failure. Endurance isn't a hobby. It's the operating system.
              </p>
              <div className="ab-pull">
                "Most people stop after one mountain. The obsession is the same — different terrain."
              </div>
              <p className="ab-body">
                After stepping back from competition from 2014–2019 through major life transitions — marriage, children, relocation to North Carolina — the return to training in 2020 had one goal: Ironman Florida 2021. That finish line led to two more — Ironman Florida 2023 and 2024. In spring 2025, a new arena opened. Brazilian Jiu-Jitsu came first. Then kickboxing. Then Muay Thai. Then MMA. Each discipline building on the last — the same way every career transition has. Now pursuing what no one has attempted: a sanctioned MMA fight and a full-distance Ironman in the same calendar year.
              </p>
              <div className="ab-pills">
                <span className="ab-pill">7× Ironman</span>
                <span className="ab-pill">20+ marathons</span>
                <span className="ab-pill">Brazilian Jiu-Jitsu</span>
                <span className="ab-pill">MMA in progress</span>
                <span className="ab-pill">Emergency First Responder</span>
                <span className="ab-pill">Rescue Scuba Diver</span>
              </div>

              {/* Athletic photo grid */}
              <div className="ab-photos">
                <div className="ab-photo-primary">
                  <img src="/athletic_photo_1.jpg" alt="Tony Lombardi — Ironman triathlon" />
                  <div className="ab-photo-caption">7× Ironman finisher</div>
                </div>
                <div className="ab-photo-secondary">
                  <img src="/athletic_photo_2.jpg" alt="Tony Lombardi — Ironman finish line" />
                  <div className="ab-photo-caption">Ironman finish line</div>
                </div>
                <div className="ab-photo-secondary">
                  <img src="/athletic_photo_3.jpg" alt="Tony Lombardi — Brazilian Jiu-Jitsu" />
                  <div className="ab-photo-caption">Brazilian Jiu-Jitsu</div>
                </div>
              </div>

              {/* One man two worlds poster */}
              <div style={{ marginTop: "32px", display: "flex", justifyContent: "center" }}>
                <img
                  src="/1_man_2_worlds.png"
                  alt="Tony Lombardi — One man. Two worlds."
                  style={{ width: "80%", display: "block", borderRadius: "4px" }}
                />
              </div>

            </section>

            {/* The Builder */}
            <section id="builder" className="ab-section">
              <div className="ab-section-label">03</div>
              <div className="ab-section-title">The <em>builder</em></div>
              <p className="ab-body">
                Named inventor on a USPTO patent application. Founder and president of the Jared P. Grenier Scholarship Foundation — a 501(c)(3) nonprofit I founded in 2006 in memory of a friend, and have sustained without interruption for nearly 20 years. Former president of the Hartford Extended Area Triathletes.
              </p>
              <p className="ab-body">
                Building things that outlast the moment they were created is a pattern that runs through every part of this career. The nonprofit has no performance review, no compensation, and no external motivation. It persists entirely because of personal commitment to something larger than career — which is the same reason programs I design tend to survive leadership changes, budget cuts, and scope shifts.
              </p>
              <div className="ab-pills">
                <span className="ab-pill">USPTO Patent</span>
                <span className="ab-pill">Nonprofit Founder — 20 years</span>
                <span className="ab-pill">501(c)(3)</span>
                <span className="ab-pill">HEAT Triathletes President</span>
              </div>
            </section>

            {/* Right Now */}
            <section id="now" className="ab-section">
              <div className="ab-section-label">04</div>
              <div className="ab-section-title">Right <em>now</em></div>
              <p className="ab-body">
                Currently serving as Director of Digital Transformation and AI Operations at The Fight Don — a growth-stage combat sports organization — where I'm building AI-enabled performance analytics systems, digital operating infrastructure, and a phased consumer platform roadmap from zero. Supporting flagship fighters including Parker Porter and Ryan "Royal" Reber, both competing in BKFC.
              </p>
              <p className="ab-body">
                Simultaneously signed as a fighter under the organization's banner — pursuing the MMA + Ironman milestone while building the AI automation capability that will define the next phase of the career. Based in Fuquay-Varina, NC. Open to transformation leadership, consulting, and strategic advisory roles — on-site, hybrid, or remote.
              </p>
              <div className="ab-pills">
                <span className="ab-pill">The Fight Don</span>
                <span className="ab-pill">AI Operations</span>
                <span className="ab-pill">Fuquay-Varina, NC</span>
                <span className="ab-pill">Open to work</span>
              </div>
            </section>

          </div>
        </div>

        {/* Podcast Section */}
        <section style={{
          padding: "72px 48px",
          maxWidth: "1100px",
          margin: "0 auto",
        }}>
          <div style={{
            fontSize: "11px",
            letterSpacing: "0.14em",
            textTransform: "uppercase" as const,
            color: "rgba(240,237,232,0.28)",
            marginBottom: "12px",
          }}>
            Featured
          </div>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "32px",
            fontWeight: 600,
            color: "#f0ede8",
            marginBottom: "8px",
            lineHeight: 1.1,
          }}>
            The Mad Coach Podcast
          </div>
          <p style={{
            fontSize: "13px",
            fontWeight: 300,
            color: "rgba(240,237,232,0.42)",
            marginBottom: "36px",
            lineHeight: 1.7,
            maxWidth: "560px",
          }}>
            A conversation about the dual identity — enterprise operator and combat sports competitor.
            What it takes to pursue two elite challenges simultaneously, and why the mindset is identical.
          </p>

          {/* Primary embed — combined cut */}
          <div style={{ marginBottom: "16px" }}>
            <div style={{
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "rgba(200,169,110,0.55)",
              marginBottom: "10px",
            }}>
              Full conversation — edited cut
            </div>
            <iframe
              style={{ borderRadius: "8px" }}
              src="https://open.spotify.com/embed/episode/6xKKeVJdOn5VGaVzvQlDf5?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* Part 1 and Part 2 side by side */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
            marginTop: "16px",
          }}>
            <div>
              <div style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(240,237,232,0.2)",
                marginBottom: "10px",
              }}>
                Part 1
              </div>
              <iframe
                style={{ borderRadius: "8px" }}
                src="https://open.spotify.com/embed/episode/1VejZb5DwAPjYeZhRN5wHz?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
            <div>
              <div style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                color: "rgba(240,237,232,0.2)",
                marginBottom: "10px",
              }}>
                Part 2
              </div>
              <iframe
                style={{ borderRadius: "8px" }}
                src="https://open.spotify.com/embed/episode/3KO0T7jxhSbprKjYQw3Sso?utm_source=generator&theme=0"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* CTA */}
        <div className="ab-cta">
          <div>
            <div className="ab-cta-headline">Let's build something that works.</div>
            <div className="ab-cta-sub">Open to transformation leadership, consulting, and strategic advisory roles.</div>
          </div>
          <Link href="/contact" className="ab-cta-btn">Get in touch →</Link>
        </div>

        {/* Footer */}
        <footer className="ab-footer">
          <Link href="/" className="ab-footer-logo">
            tonyLombardi<span>.ai</span>
          </Link>
          <div className="ab-footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="ab-footer-link">LinkedIn</a>
            <a href="/experience" className="ab-footer-link">Experience</a>
            <a href="/contact" className="ab-footer-link">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}