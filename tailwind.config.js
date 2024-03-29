/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#181919ff",
        secondary: "#333434",
        tertiary: "#151515",
      },
      scale: {
        101: "1.01",
      },
    },
  },
  plugins: [],
};
