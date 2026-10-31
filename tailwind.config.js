/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          950: '#05060a',
          900: '#0a0d18',
          850: '#0f1322',
          800: '#141a2e',
          700: '#1e2642',
        },
        roseGold: {
          50: '#fdf8f8',
          100: '#faeff1',
          200: '#f5d9de',
          300: '#eebac3',
          400: '#e294a2',
          500: '#d46f82',
          600: '#bf5065',
        },
        champagne: {
          100: '#fdfbf5',
          200: '#fcf6e6',
          300: '#f8ecc9',
          400: '#f2dea3',
          500: '#e5ca79',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        script: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'], // Professional bold replacing cursive
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(244, 180, 190, 0.35))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(244, 180, 190, 0.8))' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-rose': '0 8px 32px 0 rgba(232, 148, 162, 0.15)',
        'glow-rose': '0 0 25px -5px rgba(232, 148, 162, 0.5)',
        'glow-gold': '0 0 25px -5px rgba(242, 222, 163, 0.5)',
      },
    },
  },
  plugins: [],
}
