import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Experience | Tony Lombardi",
  description:
    "20+ years across insurance, financial services, SaaS, and sports technology. $8.6M portfolios, 326 branch rollouts, SOC certifications delivered months ahead of schedule.",
};

const roles = [
  {
    company: "The Fight Don",
    title: "Director, Digital Transformation & AI Operations",
    dates: "2025 — Present",
    tags: ["Combat Sports", "AI Operations", "Signed Fighter"],
    summary:
      "Tony Lombardi serves as the embedded transformation executive for The Fight Don, a growth-stage combat sports organization, architecting its complete digital operating model, AI-enabled workflow systems, and fighter performance analytics infrastructure from zero. The engagement spans tools selection, data pipelines, sponsorship pipeline design, and phased consumer platform strategy — built without legacy infrastructure, budget overhead, or a pre-existing IT team. He is simultaneously signed as a fighter under the organization's banner, pursuing a first-of-its-kind dual milestone: a sanctioned MMA fight and a full-distance Ironman in the same calendar year.",
    wins: [
      {
        num: "30d",
        text: "Full collaboration and productivity stack — Slack, Google Workspace, Dropbox, Monday.com — operational within the first 30 days, built from zero with no prior infrastructure.",
      },
      {
        num: "2-Phase",
        text: "Designed a phased consumer digital platform roadmap in which Phase 1 sponsorship and ticket revenue self-funds the Phase 2 full platform buildout — a capital efficiency strategy, not just a technology plan.",
      },
      {
        num: "120d",
        text: "Full digital operating model designed, standing, and actively generating revenue operations within the first 120 days of engagement.",
      },
    ],
    skills: [
      "AI-Enabled Workflow Automation",
      "Digital Operating Model Design",
      "Fighter Performance Analytics",
      "Sponsorship Pipeline Systems",
      "Monday.com / Google Workspace",
      "Phased Platform Roadmap",
    ],
  },
  {
    company: "Verisk Analytics",
    title: "Director, Enterprise Transformation & Strategy",
    dates: "Oct 2023 — Jul 2025",
    tags: ["Insurance SaaS", "$8.6M Portfolio"],
    summary:
      "Served as Director of Enterprise Transformation and Strategy for Verisk's Life Solutions Platform, a client-facing SaaS product supporting life insurance carriers across $5B+ in managed assets. Reporting directly to executive stakeholders, owned strategy, operating model design, delivery execution, and portfolio governance for an $8.6M multi-year transformation portfolio spanning a matrixed organization of 35 resources across five concurrent client programs.",
    wins: [
      {
        num: "$8.6M",
        text: "Governed an $8.6M annual transformation portfolio supporting $5B+ in managed client assets — accountable to executive stakeholders for delivery, financial, and client-impact performance.",
      },
      {
        num: "30–40%",
        text: "Cut release and upgrade cycle times by 30–40% by redesigning the enterprise delivery operating model around SAFe and Kanban, eliminating chronic delays that had eroded client and stakeholder confidence.",
      },
      {
        num: "15%+ YoY",
        text: "Drove 15% year-over-year revenue growth through operating model redesign, portfolio governance improvements, and strategic reallocation of investment toward highest-ROI client-impact initiatives.",
      },
    ],
    skills: [
      "SAFe + Kanban Delivery Model",
      "Portfolio Governance",
      "OKR / KPI Frameworks",
      "SaaS Platform Operations",
      "Executive Stakeholder Management",
      "Client Onboarding Process Design",
    ],
  },
  {
    company: "Jahnel Group",
    title: "Principal Consultant — Business & Technology Transformation",
    dates: "Jul 2021 — Jul 2023",
    tags: ["Consulting", "Financial Services"],
    summary:
      "Served as Principal Consultant at Jahnel Group, advising insurance and financial services clients on operational, cloud, and regulatory transformation across concurrent engagements. Operated as the senior delivery lead and transformation architect on each engagement — building Agile operating frameworks from zero, redesigning loan processing workflows through AWS cloud integration, and delivering SOC certifications under compressed timelines.",
    wins: [
      {
        num: "6mos early",
        text: "Delivered SOC 1 and SOC 2 certifications up to six months ahead of the client-estimated schedule by pre-mapping audit evidence requirements before internal collection began.",
      },
      {
        num: "Same-day",
        text: "Reduced loan funding cycle time at Libertas Funding from 2–3 days to same-day capability by redesigning end-to-end workflows and integrating AWS EC2, S3, and OCR into the loan processing stack.",
      },
      {
        num: "18mos",
        text: "Built and delivered a complete health revenue cycle management system from greenfield to six-FTE steady-state operations over 18 months — standing up the Agile delivery framework and running active product delivery simultaneously from day one.",
      },
    ],
    skills: [
      "SOC 1 / SOC 2 Certification",
      "AWS EC2 / S3 / OCR Integration",
      "Greenfield Agile Program Build",
      "Workflow Redesign",
      "C-Suite Advisory",
      "Multi-Client Portfolio Delivery",
    ],
  },
  {
    company: "First Citizens Bank",
    title: "Enterprise Transformation Lead",
    dates: "May 2019 — Jul 2021",
    tags: ["Banking", "300+ Branches", "3,000+ Employees"],
    summary:
      "Handpicked by executive leadership to lead the bank's highest-priority operational transformation: a full teller-system modernization across the retail branch network. The engagement required building a SAFe-aligned delivery operating model from zero on a live program, managing a 326-branch overnight hardware rollout with zero tolerance for failed branch opens, and delivering dual SOC certifications — all while converting IT management resistance into adoption without positional authority.",
    wins: [
      {
        num: "326 / 0",
        text: "Executed overnight hardware and software rollouts across 326 branches with zero failed 9 AM opens — personally running the implementation command center bridge from branch close through morning open on every rollout night.",
      },
      {
        num: "3mos early",
        text: "Delivered SOC 1 and SOC 2 certifications three months ahead of the organizational estimate, freeing budget and removing a compliance risk from the executive radar ahead of regulatory review windows.",
      },
      {
        num: "30%",
        text: "Improved delivery velocity by 30% over baseline — measured across three data points in JIRA and adopted into monthly CIO program reporting — through a full Agile transformation on the bank's highest-visibility program.",
      },
    ],
    skills: [
      "SAFe Delivery Transformation",
      "SOC 1 / SOC 2 Audit Delivery",
      "Branch Operations Modernization",
      "Overnight Implementation Management",
      "Vendor Escalation / Incident Command",
      "JIRA Capacity Planning",
    ],
  },
];

