/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#080B12',
          surface: '#0D121F',
          card: '#121829',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(0, 255, 157, 0.3)',
          green: '#00FF9D',
          'green-glow': 'rgba(0, 255, 157, 0.25)',
          purple: '#A855F7',
          'purple-glow': 'rgba(168, 85, 247, 0.25)',
          cyan: '#00F0FF',
          muted: '#94A3B8',
          text: '#F1F5F9'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace', 'Consolas'],
      },
      boxShadow: {
        'glow-green': '0 0 25px -5px rgba(0, 255, 157, 0.3)',
        'glow-purple': '0 0 25px -5px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        }
      }
    },
  },
  plugins: [],
}
