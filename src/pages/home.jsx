import { useEffect, useRef, useState } from "react";
import { animate, splitText, stagger } from "animejs";
import { Link } from "react-router-dom";
import "../style/home.css";
import meImage from "../assets/me.jpg";
import resumePDF from "../assets/resume.pdf";

function Home() {
  const nameRef = useRef(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;

    const timer = setTimeout(() => {
      splitText(el, { lines: { wrap: "clip" } }).addEffect(({ lines }) =>
      animate(lines, {
        y: [
          { to: ["100%", "0%"] },
          { to: "-100%", delay: 750, ease: "in(3)" },
        ],
        duration: 750,
        ease: "out(3)",
        delay: stagger(200),
        loop: true,
        loopDelay: 500,
      })
    );
    },100);
    return () => clearTimeout(timer);
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDF;
    link.download = "Izmir_Farhan_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid-bg"   aria-hidden="true" />
      <div className="hero-scanlines" aria-hidden="true" />

      {/* top-left terminal tag */}
      <div className="hero-tag">[ PORTFOLIO_v1.0 ]</div>

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <div className="hero-greeting">HELLO, WORLD —</div>

          {/* animated name */}
          <h1 className="hero-name">
            <span className="hero-name-static">I'm </span>
            <span className="hero-name-animated" ref={nameRef}>
              Farhan Kamal
            </span>
          </h1>

          <h2 className="hero-role">
            Full-Stack Developer
            <span className="hero-role-sep"> /// </span>
            IT Technician
          </h2>

          <p className="hero-desc">
            I build real-world systems using React, Django, Kotlin, and AI —
            from environmental technology to startup platforms.
          </p>

          {/* stack tags */}
          <div className="hero-stack">
            {["React", "Django", "Flutter", "Kotlin", "TensorFlow"].map((t) => (
              <span key={t} className="hero-stack-tag">{t}</span>
            ))}
          </div>

          <div className="hero-buttons">
            <div className="hero-dropdown-wrap">
              <button
                className="hero-btn hero-btn--primary"
                onClick={() => setShowDropdown((p) => !p)}
              >
                DETAILS {showDropdown ? "▲" : "▼"}
              </button>
              {showDropdown && (
                <div className="hero-dropdown">
                  <button className="hero-dropdown-item" onClick={downloadResume}>
                    → Download Resume
                  </button>
                  <button className="hero-dropdown-item" onClick={downloadResume}>
                    → Download CV
                  </button>
                </div>
              )}
            </div>
            <Link to="/#contact" className="hero-btn hero-btn--ghost">
              GET_IN_TOUCH
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="hero-img-wrap">
            <div className="hero-img-corner tl" />
            <div className="hero-img-corner tr" />
            <div className="hero-img-corner bl" />
            <div className="hero-img-corner br" />
            <img src={meImage} alt="Farhan Kamal" />
            <div className="hero-img-tag">FARHAN_KAMAL.jpg</div>
          </div>
        </div>
      </div>

      {/* bottom scroll hint */}
      <div className="hero-scroll-hint">
        <span>scroll down</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

export default Home;