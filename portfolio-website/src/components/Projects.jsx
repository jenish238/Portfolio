import {
  SiSalesforce, SiGooglegemini, SiZapier, SiStripe, SiSupabase,
  SiLeaflet, SiGoogledocs, SiWhatsapp, SiOpenai
} from 'react-icons/si';
import {
  FaBolt, FaCloud, FaCode, FaShieldAlt, FaFileAlt,
  FaRobot, FaMicrophone, FaDatabase, FaMapMarkedAlt,
  FaCogs, FaSignature, FaBuilding, FaSolarPanel, FaLink,
  FaExternalLinkAlt, FaGithub
} from 'react-icons/fa';
import { MdSecurity, MdAutoGraph, MdIntegrationInstructions } from 'react-icons/md';
import { BsFileEarmarkText, BsLightningChargeFill } from 'react-icons/bs';

/* ── Tech → { icon, color } map ─────────────────────────────── */
const TECH_META = {
  'LWC':                  { icon: <BsLightningChargeFill />, color: '#00d4ff' },
  'Screen Flows':         { icon: <FaCogs />,                color: '#64ffda' },
  'DocuSign API':         { icon: <FaSignature />,           color: '#00d4ff' },
  'DocuSign':             { icon: <FaSignature />,           color: '#00d4ff' },
  'Gemini AI':            { icon: <SiGooglegemini />,        color: '#4ade80' },
  'Salesforce Flows':     { icon: <SiSalesforce />,          color: '#00a1e0' },
  'Google Docs API':      { icon: <SiGoogledocs />,          color: '#4285f4' },
  'Zapier':               { icon: <SiZapier />,              color: '#ff4a00' },
  'Process Builder':      { icon: <MdAutoGraph />,           color: '#64ffda' },
  'Flows':                { icon: <FaBolt />,                color: '#64ffda' },
  'Sales Cloud':          { icon: <SiSalesforce />,          color: '#00a1e0' },
  'Apex Triggers':        { icon: <FaCode />,                color: '#00d4ff' },
  'WhatsApp Integration': { icon: <SiWhatsapp />,            color: '#25d366' },
  'Apex':                 { icon: <FaCode />,                color: '#00d4ff' },
  'Apex Batch':           { icon: <FaCode />,                color: '#00d4ff' },
  'Validation Rules':     { icon: <MdSecurity />,            color: '#f59e0b' },
  'Conga Composer':       { icon: <BsFileEarmarkText />,     color: '#64ffda' },
  'Experience Cloud':     { icon: <FaCloud />,               color: '#00a1e0' },
  'Security':             { icon: <FaShieldAlt />,           color: '#ef4444' },
  'Sharing Rules':        { icon: <MdSecurity />,            color: '#f59e0b' },
  'Automation':           { icon: <FaRobot />,               color: '#64ffda' },
  'OmniStudio':           { icon: <SiSalesforce />,          color: '#00a1e0' },
  'FlexCards':            { icon: <MdIntegrationInstructions />, color: '#00d4ff' },
  'Salesforce Automation':{ icon: <SiSalesforce />,          color: '#00a1e0' },
  'Stripe API':           { icon: <SiStripe />,              color: '#635bff' },
  'Data Import':          { icon: <FaDatabase />,            color: '#64ffda' },
  'REST API':             { icon: <FaLink />,                color: '#00d4ff' },
  'OpenSolar':            { icon: <FaSolarPanel />,          color: '#f59e0b' },
  'Zoho Sign':            { icon: <FaFileAlt />,             color: '#e00' },
  'Einstein Activity':    { icon: <FaRobot />,               color: '#9333ea' },
  'API Integrations':     { icon: <MdIntegrationInstructions />, color: '#00d4ff' },
  'CDC':                  { icon: <MdAutoGraph />,           color: '#64ffda' },
  'Supabase':             { icon: <SiSupabase />,            color: '#3ecf8e' },
  'Leaflet.js':           { icon: <FaMapMarkedAlt />,        color: '#199900' },
  'Voice-to-Text':        { icon: <FaMicrophone />,          color: '#00d4ff' },
  'Building':             { icon: <FaBuilding />,            color: '#64ffda' },
};

const TechTag = ({ label }) => {
  const meta = TECH_META[label] ?? { icon: <FaCode />, color: '#64ffda' };
  return (
    <li style={{
      display: 'inline-flex', alignItems: 'center', gap: '6px',
      fontSize: '0.75rem', fontWeight: '600', fontFamily: 'monospace',
      background: 'rgba(100, 255, 218, 0.08)', border: '1px solid rgba(100, 255, 218, 0.22)',
      padding: '5px 10px', borderRadius: '20px', color: meta.color,
      transition: 'all 0.2s ease', cursor: 'default', whiteSpace: 'nowrap',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.background = `rgba(100,255,218,0.18)`;
        e.currentTarget.style.borderColor = meta.color;
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = `0 4px 14px ${meta.color}33`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(100,255,218,0.08)';
        e.currentTarget.style.borderColor = 'rgba(100,255,218,0.22)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center' }}>{meta.icon}</span>
      {label}
    </li>
  );
};

/* ── Industry badge colors ───────────────────────────────────── */
const INDUSTRY_COLORS = {
  'Healthcare':     '#34d399',
  'Real Estate':    '#60a5fa',
  'Finance':        '#f59e0b',
  'Construction':   '#fb923c',
  'Solar / Energy': '#facc15',
  'SaaS / CRM':     '#a78bfa',
};

