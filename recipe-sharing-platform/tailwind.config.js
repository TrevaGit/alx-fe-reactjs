/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",         // checker expects this exact path
    "./src/**/*.{js,jsx,ts,tsx}"   // all your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
