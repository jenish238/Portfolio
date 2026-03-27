import React from 'react';

const Education = () => {
  return (
    <section id="education" style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <h2 className="slide-in-right stagger-1" style={{ fontSize: '2.5rem', marginBottom: '40px', color: 'var(--white)' }}>Education</h2>
        
        <div className="fade-in stagger-2">
          <div className="glass premium-hover education-card" style={{
            padding: '40px',
            borderRadius: '12px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            textAlign: 'left',
            width: '100%',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            <div style={{ flex: '0 0 120px' }}>
              <img 
                src="/assets/education-icon.png" 
                alt="Education Degree" 
                loading="lazy"
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '4px',
                  opacity: 0.9
                }} 
              />
            </div>
            <div style={{ flex: '1 1 300px' }}>
              <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)', marginBottom: '10px' }}>
                Silver Oak College of Engineering and Technology
              </h3>
              <p style={{ color: 'var(--white)', fontSize: '1.2rem', marginBottom: '10px', fontWeight: '500' }}>
                B.Tech in Computer Engineering
              </p>
              <p style={{ color: 'var(--white)', fontSize: '1rem', fontFamily: 'monospace', opacity: 0.8 }}>
                Sep 2020 - April 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
