/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      dope: ["Be Vietnam Pro", "sans-serif"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
