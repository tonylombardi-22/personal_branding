import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Projects | Tony Lombardi",
  description:
    "DMV 2.0 · The Fight Don · Jared P. Grenier Scholarship Foundation · The Hybrid Athlete Milestone · Travelers ITLDP. Five projects that show the range.",
};

const projects = [
  {
    number: "01",
    name: "DMV 2.0",
    positioning:
      "A mobile-first GovTech disruption concept that would replace Connecticut's in-person vehicle registration process with an on-demand, Uber-style field service — designed, patented, and pitched at the gubernatorial level.",
    summary:
      "Connecticut's DMV registration process for private vehicle sales was paper-heavy, slow, and required in-person visits — friction the system had accepted for decades. Tony founded LCL Business Solutions, assembled a four-person team, and designed a dual mobile app allowing consumers to schedule a registration appointment while a trained DMV 2.0 field employee came to their location, processed all documentation via mobile OCR and VIN verification, collected payment, and installed plates on the spot. A non-provisional patent application was filed with the USPTO and a trademark application was cleared. The concept was adopted as a policy platform element by a major-party Connecticut gubernatorial campaign before the project was discontinued following the 2018 election.",
    proofPoints: [
      "USPTO non-provisional patent filed August 13, 2018 (App. No. 16/102,677); converted to provisional No. 62/763,133 with Anthony Dominic Lombardi as named inventor",
      "USPTO trademark application (Serial No. 88132179) cleared with no conflicting marks",
      "Concept formally adopted by the Bob Stefanowski 2018 Connecticut gubernatorial campaign as a policy platform element",
    ],
    tags: ["GovTech", "Product Design", "Patent", "Startup", "Digital Transformation"],
    role: "Founder & President, LCL Business Solutions",
    year: "2017 — 2018",
  },
  {
    number: "02",
    name: "The Fight Don — Digital Platform & AI Operations",
    positioning:
      "A complete digital operating infrastructure and AI-enabled performance analytics platform built from zero for a growth-stage combat sports organization.",
    summary:
      "A launching combat sports organization had no technology infrastructure, no digital operating model, and no playbook — everything needed to be stood up simultaneously with active business operations. Tony designed and deployed the full collaboration and productivity stack, architected a modular training platform spanning MMA, BJJ, boxing, Muay Thai, and bare-knuckle disciplines, and built fighter performance analytics infrastructure capturing training load, progression, and fight preparation metrics. He simultaneously designed a two-phase consumer digital platform roadmap — Phase 1 monetizing sponsorships and ticket sales to self-fund Phase 2's full platform buildout — and developed a structured sponsorship pipeline converting ad hoc conversations into a tracked, measurable revenue stream.",
    proofPoints: [
      "Full digital operating stack — Slack, Google Workspace, Dropbox, Monday.com — live within the first 30 days from zero legacy foundation",
      "Two-phase consumer platform roadmap designed to self-fund the full platform buildout through early-stage revenue operations — no external capital required for Phase 1",
      "Complete digital operating model designed, standing, and actively generating revenue operations within the first 120 days of engagement",
    ],
    tags: ["AI-Enabled Operations", "Sports Technology", "Operating Model Design", "Digital Infrastructure", "Startup"],
    role: "Director, Digital Transformation & AI Operations",
    year: "2025 — Present",
  },
  {
    number: "03",
    name: "Jared P. Grenier Scholarship Foundation",
    positioning:
      "A living tribute to a friend who deserved to be remembered — a 501(c)(3) scholarship founded in 2006 that has awarded a graduating Southington High School senior every single year since.",
    summary:
      "In 2006, following the loss of a close friend, Tony Lombardi co-founded the Jared P. Grenier Scholarship Foundation alongside Jared's friends and family — not as a career accomplishment, but because the people who loved him wanted his memory to mean something beyond grief. Tony secured full 501(c)(3) nonprofit status, designed the annual selection process from scratch, and has served as President continuously since founding. The scholarship is awarded each year to a graduating senior from Southington High School who best embodies the values Jared represented: friendship, loyalty, and love. Applicants submit a peer reference, a photograph, and an essay describing what friendship means to them and how the photograph relates to it. Nearly two decades later, the award has never been missed.",
    proofPoints: [
      "Full 501(c)(3) nonprofit status obtained and maintained since 2006",
      "Annual scholarship awarded to a Southington High School graduating senior every year without interruption for nearly 20 years",
      "Four-person board — President, Vice President, Secretary, Treasurer — sustained across the full tenure with no external funding or institutional support",
    ],
    tags: ["501(c)(3) Governance", "Nonprofit Operations", "Program Design", "Award Administration", "Community Institution Building"],
    role: "Co-Founder & President",
    year: "2006 — Present",
  },
  {
    number: "04",
    name: "The Hybrid Athlete Milestone",
    positioning:
      "An active pursuit of a first-of-its-kind athletic milestone: a sanctioned MMA fight and a full-distance Ironman triathlon in the same calendar year — built on a 7-Ironman, 20-marathon endurance foundation and a combat sports development track begun in 2025.",
    summary:
      "Tony Lombardi has competed in endurance sports since 2007, accumulating seven Ironman finishes and more than twenty marathon completions before stepping back from competition during a period of major life transition from 2014 to 2019. He returned to Ironman competition in 2021 — completing Ironman Florida under severe race conditions — and has finished Ironman Florida again in 2023 and 2024. Beginning in spring 2025, he added combat sports: Brazilian Jiu-Jitsu, kickboxing, Muay Thai, and MMA, completing two competitive BJJ matches and one live unsanctioned MMA smoker round. He is currently a BJJ white belt with one stripe, targeting blue belt as the prerequisite for sanctioned MMA competition. The dual milestone is actively in progress — timing contingent on belt progression. The discipline, sequencing, and long-term goal execution that defines this pursuit is the same operating model applied across every professional engagement in the career.",
    proofPoints: [
      "Seven Ironman finishes, including three consecutive post-comeback completions at Ironman Florida in 2021, 2023, and 2024",
      "Two competitive BJJ matches and one live unsanctioned MMA smoker round completed",
      "PADI Rescue Diver certified in 2023, including Emergency First Responder certification — sustaining a scuba practice begun with Junior Open Water certification in 1996",
    ],
    tags: ["Endurance Performance", "Combat Sports Development", "Multi-Discipline Training", "Long-Horizon Goal Execution", "Performance Analytics"],
    role: "Athlete — In Progress",
    year: "2007 — Present",
  },
  {
    number: "05",
    name: "Travelers IT Leadership Development Program",
    positioning:
      "The origin of a full-stack delivery career: selected into one of financial services' most competitive corporate leadership programs — top 30% of 3,000+ applicants, 10–15 accepted — rotating through developer, BA, project lead, and PM seats on mission-critical systems.",
    summary:
      "Tony Lombardi entered Travelers' IT Leadership Development Program in 2006 after earning a contingent full-time offer through a 2005 summer internship, completing his M.S. in Information Systems with a 3.92 GPA to qualify. Over five rotations across five distinct business units, he held nearly every role on a modern delivery team simultaneously — developer, business analyst, QA tester, Scrum Master, budget owner, and team leader — often within a single engagement. He also chaired the Leadership Development Intern Program during his LDP tenure, designing programming, mentoring early-career talent, and running the pipeline that fed future cohorts. The breadth of that foundation — built at a Fortune 100 insurer alongside ThoughtWorks consultants, years before Agile reached mainstream corporate adoption — is the ground-level credibility that distinguishes every transformation leadership role that followed.",
    proofPoints: [
      "Selected into the Travelers ITLDP in the top 30% of a cohort drawn from 3,000+ applicants — 10 to 15 participants accepted annually",
      "Completed five rotations across five distinct business units spanning Agile development, infrastructure project management, QA team leadership, waterfall budget delivery, and legacy system modernization",
      "Chaired the Leadership Development Intern Program during LDP tenure — designing programming and mentoring early-career talent across the full early-in-career pipeline",
    ],
    tags: ["Fortune 100 Enterprise", "Multi-Role Delivery Immersion", "Early-Career Foundation", "Agile Methodology", "Talent Development"],
    role: "IT Leadership Development Program",
    year: "2006 — 2012",
  },
];

