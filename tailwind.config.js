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
        lightBeige: "#F4F3EF",
        white: "#F6F6F6",
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
