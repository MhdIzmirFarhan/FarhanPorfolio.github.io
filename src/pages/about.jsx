import { useEffect, useRef, useState } from "react";
import { createLayout } from "animejs";
import "../style/about.css";
import meImage from "../assets/me.jpg";

const PANELS = [
  {
    id: "about",
    tag: "01 / PROFILE",
    title: "About Me",
    content: `
      <div class="panel-body">
        <div class="panel-text">
          <p>I'm a 25-year-old Computer Science graduate with a strong passion for IT, programming, and building practical solutions. I started my professional journey at a startup, where I spent a year gaining hands-on experience in full-stack web development, mobile applications, and AI-powered solutions.</p>
          <p>I worked extensively with Python, JavaScript, Flutter, Django, and other modern technologies to develop systems that solve real-world problems. I enjoy tackling challenges that require both creativity and technical expertise.</p>
          <p>Beyond coding, I value collaboration, problem-solving, and continuous growth — aiming to deliver high-quality solutions while constantly learning and adapting to new technologies.</p>
        </div>
      </div>
    `,
  },
  {
    id: "education",
    tag: "02 / ACADEMIC",
    title: "Education",
    content: `
      <div class="panel-body">
        <div class="edu-item">
          <div class="edu-year">2020 – 2024</div>
          <div class="edu-info">
            <h4>Bachelor of Computer Science</h4>
            <p>Universiti Teknologi MARA (UiTM)</p>
            <p class="edu-detail">Specialisation in Software Engineering · CGPA 3.XX</p>
          </div>
        </div>
        <div class="edu-divider" />
        <div class="edu-item">
          <div class="edu-year">2018 – 2020</div>
          <div class="edu-info">
            <h4>Diploma in Computer Science</h4>
            <p>Universiti Teknologi MARA (UiTM)</p>
            <p class="edu-detail">Foundation in programming & systems</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "certificates",
    tag: "03 / CERTS",
    title: "Certificates",
    content: `
      <div class="panel-body">
        <ul class="cert-list">
          <li class="cert-item">
            <span class="cert-dot" />
            <div>
              <h4>Google Data Analytics Certificate</h4>
              <p>Google · 2023</p>
            </div>
          </li>
          <li class="cert-item">
            <span class="cert-dot" />
            <div>
              <h4>Meta Front-End Developer Certificate</h4>
              <p>Meta · 2023</p>
            </div>
          </li>
          <li class="cert-item">
            <span class="cert-dot" />
            <div>
              <h4>AWS Cloud Practitioner Essentials</h4>
              <p>Amazon Web Services · 2024</p>
            </div>
          </li>
        </ul>
      </div>
    `,
  },
];

function About() {
  const containerRef = useRef(null);
  const layoutRef = useRef(null);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    layoutRef.current = createLayout(container, {
      children: ".ab-item",
      duration: 900,
    });
  }, []);

  const openPanel = (id) => {
    const container = containerRef.current;
    const layout = layoutRef.current;
    if (!layout) return;

    if (activeId === id) {
      // collapse — toggle back to row
      layout.update(
        ({ root }) => {
          root.classList.remove("ab-expanded");
          root.classList.add("ab-row");
        },
        { swapAt: { opacity: 0, filter: "blur(4px)" } }
      );
      setActiveId(null);
    } else {
      // expand selected panel
      layout.update(
        ({ root }) => {
          root.classList.add("ab-expanded");
          root.classList.remove("ab-row");
          // mark which card is active
          root.querySelectorAll(".ab-item").forEach((el) => {
            el.classList.toggle("ab-item--active", el.dataset.id === id);
          });
        },
        { swapAt: { opacity: 0, filter: "blur(4px)" } }
      );
      setActiveId(id);
    }
  };

  return (
    <section id="about" className="about-section">
      <div className="about-grid-bg"   aria-hidden="true" />
      <div className="about-scanlines" aria-hidden="true" />

      <div className="about-inner">
        {/* header */}
        <div className="about-header">
          <div className="about-label">[ IDENTITY_FILE ]</div>
          <h2 className="about-title">
            About <span className="about-accent">Me</span>
          </h2>
          <div className="about-title-line" />
          <p className="about-sub">Select a panel to expand</p>
        </div>

        {/* layout container */}
        <div className="ab-layout-container ab-row" ref={containerRef}>
          {PANELS.map((panel) => (
            <div
              key={panel.id}
              className={`ab-item${activeId === panel.id ? " ab-item--active" : ""}`}
              data-id={panel.id}
              onClick={() => openPanel(panel.id)}
            >
              {/* corner brackets */}
              <div className="ab-corner tl" />
              <div className="ab-corner tr" />
              <div className="ab-corner bl" />
              <div className="ab-corner br" />

              <div className="ab-tag">{panel.tag}</div>
              <h3 className="ab-title">{panel.title}</h3>

              {/* collapsed hint */}
              <div className="ab-hint">
                {activeId === panel.id ? "CLOSE ×" : "OPEN_FILE →"}
              </div>

              {/* expanded content */}
              {activeId === panel.id && (
                <div
                  className="ab-content"
                  dangerouslySetInnerHTML={{ __html: panel.content }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;