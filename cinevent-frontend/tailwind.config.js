/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#800020", // Burgundy
        accent: "#F5C065", // Gold
        "background-light": "#F8EECB",
        "background-dark": "#1C1C1C",
        charcoal: "#1C1C1C",
      },
      fontFamily: {
        display: ["Spline Sans", "sans-serif"],
        "serif-alt": ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
};