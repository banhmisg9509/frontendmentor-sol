/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red1: "hsl(0, 100%, 66%)",
        violet1: "hsl(270, 3%, 87%)",
        violet2: "hsl(279, 6%, 55%)",
        violet3: "hsl(278, 68%, 11%)",
        "gradient-start-1": "hsl(249, 99%, 64%)",
        "gradient-stop-1": "hsl(278, 94%, 30%)",
      },
    },
  },
  plugins: [],
};
