import Navbar from "@/components/Navbar";
import Link from "next/link";
import type { Metadata } from "next";

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Contact | Tony Lombardi",
  description:
    "Get in touch with Tony Lombardi — enterprise transformation leader, AI operations executive, and operator with range.",
};

export default function Contact() {
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
        .ct-hero {
          padding: 100px 48px 80px;
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
        }

        .ct-eyebrow {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.3);
          margin-bottom: 28px;
        }

        .ct-h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 6vw, 72px);
          font-weight: 600;
          line-height: 0.93;
          color: #f0ede8;
          margin-bottom: 28px;
          letter-spacing: -0.01em;
        }

        .ct-h1 em {
          color: #C8A96E;
          font-style: italic;
        }

        .ct-lead {
          font-size: 14px;
          font-weight: 300;
          line-height: 1.85;
          color: rgba(240,237,232,0.48);
          margin-bottom: 40px;
        }

        /* ── CONTACT OPTIONS ──────────────────── */
        .ct-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .ct-option {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border: 0.5px solid rgba(240,237,232,0.1);
          border-radius: 4px;
          text-decoration: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          background: transparent;
        }

        .ct-option:hover {
          border-color: rgba(200,169,110,0.4);
          background: rgba(240,237,232,0.02);
        }

        .ct-option-icon {
          width: 36px;
          height: 36px;
          border-radius: 3px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 16px;
        }

        .ct-option-icon.gold {
          background: rgba(200,169,110,0.12);
          color: #C8A96E;
        }

        .ct-option-icon.white {
          background: rgba(240,237,232,0.06);
          color: rgba(240,237,232,0.6);
        }

        .ct-option-body { flex: 1; }

        .ct-option-label {
          font-size: 13px;
          font-weight: 500;
          color: #f0ede8;
          margin-bottom: 2px;
        }

        .ct-option-value {
          font-size: 11.5px;
          color: rgba(240,237,232,0.35);
          letter-spacing: 0.03em;
        }

        .ct-option-arrow {
          font-size: 14px;
          color: rgba(240,237,232,0.2);
          flex-shrink: 0;
        }

        /* ── FORM SIDE ────────────────────────── */
        .ct-form-wrap {
          padding-top: 4px;
        }

        .ct-form-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(240,237,232,0.25);
          margin-bottom: 20px;
        }

        .ct-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ct-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ct-field label {
          font-size: 11px;
          letter-spacing: 0.06em;
          color: rgba(240,237,232,0.35);
          text-transform: uppercase;
        }

        .ct-field input,
        .ct-field textarea {
          background: rgba(240,237,232,0.03);
          border: 0.5px solid rgba(240,237,232,0.12);
          border-radius: 3px;
          padding: 12px 16px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 300;
          color: #f0ede8;
          outline: none;
          transition: border-color 0.2s ease;
          width: 100%;
        }

        .ct-field input::placeholder,
        .ct-field textarea::placeholder {
          color: rgba(240,237,232,0.2);
        }

        .ct-field input:focus,
        .ct-field textarea:focus {
          border-color: rgba(200,169,110,0.4);
        }

        .ct-field textarea {
          resize: vertical;
          min-height: 120px;
          line-height: 1.7;
        }

        .ct-submit {
          background: #C8A96E;
          color: #0a0a0a;
          border: none;
          padding: 14px 28px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          border-radius: 2px;
          cursor: pointer;
          transition: opacity 0.2s ease;
          align-self: flex-start;
          margin-top: 4px;
        }

        .ct-submit:hover { opacity: 0.88; }

        .ct-form-note {
          font-size: 11px;
          color: rgba(240,237,232,0.2);
          line-height: 1.6;
          margin-top: 8px;
        }

        /* ── RULE ─────────────────────────────── */
        .rule {
          border: none;
          border-top: 0.5px solid rgba(240,237,232,0.08);
          margin: 0 48px;
        }

        /* ── AVAILABILITY BAR ─────────────────── */
        .ct-avail {
          padding: 48px 48px;
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .ct-avail-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4ec994;
          flex-shrink: 0;
        }

        .ct-avail-text {
          font-size: 13px;
          font-weight: 300;
          color: rgba(240,237,232,0.45);
        }

        .ct-avail-text strong {
          color: rgba(240,237,232,0.7);
          font-weight: 500;
        }

        /* ── FOOTER ───────────────────────────── */
        .ct-footer {
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

        .ct-footer-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: rgba(240,237,232,0.2);
          text-decoration: none;
        }

        .ct-footer-logo span { color: rgba(200,169,110,0.35); }

        .ct-footer-links {
          display: flex;
          gap: 28px;
        }

        .ct-footer-link {
          font-size: 12px;
          color: rgba(240,237,232,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }

        .ct-footer-link:hover { color: rgba(240,237,232,0.55); }

        /* ── RESPONSIVE ───────────────────────── */
        @media (max-width: 900px) {
          .ct-hero {
            grid-template-columns: 1fr;
            gap: 48px;
            padding: 72px 24px 56px;
          }

          .ct-avail { padding: 36px 24px; }
          .rule { margin: 0 24px; }

          .ct-footer {
            padding: 32px 24px;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
        <Navbar />

        <section className="ct-hero">
          {/* Left — headline + contact options */}
          <div>
            <div className="ct-eyebrow">Contact</div>
            <h1 className="ct-h1">
              Let's build<br />
              something<br />
              <em>that works.</em>
            </h1>
            <p className="ct-lead">
              Open to transformation leadership, consulting, and strategic advisory roles.
              On-site, hybrid, or remote. If you're working on something complex and need
              an operator who's been in every seat — let's talk.
            </p>

            <div className="ct-options">
              <a href="mailto:tony@tonylombardi.ai" className="ct-option">
                <div className="ct-option-icon gold">
                  <i className="ti ti-mail" aria-hidden="true"></i>
                </div>
                <div className="ct-option-body">
                  <div className="ct-option-label">Email</div>
                  <div className="ct-option-value">tony@tonylombardi.ai</div>
                </div>
                <div className="ct-option-arrow">→</div>
              </a>

              <a
                href="https://calendly.com/tonylombardi"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-option"
              >
                <div className="ct-option-icon gold">
                  <i className="ti ti-calendar" aria-hidden="true"></i>
                </div>
                <div className="ct-option-body">
                  <div className="ct-option-label">Book a call</div>
                  <div className="ct-option-value">calendly.com/tonylombardi</div>
                </div>
                <div className="ct-option-arrow">→</div>
              </a>

              <a
                href="https://linkedin.com/in/tonylombardi1"
                target="_blank"
                rel="noopener noreferrer"
                className="ct-option"
              >
                <div className="ct-option-icon white">
                  <i className="ti ti-brand-linkedin" aria-hidden="true"></i>
                </div>
                <div className="ct-option-body">
                  <div className="ct-option-label">LinkedIn</div>
                  <div className="ct-option-value">linkedin.com/in/tonylombardi1</div>
                </div>
                <div className="ct-option-arrow">→</div>
              </a>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="ct-form-wrap">
            <div className="ct-form-label">Send a message</div>
            <form
              className="ct-form"
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
            >
              <div className="ct-field">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="ct-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="ct-field">
                <label htmlFor="context">What are you working on?</label>
                <textarea
                  id="context"
                  name="context"
                  placeholder="Brief context on your organization, the role or project, and what you're looking for..."
                />
              </div>
              <button type="submit" className="ct-submit">
                Send message →
              </button>
              <p className="ct-form-note">
                Typically responds within 24–48 hours.
              </p>
            </form>
          </div>
        </section>

        <hr className="rule" />

        {/* Availability indicator */}
        <div className="ct-avail">
          <div className="ct-avail-dot" />
          <p className="ct-avail-text">
            <strong>Currently available</strong> for transformation leadership, consulting, and strategic advisory roles —
            on-site, hybrid, or remote. Based in Fuquay-Varina, NC.
          </p>
        </div>

        <hr className="rule" />

        {/* Footer */}
        <footer className="ct-footer">
          <Link href="/" className="ct-footer-logo">
            tonyLombardi<span>.ai</span>
          </Link>
          <div className="ct-footer-links">
            <a href="https://linkedin.com/in/tonylombardi1" target="_blank" rel="noopener noreferrer" className="ct-footer-link">LinkedIn</a>
            <a href="/experience" className="ct-footer-link">Experience</a>
            <a href="/about" className="ct-footer-link">About</a>
          </div>
        </footer>
      </div>
    </>
  );
}