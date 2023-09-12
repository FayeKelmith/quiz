/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#008080",
        secondary: "#ff4747",
        night: "#0E1116",
        day: "#f9f9f9",
        lining: "#ffc000",
      },
    },
  },
  plugins: [],
};
