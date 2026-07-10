import { createContext } from 'react';

/**
 * Context tema aplikasi.
 * theme: 'light' | 'dark'
 */
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
});
