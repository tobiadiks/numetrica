// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    extend:{
      boxShadow:{
        "main-brand1" : "2px 4px 16px 2px #1479ff20",
      },
      fontFamily:{
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
      colors:{
        "main-brand1": "#1479ff",
        "main-brand2": "#1479ff10",
        "main-brand3": "#1479ff20",
        "basic1": "#193b68",
        "basic2": "#193b6830",
        "basic3": "#193b6850",
        "basic4": "#193b6870",
      },
    },
  },
};
