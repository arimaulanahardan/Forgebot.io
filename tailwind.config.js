/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#0A0400",
        secondary : "#E16307 ",
        primaryTextColor : "#F5F5F5",
        dimWhite : "rgba(142, 142, 142, 1)"
      },
      fontFamily : {
        medievalSharp : ["MedievalSharp", "cursive"]
      }
    },
  },
  plugins: [],
});




