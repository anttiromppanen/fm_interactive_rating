/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Overpass", "sans-serif"],
      },
      colors: {
        userOrange: "hsl(25, 97%, 53%)",
        userDarkBlue: "hsl(213, 19%, 18%)",
        userVeryDarkBlue: "hsl(216, 12%, 8%)",
        userLightGrey: "hsl(217, 12%, 63%)",
        userMediumGrey: "hsl(216, 12%, 54%)",
        userWhite: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
}