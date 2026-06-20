/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand dark green
        'mona-dark': '#1c3028',
        'mona-darker': '#13231e',
        'mona-darkest': '#0d1a16',
        // Neon green accent
        'mona-neon': '#adff00',
        'mona-neon-soft': '#c8f8a9',
        // Light / paper
        'mona-paper': '#f0f0eb',
        'mona-off-white': '#f7f7f7',
        'mona-light': '#ebebeb',
        // Text
        'mona-ink': '#1a1a1a',
        'mona-charcoal': '#5a5a5a',
        'mona-stone': '#888',
      },
      fontFamily: {
        serif: ['Forum', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'system-ui', 'sans-serif'],
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
