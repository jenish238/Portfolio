import React from 'react';
import { FaTrophy, FaUsers, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const STATS = [
  { icon: <FaTrophy />,    label: 'Finalist Position', value: 'Top Finalist' },
  { icon: <FaUsers />,     label: 'Team Challenge',    value: 'National Level' },
  { icon: <FaClock />,     label: 'Duration',          value: '30 Hours' },
  { icon: <SiGooglecloud />, label: 'Powered By',      value: 'Google Cloud' },
];

const Achievements = () => (
  <section id="achievements" style={{ padding: '90px 0', background: 'var(--bg-navy)' }}>
    <div className="container">
      <h2 className="slide-in-left stagger-1" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '12px', textAlign: 'center' }}>
        Achievements &amp; Hackathons
      </h2>
      <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '0 auto 50px', borderRadius: '99px' }} />

      <div className="fade-in stagger-2" style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Main card */}
        <div className="glass" style={{
          borderRadius: '16px', overflow: 'hidden',
          border: '1px solid rgba(100,255,218,0.15)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        }}>
          {/* Header banner */}
          <div style={{
            padding: '28px 36px',
            background: 'linear-gradient(135deg,rgba(0,212,255,0.12),rgba(100,255,218,0.06))',
            borderBottom: '1px solid rgba(100,255,218,0.12)',
            display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap',
          }}>
            <div style={{
              width: '56px', height: '56px', borderRadius: '12px', flexShrink: 0,
              background: 'linear-gradient(135deg,#FFD700,#FFA500)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '1.8rem', boxShadow: '0 0 20px rgba(255,215,0,0.35)',
            }}>
              🏆
            </div>
            <div>
              <h3 style={{ color: 'var(--primary)', fontSize: '1.6rem', fontWeight: '800', margin: 0 }}>
                Finalist – Agentic AI Day 2025
              </h3>
              <p style={{ color: 'var(--text-sub)', fontSize: '0.95rem', margin: '4px 0 0' }}>
                Google Cloud &amp; Hack2skill &nbsp;|&nbsp; BIEC, Bengaluru
              </p>
            </div>
            <span style={{
              marginLeft: 'auto', padding: '6px 18px', borderRadius: '99px', fontWeight: '700', fontSize: '0.8rem',
              background: 'rgba(255,215,0,0.12)', color: '#FFD700', border: '1px solid rgba(255,215,0,0.3)',
              flexShrink: 0,
            }}>🥇 Finalist</span>
          </div>

          {/* Content */}
          <div style={{ padding: '32px 36px' }}>
            <p style={{ color: 'var(--white)', lineHeight: '1.8', marginBottom: '16px', fontSize: '1.05rem' }}>
              Participated as a finalist in a national-level AI hackathon. Collaborated with a team of talented developers to design and build innovative AI-driven solutions within a grueling <strong>30-hour challenge</strong>.
            </p>
            <p style={{ color: 'var(--white)', lineHeight: '1.8', marginBottom: '24px', fontSize: '1.05rem' }}>
              Gained hands-on experience in problem-solving, teamwork, and cloud-based application development while exploring cutting-edge tools from <strong>Google Cloud</strong> and advanced <strong>AI technologies</strong>.
            </p>

            {/* Stat chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '30px' }}>
              {STATS.map(({ icon, label, value }) => (
                <div key={label} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  padding: '12px 18px', borderRadius: '10px',
                  background: 'rgba(100,255,218,0.05)', border: '1px solid rgba(100,255,218,0.15)',
                  flex: '1 1 160px',
                }}>
                  <span style={{ color: 'var(--primary)', fontSize: '1.2rem' }}>{icon}</span>
                  <div>
                    <div style={{ color: 'var(--text-sub)', fontSize: '0.72rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
                    <div style={{ color: 'var(--white)', fontWeight: '700', fontSize: '0.95rem' }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <p style={{ color: 'var(--secondary)', fontWeight: '700', marginBottom: '24px', fontSize: '1rem' }}>
              🏆 Awarded a Certificate of Appreciation for outstanding participation and innovation.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="https://studio--edugenius-5vnki.us-central1.hosted.app/" target="_blank" rel="noreferrer"
                className="btn btn-primary" style={{ padding: '10px 22px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                View Live Project <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
              </a>
              <a href="https://www.linkedin.com/posts/jenish-gangani-577440215_agenticaiday2025-googlecloud-hack2skill-share-7375114191856287744-wqkb"
                target="_blank" rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 22px', backgroundColor: 'transparent', color: 'var(--primary)', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                View on LinkedIn <FaExternalLinkAlt style={{ fontSize: '0.8rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Achievements;
