module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora"],
      },
      colors: {
        themeGray: "#475156",
        clay: "#e8e7df",
        red: "#cb5f58",
        gray: "#979B9A",
      },
    },
    screens: {
      xs: { max: "330px" },
    },
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
