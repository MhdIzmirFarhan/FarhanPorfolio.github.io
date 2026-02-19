import { useState } from "react";
import "../style/projects/mangrove.css";
import { FaJs, FaPython } from "react-icons/fa";
import { SiKotlin, SiReact, SiDjango, SiTensorflow, SiPostgresql } from "react-icons/si";

const images = [
  "/mangrove1.jpg",
  "/mangrove2.jpg",
  "/mangrove3.jpg",
  "/mangrove4.jpg",
  "/mangrove5.jpg",
];

const SECTIONS = [
  {
    tag: "01 / OVERVIEW",
    title: "Project Overview",
    content: [
      "Mangrove 2.0 is an AI-powered environmental catalog system designed to support the identification, monitoring, and documentation of mangrove species. Users can capture plant images using a mobile device, identify species through image recognition, and store precise GPS locations in real time.",
      "By combining mobile technology, artificial intelligence, and a web-based dashboard, the system improves data accuracy and efficiency while providing a centralized platform for mangrove research and conservation.",
    ],
  },
  {
    tag: "02 / PROBLEM",
    title: "Problem Statement",
    content: [
      "Existing mangrove data is often inconsistent, incomplete, and unreliable due to environmental variations, manual recording methods, and the lack of a centralized archive. These issues limit researchers' ability to analyze ecosystems and track long-term changes.",
      "Mangrove 2.0 addresses this by creating a dedicated digital archive supported by AI-based image recognition and GPS tracking, enabling structured, scalable, and reliable data collection.",
    ],
  },
  {
    tag: "03 / CASE",
    title: "Case Study",
    content: [
      "During coastal field studies, researchers traditionally spent hours manually documenting mangrove species. With Mangrove 2.0, users can capture an image, automatically identify the species, and log GPS coordinates instantly — significantly reducing manual effort while improving data accuracy.",
    ],
  },
];

const TECH = [
  {
    tag: "01 / LANG",
    title: "Languages",
    icons: [
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <FaPython />, name: "Python" },
      { icon: <SiKotlin />, name: "Kotlin" },
    ],
  },
  {
    tag: "02 / FRAME",
    title: "Frameworks & Tools",
    icons: [
      { icon: <SiReact />, name: "React" },
      { icon: <SiDjango />, name: "Django" },
      { icon: <SiTensorflow />, name: "TensorFlow.js" },
    ],
  },
  {
    tag: "03 / DB",
    title: "Database & Backend",
    icons: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },
];

const FEATURES = [
  "AI-based image recognition for mangrove species identification",
  "Real-time GPS tagging and location tracking",
  "Mobile app for field data collection",
  "Web dashboard for centralized data management",
  "Real-time chat for collaboration and coordination",
];

function MangrovePage() {
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
            Mangrove <span className="mg-accent">2.0</span>
          </h1>
          <p className="mg-hero-sub">AI-powered environmental catalog system</p>
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

          {/* slider */}
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
                    <img src={src} alt={`Mangrove ${i + 1}`} />
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

          {/* dots */}
          <div className="mg-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`mg-dot${i === current ? " active" : ""}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>

          {/* video */}
          <div className="mg-video-wrap">
            <div className="mg-video-label">[ DEMO_VIDEO ]</div>
            <div className="mg-video-border">
              <div className="mg-vc tl" /><div className="mg-vc tr" />
              <div className="mg-vc bl" /><div className="mg-vc br" />
              <video controls>
                <source src="/mangrove-demo.mp4" type="video/mp4" />
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
                <div className="mg-tech-icons">
                  {t.icons.map((ic, j) => (
                    <span key={j} className="mg-tech-icon" title={ic.name}>
                      {ic.icon}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mg-role">
            <span className="mg-role-label">ROLE //</span> Full-stack &amp; Mobile Developer (Final Year Project)
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

        {/* ── BACK ── */}
        <div className="mg-back">
          <a href="/projects" className="mg-back-btn">← RETURN_TO_PROJECTS</a>
        </div>

      </div>
    </section>
  );
}

export default MangrovePage;