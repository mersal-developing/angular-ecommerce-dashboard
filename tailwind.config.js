const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.indigo,
          DEFAULT: colors.indigo[500],
        }, 
        secondary: {
          ...colors.yellow,
          DEFAULT: colors.yellow[500],
        }
      },
      keyframes: {
        slide: {
          '0%': {  height: 0 },
          '100%': {  height: 'auto' },
        }
      }
    },
  },
  plugins: [],
};
