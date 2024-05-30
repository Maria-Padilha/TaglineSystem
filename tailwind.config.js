/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue:{
          header: 'rgba(95, 95, 254, 0.985)'
        }
      }
    },
  },
  plugins: [],
}

