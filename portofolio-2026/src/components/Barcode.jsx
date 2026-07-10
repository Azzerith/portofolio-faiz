import { useEffect, useRef } from 'react';
import JsBarcode from 'jsbarcode';
import { useTheme } from '../hooks/useTheme';

/**
 * Barcode Code128 (SVG), warna garis menyesuaikan tema.
 */
const Barcode = ({ value, height = 28, width = 1.3, className = '' }) => {
  const ref = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!ref.current) return;
    try {
      JsBarcode(ref.current, String(value), {
        format: 'CODE128',
        displayValue: false,
        margin: 0,
        height,
        width,
        background: 'transparent',
        lineColor: theme === 'dark' ? '#e2e8f0' : '#1f2937',
      });
    } catch {
      /* nilai tidak valid → abaikan */
    }
  }, [value, height, width, theme]);

  return <svg ref={ref} className={className} style={{ maxWidth: '100%', height: 'auto' }} />;
};

export default Barcode;
