import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Cek preferensi tersimpan di localStorage
    const saved = localStorage.getItem('jck-theme');
    if (saved !== null) {
      return saved === 'dark';
    }
    // Default: cek sistem preferensi pengguna, default ke light jika tidak ada
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('jck-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('jck-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
