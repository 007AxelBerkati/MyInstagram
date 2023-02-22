/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // primary: {
      //   '01': '#E2D4F0',
      //   '02': '#D0B7E6',
      //   '03': '#A06ECE',
      //   '04': '#7126B5',
      //   '05': '#4B1979',
      // },
      alert: {
        danger: '#FA2C5A',
        warning: '#F9CC00',
        success: '#73CA5C',
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
