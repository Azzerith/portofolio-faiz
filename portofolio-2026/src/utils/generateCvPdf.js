import { jsPDF } from 'jspdf';
import { CONTACT } from '../data/cvData';

// ---------------------------------------------------------------------------
// Generator PDF CV ber-format ATS friendly.
// Memakai jsPDF primitive .text() → teks tetap SELECTABLE & bisa di-parse ATS
// (bukan hasil rasterisasi gambar). Satu kolom, font standar Helvetica,
// heading section jelas, auto page-break.
// ---------------------------------------------------------------------------

const INK = [26, 26, 26]; // #1a1a1a
const MUTED = [68, 68, 68]; // #444
const RULE = [150, 150, 150];

// Font standar jsPDF (Helvetica) hanya mendukung WinAnsi/Latin-1. Karakter di
// luar itu (mis. panah "→") memaksa encoding UTF-16 sehingga teks jadi tak
// terbaca ATS ((cid:0)). Sanitasi ke ASCII agar teks tetap selectable & parseable.
const S = (s = '') =>
  String(s)
    .replace(/→/g, '->')
    .replace(/←/g, '<-')
    .replace(/[—–]/g, '-')
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/…/g, '...')
    .replace(/[·•]/g, '-')
    .replace(/[^\x00-\xFF]/g, ''); // buang sisa karakter non-Latin-1

