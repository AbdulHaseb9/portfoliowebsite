/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        large: "1440px",
      },
      colors: {
        bg_color: "#081B29",
        primary_color: "#18A9EA",
        secondary_color: "#122E43",
        text_secondary_color: "#eaeaea",
      },
    },
  },
  plugins: [],
};
