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
      'primary' : '#202D40',
      'secondary': '#32455B',
      'third' : '#9DB2BF',
      'fourth' : '#DDE6ED',
      'focus' : '#253347'
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