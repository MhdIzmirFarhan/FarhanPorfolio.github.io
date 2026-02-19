// import { useState } from "react";
// import "../style/experience/DgSailor.css";
// import dg1 from "./DGsailor/dg1.jpeg"
// import dg2 from "./DGsailor/dg2.jpeg"
// import dg3 from "./DGsailor/dg3.jpeg"
// import dg4 from "./DGsailor/dg4.jpeg"
// import dg5 from "./DGsailor/dg5.jpeg"

// function DgSailor() {
//     const mediaItems = [
//     dg1,
//     dg2,
//     dg3,
//     dg4,
//     dg5,
//   ];

//   const [current, setCurrent] = useState(0);

//   return (
//     <section className="experience-page">
//       {/* Hero / Title */}
//       <div className="experience-hero">
//         <h1>DGSailor</h1>
//         <p>IT & Software Development Internship / Junior Developer</p>
//       </div>

//       {/* Company Overview */}
//       <div className="experience-section overview">
//         <h2>Company Overview</h2>
//         <p>
//           DGSailor is a startup tech company focused on providing software solutions 
//           for business automation and digital transformation. The company specializes 
//           in web applications, mobile platforms, and integrating modern technologies 
//           to solve real-world business problems.
//         </p>
//       </div>

//       {/* Role & Responsibilities */}
//       <div className="experience-section role">
//         <h2>My Role</h2>
//         <p>
//           I worked as a Junior Developer, contributing to multiple projects during my one-year internship.
//           My responsibilities included coding, testing, debugging, and collaborating with the tech team to deliver functional software.
//         </p>
//         <ul>
//           <li>Developed and maintained web applications using Python, JavaScript, and Django.</li>
//           <li>Assisted in mobile development projects using Flutter and Kotlin.</li>
//           <li>Integrated third-party APIs (Google, Firebase) for automation and data management.</li>
//           <li>Participated in code reviews and team meetings to improve project quality.</li>
//         </ul>
//       </div>

//       {/* Achievements */}
//       <div className="experience-section achievements">
//         <h2>Achievements</h2>
//         <ul>
//           <li>Successfully delivered multiple client projects with minimal supervision.</li>
//           <li>Improved database structure and optimized queries for faster performance.</li>
//           <li>Learned professional development workflow in a real startup environment.</li>
//         </ul>
//       </div>

//       {/* Media / Slider */}
//       <div className="experience-section media">
//         <h2>Media</h2>

//         <div className="media-slider">
//           <button
//             className="media-btn left"
//             onClick={() =>
//               setCurrent((prev) =>
//                 prev === 0 ? mediaItems.length - 1 : prev - 1
//               )
//             }
//           >
//             ‹
//           </button>

//           <div className="media-window">
//             <div
//               className="media-track"
//               style={{ transform: `translateX(-${current * 100}%)` }}
//             >
//               {mediaItems.map((item, index) => (
//                 <img key={index} src={item} alt={`Media ${index}`} />
//               ))}
//             </div>
//           </div>

//           <button
//             className="media-btn right"
//             onClick={() =>
//               setCurrent((prev) =>
//                 prev === mediaItems.length - 1 ? 0 : prev + 1
//               )
//             }
//           >
//             ›
//           </button>
//         </div>
//       </div>

//       {/* Back Button */}
//       <div className="experience-back">
//         <a href="/" className="back-btn">← Back to Portfolio</a>
//       </div>
//     </section>
//   );
// }

// export default DgSailor;

import { useState, useEffect, useRef } from "react";
import { createLayout } from "animejs";
import dg1 from "./DGsailor/dg1.jpeg";
import dg2 from "./DGsailor/dg2.jpeg";
import dg3 from "./DGsailor/dg3.jpeg";
import dg4 from "./DGsailor/dg4.jpeg";
import dg5 from "./DGsailor/dg5.jpeg";
import "../style/experience/DgSailor.css";

const CARDS = [
  {
    id: "overview",
    title: "Company Overview",
    tag: "01 / ABOUT",
    duration: 600,
    content: `
      <p>DGSailor is a startup tech company focused on providing software solutions
      for business automation and digital transformation. The company specialises in
      web applications, mobile platforms, and integrating modern technologies to solve
      real-world business problems.</p>
    `,
  },
  {
    id: "role",
    title: "My Role",
    tag: "02 / ROLE",
    duration: 700,
    content: `
      <p>I worked as a Junior Developer, contributing to multiple projects during my
      one-year internship — coding, testing, debugging, and collaborating with the
      tech team to deliver functional software.</p>
      <ul>
        <li>Developed and maintained web apps using Python, JavaScript &amp; Django.</li>
        <li>Assisted in mobile development with Flutter and Kotlin.</li>
        <li>Integrated third-party APIs (Google, Firebase) for automation.</li>
        <li>Participated in code reviews and team meetings.</li>
      </ul>
    `,
  },
  {
    id: "achievements",
    title: "Achievements",
    tag: "03 / WINS",
    duration: 800,
    content: `
      <ul>
        <li>Delivered multiple client projects with minimal supervision.</li>
        <li>Improved database structure and optimised queries for faster performance.</li>
        <li>Gained professional development workflow experience in a real startup.</li>
      </ul>
    `,
  },
];

