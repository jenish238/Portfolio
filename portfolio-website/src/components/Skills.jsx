import React, { useEffect, useRef, useState } from 'react';
import {
  BsLightningChargeFill, BsCodeSlash, BsGithub
} from 'react-icons/bs';
import {
  SiSalesforce, SiGooglegemini, SiStripe
} from 'react-icons/si';
import {
  FaCogs, FaShieldAlt, FaDatabase, FaLink, FaCloud
} from 'react-icons/fa';
import { MdIntegrationInstructions } from 'react-icons/md';

const SKILLS = [
  { name: 'LWC',              category: 'Salesforce Frontend',       icon: <BsLightningChargeFill />, color: '#00d4ff', level: 95 },
  { name: 'Apex',             category: 'Salesforce Backend',        icon: <BsCodeSlash />,           color: '#00d4ff', level: 92 },
  { name: 'Salesforce Flows', category: 'Automation',                icon: <FaCogs />,                color: '#64ffda', level: 90 },
  { name: 'OmniStudio',       category: 'Vlocity / Industry Cloud',  icon: <SiSalesforce />,          color: '#00a1e0', level: 85 },
  { name: 'API & Integrations', category: 'REST/SOAP, DocuSign, Stripe', icon: <MdIntegrationInstructions />, color: '#00d4ff', level: 90 },
  { name: 'Gemini AI',        category: 'AI Integration',            icon: <SiGooglegemini />,        color: '#4ade80', level: 80 },
  { name: 'Salesforce Admin', category: 'Configuration & Setup',     icon: <FaCloud />,               color: '#00a1e0', level: 88 },
  { name: 'Security & Sharing', category: 'Data Access Controls',    icon: <FaShieldAlt />,           color: '#f59e0b', level: 85 },
  { name: 'Data Management',  category: 'Migration & Quality',       icon: <FaDatabase />,            color: '#64ffda', level: 82 },
  { name: 'DevOps & GitHub',  category: 'Version Control',           icon: <BsGithub />,              color: '#e2e8f0', level: 78 },
];

const SkillCard = ({ skill, index }) => {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setFilled(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`zoom-in stagger-${(index % 4) + 1}`}
      style={{ flex: '1 1 220px', maxWidth: '280px' }}
    >
      <div
        className="glass glow-on-hover"
        style={{
          padding: '28px 24px',
          borderRadius: '12px',
          textAlign: 'center',
          transition: 'var(--transition)',
          cursor: 'default',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {/* Icon */}
        <span style={{
          fontSize: '2.2rem',
          color: skill.color,
          filter: `drop-shadow(0 0 8px ${skill.color}88)`,
          display: 'block',
          marginBottom: '4px',
        }}>
          {skill.icon}
        </span>

        <h3 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: '700', margin: 0 }}>{skill.name}</h3>
        <p style={{ color: 'var(--primary)', fontSize: '0.82rem', fontWeight: '500', margin: 0 }}>{skill.category}</p>

        {/* Proficiency bar */}
        <div style={{
          width: '100%',
          height: '4px',
          background: 'rgba(100,255,218,0.12)',
          borderRadius: '99px',
          overflow: 'hidden',
          marginTop: '6px',
        }}>
          <div style={{
            height: '100%',
            width: filled ? `${skill.level}%` : '0%',
            background: `linear-gradient(90deg, ${skill.color}, var(--secondary))`,
            borderRadius: '99px',
            transition: 'width 1.2s cubic-bezier(0.4,0,0.2,1)',
            transitionDelay: `${index * 0.08}s`,
            boxShadow: `0 0 6px ${skill.color}88`,
          }} />
        </div>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)', alignSelf: 'flex-end' }}>{skill.level}%</span>
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
    <div className="container">
      <h2 style={{ fontSize: '2rem', marginBottom: '50px', borderBottom: '1px solid var(--text-sub)', paddingBottom: '10px', display: 'inline-block' }}>
        Technical Expertise
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
        {SKILLS.map((skill, i) => <SkillCard key={i} skill={skill} index={i} />)}
      </div>
    </div>
  </section>
);

export default Skills;
