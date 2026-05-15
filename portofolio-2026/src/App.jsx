import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import ScrollAnimation from './components/ScrollAnimation';
import ProjectCard from './components/ProjectCard';
import AwardCard from './components/AwardCard';
import { Code, Briefcase, Calendar, Users, BookOpen, CheckCircle, Zap, Cpu, TrendingUp, ExternalLink, Mail, Star, Trophy, Sparkles, Award, Clock } from 'lucide-react';

function App() {
  const tpqImages = ['tpq1.png', 'tpq2.png', 'tpq3.png', 'tpq4.png'];
  const faImages = ['fa1.png', 'fa2.png', 'fa3.png', 'fa4.png', 'fa5.png'];
  const rgImages = ['rg1.png', 'rg2.png', 'rg3.png', 'rg4.png', 'rg5.png'];
  const tsImages = ['ts1.png', 'ts2.png', 'ts3.png'];

  const projects = [
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

  const skills = ['Golang', 'React', 'Tailwind', 'MySQL', 'Gin', 'JavaScript', 'Git', 'REST API', 'HTML/CSS', 'Adobe Photoshop', 'Adobe Illustrator', 'Capcut Windows', 'Ibis Paint X Android', 'Canva'];

  // Refs untuk scroll animations
  const experienceRef = useRef(null);
  const awardsRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeAward, setActiveAward] = useState(-1);

  // Scroll-based background color change
  const { scrollYProgress } = useScroll();
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.5, 0.7, 0.9],
    ['#ffffff', '#fef3c7', '#fed7aa', '#fef3c7', '#ffffff']
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
      color: 'from-blue-500 to-cyan-500',
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
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Typesetting & Typography: Inserted translated Japanese text into panels, selectively choosing fonts and adjusting layouts based on the story\'s mood (tension, comedy, romance)',
        'Retouching, Redrawing & SFX: Erased original Korean text, seamlessly restored obscured backgrounds (cleaning), and artistically redesigned sound effects (SFX) into aesthetic Japanese characters'
      ],
      images: tsImages.slice(0, 3)
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
      <ParticleBackground />
      <div className="pattern-overlay"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-6 md:py-10">
        {/* Hero Section dengan Profile Card */}
        <section id="home" className="scroll-mt-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center mb-20 pt-16 md:pt-20">
            <ProfileCard photo="me.jpg" photoFallback="me2.png" />
            
            <ScrollAnimation direction="right" delay={0.3}>
              <div className="text-center lg:text-left max-w-xl">
                <motion.h1 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-800 via-amber-600 to-yellow-800 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Full-Stack Web Developer & Graphic Designer
                </motion.h1>
                <motion.p 
                  className="text-gray-600 text-lg mt-4 leading-relaxed"
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
                  <div className="bg-amber-100 px-5 py-2 rounded-full text-amber-700 font-semibold flex items-center gap-2">
                    <Zap size={18}/> Fast Learner
                  </div>
                  <div className="bg-blue-100 px-5 py-2 rounded-full text-blue-700 font-semibold flex items-center gap-2">
                    <Cpu size={18}/> Problem Solver
                  </div>
                  <div className="bg-purple-100 px-5 py-2 rounded-full text-purple-700 font-semibold flex items-center gap-2">
                    <TrendingUp size={18}/> 3.87 GPA
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
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.03 }}
                    className="tech-badge bg-white border border-gray-200 shadow-sm px-5 py-2.5 hover:shadow-md hover:scale-105 transition-all cursor-default"
                  >
                    <span className="text-lg">
                      {skill === 'Golang' && <i className="fab fa-golang text-[#00ADD8]"></i>}
                      {skill === 'React' && <i className="fab fa-react text-[#61DAFB]"></i>}
                      {skill === 'Tailwind' && <i className="fab fa-css3-alt text-[#06B6D4]"></i>}
                      {skill === 'MySQL' && <i className="fas fa-database text-[#4479A1]"></i>}
                      {skill === 'Gin' && <i className="fas fa-code-branch text-[#00ADD8]"></i>}
                      {skill === 'JavaScript' && <i className="fab fa-js text-[#F7DF1E]"></i>}
                      {skill === 'Git' && <i className="fab fa-git-alt text-[#F05032]"></i>}
                      {skill === 'REST API' && <i className="fas fa-plug text-[#4CAF50]"></i>}
                      {skill === 'HTML/CSS' && <i className="fab fa-html5 text-[#E34F26]"></i>}
                      {skill === 'Adobe Photoshop' && <i className="fas fa-palette text-[#31A8FF]"></i>}
                      {skill === 'Adobe Illustrator' && <i className="fas fa-pen-nib text-[#FF9A00]"></i>}
                      {skill === 'Capcut Windows' && <i className="fas fa-video text-gray-800"></i>}
                      {skill === 'Ibis Paint X Android' && <i className="fas fa-paint-brush text-blue-500"></i>}
                      {skill === 'Canva' && <i className="fas fa-object-group text-[#00C4CC]"></i>}
                    </span>
                    <span className="ml-2">{skill}</span>
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

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 via-orange-400 to-amber-300 rounded-full hidden md:block"></div>
              
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  data-step={idx}
                  className={`experience-step relative mb-16 ${idx % 2 === 0 ? 'md:pr-[50%]' : 'md:pl-[50%] md:mt-[-80px]'}`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: false, amount: 0.3 }}
                >
                  {/* Timeline Dot */}
                  <motion.div 
                    className={`absolute top-0 ${idx % 2 === 0 ? 'md:right-[-8px]' : 'md:left-[-8px]'} hidden md:flex items-center justify-center w-4 h-4 rounded-full bg-gradient-to-r ${exp.color} shadow-lg`}
                    animate={{
                      scale: activeStep === idx ? [1, 1.5, 1] : 1,
                      boxShadow: activeStep === idx ? '0 0 20px rgba(245, 158, 11, 0.6)' : '0 0 0px rgba(245, 158, 11, 0)'
                    }}
                    transition={{ duration: 1, repeat: activeStep === idx ? Infinity : 0 }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    className={`bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 ${
                      activeStep === idx ? 'scale-[1.02]' : ''
                    }`}
                    whileHover={{ y: -5 }}
                  >
                    {/* Header dengan gradient */}
                    <div className={`bg-gradient-to-r ${exp.color} p-6 text-white`}>
                      <div className="flex items-center gap-3 mb-2">
                        <exp.icon size={28} />
                        <h3 className="text-2xl font-bold">{exp.title}</h3>
                      </div>
                      <p className="text-white text-opacity-90 flex items-center gap-2">
                        <Briefcase size={16} /> {exp.company}
                      </p>
                      <p className="text-white text-opacity-75 flex items-center gap-2 mt-1">
                        <Calendar size={14} /> {exp.period}
                      </p>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">

                      {/* Achievements */}
                      <div className="space-y-3 mb-6">
                        {exp.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle size={14} className="text-green-600" />
                            </div>
                            <p className="text-gray-700 text-sm">{achievement}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Image Gallery */}
                      {exp.images && exp.images.length > 0 && (
                        <motion.div 
                          className="grid grid-cols-3 gap-2"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {exp.images.map((img, idx) => (
                            <motion.img
                              key={idx}
                              src={`./${img}`}
                              className="w-full h-24 rounded-lg object-cover shadow-md hover:shadow-xl transition-all cursor-pointer"
                              alt="project"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.2 }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </div>

                    {/* Progress indicator */}
                    {activeStep === idx && (
                      <motion.div 
                        className="h-1 bg-gradient-to-r from-amber-400 to-orange-500"
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
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
            <p className="text-gray-600 mt-3">Recognitions that highlight my dedication and excellence</p>
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
                  viewport={{ once: false, amount: 0.2 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  onMouseEnter={() => setActiveAward(idx)}
                  onMouseLeave={() => setActiveAward(-1)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  <div className={`relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${
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
                        <h3 className="font-bold text-lg text-gray-800">{award.title}</h3>
                        <p className="text-gray-500 text-sm">{award.event}</p>
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
                        <img 
                          src={`./${award.images[0]}`} 
                          alt={award.title}
                          className="w-full h-32 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
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
            className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 shadow-lg"
          >
            <h3 className="font-bold text-2xl flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl flex items-center justify-center">
                <Users size={20} className="text-white" />
              </div>
              Leadership & Organization
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div 
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Star size={16} className="text-amber-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Chairman - UKM LDK IMAM</h4>
                </div>
                <p className="text-sm text-gray-500 mb-2">Nov 2023 – Oct 2024</p>
                <p className="text-gray-600 text-sm">Led organization operations, managed cross-division collaboration, organized campus-scale events.</p>
              </motion.div>
              <motion.div 
                className="bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all"
                whileHover={{ x: 5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Sparkles size={16} className="text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-lg">Multimedia Coordinator</h4>
                </div>
                <p className="text-sm text-gray-500 mb-2">Forum Asisten Praktikum · Aug 2024 – Aug 2025</p>
                <p className="text-gray-600 text-sm">Coordinated multimedia content creation and managed visual communications.</p>
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
                <p className="text-gray-600">Bachelor of Information Systems</p>
                <p className="text-gray-500 text-sm mt-1">Jul 2022 – Apr 2026</p>
                <p className="text-amber-700 font-bold mt-2 text-xl">GPA: 3.87/4.00</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.4}>
              <div className="glass-card p-6">
                <h3 className="font-bold text-xl flex gap-2 items-center">
                  <CheckCircle size={22}/> Certification
                </h3>
                <p className="font-semibold mt-3">Fullstack Web Development MSIB Batch 7</p>
                <p className="text-gray-600 text-sm">PT Ruangraya Indonesia · Sep 2024 – Dec 2024</p>
                <p className="text-gray-500 text-sm mt-2">Built fullstack applications using Golang & React, developed RESTful APIs and frontend integrations.</p>
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
              className="inline-flex items-center gap-2 bg-amber-100 px-6 py-3 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Mail size={18} className="text-amber-600" />
              <span className="text-amber-700 font-medium">zikazabat@gmail.com</span>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </motion.div>
  );
}

export default App;