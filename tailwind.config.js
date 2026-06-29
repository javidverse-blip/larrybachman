/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cinzel', 'Georgia', 'serif'],
        sans: ['Josefin Sans', 'system-ui', 'sans-serif'],
        display: ['Cinzel', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#251908',
          light: '#6b5646',
          card: '#6b5646',
        },
        gold: {
          DEFAULT: '#b28f3e',
          light: '#b28f3e',
          50:  '#FBF7EC',
          100: '#F5EDD0',
          200: '#EDD9A3',
          300: '#E3C16F',
          400: '#D9A94A',
          500: '#C49A28',
          600: '#9f712c',
          700: '#865F18',
          800: '#664817',
          900: '#4A3312',
        },
        'warm-white': '#fff',
      },
    },
  },
  plugins: [],
};
