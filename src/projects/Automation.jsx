import { useState } from "react";
import auto1 from "../assets/Automate_data/auto1.png";
import auto2 from "../assets/Automate_data/auto2.png";
import auto3 from "../assets/Automate_data/auto3.png";
import auto4 from "../assets/Automate_data/auto4.png";
import "../style/projects/Automation.css";

const images = [auto1, auto2, auto3, auto4];
const githubLink = "https://github.com/your-username/foodietech-automation";

const TECH = [
  {
    tag: "01 / LANG",
    title: "Languages",
    items: ["Python"],
  },
  {
    tag: "02 / TOOLS",
    title: "Tools & Libraries",
    items: ["Playwright", "Tkinter", "Excel", "Google Sheets"],
  },
  {
    tag: "03 / FOCUS",
    title: "Automation Focus",
    items: ["Browser Automation", "Data Entry Automation", "Workflow Optimization"],
  },
];

const SECTIONS = [
  {
    tag: "01 / OVERVIEW",
    title: "Project Overview",
    content: [
      "FoodieTech Automation is a Python-based system developed to automate repetitive data entry tasks that were previously handled manually. The automation significantly reduced human effort, improved accuracy, and increased overall operational efficiency.",
      "The system integrates Excel and Google Sheets with browser automation to streamline data collection and entry workflows, allowing business data to be processed faster and more reliably.",
    ],
  },
  {
    tag: "02 / PROBLEM",
    title: "Problem Statement",
    content: [
      "Manual data entry at FoodieTech was time-consuming, error-prone, and required significant human effort. Repeating the same data input process across platforms slowed down operations and reduced productivity.",
      "There was a clear need for an automated solution to eliminate repetitive manual work while ensuring consistent and accurate data entry.",
    ],
  },
  {
    tag: "03 / CASE",
    title: "Case Study",
    content: [
      "Previously, staff manually entered business data into spreadsheets and web systems, taking several minutes per entry. With the automation system, data is processed directly from Excel or Google Sheets and automatically submitted through scripted browser interactions, reducing entry time from minutes to seconds.",
    ],
  },
];

function AutomationPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <section className="mg-page">
      <div className="mg-grid-bg"   aria-hidden="true" />
      <div className="mg-scanlines" aria-hidden="true" />

      {/* ── HERO ── */}
      <header className="mg-hero">
        <div className="mg-hero-label">[ PROJECT_FILE ]</div>
        <h1 className="mg-hero-title">
          FoodieTech<span className="mg-accent"> Automation</span>
        </h1>
        <p className="mg-hero-sub">Python-based data entry automation system</p>
        <div className="mg-hero-line" />
      </header>

      {/* ── INFO SECTIONS ── */}
      {SECTIONS.map((sec, i) => (
        <div className="mg-section" key={i}>
          <div className="mg-section-tag">{sec.tag}</div>
          <h2 className="mg-section-title">{sec.title}</h2>
          {sec.content.map((p, j) => (
            <p key={j} className="mg-section-p">{p}</p>
          ))}
        </div>
      ))}

      {/* ── MEDIA ── */}
      <div className="mg-section">
        <div className="mg-section-tag">04 / MEDIA</div>
        <h2 className="mg-section-title">Project Media</h2>

        {/* image slider */}
        <div className="mg-slider-wrap">
          <button className="mg-arrow" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="mg-slider-viewport">
            <div className="mg-slider-viewport-inner">
              <div className="mg-corner tl" /><div className="mg-corner tr" />
              <div className="mg-corner bl" /><div className="mg-corner br" />
            </div>
            <img src={images[current]} alt={`Automation screenshot ${current + 1}`} className="mg-slide-img" />
            <div className="mg-slide-num">
              {String(current + 1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}
            </div>
          </div>

          <button className="mg-arrow" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* dots */}
        <div className="mg-dots">
          {images.map((_, i) => (
            <button key={i} className={`mg-dot${i === current ? " active" : ""}`} onClick={() => setCurrent(i)} />
          ))}
        </div>

        {/* video */}
        <div className="mg-video-wrap">
          <div className="mg-video-label">[ DEMO_VIDEO ]</div>
          <video controls className="mg-video">
            <source src="/Create New Food Item 2025-12-29 23-34-44.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ── TECH STACK ── */}
      <div className="mg-section">
        <div className="mg-section-tag">05 / STACK</div>
        <h2 className="mg-section-title">Tech Stack &amp; Role</h2>

        <div className="mg-tech-grid">
          {TECH.map((t, i) => (
            <div className="mg-tech-card" key={i}>
              <div className="mg-tc-corner tl" /><div className="mg-tc-corner tr" />
              <div className="mg-tc-corner bl" /><div className="mg-tc-corner br" />
              <div className="mg-tc-tag">{t.tag}</div>
              <h3 className="mg-tc-title">{t.title}</h3>
              <ul className="mg-tc-list">
                {t.items.map((item, j) => (
                  <li key={j}><span className="mg-tc-dot" />{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mg-role">
          <span className="mg-role-label">ROLE //</span> Automation Developer
        </p>
      </div>

      {/* ── FEATURES ── */}
      <div className="mg-section">
        <div className="mg-section-tag">06 / FEATURES</div>
        <h2 className="mg-section-title">Key Features</h2>
        <ul className="mg-feature-list">
          {[
            "Automated data entry to eliminate manual labour",
            "Excel and Google Sheets integration",
            "Browser automation using Playwright",
            "Simple desktop interface built with Tkinter",
            "Improved speed, accuracy, and efficiency",
          ].map((f, i) => (
            <li key={i}>
              <span className="mg-feature-dot" />
              {f}
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
    </section>
  );
}

export default AutomationPage;