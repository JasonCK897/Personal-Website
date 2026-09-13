/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F7F4EE',
          alt: '#EFEAE0',
          card: '#FFFFFF',
        },
        navy: {
          dark: '#1B2A4A',
          deep: '#0F172A',
          primary: '#1B3B6F',
          light: '#8FB8E0',
          textMuted: '#B9C4D9',
          textSubtle: '#8FA0BE',
        },
        slateText: {
          primary: '#1B2A4A',
          secondary: '#4A5568',
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      animation: {
        'orbit-cw': 'orbitCw 5s linear infinite',
        'orbit-ccw': 'orbitCcw 3.8s linear infinite',
      },
      keyframes: {
        orbitCw: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        orbitCcw: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      }
    },
  },
  plugins: [],
}
