/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      screens: {
        '3xl': '1200px'
      }
    },
    extend: {},
  },
  plugins: [],
}

