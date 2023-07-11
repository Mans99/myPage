/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      blur: {
        xs: '1px'
      }
    },
    colors: {
      'primary' : '#202D40',
      'secondary': '#32455B',
      'third' : '#9DB2BF',
      'fourth' : '#DDE6ED'
    }
  },
  plugins: [],
}