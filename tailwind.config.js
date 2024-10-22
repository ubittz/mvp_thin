const { colors: defaultColors } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  prefix: "tw-",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        main400: "#FBB037",
        main700: "#965E03",
        grayscale000: "#FFFFFF",
        grayscale050: "#F1F2F3",
        grayscale100: "#E4E5E7",
        grayscale200: "#C9CBCF",
        grayscale300: "#AEB1B7",
        grayscale400: "#93979F",
        grayscale500: "#787D87",
        grayscale600: "#60646C",
        grayscale700: "#484B51",
        grayscale800: "#303236",
        grayscale900: "#0C0C0E",
      },
    },
  },
  plugins: [],
};
