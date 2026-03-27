import React from 'react';

const Achievements = () => {
  return (
    <section id="achievements" style={{ padding: '80px 0', background: 'var(--bg-navy)' }}>
      <div className="container">
        <h2 className="slide-in-left stagger-1" style={{ fontSize: '2.5rem', marginBottom: '50px', color: 'var(--white)', textAlign: 'center' }}>Achievements & Hackathons</h2>
        <div className="fade-in stagger-2">
          <div className="glass premium-hover" style={{
            padding: '40px',
            borderRadius: '8px',
            borderLeft: '4px solid var(--primary)',
            transition: 'var(--transition)',
            position: 'relative'
          }}>
          <h3 style={{ color: 'var(--primary)', fontSize: '1.8rem', marginBottom: '10px' }}>
            Finalist – Agentic AI Day 2025
          </h3>
          <p style={{ color: 'var(--white)', fontSize: '1.1rem', marginBottom: '20px', fontStyle: 'italic', margin: '0 0 20px 0' }}>
            Google Cloud & Hack2skill | BIEC, Bengaluru
          </p>
          <p style={{ color: 'var(--white)', lineHeight: '1.7', marginBottom: '15px' }}>
            Participated as a finalist in a national-level AI hackathon. Collaborated with a team of talented developers to design and build innovative AI-driven solutions within a grueling <strong>30-hour challenge</strong>.
          </p>
          <p style={{ color: 'var(--white)', lineHeight: '1.7', marginBottom: '15px' }}>
            Gained hands-on experience in problem-solving, teamwork, and cloud-based application development while exploring cutting-edge tools from <strong>Google Cloud</strong> and advanced <strong>AI technologies</strong>.
          </p>
          <p style={{ color: 'var(--white)', fontWeight: 'bold' }}>
            🏆 Awarded a Certificate of Appreciation for outstanding participation and innovation.
          </p>
          <div className="achievements-btns" style={{ marginTop: '25px', display: 'flex', gap: '15px' }}>
            <a href="https://studio--edugenius-5vnki.us-central1.hosted.app/" target="_blank" rel="noreferrer" className="btn btn-primary" aria-label="View Live Custom AI Project" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
              View Live Project
            </a>
            <a href="https://www.linkedin.com/posts/jenish-gangani-577440215_agenticaiday2025-googlecloud-hack2skill-share-7375114191856287744-wqkb" target="_blank" rel="noreferrer" className="btn btn-primary" aria-label="View Hackathon Post on LinkedIn" style={{ padding: '8px 16px', fontSize: '0.9rem', backgroundColor: 'transparent', color: 'var(--primary)' }}>
              View on LinkedIn
            </a>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
