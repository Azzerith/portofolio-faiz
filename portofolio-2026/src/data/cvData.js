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
    'Full-Stack Web Developer with hands-on experience building large-scale enterprise ERP systems, e-learning platforms, and cross-platform apps using Golang microservices, Next.js, React, Laravel, and Flutter. On a production pharmaceutical ERP, shipped 1,300+ commits across the Go backend and Next.js frontend, owning end-to-end modules spanning Warehouse Management (WMS), Manufacturing, HRIS/KPI performance management, Procurement, Finance dashboards, and Quality (QC/CAPA). Strong in REST API design, relational and document databases, multi-level approval workflows, data visualization, application security, and CI/CD auto-deployment. Fast learner and problem solver with a Bachelor in Information Systems (GPA 3.87).',
  skills: [
    { group: 'Languages', items: ['Go (Golang)', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Dart', 'Java', 'C++', 'HTML5', 'CSS3'] },
    { group: 'Frameworks & Libraries', items: ['Next.js', 'React', 'Node.js', 'Laravel', 'Flutter', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Alpine.js', 'Vite'] },
    { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
    { group: 'Tools & Practices', items: ['Git', 'GitHub', 'Docker', 'REST API', 'CI/CD (GitHub Actions)', 'Microservices', 'Architecture Decision Records (ADR)'] },
    { group: 'AI-Assisted Development', items: ['Cursor', 'GitHub Copilot', 'Claude / Claude Code', 'ChatGPT', 'Prompt Engineering', 'LLM API Integration (Gemini, Hugging Face)'] },
  ],
  experience: [
    {
      title: 'Full-Stack Developer (Full-time)',
      company: 'PT Bharata Internasional Pharmaceutical',
      location: 'On-site (WFO)',
      period: 'Jun 2026 – Present',
      bullets: [
        'Core full-stack engineer on a production pharmaceutical ERP: 1,300+ commits across the Go microservices backend (bip-erp) and Next.js frontend (erp-frontend), plus 230+ architecture-decision records (ADR) & API-contract documents and 50+ commits on the MyBharata Flutter mobile app.',
        'Owned the Warehouse Management (WMS) & Manufacturing modules end-to-end (~11 menus, ~60 REST endpoints): master data, stock ledger, inbound/outbound, production, and purchase orders, plus marketplace shipping-label (resi) automation with TikTok & Shopee schedulers.',
        'Built the HRIS KPI / Performance-Management module: a configurable scoring engine (hit/miss & directional-ramp scoring, weighted targets, configurable book-closing & pass thresholds) with auto-computed metrics (ticket funnels, turnover, budget variance, cash forecast, team & individual breakdowns) and full config-audit history for Directors/IT.',
        'Delivered an ERP-native Procurement suite — goods requests, purchase orders, goods receipt, vendor contracts & savings register — with position-based multi-level approvals and director escalation.',
        'Built the Finance (FAT) analytics dashboards with interactive AR/AP aging charts, receivable-trend lines, per-store sales, and role-scoped KPI cards; and the pharmaceutical Quality (QC) module — QC complaints, CAPA register with approval workflow & evidence, Incoming Inspection, and Batch Release queue.',
        'Built the Program Culture / Bharata Club feature end-to-end (dynamic form builder, club CRUD, QR-based attendance, recurring schedules, approval & scoring), exposing REST APIs consumed by the MyBharata Flutter app.',
        'Shipped two HRIS self-service features — Attendance Correction and Shift/Day Exchange — each with multi-level SPV–HR approval routing, eligibility & anti-fraud validation, and a partner-consent flow.',
      ],
    },
    {
      title: 'Full-Stack Developer (Freelance)',
      company: 'Zona Belajar Indonesia',
      location: 'Remote',
      period: 'Jun 2026 – Present',
      bullets: [
        'Rebuilt an online tryout & e-learning platform into two Laravel 11 apps (admin panel + student app) sharing one MySQL database, shipped to production with GitHub Actions CI/CD auto-deploy on Hostinger.',
        'Built the exam engine: section-based (subtest) scoring, timed try-outs, auto-grading, multiple-answer-key support, per-section rankings & report breakdowns, plus one-click PDF report exports.',
        'Built a Premium subscription subsystem (student + admin): package catalog, per-package locked materials & report cards, multi-attempt quotas, promotional banners, and payment verification with bank-account selection and proof upload.',
        'Added a Cognitive Potential Test (TPK) scoring type with automatic IQ estimation (score interpolation) and per-participant reports.',
        'Implemented Web Push notifications so admins get payment-verification alerts on their phones even with the browser closed, plus event-driven instant notifications.',
        'Hardened security across both apps: login/reset rate-limiting, stored-XSS sanitization of question & material content, answer-key leak prevention during live exams, account-takeover protection, and honeypot anti-bot registration.',
        'Added AI-assisted question import from PDF (questions, answer keys, explanations) with automatic image extraction and Cloudflare R2-backed media storage, plus scheduled finalization of expired/abandoned attempts.',
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
      name: 'Enterprise ERP — Pharmaceutical (WMS, Manufacturing, HRIS, Finance, QC)',
      tech: 'Golang (microservices), Next.js, MongoDB, Docker, REST API',
      bullets: [
        'Owned multiple end-to-end modules — WMS & Manufacturing, HRIS KPI/performance, Procurement, Finance dashboards, and Quality (QC/CAPA) — plus HRIS self-service flows, across 1,300+ commits.',
      ],
    },
    {
      name: 'MyBharata — Employee Super-App (Mobile)',
      tech: 'Flutter, Dart, REST API',
      bullets: [
        'Contributed to the cross-platform employee app: home dashboard with attendance status & notifications, Program Culture event feed, and QR-based attendance scanning integrated with the ERP backend.',
      ],
    },
    {
      name: 'Zona Belajar — Online Tryout & E-Learning Platform',
      tech: 'Laravel, PHP, MySQL, Alpine.js, Tailwind CSS',
      link: 'https://zona-belajar.com',
      bullets: [
        'Two Laravel 11 apps on a shared MySQL database with timed section-based exams, auto-grading, a Premium subscription subsystem, TPK/IQ estimation, Web Push, AI PDF import, and CI/CD auto-deploy. Live in production.',
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
