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
      wiggle: 'wiggle 1s ease-in-out infinite',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)',transform:'scale(1.2)' },
        },
        
      }
    },
  },
  plugins: [],
}