export function generateCvPdf(profile) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', compress: true });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const M = 48; // margin kiri/kanan/atas/bawah
  const contentW = pageW - M * 2;
  const c = CONTACT;

  let y = M;

  const setFont = (style = 'normal', size = 10, color = INK) => {
    doc.setFont('helvetica', style);
    doc.setFontSize(size);
    doc.setTextColor(color[0], color[1], color[2]);
  };

  const ensureSpace = (needed) => {
    if (y + needed > pageH - M) {
      doc.addPage();
      y = M;
    }
  };

  // Teks multi-baris dengan wrapping; return tinggi terpakai.
  const text = (str, { x = M, size = 10, style = 'normal', color = INK, lh = 1.35, maxW = contentW, align = 'left' } = {}) => {
    setFont(style, size, color);
    const lines = doc.splitTextToSize(S(str), maxW);
    const lineH = size * lh;
    for (const line of lines) {
      ensureSpace(lineH);
      const tx = align === 'center' ? pageW / 2 : x;
      doc.text(line, tx, y + size, { align });
      y += lineH;
    }
    return lines.length * lineH;
  };

  const sectionTitle = (title) => {
    y += 8;
    ensureSpace(24);
    setFont('bold', 11, INK);
    doc.text(S(title.toUpperCase()), M, y + 10);
    y += 15;
    doc.setDrawColor(RULE[0], RULE[1], RULE[2]);
    doc.setLineWidth(0.6);
    doc.line(M, y, pageW - M, y);
    y += 8;
  };

  // Baris dengan judul kiri (bold) + periode kanan (muted) pada baris yang sama.
  const headRow = (left, right) => {
    left = S(left);
    right = S(right);
    ensureSpace(16);
    setFont('bold', 10.5, INK);
    const rightW = right ? doc.getTextWidth(right) : 0;
    const leftMaxW = contentW - rightW - 12;
    const leftLines = doc.splitTextToSize(left, leftMaxW);
    // periode diletakkan sejajar baris pertama judul
    if (right) {
      setFont('normal', 9.5, MUTED);
      doc.text(right, pageW - M, y + 10.5, { align: 'right' });
    }
    setFont('bold', 10.5, INK);
    const lineH = 10.5 * 1.3;
    for (const line of leftLines) {
      ensureSpace(lineH);
      doc.text(line, M, y + 10.5);
      y += lineH;
    }
  };

  const subLine = (str) => {
    if (!str) return;
    text(str, { size: 9.5, style: 'italic', color: MUTED, lh: 1.3 });
    y += 1;
  };

  const bullets = (arr) => {
    setFont('normal', 9.8, INK);
    for (const b of arr) {
      const lineH = 9.8 * 1.32;
      const lines = doc.splitTextToSize(S(b), contentW - 14);
      lines.forEach((line, i) => {
        ensureSpace(lineH);
        if (i === 0) doc.text('•', M + 2, y + 9.8);
        doc.text(line, M + 14, y + 9.8);
        y += lineH;
      });
      y += 1.5;
    }
  };

  // ---------------- HEADER ----------------
  text(c.name, { size: 20, style: 'bold', align: 'center', lh: 1.1 });
  y += 2;
  text(profile.role.toUpperCase(), { size: 11, style: 'bold', color: MUTED, align: 'center', lh: 1.1 });
  y += 4;
  text([c.location, c.phone, c.email].join('   |   '), { size: 9, color: MUTED, align: 'center', lh: 1.3 });
  text([c.linkedin, c.github].join('   |   '), { size: 9, color: MUTED, align: 'center', lh: 1.3 });
  y += 6;
  doc.setDrawColor(INK[0], INK[1], INK[2]);
  doc.setLineWidth(1.2);
  doc.line(M, y, pageW - M, y);
  y += 2;

  // ---------------- SUMMARY ----------------
  sectionTitle('Professional Summary');
  text(profile.summary, { size: 10, lh: 1.4 });

  // ---------------- SKILLS ----------------
  sectionTitle('Skills');
  for (const s of profile.skills) {
    const lineH = 10 * 1.4;
    const label = S(`${s.group}: `);
    setFont('bold', 10, INK);
    const labelW = doc.getTextWidth(label);
    const valueLines = doc.splitTextToSize(S(s.items.join(', ')), contentW - labelW);
    ensureSpace(lineH);
    setFont('bold', 10, INK);
    doc.text(label, M, y + 10);
    setFont('normal', 10, INK);
    doc.text(valueLines[0], M + labelW, y + 10);
    y += lineH;
    for (let i = 1; i < valueLines.length; i++) {
      ensureSpace(lineH);
      doc.text(valueLines[i], M + labelW, y + 10);
      y += lineH;
    }
    y += 1;
  }

  // ---------------- EXPERIENCE ----------------
  sectionTitle('Work Experience');
  profile.experience.forEach((e, idx) => {
    if (idx > 0) y += 4;
    headRow(e.title, e.period);
    subLine([e.company, e.location].filter(Boolean).join(' · '));
    bullets(e.bullets);
  });

  // ---------------- PROJECTS ----------------
  if (profile.projects && profile.projects.length) {
    sectionTitle('Projects');
    profile.projects.forEach((p, idx) => {
      if (idx > 0) y += 4;
      headRow(p.name, '');
      subLine([p.tech, p.link].filter(Boolean).join(' · '));
      bullets(p.bullets || []);
    });
  }

  // ---------------- AWARDS ----------------
  if (profile.awards && profile.awards.length) {
    sectionTitle('Awards & Achievements');
    bullets(profile.awards.map((a) => `${a.title} — ${a.event} (${a.year})`));
  }

  // ---------------- CERTIFICATIONS ----------------
  if (profile.certifications && profile.certifications.length) {
    sectionTitle('Certifications');
    profile.certifications.forEach((ct, idx) => {
      if (idx > 0) y += 3;
      headRow(ct.name, ct.period);
      subLine(ct.issuer);
    });
  }

  // ---------------- EDUCATION ----------------
  sectionTitle('Education');
  profile.education.forEach((ed, idx) => {
    if (idx > 0) y += 3;
    headRow(ed.school, ed.period);
    subLine([ed.degree, ed.detail].filter(Boolean).join(' · '));
  });

  // ---------------- ORGANIZATION ----------------
  if (profile.organization && profile.organization.length) {
    sectionTitle('Organization & Leadership');
    profile.organization.forEach((o, idx) => {
      if (idx > 0) y += 4;
      headRow(o.title, o.period);
      subLine(o.org);
      if (o.detail) bullets([o.detail]);
    });
  }

  const fileName = `CV-${c.name.replace(/\s+/g, '-')}-${profile.fileTag}.pdf`;
  doc.save(fileName);
}
