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
        dimWhite : "rgba(255, 255, 255, 0.40)"
      },
      fontFamily : {
        medievalSharp : ["MedievalSharp", "cursive"]
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}




