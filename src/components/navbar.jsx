import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for transparent background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${isScrolled ? "transparent" : ""}`}>
      
      {/* Hamburger icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`line ${menuOpen ? "rotate1" : ""}`}></div>
        <div className={`line ${menuOpen ? "fade" : ""}`}></div>
        <div className={`line ${menuOpen ? "rotate2" : ""}`}></div>
      </div>

      {/* Nav links */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/#home" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/#skills" onClick={closeMenu}>Skills</Link>
        </li>
        <li>
          <Link to="/#projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/#experience" onClick={closeMenu}>Experience</Link>
        </li>
        <li>
          <Link to="/#about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/#contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
