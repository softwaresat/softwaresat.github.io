/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#060816',
        panel: '#0b1224',
        line: 'rgba(255,255,255,0.1)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(75, 127, 255, 0.22)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
