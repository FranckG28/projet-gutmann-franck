/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      spacing: {
        navbar: "4rem",
      },
      gridTemplateColumns: {
        "horizontal-layout": "220px auto 320px",
        sidebar: "450px auto",
        "sidebar-collapsed": "64px auto",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("tailwindcss-animate")],
};
