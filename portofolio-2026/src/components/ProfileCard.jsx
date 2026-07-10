import { useState, useEffect } from 'react';
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useScroll,
  useVelocity,
} from 'framer-motion';
import { Phone, Mail, MapPin, Code } from 'lucide-react';
import LazyImage from './LazyImage';
import Barcode from './Barcode';

const PHONE_DIGITS = '6281229473327';

const ProfileCard = ({ photo, photoFallback }) => {
  const [vw, setVw] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  const [vh, setVh] = useState(typeof window !== 'undefined' ? window.innerHeight : 800);
  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  const compact = vw < 480;
  const landscape = vw >= 1024; // desktop → ID card landscape

  const CARD_W = landscape ? 470 : compact ? 250 : 300;
  const cardHeight = landscape
    ? 300
    : compact
    ? Math.min(vh - 300, CARD_W * 1.85)
    : Math.min(vh - 250, CARD_W * 2.0, 600);
  const SVG_W = landscape ? 520 : compact ? 320 : 380;
  const STRAP_W = compact ? 34 : 42;
  const SPREAD = landscape ? 100 : compact ? 66 : 88;
  const TOP_Y = -320; // tali menembus ke atas (ujung tak terlihat)
  const CLIP_Y = compact ? 86 : 100;
  const CX = SVG_W / 2;
  const CARD_OFFSET = (SVG_W - CARD_W) / 2;

  // Drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Gerak scroll = AYUNAN PENDULUM berfisika (arc horizontal + vertikal + rotasi).
  // Scroll memberi "dorongan", pegas ber-damping rendah membuatnya berayun & kembali
  // ke titik terendah (seperti gravitasi).
  const { scrollY } = useScroll();
  const scrollVel = useVelocity(scrollY);
  const swingKick = useTransform(scrollVel, [-900, 0, 900], [-1, 0, 1], { clamp: true });
  const swing = useSpring(swingKick, { stiffness: 120, damping: 9, mass: 1 });

  const AMP_X = compact ? 30 : 42;   // ayunan horizontal
  const AMP_Y = compact ? 14 : 20;   // naik-turun arc (naik saat di ujung)
  const AMP_ROT = compact ? 8 : 11;  // kemiringan

  // offset ayunan (arc): x lurus terhadap swing, y ∝ swing² (arc pendulum)
  const swingX = useTransform(swing, (s) => s * AMP_X);
  const swingY = useTransform(swing, (s) => -(s * s) * AMP_Y);

  // Rotasi kartu = pendulum drag + kemiringan ayunan scroll
  const rotate = useTransform(
    [x, y, swing],
    ([lx, dy, s]) => (Math.atan2(lx, CLIP_Y + dy) * 180) / Math.PI * 0.9 + s * AMP_ROT
  );

  // Tali mengikuti posisi kartu (drag + ayunan)
  const strapD = (side, lx, ly) => {
    const cx = CX + lx, cy = CLIP_Y + ly;
    const qx = CX + side * SPREAD * 0.45 + lx * 0.3;
    const qy = (TOP_Y + cy) / 2;
    return `M ${CX + side * SPREAD} ${TOP_Y} Q ${qx} ${qy} ${cx} ${cy}`;
  };
  const leftStrap = useTransform([x, y, swing], ([lx, dy, s]) => strapD(-1, lx + s * AMP_X, dy - s * s * AMP_Y));
  const rightStrap = useTransform([x, y, swing], ([lx, dy, s]) => strapD(1, lx + s * AMP_X, dy - s * s * AMP_Y));

  const dragLimit = compact ? 80 : 110;

  const renderStrap = (d) => (
    <>
      <motion.path d={d} fill="none" stroke="rgba(0,0,0,0.14)" strokeWidth={STRAP_W + 4} strokeLinecap="round" style={{ translateY: 2 }} />
      <motion.path d={d} fill="none" stroke="url(#strapFill)" strokeWidth={STRAP_W} strokeLinecap="round" />
      <motion.path d={d} fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.6" strokeDasharray="6 7" strokeLinecap="round" />
    </>
  );

  const socialLinks = (
    <>
      <a
        href="https://www.linkedin.com/in/muhammad-faiz-alfi-rahman-b49030277"
        target="_blank" rel="noreferrer" draggable={false}
        className="bg-gray-100 dark:bg-slate-700 dark:text-slate-200 hover:bg-blue-500 hover:text-white p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8"
      >
        <i className="fab fa-linkedin-in text-sm"></i>
      </a>
      <a
        href="https://github.com/Azzerith"
        target="_blank" rel="noreferrer" draggable={false}
        className="bg-gray-100 dark:bg-slate-700 dark:text-slate-200 hover:bg-gray-900 hover:text-white p-2 rounded-full transition-colors flex items-center justify-center w-8 h-8"
      >
        <i className="fab fa-github text-sm"></i>
      </a>
      <div className="bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-slate-200 px-3 h-8 rounded-full text-xs font-semibold flex items-center">
        GPA 3.87
      </div>
    </>
  );

  return (
    <motion.div
      style={{ marginTop: -(CLIP_Y - 12) }}
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 130, damping: 16, delay: 0.1 }}
    >
      <div className="relative flex flex-col items-center select-none mx-auto" style={{ perspective: 1000, width: SVG_W }}>
        {/* Lanyard: 2 tali membentuk V, menembus ke atas */}
        <svg width={SVG_W} height={CLIP_Y + 30} className="absolute left-0 top-0 pointer-events-none" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="strapFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="55%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
          {renderStrap(leftStrap)}
          {renderStrap(rightStrap)}
        </svg>

        {/* Layer AYUNAN (scroll) — geser arc; rotasi ditangani per-elemen */}
        <motion.div className="relative" style={{ x: swingX, y: swingY, width: SVG_W }}>
          {/* Clip logam di titik pertemuan */}
          <motion.div
            className="absolute z-20 rounded-md border border-gray-400 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 shadow pointer-events-none"
            style={{ x, y, width: STRAP_W * 1.4, height: 15, left: CX - (STRAP_W * 1.4) / 2, top: CLIP_Y - 9 }}
          />

          {/* === Kartu ID (bisa ditarik) === */}
          <motion.div
            drag
            dragSnapToOrigin
            dragElastic={0.16}
            dragConstraints={{ left: -dragLimit, right: dragLimit, top: -18, bottom: compact ? 120 : 150 }}
            dragTransition={{ bounceStiffness: 240, bounceDamping: 14 }}
            style={{
              x, y, rotate,
              transformOrigin: 'top center',
              marginTop: CLIP_Y - 2,
              marginLeft: CARD_OFFSET,
              width: CARD_W,
              height: cardHeight,
            }}
            whileDrag={{ scale: 1.02 }}
            className="relative z-10 cursor-grab active:cursor-grabbing touch-none"
          >
            <div className="relative h-full rounded-[26px] p-[3px] bg-gradient-to-br from-white/70 to-white/20 dark:from-white/20 dark:to-white/[0.04] backdrop-blur-md shadow-2xl ring-1 ring-white/60 dark:ring-white/10">
              <div className="pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-b from-white/50 via-transparent to-transparent opacity-70" />

              {landscape ? (
                /* ================= LANDSCAPE (desktop) ================= */
                <div className="relative h-full rounded-[22px] overflow-hidden bg-white/80 dark:bg-slate-900/70 flex flex-col">
                  <div className="pt-2.5 flex justify-center shrink-0">
                    <div className="w-16 h-2 rounded-full bg-gray-900/25 ring-1 ring-black/10 shadow-inner" />
                  </div>
                  <div className="mt-2 mx-4 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-1.5 flex items-center justify-between text-white shadow-md shrink-0">
                    <span className="text-[10px] font-bold tracking-[0.25em]">STAFF ID</span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wider">
                      <Code size={11} /> DEV
                    </span>
                  </div>

                  <div className="flex-1 flex items-center gap-4 px-5 py-3 min-h-0">
                    <LazyImage
                      src={photo}
                      fallback={photoFallback}
                      alt="Muhammad Faiz Alfi Rahman"
                      className="w-24 h-24 rounded-full ring-4 ring-amber-400 shadow-lg shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base font-bold text-gray-800 dark:text-white leading-tight">
                        Muhammad Faiz Alfi Rahman
                      </h2>
                      <p className="text-amber-600 dark:text-amber-400 text-xs font-medium mt-0.5">
                        Web Developer • Graphic Designer
                      </p>
                      <div className="mt-2 space-y-1 text-xs text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-2"><Phone size={12} className="text-amber-500 shrink-0" /> +62 812 2947 3327</div>
                        <div className="flex items-center gap-2"><Mail size={12} className="text-amber-500 shrink-0" /> zikazabat@gmail.com</div>
                        <div className="flex items-center gap-2"><MapPin size={12} className="text-amber-500 shrink-0" /> Banyumas, Jawa Tengah</div>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 px-5 pb-2 flex items-end justify-between gap-3">
                    <div className="flex gap-2 items-center">{socialLinks}</div>
                    <div className="flex flex-col items-end overflow-hidden">
                      <Barcode value={PHONE_DIGITS} height={24} width={1.0} />
                      <span className="text-[8px] tracking-[0.2em] text-gray-500 dark:text-gray-400 mt-0.5">
                        +62 812 2947 3327
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 shrink-0" />
                </div>
              ) : (
                /* ================= PORTRAIT (mobile/tablet) ================= */
                <div className="relative h-full rounded-[22px] overflow-hidden bg-white/80 dark:bg-slate-900/70 flex flex-col">
                  <div className="pt-3 flex justify-center shrink-0">
                    <div className="w-16 h-2.5 rounded-full bg-gray-900/25 ring-1 ring-black/10 shadow-inner" />
                  </div>
                  <div className="mt-3 mx-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-2 flex items-center justify-between text-white shadow-md shrink-0">
                    <span className="text-[10px] font-bold tracking-[0.25em]">STAFF ID</span>
                    <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wider">
                      <Code size={11} /> DEV
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-center items-center gap-5 px-5 py-4">
                    <LazyImage
                      src={photo}
                      fallback={photoFallback}
                      alt="Muhammad Faiz Alfi Rahman"
                      className="w-32 h-32 rounded-full ring-4 ring-amber-400 shadow-lg shrink-0"
                    />
                    <div className="text-center">
                      <h2 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                        Muhammad Faiz Alfi Rahman
                      </h2>
                      <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mt-1">
                        Web Developer • Graphic Designer
                      </p>
                    </div>
                    <div className="w-full max-w-[16rem] space-y-2 text-xs text-gray-600 dark:text-gray-300">
                      <div className="flex items-center gap-2 justify-center"><Phone size={13} className="text-amber-500" /> +62 812 2947 3327</div>
                      <div className="flex items-center gap-2 justify-center"><Mail size={13} className="text-amber-500" /> zikazabat@gmail.com</div>
                      <div className="flex items-center gap-2 justify-center"><MapPin size={13} className="text-amber-500" /> Banyumas, Jawa Tengah</div>
                    </div>
                  </div>

                  <div className="shrink-0 px-4 pb-4">
                    <div className="flex gap-2 justify-center items-center">{socialLinks}</div>
                    <div className="mt-3 flex flex-col items-center overflow-hidden">
                      <Barcode value={PHONE_DIGITS} height={30} width={1.4} />
                      <span className="text-[9px] tracking-[0.25em] text-gray-500 dark:text-gray-400 mt-1">
                        +62 812 2947 3327
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
