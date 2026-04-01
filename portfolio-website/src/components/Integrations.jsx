import React from 'react';
import { SiGooglegemini, SiStripe, SiZapier, SiZoho, SiQuickbooks, SiZoom, SiCalendly, SiXero, SiRazorpay } from 'react-icons/si';
import { FaAws, FaWhatsapp, FaFileSignature, FaGoogleDrive, FaFileExcel, FaFileAlt } from 'react-icons/fa';

const TOOLS = [
  { name: 'Gemini AI',     icon: <SiGooglegemini />, color: '#8E75B2' },
  { name: 'AWS',           icon: <FaAws />,          color: '#FF9900' },
  { name: 'Razorpay',      icon: <SiRazorpay />,     color: '#0858C1' },
  { name: 'DocuSign',      icon: <FaFileSignature />, color: '#FFCC00' },
  { name: 'QuickBooks',    icon: <SiQuickbooks />,   color: '#2CA01C' },
  { name: 'Stripe',        icon: <SiStripe />,        color: '#635BFF' },
  { name: 'WhatsApp',      icon: <FaWhatsapp />,     color: '#25D366' },
  { name: 'Zapier',        icon: <SiZapier />,        color: '#FF4A00' },
  { name: 'Zoho Sign',     icon: <SiZoho />,          color: '#E42527' },
  { name: 'Google Docs',   icon: <FaFileAlt />,       color: '#4285F4' },
  { name: 'Google Sheets', icon: <FaFileExcel />,     color: '#34A853' },
  { name: 'Google Drive',  icon: <FaGoogleDrive />,   color: '#0F9D58' },
  { name: 'Zoom',          icon: <SiZoom />,          color: '#2D8CFF' },
  { name: 'Calendly',      icon: <SiCalendly />,      color: '#006BFF' },
  { name: 'Xero',          icon: <SiXero />,          color: '#13B5EA' },
  { name: 'Gemini AI',     icon: <SiGooglegemini />, color: '#8E75B2' },
  { name: 'AWS',           icon: <FaAws />,          color: '#FF9900' },
  { name: 'Razorpay',      icon: <SiRazorpay />,     color: '#0858C1' },
  { name: 'DocuSign',      icon: <FaFileSignature />, color: '#FFCC00' },
  { name: 'QuickBooks',    icon: <SiQuickbooks />,   color: '#2CA01C' },
  { name: 'Stripe',        icon: <SiStripe />,        color: '#635BFF' },
  { name: 'WhatsApp',      icon: <FaWhatsapp />,     color: '#25D366' },
  { name: 'Zapier',        icon: <SiZapier />,        color: '#FF4A00' },
  { name: 'Zoho Sign',     icon: <SiZoho />,          color: '#E42527' },
  { name: 'Google Docs',   icon: <FaFileAlt />,       color: '#4285F4' },
  { name: 'Google Sheets', icon: <FaFileExcel />,     color: '#34A853' },
  { name: 'Google Drive',  icon: <FaGoogleDrive />,   color: '#0F9D58' },
  { name: 'Zoom',          icon: <SiZoom />,          color: '#2D8CFF' },
  { name: 'Calendly',      icon: <SiCalendly />,      color: '#006BFF' },
  { name: 'Xero',          icon: <SiXero />,          color: '#13B5EA' },
];

const Integrations = () => {
  return (
    <section id="integrations" style={{ padding: '80px 0', background: 'var(--bg-light)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '12px', color: 'var(--white)' }}>System Integrations</h2>
        <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '0 auto 16px', borderRadius: '99px' }} />
        <p className="fade-in stagger-1" style={{ color: 'var(--text-sub)', marginBottom: '50px', maxWidth: '620px', margin: '0 auto 50px', lineHeight: '1.7' }}>
          Extensive experience connecting Salesforce with diverse third-party apps and AI systems to build unified, automated workflows.
        </p>

        {/* Row 1 — scrolls left */}
        <div style={{ position: 'relative', padding: '10px 0' }}>
          <div style={{ position:'absolute',left:0,top:0,bottom:0,width:'120px',background:'linear-gradient(to right,var(--bg-light),transparent)',zIndex:2,pointerEvents:'none'}} />
          <div style={{ position:'absolute',right:0,top:0,bottom:0,width:'120px',background:'linear-gradient(to left,var(--bg-light),transparent)',zIndex:2,pointerEvents:'none'}} />
          <div className="integrations-track">
            {TOOLS.map((item, i) => (
              <div key={i} className="glass" style={{
                padding: '20px 18px', margin: '0 12px', minWidth: '140px', borderRadius: '12px',
                textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center',
                gap: '10px', border: '1px solid rgba(100,255,218,0.08)', transition: 'border-color 0.3s',
                flexShrink: 0,
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = `${item.color}55`}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(100,255,218,0.08)'}
              >
                <span style={{ fontSize: '2rem', color: item.color, filter: `drop-shadow(0 0 6px ${item.color}66)` }}>
                  {item.icon}
                </span>
                <span style={{ color: 'var(--white)', fontSize: '0.85rem', fontWeight: '500', whiteSpace: 'nowrap' }}>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
