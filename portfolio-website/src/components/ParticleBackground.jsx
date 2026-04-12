import { useEffect, useRef } from 'react';

/**
 * Global ParticleBackground
 * position: fixed — spans the full viewport at all times.
 * z-index: 0 — sits above the html/body background but below every section (z-index:1).
 * Sections use rgba backgrounds so particles show through at ~12%.
 */
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let mouse = { x: null, y: null };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const COUNT = Math.min(200, Math.floor((window.innerWidth * window.innerHeight) / 5500));
    const BASE_SPEED = 0.45;   // target cruising speed
    const MIN_SPEED  = 0.18;   // never go slower than this
    const MAX_SPEED  = 2.8;    // never go faster than this (after mouse push)
    const CONNECT_D  = 145;
    const MOUSE_R    = 190;

    const mkParticle = () => {
      const angle = Math.random() * Math.PI * 2;
      const spd   = BASE_SPEED * (0.6 + Math.random() * 0.8);
      return {
        x:        Math.random() * window.innerWidth,
        y:        Math.random() * window.innerHeight,
        vx:       Math.cos(angle) * spd,
        vy:       Math.sin(angle) * spd,
        baseSize: Math.random() * 1.8 + 1.2,
        opacity:  Math.random() * 0.45 + 0.45,
        color:    Math.random() > 0.5 ? '0, 212, 255' : '100, 255, 218',
      };
    };

    const particles = Array.from({ length: COUNT }, mkParticle);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      /* ── Connecting lines ── */
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_D) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.25 * (1 - d / CONNECT_D)})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      /* ── Particles ── */
      particles.forEach((p) => {
        /* Mouse repulsion */
        if (mouse.x !== null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < MOUSE_R && d > 0) {
            const f = (MOUSE_R - d) / MOUSE_R;
            p.vx += (dx / d) * f * 0.12;
            p.vy += (dy / d) * f * 0.12;
          }
        }

        /* Speed control — cap maximum, always restore minimum */
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) {
          p.vx = (p.vx / spd) * MAX_SPEED;
          p.vy = (p.vy / spd) * MAX_SPEED;
        } else if (spd < MIN_SPEED) {
          /* Gently push back toward base speed along current heading */
          const ang = spd > 0.001 ? Math.atan2(p.vy, p.vx) : Math.random() * Math.PI * 2;
          p.vx = Math.cos(ang) * BASE_SPEED;
          p.vy = Math.sin(ang) * BASE_SPEED;
        } else if (spd > BASE_SPEED * 1.1) {
          /* Cool down gradually after mouse push */
          p.vx *= 0.995;
          p.vy *= 0.995;
        }

        /* Move */
        p.x += p.vx;
        p.y += p.vy;

        /* Wrap around viewport edges */
        if (p.x < -12) p.x = canvas.width  + 12;
        if (p.x > canvas.width  + 12) p.x  = -12;
        if (p.y < -12) p.y = canvas.height + 12;
        if (p.y > canvas.height + 12) p.y  = -12;

        /* Glowing halo */
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.baseSize * 6);
        g.addColorStop(0, `rgba(${p.color}, ${p.opacity})`);
        g.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseSize * 6, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();

        /* Solid core */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.baseSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.min(1, p.opacity + 0.3)})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default ParticleBackground;
