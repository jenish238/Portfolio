import React from 'react';
import { SiSalesforce } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CERTS = [
  { name: 'Platform Developer II',  year: '2024', badge: '/certs/cert-pd2.png',        verify: 'https://trailhead.salesforce.com/credentials/verification' },
  { name: 'Platform Developer I',   year: '2023', badge: '/certs/cert-pd1.png',        verify: 'https://trailhead.salesforce.com/credentials/verification' },
  { name: 'Data Cloud Consultant',  year: '2024', badge: '/certs/cert-data-cloud.png', verify: 'https://trailhead.salesforce.com/credentials/verification' },
  { name: 'JavaScript Developer I', year: '2024', badge: '/certs/cert-js-dev.png',     verify: 'https://trailhead.salesforce.com/credentials/verification' },
  { name: 'Agentforce Specialist',  year: '2025', badge: '/certs/cert-agentforce.png', verify: 'https://trailhead.salesforce.com/credentials/verification' },
  { name: 'Administrator',          year: '2023', badge: '/certs/cert-admin.png',      verify: 'https://trailhead.salesforce.com/credentials/verification' }
];

const CertCard = ({ cert, index }) => {
  const [imgFailed, setImgFailed] = React.useState(false);

  return (
    <div className={`zoom-in stagger-${(index % 4) + 1}`} style={{ flex: '0 1 calc(25% - 24px)', minWidth: '200px', maxWidth: '240px' }}>
      <a
        href={cert.verify}
        target="_blank"
        rel="noreferrer"
        className="glass"
        style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between',
          padding: '28px 20px 20px', borderRadius: '14px', textDecoration: 'none', height: '100%', minHeight: '240px',
          border: '1px solid rgba(0,212,255,0.1)', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)';
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,212,255,0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(0,212,255,0.1)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Year badge */}
        <span style={{
          position: 'absolute', top: '12px', right: '12px', fontSize: '0.72rem', fontWeight: '700',
          background: 'rgba(0,212,255,0.12)', color: 'var(--primary)', padding: '3px 10px',
          borderRadius: '99px', letterSpacing: '0.5px',
        }}>{cert.year}</span>

        {/* Badge image or icon fallback */}
        {cert.badge && !imgFailed ? (
          <img
            src={cert.badge}
            alt={cert.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{ maxHeight: '120px', maxWidth: '90%', objectFit: 'contain', marginBottom: '16px' }}
          />
        ) : (
          <div style={{
            width: '90px', height: '90px', borderRadius: '50%',
            background: 'radial-gradient(circle at 40% 40%, #00a1e0, #032d60)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginBottom: '16px', fontSize: '2.4rem', color: '#fff',
            boxShadow: '0 0 20px rgba(0,161,224,0.35)',
          }}>
            <SiSalesforce />
          </div>
        )}

        <div style={{ textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '8px' }}>
          <p style={{ color: 'var(--white)', fontWeight: '600', fontSize: '0.9rem', lineHeight: '1.35', margin: 0 }}>{cert.name}</p>
          <span style={{ color: 'var(--primary)', fontSize: '0.78rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            Verify <FaExternalLinkAlt style={{ fontSize: '0.65rem' }} />
          </span>
        </div>
      </a>
    </div>
  );
};

const Certifications = () => (
  <section id="certifications" style={{ padding: '90px 0', background: 'var(--bg-navy)' }}>
    <div className="container" style={{ textAlign: 'center' }}>
      <h2 className="fade-in stagger-1" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '12px' }}>
        Salesforce Certifications
      </h2>
      <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '0 auto 14px', borderRadius: '99px' }} />
      <p className="fade-in stagger-2" style={{ color: 'var(--text-sub)', marginBottom: '50px', fontSize: '1rem' }}>
        6× Salesforce Certified — click any card to verify on Trailhead
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', maxWidth: '1100px', margin: '0 auto' }}>
        {CERTS.map((c, i) => <CertCard key={i} cert={c} index={i} />)}
      </div>
    </div>
  </section>
);

export default Certifications;
