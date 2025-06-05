/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        jokerGreen: "#2ebd59",
        jokerPurple: "#6a0dad",
        neutralDark: "#303030",
        neutralLight: "#d9d9d9",
        jokerGray: "#c0c0c0",
        jokerRed: "#ff0000",
        jokerWhite: "#f5f5f5"
      },
      animation: {
        glitch: "glitch 1s infinite linear",
      },
      keyframes: {
        glitch: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
