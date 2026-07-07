/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111013',
        copper: '#B8734B',
        rose: '#D9A18A',
        nude: '#F5E8E1',
        blush: '#FFF6F8',
        hotpink: '#FF2F92',
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 60px rgba(255, 47, 146, 0.18)',
        soft: '0 18px 50px rgba(17, 16, 19, 0.12)',
      },
    },
  },
  plugins: [],
};
