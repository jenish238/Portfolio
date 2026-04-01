import React, { useEffect } from 'react';
import { FaGithub, FaLinkedinIn, FaSalesforce, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Integrations from './components/Integrations';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.15 });

    const animatedElements = document.querySelectorAll(
      '.fade-in, .zoom-in, .slide-in-left, .slide-in-right, .flip-in-y, .bounce-in, .blur-in'
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="App">
      <Navbar />
      <Hero />
      <section id="about" style={{ padding: '120px 0', background: 'var(--bg-navy)' }}>
        <article className="container" style={{ maxWidth: '850px' }}>
          <h2 className="slide-in-left stagger-1" style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--primary)' }}>About Me</h2>
          <div style={{ color: 'var(--white)', fontSize: '1.2rem', lineHeight: '1.8' }}>
            <p className="fade-in stagger-2" style={{ marginBottom: '25px' }}>
              I am a results-driven <strong>Senior Salesforce Developer</strong> with over 4 years of experience delivering 
              scalable solutions across Healthcare, Finance, and Real Estate. I specialize in building complex 
              architectures using <strong>Apex, LWC, and OmniStudio</strong>.
            </p>
            <p className="fade-in stagger-3" style={{ marginBottom: '25px' }}>
              My recent focus has been at the intersection of CRM and AI, where I've implemented intelligent 
              solutions using <strong>Gemini AI</strong>—including voice-enabled applications, smart data summarization, 
              and automated reporting workflows that significantly increase operational efficiency.
            </p>
            <p className="fade-in stagger-4">
              I thrive on solving challenging business problems through secure, high-performance integrations 
              and user-centric designs. Whether it's optimizing a massive Salesforce org or building 
              a custom AI chatbot, I am committed to engineering excellence..
            </p>
          </div>
        </article>
      </section>
      <Experience />
      <Skills />
      <Integrations />
      <Certifications />
      <Education />
      <Achievements />
      <Projects />
      <Contact />
      <footer style={{ padding: '60px 0 40px', textAlign: 'center', background: 'var(--bg-dark)' }}>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginBottom: '25px' }}>
          <a href="https://www.linkedin.com/in/jenish-gangani-577440215/" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label="Upwork">
            <SiUpwork />
          </a>
          <a href="https://www.salesforce.com/trailblazer/jgangani1" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label="Salesforce Trailhead">
            <FaSalesforce />
          </a>
          <a href="https://github.com/jenish238" target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="mailto:jenishgangani238@gmail.com" style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label="Email">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/919081131732?text=Hello%20Jenish!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect." target="_blank" rel="noreferrer" style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
        </div>
        <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', letterSpacing: '0.5px' }}>Built with ❤️ by Jenish Gangani &copy; 2026</p>
      </footer>
    </main>
  );
}

export default App;
