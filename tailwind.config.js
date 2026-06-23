/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#251908',
          light: '#2e2009',
          card: '#362610',
        },
        gold: {
          DEFAULT: '#d2a330',
          light: '#e8bc4a',
          50:  '#FBF7EC',
          100: '#F5EDD0',
          200: '#EDD9A3',
          300: '#E3C16F',
          400: '#D9A94A',
          500: '#C49A28',
          600: '#A87D1E',
          700: '#865F18',
          800: '#664817',
          900: '#4A3312',
        },
        cream: {
          50:  '#FDFCFA',
          100: '#FAF7F2',
          200: '#F5EFE6',
          300: '#EDE4D5',
          400: '#E2D5C0',
        },
        charcoal: {
          50:  '#F5F5F6',
          100: '#E8E8EA',
          200: '#D0D0D4',
          300: '#A8A8AF',
          400: '#7C7C85',
          500: '#58585F',
          600: '#404047',
          700: '#2C2C32',
          800: '#1E1E23',
          900: '#121215',
        },
        'warm-white': '#fff',
      },
    },
  },
  plugins: [],
};
