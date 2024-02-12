/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      spacing: {
        navbar: '4rem',
      }
    },
    container: {
      center: true,
      padding: '2rem',
    }
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}

