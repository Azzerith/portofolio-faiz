import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Posisi cursor disimpan di motion value → TIDAK memicu re-render React tiap mousemove
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const arrowX = useSpring(cursorX, { mass: 0.3, stiffness: 800, damping: 25 });
  const arrowY = useSpring(cursorY, { mass: 0.3, stiffness: 800, damping: 25 });
  const dotX = useSpring(cursorX, { mass: 0.1, stiffness: 1000, damping: 20 });
  const dotY = useSpring(cursorY, { mass: 0.1, stiffness: 1000, damping: 20 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Deteksi hover di-throttle dengan rAF + hanya set state saat nilainya berubah
    let raf = 0;
    let pendingTarget = null;
    const onMouseOver = (e) => {
      pendingTarget = e.target;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const hover = !!pendingTarget?.closest?.(
          'a,button,img,svg,.tech-badge,.glass-card,.project-card,[role="button"]'
        );
        setIsHover((prev) => (prev === hover ? prev : hover));
      });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [isMobile, cursorX, cursorY]);

  // Jangan render cursor di mobile
  if (isMobile) return null;

  return (
    <>
      {/* Sembunyikan cursor default */}
      <style id="cursor-style">
        {`* { cursor: none !important; }`}
      </style>

      {/* Main cursor runcing */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[200]"
        style={{ x: arrowX, y: arrowY, marginLeft: -6, marginTop: -6, filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))' }}
        animate={{ scale: isHover ? 1.2 : 1 }}
        transition={{ type: 'spring', mass: 0.3, stiffness: 800, damping: 25 }}
      >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <defs>
            <linearGradient id="cursorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B"/>
              <stop offset="100%" stopColor="#FBBF24"/>
            </linearGradient>
            <filter id="cursorGlow">
              <feGaussianBlur stdDeviation="2" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Pointer panah runcing */}
          <polygon
            points="4,4 22,12 12,14 10,24"
            fill="url(#cursorGrad)"
            filter="url(#cursorGlow)"
            stroke="#FFFFFF"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          {/* Inner highlight */}
          <polygon
            points="7,7 18,12 11,13 10,19"
            fill="#FDE68A"
            opacity="0.5"
          />
          {/* Ujung bercahaya */}
          <circle cx="21" cy="12" r="2" fill="#FFD700">
            <animate attributeName="r" values="2;3;2" dur="0.8s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.7;1;0.7" dur="0.8s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </motion.div>

      {/* Inner dot untuk presisi */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[201]"
        style={{ x: dotX, y: dotY, marginLeft: -1.5, marginTop: -1.5 }}
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0 0 4px #F59E0B'
          }}
        />
      </motion.div>

      {/* Efek lingkaran magis saat hover */}
      {isHover && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[198]"
          style={{ x: arrowX, y: arrowY, marginLeft: -18, marginTop: -18 }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="10" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.5">
              <animate attributeName="r" values="10;14;10" dur="1.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.5;0;0.5" dur="1.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="18" cy="18" r="5" stroke="#FBBF24" strokeWidth="0.8" fill="none" opacity="0.6">
              <animate attributeName="r" values="5;8;5" dur="1s" repeatCount="indefinite"/>
            </circle>
            <line x1="18" y1="8" x2="18" y2="12" stroke="#FFD700" strokeWidth="0.8" opacity="0.7">
              <animate attributeName="y1" values="8;10;8" dur="0.8s" repeatCount="indefinite"/>
            </line>
            <line x1="18" y1="24" x2="18" y2="28" stroke="#FFD700" strokeWidth="0.8" opacity="0.7">
              <animate attributeName="y2" values="24;26;24" dur="0.8s" repeatCount="indefinite"/>
            </line>
            <line x1="8" y1="18" x2="12" y2="18" stroke="#FFD700" strokeWidth="0.8" opacity="0.7">
              <animate attributeName="x1" values="8;10;8" dur="0.8s" repeatCount="indefinite"/>
            </line>
            <line x1="24" y1="18" x2="28" y2="18" stroke="#FFD700" strokeWidth="0.8" opacity="0.7">
              <animate attributeName="x2" values="24;26;24" dur="0.8s" repeatCount="indefinite"/>
            </line>
          </svg>
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
