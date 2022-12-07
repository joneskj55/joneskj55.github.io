/** @type {import('tailwindcss').Config} */

const rotate = function ({ addUtilities }) {
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
    ".half-bg": {
      background: "linear-gradient(to top, #39d35333 40%, transparent 40%)",
    },
    ".half-bg-hover": {
      background: "linear-gradient(to top, #39d35333 100%, transparent 100%)",
    },
  });
};

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
        "resume-green": "#37a134",
        "green-button": "#006d32",
        "green-btn-hover": "#26a641",
      },
    },
    fontFamily: {
      dope: ["Be Vietnam Pro", "sans-serif"],
      jetbrains: ["JetBrains Mono", "monospace"],
    },
  },
  plugins: [require("@tailwindcss/forms"), rotate],
};
