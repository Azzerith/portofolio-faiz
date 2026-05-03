import { useState } from 'react';
import { motion } from 'framer-motion';
import { Video, FileText, Maximize2, Code } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import ImageModal from './ImageModal';

const TechIcon = ({ name }) => {
  const iconMap = {
    'Golang': <i className="fab fa-golang text-[#00ADD8] text-xl"></i>,
    'React': <i className="fab fa-react text-[#61DAFB] text-xl"></i>,
    'Tailwind': <i className="fab fa-css3-alt text-[#06B6D4] text-xl"></i>,
    'MySQL': <i className="fas fa-database text-[#4479A1] text-xl"></i>,
    'Gin': <i className="fas fa-code-branch text-[#00ADD8] text-xl"></i>,
    'JavaScript': <i className="fab fa-js text-[#F7DF1E] text-xl"></i>,
    'Git': <i className="fab fa-git-alt text-[#F05032] text-xl"></i>,
    'Gemini API': <i className="fas fa-robot text-[#4285F4] text-xl"></i>,
  };
  return iconMap[name] || <Code size={20} className="text-gray-500" />;
};

const ProjectCard = ({ project, index }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imgIndex = 0) => {
    setCurrentImageIndex(imgIndex);
    setModalOpen(true);
  };

  // Animasi stack: card muncul bertumpuk dengan efek 3D
  const stackVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.div
      variants={stackVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      className="mb-8"
    >
      <div className="glass-card p-6 hover:shadow-2xl transition-all duration-300 group">
        <div className="flex justify-between items-start flex-wrap gap-2 mb-3">
          <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
          {project.badge && (
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
              {project.badge}
            </span>
          )}
        </div>
        
        <p className="text-gray-600 mt-2 leading-relaxed">{project.description}</p>
        
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-badge">
              <TechIcon name={tech}/> {tech}
            </span>
          ))}
        </div>
        
        {/* Thumbnail Gambar Besar - Grid 2x2 dengan ukuran lebih besar */}
        <div className="grid grid-cols-2 gap-3 mt-4">
          {project.images.slice(0, 4).map((img, idx) => (
            <motion.div 
              key={idx} 
              className="relative rounded-xl overflow-hidden bg-gray-100 cursor-pointer shadow-md group/img"
              style={{ aspectRatio: '16/9' }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => openModal(idx)}
            >
              <img 
                src={`./${img}`} 
                className="w-full h-full object-cover" 
                alt={`${project.title} preview`}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-all duration-300 flex items-center justify-center">
                <Maximize2 size={28} className="text-white" />
                <span className="text-white text-sm ml-2">Klik untuk lihat</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Links */}
        <div className="mt-5 flex gap-4 flex-wrap">
          {project.github && (
            <a href={project.github} target="_blank" 
               className="text-gray-700 hover:text-gray-900 flex items-center gap-1 text-sm transition-all hover:gap-2">
              <i className="fab fa-github"></i> Repository
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" 
               className="text-red-500 hover:text-red-600 flex items-center gap-1 text-sm transition-all hover:gap-2">
              <Video size={16}/> Demo Video
            </a>
          )}
          {project.docs && (
            <a href={project.docs} target="_blank" 
               className="text-amber-600 hover:text-amber-700 flex items-center gap-1 text-sm transition-all hover:gap-2">
              <FileText size={16}/> Documentation
            </a>
          )}
        </div>
      </div>
      
      {modalOpen && (
        <ImageModal
          images={project.images}
          currentIndex={currentImageIndex}
          onClose={() => setModalOpen(false)}
          onNext={() => setCurrentImageIndex((prev) => (prev + 1) % project.images.length)}
          onPrev={() => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length)}
        />
      )}
    </motion.div>
  );
};

export default ProjectCard;