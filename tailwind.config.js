const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
      title: ["'M PLUS Rounded 1c'", ...defaultTheme.fontFamily.sans],
    },
  },
};
