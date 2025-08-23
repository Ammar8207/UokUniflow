/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#5378e2',
        'custom-indigo': '#61299a',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        swing: {
          '0%, 100%': { transform: 'rotate(-6deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
          '50%': { transform: 'scale(1.2)', opacity: 0.5 },
        },
        bounceOnce: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 3s ease-in-out infinite',
        'rotate-slow': 'spin 12s linear infinite',
        'swing': 'swing 5s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 4s infinite',
        'fade-in': 'fadeIn 1s ease forwards',
        'fade-in-up': 'fadeInUp 1s ease forwards',
        'pulse-slow': 'pulseSlow 5s ease-in-out infinite',
        bounceOnce: 'bounceOnce 0.4s ease',
      },
    },
  },
  plugins: [],
};
