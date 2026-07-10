import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Gambar dengan animasi loading unik (shimmer + spinner) lalu fade/zoom-in
 * saat gambar selesai dimuat.
 *
 * props:
 *  - src, alt
 *  - className   → wrapper (atur ukuran & rounded di sini)
 *  - imgClassName→ tambahan class untuk <img>
 *  - fallback    → src cadangan jika error
 */
const LazyImage = ({ src, alt = '', className = '', imgClassName = '', fallback, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loader */}
      {!loaded && (
        <div className="absolute inset-0 img-shimmer flex items-center justify-center" aria-hidden="true">
          <span className="img-spinner" />
        </div>
      )}

      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          if (fallback && !errored) {
            setErrored(true);
            e.currentTarget.src = fallback;
          } else {
            setLoaded(true);
          }
        }}
        initial={{ opacity: 0, scale: 1.08 }}
        animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.08 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full h-full object-cover ${imgClassName}`}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
