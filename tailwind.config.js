module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#00266F",
      },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
  important: true, // semantic-uiに上書きされてしまうので、tailwindcssを最優先にする
};
