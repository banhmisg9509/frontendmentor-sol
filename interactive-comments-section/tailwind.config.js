/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "hsl(212, 24%, 26%)",
        "grayish-blue": "hsl(211, 10%, 45%)",
        "light-gray": "hsl(223, 19%, 93%)",
        "light-grayish-blue": "hsl(239, 57%, 85%)",
        "moderate-blue": "hsl(238, 40%, 52%)",
        "pale-red": "hsl(357, 100%, 86%)",
        "soft-red": "hsl(358, 79%, 66%)",
        "very-light-gray": "hsl(228, 33%, 97%)",
      },
    },
  },
};
