const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'primary' : '#3D00B7',
      'secondary' : '#ECECEC',
      'tertiary' : '#565656',
      'green' : "#00AC4F"
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      // Sans: ['DM Sans'],
      // Integral: ['Integral CF']
    }
  },
  plugins: [],
}

