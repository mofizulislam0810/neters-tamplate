const colors = require('tailwindcss/colors')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'primary' : '#3D00B7',
      'secondary' : '#fccd03',
      'tertiary' : '#F4F4F4'
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      // Sans: ['DM Sans'],
      // Integral: ['Integral CF']
    }
  },
  plugins: [],
}

