import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    // Cek apakah device mobile
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  useEffect(() => {
    if (isMobile) return;
    
    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.tech-badge') ||
        target.closest('.glass-card') ||
        target.closest('img') ||
        target.closest('.project-card') ||
        target.closest('svg') ||
        target.closest('a *')  // Semua child dari link
      ) {
        setCursorVariant('hover');
      } else {
        setCursorVariant('default');
      }
    };
    
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, [isMobile]);
  
  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 1.2,
    }
  };
  
  // Jangan render cursor di mobile
  if (isMobile) return null;
  
  return (
    <>
      {/* Style global untuk menyembunyikan semua cursor default */}
      <style id="cursor-style">
        {`
          *,
          *::before,
          *::after,
          html,
          body,
          div,
          span,
          a,
          button,
          input,
          textarea,
          select,
          label,
          img,
          svg,
          path,
          circle,
          polygon,
          .tech-badge,
          .glass-card,
          .project-card,
          [role="button"],
          [type="button"],
          [type="submit"],
          [type="reset"],
          [type="file"] {
            cursor: none !important;
          }
          
          /* Khusus untuk elemen yang butuh interaksi */
          a:hover,
          button:hover,
          .tech-badge:hover,
          .glass-card:hover,
          img:hover,
          [role="button"]:hover {
            cursor: none !important;
          }
        `}
      </style>
      
      {/* Main cursor runcing */}
      <motion.div
        className="fixed pointer-events-none z-[200]"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          mass: 0.3,
          stiffness: 800,
          damping: 25
        }}
        style={{
          filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.7))'
        }}
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
        className="fixed pointer-events-none z-[201]"
        animate={{
          x: mousePosition.x - 1.5,
          y: mousePosition.y - 1.5,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 1000,
          damping: 20
        }}
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
      {cursorVariant === 'hover' && (
        <motion.div
          className="fixed pointer-events-none z-[198]"
          animate={{
            x: mousePosition.x - 18,
            y: mousePosition.y - 18,
            rotate: [0, 360],
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
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