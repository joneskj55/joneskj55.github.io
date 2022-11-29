/** @type {import('tailwindcss').Config} */
/** @type {Plugin} */
const plugin = require("tailwindcss/plugin");

const rotate = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate": {
      transform: "rotateY(180deg)",
    },
    ".firefox": {
      transform: "rotateX(0deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
      },
      animation: {
        "waving-hand": "wave 2s linear infinite",
      },
      colors: {
        "main-gray": "#8997ac",
      },
    },
    fontFamily: {
      dope: ["Be Vietnam Pro", "sans-serif"],
      jetbrains: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms"), rotate],
};
