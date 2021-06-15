const colors = require('tailwindcss/colors');
const aspectRatio = require('@tailwindcss/aspect-ratio');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: colors.white,
      gray: colors.gray,
      cyan: colors.cyan,
      blue: colors.blue,
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      translate: ['group-hover'],
    },
  },
  plugins: [aspectRatio],
};
