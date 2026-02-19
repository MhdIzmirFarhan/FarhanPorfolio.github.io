import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/projects.css";

const projectData = [
  {
    name: "Mangrove 2.0",
    tag: "01 / PROJECT",
    description: "An AI-powered environmental catalog system that captures plant images, stores GPS location, and identifies mangrove species using image recognition.",
    tech: "React, Django, PostgreSQL, Kotlin, TensorFlow.js, WebSockets",
    role: "Final Year Project – Full-stack & mobile developer",
    image: "/mangrove.jpg",
    link: "/projects/mangrove",
  },
  {
    name: "FoodieTech Data Entry Automation",
    tag: "02 / PROJECT",
    description: "Developed a Python-based automation system to eliminate manual data entry at FoodieTech, improving speed, accuracy, and efficiency.",
    tech: "Python, Excel, Google Sheets, Playwright, Tkinter",
    role: "Automation Developer",
    image: "/transcompiler.jpg",
    link: "/projects/automation",
  },
  {
    name: "FoodieTech SDK Printer Handheld",
    tag: "03 / PROJECT",
    description: "Developed a handheld printing solution for FoodieTech by integrating and programming a printer SDK for faster order processing.",
    tech: "Android SDK, Kotlin, Printer SDK",
    role: "Mobile Developer",
    image: "/icerdik.jpg",
    link: "/projects/icerdik",
  },
  {
    name: "FoodieTech Bug Reporting System",
    tag: "04 / PROJECT",
    description: "A centralized bug reporting and issue management system supporting image and video attachments for clearer debugging and faster resolution.",
    tech: "React, Flutter, Node.js, Firebase",
    role: "Full-stack & mobile developer",
    image: "/foodietech.jpg",
    link: "/projects/bugreportsystem",
  },
];

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((p) => (p === 0 ? projectData.length - 1 : p - 1));
  const next = () =>
    setActiveIndex((p) => (p === projectData.length - 1 ? 0 : p + 1));

  const getPosition = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) return "active";
    if (diff === -1 || diff === projectData.length - 1) return "left";
    if (diff === 1 || diff === -(projectData.length - 1)) return "right";
    return "hidden";
  };

  return (
    <section id="projects" className="proj-section">
      <div className="proj-grid-bg" aria-hidden="true" />
      <div className="proj-scanlines" aria-hidden="true" />

      {/* header */}
      <div className="proj-header">
        <div className="proj-label">[ PROJECT_LOG ]</div>
        <h2 className="proj-title">My <span className="proj-accent">Projects</span></h2>
        <div className="proj-title-line" />
      </div>

      {/* carousel */}
      <div className="proj-carousel">
        <button className="proj-arrow" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="proj-container">
          {projectData.map((project, index) => (
            <div
              key={index}
              className={`proj-card ${getPosition(index)}`}
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div className="proj-overlay" />

              {/* corner brackets */}
              <div className="proj-corner tl" />
              <div className="proj-corner tr" />
              <div className="proj-corner bl" />
              <div className="proj-corner br" />

              {/* tag */}
              <div className="proj-card-tag">{project.tag}</div>

              {/* content */}
              <div className="proj-content">
                <h3 className="proj-name">{project.name}</h3>
                <p className="proj-role">{project.role}</p>
                <p className="proj-desc">{project.description}</p>
                <p className="proj-tech"><span className="proj-tech-label">STACK //</span> {project.tech}</p>
                <Link to={project.link} className="proj-read-more">
                  OPEN_FILE →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="proj-arrow" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* dots */}
      <div className="proj-dots">
        {projectData.map((_, i) => (
          <button
            key={i}
            className={`proj-dot${i === activeIndex ? " active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;