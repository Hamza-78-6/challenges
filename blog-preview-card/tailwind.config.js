/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "yellow-350": "#F5D04E",
      },
      dropShadow: {
        "2l": " 8px 8px 0px  black",
      },
    },
  },
  plugins: [],
};
