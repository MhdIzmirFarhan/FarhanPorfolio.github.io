import { useEffect, useRef } from "react";
import { animate, onScroll } from "animejs";
import "../style/skills.css";
import { FaHtml5, FaMobileAlt, FaTools, FaCode } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const skillCategories = [
  {
    tag: "01 / LANG",
    category: "Programming Languages",
    skills: [
      { icon: <FaCode />,    name: "Python / JavaScript / Dart" },
      { icon: <FaHtml5 />,   name: "HTML / CSS / JS" },
      { icon: <FaTools />,   name: "Tailwind / Firebase / Django / Flutter" },
    ],
  },
  {
    tag: "02 / SPEAK",
    category: "Languages",
    skills: [
      {
        icon: <ReactCountryFlag countryCode="MY" svg style={{ width: "1.4em" }} />,
        name: "Bahasa Melayu (Native)",
      },
      {
        icon: <ReactCountryFlag countryCode="US" svg style={{ width: "1.4em" }} />,
        name: "English (Fluent)",
      },
    ],
  },
  {
    tag: "03 / FRAME",
    category: "Frameworks & Databases",
    skills: [
      { icon: <FaMobileAlt />, name: "Kotlin (Android)" },
      { icon: <FaMobileAlt />, name: "Flutter" },
    ],
  },
  {
    tag: "04 / TOOLS",
    category: "Tools",
    skills: [
      { icon: <FaTools />, name: "Git & GitHub" },
      { icon: <FaTools />, name: "Figma" },
    ],
  },
];

function Skills() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
  
    const cards = container.querySelectorAll(".skill-group-card");
  
    // just fade all cards in on mount, no scroll trigger
    cards.forEach((card, i) => {
      animate(card, {
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        delay: i * 100,
        ease: "outExpo",
      });
    });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-grid-bg"   aria-hidden="true" />
      <div className="skills-scanlines" aria-hidden="true" />

      {/* header */}
      <div className="skills-header">
        <div className="skills-label">[ SKILL_MATRIX ]</div>
        <h2 className="skills-title">
          My <span className="skills-accent">Skills</span>
        </h2>
        <div className="skills-title-line" />
      </div>

      {/* scroll hint */}
      <div className="skills-scroll-hint">scroll right →</div>

      {/* horizontal scroll container */}
      <div className="skills-scroll-container" ref={scrollRef}>
        <div className="skills-track">
          {skillCategories.map((group, i) => (
            <div className="skill-group-card" key={i}>
              <div className="skill-card-tag">{group.tag}</div>
              <h3 className="skill-card-title">{group.category}</h3>

              {/* corner brackets */}
              <div className="sk-corner tl" />
              <div className="sk-corner tr" />
              <div className="sk-corner bl" />
              <div className="sk-corner br" />

              <div className="skill-items">
                {group.skills.map((skill, j) => (
                  <div className="skill-item" key={j}>
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="skills-dots">
        {skillCategories.map((_, i) => (
          <div key={i} className="skills-dot" />
        ))}
      </div>
    </section>
  );
}

export default Skills;