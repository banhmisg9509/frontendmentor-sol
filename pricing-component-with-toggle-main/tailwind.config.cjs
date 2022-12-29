/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue1: "#f6f6fe",
        blue2: "#b3b5c6",
        blue3: "#6d708d",
        blue4: "#494c5f",
        gradient1start: "#a3a8f0",
        gradient1stop: "#696fdd",
      },
    },
  },
  plugins: [],
};
