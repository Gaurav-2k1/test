const colors = require(`tailwindcss/colors`);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: "#00B4D8",
        secondary: "#03045E",
        cardStart: "#313189F7",
        cardEnd: "#02C39A",
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
      },
      rotate: {
        17: "17deg",
      },
    },
  },

  plugins: [require("@tailwindcss/line-clamp")],
  important: true,
};
