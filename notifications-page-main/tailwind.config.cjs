/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red1: "hsl(1, 90%, 64%)",
        blue1: "hsl(219, 85%, 26%)",
        blue2: "hsl(210, 60%, 98%)",
        blue3: "hsl(211, 68%, 94%)",
        blue4: "hsl(205, 33%, 90%)",
        blue5: "hsl(219, 14%, 63%)",
        blue6: "hsl(219, 12%, 42%)",
        blue7: "hsl(224, 21%, 14%)",
      },
    },
  },
  plugins: [],
};
