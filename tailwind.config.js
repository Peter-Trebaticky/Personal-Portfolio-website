/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.php',
    './public/scripts/script.js',
    './public/scripts/mail.php',
  ],
  content: [
    "./public/index.html",
  ],
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

