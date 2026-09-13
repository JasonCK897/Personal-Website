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
        cyber: {
          bg: '#080C14',
          surface: '#0E1626',
          card: '#131C31',
          border: '#1E2D4A',
          borderHover: '#38BDF8',
          cyan: '#00F0FF',
          sky: '#38BDF8',
          blue: '#2563EB',
          textMuted: '#94A3B8',
          textBright: '#F1F5F9',
        },
        lightTech: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          text: '#0F172A',
          muted: '#64748B',
        }
      },
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'orbit-cw': 'orbitCw 5s linear infinite',
        'orbit-ccw': 'orbitCcw 3.8s linear infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
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
        glowPulse: {
          '0%, 100%': { opacity: 0.25, transform: 'scale(1)' },
          '50%': { opacity: 0.45, transform: 'scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
