// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "../style/experience.css";

// const experienceData = [
//   {
//     company: "DG Sailor Sdn. Bhd.",
//     role: "Full-stack & Mobile Developer",
//     description: [
//       "Worked on BookTara, a client-facing appointment booking system.",
//       "Collected and cleaned business data using Google Sheets automation.",
//       "Assisted in dashboard configuration and client support.",
//     ],
//     image: "/experience/booktara.jpg",
//     logo: "/experience/dgsailor-logo.png", // ✅ ADD THIS
//     link: "/experience/DgSailor",
//   },
// ];

// function Experience() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const prev = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
//     );
//   };

//   const next = () => {
//     setActiveIndex((prevIndex) =>
//       prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const getClass = (index) => {
//     if (index === activeIndex) return "active";

//     if (
//       index === activeIndex - 1 ||
//       (activeIndex === 0 && index === experienceData.length - 1)
//     )
//       return "left";

//     if (
//       index === activeIndex + 1 ||
//       (activeIndex === experienceData.length - 1 && index === 0)
//     )
//       return "right";

//     return "hidden";
//   };

//   return (
//     <section id="experience" className="experience-section">
//       <div className="section-title">
//         <span>My Journey</span>
//         <h2>Experience</h2>
//       </div>

//       <div className="experience-carousel">
//         <button className="carousel-btn left" onClick={prev}>
//           &#10094;
//         </button>

//         <div className="experience-container">
//           <div
//   key={index}
//   className={`experience-card ${getClass(index)}`}
//   style={{ backgroundImage: `url(${exp.image})` }}
// >
//   <div className="overlay"></div>

//   {/* ✅ Company Logo */}
//   <div className="company-logo">
//     <img src={exp.logo} alt={`${exp.company} logo`} />
//   </div>

//   <div className="experience-content">
//     <p><strong>{exp.company}</strong></p>
//     <p><em>{exp.role}</em></p>

//     <ul>
//       {exp.description.map((item, i) => (
//         <li key={i}>{item}</li>
//       ))}
//     </ul>

//     <Link to={exp.link} className="read-more-btn">
//       Read More
//     </Link>
//   </div>
// </div>

//           {experienceData.map((exp, index) => (
//             <div
//               key={index}
//               className={`experience-card ${getClass(index)}`}
//               style={{ backgroundImage: `url(${exp.image})` }}
//             >
//               <div className="overlay"></div>

//               <div className="experience-content">
//                 <p><strong>{exp.company}</strong></p>
//                 <p><em>{exp.role}</em></p>

//                 <ul>
//                   {exp.description.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>

//                 <Link to={exp.link} className="read-more-btn">
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         <button className="carousel-btn right" onClick={next}>
//           &#10095;
//         </button>
//       </div>
//     </section>
//   );
// }

// export default Experience;

import { useState } from "react";
import { Link } from "react-router-dom";
import "../style/experience.css";

const experienceData = [
  {
    company: "DG Sailor Sdn. Bhd.",
    role: "Full-stack & Mobile Developer",
    description: [
      "Worked on BookTara, a client-facing appointment booking system.",
      "Collected and cleaned business data using Google Sheets automation.",
      "Assisted in dashboard configuration and client support.",
    ],
    // image: "/experience/booktara.jpg",
    logo: "/experience/logo-removebg-preview.png",
    link: "/experience/DgSailor",
    tag: "01 / WORK",
  },
];

function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () =>
    setActiveIndex((p) => (p === 0 ? experienceData.length - 1 : p - 1));
  const next = () =>
    setActiveIndex((p) => (p === experienceData.length - 1 ? 0 : p + 1));

  const getClass = (index) => {
    if (index === activeIndex) return "active";
    if (index === activeIndex - 1 || (activeIndex === 0 && index === experienceData.length - 1)) return "left";
    if (index === activeIndex + 1 || (activeIndex === experienceData.length - 1 && index === 0)) return "right";
    return "hidden";
  };

  return (
    <section id="experience" className="exp-section">
      {/* bg decorations */}
      <div className="exp-grid-bg" aria-hidden="true" />
      <div className="exp-scanlines" aria-hidden="true" />

      {/* title */}
      <div className="exp-header">
        <div className="exp-label">[ EXPERIENCE_LOG ]</div>
        <h2 className="exp-title">My <span className="exp-accent">Journey</span></h2>
        <div className="exp-title-line" />
      </div>

      {/* carousel */}
      <div className="exp-carousel">
        <button className="exp-arrow" onClick={prev} aria-label="Previous">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="exp-container">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className={`exp-card ${getClass(index)}`}
              style={{ backgroundImage: `url(${exp.image})` }}
            >
              <div className="exp-overlay" />

              {/* corner brackets */}
              <div className="exp-corner tl" />
              <div className="exp-corner tr" />
              <div className="exp-corner bl" />
              <div className="exp-corner br" />

              {/* tag */}
              <div className="exp-card-tag">{exp.tag}</div>

              {/* logo */}
              <div className="exp-logo">
                <img src={exp.logo} alt={`${exp.company} logo`} />
              </div>

              {/* content */}
              <div className="exp-content">
                <p className="exp-company">{exp.company}</p>
                <p className="exp-role">{exp.role}</p>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <Link to={exp.link} className="exp-read-more">
                  OPEN_FILE →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <button className="exp-arrow" onClick={next} aria-label="Next">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* dot indicators */}
      <div className="exp-dots">
        {experienceData.map((_, i) => (
          <button
            key={i}
            className={`exp-dot${i === activeIndex ? " active" : ""}`}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;