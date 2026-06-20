/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Logistiqa-inspired brand colors
        'mona-dark': '#14151a',
        'mona-orange': '#fc4c01',
        'mona-muted': '#606060',
        'mona-border': '#e8e8e8',
        'mona-light-bg': '#fbfbfb',
        // Legacy fallbacks / compatibility
        'mona-neon': '#fc4c01', // maps accent to orange
        'mona-paper': '#fbfbfb',
        'mona-off-white': '#f7f7f7',
        'mona-ink': '#14151a',
        'mona-charcoal': '#606060',
        'mona-stone': '#888',
      },
      fontFamily: {
        'big-shoulders': ['"Big Shoulders Display"', 'sans-serif'],
        'fragment-mono': ['"Fragment Mono"', 'monospace'],
        sans: ['Inter', 'DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'ring-fill': 'ringFill 1.2s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(173,255,0,0.3), 0 0 60px rgba(173,255,0,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(173,255,0,0.5), 0 0 100px rgba(173,255,0,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
