// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    extend:{
      fontFamily:{
        sans: ['Oxanium', ...defaultTheme.fontFamily.sans],
      },
      colors:{
        "deep-blue" : "#060509",
        "led-screen" :"#1d1b1b",
        "led-text": "#848484",
      },
    },
  },
};
