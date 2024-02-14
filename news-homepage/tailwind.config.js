/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        "72p": "67%",
        "80p": "80%",
        "26p": "30%",
        "40p": "40%",
        "80vh": "76vh",
        "20vh": "20vh",
        "30vh": "30vh",
      },
      fontSize: {
        "3r": "3.5rem",
      },
      lineHeight: {
        "4r": "3.5rem",
      },
      colors: {
        blackShade: "#00001A",
        peachShade: "#E6A953",
        pinkShade: "#F15D51",
      },
    },
  },
  plugins: [],
};
