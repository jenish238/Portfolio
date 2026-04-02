import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaSalesforce, FaWhatsapp, FaDownload } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const ROLES = [
  'Senior Salesforce Developer.',
  '7× Salesforce Certified Expert',
  'LWC & Apex Expert.',
  'AI Integration Specialist.',
  'Finalist at Agentic AI Day (Hackathon)',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = ROLES[roleIndex];
    let i = displayed.length;
    let timeout;

    if (typing) {
      if (i < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, i + 1)), 65);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (i > 0) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, i - 1)), 35);
      } else {
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <header id="home" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg-navy)',
    }}>
      <div className="container fade-in hero-content" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
        <p style={{ color: 'var(--primary)', marginBottom: '20px', fontWeight: '400', fontSize: '1.2rem', margin: '0 0 20px 0' }}>Hi, I am</p>
        <h1 className="hero-main-title">Jenish Gangani.</h1>

        {/* Typewriter role */}
        <h2 className="hero-sub-title" style={{ minHeight: '3rem' }}>
          {displayed}
          <span style={{
            display: 'inline-block',
            width: '3px',
            height: '1.1em',
            background: 'var(--primary)',
            marginLeft: '3px',
            verticalAlign: 'middle',
            animation: 'blink 1s step-end infinite',
          }} />
        </h2>

        <p className="hero-description">
          Specializing in AI-powered solutions, OmniStudio, and high-performance LWC applications.
          Expert in integrating Salesforce with external systems and building intelligent, user-centric workflows.
        </p>
        <div className="hero-btns-wrapper">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="https://calendly.com/jenishgangani239/30min" target="_blank" rel="noreferrer" className="btn btn-primary">Book 30-Min Call</a>
          <a href="/resume.pdf" download className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <FaDownload /> Download Resume
          </a>
        </div>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/jenish-gangani-577440215/" target="_blank" rel="me noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="LinkedIn" aria-label="LinkedIn"><FaLinkedinIn /></a>
          <a href="https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share" target="_blank" rel="me noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="Upwork" aria-label="Upwork"><SiUpwork /></a>
          <a href="https://www.salesforce.com/trailblazer/jgangani1" target="_blank" rel="me noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="Trailhead" aria-label="Trailhead"><FaSalesforce /></a>
          <a href="https://github.com/jenish238" target="_blank" rel="me noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="GitHub" aria-label="GitHub"><FaGithub /></a>
          <a href="https://wa.me/919081131732?text=Hello%20Jenish!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="me noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="WhatsApp" aria-label="WhatsApp"><FaWhatsapp /></a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
