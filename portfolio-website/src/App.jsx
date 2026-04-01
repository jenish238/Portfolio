import React, { useEffect, useRef, useState } from 'react';
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
import ParticleBackground from './components/ParticleBackground';
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
const StatCard = ({ value, suffix, label, color }) => {
  const [count, ref] = useCounter(value);
  return (
    <div ref={ref} style={{
      textAlign: 'center',
      padding: '24px 20px',
      borderRadius: '12px',
      background: 'rgba(100,255,218,0.05)',
      border: '1px solid rgba(100,255,218,0.15)',
      flex: '1 1 130px',
    }}>
      <div style={{ fontSize: '2.4rem', fontWeight: '800', color, lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: '0.82rem', color: 'var(--text-sub)', marginTop: '8px', fontWeight: '500' }}>{label}</div>
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

      {/* ── About ─────────────────────────────────────────── */}
      <section id="about" style={{ padding: '120px 0', background: 'var(--bg-navy)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          {/* Two-column layout: text left, stats right */}
          <div style={{ display: 'flex', gap: '60px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Left: text */}
            <article style={{ flex: '1 1 400px' }}>
              <h2 className="slide-in-left stagger-1" style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--primary)' }}>About Me</h2>
              <div style={{ color: 'var(--white)', fontSize: '1.1rem', lineHeight: '1.85' }}>
                <p className="fade-in stagger-2" style={{ marginBottom: '22px' }}>
                  I am a results-driven <strong>Senior Salesforce Developer</strong> with over 4 years of experience delivering
                  scalable solutions across Healthcare, Finance, and Real Estate. I specialize in building complex
                  architectures using <strong>Apex, LWC, and OmniStudio</strong>.
                </p>
                <p className="fade-in stagger-3" style={{ marginBottom: '22px' }}>
                  My recent focus has been at the intersection of CRM and AI, where I've implemented intelligent
                  solutions using <strong>Gemini AI</strong>—including voice-enabled applications, smart data summarization,
                  and automated reporting workflows that significantly increase operational efficiency.
                </p>
                <p className="fade-in stagger-4">
                  I thrive on solving challenging business problems through secure, high-performance integrations
                  and user-centric designs. Whether it's optimizing a massive Salesforce org or building
                  a custom AI chatbot, I am committed to engineering excellence.
                </p>
              </div>
            </article>

            {/* Right: animated stats */}
            <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: '16px', paddingTop: '80px' }}>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <StatCard value={4}  suffix="+"  label="Years Experience"        color="var(--primary)" />
                <StatCard value={15} suffix="+"  label="Projects Delivered"      color="var(--secondary)" />
              </div>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <StatCard value={7} suffix="+"  label="Certifications"          color="var(--primary)" />
                <StatCard value={5}  suffix="+"  label="Industries Served"        color="var(--secondary)" />
              </div>
            </div>
          </div>
        </div>
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
          {[
            { href: 'https://www.linkedin.com/in/jenish-gangani-577440215/', icon: <FaLinkedinIn />, label: 'LinkedIn' },
            { href: 'https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share', icon: <SiUpwork />, label: 'Upwork' },
            { href: 'https://www.salesforce.com/trailblazer/jgangani1', icon: <FaSalesforce />, label: 'Trailhead' },
            { href: 'https://github.com/jenish238', icon: <FaGithub />, label: 'GitHub' },
            { href: 'mailto:jenishgangani238@gmail.com', icon: <FaEnvelope />, label: 'Email' },
            { href: 'https://wa.me/919081131732', icon: <FaWhatsapp />, label: 'WhatsApp' },
          ].map(({ href, icon, label }) => (
            <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
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
