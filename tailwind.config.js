/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      // not sans fonts, just using sans since default
      'sans': ['Georgia', 'serif']
    },
    extend: {},
  },
  plugins: [],
}

