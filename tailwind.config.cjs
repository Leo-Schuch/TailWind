/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
],
  theme: {
   extend:{
    colors:{
      dark: {
        100: 'rgb(18, 18, 18)',
        200: 'rgb(51, 51, 51)'
      },
      newsletter:{
        100: '#167bf7',
        200: '#051933'
      }
    }
   },
  },
  plugins: [],
}
