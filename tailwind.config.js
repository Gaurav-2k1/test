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
        primary: "#02C39A",
        secondary: "#313189",
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

  plugins: [],
  important: true,
};
