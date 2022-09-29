/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#2b3945",
        blue2: "#202c37",
        blue3: "#111517",
        gray1: "#858585",
        gray2: "#fafafa",
      },
    },
  },
  plugins: [],
};
