import { Code } from 'lucide-react';

const TechIcon = ({ name }) => {
  const iconMap = {
    'Golang': <i className="fab fa-golang text-[#00ADD8] text-xl"></i>,
    'React': <i className="fab fa-react text-[#61DAFB] text-xl"></i>,
    'Tailwind': <i className="fab fa-css3-alt text-[#06B6D4] text-xl"></i>,
    'MySQL': <i className="fas fa-database text-[#4479A1] text-xl"></i>,
    'Gin': <i className="fas fa-code-branch text-[#00ADD8] text-xl"></i>,
    'JavaScript': <i className="fab fa-js text-[#F7DF1E] text-xl"></i>,
    'Git': <i className="fab fa-git-alt text-[#F05032] text-xl"></i>,
    'REST API': <i className="fas fa-plug text-[#4CAF50] text-xl"></i>,
    'HTML/CSS': <i className="fab fa-html5 text-[#E34F26] text-xl"></i>,
  };
  
  return iconMap[name] || <Code size={20} className="text-gray-500" />;
};

export default TechIcon;