function DgSailor() {
  const mediaItems = [dg1, dg2, dg3, dg4, dg5];
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const dialogRef = useRef(null);
  const layoutRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    layoutRef.current = createLayout(dialog, {
      children: [".modal-card", "h2", ".modal-body"],
      properties: ["--overlay-alpha"],
    });

    const handleClose = () => closeModal();
    dialog.addEventListener("cancel", handleClose);
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) handleClose();
    });

    return () => {
      dialog.removeEventListener("cancel", handleClose);
    };
  }, []);

  const goTo = (dir) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((p) =>
      dir === "next"
        ? p === mediaItems.length - 1 ? 0 : p + 1
        : p === 0 ? mediaItems.length - 1 : p - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };

  const openModal = (card) => {
    const dialog = dialogRef.current;
    const layout = layoutRef.current;
    if (!dialog || !layout) return;

    dialog.innerHTML = "";
    const clone = document.createElement("div");
    clone.className = "modal-card";
    clone.dataset.layoutId = card.id;
    clone.innerHTML = `
      <div class="modal-tag">${card.tag}</div>
      <h2 data-layout-id="${card.id}-title">${card.title}</h2>
      <div class="modal-body">${card.content}</div>
      <button class="modal-close" id="modal-close-btn">[ CLOSE × ]</button>
    `;
    dialog.appendChild(clone);
    clone.querySelector("#modal-close-btn").addEventListener("click", closeModal);
    layout.update(() => { dialog.showModal(); }, { duration: card.duration });
  };

  const closeModal = () => {
    const dialog = dialogRef.current;
    const layout = layoutRef.current;
    if (!dialog || !layout) return;
    layout.update(() => { dialog.close(); });
  };

  return (
    <section className="dg-page">
      <div className="dg-grid-bg" aria-hidden="true" />
      <div className="dg-scanlines" aria-hidden="true" />

      {/* ── HERO ── */}
      <header className="dg-hero">
        <div className="dg-hero-label">[ EXPERIENCE_LOG ]</div>
        <h1 className="dg-hero-title">
          DG<span className="dg-accent">Sailor</span>
        </h1>
        <p className="dg-hero-sub">IT &amp; Software Development &nbsp;·&nbsp; Junior Developer</p>
        <div className="dg-hero-meta">
          <span>duration:&nbsp;1yr</span>
          <span className="dg-sep">///</span>
          <span>stack:&nbsp;Python · Django · Flutter · Firebase</span>
        </div>
        <div className="dg-hero-line" />
      </header>

      {/* ── MEDIA SLIDER ── */}
      <div className="dg-media">
        <div className="dg-section-label">[ MEDIA_GALLERY ]</div>

        <div className="dg-slider-wrap">
          <button className="dg-arrow" onClick={() => goTo("prev")} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="dg-slider-viewport">
            <div className="dg-slider-track" style={{ transform: `translateX(-${current * 100}%)` }}>
              {mediaItems.map((src, i) => (
                <div key={i} className="dg-slide">
                  <img src={src} alt={`DGSailor ${i + 1}`} />
                  <div className="dg-slide-overlay">
                    <span className="dg-slide-num">
                      {String(i + 1).padStart(2, "0")}&nbsp;/&nbsp;{String(mediaItems.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="dg-arrow" onClick={() => goTo("next")} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="dg-dots">
          {mediaItems.map((_, i) => (
            <button
              key={i}
              className={`dg-dot${i === current ? " active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── INFO CARDS ── */}
      <div className="dg-cards-section">
        <div className="dg-section-label">[ INFO_PANELS ]</div>
        <div className="dg-cards">
          {CARDS.map((card, i) => (
            <button
              key={card.id}
              className="dg-card"
              data-layout-id={card.id}
              style={{ "--delay": `${i * 0.12}s` }}
              onClick={() => openModal(card)}
            >
              <div className="dg-card-tag">{card.tag}</div>
              <h2 className="dg-card-title" data-layout-id={`${card.id}-title`}>
                {card.title}
              </h2>
              <div className="dg-card-cta">OPEN_FILE →</div>
              <div className="dg-card-corner tl" />
              <div className="dg-card-corner tr" />
              <div className="dg-card-corner bl" />
              <div className="dg-card-corner br" />
            </button>
          ))}
        </div>
      </div>

      {/* ── DIALOG ── */}
      <dialog ref={dialogRef} id="layout-dialog" />

      {/* ── BACK ── */}
      <div className="dg-back">
        <a href="/" className="dg-back-btn">← RETURN_TO_ROOT</a>
      </div>
    </section>
  );
}

export default DgSailor;