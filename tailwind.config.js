/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fafffb',
        secondary: '#5c8aa0',
        secondaryYellow: '#FAEFA9',
        dark: '#28262C',
        blue:'#1d3c73 ',  
        accent: '#DD614A',
        grey: '#7286a0',
      },
      fontFamily: {
        serif: ['Signika', 'Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
