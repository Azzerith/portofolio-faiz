import { useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, Code, Palette, Download } from 'lucide-react';
import { CV_PROFILES } from '../data/cvData';
import { generateCvPdf } from '../utils/generateCvPdf';


const OPTIONS = [
  {
    key: 'fullstack',
    icon: Code,
    title: 'Full-Stack Developer',
    desc: 'Golang, Next.js, React, Laravel — ERP, e-learning & backend APIs.',
    accent: 'from-emerald-500 to-teal-600',
    ring: 'hover:border-emerald-400',
  },
  {
    key: 'design',
    icon: Palette,
    title: 'Graphic Designer',
    desc: 'Ilustrasi, animasi, webtoon typesetting & konten visual.',
    accent: 'from-pink-500 to-rose-500',
    ring: 'hover:border-pink-400',
  },
];

const CVExport = ({ className = '', compact = false }) => {
  const [open, setOpen] = useState(false);

  const handlePick = (key) => {
    const profile = CV_PROFILES[key];
    if (profile) generateCvPdf(profile);
    setOpen(false);
  };

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        title="Export CV (ATS)"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={
          className ||
          'flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[13px] font-semibold bg-white text-amber-700 shadow-md hover:bg-amber-50 transition-colors'
        }
      >
        <FileText size={15} />
        {!compact && <span>Export CV</span>}
      </motion.button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[200] flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />

              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label="Pilih profesi untuk export CV"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 20 }}
                transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-2xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-5 text-white flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold flex items-center gap-2">
                      <Download size={20} /> Export CV
                    </h3>
                    <p className="text-sm text-white/90 mt-0.5">
                      Pilih profesi dulu — PDF format ATS-friendly (teks
                      selectable) langsung terunduh.
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="p-1.5 rounded-full hover:bg-white/20 transition-colors"
                    aria-label="Tutup"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="p-6 grid sm:grid-cols-2 gap-4">
                  {OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <motion.button
                        key={opt.key}
                        onClick={() => handlePick(opt.key)}
                        whileHover={{ y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        className={`group text-left p-5 rounded-xl border-2 border-gray-200 dark:border-slate-700 ${opt.ring} bg-gray-50 dark:bg-slate-800 transition-colors`}
                      >
                        <div
                          className={`w-11 h-11 rounded-xl bg-gradient-to-br ${opt.accent} flex items-center justify-center text-white shadow-md mb-3`}
                        >
                          <Icon size={22} />
                        </div>
                        <h4 className="font-bold text-gray-800 dark:text-white">
                          {opt.title}
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                          {opt.desc}
                        </p>
                        <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-amber-600 group-hover:gap-2 transition-all">
                          <FileText size={13} /> Generate CV
                        </span>
                      </motion.button>
                    );
                  })}
                </div>

                <p className="px-6 pb-5 -mt-1 text-[11px] text-gray-400 dark:text-gray-500 text-center">
                  File PDF akan otomatis terunduh ke perangkat Anda.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default CVExport;
