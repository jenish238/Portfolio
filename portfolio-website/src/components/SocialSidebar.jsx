import { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaSalesforce, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';

const LINKS = [
  { icon: <FaLinkedinIn />,  href: 'https://www.linkedin.com/in/jenish-gangani-577440215/', label: 'LinkedIn', color: '#0a66c2' },
  { icon: <FaGithub />,      href: 'https://github.com/jenish238',                            label: 'GitHub',   color: '#e2e8f0' },
  { icon: <SiUpwork />,      href: 'https://www.upwork.com/freelancers/~0151237481fe1a38f2?mp_source=share', label: 'Upwork', color: '#6fda44' },
  { icon: <FaSalesforce />,  href: 'https://www.salesforce.com/trailblazer/jgangani1',        label: 'Trailhead', color: '#00a1e0' },
  { icon: <FaWhatsapp />,    href: 'https://wa.me/919081131732',                               label: 'WhatsApp', color: '#25d366' },
  { icon: <FaEnvelope />,    href: 'mailto:jenishgangani238@gmail.com',                        label: 'Email',    color: '#00d4ff' },
];

const SocialSidebar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      left: '24px',
      bottom: 0,
      zIndex: 999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.4s ease',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      {LINKS.map(({ icon, href, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          style={{
            color: 'var(--text-sub)',
            fontSize: '1.2rem',
            transition: 'all 0.25s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = color;
            e.currentTarget.style.transform = 'translateX(4px) scale(1.2)';
            e.currentTarget.style.filter = `drop-shadow(0 0 6px ${color})`;
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--text-sub)';
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.filter = 'none';
          }}
        >
          {icon}
        </a>
      ))}
      {/* Vertical line */}
      <div style={{
        width: '1px',
        height: '80px',
        background: 'linear-gradient(to bottom, var(--text-sub), transparent)',
        marginTop: '4px',
      }} />
    </div>
  );
};

export default SocialSidebar;