export default function Experience() {
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
        .ex-hero {
          padding: 100px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ex-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          margin-bottom: 28px;
        }

        .ex-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(52px, 7vw, 78px);
          font-weight: 600;
          line-height: 0.93;
          color: #f0ede8;
          margin-bottom: 32px;
          letter-spacing: -0.01em;
        }

        .ex-h1 em {
          color: #C8A96E;
          font-style: italic;
        }

        .ex-lead {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: rgba(240,237,232,0.5);
          max-width: 560px;
          margin-bottom: 36px;
        }

        /* ── RESUME DOWNLOAD ──────────────────── */
        .ex-resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 28px;
          border: 0.5px solid rgba(200,169,110,0.45);
          border-radius: 2px;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          color: #C8A96E;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .ex-resume-btn:hover {
          background: rgba(200,169,110,0.08);
        }

        .ex-resume-btn svg {
          flex-shrink: 0;
        }

        /* ── RULE ─────────────────────────────── */
        .rule {
          border: none;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          margin: 0 48px;
        }

        /* ── ROLES ────────────────────────────── */
        .ex-roles {
          display: flex;
          flex-direction: column;
          gap: 1px;
          background: rgba(240,237,232,0.06);
          margin: 0;
        }

        .ex-role {
          background: #0a0a0a;
          padding: 56px 48px;
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 64px;
          transition: background 0.2s ease;
        }

        .ex-role:hover { background: #0d0d0d; }

        /* Left column */
        .ex-role-company {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          color: #f0ede8;
          margin-bottom: 8px;
          line-height: 1.1;
        }

        .ex-role-title {
          font-size: 12px;
          color: rgba(240,237,232,0.42);
          letter-spacing: 0.03em;
          margin-bottom: 6px;
          line-height: 1.6;
        }

        .ex-role-dates {
          font-size: 11px;
          color: rgba(240,237,232,0.22);
          letter-spacing: 0.06em;
          margin-bottom: 20px;
        }

        .ex-tags {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .ex-tag {
          display: inline-block;
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(200,169,110,0.65);
          border: 0.5px solid rgba(200,169,110,0.22);
          padding: 3px 10px;
          border-radius: 2px;
          width: fit-content;
        }

        /* Right column */
        .ex-summary {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 1.95;
          color: rgba(240,237,232,0.5);
          margin-bottom: 32px;
        }

        .ex-wins {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 28px;
          padding-bottom: 28px;
          border-bottom: 0.5px solid rgba(240,237,232,0.06);
        }

        .ex-win {
          display: flex;
          gap: 20px;
          align-items: flex-start;
        }

        .ex-win-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 600;
          color: #C8A96E;
          line-height: 1;
          flex-shrink: 0;
          min-width: 80px;
          padding-top: 2px;
        }

        .ex-win-text {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.48);
          line-height: 1.65;
        }

        .ex-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }

        .ex-skill {
          font-size: 10px;
          letter-spacing: 0.05em;
          color: rgba(240,237,232,0.28);
          border: 0.5px solid rgba(240,237,232,0.1);
          padding: 3px 10px;
          border-radius: 2px;
        }

        /* ── EARLIER CAREER ───────────────────── */
        .ex-earlier {
          padding: 56px 48px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .ex-earlier-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.2);
          margin-bottom: 24px;
        }

        .ex-earlier-items {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ex-earlier-item {
          display: flex;
          gap: 24px;
          align-items: baseline;
        }

        .ex-earlier-company {
          font-family: 'Cormorant Garamond', serif;
          font-size: 16px;
          font-weight: 600;
          color: rgba(240,237,232,0.4);
          min-width: 140px;
        }

        .ex-earlier-detail {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          line-height: 1.5;
        }

        /* ── CTA ──────────────────────────────── */
        .ex-cta {
          background: #C8A96E;
          padding: 72px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .ex-cta-headline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 40px;
          font-weight: 600;
          color: #0a0a0a;
          margin-bottom: 8px;
          line-height: 1.05;
        }

        .ex-cta-sub {
          font-size: 13px;
          font-weight: 300;
          color: rgba(10,10,10,0.58);
        }

        .ex-cta-btn {
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

        .ex-cta-btn:hover { opacity: 0.85; }

        /* ── FOOTER ───────────────────────────── */
        .ex-footer {
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

        .ex-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.2);
          text-decoration: none;
        }

        .ex-footer-logo span { color: rgba(200,169,110,0.35); }

        .ex-footer-links {
          display: flex;
          gap: 28px;
        }

        .ex-footer-link {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }

        .ex-footer-link:hover { color: rgba(240,237,232,0.55); }

        /* ── RESPONSIVE ───────────────────────── */
        @media (max-width: 900px) {
          .ex-hero { padding: 72px 24px 64px; }
          .rule { margin: 0 24px; }

          .ex-role {
            grid-template-columns: 1fr;
            gap: 28px;
            padding: 40px 24px;
          }

          .ex-tags { flex-direction: row; flex-wrap: wrap; }

          .ex-earlier { padding: 48px 24px; }

          .ex-earlier-item { flex-direction: column; gap: 4px; }

          .ex-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 56px 24px;
          }

          .ex-footer {
            padding: 32px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navbar />

        {/* Hero */}
        <section className="ex-hero">
          <div className="ex-eyebrow">Experience</div>
          <h1 className="ex-h1">
            Complexity is<br />
            the starting<br />
            <em>point.</em>
          </h1>
          <p className="ex-lead">
            20+ years across insurance, financial services, SaaS, and sports technology.
            Every engagement follows the same pattern — find the complexity, design the
            operating model, and deliver measurable results.
          </p>

          {/* Resume download */}
          <a
            href="/tony-lombardi-resume.pdf"
            download="Tony-Lombardi-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ex-resume-btn"
            aria-label="Download Tony Lombardi resume PDF"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </a>
        </section>

        <hr className="rule" />

        {/* Role cards */}
        <div className="ex-roles">
          {roles.map((role) => (
            <div key={role.company} className="ex-role">
              {/* Left */}
              <div>
                <div className="ex-role-company">{role.company}</div>
                <div className="ex-role-title">{role.title}</div>
                <div className="ex-role-dates">{role.dates}</div>
                <div className="ex-tags">
                  {role.tags.map((tag) => (
                    <span key={tag} className="ex-tag">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div>
                <p className="ex-summary">{role.summary}</p>
                <div className="ex-wins">
                  {role.wins.map((win, i) => (
                    <div key={i} className="ex-win">
                      <div className="ex-win-num">{win.num}</div>
                      <div className="ex-win-text">{win.text}</div>
                    </div>
                  ))}
                </div>
                <div className="ex-skills">
                  {role.skills.map((skill) => (
                    <span key={skill} className="ex-skill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Earlier career */}
        <section className="ex-earlier">
          <div className="ex-earlier-label">Earlier career</div>
          <div className="ex-earlier-items">
            <div className="ex-earlier-item">
              <div className="ex-earlier-company">Apex Systems</div>
              <div className="ex-earlier-detail">Senior Project Manager — Wolters Kluwer, Travelers · 2013–2015</div>
            </div>
            <div className="ex-earlier-item">
              <div className="ex-earlier-company">ESPN</div>
              <div className="ex-earlier-detail">Project Manager / Scrum Master, Technology PMO · 2012</div>
            </div>
            <div className="ex-earlier-item">
              <div className="ex-earlier-company">Travelers</div>
              <div className="ex-earlier-detail">Developer → BA → Project Lead → Project Manager · 2005–2012 · IT Leadership Development Program</div>
            </div>
          </div>
        </section>

        <hr className="rule" />

        {/* CTA */}
        <div className="ex-cta">
          <div>
            <div className="ex-cta-headline">If you&apos;re leading through uncertainty.</div>
            <div className="ex-cta-sub">Open to transformation leadership, consulting, and strategic advisory roles.</div>
          </div>
          <Link href="/contact" className="ex-cta-btn">Get in touch →</Link>
        </div>

        {/* Footer */}
        <footer className="ex-footer">
          <Link href="/" className="ex-footer-logo">
            tonylombardi<span>.ai</span>
          </Link>
          <div className="ex-footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="ex-footer-link">LinkedIn</a>
            <a href="/about" className="ex-footer-link">About</a>
            <a href="/contact" className="ex-footer-link">Contact</a>
          </div>
        </footer>
      </div>
    </>
  );
}