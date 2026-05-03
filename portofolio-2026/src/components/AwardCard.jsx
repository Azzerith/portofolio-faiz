import { motion } from 'framer-motion';
import { Award, Video, Play, ExternalLink } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const AwardCard = ({ award, index }) => {
  const getIcon = () => {
    if (award.type === 'animation') return <Award className="text-amber-500" size={24} />;
    return <Video className="text-amber-500" size={24} />;
  };

  const videoUrl = award.video || null;
  const thumbnailImage = award.images && award.images[0] ? award.images[0] : null;

  return (
    <ScrollAnimation direction="up" delay={index * 0.1}>
      <motion.div 
        className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-amber-400 p-4 rounded-xl flex items-start gap-3 cursor-pointer group relative overflow-hidden"
        whileHover={{ scale: 1.02, x: 5 }}
        onClick={() => videoUrl && window.open(videoUrl, '_blank')}
      >
        {getIcon()}
        <div className="flex-1">
          <p className="font-bold text-gray-800">{award.title}</p>
          <p className="text-sm text-gray-500">{award.event}</p>
          <p className="text-xs text-amber-600 mt-1">{award.year}</p>
        </div>
        
        {/* Thumbnail Video dengan Play Button */}
        {thumbnailImage && videoUrl && (
          <div className="relative">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden shadow-md group-hover:scale-110 transition duration-300">
              <img 
                src={`./${thumbnailImage}`} 
                className="w-full h-full object-cover"
                alt={award.title}
              />
              {/* Overlay gelap */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
              {/* Tombol Play dengan animasi */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="w-8 h-8 rounded-full bg-amber-500 flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={14} className="text-white ml-0.5" />
                </motion.div>
              </div>
            </div>
            
            {/* External Link Icon subtle overlay */}
            <div className="absolute -top-1 -right-1 bg-white rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ExternalLink size={10} className="text-amber-600" />
            </div>
          </div>
        )}
      </motion.div>
    </ScrollAnimation>
  );
};

export default AwardCard;