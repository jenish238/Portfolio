import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'LWC', category: 'Salesforce Frontend' },
    { name: 'Apex', category: 'Salesforce Backend' },
    { name: 'Salesforce Flows', category: 'Automation' },
    { name: 'OmniStudio', category: 'Vlocity / Industry Cloud' },
    { name: 'API & Integrations', category: 'REST/SOAP, DocuSign, Stripe' },
    { name: 'Gemini AI', category: 'AI Integration' },
    { name: 'Salesforce Admin', category: 'Configuration & Setup' },
    { name: 'Security & Sharing', category: 'Data Access Controls' },
    { name: 'Data Management', category: 'Migration & Quality' },
    { name: 'DevOps & GitHub', category: 'Version Control' },
  ];

  return (
    <section id="skills" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2rem', marginBottom: '50px', borderBottom: '1px solid var(--text-sub)', paddingBottom: '10px', display: 'inline-block' }}>
          Technical Expertise
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px'
        }}>
          {skills.map((skill, index) => (
            <div key={index} className={`zoom-in stagger-${(index % 4) + 1}`} style={{ flex: '1 1 220px', maxWidth: '300px' }}>
              <div className="glass glow-on-hover infinite-glow" style={{
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
                transition: 'var(--transition)',
                cursor: 'default',
                height: '100%',
                animationDelay: `${index * 0.4}s`
              }}>
                <h3 style={{ color: 'var(--white)', marginBottom: '8px', fontSize: '1.4rem', fontWeight: '700', letterSpacing: '0.5px' }}>{skill.name}</h3>
                <p style={{ color: 'var(--primary)', fontSize: '0.95rem', fontWeight: '500', margin: 0 }}>{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
