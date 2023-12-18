/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")

const Myclass = plugin(function ({addUtilities}) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    },
  })
});
module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      spacing : {
        '1/1' : '100%'
      },
      blur: {
        xs: '1px'
      }
    },
    colors: {
      'black' : '#000000',
      'transparent' : 'bg-transparent',
      'primary' : '#1A2940',
      'secondary': '#32455B',
      'third' : '#32455B',
      'fourth' : '#DDE6ED',
      'focus' : '#1B2A41'
    },
    screens: {
      'me' : '1440px',
      'mes' : '1100px',
      'mexs' : '750px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [Myclass,
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss'),
  require('autoprefixer'),],
}