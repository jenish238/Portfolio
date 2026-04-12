import React from 'react';
import { FaQuoteLeft, FaLinkedinIn, FaStar } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const TESTIMONIALS = [
  {
    quote: "Jenish transformed our real estate lead management system. By integrating WhatsApp automation, our response times dropped from hours to under 3 minutes, directly boosting our conversion rates.",
    author: "Operations Director",
    company: "Real Estate Development Firm",
    sourceIcon: <SiUpwork />,
    sourceLabel: "Verified on Upwork",
    color: "#6fda44"
  },
  {
    quote: "The Agentforce and Gemini AI implementation was a game-changer. We now have an autonomous system handling nearly 40% of our complex triaging, allowing our team to focus on high-priority strategic tasks.",
    author: "CTO",
    company: "Healthcare Tech Startup",
    sourceIcon: <FaLinkedinIn />,
    sourceLabel: "Verified on LinkedIn",
    color: "#0a66c2"
  },
  {
    quote: "One of the most technically sound Salesforce architects I've worked with. Jenish doesn't just write code; he understands the business outcomes and ensures the architecture scales with our growth.",
    author: "Project Manager",
    company: "Enterprise Financial Services",
    sourceIcon: <SiUpwork />,
    sourceLabel: "Verified on Upwork",
    color: "#6fda44"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" style={{ padding: '100px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        <div style={{ textAlign: 'left', marginBottom: '60px' }}>
          <h2 className="fade-in stagger-1" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '12px' }}>What Clients Say</h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '0 0 20px', borderRadius: '99px' }} />
          <p className="fade-in stagger-2" style={{ color: 'var(--text-sub)', maxWidth: '600px', fontSize: '1.1rem' }}>
            Proven results delivering autonomous AI workflows and enterprise-grade Salesforce solutions.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'flex-start' }}>
          {TESTIMONIALS.map((t, i) => (
            <div 
              key={i} 
              className="fade-in premium-hover"
              style={{ 
                flex: '1 1 320px', 
                background: 'rgba(17, 34, 64, 0.4)', 
                padding: '40px', 
                borderRadius: '16px', 
                border: '1px solid rgba(0,212,255,0.05)',
                backdropFilter: 'blur(10px)',
                position: 'relative'
              }}
            >
              <FaQuoteLeft style={{ position: 'absolute', top: '25px', right: '30px', fontSize: '2.5rem', color: 'var(--primary)', opacity: 0.1 }} />
              
              <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} style={{ color: '#ffc107', fontSize: '0.9rem' }} />
                ))}
              </div>

              <p style={{ color: 'var(--white)', fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '30px' }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ color: 'var(--white)', fontSize: '0.95rem', fontWeight: '700', marginBottom: '2px' }}>{t.author}</h4>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.8rem' }}>{t.company}</p>
                </div>
                {/* <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', borderRadius: '99px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ color: t.color, fontSize: '0.9rem', display: 'flex' }}>{t.sourceIcon}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-sub)', fontWeight: '600', textTransform: 'uppercase' }}>{t.sourceLabel}</span>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
