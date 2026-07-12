import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import LazyImage from './components/LazyImage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import ScrollAnimation from './components/ScrollAnimation';
import ProjectCard from './components/ProjectCard';
import ExperienceTimeline from './components/ExperienceTimeline';
import TypingText from './components/TypingText';
import { Code, Users, BookOpen, CheckCircle, Zap, Cpu, TrendingUp, ExternalLink, Mail, Star, Trophy, Sparkles, Award, Clock } from 'lucide-react';

const HERO_TITLES = ['Full-Stack Web Developer', 'Graphic Designer'];
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();
  const tpqImages = ['tpq1.png', 'tpq2.png', 'tpq3.png', 'tpq4.png'];
  const faImages = ['fa1.png', 'fa2.png', 'fa3.png', 'fa4.png', 'fa5.png'];
  const rgImages = ['rg1.png', 'rg2.png', 'rg3.png', 'rg4.png', 'rg5.png'];
  const tsImages = ['ts1.png', 'ts2.png', 'ts3.png'];
  const zbImages = ['zb1.png', 'zb2.png', 'zb3.png', 'zb4.png'];

  const projects = [
    {
      title: 'Zona Belajar — Online Tryout & E-Learning Platform',
      description: 'Rebuilt a tryout & e-learning platform into two Laravel 11 apps (admin panel + student app) sharing one MySQL database. Section-based timed exams with auto-grading, per-section rankings & report breakdowns, learning materials, practice sets, student report cards, AI-assisted PDF question import, and one-click PDF exports — shipped to production with CI/CD auto-deploy.',
      badge: 'Live Production',
      techStack: ['Laravel', 'PHP', 'MySQL', 'Alpine.js', 'Tailwind'],
      images: zbImages,
      github: null,
      demo: null,
      docs: null,
      live: 'https://zona-belajar.com'
    },
    {
      title: 'TPQ Financial Management & Donation Platform',
      description: 'Built web-based financial system replacing manual recording. Multi-role authentication system (Super Admin, Admin, Wali, Public). Improved transparency and reduced risk of data loss, achieving ~100% digitalization.',
      badge: '100% Digitalization',
      techStack: ['Golang', 'React', 'Tailwind', 'MySQL'],
      images: tpqImages,
      github: 'https://github.com/Azzerith/tpq_asysyafii',
      docs: 'https://s.id/qoK9U',
      demo: null
    },
    {
      title: 'Forum Asisten Attendance & Honorarium System',
      description: 'Built fullstack system to digitize attendance & honorarium tracking, reducing recap time from 2 days to under 2 hours. Developed RESTful APIs and responsive UI with role-based access.',
      badge: '2 days → 2 hours',
      techStack: ['Golang', 'React', 'Tailwind', 'MySQL'],
      images: faImages,
      github: 'https://github.com/Azzerith/forum_asisten',
      demo: 'https://youtu.be/kQWIDwNykH0?si=2yJ_K5sJMI9nyQpG',
      docs: null
    },
    {
      title: 'AI Smart Home Energy Management System',
      description: 'AI-powered platform to analyze energy consumption from CSV data. Integrated Hugging Face TAPAS model and built chatbot using Gemini API for real-time interaction.',
      badge: 'MSIB Internship',
      techStack: ['Golang', 'React', 'MySQL', 'Gemini API'],
      images: rgImages.slice(0, 2),
      github: null,
      demo: null,
      docs: null
    }
  ];

  const awards = [
    { 
      title: '1st Place Animation', 
      event: 'CORISINDO 2024', 
      year: '2024', 
      type: 'animation', 
      images: ['corisindo1.png'],
      video: 'https://youtu.be/7aKY4Xql_m0?si=vm-dye7N7IpUcKIS',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-600'
    },
    { 
      title: '1st Place Animation', 
      event: 'INDONERIS 2024', 
      year: '2024', 
      type: 'animation', 
      images: ['indoneris1.png'],
      video: 'https://youtu.be/H29Gu-5hZ1Q?si=u65zb9iu0b_e1PLd',
      icon: Star,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      title: '2nd Place Video Reels', 
      event: 'Dies Natalis 2023', 
      year: '2023', 
      type: 'reels', 
      images: ['reels.png'],
      video: 'https://youtu.be/APSZ_AvLlqU?si=OqCPkJ1URNYA_9SD',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      title: 'Juara 4 Komik Strip', 
      event: 'AOV 3rd Anniversary', 
      year: '2019', 
      type: 'komik',
      icon: Sparkles,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      title: 'Juara Harapan 2 Animation', 
      event: 'INDONERIS', 
      year: '2023', 
      type: 'animation',
      icon: Star,
      color: 'from-orange-500 to-red-500'
    }
  ];

  // Brand logo (SVG) di public/skills, atau ikon Font Awesome untuk yang tak berlogo.
  // `dark`: ikon gelap → dibalik jadi terang di dark mode. `wordmark`: logo sudah memuat nama.
  const skills = [
    // Bahasa
    { name: 'JavaScript', img: 'javascript.svg' },
    { name: 'TypeScript', img: 'typescript.svg' },
    { name: 'Python', img: 'python.svg' },
    { name: 'PHP', img: 'php.svg' },
    { name: 'Go', img: 'go.svg' },
    { name: 'Java', img: 'java.svg' },
    { name: 'C++', img: 'cpp.svg' },
    { name: 'Dart', img: 'dart.svg' },
    { name: 'HTML5', img: 'html5.svg' },
    { name: 'CSS3', img: 'css.svg' },
    // Framework & Library
    { name: 'React', img: 'react.svg' },
    { name: 'Next.js', img: 'nextjs.svg', dark: true },
    { name: 'Laravel', img: 'laravel.svg' },
    { name: 'Node.js', img: 'nodejs.svg' },
    { name: 'Vue.js', img: 'vue.svg' },
    { name: 'Tailwind CSS', img: 'tailwind.svg' },
    { name: 'Bootstrap', img: 'bootstrap.svg' },
    { name: 'Vite', img: 'vite.svg' },
    // Database & Tools
    { name: 'MySQL', img: 'mysql.svg' },
    { name: 'PostgreSQL', img: 'postgresql.svg' },
    { name: 'MongoDB', img: 'mongodb.svg' },
    { name: 'Git', img: 'git.svg' },
    { name: 'GitHub', img: 'github.svg', dark: true },
    { name: 'Docker', img: 'docker.svg' },
    { name: 'REST API', fa: 'fas fa-plug', color: '#10B981' },
    { name: 'AI-Assisted Dev', fa: 'fas fa-robot', color: '#8B5CF6' },
    // Desain
    { name: 'Adobe Photoshop', img: 'photoshop.svg' },
    { name: 'Adobe Illustrator', img: 'illustrator.svg' },
    { name: 'Canva', img: 'canva.svg' },
    { name: 'CapCut', img: 'capcut.svg', dark: true, wordmark: true },
    { name: 'Ibis Paint X', fa: 'fas fa-paint-brush', color: '#3B82F6' },
  ];

  // Refs untuk scroll animations
  const experienceRef = useRef(null);
  const awardsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeAward, setActiveAward] = useState(-1);

  // Scroll-based background color change (mengikuti tema)
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 0.9],
    theme === 'dark'
      ? ['#0f172a', '#1c1917', '#231a0d', '#1c1917', '#0f172a']
      : ['#ffffff', '#fef3c7', '#fed7aa', '#fef3c7', '#ffffff']
  );

  // Intersection Observer untuk step animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const step = parseInt(entry.target.dataset.step);
            setActiveStep(step);
          }
        });
      },
      { threshold: 0.5 }
    );

    const steps = document.querySelectorAll('.experience-step');
    steps.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  // Timeline data dengan animasi
  const experiences = [
    {
      title: 'Full-Stack Developer (MSIB Intern)',
      company: 'PT Ruangraya Indonesia · Remote',
      period: 'Sep 2024 – Dec 2024',
      icon: Code,
      logo: 'logo-ruangguru.png',
      color: 'from-orange-500 to-amber-500',
      achievements: [
        'Developed an AI-powered Smart Home Energy Management System to analyze energy consumption from CSV data',
        'Integrated Hugging Face TAPAS model and built chatbot using Gemini API for real-time interaction'
      ],
      images: rgImages.slice(2, 5)
    },
    {
      title: 'Typesetter Webtoon KR to JP',
      company: 'PT GREEN WIND CULTURE',
      period: 'October 2025 – March 2026',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500',
      achievements: [
        'Typesetting & Typography: Inserted translated Japanese text into panels, selectively choosing fonts and adjusting layouts based on the story\'s mood (tension, comedy, romance)',
        'Retouching, Redrawing & SFX: Erased original Korean text, seamlessly restored obscured backgrounds (cleaning), and artistically redesigned sound effects (SFX) into aesthetic Japanese characters'
      ],
      images: tsImages.slice(0, 3)
    },
    {
      title: 'Full-Stack Developer (Freelance)',
      company: 'Zona Belajar Indonesia · Remote',
      period: 'Jun 2026 – Jul 2026',
      icon: BookOpen,
      logo: 'logo-zb.png',
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Rebuilt an online tryout & e-learning platform into two Laravel 11 apps (admin panel + student app) on one shared MySQL database, shipped to production with GitHub Actions CI/CD auto-deploy on Hostinger',
        'Built the exam engine: section-based (subtest) scoring, timed try-outs, auto-grading, and per-section rankings & report breakdowns for both admins and students, plus one-click PDF report exports',
        'Added AI-assisted question import from PDF — parsing questions, answer keys, and explanations — with automatic image extraction and R2-backed media storage',
        'Hardened authentication: OTP email verification that leaves no half-created accounts, expiring password reset, and a real-time "awaiting activation" page that auto-logs users in once an admin approves them'
      ],
      images: zbImages.slice(0, 3)
    }
  ];

  return (
    <motion.div 
      className="relative min-h-screen"
      style={{ backgroundColor: bgColor }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <Navbar />
      <AnimatedBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-6 md:py-10">
        {/* Hero Section dengan Profile Card */}
        <section id="home" className="scroll-mt-20 min-h-[100svh] flex items-start pt-24 md:pt-28 pb-8">
          <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start justify-center">
            <ProfileCard photo="me.jpg" photoFallback="me2.png" />

            <ScrollAnimation direction="right" delay={0.3}>
              <div className="text-center lg:text-left max-w-xl">
                {/* Tinggi tetap 2 baris + teks rata bawah → gap ke deskripsi rapat & tanpa geser */}
                <motion.h1
                  className="text-4xl md:text-5xl font-black tracking-tight leading-[1.15] min-h-[2.3em] flex items-end justify-center lg:justify-start"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="block w-full">
                    <TypingText
                      texts={HERO_TITLES}
                      typeSpeed={65}
                      deleteSpeed={38}
                      pause={1600}
                      startDelay={600}
                      className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-amber-300 bg-clip-text text-transparent"
                    />
                  </span>
                </motion.h1>
                <motion.p
                  className="text-gray-600 dark:text-gray-300 text-lg mt-3 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Specializing in <span className="font-semibold text-amber-600">Golang</span> and <span className="font-semibold text-blue-500">React</span> with hands-on experience building scalable web applications and RESTful APIs.
                  Also passionate about visual storytelling and <span className="font-semibold text-pink-500">Graphic Design</span>, blending technical programming skills with creative expertise in digital illustration and webtoon typesetting.
                </motion.p>
                <motion.div 
                  className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md ring-1 ring-white/60 dark:ring-white/10 shadow-lg px-5 py-2 rounded-full text-amber-700 dark:text-amber-300 font-semibold flex items-center gap-2">
                    <Zap size={18} className="text-amber-500"/> Fast Learner
                  </div>
                  <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md ring-1 ring-white/60 dark:ring-white/10 shadow-lg px-5 py-2 rounded-full text-blue-600 dark:text-blue-300 font-semibold flex items-center gap-2">
                    <Cpu size={18} className="text-blue-500"/> Problem Solver
                  </div>
                  <div className="bg-white/70 dark:bg-slate-900/60 backdrop-blur-md ring-1 ring-white/60 dark:ring-white/10 shadow-lg px-5 py-2 rounded-full text-purple-600 dark:text-purple-300 font-semibold flex items-center gap-2">
                    <TrendingUp size={18} className="text-purple-500"/> 3.87 GPA
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <ScrollAnimation direction="up" delay={0.2}>
            <div className="mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
                <span className="w-10 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></span>
                Tech Stack & Core Skills
              </h2>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.02 }}
                    className="tech-badge bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 shadow-sm px-5 py-2.5 hover:shadow-md hover:scale-105 transition-all cursor-default flex items-center"
                    title={skill.name}
                  >
                    {skill.img ? (
                      <img
                        src={`./skills/${skill.img}`}
                        alt={skill.name}
                        loading="lazy"
                        className={`h-5 w-auto max-w-[110px] object-contain ${skill.dark ? 'dark:invert' : ''}`}
                      />
                    ) : (
                      <span className="text-lg leading-none"><i className={skill.fa} style={{ color: skill.color }}></i></span>
                    )}
                    {!skill.wordmark && <span className="ml-2">{skill.name}</span>}
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </section>

        {/* Enhanced Experience Section with Timeline Animation */}
        <section id="experience" className="scroll-mt-20" ref={experienceRef}>
          <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent inline-block">
                Experience
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Roadmap: jalan berkelok dengan pin lokasi */}
            <ExperienceTimeline experiences={experiences} activeStep={activeStep} />
          </div>
        </section>

        {/* Enhanced Awards Section with 3D Cards */}
        <section id="awards" className="scroll-mt-20 mb-20" ref={awardsRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent inline-block">
              Awards & Achievements
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 dark:text-gray-300 mt-3">Recognitions that highlight my dedication and excellence</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, idx) => {
              const IconComponent = award.icon || Award;
              return (
                <motion.div
                  key={idx}
                  className="relative group cursor-pointer"
                  initial={{ opacity: 0, y: 50, rotateY: -10 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={() => setActiveAward(idx)}
                  onMouseLeave={() => setActiveAward(-1)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className={`relative bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
                    activeAward === idx ? 'scale-105' : ''
                  }`}>
                    {/* Animated Background */}
                    <motion.div 
                      className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${award.color} rounded-full opacity-10`}
                      animate={{
                        scale: activeAward === idx ? [1, 1.2, 1] : 1,
                        rotate: activeAward === idx ? [0, 360] : 0
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      style={{ top: '-40px', right: '-40px' }}
                    />

                    {/* Year Badge */}
                    <motion.div 
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${award.color} text-white text-sm font-semibold mb-4`}
                      animate={{
                        scale: activeAward === idx ? 1.05 : 1
                      }}
                    >
                      <Clock size={12} />
                      {award.year}
                    </motion.div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div 
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${award.color} flex items-center justify-center flex-shrink-0`}
                        animate={{
                          rotate: activeAward === idx ? [0, 10, -10, 0] : 0
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <IconComponent size={24} className="text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gray-800 dark:text-white">{award.title}</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{award.event}</p>
                      </div>
                    </div>

                    {/* Achievement Type Tag */}
                    <div className="mb-4">
                      <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${award.color} bg-opacity-20 text-white font-medium`}>
                        {award.type.toUpperCase()}
                      </span>
                    </div>

                    {/* Video/Action Button */}
                    {award.video && (
                      <motion.a
                        href={award.video}
                        target="_blank"
                        className="inline-flex items-center gap-2 text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
                        whileHover={{ x: 5 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Trophy size={14} />
                        Watch Award Video
                        <ExternalLink size={12} />
                      </motion.a>
                    )}

                    {/* Image Preview */}
                    {award.images && award.images[0] && (
                      <motion.div 
                        className="mt-4 rounded-xl overflow-hidden"
                        initial={{ opacity: 0, height: 0 }}
                        whileInView={{ opacity: 1, height: 'auto' }}
                        transition={{ delay: 0.2 }}
                      >
                        <LazyImage
                          src={`./${award.images[0]}`}
                          alt={award.title}
                          className="w-full h-32 rounded-xl"
                          imgClassName="hover:scale-105 transition-transform duration-300"
                        />
                      </motion.div>
                    )}

                    {/* Animated Border */}
                    {activeAward === idx && (
                      <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Leadership Section with Enhanced Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-slate-800 dark:to-slate-800 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-2xl flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              Leadership & Organization
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                className="bg-white dark:bg-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Star size={16} className="text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Chairman - UKM LDK IMAM</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Nov 2023 – Oct 2024</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Led organization operations, managed cross-division collaboration, organized campus-scale events.</p>
              </motion.div>
              <motion.div
                className="bg-white dark:bg-slate-700 rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Multimedia Coordinator</h4>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Forum Asisten Praktikum · Aug 2024 – Aug 2025</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Coordinated multimedia content creation and managed visual communications.</p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-20">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
            <Code size={28}/> Featured Projects
          </h2>
          <div className="mb-16">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Education & Certification */}
        <section id="achievements" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="glass-card p-6">
                <h3 className="font-bold text-xl flex gap-2 items-center">
                  <BookOpen size={22}/> Education
                </h3>
                <p className="font-semibold mt-3 text-lg">Universitas AMIKOM Purwokerto</p>
                <p className="text-gray-600 dark:text-gray-300">Bachelor of Information Systems</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Jul 2022 – Apr 2026</p>
                <p className="text-amber-700 dark:text-amber-400 font-bold mt-2 text-xl">GPA: 3.87/4.00</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.4}>
              <div className="glass-card p-6">
                <h3 className="font-bold text-xl flex gap-2 items-center">
                  <CheckCircle size={22}/> Certification
                </h3>
                <p className="font-semibold mt-3">Fullstack Web Development MSIB Batch 7</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">PT Ruangraya Indonesia · Sep 2024 – Dec 2024</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">Built fullstack applications using Golang & React, developed RESTful APIs and frontend integrations.</p>
                <a href="https://s.id/watQk" target="_blank" 
                   className="text-amber-600 text-sm flex items-center gap-1 mt-3 hover:underline inline-flex group">
                  <ExternalLink size={14} className="group-hover:translate-x-1 transition"/> View Certificate
                </a>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-20">
          <div className="text-center py-8">
            <motion.div 
              className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-500/15 px-6 py-3 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Mail size={18} className="text-amber-600 dark:text-amber-400" />
              <span className="text-amber-700 dark:text-amber-300 font-medium">zikazabat@gmail.com</span>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </motion.div>
  );
}

export default App;