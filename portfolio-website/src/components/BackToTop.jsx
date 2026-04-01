import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      style={{
        position: 'fixed',
        bottom: '32px',
        right: '28px',
        zIndex: 999,
        width: '46px',
        height: '46px',
        borderRadius: '50%',
        border: '2px solid var(--primary)',
        background: 'rgba(2, 12, 27, 0.85)',
        color: 'var(--primary)',
        fontSize: '1.1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.8)',
        transition: 'all 0.35s cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: visible ? 'auto' : 'none',
        backdropFilter: 'blur(8px)',
        boxShadow: visible ? '0 0 16px rgba(0,212,255,0.25)' : 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'var(--primary)';
        e.currentTarget.style.color = '#020c1b';
        e.currentTarget.style.boxShadow = '0 0 24px rgba(0,212,255,0.5)';
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'rgba(2, 12, 27, 0.85)';
        e.currentTarget.style.color = 'var(--primary)';
        e.currentTarget.style.boxShadow = '0 0 16px rgba(0,212,255,0.25)';
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
      }}
    >
      <FaArrowUp />
    </button>
  );
};

export default BackToTop;
