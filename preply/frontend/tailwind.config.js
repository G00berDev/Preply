/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
],
theme: {
    extend: {
      colors: {
        mainYellow: '#F3CB78',
        titleOrange: '#DC9500',
        boxGold: '#E9C06B',
        highlightGold: '#FAA900',
        unHighlightedGold: '#E9C06B',
      },
    },
  },
  plugins: [],
}