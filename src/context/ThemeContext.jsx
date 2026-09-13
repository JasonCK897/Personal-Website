import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Cek localStorage, jika belum ada atau bernilai light/lainnya, default ke false (LIGHT MODE)
    const saved = localStorage.getItem('jck-theme');
    if (saved === 'dark') {
      return true;
    }
    return false; // Default: LIGHT MODE (Warm Cream Canvas)
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
