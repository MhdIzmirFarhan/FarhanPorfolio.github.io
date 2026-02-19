import { useState } from "react";
import "../style/projects/BugReportSystem.css";

const images = [
  "/bugsystem1.jpg",
  "/bugsystem2.jpg",
  "/bugsystem3.jpg",
  "/bugsystem4.jpg",
  "/bugsystem5.jpg",
];

const githubLink = "https://github.com/your-username/foodietech-bugreport";

const SECTIONS = [
  {
    tag: "01 / OVERVIEW",
    title: "Project Overview",
    content: [
      "The FoodieTech Bug Reporting System is a centralized platform designed to record, organize, and manage software bugs across the FoodieTech ecosystem. The system allows team members to report issues efficiently with detailed descriptions, images, and videos.",
      "By replacing scattered communication and manual tracking methods, the system improves issue visibility, prioritization, and resolution workflow for both developers and operations teams.",
    ],
  },
  {
    tag: "02 / PROBLEM",
    title: "Problem Statement",
    content: [
      "Bugs within the FoodieTech system were previously reported through informal channels such as chat messages or verbal communication. This led to missing details, duplicated reports, poor tracking, and delayed fixes.",
      "There was no structured way to attach screenshots, videos, or maintain a clear status history for reported issues, making debugging and coordination inefficient.",
    ],
  },
  {
    tag: "03 / CASE",
    title: "Case Study",
    content: [
      "When a bug occurred in the FoodieTech system, staff often had to explain the issue repeatedly without visual evidence. With the Bug Reporting System, users can instantly log an issue, attach images or screen recordings, and track its status from submission to resolution — all in one place.",
    ],
  },
];

const TECH = [
  {
    tag: "01 / FRONT",
    title: "Frontend",
    items: ["React", "Flutter (Mobile)"],
  },
  {
    tag: "02 / BACK",
    title: "Backend",
    items: ["Node.js", "REST APIs"],
  },
  {
    tag: "03 / DB",
    title: "Database & Services",
    items: ["Firebase Auth", "Firestore", "Firebase Storage", "Image & Video Upload"],
  },
];

const FEATURES = [
  "Centralized bug reporting and issue tracking",
  "Attach screenshots and videos for better debugging",
  "Bug status tracking (Open, In Progress, Resolved)",
  "Web and mobile support for reporting issues",
  "Firebase-backed authentication and media storage",
];

function BugReportSystem() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="mg-page">
      <div className="mg-grid-bg"   aria-hidden="true" />
      <div className="mg-scanlines" aria-hidden="true" />

      <div className="mg-inner">

        {/* ── HERO ── */}
        <header className="mg-hero">
          <div className="mg-hero-label">[ PROJECT_FILE ]</div>
          <h1 className="mg-hero-title">
            Bug <span className="mg-accent">Report</span> System
          </h1>
          <p className="mg-hero-sub">Centralized bug tracking &amp; issue management platform</p>
          <div className="mg-hero-line" />
        </header>

        {/* ── INFO SECTIONS ── */}
        {SECTIONS.map((sec, i) => (
          <div key={i} className="mg-section">
            <div className="mg-section-tag">{sec.tag}</div>
            <h2 className="mg-section-title">{sec.title}</h2>
            {sec.content.map((p, j) => (
              <p key={j} className="mg-section-body">{p}</p>
            ))}
          </div>
        ))}

        {/* ── MEDIA ── */}
        <div className="mg-section">
          <div className="mg-section-tag">04 / MEDIA</div>
          <h2 className="mg-section-title">Project Media</h2>

          <div className="mg-slider">
            <button className="mg-arrow" onClick={prev} aria-label="Previous">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="mg-slider-viewport">
              <div className="mg-slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                {images.map((src, i) => (
                  <div key={i} className="mg-slide">
                    <img src={src} alt={`Bug system screenshot ${i + 1}`} />
                    <div className="mg-slide-num">
                      {String(i + 1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mg-arrow" onClick={next} aria-label="Next">
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div className="mg-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`mg-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          <div className="mg-video-wrap">
            <div className="mg-video-label">[ DEMO_VIDEO ]</div>
            <div className="mg-video-border">
              <div className="mg-vc tl" /><div className="mg-vc tr" />
              <div className="mg-vc bl" /><div className="mg-vc br" />
              <video controls>
                <source src="/bugsystem-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>

        {/* ── TECH STACK ── */}
        <div className="mg-section">
          <div className="mg-section-tag">05 / STACK</div>
          <h2 className="mg-section-title">Tech Stack &amp; Role</h2>

          <div className="mg-tech-grid">
            {TECH.map((t, i) => (
              <div key={i} className="mg-tech-card">
                <div className="mg-tc tl" /><div className="mg-tc tr" />
                <div className="mg-tc bl" /><div className="mg-tc br" />
                <div className="mg-tech-tag">{t.tag}</div>
                <h3 className="mg-tech-title">{t.title}</h3>
                <ul className="mg-tech-list">
                  {t.items.map((item, j) => (
                    <li key={j}>
                      <span className="mg-tech-bullet">›</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mg-role">
            <span className="mg-role-label">ROLE //</span> Full-stack &amp; Mobile Developer
          </p>
        </div>

        {/* ── FEATURES ── */}
        <div className="mg-section">
          <div className="mg-section-tag">06 / FEATURES</div>
          <h2 className="mg-section-title">Key Features</h2>
          <ul className="mg-feature-list">
            {FEATURES.map((f, i) => (
              <li key={i} className="mg-feature-item">
                <span className="mg-feature-num">{String(i + 1).padStart(2,"0")}</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── LINKS ── */}
        <div className="mg-links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="mg-github-btn">
            VIEW_ON_GITHUB →
          </a>
        </div>

        {/* ── BACK ── */}
        <div className="mg-back">
          <a href="/projects" className="mg-back-btn">← RETURN_TO_PROJECTS</a>
        </div>

      </div>
    </section>
  );
}

export default BugReportSystem;