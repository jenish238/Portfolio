import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="glass" aria-label="Main Navigation" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '15px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Home page" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: 'var(--primary)',
          textDecoration: 'none',
          transition: 'var(--transition)'
        }}>
          Jenish<span style={{ color: 'var(--white)' }}>.G</span>
        </a>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={toggleMenu}>
          <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}></span>
          <span style={{ opacity: isOpen ? 0 : 1 }}></span>
          <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></span>
        </div>

        <ul className={`nav-links-list ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" className="nav-link" onClick={closeMenu} aria-label="Navigate to Home">Home</a></li>
          <li><a href="#about" className="nav-link" onClick={closeMenu} aria-label="Navigate to About">About</a></li>
          <li><a href="#experience" className="nav-link" onClick={closeMenu} aria-label="Navigate to Experience">Experience</a></li>
          <li><a href="#skills" className="nav-link" onClick={closeMenu} aria-label="Navigate to Skills">Skills</a></li>
          <li><a href="#certifications" className="nav-link" onClick={closeMenu} aria-label="Navigate to Certifications">Certifications</a></li>
          <li><a href="#education" className="nav-link" onClick={closeMenu} aria-label="Navigate to Education">Education</a></li>
          <li><a href="#achievements" className="nav-link" onClick={closeMenu} aria-label="Navigate to Achievements">Achievements</a></li>
          <li><a href="#projects" className="nav-link" onClick={closeMenu} aria-label="Navigate to Projects">Projects</a></li>
          <li><a href="#contact" className="btn btn-primary" onClick={closeMenu} aria-label="Navigate to Contact Form" style={{ padding: '8px 20px' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
