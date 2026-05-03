import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ProfileCard = ({ photo, photoFallback }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Smooth spring values dengan damping tinggi untuk menghindari muter
  const springConfig = { damping: 25, stiffness: 180, mass: 0.8 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const rotateZ = useSpring(0, springConfig);
  const translateY = useSpring(0, springConfig);
  
  // Batasan rotasi maksimal
  const MAX_ROTATE_X = 8;
  const MAX_ROTATE_Y = 8;
  const MAX_ROTATE_Z = 3;
  
  useEffect(() => {
    let lastMouseX = 0;
    let lastMouseY = 0;
    let velocityX = 0;
    let velocityY = 0;
    
    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      
      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;
      
      let mouseX = (e.clientX - cardCenterX) / (rect.width / 2);
      let mouseY = (e.clientY - cardCenterY) / (rect.height / 2);
      
      mouseX = Math.min(Math.max(mouseX, -1), 1);
      mouseY = Math.min(Math.max(mouseY, -1), 1);
      
      velocityX = (e.clientX - lastMouseX) * 0.1;
      velocityY = (e.clientY - lastMouseY) * 0.1;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      
      let targetRotateY = mouseX * MAX_ROTATE_Y;
      let targetRotateX = -mouseY * MAX_ROTATE_X;
      
      targetRotateY += Math.min(Math.max(velocityX, -2), 2);
      targetRotateX += Math.min(Math.max(velocityY, -2), 2);
      
      targetRotateY = Math.min(Math.max(targetRotateY, -MAX_ROTATE_Y), MAX_ROTATE_Y);
      targetRotateX = Math.min(Math.max(targetRotateX, -MAX_ROTATE_X), MAX_ROTATE_X);
      
      rotateX.set(targetRotateX);
      rotateY.set(targetRotateY);
      
      const targetRotateZ = mouseX * MAX_ROTATE_Z;
      rotateZ.set(Math.min(Math.max(targetRotateZ, -MAX_ROTATE_Z), MAX_ROTATE_Z));
      
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollEffect = Math.sin(scrollY * 0.008) * 1.5;
      const boundedEffect = Math.min(Math.max(scrollEffect, -MAX_ROTATE_Z), MAX_ROTATE_Z);
      rotateZ.set(boundedEffect);
      
      const bounceEffect = Math.sin(scrollY * 0.015) * 2;
      translateY.set(bounceEffect);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [rotateX, rotateY, rotateZ, translateY]);
  
  const shadowX = Math.min(Math.max((mousePosition.x / window.innerWidth - 0.5) * 15, -10), 10);
  const shadowY = Math.min(Math.max((mousePosition.y / window.innerHeight - 0.5) * 15, -10), 10);
  
  return (
    <motion.div
      ref={cardRef}
      className="relative"
      style={{
        rotateX,
        rotateY,
        rotateZ,
        y: translateY,
        transformStyle: "preserve-3d",
        perspective: 1200
      }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
    >
      {/* Background glow effect */}
      <motion.div 
        className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-3xl blur-lg opacity-30"
        animate={{
          x: shadowX * 0.3,
          y: shadowY * 0.3,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
      
      <div className="relative bg-white rounded-3xl shadow-2xl p-6 w-72 md:w-80">
        {/* Lanyard / Tali ID Card - Lebih realistis */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-8 flex flex-col items-center">
          {/* Klip / Jepitan lanyard */}
          <motion.div 
            className="relative"
            animate={{
              rotateZ: rotateZ.get() * 0.2,
            }}
          >
            {/* Gantungan klip logam */}
            <div className="w-6 h-8 bg-gradient-to-b from-gray-500 to-gray-700 rounded-t-lg relative">
              <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-gray-400 rounded-sm"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-2 bg-gray-600 rounded-b-md"></div>
            </div>
            
            {/* Lingkaran gantungan */}
            <div className="w-4 h-4 rounded-full border-2 border-gray-500 bg-gray-400/50 mt-1 mx-auto"></div>
          </motion.div>
          
          {/* Tali lanyard (lebar dan berwarna) */}
          <motion.div 
            className="relative mt-1"
            animate={{
              rotateZ: rotateZ.get() * 0.15,
            }}
          >
            {/* Tali utama - lebar seperti lanyard asli */}
            <div className="w-8 h-32 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 rounded-t-md relative">
              {/* Pola garis pada lanyard */}
              <div className="absolute inset-0 flex flex-col">
                <div className="h-2 bg-yellow-400/30 w-full"></div>
                <div className="h-2 bg-yellow-400/20 w-full mt-1"></div>
                <div className="h-2 bg-yellow-400/30 w-full mt-1"></div>
                <div className="h-2 bg-yellow-400/20 w-full mt-1"></div>
                <div className="h-2 bg-yellow-400/30 w-full mt-1"></div>
                <div className="h-2 bg-yellow-400/20 w-full mt-1"></div>
                <div className="h-2 bg-yellow-400/30 w-full mt-1"></div>
              </div>
              {/* Batas tepi tali */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-amber-700/50"></div>
              <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-amber-700/50"></div>
            </div>
            
            {/* Ujung tali dengan jahitan */}
            <div className="w-8 h-3 bg-amber-700 rounded-b-md relative mt-0.5">
              <div className="absolute inset-0 flex items-center justify-around">
                <div className="w-0.5 h-2 bg-amber-900"></div>
                <div className="w-0.5 h-2 bg-amber-900"></div>
                <div className="w-0.5 h-2 bg-amber-900"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Penghubung ke card (ring plastik) */}
          <motion.div 
            className="w-5 h-5 rounded-full border-2 border-amber-400 bg-amber-300/50 mt-1 flex items-center justify-center"
            animate={{
              rotateZ: rotateZ.get() * 0.3,
            }}
          >
            <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          </motion.div>
        </div>
        
        <div className="relative mt-6">
          <motion.div 
            className="w-32 h-32 md:w-36 md:h-36 mx-auto rounded-full overflow-hidden ring-4 ring-amber-400 shadow-xl"
            animate={{
              boxShadow: `${shadowX}px ${shadowY}px 20px rgba(0,0,0,0.12)`,
            }}
          >
            <img 
              src={photo} 
              alt="Muhammad Faiz Alfi Rahman" 
              className="w-full h-full object-cover"
              onError={(e) => { e.target.src = photoFallback; }}
            />
          </motion.div>
          <motion.div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Full-Stack
          </motion.div>
        </div>
        
        <div className="text-center mt-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">Muhammad Faiz Alfi Rahman</h2>
          <p className="text-amber-600 font-medium mt-1">Golang · React · Full-Stack</p>
        </div>
        
        <div className="mt-5 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2 justify-center">
            <Phone size={16} className="text-amber-500"/> +62 81229473327
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Mail size={16} className="text-amber-500"/> zikazabat@gmail.com
          </div>
          <div className="flex items-center gap-2 justify-center">
            <MapPin size={16} className="text-amber-500"/> Banyumas, Jawa Tengah
          </div>
        </div>
        
        <div className="flex gap-3 justify-center mt-5">
          <a href="https://www.linkedin.com/in/muhammad-faiz-alfi-rahman-b49030277" target="_blank" 
             className="bg-gray-100 hover:bg-blue-500 hover:text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center w-9 h-9">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/Azzerith" target="_blank" 
             className="bg-gray-100 hover:bg-gray-800 hover:text-white p-2 rounded-full transition-all duration-300 flex items-center justify-center w-9 h-9">
            <i className="fab fa-github"></i>
          </a>
          <div className="bg-amber-100 px-4 py-2 rounded-full text-amber-700 text-sm font-semibold">
            GPA 3.87
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;