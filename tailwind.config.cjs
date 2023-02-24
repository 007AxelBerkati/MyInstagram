/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-background': '#EFEFEF',
        'primary-link': '#0095F6',
        'primary-gray': '#8E8E8E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'body-10': ['10px', '14px'],
        'body-12': ['12px', '18px'],
        'body-14': ['14px', '20px'],
        'title-16': ['16px', '24px'],
        'title-18': ['18px', '26px'],
        'heading-20': ['20px', '30px'],
        'heading-24': ['24px', '36px'],
      },
    },
  },
  plugins: [],
};
