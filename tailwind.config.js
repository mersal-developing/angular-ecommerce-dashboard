const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.purple,
          DEFAULT: colors.purple[500],
        }, 
        secondary: {
          ...colors.amber,
          DEFAULT: colors.amber[500],
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
