import React from 'react';

const Certifications = () => {
  const certs = [
    { name: 'Platform Developer II', logo: '/certs/cert-pd2.png' },
    { name: 'Platform Developer I', logo: '/certs/cert-pd1.png' },
    { name: 'Data Cloud Consultant', logo: '/certs/cert-data-cloud.png' },
    { name: 'JavaScript Developer I', logo: '/certs/cert-js-dev.png' },
    { name: 'Agentforce Specialist', logo: '/certs/cert-agentforce.png' },
    { name: 'Administrator', logo: '/certs/cert-admin.png' }
  ];

  return (
    <section id="certifications" style={{ padding: '80px 0', background: 'var(--bg-navy)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="fade-in stagger-1" style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--white)' }}>
          Salesforce Certifications
        </h2>
        <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '15px auto 50px', borderRadius: '2px' }}></div>
        
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'stretch',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {certs.map((cert, index) => (
            <div key={index} className={`blur-in stagger-${(index % 4) + 1} cert-item`} style={{ 
              flex: '0 1 calc(25% - 30px)', 
              minWidth: '250px',
              maxWidth: '300px'
            }}>
              <div className="glass premium-hover" style={{
                padding: '20px',
                borderRadius: '8px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition)',
                border: '1px solid rgba(100, 255, 218, 0.1)',
                background: 'rgba(10, 25, 47, 0.5)',
                height: '100%',
                minHeight: '220px'
              }}>
                <img 
                  src={cert.logo} 
                  alt={cert.name}
                  loading="lazy"
                  style={{ 
                    maxHeight: '140px', 
                    maxWidth: '100%', 
                    objectFit: 'contain',
                    marginBottom: '15px'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="fallback-text" style={{ 
                  display: 'none',
                  fontSize: '1rem', 
                  fontWeight: '600', 
                  color: 'var(--white)',
                  lineHeight: '1.4'
                }}>
                  {cert.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
