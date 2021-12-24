// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme:{
    extend:{
      boxShadow:{
        'white' : ' 0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 3px 6px -1px rgba(37, 99, 235, 0.06 )',
      },
      fontFamily:{
        sans: ['Work Sans', ...defaultTheme.fontFamily.sans],
        serif: ['Montserrat', ...defaultTheme.fontFamily.serif],
      },
      colors:{
        "deep-blue" : "#060509",
        "led-screen" :"#1d1b1b",
        "led-text": "#848484",
      },
    },
  },
};
