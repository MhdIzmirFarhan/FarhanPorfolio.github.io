import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/navbar.jsx";
import Home from "./pages/home.jsx";
import Skills from "./pages/skills.jsx";
import Projects from "./pages/projects.jsx";
import Experience from "./pages/experience.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

// Project pages
import Mangrove from "./projects/mangrove.jsx";
import Automation from "./projects/Automation.jsx";
import BugReportSystem from "./projects/BugReportSystem.jsx";

// Experience pages
import DgSailor from "./exprience/DgSailor.jsx"; // Correct capitalization

function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <Navbar />
      <Routes>
        {/* Main Portfolio Page */}
        <Route
          path="/"
          element={
            <>
              <Home />
              <Skills />
              <Projects />
              <Experience />
              <About />
              <Contact />
            </>
          }
        />

        {/* Project Pages */}
        <Route path="/projects/mangrove" element={<Mangrove />} />
        <Route path="/projects/automation" element={<Automation />} />
        <Route path="/projects/bugreportsystem" element={<BugReportSystem />} />

        {/* Experience Pages */}
        <Route path="/experience/DgSailor" element={<DgSailor />} />
      </Routes>
    </Router>
  );
}

export default App;