const Projects = () => {
  const projects = [
    {
      title: 'Digital Signature Automation',
      desc: 'Developed a custom Signature component supporting draw/type options, branding overlays, and multi-lingual support with DocuSign deep integration.',
      tech: ['LWC', 'Screen Flows', 'DocuSign API'],
      industry: 'SaaS / CRM',
      featured: true,
    },
    {
      title: 'AI Construction Workforce Mgmt',
      desc: 'Integrated Gemini AI for voice-based job updates, automated attendance tracking, and multilingual chatter summaries.',
      tech: ['Gemini AI', 'LWC', 'Voice-to-Text', 'Google Docs API'],
      industry: 'Construction',
      featured: true,
    },
    {
      title: 'Integrated Sales and Support CRM',
      desc: 'Unified sales/support via Experience Cloud, integrating Zoom, Calendly, Zapier, and Einstein Activity Capture.',
      tech: ['Experience Cloud', 'Einstein Activity', 'API Integrations', 'DocuSign'],
      industry: 'SaaS / CRM',
    },
    {
      title: 'Integrated Property Management',
      desc: 'Centralized real estate lead intake with duplicate detection and automated 2-way WhatsApp communication.',
      tech: ['Sales Cloud', 'Apex Triggers', 'WhatsApp Integration'],
      industry: 'Real Estate',
    },
    {
      title: 'OmniStudio Guidance Forms',
      desc: 'Designed user-friendly guidance forms using OmniScripts and FlexCards to enforce compliance in healthcare workflows.',
      tech: ['OmniStudio', 'FlexCards', 'LWC'],
      industry: 'Healthcare',
    },
    {
      title: 'Solar Energy Solution Integration',
      desc: 'Unified tools by securely integrating OpenSolar for 3D layouts, Zoho Sign for contracts, and SharingPix for media storage.',
      tech: ['REST API', 'OpenSolar', 'Zoho Sign'],
      industry: 'Solar / Energy',
    },
  ];

  return (
    <section id="projects" style={{ padding: '100px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        {/* Header */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--white)', margin: 0 }}>Comprehensive Project Portfolio</h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '14px auto 0', borderRadius: '99px' }} />
          <p style={{ color: 'var(--text-sub)', marginTop: '16px', fontSize: '1rem', maxWidth: '560px', margin: '16px auto 0' }}>
            Real-world Salesforce solutions delivered across &nbsp;
            <strong style={{ color: 'var(--primary)' }}>5+ industries</strong>
          </p>
        </div>

        {/* Industry filter legend */}
        <div className="fade-in stagger-1" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', margin: '32px 0 48px' }}>
          {Object.entries(INDUSTRY_COLORS).map(([ind, clr]) => (
            <span key={ind} style={{
              padding: '5px 14px', borderRadius: '99px', fontSize: '0.78rem', fontWeight: '700',
              background: `${clr}18`, color: clr, border: `1px solid ${clr}44`,
              letterSpacing: '0.3px',
            }}>● {ind}</span>
          ))}
        </div>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {projects.map((p, i) => {
            const indColor = INDUSTRY_COLORS[p.industry] ?? '#64ffda';
            return (
              <div key={i} className={`flip-in-y stagger-${(i % 4) + 1}`}>
                <div
                  className="glass project-card"
                  style={{
                    padding: '0', borderRadius: '14px', height: '100%',
                    display: 'flex', flexDirection: 'column',
                    border: `1px solid ${p.featured ? `${indColor}55` : 'rgba(100,255,218,0.08)'}`,
                    transition: 'all 0.3s ease', overflow: 'hidden', position: 'relative',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.borderColor = `${indColor}88`;
                    e.currentTarget.style.boxShadow = `0 20px 50px ${indColor}18`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = p.featured ? `${indColor}55` : 'rgba(100,255,218,0.08)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: '3px', background: `linear-gradient(90deg, ${indColor}, transparent)`, flexShrink: 0 }} />

                  <div style={{ padding: '28px 28px 24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '14px' }}>
                    {/* Title row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
                      <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: '700', margin: 0, lineHeight: '1.35' }}>
                        {p.title}
                      </h3>
                      {p.featured && (
                        <span style={{
                          flexShrink: 0, padding: '3px 10px', borderRadius: '99px', fontSize: '0.68rem',
                          fontWeight: '800', background: `${indColor}22`, color: indColor,
                          border: `1px solid ${indColor}55`, letterSpacing: '0.5px',
                          textTransform: 'uppercase',
                        }}>⚡ Featured</span>
                      )}
                    </div>

                    {/* Industry chip */}
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '3px 12px', borderRadius: '99px', fontSize: '0.75rem', fontWeight: '600',
                      background: `${indColor}14`, color: indColor, border: `1px solid ${indColor}33`,
                      alignSelf: 'flex-start',
                    }}>
                      ● {p.industry}
                    </span>

                    {/* Description */}
                    <p style={{ color: 'var(--text-sub)', lineHeight: '1.7', fontSize: '0.92rem', margin: 0, flex: 1 }}>
                      {p.desc}
                    </p>

                    {/* Tech tags */}
                    <ul style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0 }}>
                      {p.tech.map((t, idx) => <TechTag key={idx} label={t} />)}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="fade-in" style={{ textAlign: 'center', marginTop: '60px' }}>
          <p style={{ color: 'var(--text-sub)', marginBottom: '20px', fontSize: '1rem' }}>
            Want to see more or discuss a project?
          </p>
          <a
            href="https://github.com/jenish238"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 28px' }}
          >
            <FaGithub style={{ fontSize: '1.1rem' }} /> View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
