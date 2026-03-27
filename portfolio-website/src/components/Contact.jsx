import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelopeOpen, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/jenishgangani238@gmail.com', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error('Form execution error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-navy)', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decorative Blobs */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(100,255,218,0.05) 0%, rgba(10,25,47,0) 70%)',
        filter: 'blur(60px)', zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, rgba(10,25,47,0) 70%)',
        filter: 'blur(80px)', zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="fade-in stagger-1" style={{ fontSize: '3rem', color: 'var(--white)' }}>Get In Touch</h2>
          <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '15px auto', borderRadius: '2px' }}></div>
          <p className="fade-in stagger-2" style={{ color: 'var(--white)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
            I’m always open to discussing product design work, AI integrations, or partnership opportunities. Let's build something amazing together.
          </p>
        </div>

        <div className="contact-wrapper" style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: '50px', 
          justifyContent: 'center',
          alignItems: 'stretch'
        }}>
          {/* Left Column: Contact Details Cards */}
          <div className="fade-in stagger-3 floating-element" style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '25px', justifyContent: 'space-between' }}>
            <a 
              href="https://www.google.com/maps/place/Ahmedabad,+Gujarat" 
              target="_blank" 
              rel="noreferrer"
              className="contact-card fade-in stagger-3" 
              style={{ flex: 1, padding: '30px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', justifyContent: 'center' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(100, 255, 218, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--primary)', flexShrink: 0 }}>
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--white)', marginBottom: '5px' }}>Location</h3>
                <p style={{ color: 'var(--white)', fontSize: '0.95rem' }}>Ahmedabad, Gujarat, India</p>
              </div>
            </a>

            <a 
              href="mailto:jenishgangani238@gmail.com" 
              className="contact-card fade-in stagger-3" 
              style={{ flex: 1, padding: '30px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', justifyContent: 'center' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(100, 255, 218, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--primary)', flexShrink: 0 }}>
                <FaEnvelopeOpen />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--white)', marginBottom: '5px' }}>Email</h3>
                <p style={{ color: 'var(--white)', fontSize: '0.95rem' }}>jenishgangani238@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+919081131732" 
              className="contact-card" 
              style={{ flex: 1, padding: '30px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(100, 255, 218, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', color: 'var(--primary)', flexShrink: 0 }}>
                <FaPhoneAlt />
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--white)', marginBottom: '5px' }}>Phone</h3>
                <p style={{ color: 'var(--white)', fontSize: '0.95rem' }}>+91 9081131732</p>
              </div>
            </a>
          </div>

          {/* Right Column: Contact Form */}
          <div className="fade-in stagger-4 glass" style={{ flex: '1 1 500px', padding: '40px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
            
            {status === 'success' ? (
              <div className="fade-in" style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', height: '100%', justifyContent: 'center', minHeight: '400px' }}>
                <FaCheckCircle style={{ fontSize: '5rem', color: 'var(--primary)', marginBottom: '10px' }} />
                <h3 style={{ fontSize: '1.8rem', color: 'var(--white)' }}>Thank You!</h3>
                <p style={{ color: 'var(--white)', fontSize: '1.1rem', lineHeight: '1.6' }}>
                  Thank you for contacting us. Our developer will get in touch with you soon.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="btn btn-primary"
                  style={{ marginTop: '20px', padding: '12px 25px', backgroundColor: 'transparent', color: 'var(--primary)' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontSize: '1.8rem', color: 'var(--white)', marginBottom: '30px', fontWeight: '600' }}>Send me a message</h3>
                {status === 'error' && (
                  <div style={{ padding: '15px', background: 'rgba(255, 100, 100, 0.1)', border: '1px solid rgba(255, 100, 100, 0.3)', borderRadius: '8px', color: '#ff8888', marginBottom: '20px' }}>
                    Oops! Something went wrong. Please try again.
                  </div>
                )}
                <form 
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}
                >
                  <input type="hidden" name="_subject" value="New Contact Message from Portfolio!" />
                  
                  <div className="input-icon-wrapper">
                    <FaUser />
                    <input 
                      type="text" 
                      name="name" 
                      className="form-input" 
                      placeholder="Your Full Name" 
                      required 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="input-icon-wrapper">
                    <FaEnvelope />
                    <input 
                      type="email" 
                      name="email" 
                      className="form-input" 
                      placeholder="Your Email Address" 
                      required 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div className="input-icon-wrapper form-textarea">
                    <FaPaperPlane />
                    <textarea 
                      name="message" 
                      className="form-input" 
                      placeholder="How can I help you?" 
                      rows="6" 
                      required
                      disabled={status === 'submitting'}
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className={`btn btn-primary ${status !== 'submitting' ? 'pulse-btn' : ''}`} 
                    style={{ 
                      padding: '16px', 
                      fontSize: '1.1rem', 
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      letterSpacing: '1px',
                      opacity: status === 'submitting' ? 0.7 : 1,
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer'
                    }}
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
