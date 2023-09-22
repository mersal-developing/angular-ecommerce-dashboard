const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.blue,
          DEFAULT: colors.blue[500],
        },
        secondary: {
          ...colors.cyan,
          DEFAULT: colors.cyan[500],
        },
        "custom-grey": "#4b5564",
        "light-grey": "#a3a1a1"
      },
      keyframes: {
        slide: {
          "0%": { height: 0 },
          "100%": { height: "auto" },
        },
      },
      fontFamily: {
        "montserrat": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
