const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue,
          DEFAULT: colors.blue[500],
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
