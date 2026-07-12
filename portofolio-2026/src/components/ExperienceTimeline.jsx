import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import LazyImage from './LazyImage';

const PIN_COLORS = ['#f59e0b', '#3b82f6', '#a855f7', '#10b981', '#f97316'];

/**
 * Satu baris timeline. Garis penghubung ke node berikutnya "menggambar"
 * (naik saat scroll turun, surut saat scroll naik) — terikat progres scroll baris.
 */
const TimelineRow = ({ exp, idx, activeStep, last }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'end 0.45'],
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 130, damping: 30, restDelta: 0.001 });

  const leftSide = idx % 2 === 0;
  const color = PIN_COLORS[idx % PIN_COLORS.length];
  const curveDesktop = leftSide
    ? 'M60 0 C 18 34, 18 66, 60 100'
    : 'M60 0 C 102 34, 102 66, 60 100';
  const curveMobile = 'M20 0 C 6 34, 6 66, 20 100';

  return (
    <motion.div
      ref={ref}
      data-step={idx}
      className="experience-step relative pb-8 last:pb-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.12 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Garis melengkung — desktop (tengah). Track redup + garis progres yang menggambar saat scroll */}
      {!last && (
        <svg
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 h-full w-[120px]"
          viewBox="0 0 120 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path d={curveDesktop} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" style={{ pathLength }} />
        </svg>
      )}
      {/* Garis melengkung — mobile (kiri) */}
      {!last && (
        <svg
          className="md:hidden absolute left-[18px] -translate-x-1/2 top-6 h-full w-[40px]"
          viewBox="0 0 40 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path d={curveMobile} fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" style={{ pathLength }} />
        </svg>
      )}

      <div className="md:grid md:grid-cols-2">
        <div className={`pl-12 md:pl-0 ${leftSide ? 'md:col-start-1 md:pr-12' : 'md:col-start-2 md:pl-12'}`}>
          <motion.div
            className="group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl border border-gray-100 dark:border-slate-700 transition-shadow duration-300"
            whileHover={{ y: -6 }}
          >
            <div className={`absolute top-0 bottom-0 w-1.5 ${leftSide ? 'md:left-auto md:right-0 left-0' : 'left-0'}`} style={{ backgroundColor: color }} />
            <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-500" style={{ backgroundColor: color }} />
            <span className="pointer-events-none absolute right-4 top-0 text-[76px] font-black leading-none text-gray-900/[0.04] dark:text-white/[0.05] select-none">
              {String(idx + 1).padStart(2, '0')}
            </span>

            <div className="relative p-5">
              <div className="flex items-center justify-between gap-3">
                {exp.logo ? (
                  <img src={`./${exp.logo}`} alt={exp.company} className="h-7 md:h-8 w-auto max-w-[150px] object-contain object-left dark:brightness-0 dark:invert" />
                ) : (
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shadow-sm shrink-0" style={{ backgroundColor: color }}>
                    <exp.icon size={18} className="text-white" />
                  </div>
                )}
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full text-white shadow shrink-0" style={{ backgroundColor: color }}>
                  <Calendar size={12} /> {exp.period}
                </span>
              </div>
              <h3 className="mt-3 text-lg md:text-xl font-bold text-gray-800 dark:text-white leading-snug">
                {exp.title}
              </h3>
              <p className="text-amber-600 dark:text-amber-400 text-sm font-medium flex items-center gap-1.5 mt-1">
                <Briefcase size={14} /> {exp.company}
              </p>

              <div className="mt-4 space-y-2.5">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement}</p>
                  </div>
                ))}
              </div>

              {exp.images && exp.images.length > 0 && (
                <div className="grid grid-cols-3 gap-2 mt-4">
                  {exp.images.map((img, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.05, zIndex: 5 }} transition={{ duration: 0.2 }}>
                      <LazyImage
                        src={`./${img}`}
                        alt={`Dokumentasi ${exp.company}`}
                        className="w-full h-20 md:h-24 rounded-lg shadow-sm cursor-pointer"
                      />
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Node berlian */}
      <div className="absolute left-[18px] md:left-1/2 -translate-x-1/2 top-6 md:top-8 z-10">
        {activeStep === idx && (
          <motion.span
            className="absolute inset-0 rounded-xl"
            style={{ backgroundColor: color }}
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
          />
        )}
        <motion.div
          className="relative w-10 h-10 rounded-xl rotate-45 shadow-lg ring-4 ring-white dark:ring-slate-900 flex items-center justify-center"
          style={{ backgroundColor: color }}
          whileHover={{ rotate: 0, scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 18 }}
        >
          <exp.icon size={18} className="text-white -rotate-45" />
        </motion.div>
      </div>
    </motion.div>
  );
};

/**
 * Timeline ZIG-ZAG dengan garis melengkung yang menggambar saat scroll.
 */
const ExperienceTimeline = ({ experiences, activeStep }) => {
  return (
    <div className="relative max-w-4xl mx-auto">
      {experiences.map((exp, idx) => (
        <TimelineRow
          key={idx}
          exp={exp}
          idx={idx}
          activeStep={activeStep}
          last={idx === experiences.length - 1}
        />
      ))}
    </div>
  );
};

export default ExperienceTimeline;
