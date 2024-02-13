/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        semiBlack: "#141414",
        cardBg: "#1F1F1F",
        btnBg: "#333333",
        greenShade: "#C4F82A",
      },
      spacing: {
        85: "85vh",
        7: "3.8%",
        100: "100%",
        60: "60%",
        70: "70%",
      },
    },
  },
  plugins: [],
};
