/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "300px", // Redefines `sm` to start at 500px
      },
    },
  },
  plugins: [],
};
