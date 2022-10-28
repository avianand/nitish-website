/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#090A10",
        secondary: "#848EA0",
        tertiary: "#303340",
        quaternary: "#9DA993",
        inverted: "#ffffff",
      },
    },
    fontFamily: {
      primary: "Plus Jakarta Sans, sans-serif",
    },
  },
  plugins: [],
};
