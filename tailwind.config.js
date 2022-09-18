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
    },
    extend: {
      keyframes: {
        grow: {
          '0%, 100%': {  },
          '50%': { transform:'scale(1.1)' },
        },
        
      }
    },
  },
  plugins: [],
}