export default function Projects() {
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
        .pj-hero {
          padding: 100px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pj-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          margin-bottom: 28px;
        }

        .pj-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 78px);
          font-weight: 600;
          line-height: 0.93;
          color: #f0ede8;
          margin-bottom: 32px;
          letter-spacing: -0.01em;
        }

        .pj-h1 em {
          color: #C8A96E;
          font-style: italic;
        }

        .pj-lead {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240,237,232,0.5);
          max-width: 560px;
        }

        /* ── RULE ─────────────────────────────── */
        .rule {
          border: none;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          margin: 0 48px;
        }

        /* ── PROJECT CARDS ────────────────────── */
        .pj-projects {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(240,237,232,0.06);
        }

        .pj-project {
          background: #0a0a0a;
          padding: 72px 48px;
          display: grid;
          grid-template-columns: 260px 1fr;
          gap: 72px;
          transition: background 0.2s ease;
        }

        .pj-project:hover { background: #0d0d0d; }

        /* Left column */
        .pj-left {}

        .pj-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 13px;
          font-weight: 500;
          color: rgba(200,169,110,0.4);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
        }

        .pj-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 600;
          color: #f0ede8;
          line-height: 1.15;
          margin-bottom: 10px;
        }

        .pj-role {
          font-size: 11px;
          color: rgba(240,237,232,0.3);
          letter-spacing: 0.04em;
          margin-bottom: 4px;
          line-height: 1.5;
        }

        .pj-year {
          font-size: 11px;
          color: rgba(240,237,232,0.2);
          letter-spacing: 0.06em;
          margin-bottom: 24px;
        }

        .pj-tags {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .pj-tag {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(200,169,110,0.65);
          border: 0.5px solid rgba(200,169,110,0.2);
          padding: 3px 10px;
          border-radius: 2px;
          width: fit-content;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
          cursor: default;
        }

        .pj-tag:hover {
          color: #C8A96E;
          border-color: rgba(200,169,110,0.55);
          background: rgba(200,169,110,0.06);
        }

        /* Right column */
        .pj-right {}

        .pj-positioning {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-style: italic;
          font-weight: 500;
          color: rgba(200,169,110,0.75);
          line-height: 1.45;
          margin-bottom: 28px;
          border-left: 1.5px solid rgba(200,169,110,0.25);
          padding-left: 22px;
        }

        .pj-summary {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.95;
          color: rgba(240,237,232,0.5);
          margin-bottom: 36px;
        }

        .pj-proof-label {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.2);
          margin-bottom: 16px;
        }

        .pj-proof-items {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pj-proof-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .pj-proof-dash {
          color: #C8A96E;
          opacity: 0.5;
          flex-shrink: 0;
          font-size: 14px;
          padding-top: 1px;
        }

        .pj-proof-text {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.45);
          line-height: 1.65;
        }

        /* ── CTA ──────────────────────────────── */
        .pj-cta {
          background: #C8A96E;
          padding: 72px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .pj-cta-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: #0a0a0a;
          margin-bottom: 8px;
          line-height: 1.05;
        }

        .pj-cta-sub {
          font-size: 13px;
          font-weight: 300;
          color: rgba(10,10,10,0.58);
        }

        .pj-cta-btn {
          background: #0a0a0a;
          color: #f0ede8;
          padding: 15px 36px;
          font-size: 12.5px;
          letter-spacing: 0.08em;
          border-radius: 2px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: opacity 0.2s ease;
        }

        .pj-cta-btn:hover { opacity: 0.85; }

        /* ── FOOTER ───────────────────────────── */
        .pj-footer {
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

        .pj-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.2);
          text-decoration: none;
        }

        .pj-footer-logo span { color: rgba(200,169,110,0.35); }

        .pj-footer-links {
          display: flex;
          gap: 28px;
        }

        .pj-footer-link {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }

        .pj-footer-link:hover { color: rgba(240,237,232,0.55); }

        /* ── RESPONSIVE ───────────────────────── */
        @media (max-width: 900px) {
          .pj-hero { padding: 72px 24px 64px; }
          .rule { margin: 0 24px; }

          .pj-project {
            grid-template-columns: 1fr;
            gap: 32px;
            padding: 48px 24px;
          }

          .pj-tags { flex-direction: row; flex-wrap: wrap; }

          .pj-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 56px 24px;
          }

          .pj-footer {
            padding: 32px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <section className="pj-hero">
          <div className="pj-eyebrow">Projects</div>
          <h1 className="pj-h1">
            Built from<br />
            <em>zero.</em>
          </h1>
          <p className="pj-lead">
            Not every project lives on a resume. These are the ones that required
            building something that didn't exist — a product, a platform, an operating
            model — from a blank page.
          </p>
        </section>

        <hr className="rule" />

        {/* Project cards */}
        <div className="pj-projects">
          {projects.map((project) => (
            <div key={project.number} className="pj-project">
              {/* Left */}
              <div className="pj-left">
                <div className="pj-num">{project.number}</div>
                <div className="pj-name">{project.name}</div>
                <div className="pj-role">{project.role}</div>
                <div className="pj-year">{project.year}</div>
                <div className="pj-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="pj-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div className="pj-right">
                <div className="pj-positioning">{project.positioning}</div>
                <p className="pj-summary">{project.summary}</p>
                <div className="pj-proof-label">Proof points</div>
                <div className="pj-proof-items">
                  {project.proofPoints.map((point, i) => (
                    <div key={i} className="pj-proof-item">
                      <div className="pj-proof-dash">—</div>
                      <div className="pj-proof-text">{point}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="rule" />

        {/* CTA */}
        <div className="pj-cta">
          <div>
            <div className="pj-cta-headline">Let's build something that works.</div>
            <div className="pj-cta-sub">Open to transformation leadership, consulting, and strategic advisory roles.</div>
          </div>
          <Link href="/contact" className="pj-cta-btn">Get in touch →</Link>
        </div>

        {/* Footer */}
        <footer className="pj-footer">
          <Link href="/" className="pj-footer-logo">
            tonyLombardi<span>.ai</span>
          </Link>
          <div className="pj-footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="pj-footer-link">LinkedIn</a>
            <a href="/experience" className="pj-footer-link">Experience</a>
            <a href="/contact" className="pj-footer-link">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}