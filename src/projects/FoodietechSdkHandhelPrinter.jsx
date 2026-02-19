import { useState } from "react";
import "../style/projects/Automation.css";

const images = [
  "/foodietech1.jpg",
  "/foodietech2.jpg",
  "/foodietech3.jpg",
  "/foodietech4.jpg",
  "/foodietech5.jpg",
];

const githubLink = "https://github.com/your-username/foodietech-automation";


function MangrovePage() {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mangrove-page">
      {/* ===== Hero ===== */}
      <header className="mangrove-hero">
        <h1>FoodieTech Automation</h1>
        <p>Python-based data entry automation system</p>
      </header>

      {/* ===== Overview ===== */}
      <section className="mangrove-section">
        <h2>Project Overview</h2>
        <p>
          FoodieTech Automation is a Python-based system developed to automate
          repetitive data entry tasks that were previously handled manually.
          The automation significantly reduced human effort, improved accuracy,
          and increased overall operational efficiency.
        </p>
        <p>
          The system integrates Excel and Google Sheets with browser automation
          to streamline data collection and entry workflows, allowing business
          data to be processed faster and more reliably.
        </p>
      </section>

      {/* ===== Problem ===== */}
      <section className="mangrove-section">
        <h2>Problem Statement</h2>
        <p>
          Manual data entry at FoodieTech was time-consuming, error-prone, and
          required significant human effort. Repeating the same data input
          process across platforms slowed down operations and reduced
          productivity.
        </p>
        <p>
          There was a clear need for an automated solution to eliminate repetitive
          manual work while ensuring consistent and accurate data entry.
        </p>
      </section>

      {/* ===== Case Study ===== */}
      <section className="mangrove-section">
        <h2>Case Study</h2>
        <p>
          Previously, staff manually entered business data into spreadsheets and
          web systems, taking several minutes per entry. With the automation
          system, data is processed directly from Excel or Google Sheets and
          automatically submitted through scripted browser interactions,
          reducing entry time from minutes to seconds.
        </p>
      </section>

      {/* ===== Media Slider ===== */}
      <section className="mangrove-section">
        <h2>Project Media</h2>

        <div className="slider">
          <button className="slider-btn left" onClick={prevImage}>
            &#10094;
          </button>

          <img
            src={images[current]}
            alt="FoodieTech automation project"
            className="slider-image"
          />

          <button className="slider-btn right" onClick={nextImage}>
            &#10095;
          </button>
        </div>

        <div className="video-wrapper">
          <video controls>
            <source src="/foodietech-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* ===== Tech & Role ===== */}
      <section className="mangrove-section tech-cards">
        <h2>Tech Stack & Role</h2>
      
        <div className="tech-card-grid">
          {/* Languages */}
          <div className="tech-card">
            <h3>Languages</h3>
            <ul>
              <li>Python</li>
            </ul>
          </div>
      
          {/* Tools */}
          <div className="tech-card">
            <h3>Tools & Libraries</h3>
            <ul>
              <li>Playwright</li>
              <li>Tkinter</li>
              <li>Excel</li>
              <li>Google Sheets</li>
            </ul>
          </div>
      
          {/* Automation */}
          <div className="tech-card">
            <h3>Automation Focus</h3>
            <ul>
              <li>Browser Automation</li>
              <li>Data Entry Automation</li>
              <li>Workflow Optimization</li>
            </ul>
          </div>
        </div>
      
        <p className="role-text">
          <strong>Role:</strong> Automation Developer
        </p>
      </section>
      
      {/* ===== Features ===== */}
      <section className="mangrove-section">
        <h2>Key Features</h2>
        <ul className="feature-list">
          <li>Automated data entry to eliminate manual labor</li>
          <li>Excel and Google Sheets integration</li>
          <li>Browser automation using Playwright</li>
          <li>Simple desktop interface built with Tkinter</li>
          <li>Improved speed, accuracy, and efficiency</li>
        </ul>
      </section>

      {/* ===== Links ===== */}
      <div className="project-links">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="github-btn"
        >
          View on GitHub
        </a>
      </div>

      {/* ===== Back ===== */}
      <div className="mangrove-back">
        <a href="/projects" className="back-btn">← Back to Projects</a>
      </div>
    </section>
  );
}

export default MangrovePage;