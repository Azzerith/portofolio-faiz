import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code, Briefcase, BookOpen, Home, User, Zap, Trophy } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home', icon: <Home size={15} /> },
    { name: 'Skills', href: '#skills', icon: <Zap size={15} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={15} /> },
    { name: 'Awards', href: '#awards', icon: <Trophy size={15} /> },
    { name: 'Projects', href: '#projects', icon: <Code size={15} /> },
    { name: 'Education', href: '#achievements', icon: <BookOpen size={15} /> },
    { name: 'Contact', href: '#contact', icon: <User size={15} /> },
  ];

  useEffect(() => {
    const sectionIds = navItems.map((i) => i.href.substring(1));
    let raf = 0;

    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 50);

      const threshold = 140; // titik acuan tepat di bawah navbar
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= threshold) current = id;
      }

      // Paksa section terakhir aktif saat sudah mentok di dasar halaman
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) current = sectionIds[sectionIds.length - 1];

      setActiveSection(current);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToSection = (href) => {
    setIsOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id); // feedback instan, tidak menunggu scroll listener
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Navbar Desktop - tampil di desktop dengan background kuning */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          scrolled 
            ? 'bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-500 shadow-2xl py-3' 
            : 'bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-400 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="flex items-center gap-2 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Code size={18} className="text-amber-500" />
              </div>
              <span className="text-white font-bold text-sm hidden lg:inline">Muhammad </span>
              <span className="text-yellow-200 font-bold text-sm">Faiz </span>
              <span className="text-white font-bold text-sm hidden xl:inline">Alfi Rahman</span>
              <span className="text-white font-bold text-sm lg:hidden">F. </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="flex items-center gap-0.5 lg:gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  title={item.name}
                  className={`relative px-2.5 lg:px-3.5 py-1.5 rounded-full text-[13px] font-medium transition-colors duration-300 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    activeSection === item.href.substring(1)
                      ? 'text-amber-700'
                      : 'text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {activeSection === item.href.substring(1) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-white shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.icon}</span>
                  <span className="relative z-10 hidden lg:inline">{item.name}</span>
                </motion.a>
              ))}

              {/* Pemisah + toggle tema */}
              <span className="w-px h-6 bg-white/30 mx-1 lg:mx-2" />
              <ThemeToggle className="w-9 h-9 text-white hover:bg-white/15" />
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Tombol Floating Mobile: toggle tema + hamburger */}
      <div className="fixed top-4 right-4 z-[100] md:hidden flex items-center gap-2">
        <ThemeToggle className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl text-white border-2 border-white/20" size={22} />
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 shadow-xl flex items-center justify-center text-white border-2 border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu - slide from right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-gradient-to-b from-amber-500 via-amber-600 to-amber-800 z-[90] pt-20 px-6 shadow-2xl flex flex-col pointer-events-auto"
            >
              {/* Header menu mobile */}
              <div className="flex items-center gap-2 px-4 pb-4 mb-2 border-b border-white/20">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <Code size={18} className="text-amber-500" />
                </div>
                <span className="text-white font-bold">Menu</span>
              </div>
              
              {/* Menu items */}
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all duration-300 cursor-pointer ${
                      activeSection === item.href.substring(1)
                        ? 'bg-white/30'
                        : 'hover:bg-white/20'
                    }`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-yellow-200">{item.icon}</span>
                    <span>{item.name}</span>
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeMobileTab"
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                      />
                    )}
                  </motion.a>
                ))}
              </div>
              
              {/* Footer menu mobile */}
              <div className="absolute bottom-8 left-0 right-0 px-5">
                <div className="border-t border-white/20 pt-4">
                  <p className="text-white/60 text-xs text-center">
                    © 2026 Muhammad Faiz Alfi Rahman
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;