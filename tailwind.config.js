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
    },
  },
  plugins: [],
};
