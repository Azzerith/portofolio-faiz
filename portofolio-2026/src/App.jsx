import { motion } from 'framer-motion';
import ParticleBackground from './components/ParticleBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProfileCard from './components/ProfileCard';
import ScrollAnimation from './components/ScrollAnimation';
import ProjectCard from './components/ProjectCard';
import AwardCard from './components/AwardCard';
import { Code, Briefcase, Calendar, Users, BookOpen, CheckCircle, Zap, Cpu, TrendingUp, ExternalLink, Mail } from 'lucide-react';

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
      video: 'https://youtu.be/7aKY4Xql_m0?si=vm-dye7N7IpUcKIS'
    },
    { 
      title: '1st Place Animation', 
      event: 'INDONERIS 2024', 
      year: '2024', 
      type: 'animation', 
      images: ['indoneris1.png'],
      video: 'https://youtu.be/H29Gu-5hZ1Q?si=u65zb9iu0b_e1PLd'
    },
    { 
      title: '2nd Place Video Reels', 
      event: 'Dies Natalis 2023', 
      year: '2023', 
      type: 'reels', 
      images: ['reels.png'],
      video: 'https://youtu.be/APSZ_AvLlqU?si=OqCPkJ1URNYA_9SD'
    },
    { 
      title: 'Juara 4 Komik Strip', 
      event: 'AOV 3rd Anniversary', 
      year: '2019', 
      type: 'komik'
    },
    { 
      title: 'Juara Harapan 2 Animation', 
      event: 'INDONERIS', 
      year: '2023', 
      type: 'animation'
    }
  ];

  const skills = ['Golang', 'React', 'Tailwind', 'MySQL', 'Gin', 'JavaScript', 'Git', 'REST API', 'HTML/CSS', 'Adobe Photoshop', 'Adobe Illustrator', 'Capcut Windows', 'Ibis Paint X Android', 'Canva'];

  return (
    <div className="relative min-h-screen bg-white">
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

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-20">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <ScrollAnimation direction="left" delay={0.3}>
              <div className="glass-card p-6 md:p-8">
                <h2 className="text-2xl font-bold flex gap-2 mb-6">
                  <Briefcase size={26}/> Experience
                </h2>
                <div className="border-l-4 border-amber-400 pl-5 mb-6">
                  <h3 className="text-xl font-semibold">Typesetter Webtoon KR to JP</h3>
                  <p className="text-amber-600 font-medium">PT GREEN WIND CULTURE</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar size={14}/> Oktober 2025 – Maret 2026
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                    <li><span className="font-medium text-gray-900">Typesetting & Typography:</span> Inserted translated Japanese text into panels, selectively choosing fonts and adjusting layouts based on the story's mood (tension, comedy, romance).</li>
                    <li><span className="font-medium text-gray-900">Retouching, Redrawing & SFX:</span> Erased original Korean text, seamlessly restored obscured backgrounds (cleaning), and artistically redesigned sound effects (SFX) into aesthetic Japanese characters.</li>
                  </ul>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {tsImages.slice(0, 3).map((img, idx) => (
                    <img key={idx} src={`./${img}`} className="w-full h-20 rounded-xl object-cover shadow-md" alt="project"/>
                  ))}
                </div>
                <br></br>
                <div className="border-l-4 border-amber-400 pl-5 mb-6">
                  <h3 className="text-xl font-semibold">Full-Stack Developer (MSIB Intern)</h3>
                  <p className="text-amber-600 font-medium">PT Ruangraya Indonesia · Remote</p>
                  <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                    <Calendar size={14}/> Sep 2024 – Dec 2024
                  </p>
                  <ul className="mt-3 space-y-2 text-gray-700 list-disc list-inside">
                    <li>Developed an AI-powered Smart Home Energy Management System to analyze energy consumption from CSV data</li>
                    <li>Integrated Hugging Face TAPAS model and built chatbot using Gemini API for real-time interaction</li>
                  </ul>
                </div>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  {rgImages.slice(2, 5).map((img, idx) => (
                    <img key={idx} src={`./${img}`} className="w-full h-20 rounded-xl object-cover shadow-md" alt="project"/>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right" delay={0.4}>
              <div className="glass-card p-6 md:p-8">
                <h2 className="text-2xl font-bold flex gap-2 mb-6">
                  <Users size={26}/> Awards & Achievements
                </h2>
                <div className="space-y-3">
                  {awards.map((award, i) => (
                    <AwardCard key={i} award={award} index={i} />
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <h3 className="font-bold flex items-center gap-2 mb-2">Leadership</h3>
                  <p className="text-sm"><span className="font-semibold">Chairman - UKM LDK IMAM</span> (Nov 2023 – Oct 2024)</p>
                  <p className="text-sm text-gray-600 mt-1">Led organization operations, managed cross-division collaboration, organized campus-scale events.</p>
                  <p className="text-sm mt-2"><span className="font-semibold">Multimedia Coordinator - Forum Asisten Praktikum</span> (Aug 2024 – Aug 2025)</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
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
    </div>
  );
}

export default App;