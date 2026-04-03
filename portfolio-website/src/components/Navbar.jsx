import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Active section detection
      const sections = ['home', 'about', 'experience', 'skills', 'certifications', 'education', 'achievements', 'projects', 'contact'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: 'var(--primary)',
    borderBottom: '2px solid var(--primary)',
    paddingBottom: '2px',
  };

  return (
    <nav className="glass" aria-label="Main Navigation" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '15px 0'
    }}>
      {/* Scroll Progress Bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '3px',
        width: `${scrollProgress}%`,
        background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
        transition: 'width 0.1s ease',
        zIndex: 1001,
        boxShadow: '0 0 8px var(--primary)',
      }} />

      <div className="container" style={{ 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        gap: '50px',
        transition: 'all 0.5s ease-in-out'
      }}>
        <a href="#home" className="logo" onClick={closeMenu} aria-label="Home page" style={{
          fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', textDecoration: 'none', transition: 'var(--transition)'
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
          {[
            ['home', 'Home'], ['about', 'About'], ['experience', 'Experience'],
            ['skills', 'Skills'], ['certifications', 'Certifications'],
            ['education', 'Education'], ['achievements', 'Achievements'], ['projects', 'Projects']
          ].map(([id, label]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav-link"
                onClick={closeMenu}
                aria-label={`Navigate to ${label}`}
                style={activeSection === id ? activeLinkStyle : {}}
              >{label}</a>
            </li>
          ))}
          <li><a href="#contact" className="btn btn-primary" onClick={closeMenu} style={{ padding: '8px 20px' }}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
