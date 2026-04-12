import React, { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedinIn, FaSalesforce, FaWhatsapp, FaEnvelope, FaBriefcase, FaCode, FaGlobe } from 'react-icons/fa';
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
import ParticleBackground from './components/ParticleBackground';
import Testimonials from './components/Testimonials';
import SocialSidebar from './components/SocialSidebar';
import BackToTop from './components/BackToTop';

/* ── Animated counter hook ─────────────────────────────────── */
const useCounter = (target, duration = 1800) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); obs.disconnect(); }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return [count, ref];
};

/* ── Individual stat card ─────────────────────────────────── */
const StatCard = ({ value, suffix, label, color, icon }) => {
  const [count, ref] = useCounter(value);
  return (
    <div ref={ref} className="stat-card" style={{
      textAlign: 'center',
      padding: '24px 20px',
      borderRadius: '16px',
      background: 'rgba(2, 12, 27, 0.4)',
      border: '1px solid rgba(0, 212, 255, 0.1)',
      backdropFilter: 'blur(8px)',
      transition: 'all 0.3s ease',
      cursor: 'default',
    }}>
      <div style={{ fontSize: '1.5rem', color: color, marginBottom: '8px', opacity: 0.8 }}>{icon}</div>
      <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--white)', lineHeight: 1, marginBottom: '8px' }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.85rem', color: 'var(--text-sub)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {label}
      </div>
    </div>
  );
};

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.15 });

    const els = document.querySelectorAll(
      '.fade-in, .zoom-in, .slide-in-left, .slide-in-right, .flip-in-y, .bounce-in, .blur-in'
    );
    els.forEach(el => observer.observe(el));
    return () => els.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <main className="App">
      <ParticleBackground />
      <Navbar />
      <SocialSidebar />
      <BackToTop />
      <Hero />

      <Projects />
      <Experience />
      <Skills />
      <Testimonials />
      <Integrations />
      <Certifications />
      
      {/* ── About Section ──────────────────────────────────────── */}
      <section id="about" style={{ padding: '140px 0', position: 'relative' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <div className="section-header fade-in" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: '3rem', color: 'var(--white)', marginBottom: '16px' }}>About Me</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>

          <div style={{ 
            display: 'flex', 
            gap: '80px', 
            alignItems: 'center', 
            flexWrap: 'wrap',
            background: 'rgba(17, 34, 64, 0.4)',
            padding: '60px 50px',
            borderRadius: '24px',
            border: '1px solid rgba(0, 212, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
          }}>
            {/* Left: Content */}
            <article style={{ flex: '1 1 450px' }}>
              <p style={{ 
                color: 'var(--primary)', 
                fontSize: '0.9rem', 
                fontWeight: '700', 
                letterSpacing: '3px', 
                textTransform: 'uppercase', 
                marginBottom: '16px' 
              }}>The Professional Story</p>
              <h3 style={{ fontSize: '2.2rem', color: 'var(--white)', marginBottom: '30px', lineHeight: '1.2' }}>
                Turning Complex Challenges Into <span style={{ color: 'var(--primary)' }}>Intelligent Solutions.</span>
              </h3>
              
              <div style={{ color: 'var(--text-main)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                <p style={{ marginBottom: '25px' }}>
                  I am a results-driven <strong>Senior Salesforce Developer</strong> with over 4 years of professional experience
                  delivering high-impact, scalable CRM solutions. My expertise lies in the architecture and development of
                  complex enterprise systems across major industries including <strong>Healthcare, Finance, Construction, and Renewable Energy</strong>.
                </p>
                <p style={{ marginBottom: '25px' }}>
                  Currently, I am at the forefront of the <strong>AI-First CRM</strong> era. I specialize in integrating 
                  autonomous agents and <strong>Agentforce</strong> capabilities with <strong>Gemini AI</strong> to create 
                  next-generation workflows that are not just automated, but truly intelligent.
                </p>
                <p>
                  As a <strong>6× Certified Salesforce Expert</strong>, I bridge the gap between business vision and 
                  technical execution, ensuring that every line of code adds measurable value.
                </p>
              </div>
            </article>

            {/* Right: Metrics Grid */}
            <div style={{ flex: '1 1 320px' }}>
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(2, 1fr)', 
                gap: '20px' 
              }}>
                <StatCard 
                  value={4} 
                  suffix="+" 
                  label="Years Exp." 
                  color="var(--primary)" 
                  icon={<FaBriefcase />}
                />
                <StatCard 
                  value={15} 
                  suffix="+" 
                  label="Projects" 
                  color="var(--accent)" 
                  icon={<FaCode />}
                />
                <StatCard 
                  value={6} 
                  suffix="+" 
                  label="Certified" 
                  color="var(--primary)" 
                  icon={<FaSalesforce />}
                />
                <StatCard 
                  value={5} 
                  suffix="+" 
                  label="Industries" 
                  color="var(--accent)" 
                  icon={<FaGlobe />}
                />
              </div>
              
              <div style={{ 
                marginTop: '30px', 
                padding: '20px', 
                borderRadius: '12px', 
                borderLeft: '4px solid var(--primary)',
                background: 'rgba(0, 212, 255, 0.03)',
              }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-sub)', fontStyle: 'italic' }}>
                  "Technical leadership is not about knowing all the answers, but about building systems that consistently find them."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Education />
      <Achievements />
      <Contact />

      <footer id="footer" style={{ padding: '60px 0 40px', textAlign: 'center', background: 'var(--bg-dark)' }}>
        <div style={{ display: 'flex', gap: '25px', justifyContent: 'center', marginBottom: '25px' }}>
          {[
            { href: 'https://www.linkedin.com/in/jenish-gangani-577440215/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
            { href: 'https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share', icon: <SiUpwork />, label: 'Upwork' },
            { href: 'https://www.salesforce.com/trailblazer/jgangani1', icon: <FaSalesforce />, label: 'Trailhead' },
            { href: 'https://github.com/jenish238', icon: <FaGithub />, label: 'GitHub' },
            { href: 'mailto:hello@jenishgangani.me', icon: <FaEnvelope />, label: 'Email' },
            { href: 'https://wa.me/919081131732', icon: <FaWhatsapp />, label: 'WhatsApp' },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel={href.startsWith('mailto') ? 'noreferrer' : 'me noreferrer'}
              style={{ color: 'var(--white)', fontSize: '1.5rem' }} className="social-icon" aria-label={label}>
              {icon}
            </a>
          ))}
        </div>
        <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem', letterSpacing: '0.5px' }}>Built with ❤️ by Jenish Gangani &copy; 2026</p>
      </footer>
    </main>
  );
}

export default App;
