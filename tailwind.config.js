/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./public/scripts/script.js}"],
  theme: {
    extend: {
      colors:{
        header:'#007aff',
        primaryColor:'#D1D5DB',
      }

    },
  },
  variants: {
    fill: ['hover', 'focus'], 
  },
  plugins: [],
}

