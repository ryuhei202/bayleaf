module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        themeGray: "#475156",
        clay: "#e8e7df",
        red: "#cb5f58",
      },
    },
    screens: {
      xs: { max: "330px" },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
  important: true, // semantic-uiに上書きされてしまうので、tailwindcssを最優先にする
};
