/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary_yellow: "#ffcb05",
        primary_blue: "#217BF4",
        primary_blue_200: "#E5F0FD;",
        primary_dark: "#2B2B39",
        primary_dark_200: "#656464",
        primary_dark_500: "#20202D",
        gray_500: "#F6F6F6"
      },
    },
  },
  plugins: [],
};
