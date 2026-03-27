import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Digital Signature Automation',
      desc: 'Developed a custom Signature component supporting draw/type options, branding overlays, and multi-lingual support.',
      tech: ['LWC', 'Screen Flows', 'DocuSign API'],
    },
    {
      title: 'Resume Generation System',
      desc: 'Automated resume creation tool using structured data and Gemini API for dynamic, personalized content generation.',
      tech: ['Gemini AI', 'Salesforce Flows', 'Google Docs API'],
    },
    {
      title: 'Lead & Order Streamlining',
      desc: 'Optimized complex pipelines via automated lead conversion, Zapier integrations, and multilingual email support.',
      tech: ['Zapier', 'Process Builder', 'Flows'],
    },
    {
      title: 'Integrated Property Management',
      desc: 'Centralized real estate lead intake with duplicate detection and automated 2-way WhatsApp communication.',
      tech: ['Sales Cloud', 'WhatsApp Integration', 'Apex Triggers'],
    },
    {
      title: 'Org Optimization & Automation',
      desc: 'Audited and optimized an existing org, removing redundant automation and redesigning record creation via Screen Flows.',
      tech: ['Flows', 'Apex', 'Validation Rules'],
    },
    {
      title: 'Document & Reporting Automation',
      desc: 'Integrated Conga Composer to automate receipts, payment confirmations, and portal-based financial report visibility.',
      tech: ['Conga Composer', 'Experience Cloud'],
    },
    {
      title: 'Secure Loan Lead Management',
      desc: 'Engineered a highly secure environment for finance applications with stringent role-based access and email automation.',
      tech: ['Security', 'Sharing Rules', 'Automation'],
    },
    {
      title: 'OmniStudio Guidance Forms',
      desc: 'Designed user-friendly guidance forms using OmniScripts and FlexCards to enforce compliance in healthcare workflows.',
      tech: ['OmniStudio', 'FlexCards', 'LWC'],
    },
    {
      title: 'Digital Agreement Workflow',
      desc: 'Implemented an end-to-end digital agreement solution via DocuSign Gen featuring SMS-based signing and tracking.',
      tech: ['DocuSign', 'Salesforce Automation'],
    },
    {
      title: 'Automated Insurance Lifecycle',
      desc: 'Streamlined insurance applications with a multi-step LWC wizard and integrated Stripe for secure premium payments.',
      tech: ['LWC', 'Stripe API', 'Sales Cloud'],
    },
    {
      title: 'Bulk Data Management Tool',
      desc: 'Built a scalable tool to insert/update mass records using external IDs and smart field mapping without Record IDs.',
      tech: ['Apex Batch', 'Data Import', 'LWC'],
    },
    {
      title: 'Solar Energy Solution Integration',
      desc: 'Unified tools by securely integrating OpenSolar for 3D layouts, Zoho Sign for contracts, and SharingPix for storage.',
      tech: ['REST API', 'OpenSolar', 'Zoho Sign'],
    },
    {
      title: 'Integrated Sales and Support CRM',
      desc: 'Unified sales/support via Experience Cloud, integrating Zoom, Calendly, Zapier, and Einstein Activity Capture.',
      tech: ['Experience Cloud', 'Einstein Activity', 'API Integrations'],
    },
    {
      title: 'Advanced Platform Enhancements',
      desc: 'Optimized LWC performance (lazy loading), integrated Supabase, Leaflet.js maps, and Change Data Capture (CDC).',
      tech: ['LWC', 'CDC', 'Supabase', 'Leaflet.js'],
    },
    {
      title: 'AI Construction Workforce Mgmt',
      desc: 'Integrated Gemini AI for voice-based job updates, automated attendance tracking, and multilingual chatter summaries.',
      tech: ['Gemini AI', 'LWC', 'Voice-to-Text'],
    }
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <h2 className="section-title fade-in">Comprehensive Project Portfolio</h2>
        <div className="projects-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px'
        }}>
          {projects.map((p, i) => (
            <div key={i} className={`flip-in-y stagger-${(i % 4) + 1}`}>
              <div className="glass premium-hover project-card" style={{
                padding: '40px',
                borderRadius: '8px',
                transition: 'var(--transition)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%'
              }}>
                <div>
                  <h3 className="project-title">{p.title}</h3>
                  <p className="project-desc">{p.desc}</p>
                </div>
                <ul style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '20px' }}>
                  {p.tech.map((t, idx) => (
                    <li key={idx} style={{ 
                      color: 'var(--white)', 
                      fontSize: '0.8rem', 
                      fontWeight: '600',
                      fontFamily: 'monospace',
                      background: 'rgba(100, 255, 218, 0.15)',
                      border: '1px solid rgba(100, 255, 218, 0.3)',
                      padding: '5px 10px',
                      borderRadius: '4px'
                    }}>{t}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
