/**
 * Background dekoratif modern: aurora gradient yang mengalir + grid halus
 * + sinar diagonal. Menggantikan partikel gelembung. Ringan (murni CSS),
 * theme-aware, dan otomatis tenang saat prefers-reduced-motion.
 */
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Grid halus */}
      <div className="bg-grid" />

      {/* Aurora blobs (wash warna, sangat blur) */}
      <div className="aurora aurora-1" />
      <div className="aurora aurora-2" />
      <div className="aurora aurora-3" />

      {/* Sinar diagonal yang menyapu */}
      <div className="bg-beam" />

      {/* Vignette lembut agar konten menonjol */}
      <div className="bg-vignette" />
    </div>
  );
};

export default AnimatedBackground;
