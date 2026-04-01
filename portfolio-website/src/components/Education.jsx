import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { SiGooglecloud } from 'react-icons/si';

const Education = () => (
  <section id="education" style={{ padding: '90px 0', background: 'var(--bg-dark)' }}>
    <div className="container" style={{ maxWidth: '860px' }}>
      <h2 className="slide-in-right stagger-1" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '12px', textAlign: 'center' }}>Education</h2>
      <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '0 auto 50px', borderRadius: '99px' }} />

      <div className="fade-in stagger-2 glass" style={{
        padding: '40px 44px', borderRadius: '16px',
        border: '1px solid rgba(100,255,218,0.12)',
        display: 'flex', gap: '36px', alignItems: 'flex-start', flexWrap: 'wrap',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Decorative glow */}
        <div style={{ position:'absolute',top:'-40px',right:'-40px',width:'200px',height:'200px',borderRadius:'50%',background:'radial-gradient(circle,rgba(100,255,218,0.07),transparent 70%)',pointerEvents:'none' }} />

        {/* Icon */}
        <div style={{
          flex: '0 0 80px', width: '80px', height: '80px', borderRadius: '16px',
          background: 'linear-gradient(135deg,rgba(0,212,255,0.2),rgba(100,255,218,0.1))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '2.4rem', color: 'var(--primary)',
          border: '1px solid rgba(0,212,255,0.25)',
          boxShadow: '0 0 20px rgba(0,212,255,0.12)',
        }}>
          <FaGraduationCap />
        </div>

        {/* Text */}
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ fontSize: '1.55rem', color: 'var(--primary)', marginBottom: '8px', fontWeight: '700' }}>
            Silver Oak College of Engineering and Technology
          </h3>
          <p style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '16px' }}>
            B.Tech in Computer Engineering
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--text-sub)', fontSize: '0.9rem' }}>
              <FaCalendarAlt style={{ color: 'var(--primary)' }} /> Sep 2020 – April 2024
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '7px', color: 'var(--text-sub)', fontSize: '0.9rem' }}>
              <FaMapMarkerAlt style={{ color: 'var(--primary)' }} /> Ahmedabad, Gujarat
            </span>
          </div>
          {/* Highlights */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
            {['Computer Science', 'Software Engineering', 'Data Structures', 'Web Development'].map(tag => (
              <span key={tag} style={{
                padding: '4px 14px', borderRadius: '99px', fontSize: '0.78rem', fontWeight: '600',
                background: 'rgba(0,212,255,0.08)', color: 'var(--primary)',
                border: '1px solid rgba(0,212,255,0.2)',
              }}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
