/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chalk: ["Chalkduster"],
      },
      boxShadow: {
        modal: "inset 0 0 8px 2px #f7b500", //! shadow color = tertiary color
      },
      colors: {
        primary: {
          DEFAULT: "#ab1217",
          dark: "#ab1217",
          light: "#ab1217",
          text: "#ffffff",
        },
        secondary: {
          DEFAULT: "#000000",
          dark: "#000000",
          light: "#000000",
          text: "#ffffff",
        },
        tertiary: {
          DEFAULT: "#f7b500",
          dark: "#f7b500",
          light: "#f7b500",
          text: "#000000",
        },
      },
    },
  },
  plugins: [],
};
