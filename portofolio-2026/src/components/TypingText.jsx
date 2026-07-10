import { useState, useEffect } from 'react';

/**
 * Animasi mengetik bergantian: mengetik teks[0], jeda, hapus, ketik teks[1], ulang.
 * `texts` sebaiknya referensi stabil (didefinisikan di module scope).
 */
const TypingText = ({
  texts,
  typeSpeed = 70,
  deleteSpeed = 38,
  pause = 1500,
  startDelay = 500,
  className = '',
  caretClassName = 'text-amber-500',
}) => {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay);
    return () => clearTimeout(t);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return undefined;
    const current = texts[idx % texts.length];
    let timeout;
    if (!deleting) {
      if (display.length < current.length) {
        timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typeSpeed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else if (display.length > 0) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIdx((i) => (i + 1) % texts.length);
      }, 250);
    }
    return () => clearTimeout(timeout);
  }, [display, deleting, idx, started, texts, typeSpeed, deleteSpeed, pause]);

  return (
    <>
      <span className="sr-only">{texts.join(' & ')}</span>
      <span aria-hidden="true" className={className}>{display}</span>
      <span aria-hidden="true" className={`type-caret font-normal ${caretClassName}`}>|</span>
    </>
  );
};

export default TypingText;
