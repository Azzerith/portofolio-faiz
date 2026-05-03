import { useEffect } from 'react';

const ParticleBackground = () => {
  useEffect(() => {
    const container = document.createElement('div');
    container.className = 'fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0';
    document.body.appendChild(container);

    const colors = ['#10b981', '#3b82f6', '#eab308', '#ec4899', '#a855f7', '#f97316'];
    const particleCount = 90;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 12 + 4;
      const colorChoice = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.position = 'absolute';
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `radial-gradient(circle, ${colorChoice}80 0%, ${colorChoice}20 70%)`;
      particle.style.borderRadius = '50%';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.bottom = `-${Math.random() * 30}px`;
      particle.style.animation = `floatParticle ${Math.random() * 8 + 6}s linear infinite`;
      particle.style.opacity = '0.3';
      
      container.appendChild(particle);
    }

    // Add keyframe animation to document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.2; }
        50% { opacity: 0.6; }
        100% { transform: translateY(-100vh) translateX(40px) scale(0.5); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      if (container) container.remove();
      style.remove();
    };
  }, []);

  return null;
};

export default ParticleBackground;