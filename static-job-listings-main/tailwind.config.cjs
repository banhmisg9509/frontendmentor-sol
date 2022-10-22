/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Cyan1: "#5ba4a4",
        Cyan2: "#effafa",
        Cyan3: "#edf5f5",
        Cyan4: "#7b8e8e",
        Cyan5: "#2c3a3a",
      },
    },
  },
  plugins: [],
};
