import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Heart, Code, Award, Briefcase, ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
  ];

  const contactInfo = [
    { icon: <Phone size={16} />, text: '+62 81229473327', href: 'tel:+6281229473327' },
    { icon: <Mail size={16} />, text: 'zikazabat@gmail.com', href: 'mailto:zikazabat@gmail.com' },
    { icon: <MapPin size={16} />, text: 'Banyumas, Jawa Tengah', href: null },
  ];

  const socialLinks = [
    { icon: <i className="fab fa-github"></i>, href: 'https://github.com/Azzerith', label: 'GitHub' },
    { icon: <i className="fab fa-linkedin-in"></i>, href: 'https://www.linkedin.com/in/muhammad-faiz-alfi-rahman-b49030277', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 text-white mt-20">
      {/* Tombol Scroll to Top */}
      <motion.button
        onClick={scrollToTop}
        className="absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 rounded-full bg-amber-400 hover:bg-amber-300 text-white flex items-center justify-center shadow-lg transition-all duration-300"
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={20} />
      </motion.button>

      <div className="max-w-7xl mx-auto px-5 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <Code size={22} className="text-amber-500" />
              </div>
              <div>
                <span className="text-white font-bold text-lg">Muhammad </span>
                <span className="text-yellow-200 font-bold text-lg">Faiz </span>
                <span className="text-white font-bold text-lg">Alfi Rahman</span>
              </div>
            </div>
            <p className="text-amber-100 text-sm leading-relaxed">
              Full-Stack Developer specializing in Golang and React. 
              Delivering scalable web applications and innovative solutions.
              Graphic Designer specializing in Design and Illustration.
            </p>
            <div className="flex gap-3 mt-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-300 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-amber-100 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full group-hover:scale-150 transition"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-yellow-300 rounded-full"></span>
              Contact Me
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={info.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-amber-100 hover:text-white transition-colors flex items-center gap-3"
                    >
                      <span className="text-yellow-300">{info.icon}</span>
                      <span className="text-sm">{info.text}</span>
                    </a>
                  ) : (
                    <div className="text-amber-100 flex items-center gap-3">
                      <span className="text-yellow-300">{info.icon}</span>
                      <span className="text-sm">{info.text}</span>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/20 my-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        {/* Copyright */}
        <motion.div
          className="text-center text-amber-100 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="flex items-center justify-center gap-1 flex-wrap">
            © 2026 Muhammad Faiz Alfi Rahman. 
            <span className="flex items-center gap-1">
              Made with <Heart size={14} className="text-red-400 animate-pulse" /> 
              using React & Tailwind
            </span>
          </p>
          <p className="text-xs mt-2 text-amber-200/70">
            Full-Stack Developer | Golang Backend | React Frontend | Graphic Designer
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;