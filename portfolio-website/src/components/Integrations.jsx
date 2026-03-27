import React from 'react';

const Integrations = () => {
  const tools = [
    { name: 'Gemini AI', icon: 'googlegemini', color: '8E75B2' },
    { name: 'DocuSign', localImg: '/docusign.png' },
    { name: 'Stripe', icon: 'stripe', color: '008CDD' },
    { name: 'WhatsApp', icon: 'whatsapp', color: '25D366' },
    { name: 'Zapier', icon: 'zapier', color: 'FF4A00' },
    { name: 'Zoho Sign', icon: 'zoho' },
    { name: 'Google Docs', icon: 'googledocs', color: '4285F4' },
    { name: 'Google Sheets', icon: 'googlesheets', color: '34A853' },
    { name: 'Google Drive', icon: 'googledrive', color: '0F9D58' },
    { name: 'Make.com', icon: 'make' },
    { name: 'N8N', icon: 'n8n', color: 'EA4E43' },
    { name: 'Zoom', icon: 'zoom', color: '2D8CFF' },
    { name: 'Calendly', icon: 'calendly', color: '006BFF' },
    { name: 'Harvest', localImg: '/harvest.png' },
    { name: 'Xero', icon: 'xero', color: '13B5EA' },
    { name: 'OpenSolar', localImg: '/opensolar.png' },
    { name: 'JustCall', localImg: '/justcall.png' },
    { name: 'SharinPix', localImg: '/sharinpix.png' }
  ];

  return (
    <section id="integrations" style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--white)' }}>System Integrations</h2>
        <p className="fade-in stagger-1" style={{ color: 'var(--white)', marginBottom: '50px', maxWidth: '650px', margin: '0 auto 50px' }}>
          Extensive experience connecting Salesforce with diverse third-party applications and robust AI systems to construct unified, highly automated business workflows.
        </p>
        
        <div style={{
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          padding: '20px 0'
        }}>
          {/* Fading Edges */}
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: '150px',
            background: 'linear-gradient(to right, var(--bg-light), transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            right: 0, top: 0, bottom: 0,
            width: '150px',
            background: 'linear-gradient(to left, var(--bg-light), transparent)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>

          <div className="fade-in stagger-2">
            <div className="integrations-track">
              {[...tools, ...tools].map((item, i) => (
                <div key={i} className="glass glow-on-hover" style={{
                  padding: '25px 20px',
                  margin: '0 15px',
                  minWidth: '180px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--transition)',
                  cursor: 'default'
                }}>
                  {item.localImg ? (
                    <img 
                      src={item.localImg} 
                      alt={item.name} 
                      loading="lazy"
                      style={{ width: '50px', height: '50px', marginBottom: '15px', borderRadius: '8px', objectFit: 'contain', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3))' }} 
                      onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                  ) : item.icon ? (
                    <img 
                      src={`https://cdn.simpleicons.org/${item.icon}${item.color ? `/${item.color}` : ''}`} 
                      alt={item.name} 
                      loading="lazy"
                      style={{ width: '50px', height: '50px', marginBottom: '15px', filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.3))' }} 
                    />
                  ) : null}
                  
                  {/* Fallback if local image doesn't exist yet */}
                  <div className="local-fallback" style={{ 
                    display: item.localImg ? 'none' : 'none',
                    width: '50px', 
                    height: '50px', 
                    marginBottom: '15px', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    background: 'rgba(100, 255, 218, 0.1)', 
                    border: '1px solid rgba(100, 255, 218, 0.3)',
                    borderRadius: '8px', 
                    color: 'var(--primary)', 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold',
                    boxShadow: '0 2px 5px rgba(100,255,218,0.2)'
                  }}>
                    {item.name.charAt(0)}
                  </div>
                  
                  <span style={{ color: 'var(--white)', fontSize: '0.95rem', fontWeight: '500' }}>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
