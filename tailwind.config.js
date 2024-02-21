/** @type {import('tailwindcss').Config} */
export default {
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
}




