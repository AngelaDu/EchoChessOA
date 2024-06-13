import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define your color palette for dark mode
        dark: {
          bg: "#322928",
          bgLight: "#58504f",
          highlight: "#8f323d",
          pop: "#862923",
          text: "#bfb5b4",
        },
        light: {
          bg: "#c0a99d",
          bgLight: "#E9DFD9",
          highlight: "#73000D",
          secondary: "#DCA685",
          primary: "#FDEDE2",
          transparent: "rgba(115,0,13, 0)",
        },
      },
    },
  },
  plugins: [],
}
export default config;
