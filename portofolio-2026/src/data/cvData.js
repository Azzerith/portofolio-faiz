// Data CV untuk fitur export ATS (Applicant Tracking System) friendly.
// Dua profil profesi: Full-Stack Developer & Graphic Designer.
// Format sengaja plain-text / terstruktur agar mudah di-parse mesin ATS.

export const CONTACT = {
  name: 'Muhammad Faiz Alfi Rahman',
  phone: '+62 812 2947 3327',
  email: 'zikazabat@gmail.com',
  location: 'Banyumas, Jawa Tengah, Indonesia',
  linkedin: 'linkedin.com/in/muhammad-faiz-alfi-rahman-b49030277',
  github: 'github.com/Azzerith',
};

const EDUCATION = [
  {
    school: 'Universitas AMIKOM Purwokerto',
    degree: 'Bachelor of Information Systems',
    period: 'Jul 2022 – Apr 2026',
    detail: 'GPA: 3.87 / 4.00',
  },
];

// ---------------------------------------------------------------------------
// PROFIL 1 — FULL-STACK DEVELOPER
// ---------------------------------------------------------------------------
const FULLSTACK = {
  key: 'fullstack',
  label: 'Full-Stack Developer',
  role: 'Full-Stack Web Developer',
  fileTag: 'Fullstack-Developer',
  summary:
    'Full-Stack Web Developer with hands-on experience building enterprise ERP systems, e-learning platforms, and internal tooling using Golang microservices, Next.js, React, and Laravel. Shipped 200+ commits across backend and frontend within two months on a production ERP. An AI-assisted ("vibe coding") developer who leverages Cursor, GitHub Copilot, and Claude to ship high-quality features faster. Strong in REST API design, relational and document databases, multi-level approval workflows, and CI/CD auto-deployment. Fast learner and problem solver with a Bachelor in Information Systems (GPA 3.87).',
  skills: [
    { group: 'Languages', items: ['Go (Golang)', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C++', 'Dart', 'HTML5', 'CSS3'] },
    { group: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Node.js', 'Laravel', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Alpine.js', 'Vite'] },
    { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { group: 'Tools & Practices', items: ['Git', 'GitHub', 'Docker', 'REST API', 'CI/CD (GitHub Actions)', 'Microservices'] },
    { group: 'AI-Assisted / Vibe Coding', items: ['Cursor', 'GitHub Copilot', 'Claude / Claude Code', 'ChatGPT', 'Prompt Engineering', 'AI Pair Programming', 'LLM API Integration (Gemini, Hugging Face)'] },
  ],
  experience: [
    {
      title: 'Full-Stack Developer (Full-time)',
      company: 'PT Bharata Internasional Pharmaceutical',
      location: 'On-site (WFO)',
      period: 'Jun 2026 – Present',
      bullets: [
        'Engineer on a Go microservices + Next.js enterprise ERP; shipped 200+ commits across backend (bip-erp) and frontend (erp-frontend) within the first two months.',
        'Owned the entire WMS / Manufacture module end-to-end: scaffolded the service and delivered ~11 menus and ~60 REST endpoints spanning master data, stock ledger, inbound/outbound, production, and purchase orders.',
        'Integrated marketplace shipping-label (resi) automation with TikTok and Shopee schedulers.',
        'Built the Attendance Correction HRIS feature from scratch: 6 REST endpoints and 2 UI pages with multi-level SPV–HR approval routing, an H-7 correction window, and anti-fraud validation.',
        'Built the Shift/Day Exchange HRIS feature: 6 endpoints and 2 pages with calendar-based scheduling, eligibility validation, and multi-level approvals including a partner-consent flow.',
      ],
    },
    {
      title: 'Full-Stack Developer (Freelance)',
      company: 'Zona Belajar Indonesia',
      location: 'Remote',
      period: 'Jun 2026 – Jul 2026',
      bullets: [
        'Rebuilt an online tryout & e-learning platform into two Laravel 11 apps (admin panel + student app) sharing one MySQL database, shipped to production with GitHub Actions CI/CD auto-deploy on Hostinger.',
        'Built the exam engine: section-based (subtest) scoring, timed try-outs, auto-grading, per-section rankings & report breakdowns, plus one-click PDF report exports.',
        'Added AI-assisted question import from PDF (questions, answer keys, explanations) with automatic image extraction and Cloudflare R2-backed media storage.',
        'Hardened authentication: OTP email verification, expiring password reset, and a real-time "awaiting activation" page that auto-logs users in on admin approval.',
      ],
    },
    {
      title: 'Full-Stack Developer (MSIB Intern)',
      company: 'PT Ruangraya Indonesia (Ruangguru)',
      location: 'Remote',
      period: 'Sep 2024 – Dec 2024',
      bullets: [
        'Developed an AI-powered Smart Home Energy Management System to analyze energy consumption from CSV data.',
        'Integrated the Hugging Face TAPAS model and built a chatbot using the Gemini API for real-time interaction.',
        'Built RESTful APIs and frontend integrations with Golang and React.',
      ],
    },
  ],
  projects: [
    {
      name: 'Enterprise ERP — HRIS & Warehouse Management System (WMS)',
      tech: 'Golang, Next.js, MongoDB, Docker, REST API',
      bullets: [
        'Scaffolded and owned the WMS/Manufacture module (~11 menus, ~60 REST endpoints) plus two HRIS features with multi-level approval workflows.',
      ],
    },
    {
      name: 'Zona Belajar — Online Tryout & E-Learning Platform',
      tech: 'Laravel, PHP, MySQL, Alpine.js, Tailwind CSS',
      link: 'https://zona-belajar.com',
      bullets: [
        'Two Laravel 11 apps on a shared MySQL database with timed section-based exams, auto-grading, AI PDF import, and CI/CD auto-deploy. Live in production.',
      ],
    },
    {
      name: 'TPQ Financial Management & Donation Platform',
      tech: 'Golang, React, Tailwind CSS, MySQL',
      link: 'https://github.com/Azzerith/tpq_asysyafii',
      bullets: [
        'Web-based financial system replacing manual recording with multi-role auth (Super Admin, Admin, Wali, Public); achieved ~100% digitalization.',
      ],
    },
    {
      name: 'Forum Asisten Attendance & Honorarium System',
      tech: 'Golang, React, Tailwind CSS, MySQL',
      link: 'https://github.com/Azzerith/forum_asisten',
      bullets: [
        'Digitized attendance & honorarium tracking with RESTful APIs and role-based access, reducing recap time from 2 days to under 2 hours.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Fullstack Web Development — MSIB Batch 7',
      issuer: 'PT Ruangraya Indonesia (Ruangguru)',
      period: 'Sep 2024 – Dec 2024',
    },
  ],
  organization: [
    {
      title: 'Chairman — UKM LDK IMAM',
      org: 'Universitas AMIKOM Purwokerto',
      period: 'Nov 2023 – Oct 2024',
      detail: 'Led organization operations, managed cross-division collaboration, and organized campus-scale events.',
    },
  ],
  education: EDUCATION,
};

// ---------------------------------------------------------------------------
// PROFIL 2 — GRAPHIC DESIGNER
// ---------------------------------------------------------------------------
const DESIGN = {
  key: 'design',
  label: 'Graphic Designer',
  role: 'Graphic Designer & Visual Storyteller',
  fileTag: 'Graphic-Designer',
  summary:
    'Graphic Designer and visual storyteller with award-winning experience in digital illustration, 2D animation, webtoon typesetting, and social media content. Professional webtoon typesetter (KR→JP) handling typography, retouching, redrawing, and SFX redesign. Multiple 1st-place wins in national animation competitions. Skilled with Adobe Photoshop, Illustrator, Canva, CapCut, and Ibis Paint X, blending creative expertise with a technical background in Information Systems.',
  skills: [
    { group: 'Design & Illustration', items: ['Adobe Photoshop', 'Adobe Illustrator', 'Ibis Paint X', 'Canva', 'Digital Illustration', 'Typography'] },
    { group: 'Video & Motion', items: ['CapCut', '2D Animation', 'Video Editing', 'Reels / Short-form Content'] },
    { group: 'Specialties', items: ['Webtoon Typesetting', 'Retouching & Redrawing', 'SFX Lettering', 'Comic / Manga Localization', 'Visual Branding'] },
    { group: 'Supporting Tech', items: ['HTML5', 'CSS3', 'Tailwind CSS', 'Basic Web Design'] },
  ],
  experience: [
    {
      title: 'Webtoon Typesetter (KR → JP)',
      company: 'PT Green Wind Culture',
      location: 'Remote',
      period: 'Oct 2025 – Mar 2026',
      bullets: [
        'Typesetting & typography: inserted translated Japanese text into panels, selecting fonts and adjusting layouts to match each scene\'s mood (tension, comedy, romance).',
        'Retouching, redrawing & SFX: erased original Korean text, seamlessly restored obscured backgrounds (cleaning), and artistically redesigned sound effects into aesthetic Japanese lettering.',
      ],
    },
    {
      title: 'Multimedia Coordinator',
      company: 'Forum Asisten Praktikum',
      location: 'Universitas AMIKOM Purwokerto',
      period: 'Aug 2024 – Aug 2025',
      bullets: [
        'Coordinated multimedia content creation and managed visual communications for the organization.',
        'Produced posters, social media assets, and video content for events and announcements.',
      ],
    },
  ],
  projects: [
    {
      name: 'Webtoon Localization (KR → JP)',
      tech: 'Adobe Photoshop, Typography, SFX Lettering',
      bullets: [
        'End-to-end typesetting, cleaning, redrawing, and SFX redesign for Japanese webtoon releases.',
      ],
    },
    {
      name: 'Award-Winning 2D Animations',
      tech: 'Animation, Storyboarding, Video Editing',
      bullets: [
        'Produced original animated shorts that won 1st place at CORISINDO 2024 and INDONERIS 2024.',
      ],
    },
  ],
  awards: [
    { title: '1st Place — Animation', event: 'CORISINDO 2024', year: '2024' },
    { title: '1st Place — Animation', event: 'INDONERIS 2024', year: '2024' },
    { title: '2nd Place — Video Reels', event: 'Dies Natalis 2023', year: '2023' },
    { title: 'Runner-up (Harapan 2) — Animation', event: 'INDONERIS', year: '2023' },
    { title: '4th Place — Comic Strip', event: 'AOV 3rd Anniversary', year: '2019' },
  ],
  organization: [
    {
      title: 'Multimedia Coordinator',
      org: 'Forum Asisten Praktikum',
      period: 'Aug 2024 – Aug 2025',
      detail: 'Coordinated multimedia content creation and managed visual communications.',
    },
    {
      title: 'Chairman — UKM LDK IMAM',
      org: 'Universitas AMIKOM Purwokerto',
      period: 'Nov 2023 – Oct 2024',
      detail: 'Led organization operations and organized campus-scale events including their visual/creative direction.',
    },
  ],
  education: EDUCATION,
};

export const CV_PROFILES = { fullstack: FULLSTACK, design: DESIGN };
