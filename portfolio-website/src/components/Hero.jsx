import { FaLinkedinIn, FaGithub, FaSalesforce, FaWhatsapp } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Hero = () => {
  return (
    <header id="home" style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'linear-gradient(rgba(10, 25, 47, 0.8), rgba(10, 25, 47, 0.8)), url("/hero-bg.png")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed'
    }}>
      <div className="container fade-in hero-content" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--primary)', marginBottom: '20px', fontWeight: '400', fontSize: '1.2rem', margin: '0 0 20px 0' }}>Hi, I am</p>
        <h1 className="typing-text hero-main-title">Jenish Gangani.</h1>
        <h2 className="hero-sub-title">Senior Salesforce Developer.</h2>
        <p className="hero-description">
          Specializing in AI-powered solutions, OmniStudio, and high-performance LWC applications. 
          Expert in integrating Salesforce with external systems and building intelligent, user-centric workflows.
        </p>
        <div className="hero-btns-wrapper">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="https://calendly.com/jenishgangani239/30min" target="_blank" rel="noreferrer" className="btn btn-primary">Book 30-Min Call</a>
        </div>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center' }}>
          <a href="https://www.linkedin.com/in/jenish-gangani-577440215/" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="LinkedIn" aria-label="Visit LinkedIn Profile">
            <FaLinkedinIn />
          </a>
          <a href="https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="Upwork" aria-label="Visit Upwork Profile">
            <SiUpwork />
          </a>
          <a href="https://www.salesforce.com/trailblazer/jgangani1" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="Trailhead" aria-label="Visit Trailblazer Profile">
            <FaSalesforce />
          </a>
          <a href="https://github.com/jenish238" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="GitHub" aria-label="Visit GitHub Profile">
            <FaGithub />
          </a>
          <a href="https://wa.me/919081131732?text=Hello%20Jenish!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.8rem', transition: 'var(--transition)' }} className="social-icon" title="WhatsApp" aria-label="Direct message on WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
