/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chalk: ["Chalkduster"],
      },
      boxShadow: {
        modal: "inset 0 0 8px 2px rgba(214,148,17,1);",
      },
      colors: {
        primary: {
          DEFAULT: "#ab1217",
          dark: "#ab1217",
          light: "#ab1217",
        },
        secondary: {
          DEFAULT: "#000000",
          dark: "#000000",
          light: "#000000",
        },
        tertiary: {
          DEFAULT: "#f7b500",
          dark: "#f7b500",
          light: "#f7b500",
        },
      },
    },
  },
  plugins: [],
};
