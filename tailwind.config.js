/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'app':['Roboto','sans-serif'],
      'Lobster':['Lobster,sans-serif']
    },
    animation: {
      grow: 'grow 1s ease-in-out infinite',
      growOnce:'growOnce 0.5s ease-in-out forwards'
    },
    extend: {
      keyframes: {
        grow: {
          '0%, 100%': {  },
          '50%': { transform:'scale(1.1)' },
        },
        growOnce:{
          '0%':{transform:'scale(0)',opacity:'0'},
          '75%':{transform:'scale(1.1)'},
          '100%':{transform:'scale(1)',opacity:'1'}
        }
        
      }
    },
  },
  plugins: [],
}
