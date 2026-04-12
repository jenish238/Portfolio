import React, { useState } from 'react';
import {
  FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt,
  FaEnvelopeOpen, FaCheckCircle, FaLinkedinIn, FaWhatsapp, FaCalendarAlt
} from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    const form = e.target;
    const formData = new FormData(form);
    try {
      const response = await fetch('https://formsubmit.co/ajax/hello@jenishgangani.me', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData
      });
      if (response.ok) { setStatus('success'); form.reset(); }
      else setStatus('error');
    } catch (err) {
      console.error('Form error:', err);
      setStatus('error');
    }
  };

  const QUICK_LINKS = [
    {
      icon: <FaWhatsapp />, label: 'WhatsApp',
      sub: 'Chat directly',
      color: '#25d366',
      href: 'https://wa.me/919081131732?text=Hello%20Jenish!%20I%20saw%20your%20portfolio%20and%20would%20love%20to%20connect.',
    },
    {
      icon: <FaLinkedinIn />, label: 'LinkedIn',
      sub: 'Connect professionally',
      color: '#0a66c2',
      href: 'https://www.linkedin.com/in/jenish-gangani-577440215/',
    },
    {
      icon: <SiUpwork />, label: 'Hire on Upwork',
      sub: 'Freelance projects',
      color: '#6fda44',
      href: 'https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share',
    },
    {
      icon: <FaCalendarAlt />, label: 'Book a Call',
      sub: 'Free 30-min session',
      color: '#00d4ff',
      href: 'https://calendly.com/jenishgangani239/30min',
    },
  ];

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-navy)', position: 'relative', overflow: 'hidden' }}>
      {/* background blobs */}
      <div style={{ position:'absolute',top:'10%',right:'-10%',width:'500px',height:'500px',background:'radial-gradient(circle,rgba(100,255,218,0.05) 0%,transparent 70%)',filter:'blur(60px)',zIndex:0,pointerEvents:'none' }} />
      <div style={{ position:'absolute',bottom:'-10%',left:'-10%',width:'600px',height:'600px',background:'radial-gradient(circle,rgba(0,212,255,0.05) 0%,transparent 70%)',filter:'blur(80px)',zIndex:0,pointerEvents:'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="fade-in stagger-1" style={{ fontSize: '2.5rem', color: 'var(--white)', marginBottom: '12px' }}>Get In Touch</h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg,var(--primary),var(--secondary))', margin: '0 auto 16px', borderRadius: '99px' }} />
          <p className="fade-in stagger-2" style={{ color: 'var(--text-sub)', maxWidth: '560px', margin: '0 auto', fontSize: '1rem', lineHeight: '1.7' }}>
            I'm always open to discussing Salesforce projects, AI integrations, or partnership opportunities.
          </p>
          <div style={{ marginTop: '20px', display: 'inline-flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '99px', background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 8px #34d399', animation: 'pulse 2s infinite', display: 'inline-block' }} />
              <span style={{ color: '#34d399', fontWeight: '700', fontSize: '0.85rem' }}>Available for Projects</span>
            </div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 20px', borderRadius: '99px', background: 'rgba(111,218,68,0.1)', border: '1px solid rgba(111,218,68,0.3)' }}>
              <SiUpwork style={{ color: '#6fda44', fontSize: '1rem' }} />
              <span style={{ color: '#6fda44', fontWeight: '700', fontSize: '0.85rem' }}>Top Rated · 100% Job Success</span>
            </div>
          </div>
        </div>

        {/* Quick connect row */}
        <div className="fade-in stagger-2" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', marginBottom: '60px' }}>
          {QUICK_LINKS.map(({ icon, label, sub, color, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '16px 22px', borderRadius: '12px',
                background: `${color}0e`, border: `1px solid ${color}33`,
                textDecoration: 'none', flex: '1 1 180px', maxWidth: '240px',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}22`;
                e.currentTarget.style.borderColor = `${color}88`;
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = `0 10px 30px ${color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = `${color}0e`;
                e.currentTarget.style.borderColor = `${color}33`;
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={{ fontSize: '1.6rem', color, filter: `drop-shadow(0 0 6px ${color}66)` }}>{icon}</span>
              <div>
                <div style={{ color: 'var(--white)', fontWeight: '700', fontSize: '0.9rem' }}>{label}</div>
                <div style={{ color: 'var(--text-sub)', fontSize: '0.75rem' }}>{sub}</div>
              </div>
            </a>
          ))}
        </div>

        {/* Main form + info row */}
        <div className="contact-wrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', justifyContent: 'center', alignItems: 'stretch' }}>
          {/* Left: Contact Details */}
          <div className="fade-in stagger-3" style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: <FaMapMarkerAlt />, title: 'Location', text: 'Ahmedabad, Gujarat, India', href: 'https://www.google.com/maps/place/Ahmedabad,+Gujarat' },
              { icon: <FaEnvelopeOpen />, title: 'Email', text: 'hello@jenishgangani.me', href: 'mailto:hello@jenishgangani.me' },
              { icon: <FaPhoneAlt />, title: 'Phone', text: '+91 9081131732', href: 'tel:+919081131732' },
            ].map(({ icon, title, text, href }) => (
              <a key={title} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="contact-card"
                style={{ padding: '24px 28px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '18px', textDecoration: 'none', flex: 1, transition: 'all 0.25s ease' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(100,255,218,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--primary)', flexShrink: 0 }}>
                  {icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '4px' }}>{title}</h3>
                  <p style={{ color: 'var(--text-sub)', fontSize: '0.9rem' }}>{text}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right: Contact Form */}
          <div className="fade-in stagger-4 glass" style={{ flex: '1 1 480px', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            {status === 'success' ? (
              <div className="fade-in is-visible" style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', height: '100%', justifyContent: 'center', minHeight: '380px' }}>
                <FaCheckCircle style={{ fontSize: '5rem', color: 'var(--primary)' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--primary)' }}>Message Sent! 🎉</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '1.05rem', lineHeight: '1.6' }}>
                  Thanks for reaching out! I'll get back to you within <strong style={{ color: 'var(--white)' }}>24 hours</strong>.
                </p>
                <button onClick={() => setStatus('idle')} className="btn btn-primary" style={{ padding: '12px 25px', backgroundColor: 'transparent', color: 'var(--primary)', marginTop: '10px' }}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--white)', marginBottom: '8px', fontWeight: '700' }}>Send me a message</h3>
                <p style={{ color: 'var(--text-sub)', fontSize: '0.88rem', marginBottom: '28px' }}>I'll reply within 24 hours ⚡</p>

                {status === 'error' && (
                  <div style={{ padding: '14px', background: 'rgba(255,100,100,0.1)', border: '1px solid rgba(255,100,100,0.3)', borderRadius: '8px', color: '#ff8888', marginBottom: '20px', fontSize: '0.9rem' }}>
                    Oops! Something went wrong. Please try again or reach out directly via email.
                  </div>
                )}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
                  <div className="input-icon-wrapper">
                    <FaUser />
                    <input type="text" name="name" className="form-input" placeholder="Your Full Name" required disabled={status === 'submitting'} />
                  </div>
                  <div className="input-icon-wrapper">
                    <FaEnvelope />
                    <input type="email" name="email" className="form-input" placeholder="Your Email Address" required disabled={status === 'submitting'} />
                  </div>
                  <div className="input-icon-wrapper form-textarea">
                    <FaPaperPlane />
                    <textarea name="message" className="form-input" placeholder="How can I help you?" rows="5" required disabled={status === 'submitting'} />
                  </div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className={`btn btn-primary ${status !== 'submitting' ? 'pulse-btn' : ''}`}
                    style={{ padding: '15px', fontSize: '1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', opacity: status === 'submitting' ? 0.7 : 1, cursor: status === 'submitting' ? 'not-allowed' : 'pointer' }}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'} <FaPaperPlane style={{ fontSize: '0.9rem' }} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
